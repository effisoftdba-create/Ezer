const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.jsx') || name.endsWith('.js')) {
      files.push(name);
    }
  }
  return files;
}

const allFiles = getFiles('./frontend/src');
let invalidJSXTags = [];

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');

  // Find all component tags used in JSX: <UpperCamelCase ...> or <upperCamelCase.Child ...>
  // Exclude standard HTML elements (div, span, p, h1, etc.)
  const jsxTagMatches = content.matchAll(/<([A-Z][A-Za-z0-9_]*(\.[A-Z][A-Za-z0-9_]*)?)/g);
  const usedTags = new Set();
  for (const m of jsxTagMatches) {
    usedTags.add(m[1].split('.')[0]);
  }

  // Extract all imported identifiers in the file
  const importedIdentifiers = new Set();

  // Named imports: import { A, B as C } from '...'
  const namedImports = content.matchAll(/import\s+\{([^}]+)\}\s+from/g);
  for (const m of namedImports) {
    const items = m[1].split(',');
    for (const item of items) {
      const parts = item.trim().split(/\s+as\s+/);
      const importedAs = (parts[1] || parts[0]).trim();
      if (importedAs) importedIdentifiers.add(importedAs);
    }
  }

  // Default imports: import A from '...'
  const defaultImports = content.matchAll(/import\s+([A-Z][A-Za-z0-9_]*)\s+(,\s*\{[^}]+\}\s+)?from/g);
  for (const m of defaultImports) {
    if (m[1]) importedIdentifiers.add(m[1].trim());
  }

  // Local declarations: function A, const A, class A
  const localDecls = content.matchAll(/(function|const|let|var|class)\s+([A-Z][A-Za-z0-9_]*)/g);
  for (const m of localDecls) {
    if (m[2]) importedIdentifiers.add(m[2].trim());
  }

  for (const tag of usedTags) {
    // Exclude React fragments
    if (tag === 'React' || tag === 'Fragment' || tag === 'Suspense' || tag === 'Routes' || tag === 'Route' || tag === 'Link' || tag === 'NavLink') continue;
    if (!importedIdentifiers.has(tag)) {
      invalidJSXTags.push({ file, tag, issue: `JSX Tag <${tag}> is used but not imported or declared!` });
    }
  }
}

console.log('=== INVALID UNIMPORTED JSX TAGS ===');
console.log(JSON.stringify(invalidJSXTags, null, 2));
