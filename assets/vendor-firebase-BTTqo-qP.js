import{o as mm,R as rl}from"./vendor-l4IxzfbF.js";const gm=()=>{};var Vc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(n,e){if(!n)throw pr(e)},pr=function(n){return new Error("Firebase Database ("+_d.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ym=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(m=64)),r.push(t[f],t[p],t[m],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(md(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ym(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Em;const m=i<<2|l>>4;if(r.push(m),h!==64){const R=l<<4&240|h>>2;if(r.push(R),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gd=function(n){const e=md(n);return sl.encodeByteArray(e,!0)},Pi=function(n){return gd(n).replace(/\./g,"")},wa=function(n){try{return sl.decodeString(n,!0)}catch{}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n){return yd(void 0,n)}function yd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Tm(t)||(n[t]=yd(n[t],e[t]));return n}function Tm(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=()=>wm().__FIREBASE_DEFAULTS__,Am=()=>{if(typeof process>"u"||typeof Vc>"u")return;const n=Vc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&wa(n[1]);return e&&JSON.parse(e)},il=()=>{try{return gm()||Im()||Am()||Cm()}catch{return}},Rm=n=>il()?.emulatorHosts?.[n],Ed=n=>{const e=Rm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},vd=()=>il()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Pi(JSON.stringify(t)),Pi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Id(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wd())}function Sm(){const n=il()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bm(){return _d.NODE_ADMIN===!0}function Vm(){return!Sm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nm(){try{return typeof indexedDB=="object"}catch{return!1}}function xm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="FirebaseError";class _r extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Dm,Object.setPrototypeOf(this,_r.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ad.prototype.create)}}class Ad{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?km(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new _r(s,l,r)}}function km(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const o=n.substring(s+2,i),l=e[o];r+=n.substring(t,s)+(l!=null?String(l):`<${o}?>`),t=i+1}return r}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(n){return JSON.parse(n)}function be(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=us(wa(i[0])||""),t=us(wa(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},Om=function(n){const e=Cd(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Lm=function(n){const e=Cd(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function nr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Nc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bi(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function cs(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(xc(i)&&xc(o)){if(!cs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function xc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)r[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const m=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],h,f;for(let p=0;p<80;p++){p<40?p<20?(h=l^i&(o^l),f=1518500249):(h=i^o^l,f=1859775393):p<60?(h=i&o|l&(i|o),f=2400959708):(h=i^o^l,f=3395469782);const m=(s<<5|s>>>27)+h+u+f+r[p]&4294967295;u=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function ol(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,D(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},oo=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rd(n){return(await fetch(n,{credentials:"include"})).ok}class rr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new io;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jm(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qm(n){return n===En?void 0:n}function jm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Bm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Wm={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Gm=Z.INFO,zm={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Hm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=zm[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class al{constructor(e){this.name=e,this._logLevel=Gm,this._logHandler=Hm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Km(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Km(n){return n.getComponent()?.type==="VERSION"}const Ia="@firebase/app",Dc="0.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new al("@firebase/app"),Ym="@firebase/app-compat",Xm="@firebase/analytics-compat",Jm="@firebase/analytics",Zm="@firebase/app-check-compat",eg="@firebase/app-check",tg="@firebase/auth",ng="@firebase/auth-compat",rg="@firebase/database",sg="@firebase/data-connect",ig="@firebase/database-compat",og="@firebase/functions",ag="@firebase/functions-compat",lg="@firebase/installations",ug="@firebase/installations-compat",cg="@firebase/messaging",hg="@firebase/messaging-compat",dg="@firebase/performance",fg="@firebase/performance-compat",pg="@firebase/remote-config",_g="@firebase/remote-config-compat",mg="@firebase/storage",gg="@firebase/storage-compat",yg="@firebase/firestore",Eg="@firebase/ai",vg="@firebase/firestore-compat",Tg="firebase",wg="12.17.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="[DEFAULT]",Ig={[Ia]:"fire-core",[Ym]:"fire-core-compat",[Jm]:"fire-analytics",[Xm]:"fire-analytics-compat",[eg]:"fire-app-check",[Zm]:"fire-app-check-compat",[tg]:"fire-auth",[ng]:"fire-auth-compat",[rg]:"fire-rtdb",[sg]:"fire-data-connect",[ig]:"fire-rtdb-compat",[og]:"fire-fn",[ag]:"fire-fn-compat",[lg]:"fire-iid",[ug]:"fire-iid-compat",[cg]:"fire-fcm",[hg]:"fire-fcm-compat",[dg]:"fire-perf",[fg]:"fire-perf-compat",[pg]:"fire-rc",[_g]:"fire-rc-compat",[mg]:"fire-gcs",[gg]:"fire-gcs-compat",[yg]:"fire-fst",[vg]:"fire-fst-compat",[Eg]:"fire-vertex","fire-js":"fire-js",[Tg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new Map,Ag=new Map,Ca=new Map;function kc(n,e){try{n.container.addComponent(e)}catch(t){kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ds(n){const e=n.name;if(Ca.has(e))return kt.debug(`There were multiple attempts to register component ${e}.`),!1;Ca.set(e,n);for(const t of hs.values())kc(t,n);for(const t of Ag.values())kc(t,n);return!0}function Sd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Pd(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bt=new Ad("app","Firebase",Cg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=wg;function Sg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Aa,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw bt.create("bad-app-name",{appName:String(s)});if(t||(t=vd()),!t)throw bt.create("no-options");const i=hs.get(s);if(i)if(cs(t,i.options)){if(cs(r,i.config))return i;throw bt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw bt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new $m(s);for(const u of Ca.values())o.addComponent(u);const l=new Rg(t,r,o);return hs.set(s,l),l}function Vd(n=Aa){const e=hs.get(n);if(!e&&n===Aa&&vd())return Sg();if(!e)throw bt.create("no-app",{appName:n});return e}function KC(){return Array.from(hs.values())}function Ht(n,e,t){let r=Ig[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kt.warn(o.join(" "));return}ds(new rr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="firebase-heartbeat-database",bg=1,fs="firebase-heartbeat-store";let aa=null;function Nd(){return aa||(aa=mm(Pg,bg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fs)}catch{}}}}).catch(n=>{throw bt.create("idb-open",{originalErrorMessage:n.message})})),aa}async function Vg(n){try{const t=(await Nd()).transaction(fs),r=await t.objectStore(fs).get(xd(n));return await t.done,r}catch(e){if(e instanceof _r)kt.warn(e.message);else{const t=bt.create("idb-get",{originalErrorMessage:e?.message});kt.warn(t.message)}}}async function Oc(n,e){try{const r=(await Nd()).transaction(fs,"readwrite");await r.objectStore(fs).put(e,xd(n)),await r.done}catch(t){if(t instanceof _r)kt.warn(t.message);else{const r=bt.create("idb-set",{originalErrorMessage:t?.message});kt.warn(r.message)}}}function xd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=1024,xg=30;class Dg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Og(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>xg){const s=Lg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){kt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lc(),{heartbeatsToSend:t,unsentEntries:r}=kg(this._heartbeatsCache.heartbeats),s=Pi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return kt.warn(e),""}}}function Lc(){return new Date().toISOString().substring(0,10)}function kg(n,e=Ng){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Mc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Og{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nm()?xm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Vg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Oc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Oc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mc(n){return Pi(JSON.stringify({version:2,heartbeats:n})).length}function Lg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n){ds(new rr("platform-logger",e=>new Qm(e),"PRIVATE")),ds(new rr("heartbeat",e=>new Dg(e),"PRIVATE")),Ht(Ia,Dc,n),Ht(Ia,Dc,"esm2020"),Ht("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mg("");var Fg="firebase",Ug="12.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(Fg,Ug,"app");var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,Dd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function E(){}E.prototype=g.prototype,w.F=g.prototype,w.prototype=new E,w.prototype.constructor=w,w.D=function(I,T,C){for(var y=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)y[$e-2]=arguments[$e];return g.prototype[T].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,g,E){E||(E=0);const I=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)I[T]=g.charCodeAt(E++)|g.charCodeAt(E++)<<8|g.charCodeAt(E++)<<16|g.charCodeAt(E++)<<24;else for(T=0;T<16;++T)I[T]=g[E++]|g[E++]<<8|g[E++]<<16|g[E++]<<24;g=w.g[0],E=w.g[1],T=w.g[2];let C=w.g[3],y;y=g+(C^E&(T^C))+I[0]+3614090360&4294967295,g=E+(y<<7&4294967295|y>>>25),y=C+(T^g&(E^T))+I[1]+3905402710&4294967295,C=g+(y<<12&4294967295|y>>>20),y=T+(E^C&(g^E))+I[2]+606105819&4294967295,T=C+(y<<17&4294967295|y>>>15),y=E+(g^T&(C^g))+I[3]+3250441966&4294967295,E=T+(y<<22&4294967295|y>>>10),y=g+(C^E&(T^C))+I[4]+4118548399&4294967295,g=E+(y<<7&4294967295|y>>>25),y=C+(T^g&(E^T))+I[5]+1200080426&4294967295,C=g+(y<<12&4294967295|y>>>20),y=T+(E^C&(g^E))+I[6]+2821735955&4294967295,T=C+(y<<17&4294967295|y>>>15),y=E+(g^T&(C^g))+I[7]+4249261313&4294967295,E=T+(y<<22&4294967295|y>>>10),y=g+(C^E&(T^C))+I[8]+1770035416&4294967295,g=E+(y<<7&4294967295|y>>>25),y=C+(T^g&(E^T))+I[9]+2336552879&4294967295,C=g+(y<<12&4294967295|y>>>20),y=T+(E^C&(g^E))+I[10]+4294925233&4294967295,T=C+(y<<17&4294967295|y>>>15),y=E+(g^T&(C^g))+I[11]+2304563134&4294967295,E=T+(y<<22&4294967295|y>>>10),y=g+(C^E&(T^C))+I[12]+1804603682&4294967295,g=E+(y<<7&4294967295|y>>>25),y=C+(T^g&(E^T))+I[13]+4254626195&4294967295,C=g+(y<<12&4294967295|y>>>20),y=T+(E^C&(g^E))+I[14]+2792965006&4294967295,T=C+(y<<17&4294967295|y>>>15),y=E+(g^T&(C^g))+I[15]+1236535329&4294967295,E=T+(y<<22&4294967295|y>>>10),y=g+(T^C&(E^T))+I[1]+4129170786&4294967295,g=E+(y<<5&4294967295|y>>>27),y=C+(E^T&(g^E))+I[6]+3225465664&4294967295,C=g+(y<<9&4294967295|y>>>23),y=T+(g^E&(C^g))+I[11]+643717713&4294967295,T=C+(y<<14&4294967295|y>>>18),y=E+(C^g&(T^C))+I[0]+3921069994&4294967295,E=T+(y<<20&4294967295|y>>>12),y=g+(T^C&(E^T))+I[5]+3593408605&4294967295,g=E+(y<<5&4294967295|y>>>27),y=C+(E^T&(g^E))+I[10]+38016083&4294967295,C=g+(y<<9&4294967295|y>>>23),y=T+(g^E&(C^g))+I[15]+3634488961&4294967295,T=C+(y<<14&4294967295|y>>>18),y=E+(C^g&(T^C))+I[4]+3889429448&4294967295,E=T+(y<<20&4294967295|y>>>12),y=g+(T^C&(E^T))+I[9]+568446438&4294967295,g=E+(y<<5&4294967295|y>>>27),y=C+(E^T&(g^E))+I[14]+3275163606&4294967295,C=g+(y<<9&4294967295|y>>>23),y=T+(g^E&(C^g))+I[3]+4107603335&4294967295,T=C+(y<<14&4294967295|y>>>18),y=E+(C^g&(T^C))+I[8]+1163531501&4294967295,E=T+(y<<20&4294967295|y>>>12),y=g+(T^C&(E^T))+I[13]+2850285829&4294967295,g=E+(y<<5&4294967295|y>>>27),y=C+(E^T&(g^E))+I[2]+4243563512&4294967295,C=g+(y<<9&4294967295|y>>>23),y=T+(g^E&(C^g))+I[7]+1735328473&4294967295,T=C+(y<<14&4294967295|y>>>18),y=E+(C^g&(T^C))+I[12]+2368359562&4294967295,E=T+(y<<20&4294967295|y>>>12),y=g+(E^T^C)+I[5]+4294588738&4294967295,g=E+(y<<4&4294967295|y>>>28),y=C+(g^E^T)+I[8]+2272392833&4294967295,C=g+(y<<11&4294967295|y>>>21),y=T+(C^g^E)+I[11]+1839030562&4294967295,T=C+(y<<16&4294967295|y>>>16),y=E+(T^C^g)+I[14]+4259657740&4294967295,E=T+(y<<23&4294967295|y>>>9),y=g+(E^T^C)+I[1]+2763975236&4294967295,g=E+(y<<4&4294967295|y>>>28),y=C+(g^E^T)+I[4]+1272893353&4294967295,C=g+(y<<11&4294967295|y>>>21),y=T+(C^g^E)+I[7]+4139469664&4294967295,T=C+(y<<16&4294967295|y>>>16),y=E+(T^C^g)+I[10]+3200236656&4294967295,E=T+(y<<23&4294967295|y>>>9),y=g+(E^T^C)+I[13]+681279174&4294967295,g=E+(y<<4&4294967295|y>>>28),y=C+(g^E^T)+I[0]+3936430074&4294967295,C=g+(y<<11&4294967295|y>>>21),y=T+(C^g^E)+I[3]+3572445317&4294967295,T=C+(y<<16&4294967295|y>>>16),y=E+(T^C^g)+I[6]+76029189&4294967295,E=T+(y<<23&4294967295|y>>>9),y=g+(E^T^C)+I[9]+3654602809&4294967295,g=E+(y<<4&4294967295|y>>>28),y=C+(g^E^T)+I[12]+3873151461&4294967295,C=g+(y<<11&4294967295|y>>>21),y=T+(C^g^E)+I[15]+530742520&4294967295,T=C+(y<<16&4294967295|y>>>16),y=E+(T^C^g)+I[2]+3299628645&4294967295,E=T+(y<<23&4294967295|y>>>9),y=g+(T^(E|~C))+I[0]+4096336452&4294967295,g=E+(y<<6&4294967295|y>>>26),y=C+(E^(g|~T))+I[7]+1126891415&4294967295,C=g+(y<<10&4294967295|y>>>22),y=T+(g^(C|~E))+I[14]+2878612391&4294967295,T=C+(y<<15&4294967295|y>>>17),y=E+(C^(T|~g))+I[5]+4237533241&4294967295,E=T+(y<<21&4294967295|y>>>11),y=g+(T^(E|~C))+I[12]+1700485571&4294967295,g=E+(y<<6&4294967295|y>>>26),y=C+(E^(g|~T))+I[3]+2399980690&4294967295,C=g+(y<<10&4294967295|y>>>22),y=T+(g^(C|~E))+I[10]+4293915773&4294967295,T=C+(y<<15&4294967295|y>>>17),y=E+(C^(T|~g))+I[1]+2240044497&4294967295,E=T+(y<<21&4294967295|y>>>11),y=g+(T^(E|~C))+I[8]+1873313359&4294967295,g=E+(y<<6&4294967295|y>>>26),y=C+(E^(g|~T))+I[15]+4264355552&4294967295,C=g+(y<<10&4294967295|y>>>22),y=T+(g^(C|~E))+I[6]+2734768916&4294967295,T=C+(y<<15&4294967295|y>>>17),y=E+(C^(T|~g))+I[13]+1309151649&4294967295,E=T+(y<<21&4294967295|y>>>11),y=g+(T^(E|~C))+I[4]+4149444226&4294967295,g=E+(y<<6&4294967295|y>>>26),y=C+(E^(g|~T))+I[11]+3174756917&4294967295,C=g+(y<<10&4294967295|y>>>22),y=T+(g^(C|~E))+I[2]+718787259&4294967295,T=C+(y<<15&4294967295|y>>>17),y=E+(C^(T|~g))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.v=function(w,g){g===void 0&&(g=w.length);const E=g-this.blockSize,I=this.C;let T=this.h,C=0;for(;C<g;){if(T==0)for(;C<=E;)s(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<g;)if(I[T++]=w.charCodeAt(C++),T==this.blockSize){s(this,I),T=0;break}}else for(;C<g;)if(I[T++]=w[C++],T==this.blockSize){s(this,I),T=0;break}}this.h=T,this.o+=g},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;g=this.o*8;for(var E=w.length-8;E<w.length;++E)w[E]=g&255,g/=256;for(this.v(w),w=Array(16),g=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)w[g++]=this.g[E]>>>I&255;return w};function i(w,g){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=g(w)}function o(w,g){this.h=g;const E=[];let I=!0;for(let T=w.length-1;T>=0;T--){const C=w[T]|0;I&&C==g||(E[T]=C,I=!1)}this.g=E}var l={};function u(w){return-128<=w&&w<128?i(w,function(g){return new o([g|0],g<0?-1:0)}):new o([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return L(h(-w));const g=[];let E=1;for(let I=0;w>=E;I++)g[I]=w/E|0,E*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return L(f(w.substring(1),g));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(g,8));let I=p;for(let C=0;C<w.length;C+=8){var T=Math.min(8,w.length-C);const y=parseInt(w.substring(C,C+T),g);T<8?(T=h(Math.pow(g,T)),I=I.j(T).add(h(y))):(I=I.j(E),I=I.add(h(y)))}return I}var p=u(0),m=u(1),R=u(16777216);n=o.prototype,n.m=function(){if(k(this))return-L(this).m();let w=0,g=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);w+=(I>=0?I:4294967296+I)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(k(this))return"-"+L(this).toString(w);const g=h(Math.pow(w,6));var E=this;let I="";for(;;){const T=ke(E,g).g;E=z(E,T.j(g));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(w);if(E=T,P(E))return C+I;for(;C.length<6;)C="0"+C;I=C+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(let g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function k(w){return w.h==-1}n.l=function(w){return w=z(this,w),k(w)?-1:P(w)?0:1};function L(w){const g=w.g.length,E=[];for(let I=0;I<g;I++)E[I]=~w.g[I];return new o(E,~w.h).add(m)}n.abs=function(){return k(this)?L(this):this},n.add=function(w){const g=Math.max(this.g.length,w.g.length),E=[];let I=0;for(let T=0;T<=g;T++){let C=I+(this.i(T)&65535)+(w.i(T)&65535),y=(C>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);I=y>>>16,C&=65535,y&=65535,E[T]=y<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function z(w,g){return w.add(L(g))}n.j=function(w){if(P(this)||P(w))return p;if(k(this))return k(w)?L(this).j(L(w)):L(L(this).j(w));if(k(w))return L(this.j(L(w)));if(this.l(R)<0&&w.l(R)<0)return h(this.m()*w.m());const g=this.g.length+w.g.length,E=[];for(var I=0;I<2*g;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let T=0;T<w.g.length;T++){const C=this.i(I)>>>16,y=this.i(I)&65535,$e=w.i(T)>>>16,fn=w.i(T)&65535;E[2*I+2*T]+=y*fn,te(E,2*I+2*T),E[2*I+2*T+1]+=C*fn,te(E,2*I+2*T+1),E[2*I+2*T+1]+=y*$e,te(E,2*I+2*T+1),E[2*I+2*T+2]+=C*$e,te(E,2*I+2*T+2)}for(w=0;w<g;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=g;w<2*g;w++)E[w]=0;return new o(E,0)};function te(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function oe(w,g){this.g=w,this.h=g}function ke(w,g){if(P(g))throw Error("division by zero");if(P(w))return new oe(p,p);if(k(w))return g=ke(L(w),g),new oe(L(g.g),L(g.h));if(k(g))return g=ke(w,L(g)),new oe(L(g.g),g.h);if(w.g.length>30){if(k(w)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=g;I.l(w)<=0;)E=ut(E),I=ut(I);var T=Ne(E,1),C=Ne(I,1);for(I=Ne(I,2),E=Ne(E,2);!P(I);){var y=C.add(I);y.l(w)<=0&&(T=T.add(E),C=y),I=Ne(I,1),E=Ne(E,1)}return g=z(w,T.j(g)),new oe(T,g)}for(T=p;w.l(g)>=0;){for(E=Math.max(1,Math.floor(w.m()/g.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),C=h(E),y=C.j(g);k(y)||y.l(w)>0;)E-=I,C=h(E),y=C.j(g);P(C)&&(C=m),T=T.add(C),w=z(w,y)}return new oe(T,w)}n.B=function(w){return ke(this,w).h},n.and=function(w){const g=Math.max(this.g.length,w.g.length),E=[];for(let I=0;I<g;I++)E[I]=this.i(I)&w.i(I);return new o(E,this.h&w.h)},n.or=function(w){const g=Math.max(this.g.length,w.g.length),E=[];for(let I=0;I<g;I++)E[I]=this.i(I)|w.i(I);return new o(E,this.h|w.h)},n.xor=function(w){const g=Math.max(this.g.length,w.g.length),E=[];for(let I=0;I<g;I++)E[I]=this.i(I)^w.i(I);return new o(E,this.h^w.h)};function ut(w){const g=w.g.length+1,E=[];for(let I=0;I<g;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new o(E,w.h)}function Ne(w,g){const E=g>>5;g%=32;const I=w.g.length-E,T=[];for(let C=0;C<I;C++)T[C]=g>0?w.i(C+E)>>>g|w.i(C+E+1)<<32-g:w.i(C+E);return new o(T,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Dd=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Qt=o}).apply(typeof Fc<"u"?Fc:typeof self<"u"?self:typeof window<"u"?window:{});var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kd,Qr,Od,Ti,Ra,Ld,Md,Fd;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fi=="object"&&fi];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var A=a[_];if(!(A in d))break e;d=d[A]}a=a[a.length-1],_=d[a],c=c(_),c!=_&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],_;for(_ in c)Object.prototype.hasOwnProperty.call(c,_)&&d.push([_,c[_]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(_,A,S){for(var O=Array(arguments.length-2),H=2;H<arguments.length;H++)O[H-2]=arguments[H];return c.prototype[A].apply(_,O)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function R(a){const c=a.length;if(c>0){const d=Array(c);for(let _=0;_<c;_++)d[_]=a[_];return d}return[]}function P(a,c){for(let _=1;_<arguments.length;_++){const A=arguments[_];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=a.length||0;const S=A.length||0;a.length=d+S;for(let O=0;O<S;O++)a[d+O]=A[O]}else a.push(A)}}class k{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(a){o.setTimeout(()=>{throw a},0)}function z(){var a=w;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class te{constructor(){this.h=this.g=null}add(c,d){const _=oe.get();_.set(c,d),this.h?this.h.next=_:this.g=_,this.h=_}}var oe=new k(()=>new ke,a=>a.reset());class ke{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,Ne=!1,w=new te,g=()=>{const a=Promise.resolve(void 0);ut=()=>{a.then(E)}};function E(){for(var a;a=z();){try{a.h.call(a.g)}catch(d){L(d)}var c=oe;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}Ne=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function y(a){return/^[\s\xa0]*$/.test(a)}function $e(a,c){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p($e,T),$e.prototype.init=function(a,c){const d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fn="closure_listenable_"+(Math.random()*1e6|0),F_=0;function U_(a,c,d,_,A){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!_,this.ha=A,this.key=++F_,this.da=this.fa=!1}function Js(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Zs(a,c,d){for(const _ in a)c.call(d,a[_],_,a)}function B_(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function bu(a){const c={};for(const d in a)c[d]=a[d];return c}const Vu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nu(a,c){let d,_;for(let A=1;A<arguments.length;A++){_=arguments[A];for(d in _)a[d]=_[d];for(let S=0;S<Vu.length;S++)d=Vu[S],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function ei(a){this.src=a,this.g={},this.h=0}ei.prototype.add=function(a,c,d,_,A){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const O=Fo(a,c,_,A);return O>-1?(c=a[O],d||(c.fa=!1)):(c=new U_(c,this.src,S,!!_,A),c.fa=d,a.push(c)),c};function Mo(a,c){const d=c.type;if(d in a.g){var _=a.g[d],A=Array.prototype.indexOf.call(_,c,void 0),S;(S=A>=0)&&Array.prototype.splice.call(_,A,1),S&&(Js(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Fo(a,c,d,_){for(let A=0;A<a.length;++A){const S=a[A];if(!S.da&&S.listener==c&&S.capture==!!d&&S.ha==_)return A}return-1}var Uo="closure_lm_"+(Math.random()*1e6|0),Bo={};function xu(a,c,d,_,A){if(Array.isArray(c)){for(let S=0;S<c.length;S++)xu(a,c[S],d,_,A);return null}return d=Ou(d),a&&a[fn]?a.J(c,d,l(_)?!!_.capture:!1,A):q_(a,c,d,!1,_,A)}function q_(a,c,d,_,A,S){if(!c)throw Error("Invalid event type");const O=l(A)?!!A.capture:!!A;let H=jo(a);if(H||(a[Uo]=H=new ei(a)),d=H.add(c,d,_,O,S),d.proxy)return d;if(_=j_(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)C||(A=O),A===void 0&&(A=!1),a.addEventListener(c.toString(),_,A);else if(a.attachEvent)a.attachEvent(ku(c.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function j_(){function a(d){return c.call(a.src,a.listener,d)}const c=$_;return a}function Du(a,c,d,_,A){if(Array.isArray(c))for(var S=0;S<c.length;S++)Du(a,c[S],d,_,A);else _=l(_)?!!_.capture:!!_,d=Ou(d),a&&a[fn]?(a=a.i,S=String(c).toString(),S in a.g&&(c=a.g[S],d=Fo(c,d,_,A),d>-1&&(Js(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[S],a.h--)))):a&&(a=jo(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Fo(c,d,_,A)),(d=a>-1?c[a]:null)&&qo(d))}function qo(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[fn])Mo(c.i,a);else{var d=a.type,_=a.proxy;c.removeEventListener?c.removeEventListener(d,_,a.capture):c.detachEvent?c.detachEvent(ku(d),_):c.addListener&&c.removeListener&&c.removeListener(_),(d=jo(c))?(Mo(d,a),d.h==0&&(d.src=null,c[Uo]=null)):Js(a)}}}function ku(a){return a in Bo?Bo[a]:Bo[a]="on"+a}function $_(a,c){if(a.da)a=!0;else{c=new $e(c,this);const d=a.listener,_=a.ha||a.src;a.fa&&qo(a),a=d.call(_,c)}return a}function jo(a){return a=a[Uo],a instanceof ei?a:null}var $o="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ou(a){return typeof a=="function"?a:(a[$o]||(a[$o]=function(c){return a.handleEvent(c)}),a[$o])}function Oe(){I.call(this),this.i=new ei(this),this.M=this,this.G=null}p(Oe,I),Oe.prototype[fn]=!0,Oe.prototype.removeEventListener=function(a,c,d,_){Du(this,a,c,d,_)};function qe(a,c){var d,_=a.G;if(_)for(d=[];_;_=_.G)d.push(_);if(a=a.M,_=c.type||c,typeof c=="string")c=new T(c,a);else if(c instanceof T)c.target=c.target||a;else{var A=c;c=new T(_,a),Nu(c,A)}A=!0;let S,O;if(d)for(O=d.length-1;O>=0;O--)S=c.g=d[O],A=ti(S,_,!0,c)&&A;if(S=c.g=a,A=ti(S,_,!0,c)&&A,A=ti(S,_,!1,c)&&A,d)for(O=0;O<d.length;O++)S=c.g=d[O],A=ti(S,_,!1,c)&&A}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let _=0;_<d.length;_++)Js(d[_]);delete a.g[c],a.h--}}this.G=null},Oe.prototype.J=function(a,c,d,_){return this.i.add(String(a),c,!1,d,_)},Oe.prototype.K=function(a,c,d,_){return this.i.add(String(a),c,!0,d,_)};function ti(a,c,d,_){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let S=0;S<c.length;++S){const O=c[S];if(O&&!O.da&&O.capture==d){const H=O.listener,Te=O.ha||O.src;O.fa&&Mo(a.i,O),A=H.call(Te,_)!==!1&&A}}return A&&!_.defaultPrevented}function W_(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Lu(a){a.g=W_(()=>{a.g=null,a.i&&(a.i=!1,Lu(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class G_ extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Lu(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rr(a){I.call(this),this.h=a,this.g={}}p(Rr,I);var Mu=[];function Fu(a){Zs(a.g,function(c,d){this.g.hasOwnProperty(d)&&qo(c)},a),a.g={}}Rr.prototype.N=function(){Rr.Z.N.call(this),Fu(this)},Rr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wo=o.JSON.stringify,z_=o.JSON.parse,H_=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Uu(){}function Bu(){}var Sr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Go(){T.call(this,"d")}p(Go,T);function zo(){T.call(this,"c")}p(zo,T);var pn={},qu=null;function ni(){return qu=qu||new Oe}pn.Ia="serverreachability";function ju(a){T.call(this,pn.Ia,a)}p(ju,T);function Pr(a){const c=ni();qe(c,new ju(c))}pn.STAT_EVENT="statevent";function $u(a,c){T.call(this,pn.STAT_EVENT,a),this.stat=c}p($u,T);function je(a){const c=ni();qe(c,new $u(c,a))}pn.Ja="timingevent";function Wu(a,c){T.call(this,pn.Ja,a),this.size=c}p(Wu,T);function br(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function Vr(){this.g=!0}Vr.prototype.ua=function(){this.g=!1};function Q_(a,c,d,_,A,S){a.info(function(){if(a.g)if(S){var O="",H=S.split("&");for(let se=0;se<H.length;se++){var Te=H[se].split("=");if(Te.length>1){const Ce=Te[0];Te=Te[1];const yt=Ce.split("_");O=yt.length>=2&&yt[1]=="type"?O+(Ce+"="+Te+"&"):O+(Ce+"=redacted&")}}}else O=null;else O=S;return"XMLHTTP REQ ("+_+") [attempt "+A+"]: "+c+`
`+d+`
`+O})}function K_(a,c,d,_,A,S,O){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+A+"]: "+c+`
`+d+`
`+S+" "+O})}function qn(a,c,d,_){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+X_(a,d)+(_?" "+_:"")})}function Y_(a,c){a.info(function(){return"TIMEOUT: "+c})}Vr.prototype.info=function(){};function X_(a,c){if(!a.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var _=d[1];if(Array.isArray(_)&&!(_.length<1)){var A=_[0];if(A!="noop"&&A!="stop"&&A!="close")for(let O=1;O<_.length;O++)_[O]=""}}}}return Wo(S)}catch{return c}}var ri={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},zu;function Ho(){}p(Ho,Uu),Ho.prototype.g=function(){return new XMLHttpRequest},zu=new Ho;function Nr(a){return encodeURIComponent(String(a))}function J_(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Bt(a,c,d,_){this.j=a,this.i=c,this.l=d,this.S=_||1,this.V=new Rr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hu}function Hu(){this.i=null,this.g="",this.h=!1}var Qu={},Qo={};function Ko(a,c,d){a.M=1,a.A=ii(gt(c)),a.u=d,a.R=!0,Ku(a,null)}function Ku(a,c){a.F=Date.now(),si(a),a.B=gt(a.A);var d=a.B,_=a.S;Array.isArray(_)||(_=[String(_)]),lc(d.i,"t",_),a.C=0,d=a.j.L,a.h=new Hu,a.g=Rc(a.j,d?c:null,!a.u),a.P>0&&(a.O=new G_(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,_=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Mu[0]=A.toString()),A=Mu);for(let S=0;S<A.length;S++){const O=xu(d,A[S],_||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=a.J?bu(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),Pr(),Q_(a.i,a.v,a.B,a.l,a.S,a.u)}Bt.prototype.ba=function(a){a=a.target;const c=this.O;c&&$t(a)==3?c.j():this.Y(a)},Bt.prototype.Y=function(a){try{if(a==this.g)e:{const H=$t(this.g),Te=this.g.ya(),se=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||_c(this.g)))){this.K||H!=4||Te==7||(Te==8||se<=0?Pr(3):Pr(2)),Yo(this);var c=this.g.ca();this.X=c;var d=Z_(this);if(this.o=c==200,K_(this.i,this.v,this.B,this.l,this.S,H,c),this.o){if(this.U&&!this.L){t:{if(this.g){var _,A=this.g;if((_=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(_)){var S=_;break t}}S=null}if(a=S)qn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xo(this,a);else{this.o=!1,this.m=3,je(12),_n(this),xr(this);break e}}if(this.R){a=!0;let Ce;for(;!this.K&&this.C<d.length;)if(Ce=em(this,d),Ce==Qo){H==4&&(this.m=4,je(14),a=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==Qu){this.m=4,je(15),qn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else qn(this.i,this.l,Ce,null),Xo(this,Ce);if(Yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||d.length!=0||this.h.h||(this.m=1,je(16),a=!1),this.o=this.o&&a,!a)qn(this.i,this.l,d,"[Invalid Chunked Response]"),_n(this),xr(this);else if(d.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ia(O),O.P=!0,je(11))}}else qn(this.i,this.l,d,null),Xo(this,d);H==4&&_n(this),this.o&&!this.K&&(H==4?wc(this.j,this):(this.o=!1,si(this)))}else pm(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,je(12)):(this.m=0,je(13)),_n(this),xr(this)}}}catch{}finally{}};function Z_(a){if(!Yu(a))return a.g.la();const c=_c(a.g);if(c==="")return"";let d="";const _=c.length,A=$t(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return _n(a),xr(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<_;S++)a.h.h=!0,d+=a.h.i.decode(c[S],{stream:!(A&&S==_-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Yu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function em(a,c){var d=a.C,_=c.indexOf(`
`,d);return _==-1?Qo:(d=Number(c.substring(d,_)),isNaN(d)?Qu:(_+=1,_+d>c.length?Qo:(c=c.slice(_,_+d),a.C=_+d,c)))}Bt.prototype.cancel=function(){this.K=!0,_n(this)};function si(a){a.T=Date.now()+a.H,Xu(a,a.H)}function Xu(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=br(h(a.aa,a),c)}function Yo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Bt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Y_(this.i,this.B),this.M!=2&&(Pr(),je(17)),_n(this),this.m=2,xr(this)):Xu(this,this.T-a)};function xr(a){a.j.I==0||a.K||wc(a.j,a)}function _n(a){Yo(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Fu(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Xo(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Jo(d.h,a))){if(!a.L&&Jo(d.h,a)&&d.I==3){try{var _=d.Ba.g.parse(c)}catch{_=null}if(Array.isArray(_)&&_.length==3){var A=_;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)ci(d),li(d);else break e;sa(d),je(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=br(h(d.Va,d),6e3));ec(d.h)<=1&&d.ta&&(d.ta=void 0)}else gn(d,11)}else if((a.L||d.g==a)&&ci(d),!y(c))for(A=d.Ba.g.parse(c),c=0;c<A.length;c++){let se=A[c];const Ce=se[0];if(!(Ce<=d.K))if(d.K=Ce,se=se[1],d.I==2)if(se[0]=="c"){d.M=se[1],d.ba=se[2];const yt=se[3];yt!=null&&(d.ka=yt,d.j.info("VER="+d.ka));const yn=se[4];yn!=null&&(d.za=yn,d.j.info("SVER="+d.za));const Wt=se[5];Wt!=null&&typeof Wt=="number"&&Wt>0&&(_=1.5*Wt,d.O=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Gt=a.g;if(Gt){const di=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(di){var S=_.h;S.g||di.indexOf("spdy")==-1&&di.indexOf("quic")==-1&&di.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Zo(S,S.h),S.h=null))}if(_.G){const oa=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(_.wa=oa,le(_.J,_.G,oa))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),_=d;var O=a;if(_.na=Cc(_,_.L?_.ba:null,_.W),O.L){tc(_.h,O);var H=O,Te=_.O;Te&&(H.H=Te),H.D&&(Yo(H),si(H)),_.g=O}else vc(_);d.i.length>0&&ui(d)}else se[0]!="stop"&&se[0]!="close"||gn(d,7);else d.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?gn(d,7):ra(d):se[0]!="noop"&&d.l&&d.l.qa(se),d.A=0)}}Pr(4)}catch{}}var tm=class{constructor(a,c){this.g=a,this.map=c}};function Ju(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ec(a){return a.h?1:a.g?a.g.size:0}function Jo(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Zo(a,c){a.g?a.g.add(c):a.h=c}function tc(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Ju.prototype.cancel=function(){if(this.i=nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return R(a.i)}var rc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nm(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const _=a[d].indexOf("=");let A,S=null;_>=0?(A=a[d].substring(0,_),S=a[d].substring(_+1)):A=a[d],c(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function qt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof qt?(this.l=a.l,Dr(this,a.j),this.o=a.o,this.g=a.g,kr(this,a.u),this.h=a.h,ea(this,uc(a.i)),this.m=a.m):a&&(c=String(a).match(rc))?(this.l=!1,Dr(this,c[1]||"",!0),this.o=Or(c[2]||""),this.g=Or(c[3]||"",!0),kr(this,c[4]),this.h=Or(c[5]||"",!0),ea(this,c[6]||"",!0),this.m=Or(c[7]||"")):(this.l=!1,this.i=new Mr(null,this.l))}qt.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(Lr(c,sc,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Lr(c,sc,!0),"@"),a.push(Nr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Lr(d,d.charAt(0)=="/"?im:sm,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Lr(d,am)),a.join("")},qt.prototype.resolve=function(a){const c=gt(this);let d=!!a.j;d?Dr(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var _=a.h;if(d)kr(c,a.u);else if(d=!!a.h){if(_.charAt(0)!="/")if(this.g&&!this.h)_="/"+_;else{var A=c.h.lastIndexOf("/");A!=-1&&(_=c.h.slice(0,A+1)+_)}if(A=_,A==".."||A==".")_="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){_=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let O=0;O<A.length;){const H=A[O++];H=="."?_&&O==A.length&&S.push(""):H==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),_&&O==A.length&&S.push("")):(S.push(H),_=!0)}_=S.join("/")}else _=A}return d?c.h=_:d=a.i.toString()!=="",d?ea(c,uc(a.i)):d=!!a.m,d&&(c.m=a.m),c};function gt(a){return new qt(a)}function Dr(a,c,d){a.j=d?Or(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function kr(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function ea(a,c,d){c instanceof Mr?(a.i=c,lm(a.i,a.l)):(d||(c=Lr(c,om)),a.i=new Mr(c,a.l))}function le(a,c,d){a.i.set(c,d)}function ii(a){return le(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Or(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Lr(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,rm),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sc=/[#\/\?@]/g,sm=/[#\?:]/g,im=/[#\?]/g,om=/[#\?@]/g,am=/#/g;function Mr(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function mn(a){a.g||(a.g=new Map,a.h=0,a.i&&nm(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Mr.prototype,n.add=function(a,c){mn(this),this.i=null,a=jn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function ic(a,c){mn(a),c=jn(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function oc(a,c){return mn(a),c=jn(a,c),a.g.has(c)}n.forEach=function(a,c){mn(this),this.g.forEach(function(d,_){d.forEach(function(A){a.call(c,A,_,this)},this)},this)};function ac(a,c){mn(a);let d=[];if(typeof c=="string")oc(a,c)&&(d=d.concat(a.g.get(jn(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}n.set=function(a,c){return mn(this),this.i=null,a=jn(this,a),oc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},n.get=function(a,c){return a?(a=ac(this,a),a.length>0?String(a[0]):c):c};function lc(a,c,d){ic(a,c),d.length>0&&(a.i=null,a.g.set(jn(a,c),R(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let _=0;_<c.length;_++){var d=c[_];const A=Nr(d);d=ac(this,d);for(let S=0;S<d.length;S++){let O=A;d[S]!==""&&(O+="="+Nr(d[S])),a.push(O)}}return this.i=a.join("&")};function uc(a){const c=new Mr;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function jn(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function lm(a,c){c&&!a.j&&(mn(a),a.i=null,a.g.forEach(function(d,_){const A=_.toLowerCase();_!=A&&(ic(this,_),lc(this,A,d))},a)),a.j=c}function um(a,c){const d=new Vr;if(o.Image){const _=new Image;_.onload=f(jt,d,"TestLoadImage: loaded",!0,c,_),_.onerror=f(jt,d,"TestLoadImage: error",!1,c,_),_.onabort=f(jt,d,"TestLoadImage: abort",!1,c,_),_.ontimeout=f(jt,d,"TestLoadImage: timeout",!1,c,_),o.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else c(!1)}function cm(a,c){const d=new Vr,_=new AbortController,A=setTimeout(()=>{_.abort(),jt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:_.signal}).then(S=>{clearTimeout(A),S.ok?jt(d,"TestPingServer: ok",!0,c):jt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),jt(d,"TestPingServer: error",!1,c)})}function jt(a,c,d,_,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),_(d)}catch{}}function hm(){this.g=new H_}function ta(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ta,Uu),ta.prototype.g=function(){return new oi(this.i,this.h)};function oi(a,c){Oe.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(oi,Oe),n=oi.prototype,n.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Ur(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ur(this)),this.g&&(this.readyState=3,Ur(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;cc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function cc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Fr(this):Ur(this),this.readyState==3&&cc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Fr(this))},n.Na=function(a){this.g&&(this.response=a,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ur(a)}n.setRequestHeader=function(a,c){this.A.append(a,c)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ur(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hc(a){let c="";return Zs(a,function(d,_){c+=_,c+=":",c+=d,c+=`\r
`}),c}function na(a,c,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=hc(d),typeof a=="string"?d!=null&&Nr(d):le(a,c,d))}function de(a){Oe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(de,Oe);var dm=/^https?$/i,fm=["POST","PUT"];n=de.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,c,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():zu.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(S){dc(this,S);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var A in _)d.set(A,_[A]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const S of _.keys())d.set(S,_.get(S));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(fm,c,void 0)>=0)||_||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,O]of d)this.g.setRequestHeader(S,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){dc(this,S)}};function dc(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,fc(a),ai(a)}function fc(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,qe(this,"complete"),qe(this,"abort"),ai(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ai(this,!0)),de.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?pc(this):this.Xa())},n.Xa=function(){pc(this)};function pc(a){if(a.h&&typeof i<"u"){if(a.v&&$t(a)==4)setTimeout(a.Ca.bind(a),0);else if(qe(a,"readystatechange"),$t(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var _;if(_=S===0){let O=String(a.D).match(rc)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),_=!dm.test(O?O.toLowerCase():"")}d=_}if(d)qe(a,"complete"),qe(a,"success");else{a.o=6;try{var A=$t(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",fc(a)}}finally{ai(a)}}}}function ai(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||qe(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function $t(a){return a.g?a.g.readyState:0}n.ca=function(){try{return $t(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),z_(c)}};function _c(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pm(a){const c={};a=(a.g&&$t(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(y(a[_]))continue;var d=J_(a[_]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=c[A]||[];c[A]=S,S.push(d)}B_(c,function(_){return _.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Br(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function mc(a){this.za=0,this.i=[],this.j=new Vr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Br("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Br("baseRetryDelayMs",5e3,a),this.Za=Br("retryDelaySeedMs",1e4,a),this.Ta=Br("forwardChannelMaxRetries",2,a),this.va=Br("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ju(a&&a.concurrentRequestLimit),this.Ba=new hm,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=mc.prototype,n.ka=8,n.I=1,n.connect=function(a,c,d,_){je(0),this.W=a,this.H=c||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.J=Cc(this,null,this.W),ui(this)};function ra(a){if(gc(a),a.I==3){var c=a.V++,d=gt(a.J);if(le(d,"SID",a.M),le(d,"RID",c),le(d,"TYPE","terminate"),qr(a,d),c=new Bt(a,a.j,c),c.M=2,c.A=ii(gt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Rc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),si(c)}Ac(a)}function li(a){a.g&&(ia(a),a.g.cancel(),a.g=null)}function gc(a){li(a),a.v&&(o.clearTimeout(a.v),a.v=null),ci(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ui(a){if(!Zu(a.h)&&!a.m){a.m=!0;var c=a.Ea;ut||g(),Ne||(ut(),Ne=!0),w.add(c,a),a.D=0}}function _m(a,c){return ec(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=br(h(a.Ea,a,c),Ic(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new Bt(this,this.j,a);let S=this.o;if(this.U&&(S?(S=bu(S),Nu(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(c+=_,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ec(this,A,c),d=gt(this.J),le(d,"RID",a),le(d,"CVER",22),this.G&&le(d,"X-HTTP-Session-Id",this.G),qr(this,d),S&&(this.R?c="headers="+Nr(hc(S))+"&"+c:this.u&&na(d,this.u,S)),Zo(this.h,A),this.Ra&&le(d,"TYPE","init"),this.S?(le(d,"$req",c),le(d,"SID","null"),A.U=!0,Ko(A,d,null)):Ko(A,d,c),this.I=2}}else this.I==3&&(a?yc(this,a):this.i.length==0||Zu(this.h)||yc(this))};function yc(a,c){var d;c?d=c.l:d=a.V++;const _=gt(a.J);le(_,"SID",a.M),le(_,"RID",d),le(_,"AID",a.K),qr(a,_),a.u&&a.o&&na(_,a.u,a.o),d=new Bt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Ec(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Zo(a.h,d),Ko(d,_,c)}function qr(a,c){a.H&&Zs(a.H,function(d,_){le(c,_,d)}),a.l&&Zs({},function(d,_){le(c,_,d)})}function Ec(a,c,d){d=Math.min(a.i.length,d);const _=a.l?h(a.l.Ka,a.l,a):null;e:{var A=a.i;let H=-1;for(;;){const Te=["count="+d];H==-1?d>0?(H=A[0].g,Te.push("ofs="+H)):H=0:Te.push("ofs="+H);let se=!0;for(let Ce=0;Ce<d;Ce++){var S=A[Ce].g;const yt=A[Ce].map;if(S-=H,S<0)H=Math.max(0,A[Ce].g-100),se=!1;else try{S="req"+S+"_"||"";try{var O=yt instanceof Map?yt:Object.entries(yt);for(const[yn,Wt]of O){let Gt=Wt;l(Wt)&&(Gt=Wo(Wt)),Te.push(S+yn+"="+encodeURIComponent(Gt))}}catch(yn){throw Te.push(S+"type="+encodeURIComponent("_badmap")),yn}}catch{_&&_(yt)}}if(se){O=Te.join("&");break e}}O=void 0}return a=a.i.splice(0,d),c.G=a,O}function vc(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;ut||g(),Ne||(ut(),Ne=!0),w.add(c,a),a.A=0}}function sa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=br(h(a.Da,a),Ic(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Tc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=br(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,je(10),li(this),Tc(this))};function ia(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Tc(a){a.g=new Bt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=gt(a.na);le(c,"RID","rpc"),le(c,"SID",a.M),le(c,"AID",a.K),le(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&le(c,"TO",a.ia),le(c,"TYPE","xmlhttp"),qr(a,c),a.u&&a.o&&na(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ii(gt(c)),d.u=null,d.R=!0,Ku(d,a)}n.Va=function(){this.C!=null&&(this.C=null,li(this),sa(this),je(19))};function ci(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function wc(a,c){var d=null;if(a.g==c){ci(a),ia(a),a.g=null;var _=2}else if(Jo(a.h,c))d=c.G,tc(a.h,c),_=1;else return;if(a.I!=0){if(c.o)if(_==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var A=a.D;_=ni(),qe(_,new Wu(_,d)),ui(a)}else vc(a);else if(A=c.m,A==3||A==0&&c.X>0||!(_==1&&_m(a,c)||_==2&&sa(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),A){case 1:gn(a,5);break;case 4:gn(a,10);break;case 3:gn(a,6);break;default:gn(a,2)}}}function Ic(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function gn(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),_=a.Ua;const A=!_;_=new qt(_||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Dr(_,"https"),ii(_),A?um(_.toString(),d):cm(_.toString(),d)}else je(2);a.I=0,a.l&&a.l.pa(c),Ac(a),gc(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function Ac(a){if(a.I=0,a.ja=[],a.l){const c=nc(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.oa()}}function Cc(a,c,d){var _=d instanceof qt?gt(d):new qt(d);if(_.g!="")c&&(_.g=c+"."+_.g),kr(_,_.u);else{var A=o.location;_=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const S=new qt(null);_&&Dr(S,_),c&&(S.g=c),A&&kr(S,A),d&&(S.h=d),_=S}return d=a.G,c=a.wa,d&&c&&le(_,d,c),le(_,"VER",a.ka),qr(a,_),_}function Rc(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new de(new ta({ab:d})):new de(a.ma),c.Fa(a.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sc(){}n=Sc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function hi(){}hi.prototype.g=function(a,c){return new tt(a,c)};function tt(a,c){Oe.call(this),this.g=new mc(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!y(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new $n(this)}p(tt,Oe),tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){ra(this.g)},tt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Wo(a),a=d);c.i.push(new tm(c.Ya++,a)),c.I==3&&ui(c)},tt.prototype.N=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,tt.Z.N.call(this)};function Pc(a){Go.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Pc,Go);function bc(){zo.call(this),this.status=1}p(bc,zo);function $n(a){this.g=a}p($n,Sc),$n.prototype.ra=function(){qe(this.g,"a")},$n.prototype.qa=function(a){qe(this.g,new Pc(a))},$n.prototype.pa=function(a){qe(this.g,new bc)},$n.prototype.oa=function(){qe(this.g,"b")},hi.prototype.createWebChannel=hi.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,Fd=function(){return new hi},Md=function(){return ni()},Ld=pn,Ra={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ri.NO_ERROR=0,ri.TIMEOUT=8,ri.HTTP_ERROR=6,Ti=ri,Gu.COMPLETE="complete",Od=Gu,Bu.EventType=Sr,Sr.OPEN="a",Sr.CLOSE="b",Sr.ERROR="c",Sr.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Qr=Bu,de.prototype.listenOnce=de.prototype.K,de.prototype.getLastError=de.prototype.Ha,de.prototype.getLastErrorCode=de.prototype.ya,de.prototype.getStatus=de.prototype.ca,de.prototype.getResponseJson=de.prototype.La,de.prototype.getResponseText=de.prototype.la,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Fa,kd=de}).apply(typeof fi<"u"?fi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr="12.17.0";function Bg(n){mr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new al("@firebase/firestore");function Gn(){return Vn.logLevel}function M(n,...e){if(Vn.logLevel<=Z.DEBUG){const t=e.map(ll);Vn.debug(`Firestore (${mr}): ${n}`,...t)}}function Ot(n,...e){if(Vn.logLevel<=Z.ERROR){const t=e.map(ll);Vn.error(`Firestore (${mr}): ${n}`,...t)}}function mt(n,...e){if(Vn.logLevel<=Z.WARN){const t=e.map(ll);Vn.warn(`Firestore (${mr}): ${n}`,...t)}}function ll(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ud(n,r,t)}function Ud(n,e,t){let r=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ot(r),new Error(r)}function U(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ud(e,s,r)}function G(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=qg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function Sa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return la(s)===la(i)?X(s,i):la(s)?1:-1}return X(n.length,e.length)}const jg=55296,$g=57343;function la(n){const e=n.charCodeAt(0);return e>=jg&&e<=$g}function sr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pe=class Pa{constructor(e,t){this.comparator=e,this.root=t||Kt.EMPTY}insert(e,t){return new Pa(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new Pa(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pi(this.root,e,this.comparator,!0)}},pi=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Kt=class Pt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Pt.RED,this.left=s??Pt.EMPTY,this.right=i??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Pt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}};Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Uc(this.data.getIterator())}getIteratorFrom(e){return new Uc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class Uc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends _r{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="__name__";class Et{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Et?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Et.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return X(e.length,t.length)}static compareSegments(e,t){const r=Et.isNumericId(e),s=Et.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Et.extractNumericId(e).compare(Et.extractNumericId(t)):Sa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qt.fromString(e.substring(4,e.length-2))}}class re extends Et{construct(e,t,r){return new re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new re(t)}static emptyPath(){return new re([])}}const Wg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let it=class zn extends Et{construct(e,t,r){return new zn(e,t,r)}static isValidIdentifier(e){return Wg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ir}static keyField(){return new zn([ir])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new F(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new F(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zn(t)}static emptyPath(){return new zn([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new ht([])}unionWith(e){let t=new ye(it.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function On(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Gg(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Bd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(re.fromString(e))}static fromName(e){return new B(re.fromString(e).popFirst(5))}static empty(){return new B(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n,e,t){if(!t)throw new F(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function zg(n,e,t,r){if(e===!0&&r===!0)throw new F(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Bc(n){if(!B.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qc(n){if(B.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ms(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function cl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Cn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=cl(n);throw new F(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,e){const t={typeString:n};return e&&(t.value=e),t}function Fs(n,e){if(!Ms(n))throw new F(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new F(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=-62135596800,$c=1e6;class ce{static now(){return ce.fromMillis(Date.now())}static fromDate(e){return ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*$c);return new ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<jc)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$c}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fs(e,ce._jsonSchema))return new ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-jc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ce._jsonSchemaVersion="firestore/timestamp/1.0",ce._jsonSchema={type:me("string",ce._jsonSchemaVersion),seconds:me("number"),nanoseconds:me("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new jd("Invalid base64 string: "+i):i}}(e);return new Ee(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const Hg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(n){if(U(!!n,39018),typeof n=="string"){let e=0;const t=Hg.exec(n);if(U(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function tn(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="server_timestamp",Wd="__type__",Gd="__previous_value__",zd="__local_write_time__";function lo(n){return(n?.mapValue?.fields||{})[Wd]?.stringValue===$d}function Us(n){const e=n.mapValue.fields[Gd];return lo(e)?Us(e):e}function or(n){const e=en(n.mapValue.fields[zd].timestampValue);return new ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,r,s,i,o,l,u,h,f,p,m,R){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p,this._customHeaders=m,this.grpcFlowControlWindow=R}}const Ni="(default)";class ps{constructor(e,t){this.projectId=e,this.database=t||Ni}static empty(){return new ps("","")}get isDefaultDatabase(){return this.database===Ni}isEqual(e){return e instanceof ps&&e.projectId===this.projectId&&e.database===this.database}}function Kg(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new F(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ps(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=-1;function uo(n){return n==null}function _s(n){return n===0&&1/n==-1/0}function Yg(n){return typeof n=="number"&&Number.isInteger(n)&&!_s(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Xg(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="__type__",Jg="__max__",_i={mapValue:{}},Qd="__vector__",ms="value",ar={nullValue:"NULL_VALUE"},Xe={booleanValue:!0},Ve={booleanValue:!1};function ve(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?lo(n)?4:Zg(n)?9007199254740991:xi(n)?10:11:q(28295,{value:n})}function lt(n,e,t){if(n===e)return!0;const r=ve(n);if(r!==ve(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return or(n).isEqual(or(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=en(i.timestampValue),u=en(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return tn(i.bytesValue).isEqual(tn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return he(i.geoPointValue.latitude)===he(o.geoPointValue.latitude)&&he(i.geoPointValue.longitude)===he(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o,l){if("integerValue"in i&&"integerValue"in o)return he(i.integerValue)===he(o.integerValue);let u,h;if("doubleValue"in i&&"doubleValue"in o)u=he(i.doubleValue),h=he(o.doubleValue);else{if(!l?.t)return!1;u=he(i.integerValue??i.doubleValue),h=he(o.integerValue??o.doubleValue)}return u===h?!!l?.i||_s(u)===_s(h):!!(l===void 0||l.o)&&isNaN(u)&&isNaN(h)}(n,e,t);case 9:return sr(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>lt(s,i,t));case 10:case 11:return function(i,o,l){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if(Vi(u)!==Vi(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!lt(u[f],h[f],l)))return!1;return!0}(n,e,t);default:return q(52216,{left:n})}}function gs(n,e){return(n.values||[]).find(t=>lt(t,e))!==void 0}function Je(n,e){if(n===e)return 0;const t=ve(n),r=ve(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=he(i.integerValue||i.doubleValue),u=he(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Wc(n.timestampValue,e.timestampValue);case 4:return Wc(or(n),or(e));case 5:return Sa(n.stringValue,e.stringValue);case 6:return function(i,o){const l=tn(i),u=tn(o);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=X(l[h],u[h]);if(f!==0)return f}return X(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=X(he(i.latitude),he(o.latitude));return l!==0?l:X(he(i.longitude),he(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gc(n.arrayValue,e.arrayValue);case 10:return function(i,o){const l=i.fields||{},u=o.fields||{},h=l[ms]?.arrayValue,f=u[ms]?.arrayValue,p=X(h?.values?.length||0,f?.values?.length||0);return p!==0?p:Gc(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===_i.mapValue&&o===_i.mapValue)return 0;if(i===_i.mapValue)return 1;if(o===_i.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=Sa(u[p],f[p]);if(m!==0)return m;const R=Je(l[u[p]],h[f[p]]);if(R!==0)return R}return X(u.length,f.length)}(n.mapValue,e.mapValue);default:throw q(23264,{u:t})}}function Wc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=en(n),r=en(e),s=X(t.seconds,r.seconds);return s!==0?s:X(t.nanos,r.nanos)}function Gc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Je(t[s],r[s]);if(i!==void 0&&i!==0)return i}return X(t.length,r.length)}function lr(n){return ba(n)}function ba(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=en(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return tn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ba(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ba(t.fields[o])}`;return s+"}"}(n.mapValue):q(61005,{value:n})}function wi(n){switch(ve(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Us(n);return e?16+wi(e):16;case 5:return 2*n.stringValue.length;case 6:return tn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+wi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return On(r.fields,(i,o)=>{s+=i.length+wi(o)}),s}(n.mapValue);default:throw q(13486,{value:n})}}function vt(n){return!!n&&"integerValue"in n}function wn(n){return!!n&&"doubleValue"in n}function nn(n){return vt(n)||wn(n)}function ur(n){return!!n&&"arrayValue"in n}function st(n){return!!n&&"nullValue"in n}function Ze(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rn(n){return!!n&&"mapValue"in n}function xi(n){return(n?.mapValue?.fields||{})[Hd]?.stringValue===Qd}function Va(n){return(n?.mapValue?.fields||{})[ms]?.arrayValue}function Jr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return On(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Jr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Jr(n.arrayValue.values[t]);return e}return{...n}}function Zg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Jg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Rn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jr(t)}setAll(e){let t=it.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=Jr(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Rn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Rn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){On(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rt(Jr(this.value))}}function Kd(n){const e=[];return On(n.fields,(t,r)=>{const s=new it([t]);if(Rn(r)){const i=Kd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_s(e)?"-0":e}}function dl(n){return{integerValue:""+n}}function fl(n,e,t){return Yg(e)?dl(e):co(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this._=void 0}}function ey(n,e,t){return n instanceof Di?function(s,i){const o={fields:{[Wd]:{stringValue:$d},[zd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&lo(i)&&(i=Us(i)),i&&(o.fields[Gd]=i),{mapValue:o}}(t,e):n instanceof ys?Xd(n,e):n instanceof Es?Jd(n,e):n instanceof vs?function(s,i){const o=Yd(s,i),l=Li(o)+Li(s.l);return vt(o)&&vt(s.l)?dl(l):co(s.serializer,l)}(n,e):n instanceof ki?function(s,i){return zc(s,i,Math.min)}(n,e):n instanceof Oi?function(s,i){return zc(s,i,Math.max)}(n,e):void 0}function ty(n,e,t){return n instanceof ys?Xd(n,e):n instanceof Es?Jd(n,e):t}function Yd(n,e){return n instanceof vs?nn(e)?e:{integerValue:0}:null}class Di extends ho{}class ys extends ho{constructor(e){super(),this.elements=e}}function Xd(n,e){const t=Zd(e);for(const r of n.elements)t.some(s=>lt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Es extends ho{constructor(e){super(),this.elements=e}}function Jd(n,e){let t=Zd(e);for(const r of n.elements)t=t.filter(s=>!lt(s,r));return{arrayValue:{values:t}}}class pl extends ho{constructor(e,t){super(),this.serializer=e,this.l=t}}class vs extends pl{}class ki extends pl{}class Oi extends pl{}function zc(n,e,t){if(!nn(e))return n.l;const r=t(Li(e),Li(n.l));return vt(e)&&vt(n.l)?dl(r):co(n.serializer,r)}function Li(n){return he(n.integerValue||n.doubleValue)}function Zd(n){return ur(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ny(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ys&&s instanceof ys||r instanceof Es&&s instanceof Es?sr(r.elements,s.elements,lt):r instanceof vs&&s instanceof vs||r instanceof ki&&s instanceof ki||r instanceof Oi&&s instanceof Oi?lt(r.l,s.l):r instanceof Di&&s instanceof Di}(n.transform,e.transform)}class ry{constructor(e,t){this.version=e,this.transformResults=t}}class Tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ii(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class fo{}function ef(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new _l(n.key,Tt.none()):new Bs(n.key,n.data,Tt.none());{const t=n.data,r=rt.empty();let s=new ye(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ln(n.key,r,new ht(s.toArray()),Tt.none())}}function sy(n,e,t){n instanceof Bs?function(s,i,o){const l=s.value.clone(),u=Qc(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ln?function(s,i,o){if(!Ii(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Qc(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(tf(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Zr(n,e,t,r){return n instanceof Bs?function(i,o,l,u){if(!Ii(i.precondition,o))return l;const h=i.value.clone(),f=Kc(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ln?function(i,o,l,u){if(!Ii(i.precondition,o))return l;const h=Kc(i.fieldTransforms,u,o),f=o.data;return f.setAll(tf(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,o,l){return Ii(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function iy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Yd(r.transform,s||null);i!=null&&(t===null&&(t=rt.empty()),t.set(r.field,i))}return t||null}function Hc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&sr(r,s,(i,o)=>ny(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Bs extends fo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ln extends fo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Qc(n,e,t){const r=new Map;U(n.length===t.length,32656,{h:t.length,T:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,ty(o,l,t[s]))}return r}function Kc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,ey(i,o,e))}return r}class _l extends fo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oy extends fo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.position=e,this.inclusive=t}}function Yc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),t.key):r=Je(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{}class we extends nf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ly(e,t,r):t==="array-contains"?new hy(e,r):t==="in"?new dy(e,r):t==="not-in"?new fy(e,r):t==="array-contains-any"?new py(e,r):new we(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new uy(e,r):new cy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Je(t,this.value)):t!==null&&ve(this.value)===ve(t)&&this.matchesComparison(Je(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends nf{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new Ct(e,t)}matches(e){return rf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function rf(n){return n.op==="and"}function sf(n){return ay(n)&&rf(n)}function ay(n){for(const e of n.filters)if(e instanceof Ct)return!1;return!0}function Na(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+lr(n.value);if(sf(n))return n.filters.map(e=>Na(e)).join(",");{const e=n.filters.map(t=>Na(t)).join(",");return`${n.op}(${e})`}}function of(n,e){return n instanceof we?function(r,s){return s instanceof we&&r.op===s.op&&r.field.isEqual(s.field)&&lt(r.value,s.value)}(n,e):n instanceof Ct?function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&of(o,s.filters[l]),!0):!1}(n,e):void q(19439)}function af(n){return n instanceof we?function(t){return`${t.field.canonicalString()} ${t.op} ${lr(t.value)}`}(n):n instanceof Ct?function(t){return t.op.toString()+" {"+t.getFilters().map(af).join(" ,")+"}"}(n):"Filter"}class ly extends we{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class uy extends we{constructor(e,t){super(e,"in",t),this.keys=lf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class cy extends we{constructor(e,t){super(e,"not-in",t),this.keys=lf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function lf(n,e){return(e.arrayValue?.values||[]).map(t=>B.fromName(t.referenceValue))}class hy extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ur(t)&&gs(t.arrayValue,this.value)}}class dy extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gs(this.value.arrayValue,t)}}class fy extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gs(this.value.arrayValue,t)}}class py extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ur(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>gs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t="asc"){this.field=e,this.dir=t}}function _y(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new ce(0,0))}static max(){return new W(new ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Fe(e,0,W.min(),W.min(),W.min(),rt.empty(),0)}static newFoundDocument(e,t,r,s){return new Fe(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new Fe(e,2,t,W.min(),W.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,W.min(),W.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=-1;function my(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new ce(t+1,0):new ce(t,r));return new rn(s,B.empty(),e)}function gy(n){return new rn(n.readTime,n.key,Ts)}class rn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rn(W.min(),B.empty(),Ts)}static max(){return new rn(W.max(),B.empty(),Ts)}}function yy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.R=null}}function Jc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new Ey(n,e,t,r,s,i,o)}function uf(n){const e=G(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Na(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),uo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>lr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>lr(r)).join(",")),e.R=t}return e.R}function cf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_y(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!of(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Xc(n.startAt,e.startAt)&&Xc(n.endAt,e.endAt)}function Tn(n){return!!n.isCorePipeline}function hf(n){return!!n.path&&B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function vy(n,e,t,r,s,i,o,l){return new po(n,e,t,r,s,i,o,l)}function ml(n){return new po(n)}function Zc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ty(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function wy(n){return n.collectionGroup!==null}function es(n){const e=G(n);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ye(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new Fi(i,r))}),t.has(it.keyField().canonicalString())||e.I.push(new Fi(it.keyField(),r))}return e.I}function wt(n){const e=G(n);return e.A||(e.A=Iy(e,es(n))),e.A}function Iy(n,e){if(n.limitType==="F")return Jc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fi(s.field,i)});const t=n.endAt?new Mi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Mi(n.startAt.position,n.startAt.inclusive):null;return Jc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function xa(n,e,t){return new po(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ay(n,e){return cf(wt(n),wt(e))&&n.limitType===e.limitType}function ts(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>af(s)).join(", ")}]`),uo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>lr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>lr(s)).join(",")),`Target(${r})`}(wt(n))}; limitType=${n.limitType})`}function _o(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of es(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Yc(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,es(r),s)||r.endAt&&!function(o,l,u){const h=Yc(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,es(r),s))}(n,e)}function gl(n){return(e,t)=>{let r=!1;for(const s of es(n)){const i=Cy(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Cy(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Je(u,h):q(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,ee;function Sy(n){switch(n){case N.OK:return q(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function df(n){if(n===void 0)return Ot("GRPC error has no .code"),N.UNKNOWN;switch(n){case _e.OK:return N.OK;case _e.CANCELLED:return N.CANCELLED;case _e.UNKNOWN:return N.UNKNOWN;case _e.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case _e.INTERNAL:return N.INTERNAL;case _e.UNAVAILABLE:return N.UNAVAILABLE;case _e.UNAUTHENTICATED:return N.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case _e.NOT_FOUND:return N.NOT_FOUND;case _e.ALREADY_EXISTS:return N.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return N.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case _e.ABORTED:return N.ABORTED;case _e.OUT_OF_RANGE:return N.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return N.UNIMPLEMENTED;case _e.DATA_LOSS:return N.DATA_LOSS;default:return q(39323,{code:n})}}(ee=_e||(_e={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){On(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Bd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=new pe(B.comparator);function ze(){return Py}const ff=new pe(B.comparator);function Hn(...n){let e=ff;for(const t of n)e=e.insert(t.key,t);return e}function pf(n){let e=ff;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function zt(){return ns()}function _f(){return ns()}function ns(){return new Mn(n=>n.toString(),(n,e)=>n.isEqual(e))}const by=new pe(B.comparator),Vy=new ye(B.comparator);function K(...n){let e=Vy;for(const t of n)e=e.add(t);return e}const Ny=new ye(X);function xy(){return Ny}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Qt([4294967295,4294967295],0);function eh(n){const e=Dy().encode(n),t=new Dd;return t.update(e),new Uint8Array(t.digest())}function th(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qt([t,r],0),new Qt([s,i],0)]}class yl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Kr(`Invalid padding: ${t}`);if(r<0)throw new Kr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Kr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Kr(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=Qt.fromNumber(this.m)}v(e,t,r){let s=e.add(t.multiply(Qt.fromNumber(r)));return s.compare(ky)===1&&(s=new Qt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}S(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=eh(e),[r,s]=th(t);for(let i=0;i<this.hashCount;i++){const o=this.v(r,s,i);if(!this.S(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yl(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.m===0)return;const t=eh(e),[r,s]=th(t);for(let i=0;i<this.hashCount;i++){const o=this.v(r,s,i);this.D(o)}}D(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Kr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,r,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,js.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qs(W.min(),s,new pe(X),ze(),ze(),K())}}class js{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new js(r,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,r,s){this.C=e,this.removedTargetIds=t,this.key=r,this.F=s}}class mf{constructor(e,t){this.targetId=e,this.O=t}}class gf{constructor(e,t,r=Ee.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class nh{constructor(e){this.targetId=e,this.M=0,this.N=rh(),this.L=Ee.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=K(),t=K(),r=K();return this.N.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}}),new js(this.L,this.B,e,t,r)}W(){this.U=!1,this.N=rh()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,U(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const jr="WatchChangeAggregator";class Oy{constructor(e){this.Z=e,this.X=new Map,this.ee=ze(),this.te=mi(),this.ne=ze(),this.re=mi(),this.ie=new pe(X)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,t=>{const r=this.X.get(t);if(r)switch(e.state){case 0:this.ue(t)&&r.$(e.resumeToken);break;case 1:r.J(),r.k||r.W(),r.$(e.resumeToken);break;case 2:r.J(),r.k||this.removeTarget(t);break;case 3:this.ue(t)&&(r.Y(),r.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),r.$(e.resumeToken));break;default:q(56790,{state:e.state})}else M(jr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach((r,s)=>{this.ue(s)&&t(s)})}le(e){return Tn(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:hf(e)}Ee(e){const t=e.targetId,r=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(r===0){const o=new B(Tn(i)?re.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,o,Fe.newNoDocument(o,W.min()))}else U(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.Te(t);if(o!==r){const l=this.Pe(e),u=l?this.Re(l,e,o):1;if(u!==0){this.ce(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,h)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=tn(r).toUint8Array()}catch(u){if(u instanceof jd)return mt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new yl(o,s,i)}catch(u){return mt(u instanceof Kr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.m===0?null:l}Re(e,t,r){return t.O.count===r-this.Ve(e,t.targetId)?0:2}Ve(e,t){const r=this.Z.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Z.Ae(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.oe(t,i,null),s++)}),s}de(e){const t=new Map;this.X.forEach((i,o)=>{const l=this.he(o);if(l){if(i.current&&this.le(l.target)){const u=Tn(l.target)?re.fromString(l.target.getPipelineDocuments()[0]):l.target.path,h=new B(u);this.fe(h).has(o)||this.me(o,h)||this.oe(o,h,Fe.newNoDocument(h,e))}i.q&&(t.set(o,i.K()),i.W())}});let r=K();this.re.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.he(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ee.forEach((i,o)=>o.setReadTime(e)),this.ne.forEach((i,o)=>o.setReadTime(e));const s=new qs(e,t,this.ie,this.ee,this.ne,r);return this.ee=ze(),this.te=mi(),this.ne=ze(),this.re=mi(),this.ie=new pe(X),s}_e(e,t){const r=this.X.get(e);if(!r||!this.ue(e))return void M(jr,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;r.G(t.key,s),Tn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,r){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),r&&(Tn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,r):this.ee=this.ee.insert(t,r))):M(jr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const r=t.K();return this.Z.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}H(e){let t=this.X.get(e);t||(M(jr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new nh(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new ye(X),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new ye(X),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||M(jr,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new nh(e)),this.Z.getRemoteKeysForTarget(e).forEach(t=>{this.oe(e,t,null)})}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function mi(){return new pe(B.comparator)}function rh(){return new pe(B.comparator)}const Ly={asc:"ASCENDING",desc:"DESCENDING"},My={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fy={and:"AND",or:"OR"};class Uy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Da(n,e){return n.useProto3Json||uo(e)?e:{value:e}}function Ui(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function El(n){const e=en(n);return new ce(e.seconds,e.nanos)}function yf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ci(n,e){return Ui(n,e.toTimestamp())}function It(n){return U(!!n,49232),W.fromTimestamp(El(n))}function vl(n,e){return ka(n,e).canonicalString()}function ka(n,e){const t=function(s){return new re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ef(n){const e=re.fromString(n);return U(Af(e),10190,{key:e.toString()}),e}function Bi(n,e){return vl(n.databaseId,e.path)}function ua(n,e){const t=Ef(e);if(t.get(1)!==n.databaseId.projectId)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Tf(t))}function vf(n,e){return vl(n.databaseId,e)}function By(n){const e=Ef(n);return e.length===4?re.emptyPath():Tf(e)}function Oa(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tf(n){return U(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function sh(n,e,t){return{name:Bi(n,e),fields:t.value.mapValue.fields}}function qy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(U(f===void 0||typeof f=="string",58123),Ee.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ee.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?N.UNKNOWN:df(h.code);return new F(f,h.message||"")}(o);t=new gf(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ua(n,r.document.name),i=It(r.document.updateTime),o=r.document.createTime?It(r.document.createTime):W.min(),l=new rt({mapValue:{fields:r.document.fields}}),u=Fe.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Ai(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ua(n,r.document),i=r.readTime?It(r.readTime):W.min(),o=Fe.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Ai([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ua(n,r.document),i=r.removedTargetIds||[];t=new Ai([],i,s,null)}else{if(!("filter"in e))return q(11601,{ye:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Ry(s,i),l=r.targetId;t=new mf(l,o)}}return t}function jy(n,e){let t;if(e instanceof Bs)t={update:sh(n,e.key,e.value)};else if(e instanceof _l)t={delete:Bi(n,e.key)};else if(e instanceof Ln)t={update:sh(n,e.key,e.data),updateMask:Jy(e.fieldMask)};else{if(!(e instanceof oy))return q(16599,{we:e.type});t={verify:Bi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Di)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ys)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Es)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof vs)return{fieldPath:o.field.canonicalString(),increment:l.l};if(l instanceof ki)return{fieldPath:o.field.canonicalString(),minimum:l.l};if(l instanceof Oi)return{fieldPath:o.field.canonicalString(),maximum:l.l};throw q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ci(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)}(n,e.precondition)),t}function $y(n,e){return n&&n.length>0?(U(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?It(s.updateTime):It(i);return o.isEqual(W.min())&&(o=It(i)),new ry(o,s.transformResults||[])}(t,e))):[]}function Wy(n,e){return{documents:[vf(n,e.path)]}}function Gy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=vf(n,s);const i=function(h){if(h.length!==0)return If(Ct.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Qn(m.field),direction:Ky(m.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Da(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{be:t,parent:s}}function zy(n){let e=By(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){U(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const m=wf(p);return m instanceof Ct&&sf(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(P){return new Fi(Kn(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,uo(m)?null:m}(t.limit));let u=null;t.startAt&&(u=function(p){const m=!!p.before,R=p.values||[];return new Mi(R,m)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const m=!p.before,R=p.values||[];return new Mi(R,m)}(t.endAt)),vy(e,s,o,i,l,"F",u,h)}function Hy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qy(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function wf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Kn(t.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Kn(t.unaryFilter.field);return we.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Kn(t.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Kn(t.unaryFilter.field);return we.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(t){return we.create(Kn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ct.create(t.compositeFilter.filters.map(r=>wf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(n):q(30097,{filter:n})}function Ky(n){return Ly[n]}function Yy(n){return My[n]}function Xy(n){return Fy[n]}function Qn(n){return{fieldPath:n.canonicalString()}}function Kn(n){return it.fromServerFormat(n.fieldPath)}function If(n){return n instanceof we?function(t){if(t.op==="=="){if(Ze(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NAN"}};if(st(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ze(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NAN"}};if(st(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qn(t.field),op:Yy(t.op),value:t.value}}}(n):n instanceof Ct?function(t){const r=t.getFilters().map(s=>If(s));return r.length===1?r[0]:{compositeFilter:{op:Xy(t.op),filters:r}}}(n):q(54877,{filter:n})}function Jy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Af(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Cf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function ws(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function Rf(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n){return new Uy(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this._byteString=e}static fromBase64String(e){try{return new at(Ee.fromBase64String(e))}catch(t){throw new F(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new at(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:at._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fs(e,at._jsonSchema))return at.fromBase64String(e.bytes)}}at._jsonSchemaVersion="firestore/bytes/1.0",at._jsonSchema={type:me("string",at._jsonSchemaVersion),bytes:me("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Zy(){return new Tl(ir)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:At._jsonSchemaVersion}}static fromJSON(e){if(Fs(e,At._jsonSchema))return new At(e.latitude,e.longitude)}}At._jsonSchemaVersion="firestore/geoPoint/1.0",At._jsonSchema={type:me("string",At._jsonSchemaVersion),latitude:me("number"),longitude:me("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Me.UNAUTHENTICATED))}shutdown(){}}class tE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nE{constructor(e){this.Se=e,this.currentUser=Me.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){U(this.xe===void 0,42304);let r=this.De;const s=u=>this.De!==r?(r=this.De,t(u)):Promise.resolve();let i=new Sn;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.xe&&(this.auth.addAuthTokenListener(this.xe),o())};this.Se.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.Se.getImmediate({optional:!0});u?l(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),o()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.De!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string",31837,{Fe:r}),new Pf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string",2055,{Oe:e}),new Me(e)}}class rE{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class sE{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r}getToken(){return Promise.resolve(new rE(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable(()=>t(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ih{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iE{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,Pd(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){U(this.xe===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.qe;return this.qe=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.$e)return Promise.resolve(new ih(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(U(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new ih(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function bf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{Ke(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="ConnectivityMonitor";class ah{constructor(){this.We=()=>this.Qe(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.We),window.addEventListener("offline",this.Ge)}Qe(){M(oh,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){M(oh,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi=null;function La(){return gi===null?gi=function(){return 268435456+Math.round(2147483648*Math.random())}():gi++,"0x"+gi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="RestConnection",aE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class lE{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${r}/databases/${s}`,this.et=this.databaseId.database===Ni?`project_id=${r}`:`project_id=${r}&database_id=${s}`}tt(e,t,r,s,i){const o=La(),l=this.nt(e,t.toUriEncodedString());M(ca,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(u,s,i);const{host:h}=new URL(l),f=ao(h);return this.it(e,l,u,r,f).then(p=>(M(ca,`Received RPC '${e}' ${o}: `,p),p),p=>{throw mt(ca,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}st(e,t,r,s,i,o){return this.tt(e,t,r,s,i)}rt(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const r=aE[e];let s=`${this.Ze}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection",$r=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Xn extends lE{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!Xn.gt){const e=Md();$r(e,Ld.STAT_EVENT,t=>{t.stat===Ra.PROXY?M(Le,"STAT_EVENT: detected buffering proxy"):t.stat===Ra.NOPROXY&&M(Le,"STAT_EVENT: detected no buffering proxy")}),Xn.gt=!0}}it(e,t,r,s,i){const o=La();return new Promise((l,u)=>{const h=new kd;h.setWithCredentials(!0),h.listenOnce(Od.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ti.NO_ERROR:const p=h.getResponseJson();M(Le,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ti.TIMEOUT:M(Le,`RPC '${e}' ${o} timed out`),u(new F(N.DEADLINE_EXCEEDED,"Request time out"));break;case Ti.HTTP_ERROR:const m=h.getStatus();if(M(Le,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R?.error;if(P&&P.status&&P.message){const k=function(z){const te=z.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(te)>=0?te:N.UNKNOWN}(P.status);u(new F(k,P.message))}else u(new F(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new F(N.UNAVAILABLE,"Connection failed."));break;default:q(9055,{yt:e,streamId:o,wt:h.getLastErrorCode(),bt:h.getLastError()})}}finally{M(Le,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);M(Le,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)})}vt(e,t,r){const s=La(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.rt(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");M(Le,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);this.St(f);let p=!1,m=!1;const R=new uE({_t:P=>{m?M(Le,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(p||(M(Le,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),M(Le,`RPC '${e}' stream ${s} sending:`,P),f.send(P))},ot:()=>f.close()});return $r(f,Qr.EventType.OPEN,()=>{m||(M(Le,`RPC '${e}' stream ${s} transport opened.`),R.Rt())}),$r(f,Qr.EventType.CLOSE,()=>{m||(m=!0,M(Le,`RPC '${e}' stream ${s} transport closed`),R.At(),this.Dt(f))}),$r(f,Qr.EventType.ERROR,P=>{m||(m=!0,mt(Le,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),R.At(new F(N.UNAVAILABLE,"The operation could not be completed")))}),$r(f,Qr.EventType.MESSAGE,P=>{if(!m){const k=P.data[0];U(!!k,16349);const L=k,z=L?.error||L[0]?.error;if(z){M(Le,`RPC '${e}' stream ${s} received error:`,z);const te=z.status;let oe=function(Ne){const w=_e[Ne];if(w!==void 0)return df(w)}(te),ke=z.message;te==="NOT_FOUND"&&ke.includes("database")&&ke.includes("does not exist")&&ke.includes(this.databaseId.database)&&mt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),oe===void 0&&(oe=N.INTERNAL,ke="Unknown error status: "+te+" with message "+z.message),m=!0,R.At(new F(oe,ke)),f.close()}else M(Le,`RPC '${e}' stream ${s} received:`,k),R.Vt(k)}}),Xn.ft(),setTimeout(()=>{R.It()},0),R}terminate(){this.dt.forEach(e=>e.close()),this.dt=[]}St(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter(t=>t===e)}rt(e,t,r){super.rt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Fd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(n){return new Xn(n)}Xn.gt=!1;class Vf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=r,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),r=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,()=>(this.Lt=Date.now(),e())),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="PersistentStream";class Nf{constructor(e,t,r,s,i,o,l,u){this.xt=e,this.$t=r,this.Kt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Wt=0,this.Qt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new Vf(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Qt===null&&(this.Qt=this.xt.enqueueAfterDelay(this.$t,6e4,()=>this.en()))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Qt&&(this.Qt.cancel(),this.Qt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Wt++,e!==4?this.jt.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Ot(t.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wt===t&&this.an(r,s)},r=>{e(()=>{const s=new F(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.un(s)})})}an(e,t){const r=this._n(this.Wt);this.stream=this.cn(e,t),this.stream.ut(()=>{r(()=>this.listener.ut())}),this.stream.lt(()=>{r(()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,()=>(this.Jt()&&(this.state=3),Promise.resolve())),this.listener.lt()))}),this.stream.ht(s=>{r(()=>this.un(s))}),this.stream.onMessage(s=>{r(()=>++this.zt==1?this.En(s):this.onNext(s))})}Yt(){this.state=5,this.jt.Ut(async()=>{this.state=0,this.start()})}un(e){return M(lh,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget(()=>this.Wt===e?t():(M(lh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hE extends Nf{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}cn(e,t){return this.connection.vt("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=qy(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?It(o.readTime):W.min()}(e);return this.listener.hn(t,r)}Tn(e){const t={};t.database=Oa(this.serializer),t.addTarget=function(i,o){let l;const u=o.target;if(l=Tn(u)?{pipelineQuery:Qy(i,u)}:hf(u)?{documents:Wy(i,u)}:{query:Gy(i,u).be},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=yf(i,o.resumeToken);const h=Da(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(W.min())>0){l.readTime=Ui(i,o.snapshotVersion.toTimestamp());const h=Da(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Hy(this.serializer,e);r&&(t.labels=r),this.tn(t)}Pn(e){const t={};t.database=Oa(this.serializer),t.removeTarget=e,this.tn(t)}}class dE extends Nf{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.vt("Write",e,t)}En(e){return U(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,U(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){U(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=$y(e.writeResults,e.commitTime),r=It(e.commitTime);return this.listener.Vn(r,t)}dn(){const e={};e.database=Oa(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>jy(this.serializer,r))};this.tn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{}class pE extends fE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,r,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.tt(e,ka(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(N.UNKNOWN,i.toString())})}st(e,t,r,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.st(e,ka(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(N.UNKNOWN,o.toString())})}terminate(){this.fn=!0,this.connection.terminate()}}function _E(n,e,t,r){return new pE(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE="ComponentProvider",uh=new Map;function gE(n,e,t,r,s){return new Qg(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,bf(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xf=41943040;class We{static withCacheSize(e){return new We(e,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}We.DEFAULT_COLLECTION_PERCENTILE=10,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,We.DEFAULT=new We(xf,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),We.DISABLED=new We(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.pn(r),this.gn=r=>t.writeSequenceNumber(r))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}go.yn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==yE)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},u=>r(u))}),o=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function vE(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="LruGarbageCollector",TE=1048576;function dh([n,e],[t,r]){const s=X(n,t);return s===0?X(e,r):s}class wE{constructor(e){this.Jn=e,this.buffer=new ye(dh),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();dh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class IE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){M(hh,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yr(t)?M(hh,"Ignoring IndexedDB error during garbage collection: ",t):await gr(t)}await this.tr(3e5)})}}class AE{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(go.yn);const r=new wE(t);return this.nr.forEachTarget(e,s=>r.Xn(s.sequenceNumber)).next(()=>this.nr.ir(e,s=>r.Xn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.nr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(ch)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ch):this.sr(e,t))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Gn()<=Z.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function CE(n,e){return new AE(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="firestore.googleapis.com",fh=!0;class ph{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Df,this.ssl=fh}else this.host=e.host,this.ssl=e.ssl??fh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=xf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<TE)throw new F(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(zg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new F(N.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),o=Object.keys(s);if(i.length!==o.length)return!1;for(const l of i)if(r[l]!==s[l])return!1;return!0}(this._customHeaders,e._customHeaders)}}let yo=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ph({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ph(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new eE;switch(r.type){case"firstParty":return new sE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=uh.get(t);r&&(M(mE,"Removing Datastore"),uh.delete(t),r.terminate())}(this),Promise.resolve()}};function RE(n,e,t,r={}){n=Cn(n,yo);const s=ao(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&Rd(`https://${l}`),i.host!==Df&&i.host!==l&&mt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!cs(u,o)&&(n._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Me.MOCK_USER;else{h=Td(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new F(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Me(p)}n._authCredentials=new tE(new Pf(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Eo(this.firestore,e,this._query)}}class ge{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ge(this.firestore,e,this._key)}toJSON(){return{type:ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Fs(t,ge._jsonSchema))return new ge(e,r||null,new B(re.fromString(t.referencePath)))}}ge._jsonSchemaVersion="firestore/documentReference/1.0",ge._jsonSchema={type:me("string",ge._jsonSchemaVersion),referencePath:me("string")};class Yt extends Eo{constructor(e,t,r){super(e,t,ml(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ge(this.firestore,null,new B(e))}withConverter(e){return new Yt(this.firestore,e,this._path)}}function ZC(n,e,...t){if(n=_t(n),qd("collection","path",e),n instanceof yo){const r=re.fromString(e,...t);return qc(r),new Yt(n,null,r)}{if(!(n instanceof ge||n instanceof Yt))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return qc(r),new Yt(n.firestore,null,r)}}function eR(n,e,...t){if(n=_t(n),arguments.length===1&&(e=ul.newId()),qd("doc","path",e),n instanceof yo){const r=re.fromString(e,...t);return Bc(r),new ge(n,null,new B(r))}{if(!(n instanceof ge||n instanceof Yt))throw new F(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return Bc(r),new ge(n.firestore,n instanceof Yt?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ke._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fs(e,Ke._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ke(e.vectorValues);throw new F(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ke._jsonSchemaVersion="firestore/vectorValue/1.0",Ke._jsonSchema={type:me("string",Ke._jsonSchemaVersion),vectorValues:me("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=/^__.*__$/;class PE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ln(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bs(e,this.data,t,this.fieldTransforms)}}function kf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{dataSource:n})}}class wl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new wl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return qi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(kf(this.dataSource)&&SE.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class bE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||mo(e)}createContext(e,t,r,s=!1){return new wl({dataSource:e,methodName:t,targetDoc:r,path:it.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VE(n){const e=n._freezeSettings(),t=mo(n._databaseId);return new bE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function NE(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Mf("Data must be an object, but it was:",o,r);const l=Of(r,o);let u,h;if(i.merge)u=new ht(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=vo(e,p,t);if(!o.contains(m))throw new F(N.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kE(f,m)||f.push(m)}u=new ht(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new PE(new rt(l),u,h)}function Is(n,e,t){if(Lf(n=_t(n)))return Mf("Unsupported field value:",e,n),Of(n,e);if(n instanceof Sf)return function(s,i){if(!kf(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let l=0;for(const u of s){let h=Is(u,i.childContextForArray(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(n,e)}return function(s,i,o){if((s=_t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return fl(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ce.fromDate(s);return{timestampValue:Ui(i.serializer,l)}}if(s instanceof ce){const l=new ce(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ui(i.serializer,l)}}if(s instanceof At)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof at)return{bytesValue:yf(i.serializer,s._byteString)};if(s instanceof ge){const l=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(l))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:vl(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Ke)return function(u,h){const f=u instanceof Ke?u.toArray():u;return{mapValue:{fields:{[Hd]:{stringValue:Qd},[ms]:{arrayValue:{values:f.map(m=>{if(typeof m!="number")throw h.createError("VectorValues must only contain numeric values.");return co(h.serializer,m)})}}}}}}(s,i);if(Cf(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${cl(s)}`)}(n,e)}function Of(n,e){const t={};return Bd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):On(n,(r,s)=>{const i=Is(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Lf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ce||n instanceof At||n instanceof at||n instanceof ge||n instanceof Sf||n instanceof Ke||Cf(n))}function Mf(n,e,t){if(!Lf(t)||!Ms(t)){const r=cl(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function vo(n,e,t){if((e=_t(e))instanceof Tl)return e._internalPath;if(typeof e=="string")return DE(n,e);throw qi("Field path arguments must be of type string or ",n,!1,void 0,t)}const xE=new RegExp("[~\\*/\\[\\]]");function DE(n,e,t){if(e.search(xE)>=0)throw qi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Tl(...e.split("."))._internalPath}catch{throw qi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function qi(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new F(N.INVALID_ARGUMENT,l+n+u)}function kE(n,e){return n.some(t=>t.isEqual(e))}function OE(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=rt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let l;i.nestedOptions&&Ms(o)?l={mapValue:{fields:new Be(i.nestedOptions).getOptionsProto(t,o)}}:o&&(l=Is(o,t)??void 0),l&&r.set(it.fromServerFormat(i.serverName),l)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(Gg(r,(o,l)=>[it.fromServerFormat(l),o!==void 0?Is(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Ms(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function ME(n){return new Ke(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n){let e;return n instanceof Fn?n:(e=Ms(n)?$E(n):n instanceof Array?WE(n):Ff(n,void 0),e)}function ha(n){if(n instanceof Fn)return n;if(n instanceof Ke)return As(n);if(Array.isArray(n))return As(ME(n));throw new Error("Unsupported value: "+typeof n)}function Il(n){return Xg(n)?BE(n):x(n)}class Fn{constructor(){this._protoValueType="ProtoValue"}add(e){return new b("add",[this,x(e)],"add")}asBoolean(){if(this instanceof sn)return this;if(this instanceof Er)return new Bf(this);if(this instanceof $s)return new jE(this);if(this instanceof b)return new Uf(this);throw new F("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new b("subtract",[this,x(e)],"subtract")}multiply(e){return new b("multiply",[this,x(e)],"multiply")}divide(e){return new b("divide",[this,x(e)],"divide")}mod(e){return new b("mod",[this,x(e)],"mod")}equal(e){return new b("equal",[this,x(e)],"equal").asBoolean()}notEqual(e){return new b("not_equal",[this,x(e)],"notEqual").asBoolean()}lessThan(e){return new b("less_than",[this,x(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new b("less_than_or_equal",[this,x(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new b("greater_than",[this,x(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new b("greater_than_or_equal",[this,x(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>x(s));return new b("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new b("array_contains",[this,x(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Yr(e.map(x),"arrayContainsAll"):e;return new b("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Yr(e.map(x),"arrayContainsAny"):e;return new b("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new b("array_reverse",[this])}arrayLength(){return new b("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Yr(e.map(x),"equalAny"):e;return new b("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Yr(e.map(x),"notEqualAny"):e;return new b("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new b("exists",[this],"exists").asBoolean()}charLength(){return new b("char_length",[this],"charLength")}like(e){return new b("like",[this,x(e)],"like").asBoolean()}regexContains(e){return new b("regex_contains",[this,x(e)],"regexContains").asBoolean()}regexFind(e){return new b("regex_find",[this,x(e)],"regexFind")}regexFindAll(e){return new b("regex_find_all",[this,x(e)],"regexFindAll")}regexMatch(e){return new b("regex_match",[this,x(e)],"regexMatch").asBoolean()}stringContains(e){return new b("string_contains",[this,x(e)],"stringContains").asBoolean()}startsWith(e){return new b("starts_with",[this,x(e)],"startsWith").asBoolean()}endsWith(e){return new b("ends_with",[this,x(e)],"endsWith").asBoolean()}toLower(){return new b("to_lower",[this],"toLower")}toUpper(){return new b("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(x(e)),new b("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(x(e)),new b("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(x(e)),new b("rtrim",t,"rtrim")}type(){return new b("type",[this])}isType(e){return new b("is_type",[this,As(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(x);return new b("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new b("string_index_of",[this,x(e)],"stringIndexOf")}stringRepeat(e){return new b("string_repeat",[this,x(e)],"stringRepeat")}stringReplaceAll(e,t){return new b("string_replace_all",[this,x(e),x(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new b("string_replace_one",[this,x(e),x(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(x);return new b("concat",[this,...r],"concat")}reverse(){return new b("reverse",[this],"reverse")}arrayFilter(e,t){return new b("array_filter",[this,x(e),t],"arrayFilter")}arrayTransform(e,t){return new b("array_transform",[this,x(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new b("array_transform",[this,x(e),x(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,x(e)];return t!==void 0&&r.push(x(t)),new b("array_slice",r,"arraySlice")}arrayFirst(){return new b("array_first",[this],"arrayFirst")}arrayFirstN(e){return new b("array_first_n",[this,x(e)],"arrayFirstN")}arrayLast(){return new b("array_last",[this],"arrayLast")}arrayLastN(e){return new b("array_last_n",[this,x(e)],"arrayLastN")}arrayMaximum(){return new b("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new b("maximum_n",[this,x(e)],"arrayMaximumN")}arrayMinimum(){return new b("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new b("minimum_n",[this,x(e)],"arrayMinimumN")}arrayIndexOf(e){return new b("array_index_of",[this,x(e),x("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new b("array_index_of",[this,x(e),x("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new b("array_index_of_all",[this,x(e)],"arrayIndexOfAll")}byteLength(){return new b("byte_length",[this],"byteLength")}ceil(){return new b("ceil",[this])}floor(){return new b("floor",[this])}abs(){return new b("abs",[this])}exp(){return new b("exp",[this])}mapGet(e){return new b("map_get",[this,As(e)],"mapGet")}mapSet(e,t,...r){const s=[this,x(e),x(t),...r.map(x)];return new b("map_set",s,"mapSet")}mapKeys(){return new b("map_keys",[this],"mapKeys")}mapValues(){return new b("map_values",[this],"mapValues")}mapEntries(){return new b("map_entries",[this],"mapEntries")}getField(e){return new b("get_field",[this,x(e)],"get_field")}count(){return nt._create("count",[this],"count")}sum(){return nt._create("sum",[this],"sum")}average(){return nt._create("average",[this],"average")}minimum(){return nt._create("minimum",[this],"minimum")}maximum(){return nt._create("maximum",[this],"maximum")}first(){return nt._create("first",[this],"first")}last(){return nt._create("last",[this],"last")}arrayAgg(){return nt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return nt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return nt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new b("maximum",[this,...r.map(x)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new b("minimum",[this,...r.map(x)],"minimum")}vectorLength(){return new b("vector_length",[this],"vectorLength")}cosineDistance(e){return new b("cosine_distance",[this,ha(e)],"cosineDistance")}dotProduct(e){return new b("dot_product",[this,ha(e)],"dotProduct")}euclideanDistance(e){return new b("euclidean_distance",[this,ha(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new b("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new b("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new b("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new b("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new b("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new b("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new b("timestamp_add",[this,x(e),x(t)],"timestampAdd")}timestampSubtract(e,t){return new b("timestamp_subtract",[this,x(e),x(t)],"timestampSubtract")}timestampDiff(e,t){return new b("timestamp_diff",[this,Il(e),x(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,x(e)];return t&&r.push(x(t)),new b("timestamp_extract",r,"timestampExtract")}documentId(){return new b("document_id",[this],"documentId")}parent(){return new b("parent",[this],"parent")}substring(e,t){const r=x(e);return new b("substring",t===void 0?[this,r]:[this,r,x(t)],"substring")}arrayGet(e){return new b("array_get",[this,x(e)],"arrayGet")}isError(){return new b("is_error",[this],"isError").asBoolean()}ifError(e){const t=new b("if_error",[this,x(e)],"ifError");return e instanceof sn?t.asBoolean():t}isAbsent(){return new b("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new b("map_remove",[this,x(e)],"mapRemove")}mapMerge(e,...t){const r=x(e),s=t.map(x);return new b("map_merge",[this,r,...s],"mapMerge")}pow(e){return new b("pow",[this,x(e)])}trunc(e){return e===void 0?new b("trunc",[this]):new b("trunc",[this,x(e)],"trunc")}round(e){return e===void 0?new b("round",[this]):new b("round",[this,x(e)],"round")}collectionId(){return new b("collection_id",[this])}length(){return new b("length",[this])}ln(){return new b("ln",[this])}sqrt(){return new b("sqrt",[this])}stringReverse(){return new b("string_reverse",[this])}ifAbsent(e){return new b("if_absent",[this,x(e)],"ifAbsent")}ifNull(e){return new b("if_null",[this,x(e)],"ifNull")}coalesce(e,...t){return new b("coalesce",[this,x(e),...t.map(x)],"coalesce")}join(e){return new b("join",[this,x(e)],"join")}log10(){return new b("log10",[this])}arraySum(){return new b("sum",[this])}split(e){return new b("split",[this,x(e)])}timestampTruncate(e,t){const r=[this,x(e)];return t&&r.push(x(t)),new b("timestamp_trunc",r)}ascending(){return GE(this)}descending(){return zE(this)}as(e){return new UE(this,e,"as")}}class nt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new nt(e,t);return s._methodName=r,s}as(e){return new FE(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class FE{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class UE{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Yr extends Fn{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map(t=>t._toProto(e))}}}_readUserData(e){this.ur.forEach(t=>t._readUserData(e))}}class $s extends Fn{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new b("geo_distance",[this,x(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function BE(n){return qE(n,"field")}function qE(n,e){return new $s(typeof n=="string"?ir===n?Zy()._internalPath:vo("field",n):n._internalPath,e)}class Er extends Fn{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Er(e,void 0);return t._protoValue=e,t}_toProto(e){return U(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,LE(this._protoValue)||(this._protoValue=Is(this.value,e))}}function As(n,e){return Ff(n,"constant")}function Ff(n,e){const t=new Er(n,e);return typeof n=="boolean"?new Bf(t):t}class b extends Fn{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Be({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class sn extends Fn{get _methodName(){return this._expr._methodName}countIf(){return nt._create("count_if",[this],"countIf")}not(){return new b("not",[this],"not").asBoolean()}conditional(e,t){return new b("conditional",[this,e,t],"conditional")}ifError(e){const t=x(e),r=new b("if_error",[this,t],"ifError");return t instanceof sn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Uf extends sn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Bf extends sn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class jE extends sn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function $E(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(As(r)),t.push(x(s))}return new b("map",t,"map")}function WE(n){return function(t,r){return new b("array",t.map(s=>x(s)),r)}(n,"array")}function GE(n){return new qf(Il(n),"ascending","ascending")}function zE(n){return new qf(Il(n),"descending","descending")}class qf{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Rf(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class jf extends ot{get _name(){return"add_fields"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ws(e,this.fields)]}}_readUserData(e){super._readUserData(e),on(this.fields,e)}}class $f extends ot{get _name(){return"aggregate"}get _optionsUtil(){return new Be({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ws(e,this.accumulators),ws(e,this.groups)]}}_readUserData(e){super._readUserData(e),on(this.groups,e),on(this.accumulators,e)}}class Wf extends ot{get _name(){return"distinct"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ws(e,this.groups)]}}_readUserData(e){super._readUserData(e),on(this.groups,e)}}class To extends ot{get _name(){return"collection"}get _optionsUtil(){return new Be({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class wo extends ot{get _name(){return"collection_group"}get _optionsUtil(){return new Be({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Al extends ot{get _name(){return"database"}get _optionsUtil(){return new Be({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Cl extends ot{get _name(){return"documents"}get _optionsUtil(){return new Be({})}constructor(e,t){if(super(t),!e||e.length===0)throw new F(N.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new F(N.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=r,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Rl extends ot{get _name(){return"where"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),on(this.condition,e)}}class Cs extends ot{get _name(){return"limit"}get _optionsUtil(){return new Be({})}constructor(e,t){U(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[fl(e,this.limit)]}}}class _h extends ot{get _name(){return"offset"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[fl(e,this.offset)]}}}class HE extends ot{get _name(){return"select"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ws(e,this.selections)]}}_readUserData(e){super._readUserData(e),on(this.selections,e)}}class Sl extends ot{get _name(){return"sort"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),on(this.orderings,e)}}class Pl extends ot{get _name(){return"replace_with"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Rf(Pl.Pr)]}}_readUserData(e){super._readUserData(e),on(this.map,e)}}Pl.Pr="full_replace";function on(n,e){return OE(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class v{constructor(e,t){this.type=e,this.value=t}static dr(){return new v("ERROR",void 0)}static mr(){return new v("UNSET",void 0)}static pr(){return new v("NULL",ar)}static newValue(e){return st(e)?new v("NULL",ar):function(r){return!!r&&"booleanValue"in r}(e)?new v("BOOLEAN",e):vt(e)?new v("INT",e):wn(e)?new v("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new v("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new v("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new v("BYTES",e):e.referenceValue?new v("REFERENCE",e):e.geoPointValue?new v("GEO_POINT",e):ur(e)?new v("ARRAY",e):xi(e)?new v("VECTOR",e):Rn(e)?new v("MAP",e):new v("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function rs(n){if(!n.gr())return n.value}function Gf(n){return n instanceof sn?n._expr:n}function j(n){if((n=Gf(n))instanceof $s)return new QE(n);if(n instanceof Er)return new KE(n);if(n instanceof Yr)return new YE(n);if(n instanceof b){if(n.name==="add")return new ZE(n);if(n.name==="subtract")return new ev(n);if(n.name==="multiply")return new tv(n);if(n.name==="divide")return new nv(n);if(n.name==="mod")return new rv(n);if(n.name==="and")return new sv(n);if(n.name==="equal")return new mv(n);if(n.name==="not_equal")return new gv(n);if(n.name==="less_than")return new yv(n);if(n.name==="less_than_or_equal")return new Ev(n);if(n.name==="greater_than")return new vv(n);if(n.name==="greater_than_or_equal")return new Tv(n);if(n.name==="array_concat")return new wv(n);if(n.name==="array_reverse")return new Iv(n);if(n.name==="array_contains")return new Av(n);if(n.name==="array_contains_all")return new Cv(n);if(n.name==="array_contains_any")return new Rv(n);if(n.name==="array_length")return new Sv(n);if(n.name==="array_element")return new Pv(n);if(n.name==="equal_any")return new zf(n);if(n.name==="not_equal_any")return new ov(n);if(n.name==="is_nan")return new av(n);if(n.name==="is_not_nan")return new lv(n);if(n.name==="is_null")return new uv(n);if(n.name==="is_not_null")return new cv(n);if(n.name==="is_error")return new hv(n);if(n.name==="exists")return new dv(n);if(n.name==="not")return new Io(n);if(n.name==="or")return new iv(n);if(n.name==="xor")return new bl(n);if(n.name==="conditional")return new fv(n);if(n.name==="maximum")return new pv(n);if(n.name==="minimum")return new _v(n);if(n.name==="reverse")return new bv(n);if(n.name==="replace_first")return new Vv(n);if(n.name==="replace_all")return new Nv(n);if(n.name==="char_length")return new xv(n);if(n.name==="byte_length")return new Dv(n);if(n.name==="like")return new kv(n);if(n.name==="regex_contains")return new Ov(n);if(n.name==="regex_match")return new Lv(n);if(n.name==="string_contains")return new Mv(n);if(n.name==="starts_with")return new Fv(n);if(n.name==="ends_with")return new Uv(n);if(n.name==="to_lower")return new Bv(n);if(n.name==="to_upper")return new qv(n);if(n.name==="trim")return new jv(n);if(n.name==="string_concat")return new $v(n);if(n.name==="map_get")return new Wv(n);if(n.name==="cosine_distance")return new Gv(n);if(n.name==="dot_product")return new zv(n);if(n.name==="euclidean_distance")return new Hv(n);if(n.name==="vector_length")return new Qv(n);if(n.name==="unix_micros_to_timestamp")return new Zv(n);if(n.name==="timestamp_to_unix_micros")return new nT(n);if(n.name==="unix_millis_to_timestamp")return new eT(n);if(n.name==="timestamp_to_unix_millis")return new rT(n);if(n.name==="unix_seconds_to_timestamp")return new tT(n);if(n.name==="timestamp_to_unix_seconds")return new sT(n);if(n.name==="timestamp_add")return new iT(n);if(n.name==="timestamp_subtract")return new oT(n)}throw new Error(`Unknown Expr : ${n}`)}class QE{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===ir)return v.newValue({referenceValue:Bi(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return v.newValue({timestampValue:Ci(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return v.newValue({timestampValue:Ci(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?lo(r)?v.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Ci(i.serializer,W.fromTimestamp(or(o)))};if(i.serverTimestampBehavior==="previous"){const l=Us(o);if(l)return l}return{nullValue:"NULL_VALUE"}}(e,r)):v.newValue(r):v.mr()}}class KE{constructor(e){this.expr=e}evaluate(e,t){return v.newValue(this.expr._getValue())}}class YE{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.ur.map(s=>j(s).evaluate(e,t));return r.some(s=>s.gr())?v.dr():v.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function De(n){return wn(n)?Number(n.doubleValue):Number(n.integerValue)}function Rt(n){return BigInt(n.integerValue)}const XE=BigInt("0x7fffffffffffffff"),JE=-BigInt("0x8000000000000000");class Ws{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length>=2,24778);const r=j(this.expr.params[0]).evaluate(e,t),s=j(this.expr.params[1]).evaluate(e,t);let i=this.wr(r,s);for(const o of this.expr.params.slice(2)){const l=j(o).evaluate(e,t);i=this.wr(i,l)}return i}wr(e,t){if(e.gr()||t.gr())return v.dr();if(e.yr()||t.yr())return v.pr();const r=e.value,s=t.value;if(!wn(r)&&!vt(r)||!wn(s)&&!vt(s))return v.dr();if(wn(r)||wn(s)){const i=this.br(r,s);return i?v.newValue(i):v.dr()}if(vt(r)&&vt(s)){const i=this.vr(r,s);return i===void 0?v.dr():typeof i=="number"?v.newValue({doubleValue:i}):i<JE||i>XE?v.dr():v.newValue({integerValue:`${i}`})}return v.dr()}}function Lt(n,e){return ve(n)!==ve(e)?"TYPE_MISMATCH":Ze(n)||Ze(e)?"NOT_EQ":st(n)&&st(e)?"EQ":st(n)||st(e)?"NULL":ur(n)&&ur(e)?function(r,s){if(r.values?.length!==s.values?.length)return"NOT_EQ";let i=!1;for(let o=0;o<(r.values?.length??0);o++){const l=r.values[o],u=s.values[o];switch(Lt(l,u)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:q(44609,{Sr:l,Dr:u})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):xi(n)&&xi(e)||Rn(n)&&Rn(e)?function(r,s){const i=r.fields||{},o=s.fields||{};if(Vi(i)!==Vi(o))return"NOT_EQ";let l=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(Lt(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":l=!0}}return l?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return lt(r,s,{o:!1,t:!0,i:!0})}(n,e)?"EQ":"NOT_EQ"}class ZE extends Ws{vr(e,t){return Rt(e)+Rt(t)}br(e,t){return{doubleValue:De(e)+De(t)}}}class ev extends Ws{constructor(e){super(e),this.expr=e}vr(e,t){return Rt(e)-Rt(t)}br(e,t){return{doubleValue:De(e)-De(t)}}}class tv extends Ws{constructor(e){super(e),this.expr=e}vr(e,t){return Rt(e)*Rt(t)}br(e,t){return{doubleValue:De(e)*De(t)}}}class nv extends Ws{constructor(e){super(e),this.expr=e}vr(e,t){const r=Rt(t);if(r!==BigInt(0))return Rt(e)/r}br(e,t){const r=De(t);return r===0?{doubleValue:_s(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:De(e)/r}}}class rv extends Ws{constructor(e){super(e),this.expr=e}vr(e,t){const r=Rt(t);if(r!==BigInt(0))return Rt(e)%r}br(e,t){const r=De(t);if(r!==0)return{doubleValue:De(e)%r}}}class sv{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const o=j(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!o.value?.booleanValue)return v.newValue(Ve);break;case"NULL":s=!0;break;default:r=!0}}return r?v.dr():s?v.pr():v.newValue(Xe)}}class Io{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,9634);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return v.newValue({booleanValue:!r.value?.booleanValue});case"NULL":return v.pr();default:return v.dr()}}}class iv{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const o=j(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(o.value?.booleanValue)return v.newValue(Xe);break;case"NULL":s=!0;break;default:r=!0}}return r?v.dr():s?v.pr():v.newValue(Ve)}}class bl{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const o=j(i).evaluate(e,t);switch(o.type){case"BOOLEAN":r=bl.xor(r,!!o.value?.booleanValue);break;case"NULL":s=!0;break;default:return v.dr()}}return s?v.pr():v.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class zf{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,55094);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return v.dr()}const i=j(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return v.dr()}if(r)return v.pr();for(const o of i.value?.arrayValue?.values??[])switch(st(s.value)&&st(o)?"EQ":Lt(s.value,o)){case"EQ":return v.newValue(Xe);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(44608,{value:s.value,candidate:o})}return r?v.pr():v.newValue(Ve)}}class ov{constructor(e){this.expr=e}evaluate(e,t){return new Io(new b("not",[new b("equal_any",this.expr.params)])).evaluate(e,t)}}class av{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,23322);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return v.newValue(Ve);case"DOUBLE":return v.newValue({booleanValue:isNaN(De(r.value))});case"NULL":return v.pr();default:return v.dr()}}}class lv{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,50406),new Io(new b("not",[new b("is_nan",this.expr.params)])).evaluate(e,t)}}class uv{constructor(e){this.expr=e}evaluate(e,t){switch(U(this.expr.params.length===1,23123),j(this.expr.params[0]).evaluate(e,t).type){case"NULL":return v.newValue(Xe);case"UNSET":case"ERROR":return v.dr();default:return v.newValue(Ve)}}}class cv{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,23167),new Io(new b("not",[new b("is_null",this.expr.params)])).evaluate(e,t)}}class hv{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,5228),j(this.expr.params[0]).evaluate(e,t).type==="ERROR"?v.newValue(Xe):v.newValue(Ve)}}class dv{constructor(e){this.expr=e}evaluate(e,t){switch(U(this.expr.params.length===1,6877),j(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return v.dr();case"UNSET":return v.newValue(Ve);default:return v.newValue(Xe)}}}class fv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===3,11706);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return r.value?.booleanValue?j(this.expr.params[1]).evaluate(e,t):j(this.expr.params[2]).evaluate(e,t);case"NULL":return j(this.expr.params[2]).evaluate(e,t);default:return v.dr()}}}class pv{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>j(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Je(i.value,s.value)>0?i:s}return s===void 0?v.pr():s}}class _v{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>j(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Je(i.value,s.value)<0?i:s}return s===void 0?v.pr():s}}class vr{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return v.dr()}const s=j(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return v.dr()}return this.Cr(r,s)}}class mv extends vr{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return v.newValue(Xe);if(e.yr()||t.yr()||Ze(e.value)||Ze(t.value)||ve(e.value)!==ve(t.value))return v.newValue(Ve);switch(Lt(e.value,t.value)){case"EQ":return v.newValue(Xe);case"NOT_EQ":return v.newValue(Ve);case"NULL":return v.pr();default:q(44615,{left:e,right:t})}}}class gv extends vr{constructor(e){super(e),this.expr=e}Cr(e,t){switch(Lt(e.value,t.value)){case"EQ":return v.newValue(Ve);case"NOT_EQ":case"TYPE_MISMATCH":return v.newValue(Xe);case"NULL":return v.pr();default:q(44614,{left:e,right:t})}}}class yv extends vr{constructor(e){super(e),this.expr=e}Cr(e,t){return ve(e.value)!==ve(t.value)||Ze(e.value)||Ze(t.value)?v.newValue(Ve):v.newValue({booleanValue:Je(e.value,t.value)<0})}}class Ev extends vr{constructor(e){super(e),this.expr=e}Cr(e,t){return ve(e.value)!==ve(t.value)||Ze(e.value)||Ze(t.value)?v.newValue(Ve):Lt(e.value,t.value)==="EQ"?v.newValue(Xe):v.newValue({booleanValue:Je(e.value,t.value)<0})}}class vv extends vr{constructor(e){super(e),this.expr=e}Cr(e,t){return ve(e.value)!==ve(t.value)||Ze(e.value)||Ze(t.value)?v.newValue(Ve):v.newValue({booleanValue:Je(e.value,t.value)>0})}}class Tv extends vr{constructor(e){super(e),this.expr=e}Cr(e,t){return ve(e.value)!==ve(t.value)||Ze(e.value)||Ze(t.value)?v.newValue(Ve):Lt(e.value,t.value)==="EQ"?v.newValue(Xe):v.newValue({booleanValue:Je(e.value,t.value)>0})}}class wv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Iv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,216);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return v.pr();case"ARRAY":{const s=r.value.arrayValue?.values??[];return v.newValue({arrayValue:{values:[...s].reverse()}})}default:return v.dr()}}}class Av{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===2,52884),new zf(new b("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class Cv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,1392);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return v.dr()}const i=j(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return v.dr()}if(r)return v.pr();const o=i.value?.arrayValue?.values??[],l=s.value?.arrayValue?.values??[];for(const u of o){let h=!1;r=!1;for(const f of l){switch(st(u)&&st(f)?"EQ":Lt(u,f)){case"EQ":h=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(44613,{value:f,search:u})}if(h)break}if(!h)return v.newValue(Ve)}return v.newValue(Xe)}}class Rv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,2680);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return v.dr()}const i=j(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return v.dr()}if(r)return v.pr();const o=i.value?.arrayValue?.values??[],l=s.value?.arrayValue?.values??[];for(const u of l)for(const h of o)switch(st(u)&&st(h)?"EQ":Lt(u,h)){case"EQ":return v.newValue(Xe);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(60403,{value:u,search:h})}return r?v.pr():v.newValue(Ve)}}class Sv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,38605);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return v.pr();case"ARRAY":return v.newValue({integerValue:`${r.value?.arrayValue?.values?.length??0}`});default:return v.dr()}}}class Pv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class bv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,1508);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return v.pr();case"BYTES":{const s=r.value?.bytesValue;if(typeof s=="string"){const i=Ee.fromBase64String(s).toUint8Array();return i.reverse(),v.newValue({bytesValue:Ee.fromUint8Array(i).toBase64()})}return v.newValue({bytesValue:new Uint8Array(s).reverse()})}case"STRING":{const s=r.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(s),o=Array.from(i,l=>l.segment).reverse();return v.newValue({stringValue:o.join("")})}default:return v.dr()}}}class Vv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Nv{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class xv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,19400);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return v.pr();case"STRING":{const s=function(o){let l=0;for(let u=0;u<o.length;u++){const h=o.codePointAt(u);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const f=o.codePointAt(u+1);f!==void 0&&f>=56320&&f<=57343?(l+=1,u++):l+=1}else l+=1;else l+=1;else{if(!(h<=1114111))return;l+=1,u++}}return l}(r.value.stringValue);return s===void 0?v.dr():v.newValue({integerValue:s})}default:return v.dr()}}}class Dv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,8486);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const s=r.value?.bytesValue;return typeof s=="string"?v.newValue({integerValue:Ee.fromBase64String(s).toUint8Array().length}):v.newValue({integerValue:new Uint8Array(s).length})}case"STRING":{const s=function(o){let l=0;for(let u=0;u<o.length;u++){const h=o.codePointAt(u);if(h===void 0)return;if(h>=55296&&h<=57343){if(!(h<=56319))return;{const f=o.codePointAt(u+1);if(f===void 0||!(f>=56320&&f<=57343))return;l+=4,u++}}else if(h<=127)l+=1;else if(h<=2047)l+=2;else if(h<=65535)l+=3;else{if(!(h<=1114111))return;l+=4,u++}}return l}(r.value?.stringValue);return s===void 0?v.dr():v.newValue({integerValue:s})}case"NULL":return v.pr();default:return v.dr()}}}class Tr{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return v.dr()}const i=j(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return v.dr()}return r?v.pr():this.Fr(s.value?.stringValue,i.value?.stringValue)}}class kv extends Tr{Fr(e,t){try{const r=function(o){let l="";for(let u=0;u<o.length;u++){const h=o.charAt(u);switch(h){case"_":l+=".";break;case"%":l+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":l+="\\"+h;break;default:l+=h}}return"^"+l+"$"}(t),s=rl.compile(r);return v.newValue({booleanValue:s.matches(e)})}catch(r){return mt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),v.dr()}}}class Ov extends Tr{Fr(e,t){try{const r=rl.compile(t);return v.newValue({booleanValue:r.test(e)})}catch{return mt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),v.dr()}}}class Lv extends Tr{Fr(e,t){try{return v.newValue({booleanValue:rl.compile(t).matches(e)})}catch{return mt(`Invalid regex pattern found in regex_match: ${t}, returning error`),v.dr()}}}class Mv extends Tr{Fr(e,t){return v.newValue({booleanValue:e.includes(t)})}}class Fv extends Tr{Fr(e,t){return v.newValue({booleanValue:e.startsWith(t)})}}class Uv extends Tr{Fr(e,t){return v.newValue({booleanValue:e.endsWith(t)})}}class Bv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,29079);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return v.newValue({stringValue:r.value?.stringValue?.toLowerCase()});case"NULL":return v.pr();default:return v.dr()}}}class qv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,60487);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return v.newValue({stringValue:r.value?.stringValue?.toUpperCase()});case"NULL":return v.pr();default:return v.dr()}}}class jv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,28544);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return v.newValue({stringValue:r.value?.stringValue?.trim()});case"NULL":return v.pr();default:return v.dr()}}}class $v{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(o=>j(o).evaluate(e,t));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return v.dr()}return i?v.pr():v.newValue({stringValue:s})}}class Wv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,4483);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return v.mr();case"MAP":break;default:return v.dr()}const s=j(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return v.dr();const i=r.value?.mapValue?.fields?.[s.value?.stringValue];return i===void 0?v.mr():v.newValue(i)}}class Vl{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return v.dr()}const i=j(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return v.dr()}if(r)return v.pr();const o=Va(s.value),l=Va(i.value);if(o===void 0||l===void 0||o.values?.length!==l.values?.length)return v.dr();const u=this.Or(o,l);return u===void 0||isNaN(u)?v.dr():v.newValue({doubleValue:u})}}class Gv extends Vl{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return;let i=0,o=0,l=0;for(let h=0;h<r.length;h++){if(!nn(r[h])||!nn(s[h]))return;const f=De(r[h]),p=De(s[h]);i+=f*p,o+=f*f,l+=p*p}const u=Math.sqrt(o)*Math.sqrt(l);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class zv extends Vl{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!nn(r[o])||!nn(s[o]))return;i+=De(r[o])*De(s[o])}return i}}class Hv extends Vl{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!nn(r[o])||!nn(s[o]))return;const l=De(r[o]),u=De(s[o]);i+=Math.pow(l-u,2)}return Math.sqrt(i)}}class Qv{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,39044);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const s=Va(r.value);return v.newValue({integerValue:s?.values?.length??0})}case"NULL":return v.pr();default:return v.dr()}}}const Rs=BigInt(-62135596800),Ss=BigInt(253402300799),ji=BigInt(1e3),Xt=BigInt(1e6),Kv=Rs*ji,Yv=Ss*ji+BigInt(999),Xv=Rs*Xt,Jv=Ss*Xt+BigInt(999999);function Nl(n){return n>=Xv&&n<=Jv}function Hf(n){return n>=Rs&&n<=Ss}function Ps(n,e){const t=BigInt(n);return!(t<Rs||t>Ss)&&!(e<0||e>=1e9)&&(t!==Rs||e===0)&&!(t===Ss&&e>999999999)}function Qf(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function xl(n){return BigInt(n.seconds)*Xt+BigInt(Math.trunc(n.nanoseconds/1e3))}class Dl{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return v.pr();default:return v.dr()}}}class Zv extends Dl{toTimestamp(e){if(!Nl(e))return v.dr();let t=Number(e/Xt),r=Number(e%Xt*BigInt(1e3));const s=Qf(t,r);return t=s.seconds,r=s.nanos,Ps(t,r)?v.newValue({timestampValue:{seconds:t,nanos:r}}):v.dr()}}class eT extends Dl{toTimestamp(e){if(!function(o){return o>=Kv&&o<=Yv}(e))return v.dr();let t=Number(e/ji),r=Number(e%ji*BigInt(1e6));const s=Qf(t,r);return t=s.seconds,r=s.nanos,Ps(t,r)?v.newValue({timestampValue:{seconds:t,nanos:r}}):v.dr()}}class tT extends Dl{toTimestamp(e){if(!Hf(e))return v.dr();const t=Number(e);return v.newValue({timestampValue:{seconds:t,nanos:0}})}}class kl{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return v.pr();default:return v.dr()}const s=El(r.value.timestampValue);return Ps(s.seconds,s.nanoseconds)?this.Mr(s):v.dr()}}class nT extends kl{Mr(e){const t=xl(e);return Nl(t)?v.newValue({integerValue:`${t.toString()}`}):v.dr()}}class rT extends kl{Mr(e){const t=xl(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?v.newValue({integerValue:r.toString()}):v.newValue({integerValue:(r-BigInt(1)).toString()})}}class sT extends kl{Mr(e){const t=BigInt(e.seconds);return Hf(t)?v.newValue({integerValue:t.toString()}):v.dr()}}class Kf{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return v.dr()}const i=j(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(te){switch(te){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return v.dr();break;case"NULL":r=!0;break;default:return v.dr()}const l=j(this.expr.params[2]).evaluate(e,t);switch(l.type){case"INT":break;case"NULL":r=!0;break;default:return v.dr()}if(r)return v.pr();const u=BigInt(l.value.integerValue);let h;try{switch(o){case"microsecond":h=u;break;case"millisecond":h=u*BigInt(1e3);break;case"second":h=u*BigInt(1e6);break;case"minute":h=u*BigInt(6e7);break;case"hour":h=u*BigInt(36e8);break;case"day":h=u*BigInt(864e8);break;default:return v.dr()}if(o!=="microsecond"&&u!==BigInt(0)&&h/u!==BigInt(this.Nr(o)))return v.dr()}catch(z){return mt(`Error during timestamp arithmetic: ${z}`),v.dr()}const f=El(s.value.timestampValue);if(!Ps(f.seconds,f.nanoseconds))return v.dr();const p=xl(f),m=this.Lr(p,h);if(!Nl(m))return v.dr();const R=Number(m/Xt),P=m%Xt,k=Number((P<0?P+Xt:P)*BigInt(1e3)),L=P<0?R-1:R;return Ps(L,k)?v.newValue({timestampValue:{seconds:L,nanos:k}}):v.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class iT extends Kf{Lr(e,t){return e+t}}class oT extends Kf{Lr(e,t){return e-t}}// Copyright 2024 Google LLC* @license
class Ge{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Ao(this)}getPipelineCollectionGroup(){return Ol(this)}getPipelineCollectionId(){return aT(this)}getPipelineDocuments(){return Ma(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==Wf.name&&s._name!==$f.name||(r="keyless"),s._name===HE.name&&r==="exact"&&(r="augmented"),s._name===jf.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Jt(this)}}function Jt(n){const e=n.stages[0];return e instanceof To||e instanceof wo||e instanceof Al||e instanceof Cl?e._name:"unknown"}function Ao(n){if(Jt(n)==="collection")return n.stages[0].Er}function Ol(n){if(Jt(n)==="collection_group")return n.stages[0].collectionId}function aT(n){switch(Jt(n)){case"collection":return re.fromString(Ao(n)).lastSegment();case"collection_group":return Ol(n);default:return}}function Ma(n){if(Jt(n)==="documents")return n.stages[0].hr}function bs(n){if((n=Gf(n))instanceof $s)return`fld(${n.fieldName})`;if(n instanceof Er)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof ge?`ref(${t.path})`:t instanceof Ke?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof b)return`fn(${n.name},[${n.params.map(bs).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.ur.map(bs).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function lT(n){if(n instanceof jf)return`${n._name}(${yi(n.fields)})`;if(n instanceof $f){let e=`${n._name}(${yi(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${yi(n.groups)})`),e}if(n instanceof Wf)return`${n._name}(${yi(n.groups)})`;if(n instanceof To)return`${n._name}(${n.Er})`;if(n instanceof wo)return`${n._name}(${n.collectionId})`;if(n instanceof Al)return`${n._name}()`;if(n instanceof Cl)return`${n._name}(${n.hr.sort()})`;if(n instanceof Rl)return`${n._name}(${bs(n.condition)})`;if(n instanceof Cs)return`${n._name}(${n.limit})`;if(n instanceof Sl)return`${n._name}(${function(t){return t.map(r=>`${bs(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function yi(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${bs(t)}`).join(",")}`}function xt(n){return n.stages.map(e=>lT(e)).join("|")}function Yf(n,e){return xt(n)===xt(e)}function Ie(n){return n instanceof Ge}function mh(n){return Ie(n)?xt(n):ts(n)}function Xf(n){return Ie(n)?xt(n):function(t){return`${uf(wt(t))}|lt:${t.limitType}`}(n)}function Co(n,e){return n instanceof Ge&&e instanceof Ge?Yf(n,e):!(n instanceof Ge&&!(e instanceof Ge)||!(n instanceof Ge)&&e instanceof Ge)&&Ay(n,e)}function Jf(n){return Tn(n)?xt(n):uf(n)}function Zf(n,e){return n instanceof Ge&&e instanceof Ge?Yf(n,e):!(n instanceof Ge&&!(e instanceof Ge)||!(n instanceof Ge)&&e instanceof Ge)&&cf(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=_f();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const u=ef(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&sr(this.mutations,e.mutations,(t,r)=>Hc(t,r))&&sr(this.baseMutations,e.baseMutations,(t,r)=>Hc(t,r))}}class Ll{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){U(e.mutations.length===r.length,58842,{Br:e.mutations.length,Ur:r.length});let s=function(){return by}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ll(e,t,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="";function cT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=gh(e)),e=hT(n.get(t),e);return gh(e)}function hT(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ep:t+="";break;default:t+=i}}return t}function gh(n){return n+ep+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,r,s,i=W.min(),o=W.min(),l=Ee.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.qr=e}}function pT(n){const e=zy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.Yi=new mT}addToCollectionParentIndex(e,t){return this.Yi.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(rn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(rn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class mT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ye(re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ye(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new an(0)}static ws(){return new an(-1)}}// Copyright 2024 Google LLC* @license
function tp(n,e){let t=e;for(const r of n.stages)t=yT({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},r,t);return t}function Ro(n,e){return tp(n,[e]).length>0}function gT(n,e){return Ie(n)?Ro(n,e):_o(n,e)}function yT(n,e,t){if(e instanceof To)return function(s,i,o){return o.filter(l=>l.isFoundDocument()&&`/${l.key.getCollectionPath().canonicalString()}`===i.Er)}(0,e,t);if(e instanceof Rl)return function(s,i,o){return o.filter(l=>{const u=rs(j(i.condition).evaluate(s,l));return u!==void 0&&lt(u,Xe)})}(n,e,t);if(e instanceof wo)return function(s,i,o){return o.filter(l=>l.isFoundDocument()&&l.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof Al)return function(s,i,o){return o.filter(l=>l.isFoundDocument())}(0,0,t);if(e instanceof Cl)return function(s,i,o){return o.filter(l=>l.isFoundDocument()&&i.Tr.has(l.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Cs)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof Sl)return function(s,i,o){const l=i.orderings.map(u=>({Os:j(u.expr),direction:u.direction}));return[...o].sort((u,h)=>{for(const{Os:f,direction:p}of l){const m=rs(f.evaluate(s,u)),R=rs(f.evaluate(s,h)),P=Je(m??ar,R??ar);if(P!==0)return p==="ascending"?P:-P}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Fa(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Sl)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=rs(j(s.expr).evaluate({serializer:n.serializer},t)),o=rs(j(s.expr).evaluate({serializer:n.serializer},r)),l=Je(i||ar,o||ar);if(l!==0)return s.direction==="ascending"?l:-l}return 0}}function da(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Cs)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(){this.changes=new Mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Zr(r.mutation,s,ht.empty(),ce.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,t,r=K()){const s=zt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Hn();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,K()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=ze();const o=ns(),l=function(){return ns()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Ln)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Zr(f.mutation,h,f.mutation.getFieldMask(),ce.now())):o.set(h.key,ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>l.set(h,new vT(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=ns();let s=new pe((o,l)=>o-l),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||ht.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||K()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=_f();f.forEach(m=>{if(!i.has(m)){const R=ef(t.get(m),r.get(m));R!==null&&p.set(m,R),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Ie(t)?this.getDocumentsMatchingPipeline(e,t,r,s):Ty(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(zt());let l=Ts,u=i;return o.next(h=>V.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,K())).next(f=>({batchId:l,changes:pf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=Hn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Hn();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const h=function(p,m){return new po(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,l=>_o(t,l)))}getDocumentsMatchingPipeline(e,t,r,s){if(Jt(t)==="collection_group"){const i=Ol(t);let o=Hn();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const h=function(p,m){const R=p.stages.map(P=>P instanceof wo?new To(m.canonicalString(),{}):P);return new Ge(p.serializer,R)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,h,r,s).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(o=>{switch(i=o,Jt(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let l=K();for(const u of Ma(t))l=l.add(B.fromPath(u));return this.remoteDocumentCache.getEntries(e,l);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new F("invalid-argument",`Invalid pipeline source to execute offline: ${xt(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,l=>Ro(t,l)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,o)=>{const l=o.getKey();t.get(l)===null&&(t=t.insert(l,Fe.newInvalidDocument(l)))});let s=Hn();return t.forEach((i,o)=>{const l=e.get(i);l!==void 0&&Zr(l.mutation,o,ht.empty(),ce.now()),r(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,r){switch(Jt(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,re.fromString(Ao(t)),r);case"collection_group":throw new F("invalid-argument",`Unexpected collection group pipeline: ${xt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Ma(t).map(s=>B.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new F("invalid-argument",`Failed to get overlays for pipeline: ${xt(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.serializer=e,this.Ks=new Map,this.Ws=new Map}getBundleMetadata(e,t){return V.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,function(s){return{id:s.id,version:s.version,createTime:It(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:pT(s.bundledQuery),readTime:It(s.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.overlays=new pe(B.comparator),this.Qs=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=zt();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=zt();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),V.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Yr(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qs.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=zt(),i=t.length+1,o=new B(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=zt(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=zt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return V.resolve(l)}Yr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qs.get(s.largestBatchId).delete(r.key);this.Qs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dT(t,r));let i=this.Qs.get(t);i===void 0&&(i=K(),this.Qs.set(t,i)),this.Qs.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.Gs=new ye(Se.zs),this.js=new ye(Se.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const r=new Se(e,t);this.Gs=this.Gs.add(r),this.js=this.js.add(r)}Js(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ys(new Se(e,t))}Zs(e,t){e.forEach(r=>this.removeReference(r,t))}Xs(e){const t=new B(new re([])),r=new Se(t,e),s=new Se(t,e+1),i=[];return this.js.forEachInRange([r,s],o=>{this.Ys(o),i.push(o.key)}),i}e_(){this.Gs.forEach(e=>this.Ys(e))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new B(new re([])),r=new Se(t,e),s=new Se(t,e+1);let i=K();return this.js.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Se(e,0),r=this.Gs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return B.comparator(e.key,t.key)||X(e.n_,t.n_)}static Hs(e,t){return X(e.n_,t.n_)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Qr=1,this.r_=new ye(Se.zs)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Qr;this.Qr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uT(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.r_=this.r_.add(new Se(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,t){return V.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.s_(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?hl:this.Qr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([r,s],o=>{const l=this.i_(o.n_);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(X);return t.forEach(s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,o],l=>{r=r.add(l.n_)})}),V.resolve(this.__(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new Se(new B(i),0);let l=new ye(X);return this.r_.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.n_)),!0)},o),V.resolve(this.__(l))}__(e){const t=[];return e.forEach(r=>{const s=this.i_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){U(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.r_;return V.forEach(t.mutations,s=>{const i=new Se(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.r_=r})}jr(e){}containsKey(e,t){const r=new Se(t,0),s=this.r_.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.a_=e,this.docs=function(){return new pe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.a_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let r=ze();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Fe.newInvalidDocument(s))}),V.resolve(r)}getAllEntries(e){let t=ze();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),V.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,o;Ie(t)?(i=re.fromString(Ao(t)),o=f=>Ro(t,f)):(i=t.path,o=f=>_o(t,f));let l=ze();const u=new B(i.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!i.isPrefixOf(f.path))break;f.path.length>i.length+1||yy(gy(p),r)<=0||(s.has(p.key)||o(p))&&(l=l.insert(p.key,p.mutableCopy()))}return V.resolve(l)}getAllFromCollectionGroup(e,t,r,s){q(9500)}u_(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new ST(this)}getSize(e){return V.resolve(this.size)}}class ST extends ET{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.persistence=e,this.c_=new Mn(t=>Jf(t),Zf),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.l_=0,this.E_=new Ml,this.targetCount=0,this.h_=an.ys()}forEachTarget(e,t){return this.c_.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.l_&&(this.l_=t),V.resolve()}Ss(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new an(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.Ss(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Ss(t),V.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.c_.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.c_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.c_.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.E_.Js(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.E_.Zs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.E_.t_(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.E_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t){this.T_={},this.overlays={},this.P_=new go(0),this.R_=!1,this.R_=!0,this.I_=new AT,this.referenceDelegate=e(this),this.A_=new PT(this),this.indexManager=new _T,this.remoteDocumentCache=function(s){return new RT(s)}(r=>this.referenceDelegate.V_(r)),this.serializer=new fT(t),this.d_=new wT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new IT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.T_[e.toKey()];return r||(r=new CT(t,this.referenceDelegate),this.T_[e.toKey()]=r),r}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new bT(this.P_.next());return this.referenceDelegate.f_(),r(s).next(i=>this.referenceDelegate.m_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}p_(e,t){return V.or(Object.values(this.T_).map(r=>()=>r.containsKey(e,t)))}}class bT extends EE{constructor(e){super(),this.currentSequenceNumber=e}}class Fl{constructor(e){this.persistence=e,this.g_=new Ml,this.y_=null}static w_(e){return new Fl(e)}get b_(){if(this.y_)return this.y_;throw q(60996)}addReference(e,t,r){return this.g_.addReference(r,t),this.b_.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.g_.removeReference(r,t),this.b_.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),V.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach(s=>this.b_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.b_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.b_,r=>{const s=B.fromPath(r);return this.v_(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.y_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(r=>{r?this.b_.delete(t.toString()):this.b_.add(t.toString())})}V_(e){return 0}v_(e,t){return V.or([()=>V.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class $i{constructor(e,t){this.persistence=e,this.S_=new Mn(r=>cT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=CE(this,t)}static w_(e,t){return new $i(e,t)}f_(){}m_(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}xs(e){let t=0;return this.ir(e,r=>{t++}).next(()=>t)}ir(e,t){return V.forEach(this.S_,(r,s)=>this.Fs(e,r,s).next(i=>i?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,o=>this.Fs(e,o,t).next(l=>{l||(r++,i.removeEntry(o,W.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.S_.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.S_.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.S_.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.S_.set(t,e.currentSequenceNumber),V.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=wi(e.data.value)),t}Fs(e,t,r){return V.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.S_.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ao=r,this.Vo=s}static fo(e,t){let r=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ul(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(n,e){return B.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=function(){return Vm()?8:vE(wd())>0?6:4}()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.vo(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.So(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new NT;return this.Do(e,t,o).next(l=>{if(i.result=l,this.po)return this.xo(e,t,o,l.size)})}).next(()=>i.result)}xo(e,t,r,s){return Ie(t)?V.resolve():r.documentReadCount<this.yo?(Gn()<=Z.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",ts(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),V.resolve()):(Gn()<=Z.DEBUG&&M("QueryEngine","Query:",ts(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.wo*s?(Gn()<=Z.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",ts(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wt(t))):V.resolve())}vo(e,t){if(Ie(t))return V.resolve(null);let r=t;if(Zc(r))return V.resolve(null);let s=wt(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=xa(r,null,"F"),s=wt(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const l=K(...o);return this.bo.getDocuments(e,l).next(u=>this.indexManager.getMinOffset(e,s).next(h=>{const f=this.Co(r,u);return this.Fo(r,f,l,h.readTime)?this.vo(e,xa(r,null,"F")):this.Oo(e,f,r,h)}))})))}So(e,t,r,s){return(Ie(t)?function(o){for(const l of o.stages){if(l instanceof Cs||l instanceof _h)return!1;if(l instanceof Rl){if(l.condition instanceof Uf&&l.condition._expr.name==="exists"&&l.condition._expr.params[0]instanceof $s&&l.condition._expr.params[0].fieldName===ir)continue;return!1}}return!0}(t):Zc(t))||s.isEqual(W.min())?V.resolve(null):this.bo.getDocuments(e,r).next(i=>{const o=this.Co(t,i);return this.Fo(t,o,r,s)?V.resolve(null):(Gn()<=Z.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mh(t)),this.Oo(e,o,t,my(s,Ts)).next(l=>l))})}Co(e,t){let r,s;return Ie(e)?(r=new ye(VT),s=i=>Ro(e,i)):(r=new ye(gl(e)),s=i=>_o(e,i)),t.forEach((i,o)=>{s(o)&&(r=r.add(o))}),r}Fo(e,t,r,s){if(Ie(e))return function(l){return l.stages.some(u=>u instanceof Cs||u instanceof _h)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,r){return Gn()<=Z.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",mh(t)),this.bo.getDocumentsMatchingQuery(e,t,rn.min(),r)}Oo(e,t,r,s){return this.bo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="LocalStore",DT=3e8;class kT{constructor(e,t,r,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new pe(X),this.Lo=new Mn(i=>Jf(i),Zf),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(r)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TT(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.No))}}function OT(n,e,t,r){return new kT(n,e,t,r)}async function rp(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=K();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({qo:h,removedBatchIds:o,addedBatchIds:l}))})})}function LT(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let R=V.resolve();return m.forEach(P=>{R=R.next(()=>f.getEntry(u,P)).next(k=>{const L=h.docVersions.get(P);U(L!==null,48541),k.version.compareTo(L)<0&&(p.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),f.addEntry(k)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=K();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function sp(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.A_.getLastRemoteSnapshotVersion(t))}function MT(n,e){const t=G(n),r=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const l=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;l.push(t.A_.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.A_.addMatchingKeys(i,f.addedDocuments,p)));let R=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(Ee.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),s=s.insert(p,R),function(k,L,z){return k.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=DT?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(m,R,f)&&l.push(t.A_.updateTargetData(i,R))});let u=ze(),h=K();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(FT(i,o,e.documentUpdates).next(f=>{u=f.$o,h=f.Ko})),!r.isEqual(W.min())){const f=t.A_.getLastRemoteSnapshotVersion(i).next(p=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.No=s,i))}function FT(n,e,t){let r=K(),s=K();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=ze();return t.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):M(Bl,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{$o:o,Ko:s}})}function UT(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=hl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BT(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.A_.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.A_.allocateTargetId(r).next(o=>(s=new Vt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.A_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.No.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(r.targetId,r),t.Lo.set(e,r.targetId)),r})}async function Ua(n,e,t){const r=G(n),s=r.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!yr(o))throw o;M(Bl,`Failed to update sequence numbers for target ${e}: ${o}`)}r.No=r.No.remove(e),r.Lo.delete(s.target)}function yh(n,e,t){const r=G(n);let s=W.min(),i=K();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=G(u),m=p.Lo.get(f);return m!==void 0?V.resolve(p.No.get(m)):p.A_.getTargetData(h,f)}(r,o,Ie(e)?e:wt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.A_.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Mo.getDocumentsMatchingQuery(o,e,t?s:W.min(),t?i:K())).next(l=>(qT(r,l),{documents:l,Wo:i})))}function qT(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Bo.get(s)||W.min();r.readTime.compareTo(i)>0&&n.Bo.set(s,r.readTime)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve())))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(Ot(t),this.Zo=!1):M("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="RemoteStore";class $T{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new an(1e3),this.ua=new an(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke(o=>{r.enqueueAndForget(async()=>{Un(this)&&(M(St,"Restarting streams for network reachability change."),await async function(u){const h=G(u);h.ca.add(4),await Gs(h),h.ha.set("Unknown"),h.ca.delete(4),await So(h)}(this))})}),this.ha=new jT(r,s)}}async function So(n){if(Un(n))for(const e of n.la)await e(!0)}async function Gs(n){for(const e of n.la)await e(!1)}function Ba(n,e){return n._a.get(e)||void 0}function ip(n,e){const t=G(n),r=Ba(t,e.targetId);if(r!==void 0&&t.sa.has(r))return;const s=function(l,u){const h=Ba(l,u);h!==void 0&&l.oa.delete(h);const f=function(m,R){return R%2!=0?m.ua.next():m.aa.next()}(l,u);return l._a.set(u,f),l.oa.set(f,u),f}(t,e.targetId);M(St,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Vt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),Wl(t)?$l(t):wr(t).Jt()&&jl(t,i)}function ql(n,e){const t=G(n),r=wr(t),s=Ba(t,e);M(St,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),r.Jt()&&op(t,s),t.sa.size===0&&(r.Jt()?r.Xt():Un(t)&&t.ha.set("Unknown"))}function jl(n,e){if(n.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.oa.get(e.targetId);if(t===void 0)return void M(St,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}wr(n).Tn(e)}function op(n,e){n.Ta.H(e),wr(n).Pn(e)}function $l(n){n.Ta=new Oy({getRemoteKeysForTarget:e=>{const t=n.oa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):K()},ge:e=>n.sa.get(e)||null,Ae:()=>n.datastore.serializer.databaseId}),wr(n).start(),n.ha.Xo()}function Wl(n){return Un(n)&&!wr(n).Ht()&&n.sa.size>0}function Un(n){return G(n).ca.size===0}function ap(n){n.Ta=void 0}async function WT(n){n.ha.set("Online")}async function GT(n){n.sa.forEach((e,t)=>{jl(n,e)})}async function zT(n,e){ap(n),Wl(n)?(n.ha.na(e),$l(n)):n.ha.set("Unknown")}async function HT(n,e,t){if(n.ha.set("Online"),e instanceof gf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds){if(s.sa.has(l)){const u=s.oa.get(l);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s._a.delete(u),s.oa.delete(l)),s.sa.delete(l)}s.Ta.removeTarget(l)}}(n,e)}catch(r){M(St,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Wi(n,r)}else if(e instanceof Ai?n.Ta.se(e):e instanceof mf?n.Ta.Ee(e):n.Ta.ae(e),!t.isEqual(W.min()))try{const r=await sp(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.Ta.de(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.sa.get(f);p&&i.sa.set(f,p.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const p=i.sa.get(h);if(!p)return;i.sa.set(h,p.withResumeToken(Ee.EMPTY_BYTE_STRING,p.snapshotVersion)),op(i,h);const m=new Vt(p.target,h,f,p.sequenceNumber);jl(i,m)});const u=function(f,p){const m=new Map;p.targetChanges.forEach((P,k)=>{const L=f.oa.get(k);L!==void 0&&m.set(L,P)});let R=new pe(X);return p.targetMismatches.forEach((P,k)=>{const L=f.oa.get(P);L!==void 0&&(R=R.insert(L,k))}),new qs(p.snapshotVersion,m,R,p.documentUpdates,p.augmentedDocumentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){M(St,"Failed to raise snapshot:",r),await Wi(n,r)}}async function Wi(n,e,t){if(!yr(e))throw e;n.ca.add(1),await Gs(n),n.ha.set("Offline"),t||(t=()=>sp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(St,"Retrying IndexedDB access"),await t(),n.ca.delete(1),await So(n)})}function lp(n,e){return e().catch(t=>Wi(n,t,e))}async function Po(n){const e=G(n),t=ln(e);let r=e.ia.length>0?e.ia[e.ia.length-1].batchId:hl;for(;QT(e);)try{const s=await UT(e.localStore,r);if(s===null){e.ia.length===0&&t.Xt();break}r=s.batchId,KT(e,s)}catch(s){await Wi(e,s)}up(e)&&cp(e)}function QT(n){return Un(n)&&n.ia.length<10}function KT(n,e){n.ia.push(e);const t=ln(n);t.Jt()&&t.Rn&&t.In(e.mutations)}function up(n){return Un(n)&&!ln(n).Ht()&&n.ia.length>0}function cp(n){ln(n).start()}async function YT(n){ln(n).dn()}async function XT(n){const e=ln(n);for(const t of n.ia)e.In(t.mutations)}async function JT(n,e,t){const r=n.ia.shift(),s=Ll.from(r,e,t);await lp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Po(n)}async function ZT(n,e){e&&ln(n).Rn&&await async function(r,s){if(function(o){return Sy(o)&&o!==N.ABORTED}(s.code)){const i=r.ia.shift();ln(r).Zt(),await lp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Po(r)}}(n,e),up(n)&&cp(n)}async function Eh(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),M(St,"RemoteStore received new credentials");const r=Un(t);t.ca.add(3),await Gs(t),r&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await So(t)}async function ew(n,e){const t=G(n);e?(t.ca.delete(2),await So(t)):e||(t.ca.add(2),await Gs(t),t.ha.set("Unknown"))}function wr(n){return n.Pa||(n.Pa=function(t,r,s){const i=G(t);return i.mn(),new hE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:WT.bind(null,n),lt:GT.bind(null,n),ht:zT.bind(null,n),hn:HT.bind(null,n)}),n.la.push(async e=>{e?(n.Pa.Zt(),Wl(n)?$l(n):n.ha.set("Unknown")):(await n.Pa.stop(),ap(n))})),n.Pa}function ln(n){return n.Ra||(n.Ra=function(t,r,s){const i=G(t);return i.mn(),new dE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:()=>Promise.resolve(),lt:YT.bind(null,n),ht:ZT.bind(null,n),An:XT.bind(null,n),Vn:JT.bind(null,n)}),n.la.push(async e=>{e?(n.Ra.Zt(),await Po(n)):(await n.Ra.stop(),n.ia.length>0&&(M(St,`Stopping write stream with ${n.ia.length} pending writes`),n.ia=[]))})),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):Ot("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new Gl(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zl(n,e){if(Ot("AsyncQueue",`${e}: ${n}`),yr(n))return new F(N.UNAVAILABLE,`${e}: ${n}`);throw n}class vh{constructor(){this.activeTargetIds=xy()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nw{constructor(){this.du=new vh,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,r){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new vh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function fa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{static emptySet(e){return new Pn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=Hn(),this.sortedSet=new pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Pn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.mu=new pe(B.comparator)}track(e){const t=e.doc.key,r=this.mu.get(t);r?e.type!==0&&r.type===3?this.mu=this.mu.insert(t,e):e.type===3&&r.type!==1?this.mu=this.mu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.mu=this.mu.remove(t):e.type===1&&r.type===2?this.mu=this.mu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):q(63341,{ye:e,pu:r}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal((t,r)=>{e.push(r)}),e}}class cr{constructor(e,t,r,s,i,o,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new cr(e,t,Pn.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Co(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some(e=>e.vu())}}class sw{constructor(){this.queries=wh(),this.onlineState="Unknown",this.Su=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=wh(),i.forEach((o,l)=>{for(const u of l.wu)u.onError(r)})})(this,new F(N.ABORTED,"Firestore shutting down"))}}function wh(){return new Mn(n=>Xf(n),Co)}async function iw(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.vu()&&(r=2):(i=new rw,r=e.vu()?0:1);try{switch(r){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=zl(o,`Initialization of query '${Ie(e.query)?xt(e.query):ts(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&Hl(t)}async function ow(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.wu.indexOf(e);o>=0&&(i.wu.splice(o,1),i.wu.length===0?s=e.vu()?0:1:!i.bu()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function aw(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.wu)l.xu(s)&&(r=!0);o.yu=s}}r&&Hl(t)}function lw(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.wu)i.onError(t);r.queries.delete(e)}function Hl(n){n.Su.forEach(e=>{e.next()})}var qa;(function(n){n.Default="default",n.Cache="cache"})(qa||(qa={}));class uw{constructor(e,t,r){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=r||{}}xu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new cr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.vu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=cr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}vu(){return this.options.source!==qa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.key=e}}class dp{constructor(e){this.key=e}}class cw{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=K(),this.mutatedKeys=K(),this.Hu=Ie(e)?Fa(e):gl(e),this.Ju=new Pn(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const r=t?t.Xu:new Th,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const[u,h]=this.ec(this.query,s);e.inorderTraversal((p,m)=>{const R=s.get(p),P=gT(this.query,m)?m:null,k=!!R&&this.mutatedKeys.has(R.key),L=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let z=!1;R&&P?R.data.isEqual(P.data)?k!==L&&(r.track({type:3,doc:P}),z=!0):this.tc(R,P)||(r.track({type:2,doc:P}),z=!0,(u&&this.Hu(P,u)>0||h&&this.Hu(P,h)<0)&&(l=!0)):!R&&P?(r.track({type:0,doc:P}),z=!0):R&&!P&&(r.track({type:1,doc:R}),z=!0,(u||h)&&(l=!0)),z&&(P?(o=o.add(P),i=L?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))});const f=this.nc(this.query);if(f)if(Ie(this.query)){const p=[];o.forEach(P=>p.push(P));const m=tp(this.query,p);let R=new Pn(Fa(this.query));for(const P of m)R=R.add(P);o.forEach(P=>{R.has(P.key)||(i=i.delete(P.key),r.track({type:1,doc:P}))}),o=R}else{const p=this.rc(this.query);for(;o.size>f;){const m=p==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}}return{Ju:o,Xu:r,Fo:l,mutatedKeys:i}}nc(e){return Ie(e)?da(e)?.limit:e.limit||void 0}rc(e){if(Ie(e)){const t=da(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){if(Ie(e)){const r=da(e)?.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const o=e.Xu.gu();o.sort((f,p)=>function(R,P){const k=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{ye:L})}};return k(R)-k(P)}(f.type,p.type)||this.Hu(f.doc,p.doc)),this.sc(r),s=s??!1;const l=t&&!s?this._c():[],u=this.ju.size===0&&this.current&&!s?1:0,h=u!==this.zu;return this.zu=u,o.length!==0||h?{snapshot:new cr(this.query,e.Ju,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),oc:l}:{oc:l}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new Th,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach(t=>this.Gu=this.Gu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Gu=this.Gu.delete(t)),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=K(),this.Ju.forEach(r=>{this.ac(r.key)&&(this.ju=this.ju.add(r.key))});const t=[];return e.forEach(r=>{this.ju.has(r)||t.push(new dp(r))}),this.ju.forEach(r=>{e.has(r)||t.push(new hp(r))}),t}uc(e){this.Gu=e.Wo,this.ju=K();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return cr.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const Ql="SyncEngine";class hw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class dw{constructor(e){this.key=e,this.lc=!1}}class fw{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ec={},this.hc=new Mn(l=>Xf(l),Co),this.Tc=new Map,this.Pc=new Set,this.Rc=new pe(B.comparator),this.Ic=new Map,this.Ac=new Ml,this.Vc={},this.dc=new Map,this.fc=an.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function pw(n,e,t=!0){const r=yp(n);let s;const i=r.hc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await fp(r,e,t,!0),s}async function _w(n,e){const t=yp(n);await fp(t,e,!0,!1)}async function fp(n,e,t,r){const s=await BT(n.localStore,Ie(e)?e:wt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await mw(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&ip(n.remoteStore,s),l}async function mw(n,e,t,r,s){n.gc=(p,m,R)=>async function(k,L,z,te){let oe=L.view.Zu(z);oe.Fo&&(oe=await yh(k.localStore,L.query,!1).then(({documents:w})=>L.view.Zu(w,oe)));const ke=te&&te.targetChanges.get(L.targetId),ut=te&&te.targetMismatches.get(L.targetId)!=null,Ne=L.view.applyChanges(oe,k.isPrimaryClient,ke,ut);return Ah(k,L.targetId,Ne.oc),Ne.snapshot}(n,p,m,R);const i=await yh(n.localStore,e,!0),o=new cw(e,i.Wo),l=o.Zu(i.documents),u=js.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(l,n.isPrimaryClient,u);Ah(n,t,h.oc);const f=new hw(e,t,o);return n.hc.set(e,f),n.Tc.has(t)?n.Tc.get(t).push(e):n.Tc.set(t,[e]),h.snapshot}async function gw(n,e,t){const r=G(n),s=r.hc.get(e),i=r.Tc.get(s.targetId);if(i.length>1)return r.Tc.set(s.targetId,i.filter(o=>!Co(o,e))),void r.hc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ua(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ql(r.remoteStore,s.targetId),ja(r,s.targetId)}).catch(gr)):(ja(r,s.targetId),await Ua(r.localStore,s.targetId,!0))}async function yw(n,e){const t=G(n),r=t.hc.get(e),s=t.Tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ql(t.remoteStore,r.targetId))}async function Ew(n,e,t){const r=Rw(n);try{const s=await function(o,l){const u=G(o),h=ce.now(),f=l.reduce((R,P)=>R.add(P.key),K());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=ze(),k=K();return u.Uo.getEntries(R,f).next(L=>{P=L,P.forEach((z,te)=>{te.isValidDocument()||(k=k.add(z))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,P)).next(L=>{p=L;const z=[];for(const te of l){const oe=iy(te,p.get(te.key).overlayedDocument);oe!=null&&z.push(new Ln(te.key,oe,Kd(oe.value.mapValue),Tt.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,z,l)}).next(L=>{m=L;const z=L.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(R,L.batchId,z)})}).then(()=>({batchId:m.batchId,changes:pf(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Vc[o.currentUser.toKey()];h||(h=new pe(X)),h=h.insert(l,u),o.Vc[o.currentUser.toKey()]=h}(r,s.batchId,t),await zs(r,s.changes),await Po(r.remoteStore)}catch(s){const i=zl(s,"Failed to persist write");t.reject(i)}}async function pp(n,e){const t=G(n);try{const r=await MT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ic.get(i);o&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?U(o.lc,14607):s.removedDocuments.size>0&&(U(o.lc,42227),o.lc=!1))}),await zs(t,r,e)}catch(r){await gr(r)}}function Ih(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hc.forEach((i,o)=>{const l=o.view.Du(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=G(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.wu)m.Du(l)&&(h=!0)}),h&&Hl(u)}(r.eventManager,e),s.length&&r.Ec.hn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vw(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ic.get(e),i=s&&s.key;if(i){let o=new pe(B.comparator);o=o.insert(i,Fe.newNoDocument(i,W.min()));const l=K().add(i),u=new qs(W.min(),new Map,new pe(X),o,ze(),l);await pp(r,u),r.Rc=r.Rc.remove(i),r.Ic.delete(e),Kl(r)}else await Ua(r.localStore,e,!1).then(()=>ja(r,e,t)).catch(gr)}async function Tw(n,e){const t=G(n),r=e.batch.batchId;try{const s=await LT(t.localStore,e);mp(t,r,null),_p(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await zs(t,s)}catch(s){await gr(s)}}async function ww(n,e,t){const r=G(n);try{const s=await function(o,l){const u=G(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(U(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);mp(r,e,t),_p(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await zs(r,s)}catch(s){await gr(s)}}function _p(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function mp(n,e,t){const r=G(n);let s=r.Vc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vc[r.currentUser.toKey()]=s}}function ja(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tc.get(e))n.hc.delete(r),t&&n.Ec.yc(r,t);n.Tc.delete(e),n.isPrimaryClient&&n.Ac.Xs(e).forEach(r=>{n.Ac.containsKey(r)||gp(n,r)})}function gp(n,e){n.Pc.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(ql(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ic.delete(t),Kl(n))}function Ah(n,e,t){for(const r of t)r instanceof hp?(n.Ac.addReference(r.key,e),Iw(n,r)):r instanceof dp?(M(Ql,"Document no longer in limbo: "+r.key),n.Ac.removeReference(r.key,e),n.Ac.containsKey(r.key)||gp(n,r.key)):q(19791,{wc:r})}function Iw(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Pc.has(r)||(M(Ql,"New document in limbo: "+t),n.Pc.add(r),Kl(n))}function Kl(n){for(;n.Pc.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Pc.values().next().value;n.Pc.delete(e);const t=new B(re.fromString(e)),r=n.fc.next();n.Ic.set(r,new dw(t)),n.Rc=n.Rc.insert(t,r),ip(n.remoteStore,new Vt(wt(ml(t.path)),r,"TargetPurposeLimboResolution",go.yn))}}async function zs(n,e,t){const r=G(n),s=[],i=[],o=[];r.hc.isEmpty()||(r.hc.forEach((l,u)=>{o.push(r.gc(u,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){s.push(h);const f=Ul.fo(u.targetId,h);i.push(f)}}))}),await Promise.all(o),r.Ec.hn(s),await async function(u,h){const f=G(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(h,m=>V.forEach(m.Ao,R=>f.persistence.referenceDelegate.addReference(p,m.targetId,R)).next(()=>V.forEach(m.Vo,R=>f.persistence.referenceDelegate.removeReference(p,m.targetId,R)))))}catch(p){if(!yr(p))throw p;M(Bl,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const R=f.No.get(m),P=R.snapshotVersion,k=R.withLastLimboFreeSnapshotVersion(P);f.No=f.No.insert(m,k)}}}(r.localStore,i))}async function Aw(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){M(Ql,"User change. New user:",e.toKey());const r=await rp(t.localStore,e);t.currentUser=e,function(i,o){i.dc.forEach(l=>{l.forEach(u=>{u.reject(new F(N.CANCELLED,o))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zs(t,r.qo)}}function Cw(n,e){const t=G(n),r=t.Ic.get(e);if(r&&r.lc)return K().add(r.key);{let s=K();const i=t.Tc.get(e);if(!i)return s;for(const o of i??[]){const l=t.hc.get(o);s=s.unionWith(l.view.Yu)}return s}}function yp(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vw.bind(null,e),e.Ec.hn=aw.bind(null,e.eventManager),e.Ec.yc=lw.bind(null,e.eventManager),e}function Rw(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Tw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ww.bind(null,e),e}class Gi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mo(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Sc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return OT(this.persistence,new xT,e.initialUser,this.serializer)}Sc(e){return new np(Fl.w_,this.serializer)}vc(e){return new nw}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gi.provider={build:()=>new Gi};class Sw extends Gi{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){U(this.persistence.referenceDelegate instanceof $i,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new IE(r,e.asyncQueue,t)}Sc(e){const t=this.cacheSizeBytes!==void 0?We.withCacheSize(this.cacheSizeBytes):We.DEFAULT;return new np(r=>$i.w_(r,t),this.serializer)}}class $a{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ih(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Aw.bind(null,this.syncEngine),await ew(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sw}()}createDatastore(e){const t=mo(e.databaseInfo.databaseId),r=cE(e.databaseInfo);return _E(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new $T(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Ih(this.syncEngine,t,0),function(){return ah.Je()?new ah:new oE}())}createSyncEngine(e,t){return function(s,i,o,l,u,h,f){const p=new fw(s,i,o,l,u,h);return f&&(p.mc=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=G(t);M(St,"RemoteStore shutting down."),r.ca.add(5),await Gs(r),r.Ea.shutdown(),r.ha.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}$a.provider={build:()=>new $a};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="FirestoreClient";class Pw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Me.UNAUTHENTICATED,this.clientId=ul.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{M(un,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(M(un,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=zl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pa(n,e){n.asyncQueue.verifyOperationInProgress(),M(un,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ch(n,e){n.asyncQueue.verifyOperationInProgress();const t=await bw(n);M(un,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Eh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Eh(e.remoteStore,s)),n._onlineComponents=e}async function bw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(un,"Using user provided OfflineComponentProvider");try{await pa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;mt("Error using user provided cache. Falling back to memory cache: "+t),await pa(n,new Gi)}}else M(un,"Using default OfflineComponentProvider"),await pa(n,new Sw(void 0));return n._offlineComponents}async function Ep(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(un,"Using user provided OnlineComponentProvider"),await Ch(n,n._uninitializedComponentsProvider._online)):(M(un,"Using default OnlineComponentProvider"),await Ch(n,new $a))),n._onlineComponents}function Vw(n){return Ep(n).then(e=>e.syncEngine)}async function Rh(n){const e=await Ep(n),t=e.eventManager;return t.onListen=pw.bind(null,e.syncEngine),t.onUnlisten=gw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_w.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yw.bind(null,e.syncEngine),t}function Nw(n,e,t,r){const s=new tw(r),i=new uw(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>iw(await Rh(n),i)),()=>{s.Aa(),n.asyncQueue.enqueueAndForget(async()=>ow(await Rh(n),i))}}function xw(n,e){const t=new Sn;return n.asyncQueue.enqueueAndForget(async()=>Ew(await Vw(n),e,t)),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="AsyncQueue";class Ph{constructor(e=Promise.resolve()){this.Wc=[],this.Qc=!1,this.Gc=[],this.zc=null,this.jc=!1,this.Hc=!1,this.Jc=[],this.jt=new Vf(this,"async_queue_retry"),this.Yc=()=>{const r=fa();r&&M(Sh,"Visibility state changed to "+r.visibilityState),this.jt.qt()},this.Zc=e;const t=fa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.el(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const t=fa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const t=new Sn;return this.el(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wc.push(e),this.tl()))}async tl(){if(this.Wc.length!==0){try{await this.Wc[0](),this.Wc.shift(),this.jt.reset()}catch(e){if(!yr(e))throw e;M(Sh,"Operation failed with retryable error: "+e)}this.Wc.length>0&&this.jt.Ut(()=>this.tl())}}el(e){const t=this.Zc.then(()=>(this.jc=!0,e().catch(r=>{throw this.zc=r,this.jc=!1,Ot("INTERNAL UNHANDLED ERROR: ",bh(r)),r}).then(r=>(this.jc=!1,r))));return this.Zc=t,t}enqueueAfterDelay(e,t,r){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);const s=Gl.createAndSchedule(this,e,t,r,i=>this.nl(i));return this.Gc.push(s),s}Xc(){this.zc&&q(47125,{rl:bh(this.zc)})}verifyOperationInProgress(){}async il(){let e;do e=this.Zc,await e;while(e!==this.Zc)}sl(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}_l(e){return this.il().then(()=>{this.Gc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Gc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.il()})}ol(e){this.Jc.push(e)}nl(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function bh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Vs extends yo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ph,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ph(e),this._firestoreClient=void 0,await e}}}function tR(n,e){const t=typeof n=="object"?n:Vd(),r=typeof n=="string"?n:Ni,s=Sd(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ed("firestore");i&&RE(s,...i)}return s}function vp(n){if(n._terminated)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Dw(n),n._firestoreClient}function Dw(n){const e=n._freezeSettings(),t=gE(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Pw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{convertValue(e,t="none"){switch(ve(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return On(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[ms].arrayValue?.values?.map(r=>he(r.doubleValue));return new Ke(t)}convertGeoPoint(e){return new At(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Us(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(or(e));default:return null}}convertTimestamp(e){const t=en(e);return new ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=re.fromString(e);U(Af(r),9688,{name:e});const s=new ps(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||Ot(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp extends kw{constructor(e){super(),this.firestore=e}convertBytes(e){return new at(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ge(this.firestore,null,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}const Nh="@firebase/firestore",xh="4.17.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wp=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ow(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(vo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Ow=class extends wp{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function Mw(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Xr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bn extends wp{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(vo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bn._jsonSchemaVersion="firestore/documentSnapshot/1.0",bn._jsonSchema={type:me("string",bn._jsonSchemaVersion),bundleSource:me("string","DocumentSnapshot"),bundleName:me("string"),bundle:me("string")};class Ri extends bn{data(e={}){return super.data(e)}}class Jn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Xr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ri(this._firestore,this._userDataWriter,r.key,r,new Xr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{Ie(s._snapshot.query)?Fa(s._snapshot.query):gl(s.query._query);const u=new Ri(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Xr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Ri(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Xr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Fw(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Jn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ul.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Fw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn._jsonSchemaVersion="firestore/querySnapshot/1.0",Jn._jsonSchema={type:me("string",Jn._jsonSchemaVersion),bundleSource:me("string","QuerySnapshot"),bundleName:me("string"),bundle:me("string")};function sR(n,e,t){n=Cn(n,ge);const r=Cn(n.firestore,Vs),s=Mw(n.converter,e,t),i=VE(r);return Ip(r,[NE(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Tt.none())])}function iR(n){return Ip(Cn(n.firestore,Vs),[new _l(n._key,Tt.none())])}function oR(n,...e){n=_t(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Vh(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Vh(e[r])){const h=e[r];e[r]=h.next?.bind(h),e[r+1]=h.error?.bind(h),e[r+2]=h.complete?.bind(h)}let i,o,l;if(n instanceof ge)o=Cn(n.firestore,Vs),l=ml(n._key.path),i={next:h=>{e[r]&&e[r](Uw(o,n,h))},error:e[r+1],complete:e[r+2]};else{const h=Cn(n,Eo);o=Cn(h.firestore,Vs),l=h._query;const f=new Tp(o);i={next:p=>{e[r]&&e[r](new Jn(o,f,h,p))},error:e[r+1],complete:e[r+2]},Lw(n._query)}const u=vp(o);return Nw(u,l,s,i)}function Ip(n,e){const t=vp(n);return xw(t,e)}function Uw(n,e,t){const r=t.docs.get(e._key),s=new Tp(n);return new bn(n,s,e._key,r,new Xr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Bg(bd),ds(new rr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Vs(new nE(r.getProvider("auth-internal")),new iE(o,r.getProvider("app-check-internal")),Kg(o,s),o);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ht(Nh,xh,e),Ht(Nh,xh,"esm2020")})();var Dh={};const kh="@firebase/database",Oh="1.1.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ap="";function Bw(n){Ap=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:us(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qw(e)}}catch{}return new jw},In=Cp("localStorage"),$w=Cp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new al("@firebase/database"),Ww=function(){let n=1;return function(){return n++}}(),Rp=function(n){const e=Um(n),t=new Fm;t.update(e);const r=t.digest();return sl.encodeByteArray(r)},Hs=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Hs.apply(null,r):typeof r=="object"?e+=be(r):e+=r,e+=" "}return e};let ss=null,Lh=!0;const Gw=function(n,e){D(!0,"Can't turn on custom loggers persistently."),Zn.logLevel=Z.VERBOSE,ss=Zn.log.bind(Zn)},Ue=function(...n){if(Lh===!0&&(Lh=!1,ss===null&&$w.get("logging_enabled")===!0&&Gw()),ss){const e=Hs.apply(null,n);ss(e)}},Qs=function(n){return function(...e){Ue(n,...e)}},Wa=function(...n){const e="FIREBASE INTERNAL ERROR: "+Hs(...n);Zn.error(e)},Mt=function(...n){const e=`FIREBASE FATAL ERROR: ${Hs(...n)}`;throw Zn.error(e),new Error(e)},Ye=function(...n){const e="FIREBASE WARNING: "+Hs(...n);Zn.warn(e)},zw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sp=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Hw=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},hr="[MIN_NAME]",Nn="[MAX_NAME]",Ir=function(n,e){if(n===e)return 0;if(n===hr||e===Nn)return-1;if(e===hr||n===Nn)return 1;{const t=Mh(n),r=Mh(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},Qw=function(n,e){return n===e?0:n<e?-1:1},Wr=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+be(e))},Yl=function(n){if(typeof n!="object"||n===null)return be(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=be(e[r]),t+=":",t+=Yl(n[e[r]]);return t+="}",t},Pp=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function et(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const bp=function(n){D(!Sp(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,l,u;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=l+r,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const h=[];for(u=t;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(i%2?1:0),i=Math.floor(i/2);h.push(s?1:0),h.reverse();const f=h.join("");let p="";for(u=0;u<64;u+=8){let m=parseInt(f.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},Kw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Yw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Xw(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const Jw=new RegExp("^-?(0*)\\d{1,10}$"),Zw=-2147483648,eI=2147483647,Mh=function(n){if(Jw.test(n)){const e=Number(n);if(e>=Zw&&e<=eI)return e}return null},Ar=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ye("Exception was thrown by user callback.",t),e},Math.floor(0))}},tI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},is=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Pd(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class Si{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Si.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="5",Vp="v",Np="s",xp="r",Dp="f",kp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Op="ls",Lp="p",Ga="ac",Mp="websocket",Fp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t,r,s,i=!1,o="",l=!1,u=!1,h=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=In.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&In.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function sI(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Bp(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let r;if(e===Mp)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Fp)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sI(n)&&(t.ns=n.namespace);const s=[];return et(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.counters_={}}incrementCounter(e,t=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return vm(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a={},ma={};function Jl(n){const e=n.toString();return _a[e]||(_a[e]=new iI),_a[e]}function oI(n,e){const t=n.toString();return ma[t]||(ma[t]=e()),ma[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ar(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="start",lI="close",uI="pLPCommand",cI="pRTLPCB",qp="id",jp="pw",$p="ser",hI="cb",dI="seg",fI="ts",pI="d",_I="dframe",Wp=1870,Gp=30,mI=Wp-Gp,gI=25e3,yI=3e4;class Yn{constructor(e,t,r,s,i,o,l){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qs(e),this.stats_=Jl(t),this.urlFn=u=>(this.appCheckToken&&(u[Ga]=this.appCheckToken),Bp(t,Fp,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new aI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yI)),Hw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zl((...i)=>{const[o,l,u,h,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fh)this.id=l,this.password=u;else if(o===lI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Fh]="t",r[$p]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[hI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Vp]=Xl,this.transportSessionId&&(r[Np]=this.transportSessionId),this.lastSessionId&&(r[Op]=this.lastSessionId),this.applicationId&&(r[Lp]=this.applicationId),this.appCheckToken&&(r[Ga]=this.appCheckToken),typeof location<"u"&&location.hostname&&kp.test(location.hostname)&&(r[xp]=Dp);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yn.forceAllow_=!0}static forceDisallow(){Yn.forceDisallow_=!0}static isAvailable(){return Yn.forceAllow_?!0:!Yn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Kw()&&!Yw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=gd(t),s=Pp(r,mI);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[_I]="t",r[qp]=e,r[jp]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=be(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Zl{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ww(),window[uI+this.uniqueCallbackIdentifier]=e,window[cI+this.uniqueCallbackIdentifier]=t,this.myIFrame=Zl.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ue("frame writing exception"),l.stack&&Ue(l.stack),Ue(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qp]=this.myID,e[jp]=this.myPW,e[$p]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gp+r.length<=Wp;){const o=this.pendingSegs.shift();r=r+"&"+dI+s+"="+o.seg+"&"+fI+s+"="+o.ts+"&"+pI+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(gI)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=16384,vI=45e3;let zi=null;typeof MozWebSocket<"u"?zi=MozWebSocket:typeof WebSocket<"u"&&(zi=WebSocket);class ct{constructor(e,t,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qs(this.connId),this.stats_=Jl(t),this.connURL=ct.connectionURL_(t,o,l,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[Vp]=Xl,typeof location<"u"&&location.hostname&&kp.test(location.hostname)&&(o[xp]=Dp),t&&(o[Np]=t),r&&(o[Op]=r),s&&(o[Ga]=s),i&&(o[Lp]=i),Bp(e,Mp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,In.set("previous_websocket_failure",!0);try{let r;bm(),this.mySock=new zi(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&zi!==null&&!ct.forceDisallow_}static previouslyFailed(){return In.isInMemoryStorage||In.get("previous_websocket_failure")===!0}markConnectionHealthy(){In.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=us(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=be(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Pp(t,EI);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vI))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{static get ALL_TRANSPORTS(){return[Yn,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ct&&ct.isAvailable();let r=t&&!ct.previouslyFailed();if(e.webSocketOnly&&(t||Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ct];else{const s=this.transports_=[];for(const i of Ns.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ns.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ns.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=6e4,wI=5e3,II=10*1024,AI=100*1024,ga="t",Uh="d",CI="s",Bh="r",RI="e",qh="o",jh="a",$h="n",Wh="p",SI="h";class PI{constructor(e,t,r,s,i,o,l,u,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qs("c:"+this.id+":"),this.transportManager_=new Ns(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=is(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>II?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ga in e){const t=e[ga];t===jh?this.upgradeIfSecondaryHealthy_():t===Bh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===qh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Wr("t",e),r=Wr("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$h,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Wr("t",e),r=Wr("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Wr(ga,e);if(Uh in e){const r=e[Uh];if(t===SI){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===$h){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===CI?this.onConnectionShutdown_(r):t===Bh?this.onReset_(r):t===RI?Wa("Server Error: "+r):t===qh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wa("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Xl!==r&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),is(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):is(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(In.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Hp{static getInstance(){return new Hi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Id()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=32,zh=768;class ie{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ne(){return new ie("")}function Q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function cn(n){return n.pieces_.length-n.pieceNum_}function ae(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ie(n.pieces_,e)}function Qp(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function bI(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Kp(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Yp(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ie(e,0)}function Ae(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof ie)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new ie(t,0)}function J(n){return n.pieceNum_>=n.pieces_.length}function He(n,e){const t=Q(n),r=Q(e);if(t===null)return e;if(t===r)return He(ae(n),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function eu(n,e){if(cn(n)!==cn(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function dt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(cn(n)>cn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class VI{constructor(e,t){this.errorPrefix_=t,this.parts_=Kp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=oo(this.parts_[r]);Xp(this)}}function NI(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=oo(e),Xp(n)}function xI(n){const e=n.parts_.pop();n.byteLength_-=oo(e),n.parts_.length>0&&(n.byteLength_-=1)}function Xp(n){if(n.byteLength_>zh)throw new Error(n.errorPrefix_+"has a key path longer than "+zh+" bytes ("+n.byteLength_+").");if(n.parts_.length>Gh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gh+") or object contains a cycle "+vn(n))}function vn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Hp{static getInstance(){return new tu}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=1e3,DI=60*5*1e3,Hh=30*1e3,kI=1.3,OI=3e4,LI="server_kill",Qh=3;class Dt extends zp{constructor(e,t,r,s,i,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=Dt.nextPersistentConnectionId_++,this.log_=Qs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gr,this.maxReconnectDelay_=DI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(be(i)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new io,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const u=l.d,h=l.s;Dt.warnOnListenWarnings_(u,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ut(e,"w")){const r=nr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Om(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Wa("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OI&&(this.reconnectDelay_=Gr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Dt.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},h=function(p){D(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:u,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new PI(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,R=>{Ye(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(LI)},i))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Ye(p),u())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nc(this.interruptReasons_)&&(this.reconnectDelay_=Gr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>Yl(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new ie(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Ue("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qh&&(this.reconnectDelay_=Hh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ue("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ap.replace(/\./g,"-")]=1,Id()?e["framework.cordova"]=1:Pm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hi.getInstance().currentlyOnline();return Nc(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0;Dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Y(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Y(hr,e),s=new Y(hr,t);return this.compare(r,s)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;class Jp extends bo{static get __EMPTY_NODE(){return Ei}static set __EMPTY_NODE(e){Ei=e}compare(e,t){return Ir(e.name,t.name)}isDefinedOn(e){throw pr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Nn,Ei)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,Ei)}toString(){return".key"}}const er=new Jp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Pe.RED,this.left=s??Qe.EMPTY_NODE,this.right=i??Qe.EMPTY_NODE}copy(e,t,r,s,i){return new Pe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class MI{copy(e,t,r,s,i){return this}insert(e,t,r){return new Pe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(e,t=Qe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Qe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new vi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new vi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new vi(this.root_,null,this.comparator_,!0,e)}}Qe.EMPTY_NODE=new MI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(n,e){return Ir(n.name,e.name)}function nu(n,e){return Ir(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za;function UI(n){za=n}const Zp=function(n){return typeof n=="number"?"number:"+bp(n):"string:"+n},e_=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else D(n===za||n.isEmpty(),"priority of unexpected type.");D(n===za||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh;class Re{static set __childrenNodeConstructor(e){Kh=e}static get __childrenNodeConstructor(){return Kh}constructor(e,t=Re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),e_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:Q(e)===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Q(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Re.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zp(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=bp(this.value_):e+=this.value_,this.lazyHash_=Rp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Re.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Re.VALUE_TYPE_ORDER.indexOf(t),i=Re.VALUE_TYPE_ORDER.indexOf(r);return D(s>=0,"Unknown leaf type: "+t),D(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t_,n_;function BI(n){t_=n}function qI(n){n_=n}class jI extends bo{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?Ir(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Nn,new Re("[PRIORITY-POST]",n_))}makePost(e,t){const r=t_(e);return new Y(t,new Re("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new jI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=Math.log(2);class WI{constructor(e){const t=i=>parseInt(Math.log(i)/$I,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qi=function(n,e,t,r){n.sort(e);const s=function(u,h){const f=h-u;let p,m;if(f===0)return null;if(f===1)return p=n[u],m=t?t(p):p,new Pe(m,p.node,Pe.BLACK,null,null);{const R=parseInt(f/2,10)+u,P=s(u,R),k=s(R+1,h);return p=n[R],m=t?t(p):p,new Pe(m,p.node,Pe.BLACK,P,k)}},i=function(u){let h=null,f=null,p=n.length;const m=function(P,k){const L=p-P,z=p;p-=P;const te=s(L+1,z),oe=n[L],ke=t?t(oe):oe;R(new Pe(ke,oe.node,k,null,te))},R=function(P){h?(h.left=P,h=P):(f=P,h=P)};for(let P=0;P<u.count;++P){const k=u.nextBitIsOne(),L=Math.pow(2,u.count-(P+1));k?m(L,Pe.BLACK):(m(L,Pe.BLACK),m(L,Pe.RED))}return f},o=new WI(n.length),l=i(o);return new Qe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya;const Wn={};class Nt{static get Default(){return D(Wn&&fe,"ChildrenNode.ts has not been loaded"),ya=ya||new Nt({".priority":Wn},{".priority":fe}),ya}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=nr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Qe?t:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,t){D(e!==er,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(Y.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=Qi(r,e.getCompare()):l=Wn;const u=e.toString(),h={...this.indexSet_};h[u]=e;const f={...this.indexes_};return f[u]=l,new Nt(f,h)}addToIndexes(e,t){const r=bi(this.indexes_,(s,i)=>{const o=nr(this.indexSet_,i);if(D(o,"Missing index implementation for "+i),s===Wn)if(o.isDefinedOn(e.node)){const l=[],u=t.getIterator(Y.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&l.push(h),h=u.getNext();return l.push(e),Qi(l,o.getCompare())}else return Wn;else{const l=t.get(e.name);let u=s;return l&&(u=u.remove(new Y(e.name,l))),u.insert(e,e.node)}});return new Nt(r,this.indexSet_)}removeFromIndexes(e,t){const r=bi(this.indexes_,s=>{if(s===Wn)return s;{const i=t.get(e.name);return i?s.remove(new Y(e.name,i)):s}});return new Nt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr;class ${static get EMPTY_NODE(){return zr||(zr=new $(new Qe(nu),null,Nt.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&e_(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zr}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?zr:t}}getChild(e){const t=Q(e);return t===null?this:this.getImmediateChild(t).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Y(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?zr:this.priorityNode_;return new $(s,o,i)}}updateChild(e,t){const r=Q(e);if(r===null)return t;{D(Q(e)!==".priority"||cn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ae(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(fe,(o,l)=>{t[o]=l.val(e),r++,i&&$.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zp(this.getPriority().val())+":"),this.forEachChild(fe,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Rp(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Y(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Y(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Y.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ks?-1:0}withIndex(e){if(e===er||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===er||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(fe),s=t.getIterator(fe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===er?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GI extends ${constructor(){super(new Qe(nu),$.EMPTY_NODE,Nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Ks=new GI;Object.defineProperties(Y,{MIN:{value:new Y(hr,$.EMPTY_NODE)},MAX:{value:new Y(Nn,Ks)}});Jp.__EMPTY_NODE=$.EMPTY_NODE;Re.__childrenNodeConstructor=$;UI(Ks);qI(Ks);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=!0;function xe(n,e=null){if(n===null)return $.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Re(t,xe(e))}if(!(n instanceof Array)&&zI){const t=[];let r=!1;if(et(n,(o,l)=>{if(o.substring(0,1)!=="."){const u=xe(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),t.push(new Y(o,u)))}}),t.length===0)return $.EMPTY_NODE;const i=Qi(t,FI,o=>o.name,nu);if(r){const o=Qi(t,fe.getCompare());return new $(i,xe(e),new Nt({".priority":o},{".priority":fe}))}else return new $(i,xe(e),Nt.Default)}else{let t=$.EMPTY_NODE;return et(n,(r,s)=>{if(Ut(n,r)&&r.substring(0,1)!=="."){const i=xe(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(xe(e))}}BI(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI extends bo{constructor(e){super(),this.indexPath_=e,D(!J(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?Ir(e.name,t.name):i}makePost(e,t){const r=xe(e),s=$.EMPTY_NODE.updateChild(this.indexPath_,r);return new Y(t,s)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Ks);return new Y(Nn,e)}toString(){return Kp(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI extends bo{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Ir(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,t){const r=xe(e);return new Y(t,r)}toString(){return".value"}}const KI=new QI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n){return{type:"value",snapshotNode:n}}function dr(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function xs(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ds(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function YI(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.index_=e}updateChild(e,t,r,s,i,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(xs(t,l)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(dr(t,r)):o.trackChildChange(Ds(t,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(s,i)=>{t.hasChild(s)||r.trackChildChange(xs(s,i))}),t.isLeafNode()||t.forEachChild(fe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ds(s,i,o))}else r.trackChildChange(dr(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.indexedFilter_=new ru(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ks.getStartPost_(e),this.endPost_=ks.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,i,o){return this.matches(new Y(t,r))||(r=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,i,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=$.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority($.EMPTY_NODE);const i=this;return t.forEachChild(fe,(o,l)=>{i.matches(new Y(o,l))||(s=s.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ks(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,i,o){return this.rangedFilter_.matches(new Y(t,r))||(r=$.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,i,o):this.fullLimitUpdateChild_(e,t,r,i,o)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=$.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority($.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,i){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,R)=>p(R,m)}else o=this.index_.getCompare();const l=e;D(l.numChildren()===this.limit_,"");const u=new Y(t,r),h=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(u);if(l.hasChild(t)){const p=l.getImmediateChild(t);let m=s.getChildAfterChild(this.index_,h,this.reverse_);for(;m!=null&&(m.name===t||l.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const R=m==null?1:o(m,u);if(f&&!r.isEmpty()&&R>=0)return i?.trackChildChange(Ds(t,r,p)),l.updateImmediateChild(t,r);{i?.trackChildChange(xs(t,p));const k=l.updateImmediateChild(t,$.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i?.trackChildChange(dr(m.name,m.node)),k.updateImmediateChild(m.name,m.node)):k}}else return r.isEmpty()?e:f&&o(h,u)>=0?(i!=null&&(i.trackChildChange(xs(h.name,h.node)),i.trackChildChange(dr(t,r))),l.updateImmediateChild(t,r).updateImmediateChild(h.name,$.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hr}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new su;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function JI(n){return n.loadsAllData()?new ru(n.getIndex()):n.hasLimit()?new XI(n):new ks(n)}function Yh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===fe?t="$priority":n.index_===KI?t="$value":n.index_===er?t="$key":(D(n.index_ instanceof HI,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=be(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=be(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+be(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=be(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+be(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Xh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==fe&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends zp{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Qs("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ki.getListenId_(e,r),l={};this.listens_[o]=l;const u=Yh(e._queryParams);this.restRequest_(i+".json",u,(h,f)=>{let p=f;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(i,p,!1,r),nr(this.listens_,o)===l){let m;h?h===401?m="permission_denied":m="rest_error:"+h:m="ok",s(m,null)}})}unlisten(e,t){const r=Ki.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Yh(e._queryParams),r=e._path.toString(),s=new io;return this.restRequest_(r+".json",t,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mm(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=us(l.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return{value:null,children:new Map}}function s_(n,e,t){if(J(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Q(e);n.children.has(r)||n.children.set(r,Yi());const s=n.children.get(r);e=ae(e),s_(s,e,t)}}function Ha(n,e,t){n.value!==null?t(e,n.value):eA(n,(r,s)=>{const i=new ie(e.toString()+"/"+r);Ha(s,i,t)})}function eA(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&et(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=10*1e3,nA=30*1e3,rA=5*60*1e3;class sA{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new tA(e);const r=Jh+(nA-Jh)*Math.random();is(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;et(e,(s,i)=>{i>0&&Ut(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),is(this.reportStats_.bind(this),Math.floor(Math.random()*2*rA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function i_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function iu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ou(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=ft.ACK_USER_WRITE,this.source=i_()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ie(e));return new Xi(ne(),t,this.revert)}}else return D(Q(this.path)===e,"operationForChild called for unrelated child."),new Xi(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this.source=e,this.path=t,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Os(this.source,ne()):new Os(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=ft.OVERWRITE}operationForChild(e){return J(this.path)?new xn(this.source,ne(),this.snap.getImmediateChild(e)):new xn(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=ft.MERGE}operationForChild(e){if(J(this.path)){const t=this.children.subtree(new ie(e));return t.isEmpty()?null:t.value?new xn(this.source,ne(),t.value):new Ls(this.source,ne(),t)}else return D(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ls(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const t=Q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function oA(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(YI(o.childName,o.snapshotNode))}),Hr(n,s,"child_removed",e,r,t),Hr(n,s,"child_added",e,r,t),Hr(n,s,"child_moved",i,r,t),Hr(n,s,"child_changed",e,r,t),Hr(n,s,"value",e,r,t),s}function Hr(n,e,t,r,s,i){const o=r.filter(l=>l.type===t);o.sort((l,u)=>lA(n,l,u)),o.forEach(l=>{const u=aA(n,l,i);s.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(u,n.query_))})})}function aA(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function lA(n,e,t){if(e.childName==null||t.childName==null)throw pr("Should only compare child_ events.");const r=new Y(e.childName,e.snapshotNode),s=new Y(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n,e){return{eventCache:n,serverCache:e}}function os(n,e,t,r){return Vo(new Dn(e,t,r),n.serverCache)}function o_(n,e,t,r){return Vo(n.eventCache,new Dn(e,t,r))}function Qa(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function kn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;const uA=()=>(Ea||(Ea=new Qe(Qw)),Ea);class ue{static fromObject(e){let t=new ue(null);return et(e,(r,s)=>{t=t.set(new ie(r),s)}),t}constructor(e,t=uA()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ne(),value:this.value};if(J(e))return null;{const r=Q(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ae(e),t);return i!=null?{path:Ae(new ie(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const t=Q(e),r=this.children.get(t);return r!==null?r.subtree(ae(e)):new ue(null)}}set(e,t){if(J(e))return new ue(t,this.children);{const r=Q(e),i=(this.children.get(r)||new ue(null)).set(ae(e),t),o=this.children.insert(r,i);return new ue(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const t=Q(e),r=this.children.get(t);if(r){const s=r.remove(ae(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new ue(null):new ue(this.value,i)}else return this}}get(e){if(J(e))return this.value;{const t=Q(e),r=this.children.get(t);return r?r.get(ae(e)):null}}setTree(e,t){if(J(e))return t;{const r=Q(e),i=(this.children.get(r)||new ue(null)).setTree(ae(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ue(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ae(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,ne(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(J(e))return null;{const i=Q(e),o=this.children.get(i);return o?o.findOnPath_(ae(e),Ae(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ne(),t)}foreachOnPath_(e,t,r){if(J(e))return this;{this.value&&r(t,this.value);const s=Q(e),i=this.children.get(s);return i?i.foreachOnPath_(ae(e),Ae(t,s),r):new ue(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(Ae(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new ue(null))}}function as(n,e,t){if(J(e))return new pt(new ue(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=He(s,e);return i=i.updateChild(o,t),new pt(n.writeTree_.set(s,i))}else{const s=new ue(t),i=n.writeTree_.setTree(e,s);return new pt(i)}}}function Zh(n,e,t){let r=n;return et(t,(s,i)=>{r=as(r,Ae(e,s),i)}),r}function ed(n,e){if(J(e))return pt.empty();{const t=n.writeTree_.setTree(e,new ue(null));return new pt(t)}}function Ka(n,e){return Bn(n,e)!=null}function Bn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(He(t.path,e)):null}function td(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(fe,(r,s)=>{e.push(new Y(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Y(r,s.value))}),e}function Zt(n,e){if(J(e))return n;{const t=Bn(n,e);return t!=null?new pt(new ue(t)):new pt(n.writeTree_.subtree(e))}}function Ya(n){return n.writeTree_.isEmpty()}function fr(n,e){return a_(ne(),n.writeTree_,e)}function a_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(D(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=a_(Ae(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Ae(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(n,e){return h_(e,n)}function cA(n,e,t,r,s){D(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=as(n.visibleWrites,e,t)),n.lastWriteId=r}function hA(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function dA(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&fA(l,r.path)?s=!1:dt(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return pA(n),!0;if(r.snap)n.visibleWrites=ed(n.visibleWrites,r.path);else{const l=r.children;et(l,u=>{n.visibleWrites=ed(n.visibleWrites,Ae(r.path,u))})}return!0}else return!1}function fA(n,e){if(n.snap)return dt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&dt(Ae(n.path,t),e))return!0;return!1}function pA(n){n.visibleWrites=l_(n.allWrites,_A,ne()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function _A(n){return n.visible}function l_(n,e,t){let r=pt.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let l;if(i.snap)dt(t,o)?(l=He(t,o),r=as(r,l,i.snap)):dt(o,t)&&(l=He(o,t),r=as(r,ne(),i.snap.getChild(l)));else if(i.children){if(dt(t,o))l=He(t,o),r=Zh(r,l,i.children);else if(dt(o,t))if(l=He(o,t),J(l))r=Zh(r,ne(),i.children);else{const u=nr(i.children,Q(l));if(u){const h=u.getChild(ae(l));r=as(r,ne(),h)}}}else throw pr("WriteRecord should have .snap or .children")}}return r}function u_(n,e,t,r,s){if(!r&&!s){const i=Bn(n.visibleWrites,e);if(i!=null)return i;{const o=Zt(n.visibleWrites,e);if(Ya(o))return t;if(t==null&&!Ka(o,ne()))return null;{const l=t||$.EMPTY_NODE;return fr(o,l)}}}else{const i=Zt(n.visibleWrites,e);if(!s&&Ya(i))return t;if(!s&&t==null&&!Ka(i,ne()))return null;{const o=function(h){return(h.visible||s)&&(!r||!~r.indexOf(h.writeId))&&(dt(h.path,e)||dt(e,h.path))},l=l_(n.allWrites,o,e),u=t||$.EMPTY_NODE;return fr(l,u)}}}function mA(n,e,t){let r=$.EMPTY_NODE;const s=Bn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(fe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=Zt(n.visibleWrites,e);return t.forEachChild(fe,(o,l)=>{const u=fr(Zt(i,new ie(o)),l);r=r.updateImmediateChild(o,u)}),td(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Zt(n.visibleWrites,e);return td(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gA(n,e,t,r,s){D(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ae(e,t);if(Ka(n.visibleWrites,i))return null;{const o=Zt(n.visibleWrites,i);return Ya(o)?s.getChild(t):fr(o,s.getChild(t))}}function yA(n,e,t,r){const s=Ae(e,t),i=Bn(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=Zt(n.visibleWrites,s);return fr(o,r.getNode().getImmediateChild(t))}else return null}function EA(n,e){return Bn(n.visibleWrites,e)}function vA(n,e,t,r,s,i,o){let l;const u=Zt(n.visibleWrites,e),h=Bn(u,ne());if(h!=null)l=h;else if(t!=null)l=fr(u,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=o.getCompare(),m=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let R=m.getNext();for(;R&&f.length<s;)p(R,r)!==0&&f.push(R),R=m.getNext();return f}else return[]}function TA(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function Ji(n,e,t,r){return u_(n.writeTree,n.treePath,e,t,r)}function lu(n,e){return mA(n.writeTree,n.treePath,e)}function nd(n,e,t,r){return gA(n.writeTree,n.treePath,e,t,r)}function Zi(n,e){return EA(n.writeTree,Ae(n.treePath,e))}function wA(n,e,t,r,s,i){return vA(n.writeTree,n.treePath,e,t,r,s,i)}function uu(n,e,t){return yA(n.writeTree,n.treePath,e,t)}function c_(n,e){return h_(Ae(n.treePath,e),n.writeTree)}function h_(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,Ds(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,xs(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,dr(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ds(r,e.snapshotNode,s.oldSnap));else throw pr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const d_=new AA;class cu{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Dn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uu(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kn(this.viewCache_),i=wA(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(n){return{filter:n}}function RA(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function SA(n,e,t,r,s){const i=new IA;let o,l;if(t.type===ft.OVERWRITE){const h=t;h.source.fromUser?o=Xa(n,e,h.path,h.snap,r,s,i):(D(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!J(h.path),o=eo(n,e,h.path,h.snap,r,s,l,i))}else if(t.type===ft.MERGE){const h=t;h.source.fromUser?o=bA(n,e,h.path,h.children,r,s,i):(D(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),o=Ja(n,e,h.path,h.children,r,s,l,i))}else if(t.type===ft.ACK_USER_WRITE){const h=t;h.revert?o=xA(n,e,h.path,r,s,i):o=VA(n,e,h.path,h.affectedTree,r,s,i)}else if(t.type===ft.LISTEN_COMPLETE)o=NA(n,e,t.path,r,i);else throw pr("Unknown operation type: "+t.type);const u=i.getChanges();return PA(e,o,u),{viewCache:o,changes:u}}function PA(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Qa(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(r_(Qa(e)))}}function f_(n,e,t,r,s,i){const o=e.eventCache;if(Zi(r,t)!=null)return e;{let l,u;if(J(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=kn(e),f=h instanceof $?h:$.EMPTY_NODE,p=lu(r,f);l=n.filter.updateFullNode(e.eventCache.getNode(),p,i)}else{const h=Ji(r,kn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const h=Q(t);if(h===".priority"){D(cn(t)===1,"Can't have a priority with additional path components");const f=o.getNode();u=e.serverCache.getNode();const p=nd(r,t,f,u);p!=null?l=n.filter.updatePriority(f,p):l=o.getNode()}else{const f=ae(t);let p;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const m=nd(r,t,o.getNode(),u);m!=null?p=o.getNode().getImmediateChild(h).updateChild(f,m):p=o.getNode().getImmediateChild(h)}else p=uu(r,h,e.serverCache);p!=null?l=n.filter.updateChild(o.getNode(),h,p,f,s,i):l=o.getNode()}}return os(e,l,o.isFullyInitialized()||J(t),n.filter.filtersNodes())}}function eo(n,e,t,r,s,i,o,l){const u=e.serverCache;let h;const f=o?n.filter:n.filter.getIndexedFilter();if(J(t))h=f.updateFullNode(u.getNode(),r,null);else if(f.filtersNodes()&&!u.isFiltered()){const R=u.getNode().updateChild(t,r);h=f.updateFullNode(u.getNode(),R,null)}else{const R=Q(t);if(!u.isCompleteForPath(t)&&cn(t)>1)return e;const P=ae(t),L=u.getNode().getImmediateChild(R).updateChild(P,r);R===".priority"?h=f.updatePriority(u.getNode(),L):h=f.updateChild(u.getNode(),R,L,P,d_,null)}const p=o_(e,h,u.isFullyInitialized()||J(t),f.filtersNodes()),m=new cu(s,p,i);return f_(n,p,t,s,m,l)}function Xa(n,e,t,r,s,i,o){const l=e.eventCache;let u,h;const f=new cu(s,e,i);if(J(t))h=n.filter.updateFullNode(e.eventCache.getNode(),r,o),u=os(e,h,!0,n.filter.filtersNodes());else{const p=Q(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),r),u=os(e,h,l.isFullyInitialized(),l.isFiltered());else{const m=ae(t),R=l.getNode().getImmediateChild(p);let P;if(J(m))P=r;else{const k=f.getCompleteChild(p);k!=null?Qp(m)===".priority"&&k.getChild(Yp(m)).isEmpty()?P=k:P=k.updateChild(m,r):P=$.EMPTY_NODE}if(R.equals(P))u=e;else{const k=n.filter.updateChild(l.getNode(),p,P,m,f,o);u=os(e,k,l.isFullyInitialized(),n.filter.filtersNodes())}}}return u}function rd(n,e){return n.eventCache.isCompleteForChild(e)}function bA(n,e,t,r,s,i,o){let l=e;return r.foreach((u,h)=>{const f=Ae(t,u);rd(e,Q(f))&&(l=Xa(n,l,f,h,s,i,o))}),r.foreach((u,h)=>{const f=Ae(t,u);rd(e,Q(f))||(l=Xa(n,l,f,h,s,i,o))}),l}function sd(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Ja(n,e,t,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;J(t)?h=r:h=new ue(null).setTree(t,r);const f=e.serverCache.getNode();return h.children.inorderTraversal((p,m)=>{if(f.hasChild(p)){const R=e.serverCache.getNode().getImmediateChild(p),P=sd(n,R,m);u=eo(n,u,new ie(p),P,s,i,o,l)}}),h.children.inorderTraversal((p,m)=>{const R=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!f.hasChild(p)&&!R){const P=e.serverCache.getNode().getImmediateChild(p),k=sd(n,P,m);u=eo(n,u,new ie(p),k,s,i,o,l)}}),u}function VA(n,e,t,r,s,i,o){if(Zi(s,t)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(J(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return eo(n,e,t,u.getNode().getChild(t),s,i,l,o);if(J(t)){let h=new ue(null);return u.getNode().forEachChild(er,(f,p)=>{h=h.set(new ie(f),p)}),Ja(n,e,t,h,s,i,l,o)}else return e}else{let h=new ue(null);return r.foreach((f,p)=>{const m=Ae(t,f);u.isCompleteForPath(m)&&(h=h.set(f,u.getNode().getChild(m)))}),Ja(n,e,t,h,s,i,l,o)}}function NA(n,e,t,r,s){const i=e.serverCache,o=o_(e,i.getNode(),i.isFullyInitialized()||J(t),i.isFiltered());return f_(n,o,t,r,d_,s)}function xA(n,e,t,r,s,i){let o;if(Zi(r,t)!=null)return e;{const l=new cu(r,e,s),u=e.eventCache.getNode();let h;if(J(t)||Q(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Ji(r,kn(e));else{const p=e.serverCache.getNode();D(p instanceof $,"serverChildren would be complete if leaf node"),f=lu(r,p)}f=f,h=n.filter.updateFullNode(u,f,i)}else{const f=Q(t);let p=uu(r,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=u.getImmediateChild(f)),p!=null?h=n.filter.updateChild(u,f,p,ae(t),l,i):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(u,f,$.EMPTY_NODE,ae(t),l,i):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ji(r,kn(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,i)))}return o=e.serverCache.isFullyInitialized()||Zi(r,ne())!=null,os(e,h,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new ru(r.getIndex()),i=JI(r);this.processor_=CA(i);const o=t.serverCache,l=t.eventCache,u=s.updateFullNode($.EMPTY_NODE,o.getNode(),null),h=i.updateFullNode($.EMPTY_NODE,l.getNode(),null),f=new Dn(u,o.isFullyInitialized(),s.filtersNodes()),p=new Dn(h,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=Vo(p,f),this.eventGenerator_=new iA(this.query_)}get query(){return this.query_}}function kA(n){return n.viewCache_.serverCache.getNode()}function OA(n,e){const t=kn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!J(e)&&!t.getImmediateChild(Q(e)).isEmpty())?t.getChild(e):null}function id(n){return n.eventRegistrations_.length===0}function LA(n,e){n.eventRegistrations_.push(e)}function od(n,e,t){const r=[];if(t){D(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function ad(n,e,t,r){e.type===ft.MERGE&&e.source.queryId!==null&&(D(kn(n.viewCache_),"We should always have a full cache before handling merges"),D(Qa(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=SA(n.processor_,s,e,t,r);return RA(n.processor_,i.viewCache),D(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,p_(n,i.changes,i.viewCache.eventCache.getNode(),null)}function MA(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(fe,(i,o)=>{r.push(dr(i,o))}),t.isFullyInitialized()&&r.push(r_(t.getNode())),p_(n,r,t.getNode(),e)}function p_(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return oA(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;class FA{constructor(){this.views=new Map}}function UA(n){D(!to,"__referenceConstructor has already been defined"),to=n}function BA(){return D(to,"Reference.ts has not been loaded"),to}function qA(n){return n.views.size===0}function hu(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return D(i!=null,"SyncTree gave us an op for an invalid query."),ad(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(ad(o,e,t,r));return i}}function jA(n,e,t,r,s){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let l=Ji(t,s?r:null),u=!1;l?u=!0:r instanceof $?(l=lu(t,r),u=!1):(l=$.EMPTY_NODE,u=!1);const h=Vo(new Dn(l,u,!1),new Dn(r,s,!1));return new DA(e,h)}return o}function $A(n,e,t,r,s,i){const o=jA(n,e,r,s,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),LA(o,t),MA(o,t)}function WA(n,e,t,r){const s=e._queryIdentifier,i=[];let o=[];const l=hn(n);if(s==="default")for(const[u,h]of n.views.entries())o=o.concat(od(h,t,r)),id(h)&&(n.views.delete(u),h.query._queryParams.loadsAllData()||i.push(h.query));else{const u=n.views.get(s);u&&(o=o.concat(od(u,t,r)),id(u)&&(n.views.delete(s),u.query._queryParams.loadsAllData()||i.push(u.query)))}return l&&!hn(n)&&i.push(new(BA())(e._repo,e._path)),{removed:i,events:o}}function __(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function tr(n,e){let t=null;for(const r of n.views.values())t=t||OA(r,e);return t}function m_(n,e){if(e._queryParams.loadsAllData())return No(n);{const r=e._queryIdentifier;return n.views.get(r)}}function g_(n,e){return m_(n,e)!=null}function hn(n){return No(n)!=null}function No(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;function GA(n){D(!no,"__referenceConstructor has already been defined"),no=n}function zA(){return D(no,"Reference.ts has not been loaded"),no}let HA=1;class ld{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=TA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function y_(n,e,t,r,s){return cA(n.pendingWriteTree_,e,t,r,s),s?Ys(n,new xn(i_(),e,t)):[]}function An(n,e,t=!1){const r=hA(n.pendingWriteTree_,e);if(dA(n.pendingWriteTree_,e)){let i=new ue(null);return r.snap!=null?i=i.set(ne(),!0):et(r.children,o=>{i=i.set(new ie(o),!0)}),Ys(n,new Xi(r.path,i,t))}else return[]}function xo(n,e,t){return Ys(n,new xn(iu(),e,t))}function QA(n,e,t){const r=ue.fromObject(t);return Ys(n,new Ls(iu(),e,r))}function KA(n,e){return Ys(n,new Os(iu(),e))}function YA(n,e,t){const r=fu(n,t);if(r){const s=pu(r),i=s.path,o=s.queryId,l=He(i,e),u=new Os(ou(o),l);return _u(n,i,u)}else return[]}function Za(n,e,t,r,s=!1){const i=e._path,o=n.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||g_(o,e))){const u=WA(o,e,t,r);qA(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const h=u.removed;if(l=u.events,!s){const f=h.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(i,(m,R)=>hn(R));if(f&&!p){const m=n.syncPointTree_.subtree(i);if(!m.isEmpty()){const R=ZA(m);for(let P=0;P<R.length;++P){const k=R[P],L=k.query,z=T_(n,k);n.listenProvider_.startListening(ls(L),ro(n,L),z.hashFn,z.onComplete)}}}!p&&h.length>0&&!r&&(f?n.listenProvider_.stopListening(ls(e),null):h.forEach(m=>{const R=n.queryToTagMap.get(Do(m));n.listenProvider_.stopListening(ls(m),R)}))}eC(n,h)}return l}function XA(n,e,t,r){const s=fu(n,r);if(s!=null){const i=pu(s),o=i.path,l=i.queryId,u=He(o,e),h=new xn(ou(l),u,t);return _u(n,o,h)}else return[]}function JA(n,e,t,r){const s=fu(n,r);if(s){const i=pu(s),o=i.path,l=i.queryId,u=He(o,e),h=ue.fromObject(t),f=new Ls(ou(l),u,h);return _u(n,o,f)}else return[]}function ud(n,e,t,r=!1){const s=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(s,(m,R)=>{const P=He(m,s);i=i||tr(R,P),o=o||hn(R)});let l=n.syncPointTree_.get(s);l?(o=o||hn(l),i=i||tr(l,ne())):(l=new FA,n.syncPointTree_=n.syncPointTree_.set(s,l));let u;i!=null?u=!0:(u=!1,i=$.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((R,P)=>{const k=tr(P,ne());k&&(i=i.updateImmediateChild(R,k))}));const h=g_(l,e);if(!h&&!e._queryParams.loadsAllData()){const m=Do(e);D(!n.queryToTagMap.has(m),"View does not exist, but we have a tag");const R=tC();n.queryToTagMap.set(m,R),n.tagToQueryMap.set(R,m)}const f=au(n.pendingWriteTree_,s);let p=$A(l,e,t,f,i,u);if(!h&&!o&&!r){const m=m_(l,e);p=p.concat(nC(n,e,m))}return p}function du(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,l)=>{const u=He(o,e),h=tr(l,u);if(h)return h});return u_(s,e,i,t,!0)}function Ys(n,e){return E_(e,n.syncPointTree_,null,au(n.pendingWriteTree_,ne()))}function E_(n,e,t,r){if(J(n.path))return v_(n,e,t,r);{const s=e.get(ne());t==null&&s!=null&&(t=tr(s,ne()));let i=[];const o=Q(n.path),l=n.operationForChild(o),u=e.children.get(o);if(u&&l){const h=t?t.getImmediateChild(o):null,f=c_(r,o);i=i.concat(E_(l,u,h,f))}return s&&(i=i.concat(hu(s,n,r,t))),i}}function v_(n,e,t,r){const s=e.get(ne());t==null&&s!=null&&(t=tr(s,ne()));let i=[];return e.children.inorderTraversal((o,l)=>{const u=t?t.getImmediateChild(o):null,h=c_(r,o),f=n.operationForChild(o);f&&(i=i.concat(v_(f,l,u,h)))}),s&&(i=i.concat(hu(s,n,r,t))),i}function T_(n,e){const t=e.query,r=ro(n,t);return{hashFn:()=>(kA(e)||$.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?YA(n,t._path,r):KA(n,t._path);{const i=Xw(s,t);return Za(n,t,null,i)}}}}function ro(n,e){const t=Do(e);return n.queryToTagMap.get(t)}function Do(n){return n._path.toString()+"$"+n._queryIdentifier}function fu(n,e){return n.tagToQueryMap.get(e)}function pu(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ie(n.substr(0,e))}}function _u(n,e,t){const r=n.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const s=au(n.pendingWriteTree_,e);return hu(r,t,s,null)}function ZA(n){return n.fold((e,t,r)=>{if(t&&hn(t))return[No(t)];{let s=[];return t&&(s=__(t)),et(r,(i,o)=>{s=s.concat(o)}),s}})}function ls(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(zA())(n._repo,n._path):n}function eC(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=Do(r),i=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(i)}}}function tC(){return HA++}function nC(n,e,t){const r=e._path,s=ro(n,e),i=T_(n,t),o=n.listenProvider_.startListening(ls(e),s,i.hashFn,i.onComplete),l=n.syncPointTree_.subtree(r);if(s)D(!hn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((h,f,p)=>{if(!J(h)&&f&&hn(f))return[No(f).query];{let m=[];return f&&(m=m.concat(__(f).map(R=>R.query))),et(p,(R,P)=>{m=m.concat(P)}),m}});for(let h=0;h<u.length;++h){const f=u[h];n.listenProvider_.stopListening(ls(f),ro(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new mu(t)}node(){return this.node_}}class gu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ae(this.path_,e);return new gu(this.syncTree_,t)}node(){return du(this.syncTree_,this.path_)}}const rC=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},cd=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return sC(n[".sv"],e,t);if(typeof n[".sv"]=="object")return iC(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},sC=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},iC=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const s=e.node();if(D(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},oC=function(n,e,t,r){return yu(e,new gu(t,n),r)},w_=function(n,e,t){return yu(n,new mu(e),t)};function yu(n,e,t){const r=n.getPriority().val(),s=cd(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,l=cd(o.getValue(),e,t);return l!==o.getValue()||s!==o.getPriority().val()?new Re(l,xe(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Re(s))),o.forEachChild(fe,(l,u)=>{const h=yu(u,e.getImmediateChild(l),t);h!==u&&(i=i.updateImmediateChild(l,h))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function vu(n,e){let t=e instanceof ie?e:new ie(e),r=n,s=Q(t);for(;s!==null;){const i=nr(r.node.children,s)||{children:{},childCount:0};r=new Eu(s,r,i),t=ae(t),s=Q(t)}return r}function Cr(n){return n.node.value}function I_(n,e){n.node.value=e,el(n)}function A_(n){return n.node.childCount>0}function aC(n){return Cr(n)===void 0&&!A_(n)}function ko(n,e){et(n.node.children,(t,r)=>{e(new Eu(t,n,r))})}function C_(n,e,t,r){t&&e(n),ko(n,s=>{C_(s,e,!0)})}function lC(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xs(n){return new ie(n.parent===null?n.name:Xs(n.parent)+"/"+n.name)}function el(n){n.parent!==null&&uC(n.parent,n.name,n)}function uC(n,e,t){const r=aC(t),s=Ut(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,el(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,el(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=/[\[\].#$\/\u0000-\u001F\u007F]/,hC=/[\[\].#$\u0000-\u001F\u007F]/,va=10*1024*1024,R_=function(n){return typeof n=="string"&&n.length!==0&&!cC.test(n)},S_=function(n){return typeof n=="string"&&n.length!==0&&!hC.test(n)},dC=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),S_(n)},fC=function(n,e,t,r){Tu(ol(n,"value"),e,t)},Tu=function(n,e,t){const r=t instanceof ie?new VI(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+vn(r));if(typeof e=="function")throw new Error(n+"contains a function "+vn(r)+" with contents = "+e.toString());if(Sp(e))throw new Error(n+"contains "+e.toString()+" "+vn(r));if(typeof e=="string"&&e.length>va/3&&oo(e)>va)throw new Error(n+"contains a string greater than "+va+" utf8 bytes "+vn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(et(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!R_(o)))throw new Error(n+" contains an invalid key ("+o+") "+vn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);NI(r,o),Tu(n,l,r),xI(r)}),s&&i)throw new Error(n+' contains ".value" child '+vn(r)+" in addition to actual children.")}},P_=function(n,e,t,r){if(!S_(t))throw new Error(ol(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pC=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),P_(n,e,t)},b_=function(n,e){if(Q(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},_C=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!R_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!dC(t))throw new Error(ol(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wu(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!eu(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function V_(n,e,t){wu(n,t),N_(n,r=>eu(r,e))}function Ft(n,e,t){wu(n,t),N_(n,r=>dt(r,e)||dt(e,r))}function N_(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(gC(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function gC(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();ss&&Ue("event: "+t.toString()),Ar(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="repo_interrupt",EC=25;class vC{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yi(),this.transactionQueueTree_=new Eu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TC(n,e,t){if(n.stats_=Jl(n.repoInfo_),n.forceRestClient_||tI())n.server_=new Ki(n.repoInfo_,(r,s,i,o)=>{hd(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>dd(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Dt(n.repoInfo_,e,(r,s,i,o)=>{hd(n,r,s,i,o)},r=>{dd(n,r)},r=>{IC(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=oI(n.repoInfo_,()=>new sA(n.stats_,n.server_)),n.infoData_=new ZI,n.infoSyncTree_=new ld({startListening:(r,s,i,o)=>{let l=[];const u=n.infoData_.getNode(r._path);return u.isEmpty()||(l=xo(n.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Au(n,"connected",!1),n.serverSyncTree_=new ld({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(l,u)=>{const h=o(l,u);Ft(n.eventQueue_,r._path,h)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function wC(n){const t=n.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Iu(n){return rC({timestamp:wC(n)})}function hd(n,e,t,r,s){n.dataUpdateCount++;const i=new ie(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const u=bi(t,h=>xe(h));o=JA(n.serverSyncTree_,i,u,s)}else{const u=xe(t);o=XA(n.serverSyncTree_,i,u,s)}else if(r){const u=bi(t,h=>xe(h));o=QA(n.serverSyncTree_,i,u)}else{const u=xe(t);o=xo(n.serverSyncTree_,i,u)}let l=i;o.length>0&&(l=Oo(n,i)),Ft(n.eventQueue_,l,o)}function dd(n,e){Au(n,"connected",e),e===!1&&CC(n)}function IC(n,e){et(e,(t,r)=>{Au(n,t,r)})}function Au(n,e,t){const r=new ie("/.info/"+e),s=xe(t);n.infoData_.updateSnapshot(r,s);const i=xo(n.infoSyncTree_,r,s);Ft(n.eventQueue_,r,i)}function x_(n){return n.nextWriteId_++}function AC(n,e,t,r,s){Cu(n,"set",{path:e.toString(),value:t,priority:r});const i=Iu(n),o=xe(t,r),l=du(n.serverSyncTree_,e),u=w_(o,l,i),h=x_(n),f=y_(n.serverSyncTree_,e,u,h,!0);wu(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(m,R)=>{const P=m==="ok";P||Ye("set at "+e+" failed: "+m);const k=An(n.serverSyncTree_,h,!P);Ft(n.eventQueue_,e,k),PC(n,s,m,R)});const p=M_(n,e);Oo(n,p),Ft(n.eventQueue_,p,[])}function CC(n){Cu(n,"onDisconnectEvents");const e=Iu(n),t=Yi();Ha(n.onDisconnect_,ne(),(s,i)=>{const o=oC(s,i,n.serverSyncTree_,e);s_(t,s,o)});let r=[];Ha(t,ne(),(s,i)=>{r=r.concat(xo(n.serverSyncTree_,s,i));const o=M_(n,s);Oo(n,o)}),n.onDisconnect_=Yi(),Ft(n.eventQueue_,ne(),r)}function RC(n,e,t){let r;Q(e._path)===".info"?r=ud(n.infoSyncTree_,e,t):r=ud(n.serverSyncTree_,e,t),V_(n.eventQueue_,e._path,r)}function fd(n,e,t){let r;Q(e._path)===".info"?r=Za(n.infoSyncTree_,e,t):r=Za(n.serverSyncTree_,e,t),V_(n.eventQueue_,e._path,r)}function SC(n){n.persistentConnection_&&n.persistentConnection_.interrupt(yC)}function Cu(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ue(t,...e)}function PC(n,e,t,r){e&&Ar(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function D_(n,e,t){return du(n.serverSyncTree_,e,t)||$.EMPTY_NODE}function Ru(n,e=n.transactionQueueTree_){if(e||Lo(n,e),Cr(e)){const t=O_(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&bC(n,Xs(e),t)}else A_(e)&&ko(e,t=>{Ru(n,t)})}function bC(n,e,t){const r=t.map(h=>h.currentWriteId),s=D_(n,e,r);let i=s;const o=s.hash();for(let h=0;h<t.length;h++){const f=t[h];D(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=He(e,f.path);i=i.updateChild(p,f.currentOutputSnapshotRaw)}const l=i.val(!0),u=e;n.server_.put(u.toString(),l,h=>{Cu(n,"transaction put response",{path:u.toString(),status:h});let f=[];if(h==="ok"){const p=[];for(let m=0;m<t.length;m++)t[m].status=2,f=f.concat(An(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&p.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();Lo(n,vu(n.transactionQueueTree_,e)),Ru(n,n.transactionQueueTree_),Ft(n.eventQueue_,e,f);for(let m=0;m<p.length;m++)Ar(p[m])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Ye("transaction at "+u.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}Oo(n,e)}},o)}function Oo(n,e){const t=k_(n,e),r=Xs(t),s=O_(n,t);return VC(n,s,r),r}function VC(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],h=He(t,u.path);let f=!1,p;if(D(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)f=!0,p=u.abortReason,s=s.concat(An(n.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=EC)f=!0,p="maxretry",s=s.concat(An(n.serverSyncTree_,u.currentWriteId,!0));else{const m=D_(n,u.path,o);u.currentInputSnapshot=m;const R=e[l].update(m.val());if(R!==void 0){Tu("transaction failed: Data returned ",R,u.path);let P=xe(R);typeof R=="object"&&R!=null&&Ut(R,".priority")||(P=P.updatePriority(m.getPriority()));const L=u.currentWriteId,z=Iu(n),te=w_(P,m,z);u.currentOutputSnapshotRaw=P,u.currentOutputSnapshotResolved=te,u.currentWriteId=x_(n),o.splice(o.indexOf(L),1),s=s.concat(y_(n.serverSyncTree_,u.path,te,u.currentWriteId,u.applyLocally)),s=s.concat(An(n.serverSyncTree_,L,!0))}else f=!0,p="nodata",s=s.concat(An(n.serverSyncTree_,u.currentWriteId,!0))}Ft(n.eventQueue_,t,s),s=[],f&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(p),!1,null))))}Lo(n,n.transactionQueueTree_);for(let l=0;l<r.length;l++)Ar(r[l]);Ru(n,n.transactionQueueTree_)}function k_(n,e){let t,r=n.transactionQueueTree_;for(t=Q(e);t!==null&&Cr(r)===void 0;)r=vu(r,t),e=ae(e),t=Q(e);return r}function O_(n,e){const t=[];return L_(n,e,t),t.sort((r,s)=>r.order-s.order),t}function L_(n,e,t){const r=Cr(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);ko(e,s=>{L_(n,s,t)})}function Lo(n,e){const t=Cr(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,I_(e,t.length>0?t:void 0)}ko(e,r=>{Lo(n,r)})}function M_(n,e){const t=Xs(k_(n,e)),r=vu(n.transactionQueueTree_,e);return lC(r,s=>{Ta(n,s)}),Ta(n,r),C_(r,s=>{Ta(n,s)}),t}function Ta(n,e){const t=Cr(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(D(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(D(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(An(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?I_(e,void 0):t.length=i+1,Ft(n.eventQueue_,Xs(e),s);for(let o=0;o<r.length;o++)Ar(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function xC(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ye(`Invalid query segment '${t}' in query '${n}'`)}return e}const pd=function(n,e){const t=DC(n),r=t.namespace;t.domain==="firebase.com"&&Mt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||zw();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Up(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new ie(t.pathString)}},DC=function(n){let e="",t="",r="",s="",i="",o=!0,l="https",u=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(s=NC(n.substring(f,p)));const m=xC(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const R=e.slice(0,h);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const P=e.indexOf(".");r=e.substring(0,P).toLowerCase(),t=e.substring(P+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:u,domain:t,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class OC{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return J(this._path)?null:Qp(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=Xh(this._queryParams),t=Yl(e);return t==="{}"?"default":t}get _queryObject(){return Xh(this._queryParams)}isEqual(e){if(e=_t(e),!(e instanceof Su))return!1;const t=this._repo===e._repo,r=eu(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+bI(this._path)}}class dn extends Su{constructor(e,t){super(e,t,new su,!1)}get parent(){const e=Yp(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class so{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ie(e),r=tl(this.ref,e);return new so(this._node.getChild(t),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new so(s,tl(this.ref,r),fe)))}hasChild(e){const t=new ie(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function aR(n,e){return n=_t(n),n._checkNotDeleted("ref"),e!==void 0?tl(n._root,e):n._root}function tl(n,e){return n=_t(n),Q(n._path)===null?pC("child","path",e):P_("child","path",e),new dn(n._repo,Ae(n._path,e))}function lR(n){return b_("remove",n._path),MC(n,null)}function MC(n,e){n=_t(n),b_("set",n._path),fC("set",e,n._path);const t=new io;return AC(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Pu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new kC("value",this,new so(e.snapshotNode,new dn(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new OC(this,e,t):null}matches(e){return e instanceof Pu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function FC(n,e,t,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const u=t,h=(f,p)=>{fd(n._repo,n,l),u(f,p)};h.userCallback=t.userCallback,h.context=t.context,t=h}const o=new LC(t,i||void 0),l=new Pu(o);return RC(n._repo,n,l),()=>fd(n._repo,n,l)}function uR(n,e,t,r){return FC(n,"value",e,t,r)}UA(dn);GA(dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="FIREBASE_DATABASE_EMULATOR_HOST",nl={};let BC=!1;function qC(n,e,t,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=ao(i);n.repoInfo_=new Up(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function jC(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||Mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=pd(i,s),l=o.repoInfo,u;typeof process<"u"&&Dh&&(u=Dh[UC]),u?(i=`http://${u}?ns=${l.namespace}`,o=pd(i,s),l=o.repoInfo):o.repoInfo.secure;const h=new rI(n.name,n.options,e);_C("Invalid Firebase Database URL",o),J(o.path)||Mt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=WC(l,n,h,new nI(n,t));return new GC(f,n)}function $C(n,e){const t=nl[e];(!t||t[n.key]!==n)&&Mt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),SC(n),delete t[n.key]}function WC(n,e,t,r){let s=nl[e.name];s||(s={},nl[e.name]=s);let i=s[n.toURLString()];return i&&Mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new vC(n,BC,t,r),s[n.toURLString()]=i,i}class GC{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&($C(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mt("Cannot call "+e+" on a deleted database.")}}function cR(n=Vd(),e){const t=Sd(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Ed("database");r&&zC(t,...r)}return t}function zC(n,e,t,r={}){n=_t(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&cs(r,i.repoInfo_.emulatorOptions))return;Mt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Si(Si.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Td(r.mockUserToken,n.app.options.projectId);o=new Si(l)}ao(e)&&Rd(e),qC(i,s,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(n){Bw(bd),ds(new rr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return jC(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),Ht(kh,Oh,n),Ht(kh,Oh,"esm2020")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Dt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};HC();export{Vd as a,tR as b,cR as c,ZC as d,uR as e,eR as f,KC as g,MC as h,Sg as i,iR as j,lR as k,oR as o,aR as r,sR as s};
