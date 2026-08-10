const fs = require('fs');

const code = fs.readFileSync('./dist/assets/Home-DdwofmIE.js', 'utf8');

const idx = code.indexOf('Why EZER Learning Solution');
if (idx !== -1) {
  const funcStart = code.lastIndexOf('function', idx);
  console.log('=== WHY EZER FUNCTION DEFINITION IN Home CHUNK ===');
  console.log(code.slice(funcStart, funcStart + 300));
}
