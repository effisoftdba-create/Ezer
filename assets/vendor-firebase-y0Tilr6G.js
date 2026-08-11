import{o as Pm,R as Oa}from"./vendor-CXHiESBm.js";const bm=()=>{};var Yu={};/**
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
 */const kh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(n,e){if(!n)throw ur(e)},ur=function(n){return new Error("Firebase Database ("+kh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Oh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Vm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},La={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let T=(l&15)<<2|h>>6,S=h&63;c||(S=64,a||(T=64)),r.push(t[f],t[p],t[T],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Oh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Nm;const T=i<<2|l>>4;if(r.push(T),h!==64){const S=l<<4&240|h>>2;if(r.push(S),p!==64){const b=h<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lh=function(n){const e=Oh(n);return La.encodeByteArray(e,!0)},_i=function(n){return Lh(n).replace(/\./g,"")},ta=function(n){try{return La.decodeString(n,!0)}catch{}return null};/**
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
 */function xm(n){return Mh(void 0,n)}function Mh(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Dm(t)||(n[t]=Mh(n[t],e[t]));return n}function Dm(n){return n!=="__proto__"}/**
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
 */function km(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Om=()=>km().__FIREBASE_DEFAULTS__,Lm=()=>{if(typeof process>"u"||typeof Yu>"u")return;const n=Yu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ta(n[1]);return e&&JSON.parse(e)},Ma=()=>{try{return bm()||Om()||Lm()||Mm()}catch{return}},Fm=n=>Ma()?.emulatorHosts?.[n],Um=n=>{const e=Fm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Fh=()=>Ma()?.config;/**
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
 */class Fa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Bm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[_i(JSON.stringify(t)),_i(JSON.stringify(a)),""].join(".")}/**
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
 */function Uh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Uh())}function qm(){const n=Ma()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $m(){return kh.NODE_ADMIN===!0}function Wm(){return!qm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gm(){try{return typeof indexedDB=="object"}catch{return!1}}function zm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Hm="FirebaseError";class cr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hm,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qh.prototype.create)}}class qh{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Km(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new cr(s,l,r)}}function Km(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const a=n.substring(s+2,i),l=e[a];r+=n.substring(t,s)+(l!=null?String(l):`<${a}?>`),t=i+1}return r}catch{return n}}/**
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
 */function rs(n){return JSON.parse(n)}function Ve(n){return JSON.stringify(n)}/**
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
 */const jh=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=rs(ta(i[0])||""),t=rs(ta(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},Qm=function(n){const e=jh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ym=function(n){const e=jh(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Lt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Jn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Xu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function gi(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function yi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ju(i)&&Ju(a)){if(!yi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ju(n){return n!==null&&typeof n=="object"}/**
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
 */function Xm(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Jm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)r[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const T=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(T<<1|T>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4],h,f;for(let p=0;p<80;p++){p<40?p<20?(h=l^i&(a^l),f=1518500249):(h=i^a^l,f=1859775393):p<60?(h=i&a|l&(i|a),f=2400959708):(h=i^a^l,f=3395469782);const T=(s<<5|s>>>27)+h+c+f+r[p]&4294967295;c=l,l=a,a=(i<<30|i>>>2)&4294967295,i=s,s=T}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let a=this.inbuf_;for(;s<t;){if(a===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(i),a=0;break}}else for(;s<t;)if(i[a]=e[s],++a,++s,a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Zm(n,e){return`${n} failed: ${e} argument `}/**
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
 */const e_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,O(r<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(r)-56320;s=65536+(i<<10)+a}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},$i=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function An(n){return n&&n._delegate?n._delegate:n}/**
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
 */function $h(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function t_(n){return(await fetch(n,{credentials:"include"})).ok}class Zn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pn="[DEFAULT]";/**
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
 */class n_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Fa;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(s_(e))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pn){return this.instances.has(e)}getOptions(e=pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pn){return this.component?this.component.multipleInstances?e:pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r_(n){return n===pn?void 0:n}function s_(n){return n.instantiationMode==="EAGER"}/**
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
 */class i_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new n_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const o_={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},a_=Q.INFO,l_={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},u_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=l_[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ua{constructor(e){this.name=e,this._logLevel=a_,this._logHandler=u_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}/**
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
 */class c_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(h_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function h_(n){return n.getComponent()?.type==="VERSION"}const na="@firebase/app",Zu="0.16.0";/**
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
 */const Dt=new Ua("@firebase/app"),d_="@firebase/app-compat",f_="@firebase/analytics-compat",p_="@firebase/analytics",m_="@firebase/app-check-compat",__="@firebase/app-check",g_="@firebase/auth",y_="@firebase/auth-compat",E_="@firebase/database",T_="@firebase/data-connect",v_="@firebase/database-compat",w_="@firebase/functions",I_="@firebase/functions-compat",A_="@firebase/installations",R_="@firebase/installations-compat",C_="@firebase/messaging",S_="@firebase/messaging-compat",P_="@firebase/performance",b_="@firebase/performance-compat",V_="@firebase/remote-config",N_="@firebase/remote-config-compat",x_="@firebase/storage",D_="@firebase/storage-compat",k_="@firebase/firestore",O_="@firebase/ai",L_="@firebase/firestore-compat",M_="firebase",F_="12.17.0";/**
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
 */const ra="[DEFAULT]",U_={[na]:"fire-core",[d_]:"fire-core-compat",[p_]:"fire-analytics",[f_]:"fire-analytics-compat",[__]:"fire-app-check",[m_]:"fire-app-check-compat",[g_]:"fire-auth",[y_]:"fire-auth-compat",[E_]:"fire-rtdb",[T_]:"fire-data-connect",[v_]:"fire-rtdb-compat",[w_]:"fire-fn",[I_]:"fire-fn-compat",[A_]:"fire-iid",[R_]:"fire-iid-compat",[C_]:"fire-fcm",[S_]:"fire-fcm-compat",[P_]:"fire-perf",[b_]:"fire-perf-compat",[V_]:"fire-rc",[N_]:"fire-rc-compat",[x_]:"fire-gcs",[D_]:"fire-gcs-compat",[k_]:"fire-fst",[L_]:"fire-fst-compat",[O_]:"fire-vertex","fire-js":"fire-js",[M_]:"fire-js-all"};/**
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
 */const ss=new Map,B_=new Map,sa=new Map;function ec(n,e){try{n.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function is(n){const e=n.name;if(sa.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;sa.set(e,n);for(const t of ss.values())ec(t,n);for(const t of B_.values())ec(t,n);return!0}function q_(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Wh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const j_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new qh("app","Firebase",j_);/**
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
 */class $_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const Gh=F_;function W_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ra,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(t||(t=Fh()),!t)throw Pt.create("no-options");const i=ss.get(s);if(i)if(yi(t,i.options)){if(yi(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw Pt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const a=new i_(s);for(const c of sa.values())a.addComponent(c);const l=new $_(t,r,a);return ss.set(s,l),l}function G_(n=ra){const e=ss.get(n);if(!e&&n===ra&&Fh())return W_();if(!e)throw Pt.create("no-app",{appName:n});return e}function WA(){return Array.from(ss.values())}function Wt(n,e,t){let r=U_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(a.join(" "));return}is(new Zn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const z_="firebase-heartbeat-database",H_=1,os="firebase-heartbeat-store";let Bo=null;function zh(){return Bo||(Bo=Pm(z_,H_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(os)}catch{}}}}).catch(n=>{throw Pt.create("idb-open",{originalErrorMessage:n.message})})),Bo}async function K_(n){try{const t=(await zh()).transaction(os),r=await t.objectStore(os).get(Hh(n));return await t.done,r}catch(e){if(e instanceof cr)Dt.warn(e.message);else{const t=Pt.create("idb-get",{originalErrorMessage:e?.message});Dt.warn(t.message)}}}async function tc(n,e){try{const r=(await zh()).transaction(os,"readwrite");await r.objectStore(os).put(e,Hh(n)),await r.done}catch(t){if(t instanceof cr)Dt.warn(t.message);else{const r=Pt.create("idb-set",{originalErrorMessage:t?.message});Dt.warn(r.message)}}}function Hh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Q_=1024,Y_=30;class X_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Z_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Y_){const s=eg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Dt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nc(),{heartbeatsToSend:t,unsentEntries:r}=J_(this._heartbeatsCache.heartbeats),s=_i(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Dt.warn(e),""}}}function nc(){return new Date().toISOString().substring(0,10)}function J_(n,e=Q_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),rc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),rc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Z_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gm()?zm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await K_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rc(n){return _i(JSON.stringify({version:2,heartbeats:n})).length}function eg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function tg(n){is(new Zn("platform-logger",e=>new c_(e),"PRIVATE")),is(new Zn("heartbeat",e=>new X_(e),"PRIVATE")),Wt(na,Zu,n),Wt(na,Zu,"esm2020"),Wt("fire-js","")}/**
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
 */tg("");var ng="firebase",rg="12.17.1";/**
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
 */Wt(ng,rg,"app");var sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,Kh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function y(){}y.prototype=_.prototype,w.F=_.prototype,w.prototype=new y,w.prototype.constructor=w,w.D=function(I,v,R){for(var g=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)g[$e-2]=arguments[$e];return _.prototype[v].apply(I,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,y){y||(y=0);const I=Array(16);if(typeof _=="string")for(var v=0;v<16;++v)I[v]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(v=0;v<16;++v)I[v]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=w.g[0],y=w.g[1],v=w.g[2];let R=w.g[3],g;g=_+(R^y&(v^R))+I[0]+3614090360&4294967295,_=y+(g<<7&4294967295|g>>>25),g=R+(v^_&(y^v))+I[1]+3905402710&4294967295,R=_+(g<<12&4294967295|g>>>20),g=v+(y^R&(_^y))+I[2]+606105819&4294967295,v=R+(g<<17&4294967295|g>>>15),g=y+(_^v&(R^_))+I[3]+3250441966&4294967295,y=v+(g<<22&4294967295|g>>>10),g=_+(R^y&(v^R))+I[4]+4118548399&4294967295,_=y+(g<<7&4294967295|g>>>25),g=R+(v^_&(y^v))+I[5]+1200080426&4294967295,R=_+(g<<12&4294967295|g>>>20),g=v+(y^R&(_^y))+I[6]+2821735955&4294967295,v=R+(g<<17&4294967295|g>>>15),g=y+(_^v&(R^_))+I[7]+4249261313&4294967295,y=v+(g<<22&4294967295|g>>>10),g=_+(R^y&(v^R))+I[8]+1770035416&4294967295,_=y+(g<<7&4294967295|g>>>25),g=R+(v^_&(y^v))+I[9]+2336552879&4294967295,R=_+(g<<12&4294967295|g>>>20),g=v+(y^R&(_^y))+I[10]+4294925233&4294967295,v=R+(g<<17&4294967295|g>>>15),g=y+(_^v&(R^_))+I[11]+2304563134&4294967295,y=v+(g<<22&4294967295|g>>>10),g=_+(R^y&(v^R))+I[12]+1804603682&4294967295,_=y+(g<<7&4294967295|g>>>25),g=R+(v^_&(y^v))+I[13]+4254626195&4294967295,R=_+(g<<12&4294967295|g>>>20),g=v+(y^R&(_^y))+I[14]+2792965006&4294967295,v=R+(g<<17&4294967295|g>>>15),g=y+(_^v&(R^_))+I[15]+1236535329&4294967295,y=v+(g<<22&4294967295|g>>>10),g=_+(v^R&(y^v))+I[1]+4129170786&4294967295,_=y+(g<<5&4294967295|g>>>27),g=R+(y^v&(_^y))+I[6]+3225465664&4294967295,R=_+(g<<9&4294967295|g>>>23),g=v+(_^y&(R^_))+I[11]+643717713&4294967295,v=R+(g<<14&4294967295|g>>>18),g=y+(R^_&(v^R))+I[0]+3921069994&4294967295,y=v+(g<<20&4294967295|g>>>12),g=_+(v^R&(y^v))+I[5]+3593408605&4294967295,_=y+(g<<5&4294967295|g>>>27),g=R+(y^v&(_^y))+I[10]+38016083&4294967295,R=_+(g<<9&4294967295|g>>>23),g=v+(_^y&(R^_))+I[15]+3634488961&4294967295,v=R+(g<<14&4294967295|g>>>18),g=y+(R^_&(v^R))+I[4]+3889429448&4294967295,y=v+(g<<20&4294967295|g>>>12),g=_+(v^R&(y^v))+I[9]+568446438&4294967295,_=y+(g<<5&4294967295|g>>>27),g=R+(y^v&(_^y))+I[14]+3275163606&4294967295,R=_+(g<<9&4294967295|g>>>23),g=v+(_^y&(R^_))+I[3]+4107603335&4294967295,v=R+(g<<14&4294967295|g>>>18),g=y+(R^_&(v^R))+I[8]+1163531501&4294967295,y=v+(g<<20&4294967295|g>>>12),g=_+(v^R&(y^v))+I[13]+2850285829&4294967295,_=y+(g<<5&4294967295|g>>>27),g=R+(y^v&(_^y))+I[2]+4243563512&4294967295,R=_+(g<<9&4294967295|g>>>23),g=v+(_^y&(R^_))+I[7]+1735328473&4294967295,v=R+(g<<14&4294967295|g>>>18),g=y+(R^_&(v^R))+I[12]+2368359562&4294967295,y=v+(g<<20&4294967295|g>>>12),g=_+(y^v^R)+I[5]+4294588738&4294967295,_=y+(g<<4&4294967295|g>>>28),g=R+(_^y^v)+I[8]+2272392833&4294967295,R=_+(g<<11&4294967295|g>>>21),g=v+(R^_^y)+I[11]+1839030562&4294967295,v=R+(g<<16&4294967295|g>>>16),g=y+(v^R^_)+I[14]+4259657740&4294967295,y=v+(g<<23&4294967295|g>>>9),g=_+(y^v^R)+I[1]+2763975236&4294967295,_=y+(g<<4&4294967295|g>>>28),g=R+(_^y^v)+I[4]+1272893353&4294967295,R=_+(g<<11&4294967295|g>>>21),g=v+(R^_^y)+I[7]+4139469664&4294967295,v=R+(g<<16&4294967295|g>>>16),g=y+(v^R^_)+I[10]+3200236656&4294967295,y=v+(g<<23&4294967295|g>>>9),g=_+(y^v^R)+I[13]+681279174&4294967295,_=y+(g<<4&4294967295|g>>>28),g=R+(_^y^v)+I[0]+3936430074&4294967295,R=_+(g<<11&4294967295|g>>>21),g=v+(R^_^y)+I[3]+3572445317&4294967295,v=R+(g<<16&4294967295|g>>>16),g=y+(v^R^_)+I[6]+76029189&4294967295,y=v+(g<<23&4294967295|g>>>9),g=_+(y^v^R)+I[9]+3654602809&4294967295,_=y+(g<<4&4294967295|g>>>28),g=R+(_^y^v)+I[12]+3873151461&4294967295,R=_+(g<<11&4294967295|g>>>21),g=v+(R^_^y)+I[15]+530742520&4294967295,v=R+(g<<16&4294967295|g>>>16),g=y+(v^R^_)+I[2]+3299628645&4294967295,y=v+(g<<23&4294967295|g>>>9),g=_+(v^(y|~R))+I[0]+4096336452&4294967295,_=y+(g<<6&4294967295|g>>>26),g=R+(y^(_|~v))+I[7]+1126891415&4294967295,R=_+(g<<10&4294967295|g>>>22),g=v+(_^(R|~y))+I[14]+2878612391&4294967295,v=R+(g<<15&4294967295|g>>>17),g=y+(R^(v|~_))+I[5]+4237533241&4294967295,y=v+(g<<21&4294967295|g>>>11),g=_+(v^(y|~R))+I[12]+1700485571&4294967295,_=y+(g<<6&4294967295|g>>>26),g=R+(y^(_|~v))+I[3]+2399980690&4294967295,R=_+(g<<10&4294967295|g>>>22),g=v+(_^(R|~y))+I[10]+4293915773&4294967295,v=R+(g<<15&4294967295|g>>>17),g=y+(R^(v|~_))+I[1]+2240044497&4294967295,y=v+(g<<21&4294967295|g>>>11),g=_+(v^(y|~R))+I[8]+1873313359&4294967295,_=y+(g<<6&4294967295|g>>>26),g=R+(y^(_|~v))+I[15]+4264355552&4294967295,R=_+(g<<10&4294967295|g>>>22),g=v+(_^(R|~y))+I[6]+2734768916&4294967295,v=R+(g<<15&4294967295|g>>>17),g=y+(R^(v|~_))+I[13]+1309151649&4294967295,y=v+(g<<21&4294967295|g>>>11),g=_+(v^(y|~R))+I[4]+4149444226&4294967295,_=y+(g<<6&4294967295|g>>>26),g=R+(y^(_|~v))+I[11]+3174756917&4294967295,R=_+(g<<10&4294967295|g>>>22),g=v+(_^(R|~y))+I[2]+718787259&4294967295,v=R+(g<<15&4294967295|g>>>17),g=y+(R^(v|~_))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+v&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const y=_-this.blockSize,I=this.C;let v=this.h,R=0;for(;R<_;){if(v==0)for(;R<=y;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<_;)if(I[v++]=w.charCodeAt(R++),v==this.blockSize){s(this,I),v=0;break}}else for(;R<_;)if(I[v++]=w[R++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var y=w.length-8;y<w.length;++y)w[y]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)w[_++]=this.g[y]>>>I&255;return w};function i(w,_){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=_(w)}function a(w,_){this.h=_;const y=[];let I=!0;for(let v=w.length-1;v>=0;v--){const R=w[v]|0;I&&R==_||(y[v]=R,I=!1)}this.g=y}var l={};function c(w){return-128<=w&&w<128?i(w,function(_){return new a([_|0],_<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return L(h(-w));const _=[];let y=1;for(let I=0;w>=y;I++)_[I]=w/y|0,y*=4294967296;return new a(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return L(f(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=h(Math.pow(_,8));let I=p;for(let R=0;R<w.length;R+=8){var v=Math.min(8,w.length-R);const g=parseInt(w.substring(R,R+v),_);v<8?(v=h(Math.pow(_,v)),I=I.j(v).add(h(g))):(I=I.j(y),I=I.add(h(g)))}return I}var p=c(0),T=c(1),S=c(16777216);n=a.prototype,n.m=function(){if(M(this))return-L(this).m();let w=0,_=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);w+=(I>=0?I:4294967296+I)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(b(this))return"0";if(M(this))return"-"+L(this).toString(w);const _=h(Math.pow(w,6));var y=this;let I="";for(;;){const v=xe(y,_).g;y=G(y,v.j(_));let R=((y.g.length>0?y.g[0]:y.h)>>>0).toString(w);if(y=v,b(y))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function b(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function M(w){return w.h==-1}n.l=function(w){return w=G(this,w),M(w)?-1:b(w)?0:1};function L(w){const _=w.g.length,y=[];for(let I=0;I<_;I++)y[I]=~w.g[I];return new a(y,~w.h).add(T)}n.abs=function(){return M(this)?L(this):this},n.add=function(w){const _=Math.max(this.g.length,w.g.length),y=[];let I=0;for(let v=0;v<=_;v++){let R=I+(this.i(v)&65535)+(w.i(v)&65535),g=(R>>>16)+(this.i(v)>>>16)+(w.i(v)>>>16);I=g>>>16,R&=65535,g&=65535,y[v]=g<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(w,_){return w.add(L(_))}n.j=function(w){if(b(this)||b(w))return p;if(M(this))return M(w)?L(this).j(L(w)):L(L(this).j(w));if(M(w))return L(this.j(L(w)));if(this.l(S)<0&&w.l(S)<0)return h(this.m()*w.m());const _=this.g.length+w.g.length,y=[];for(var I=0;I<2*_;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let v=0;v<w.g.length;v++){const R=this.i(I)>>>16,g=this.i(I)&65535,$e=w.i(v)>>>16,ln=w.i(v)&65535;y[2*I+2*v]+=g*ln,ee(y,2*I+2*v),y[2*I+2*v+1]+=R*ln,ee(y,2*I+2*v+1),y[2*I+2*v+1]+=g*$e,ee(y,2*I+2*v+1),y[2*I+2*v+2]+=R*$e,ee(y,2*I+2*v+2)}for(w=0;w<_;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=_;w<2*_;w++)y[w]=0;return new a(y,0)};function ee(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function ie(w,_){this.g=w,this.h=_}function xe(w,_){if(b(_))throw Error("division by zero");if(b(w))return new ie(p,p);if(M(w))return _=xe(L(w),_),new ie(L(_.g),L(_.h));if(M(_))return _=xe(w,L(_)),new ie(L(_.g),_.h);if(w.g.length>30){if(M(w)||M(_))throw Error("slowDivide_ only works with positive integers.");for(var y=T,I=_;I.l(w)<=0;)y=ut(y),I=ut(I);var v=be(y,1),R=be(I,1);for(I=be(I,2),y=be(y,2);!b(I);){var g=R.add(I);g.l(w)<=0&&(v=v.add(y),R=g),I=be(I,1),y=be(y,1)}return _=G(w,v.j(_)),new ie(v,_)}for(v=p;w.l(_)>=0;){for(y=Math.max(1,Math.floor(w.m()/_.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=h(y),g=R.j(_);M(g)||g.l(w)>0;)y-=I,R=h(y),g=R.j(_);b(R)&&(R=T),v=v.add(R),w=G(w,g)}return new ie(v,w)}n.B=function(w){return xe(this,w).h},n.and=function(w){const _=Math.max(this.g.length,w.g.length),y=[];for(let I=0;I<_;I++)y[I]=this.i(I)&w.i(I);return new a(y,this.h&w.h)},n.or=function(w){const _=Math.max(this.g.length,w.g.length),y=[];for(let I=0;I<_;I++)y[I]=this.i(I)|w.i(I);return new a(y,this.h|w.h)},n.xor=function(w){const _=Math.max(this.g.length,w.g.length),y=[];for(let I=0;I<_;I++)y[I]=this.i(I)^w.i(I);return new a(y,this.h^w.h)};function ut(w){const _=w.g.length+1,y=[];for(let I=0;I<_;I++)y[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(y,w.h)}function be(w,_){const y=_>>5;_%=32;const I=w.g.length-y,v=[];for(let R=0;R<I;R++)v[R]=_>0?w.i(R+y)>>>_|w.i(R+y+1)<<32-_:w.i(R+y);return new a(v,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Kh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Gt=a}).apply(typeof sc<"u"?sc:typeof self<"u"?self:typeof window<"u"?window:{});var ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qh,$r,Yh,ci,ia,Xh,Jh,Zh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ni=="object"&&ni];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break e;d=d[A]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function c(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=c,h.apply(null,arguments)}function f(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function p(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(m,A,C){for(var D=Array(arguments.length-2),z=2;z<arguments.length;z++)D[z-2]=arguments[z];return u.prototype[A].apply(m,D)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const u=o.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function b(o,u){for(let m=1;m<arguments.length;m++){const A=arguments[m];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const C=A.length||0;o.length=d+C;for(let D=0;D<C;D++)o[d+D]=A[D]}else o.push(A)}}class M{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(o){a.setTimeout(()=>{throw o},0)}function G(){var o=w;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ee{constructor(){this.h=this.g=null}add(u,d){const m=ie.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var ie=new M(()=>new xe,o=>o.reset());class xe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,be=!1,w=new ee,_=()=>{const o=Promise.resolve(void 0);ut=()=>{o.then(y)}};function y(){for(var o;o=G();){try{o.h.call(o.g)}catch(d){L(d)}var u=ie;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}be=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o}();function g(o){return/^[\s\xa0]*$/.test(o)}function $e(o,u){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}p($e,v),$e.prototype.init=function(o,u){const d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ln="closure_listenable_"+(Math.random()*1e6|0),Yp=0;function Xp(o,u,d,m,A){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=A,this.key=++Yp,this.da=this.fa=!1}function qs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function js(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function Jp(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function Ql(o){const u={};for(const d in o)u[d]=o[d];return u}const Yl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xl(o,u){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let C=0;C<Yl.length;C++)d=Yl[C],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function $s(o){this.src=o,this.g={},this.h=0}$s.prototype.add=function(o,u,d,m,A){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const D=go(o,u,m,A);return D>-1?(u=o[D],d||(u.fa=!1)):(u=new Xp(u,this.src,C,!!m,A),u.fa=d,o.push(u)),u};function _o(o,u){const d=u.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,u,void 0),C;(C=A>=0)&&Array.prototype.splice.call(m,A,1),C&&(qs(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function go(o,u,d,m){for(let A=0;A<o.length;++A){const C=o[A];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==m)return A}return-1}var yo="closure_lm_"+(Math.random()*1e6|0),Eo={};function Jl(o,u,d,m,A){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Jl(o,u[C],d,m,A);return null}return d=tu(d),o&&o[ln]?o.J(u,d,l(m)?!!m.capture:!1,A):Zp(o,u,d,!1,m,A)}function Zp(o,u,d,m,A,C){if(!u)throw Error("Invalid event type");const D=l(A)?!!A.capture:!!A;let z=vo(o);if(z||(o[yo]=z=new $s(o)),d=z.add(u,d,m,D,C),d.proxy)return d;if(m=em(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)R||(A=D),A===void 0&&(A=!1),o.addEventListener(u.toString(),m,A);else if(o.attachEvent)o.attachEvent(eu(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function em(){function o(d){return u.call(o.src,o.listener,d)}const u=tm;return o}function Zl(o,u,d,m,A){if(Array.isArray(u))for(var C=0;C<u.length;C++)Zl(o,u[C],d,m,A);else m=l(m)?!!m.capture:!!m,d=tu(d),o&&o[ln]?(o=o.i,C=String(u).toString(),C in o.g&&(u=o.g[C],d=go(u,d,m,A),d>-1&&(qs(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[C],o.h--)))):o&&(o=vo(o))&&(u=o.g[u.toString()],o=-1,u&&(o=go(u,d,m,A)),(d=o>-1?u[o]:null)&&To(d))}function To(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[ln])_o(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(eu(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=vo(u))?(_o(d,o),d.h==0&&(d.src=null,u[yo]=null)):qs(o)}}}function eu(o){return o in Eo?Eo[o]:Eo[o]="on"+o}function tm(o,u){if(o.da)o=!0;else{u=new $e(u,this);const d=o.listener,m=o.ha||o.src;o.fa&&To(o),o=d.call(m,u)}return o}function vo(o){return o=o[yo],o instanceof $s?o:null}var wo="__closure_events_fn_"+(Math.random()*1e9>>>0);function tu(o){return typeof o=="function"?o:(o[wo]||(o[wo]=function(u){return o.handleEvent(u)}),o[wo])}function De(){I.call(this),this.i=new $s(this),this.M=this,this.G=null}p(De,I),De.prototype[ln]=!0,De.prototype.removeEventListener=function(o,u,d,m){Zl(this,o,u,d,m)};function qe(o,u){var d,m=o.G;if(m)for(d=[];m;m=m.G)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new v(u,o);else if(u instanceof v)u.target=u.target||o;else{var A=u;u=new v(m,o),Xl(u,A)}A=!0;let C,D;if(d)for(D=d.length-1;D>=0;D--)C=u.g=d[D],A=Ws(C,m,!0,u)&&A;if(C=u.g=o,A=Ws(C,m,!0,u)&&A,A=Ws(C,m,!1,u)&&A,d)for(D=0;D<d.length;D++)C=u.g=d[D],A=Ws(C,m,!1,u)&&A}De.prototype.N=function(){if(De.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let m=0;m<d.length;m++)qs(d[m]);delete o.g[u],o.h--}}this.G=null},De.prototype.J=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},De.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function Ws(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let A=!0;for(let C=0;C<u.length;++C){const D=u[C];if(D&&!D.da&&D.capture==d){const z=D.listener,Te=D.ha||D.src;D.fa&&_o(o.i,D),A=z.call(Te,m)!==!1&&A}}return A&&!m.defaultPrevented}function nm(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function nu(o){o.g=nm(()=>{o.g=null,o.i&&(o.i=!1,nu(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class rm extends I{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:nu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vr(o){I.call(this),this.h=o,this.g={}}p(vr,I);var ru=[];function su(o){js(o.g,function(u,d){this.g.hasOwnProperty(d)&&To(u)},o),o.g={}}vr.prototype.N=function(){vr.Z.N.call(this),su(this)},vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Io=a.JSON.stringify,sm=a.JSON.parse,im=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function iu(){}function ou(){}var wr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ao(){v.call(this,"d")}p(Ao,v);function Ro(){v.call(this,"c")}p(Ro,v);var un={},au=null;function Gs(){return au=au||new De}un.Ia="serverreachability";function lu(o){v.call(this,un.Ia,o)}p(lu,v);function Ir(o){const u=Gs();qe(u,new lu(u))}un.STAT_EVENT="statevent";function uu(o,u){v.call(this,un.STAT_EVENT,o),this.stat=u}p(uu,v);function je(o){const u=Gs();qe(u,new uu(u,o))}un.Ja="timingevent";function cu(o,u){v.call(this,un.Ja,o),this.size=u}p(cu,v);function Ar(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function Rr(){this.g=!0}Rr.prototype.ua=function(){this.g=!1};function om(o,u,d,m,A,C){o.info(function(){if(o.g)if(C){var D="",z=C.split("&");for(let se=0;se<z.length;se++){var Te=z[se].split("=");if(Te.length>1){const Ie=Te[0];Te=Te[1];const _t=Ie.split("_");D=_t.length>=2&&_t[1]=="type"?D+(Ie+"="+Te+"&"):D+(Ie+"=redacted&")}}}else D=null;else D=C;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+u+`
`+d+`
`+D})}function am(o,u,d,m,A,C,D){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+u+`
`+d+`
`+C+" "+D})}function Mn(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+um(o,d)+(m?" "+m:"")})}function lm(o,u){o.info(function(){return"TIMEOUT: "+u})}Rr.prototype.info=function(){};function um(o,u){if(!o.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var d=C[o];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var A=m[0];if(A!="noop"&&A!="stop"&&A!="close")for(let D=1;D<m.length;D++)m[D]=""}}}}return Io(C)}catch{return u}}var zs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},hu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},du;function Co(){}p(Co,iu),Co.prototype.g=function(){return new XMLHttpRequest},du=new Co;function Cr(o){return encodeURIComponent(String(o))}function cm(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function Mt(o,u,d,m){this.j=o,this.i=u,this.l=d,this.S=m||1,this.V=new vr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new fu}function fu(){this.i=null,this.g="",this.h=!1}var pu={},So={};function Po(o,u,d){o.M=1,o.A=Ks(mt(u)),o.u=d,o.R=!0,mu(o,null)}function mu(o,u){o.F=Date.now(),Hs(o),o.B=mt(o.A);var d=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Pu(d.i,"t",m),o.C=0,d=o.j.L,o.h=new fu,o.g=zu(o.j,d?u:null,!o.u),o.P>0&&(o.O=new rm(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,m=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(ru[0]=A.toString()),A=ru);for(let C=0;C<A.length;C++){const D=Jl(d,A[C],m||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=o.J?Ql(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Ir(),om(o.i,o.v,o.B,o.l,o.S,o.u)}Mt.prototype.ba=function(o){o=o.target;const u=this.O;u&&Bt(o)==3?u.j():this.Y(o)},Mt.prototype.Y=function(o){try{if(o==this.g)e:{const z=Bt(this.g),Te=this.g.ya(),se=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||Ou(this.g)))){this.K||z!=4||Te==7||(Te==8||se<=0?Ir(3):Ir(2)),bo(this);var u=this.g.ca();this.X=u;var d=hm(this);if(this.o=u==200,am(this.i,this.v,this.B,this.l,this.S,z,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,A=this.g;if((m=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(m)){var C=m;break t}}C=null}if(o=C)Mn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Vo(this,o);else{this.o=!1,this.m=3,je(12),cn(this),Sr(this);break e}}if(this.R){o=!0;let Ie;for(;!this.K&&this.C<d.length;)if(Ie=dm(this,d),Ie==So){z==4&&(this.m=4,je(14),o=!1),Mn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==pu){this.m=4,je(15),Mn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Mn(this.i,this.l,Ie,null),Vo(this,Ie);if(_u(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||d.length!=0||this.h.h||(this.m=1,je(16),o=!1),this.o=this.o&&o,!o)Mn(this.i,this.l,d,"[Invalid Chunked Response]"),cn(this),Sr(this);else if(d.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Fo(D),D.P=!0,je(11))}}else Mn(this.i,this.l,d,null),Vo(this,d);z==4&&cn(this),this.o&&!this.K&&(z==4?ju(this.j,this):(this.o=!1,Hs(this)))}else Cm(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,je(12)):(this.m=0,je(13)),cn(this),Sr(this)}}}catch{}finally{}};function hm(o){if(!_u(o))return o.g.la();const u=Ou(o.g);if(u==="")return"";let d="";const m=u.length,A=Bt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return cn(o),Sr(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<m;C++)o.h.h=!0,d+=o.h.i.decode(u[C],{stream:!(A&&C==m-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function _u(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function dm(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?So:(d=Number(u.substring(d,m)),isNaN(d)?pu:(m+=1,m+d>u.length?So:(u=u.slice(m,m+d),o.C=m+d,u)))}Mt.prototype.cancel=function(){this.K=!0,cn(this)};function Hs(o){o.T=Date.now()+o.H,gu(o,o.H)}function gu(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Ar(h(o.aa,o),u)}function bo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Mt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(lm(this.i,this.B),this.M!=2&&(Ir(),je(17)),cn(this),this.m=2,Sr(this)):gu(this,this.T-o)};function Sr(o){o.j.I==0||o.K||ju(o.j,o)}function cn(o){bo(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,su(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Vo(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||No(d.h,o))){if(!o.L&&No(d.h,o)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Zs(d),Xs(d);else break e;Mo(d),je(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ar(h(d.Va,d),6e3));Tu(d.h)<=1&&d.ta&&(d.ta=void 0)}else dn(d,11)}else if((o.L||d.g==o)&&Zs(d),!g(u))for(A=d.Ba.g.parse(u),u=0;u<A.length;u++){let se=A[u];const Ie=se[0];if(!(Ie<=d.K))if(d.K=Ie,se=se[1],d.I==2)if(se[0]=="c"){d.M=se[1],d.ba=se[2];const _t=se[3];_t!=null&&(d.ka=_t,d.j.info("VER="+d.ka));const fn=se[4];fn!=null&&(d.za=fn,d.j.info("SVER="+d.za));const qt=se[5];qt!=null&&typeof qt=="number"&&qt>0&&(m=1.5*qt,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const jt=o.g;if(jt){const ti=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ti){var C=m.h;C.g||ti.indexOf("spdy")==-1&&ti.indexOf("quic")==-1&&ti.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(xo(C,C.h),C.h=null))}if(m.G){const Uo=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(m.wa=Uo,oe(m.J,m.G,Uo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var D=o;if(m.na=Gu(m,m.L?m.ba:null,m.W),D.L){vu(m.h,D);var z=D,Te=m.O;Te&&(z.H=Te),z.D&&(bo(z),Hs(z)),m.g=D}else Bu(m);d.i.length>0&&Js(d)}else se[0]!="stop"&&se[0]!="close"||dn(d,7);else d.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?dn(d,7):Lo(d):se[0]!="noop"&&d.l&&d.l.qa(se),d.A=0)}}Ir(4)}catch{}}var fm=class{constructor(o,u){this.g=o,this.map=u}};function yu(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Eu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Tu(o){return o.h?1:o.g?o.g.size:0}function No(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function xo(o,u){o.g?o.g.add(u):o.h=u}function vu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}yu.prototype.cancel=function(){if(this.i=wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function wu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return S(o.i)}var Iu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pm(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const m=o[d].indexOf("=");let A,C=null;m>=0?(A=o[d].substring(0,m),C=o[d].substring(m+1)):A=o[d],u(A,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Ft(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Ft?(this.l=o.l,Pr(this,o.j),this.o=o.o,this.g=o.g,br(this,o.u),this.h=o.h,Do(this,bu(o.i)),this.m=o.m):o&&(u=String(o).match(Iu))?(this.l=!1,Pr(this,u[1]||"",!0),this.o=Vr(u[2]||""),this.g=Vr(u[3]||"",!0),br(this,u[4]),this.h=Vr(u[5]||"",!0),Do(this,u[6]||"",!0),this.m=Vr(u[7]||"")):(this.l=!1,this.i=new xr(null,this.l))}Ft.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Nr(u,Au,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Nr(u,Au,!0),"@"),o.push(Cr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Nr(d,d.charAt(0)=="/"?gm:_m,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Nr(d,Em)),o.join("")},Ft.prototype.resolve=function(o){const u=mt(this);let d=!!o.j;d?Pr(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var m=o.h;if(d)br(u,o.u);else if(d=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var A=u.h.lastIndexOf("/");A!=-1&&(m=u.h.slice(0,A+1)+m)}if(A=m,A==".."||A==".")m="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){m=A.lastIndexOf("/",0)==0,A=A.split("/");const C=[];for(let D=0;D<A.length;){const z=A[D++];z=="."?m&&D==A.length&&C.push(""):z==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),m&&D==A.length&&C.push("")):(C.push(z),m=!0)}m=C.join("/")}else m=A}return d?u.h=m:d=o.i.toString()!=="",d?Do(u,bu(o.i)):d=!!o.m,d&&(u.m=o.m),u};function mt(o){return new Ft(o)}function Pr(o,u,d){o.j=d?Vr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function br(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Do(o,u,d){u instanceof xr?(o.i=u,Tm(o.i,o.l)):(d||(u=Nr(u,ym)),o.i=new xr(u,o.l))}function oe(o,u,d){o.i.set(u,d)}function Ks(o){return oe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Vr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Nr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,mm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function mm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Au=/[#\/\?@]/g,_m=/[#\?:]/g,gm=/[#\?]/g,ym=/[#\?@]/g,Em=/#/g;function xr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function hn(o){o.g||(o.g=new Map,o.h=0,o.i&&pm(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=xr.prototype,n.add=function(o,u){hn(this),this.i=null,o=Fn(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Ru(o,u){hn(o),u=Fn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Cu(o,u){return hn(o),u=Fn(o,u),o.g.has(u)}n.forEach=function(o,u){hn(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(u,A,m,this)},this)},this)};function Su(o,u){hn(o);let d=[];if(typeof u=="string")Cu(o,u)&&(d=d.concat(o.g.get(Fn(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return hn(this),this.i=null,o=Fn(this,o),Cu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Su(this,o),o.length>0?String(o[0]):u):u};function Pu(o,u,d){Ru(o,u),d.length>0&&(o.i=null,o.g.set(Fn(o,u),S(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const A=Cr(d);d=Su(this,d);for(let C=0;C<d.length;C++){let D=A;d[C]!==""&&(D+="="+Cr(d[C])),o.push(D)}}return this.i=o.join("&")};function bu(o){const u=new xr;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Fn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Tm(o,u){u&&!o.j&&(hn(o),o.i=null,o.g.forEach(function(d,m){const A=m.toLowerCase();m!=A&&(Ru(this,m),Pu(this,A,d))},o)),o.j=u}function vm(o,u){const d=new Rr;if(a.Image){const m=new Image;m.onload=f(Ut,d,"TestLoadImage: loaded",!0,u,m),m.onerror=f(Ut,d,"TestLoadImage: error",!1,u,m),m.onabort=f(Ut,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=f(Ut,d,"TestLoadImage: timeout",!1,u,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function wm(o,u){const d=new Rr,m=new AbortController,A=setTimeout(()=>{m.abort(),Ut(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(C=>{clearTimeout(A),C.ok?Ut(d,"TestPingServer: ok",!0,u):Ut(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Ut(d,"TestPingServer: error",!1,u)})}function Ut(o,u,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Im(){this.g=new im}function ko(o){this.i=o.Sb||null,this.h=o.ab||!1}p(ko,iu),ko.prototype.g=function(){return new Qs(this.i,this.h)};function Qs(o,u){De.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Qs,De),n=Qs.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,kr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Dr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Vu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Vu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Dr(this):kr(this),this.readyState==3&&Vu(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Dr(this))},n.Na=function(o){this.g&&(this.response=o,Dr(this))},n.ga=function(){this.g&&Dr(this)};function Dr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,kr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function kr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Nu(o){let u="";return js(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Oo(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Nu(d),typeof o=="string"?d!=null&&Cr(d):oe(o,u,d))}function de(o){De.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(de,De);var Am=/^https?$/i,Rm=["POST","PUT"];n=de.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():du.g(),this.g.onreadystatechange=T(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){xu(this,C);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const C of m.keys())d.set(C,m.get(C));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Rm,u,void 0)>=0)||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,D]of d)this.g.setRequestHeader(C,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){xu(this,C)}};function xu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Du(o),Ys(o)}function Du(o){o.A||(o.A=!0,qe(o,"complete"),qe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,qe(this,"complete"),qe(this,"abort"),Ys(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ys(this,!0)),de.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ku(this):this.Xa())},n.Xa=function(){ku(this)};function ku(o){if(o.h&&typeof i<"u"){if(o.v&&Bt(o)==4)setTimeout(o.Ca.bind(o),0);else if(qe(o,"readystatechange"),Bt(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=C===0){let D=String(o.D).match(Iu)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),m=!Am.test(D?D.toLowerCase():"")}d=m}if(d)qe(o,"complete"),qe(o,"success");else{o.o=6;try{var A=Bt(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Du(o)}}finally{Ys(o)}}}}function Ys(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||qe(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Bt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),sm(u)}};function Ou(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Cm(o){const u={};o=(o.g&&Bt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(g(o[m]))continue;var d=cm(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[A]||[];u[A]=C,C.push(d)}Jp(u,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Or(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Lu(o){this.za=0,this.i=[],this.j=new Rr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Or("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Or("baseRetryDelayMs",5e3,o),this.Za=Or("retryDelaySeedMs",1e4,o),this.Ta=Or("forwardChannelMaxRetries",2,o),this.va=Or("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new yu(o&&o.concurrentRequestLimit),this.Ba=new Im,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Lu.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,m){je(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Gu(this,null,this.W),Js(this)};function Lo(o){if(Mu(o),o.I==3){var u=o.V++,d=mt(o.J);if(oe(d,"SID",o.M),oe(d,"RID",u),oe(d,"TYPE","terminate"),Lr(o,d),u=new Mt(o,o.j,u),u.M=2,u.A=Ks(mt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=zu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Hs(u)}Wu(o)}function Xs(o){o.g&&(Fo(o),o.g.cancel(),o.g=null)}function Mu(o){Xs(o),o.v&&(a.clearTimeout(o.v),o.v=null),Zs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Js(o){if(!Eu(o.h)&&!o.m){o.m=!0;var u=o.Ea;ut||_(),be||(ut(),be=!0),w.add(u,o),o.D=0}}function Sm(o,u){return Tu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Ar(h(o.Ea,o,u),$u(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Mt(this,this.j,o);let C=this.o;if(this.U&&(C?(C=Ql(C),Xl(C,this.U)):C=this.U),this.u!==null||this.R||(A.J=C,C=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Uu(this,A,u),d=mt(this.J),oe(d,"RID",o),oe(d,"CVER",22),this.G&&oe(d,"X-HTTP-Session-Id",this.G),Lr(this,d),C&&(this.R?u="headers="+Cr(Nu(C))+"&"+u:this.u&&Oo(d,this.u,C)),xo(this.h,A),this.Ra&&oe(d,"TYPE","init"),this.S?(oe(d,"$req",u),oe(d,"SID","null"),A.U=!0,Po(A,d,null)):Po(A,d,u),this.I=2}}else this.I==3&&(o?Fu(this,o):this.i.length==0||Eu(this.h)||Fu(this))};function Fu(o,u){var d;u?d=u.l:d=o.V++;const m=mt(o.J);oe(m,"SID",o.M),oe(m,"RID",d),oe(m,"AID",o.K),Lr(o,m),o.u&&o.o&&Oo(m,o.u,o.o),d=new Mt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Uu(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),xo(o.h,d),Po(d,m,u)}function Lr(o,u){o.H&&js(o.H,function(d,m){oe(u,m,d)}),o.l&&js({},function(d,m){oe(u,m,d)})}function Uu(o,u,d){d=Math.min(o.i.length,d);const m=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let z=-1;for(;;){const Te=["count="+d];z==-1?d>0?(z=A[0].g,Te.push("ofs="+z)):z=0:Te.push("ofs="+z);let se=!0;for(let Ie=0;Ie<d;Ie++){var C=A[Ie].g;const _t=A[Ie].map;if(C-=z,C<0)z=Math.max(0,A[Ie].g-100),se=!1;else try{C="req"+C+"_"||"";try{var D=_t instanceof Map?_t:Object.entries(_t);for(const[fn,qt]of D){let jt=qt;l(qt)&&(jt=Io(qt)),Te.push(C+fn+"="+encodeURIComponent(jt))}}catch(fn){throw Te.push(C+"type="+encodeURIComponent("_badmap")),fn}}catch{m&&m(_t)}}if(se){D=Te.join("&");break e}}D=void 0}return o=o.i.splice(0,d),u.G=o,D}function Bu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;ut||_(),be||(ut(),be=!0),w.add(u,o),o.A=0}}function Mo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Ar(h(o.Da,o),$u(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,qu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Ar(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,je(10),Xs(this),qu(this))};function Fo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function qu(o){o.g=new Mt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=mt(o.na);oe(u,"RID","rpc"),oe(u,"SID",o.M),oe(u,"AID",o.K),oe(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&oe(u,"TO",o.ia),oe(u,"TYPE","xmlhttp"),Lr(o,u),o.u&&o.o&&Oo(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Ks(mt(u)),d.u=null,d.R=!0,mu(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Xs(this),Mo(this),je(19))};function Zs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function ju(o,u){var d=null;if(o.g==u){Zs(o),Fo(o),o.g=null;var m=2}else if(No(o.h,u))d=u.G,vu(o.h,u),m=1;else return;if(o.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var A=o.D;m=Gs(),qe(m,new cu(m,d)),Js(o)}else Bu(o);else if(A=u.m,A==3||A==0&&u.X>0||!(m==1&&Sm(o,u)||m==2&&Mo(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),A){case 1:dn(o,5);break;case 4:dn(o,10);break;case 3:dn(o,6);break;default:dn(o,2)}}}function $u(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function dn(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),m=o.Ua;const A=!m;m=new Ft(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Pr(m,"https"),Ks(m),A?vm(m.toString(),d):wm(m.toString(),d)}else je(2);o.I=0,o.l&&o.l.pa(u),Wu(o),Mu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function Wu(o){if(o.I=0,o.ja=[],o.l){const u=wu(o.h);(u.length!=0||o.i.length!=0)&&(b(o.ja,u),b(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Gu(o,u,d){var m=d instanceof Ft?mt(d):new Ft(d);if(m.g!="")u&&(m.g=u+"."+m.g),br(m,m.u);else{var A=a.location;m=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;const C=new Ft(null);m&&Pr(C,m),u&&(C.g=u),A&&br(C,A),d&&(C.h=d),m=C}return d=o.G,u=o.wa,d&&u&&oe(m,d,u),oe(m,"VER",o.ka),Lr(o,m),m}function zu(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new de(new ko({ab:d})):new de(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hu(){}n=Hu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ei(){}ei.prototype.g=function(o,u){return new Je(o,u)};function Je(o,u){De.call(this),this.g=new Lu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!g(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!g(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Un(this)}p(Je,De),Je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){Lo(this.g)},Je.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Io(o),o=d);u.i.push(new fm(u.Ya++,o)),u.I==3&&Js(u)},Je.prototype.N=function(){this.g.l=null,delete this.j,Lo(this.g),delete this.g,Je.Z.N.call(this)};function Ku(o){Ao.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}p(Ku,Ao);function Qu(){Ro.call(this),this.status=1}p(Qu,Ro);function Un(o){this.g=o}p(Un,Hu),Un.prototype.ra=function(){qe(this.g,"a")},Un.prototype.qa=function(o){qe(this.g,new Ku(o))},Un.prototype.pa=function(o){qe(this.g,new Qu)},Un.prototype.oa=function(){qe(this.g,"b")},ei.prototype.createWebChannel=ei.prototype.g,Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,Zh=function(){return new ei},Jh=function(){return Gs()},Xh=un,ia={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zs.NO_ERROR=0,zs.TIMEOUT=8,zs.HTTP_ERROR=6,ci=zs,hu.COMPLETE="complete",Yh=hu,ou.EventType=wr,wr.OPEN="a",wr.CLOSE="b",wr.ERROR="c",wr.MESSAGE="d",De.prototype.listen=De.prototype.J,$r=ou,de.prototype.listenOnce=de.prototype.K,de.prototype.getLastError=de.prototype.Ha,de.prototype.getLastErrorCode=de.prototype.ya,de.prototype.getStatus=de.prototype.ca,de.prototype.getResponseJson=de.prototype.La,de.prototype.getResponseText=de.prototype.la,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Fa,Qh=de}).apply(typeof ni<"u"?ni:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let hr="12.17.0";function sg(n){hr=n}/**
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
 */const Rn=new Ua("@firebase/firestore");function qn(){return Rn.logLevel}function k(n,...e){if(Rn.logLevel<=Q.DEBUG){const t=e.map(Ba);Rn.debug(`Firestore (${hr}): ${n}`,...t)}}function kt(n,...e){if(Rn.logLevel<=Q.ERROR){const t=e.map(Ba);Rn.error(`Firestore (${hr}): ${n}`,...t)}}function pt(n,...e){if(Rn.logLevel<=Q.WARN){const t=e.map(Ba);Rn.warn(`Firestore (${hr}): ${n}`,...t)}}function Ba(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ed(n,r,t)}function ed(n,e,t){let r=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw kt(r),new Error(r)}function U(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ed(e,s,r)}function W(n,e){return n}/**
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
 */function ig(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class qa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=ig(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function oa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return qo(s)===qo(i)?K(s,i):qo(s)?1:-1}return K(n.length,e.length)}const og=55296,ag=57343;function qo(n){const e=n.charCodeAt(0);return e>=og&&e<=ag}function er(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */let fe=class aa{constructor(e,t){this.comparator=e,this.root=t||zt.EMPTY}insert(e,t){return new aa(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new aa(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ri(this.root,e,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ri(this.root,e,this.comparator,!0)}},ri=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},zt=class St{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??St.RED,this.left=s??St.EMPTY,this.right=i??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new St(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return St.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}};zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ic(this.data.getIterator())}getIteratorFrom(e){return new ic(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class ic{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends cr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */const tr="__name__";class gt{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return gt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof gt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=gt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return K(e.length,t.length)}static compareSegments(e,t){const r=gt.isNumericId(e),s=gt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?gt.extractNumericId(e).compare(gt.extractNumericId(t)):oa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gt.fromString(e.substring(4,e.length-2))}}class te extends gt{construct(e,t,r){return new te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new te(t)}static emptyPath(){return new te([])}}const lg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let nt=class jn extends gt{construct(e,t,r){return new jn(e,t,r)}static isValidIdentifier(e){return lg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),jn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tr}static keyField(){return new jn([tr])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new F(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new F(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new F(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new jn(t)}static emptyPath(){return new jn([])}};/**
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
 */class ht{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new ht([])}unionWith(e){let t=new ge(nt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function Ei(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ug(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function td(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(te.fromString(e))}static fromName(e){return new B(te.fromString(e).popFirst(5))}static empty(){return new B(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new te(e.slice()))}}/**
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
 */function nd(n,e,t){if(!t)throw new F(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function cg(n,e,t,r){if(e===!0&&r===!0)throw new F(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function oc(n){if(!B.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ac(n){if(B.isDocumentKey(n))throw new F(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Cs(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ja(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function En(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ja(n);throw new F(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function me(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ss(n,e){if(!Cs(n))throw new F(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new F(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const lc=-62135596800,uc=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*uc);return new ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lc)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uc}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ss(e,ue._jsonSchema))return new ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:me("string",ue._jsonSchemaVersion),seconds:me("number"),nanoseconds:me("number")};/**
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
 */class rd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rd("Invalid base64 string: "+i):i}}(e);return new ye(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const hg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(U(!!n,39018),typeof n=="string"){let e=0;const t=hg.exec(n);if(U(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
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
 */const sd="server_timestamp",id="__type__",od="__previous_value__",ad="__local_write_time__";function Wi(n){return(n?.mapValue?.fields||{})[id]?.stringValue===sd}function Ps(n){const e=n.mapValue.fields[od];return Wi(e)?Ps(e):e}function nr(n){const e=Xt(n.mapValue.fields[ad].timestampValue);return new ue(e.seconds,e.nanos)}/**
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
 */class dg{constructor(e,t,r,s,i,a,l,c,h,f,p,T,S){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p,this._customHeaders=T,this.grpcFlowControlWindow=S}}const Ti="(default)";class as{constructor(e,t){this.projectId=e,this.database=t||Ti}static empty(){return new as("","")}get isDefaultDatabase(){return this.database===Ti}isEqual(e){return e instanceof as&&e.projectId===this.projectId&&e.database===this.database}}function fg(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new F(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new as(n.options.projectId,e)}/**
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
 */const $a=-1;function Gi(n){return n==null}function ls(n){return n===0&&1/n==-1/0}function pg(n){return typeof n=="number"&&Number.isInteger(n)&&!ls(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function mg(n){return typeof n=="string"}/**
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
 */const ld="__type__",_g="__max__",si={mapValue:{}},ud="__vector__",us="value",rr={nullValue:"NULL_VALUE"},Qe={booleanValue:!0},Pe={booleanValue:!1};function Ee(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wi(n)?4:gg(n)?9007199254740991:vi(n)?10:11:q(28295,{value:n})}function at(n,e,t){if(n===e)return!0;const r=Ee(n);if(r!==Ee(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return nr(n).isEqual(nr(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=Xt(i.timestampValue),c=Xt(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,a){return Jt(i.bytesValue).isEqual(Jt(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,a){return he(i.geoPointValue.latitude)===he(a.geoPointValue.latitude)&&he(i.geoPointValue.longitude)===he(a.geoPointValue.longitude)}(n,e);case 2:return function(i,a,l){if("integerValue"in i&&"integerValue"in a)return he(i.integerValue)===he(a.integerValue);let c,h;if("doubleValue"in i&&"doubleValue"in a)c=he(i.doubleValue),h=he(a.doubleValue);else{if(!l?.t)return!1;c=he(i.integerValue??i.doubleValue),h=he(a.integerValue??a.doubleValue)}return c===h?!!l?.i||ls(c)===ls(h):!!(l===void 0||l.o)&&isNaN(c)&&isNaN(h)}(n,e,t);case 9:return er(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>at(s,i,t));case 10:case 11:return function(i,a,l){const c=i.mapValue.fields||{},h=a.mapValue.fields||{};if(Ei(c)!==Ei(h))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(h[f]===void 0||!at(c[f],h[f],l)))return!1;return!0}(n,e,t);default:return q(52216,{left:n})}}function cs(n,e){return(n.values||[]).find(t=>at(t,e))!==void 0}function Ye(n,e){if(n===e)return 0;const t=Ee(n),r=Ee(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=he(i.integerValue||i.doubleValue),c=he(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return cc(n.timestampValue,e.timestampValue);case 4:return cc(nr(n),nr(e));case 5:return oa(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Jt(i),c=Jt(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=K(l[h],c[h]);if(f!==0)return f}return K(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=K(he(i.latitude),he(a.latitude));return l!==0?l:K(he(i.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return hc(n.arrayValue,e.arrayValue);case 10:return function(i,a){const l=i.fields||{},c=a.fields||{},h=l[us]?.arrayValue,f=c[us]?.arrayValue,p=K(h?.values?.length||0,f?.values?.length||0);return p!==0?p:hc(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===si.mapValue&&a===si.mapValue)return 0;if(i===si.mapValue)return 1;if(a===si.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const T=oa(c[p],f[p]);if(T!==0)return T;const S=Ye(l[c[p]],h[f[p]]);if(S!==0)return S}return K(c.length,f.length)}(n.mapValue,e.mapValue);default:throw q(23264,{u:t})}}function cc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=Xt(n),r=Xt(e),s=K(t.seconds,r.seconds);return s!==0?s:K(t.nanos,r.nanos)}function hc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ye(t[s],r[s]);if(i!==void 0&&i!==0)return i}return K(t.length,r.length)}function sr(n){return la(n)}function la(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=la(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${la(t.fields[a])}`;return s+"}"}(n.mapValue):q(61005,{value:n})}function hi(n){switch(Ee(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ps(n);return e?16+hi(e):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+hi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Vn(r.fields,(i,a)=>{s+=i.length+hi(a)}),s}(n.mapValue);default:throw q(13486,{value:n})}}function yt(n){return!!n&&"integerValue"in n}function gn(n){return!!n&&"doubleValue"in n}function Zt(n){return yt(n)||gn(n)}function ir(n){return!!n&&"arrayValue"in n}function tt(n){return!!n&&"nullValue"in n}function Xe(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Tn(n){return!!n&&"mapValue"in n}function vi(n){return(n?.mapValue?.fields||{})[ld]?.stringValue===ud}function ua(n){return(n?.mapValue?.fields||{})[us]?.arrayValue}function Hr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Vn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Hr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hr(n.arrayValue.values[t]);return e}return{...n}}function gg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_g}/**
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
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Tn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hr(t)}setAll(e){let t=nt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Hr(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Tn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Tn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Vn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new et(Hr(this.value))}}function cd(n){const e=[];return Vn(n.fields,(t,r)=>{const s=new nt([t]);if(Tn(r)){const i=cd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new ht(e)}/**
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
 */function zi(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ls(e)?"-0":e}}function Wa(n){return{integerValue:""+n}}function Ga(n,e,t){return pg(e)?Wa(e):zi(n,e)}/**
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
 */class Hi{constructor(){this._=void 0}}function yg(n,e,t){return n instanceof wi?function(s,i){const a={fields:{[id]:{stringValue:sd},[ad]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wi(i)&&(i=Ps(i)),i&&(a.fields[od]=i),{mapValue:a}}(t,e):n instanceof hs?dd(n,e):n instanceof ds?fd(n,e):n instanceof fs?function(s,i){const a=hd(s,i),l=Ri(a)+Ri(s.l);return yt(a)&&yt(s.l)?Wa(l):zi(s.serializer,l)}(n,e):n instanceof Ii?function(s,i){return dc(s,i,Math.min)}(n,e):n instanceof Ai?function(s,i){return dc(s,i,Math.max)}(n,e):void 0}function Eg(n,e,t){return n instanceof hs?dd(n,e):n instanceof ds?fd(n,e):t}function hd(n,e){return n instanceof fs?Zt(e)?e:{integerValue:0}:null}class wi extends Hi{}class hs extends Hi{constructor(e){super(),this.elements=e}}function dd(n,e){const t=pd(e);for(const r of n.elements)t.some(s=>at(s,r))||t.push(r);return{arrayValue:{values:t}}}class ds extends Hi{constructor(e){super(),this.elements=e}}function fd(n,e){let t=pd(e);for(const r of n.elements)t=t.filter(s=>!at(s,r));return{arrayValue:{values:t}}}class za extends Hi{constructor(e,t){super(),this.serializer=e,this.l=t}}class fs extends za{}class Ii extends za{}class Ai extends za{}function dc(n,e,t){if(!Zt(e))return n.l;const r=t(Ri(e),Ri(n.l));return yt(e)&&yt(n.l)?Wa(r):zi(n.serializer,r)}function Ri(n){return he(n.integerValue||n.doubleValue)}function pd(n){return ir(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Tg(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof hs&&s instanceof hs||r instanceof ds&&s instanceof ds?er(r.elements,s.elements,at):r instanceof fs&&s instanceof fs||r instanceof Ii&&s instanceof Ii||r instanceof Ai&&s instanceof Ai?at(r.l,s.l):r instanceof wi&&s instanceof wi}(n.transform,e.transform)}class vg{constructor(e,t){this.version=e,this.transformResults=t}}class Tt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tt}static exists(e){return new Tt(void 0,e)}static updateTime(e){return new Tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ki{}function md(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ha(n.key,Tt.none()):new bs(n.key,n.data,Tt.none());{const t=n.data,r=et.empty();let s=new ge(nt.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Nn(n.key,r,new ht(s.toArray()),Tt.none())}}function wg(n,e,t){n instanceof bs?function(s,i,a){const l=s.value.clone(),c=pc(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Nn?function(s,i,a){if(!di(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=pc(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(_d(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Kr(n,e,t,r){return n instanceof bs?function(i,a,l,c){if(!di(i.precondition,a))return l;const h=i.value.clone(),f=mc(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Nn?function(i,a,l,c){if(!di(i.precondition,a))return l;const h=mc(i.fieldTransforms,c,a),f=a.data;return f.setAll(_d(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return di(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Ig(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=hd(r.transform,s||null);i!=null&&(t===null&&(t=et.empty()),t.set(r.field,i))}return t||null}function fc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&er(r,s,(i,a)=>Tg(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class bs extends Ki{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Nn extends Ki{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _d(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function pc(n,e,t){const r=new Map;U(n.length===t.length,32656,{h:t.length,T:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Eg(a,l,t[s]))}return r}function mc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,yg(i,a,e))}return r}class Ha extends Ki{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ag extends Ki{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ci{constructor(e,t){this.position=e,this.inclusive=t}}function _c(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=Ye(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class gd{}class ve extends gd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cg(e,t,r):t==="array-contains"?new bg(e,r):t==="in"?new Vg(e,r):t==="not-in"?new Ng(e,r):t==="array-contains-any"?new xg(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Sg(e,r):new Pg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ye(t,this.value)):t!==null&&Ee(this.value)===Ee(t)&&this.matchesComparison(Ye(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class At extends gd{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new At(e,t)}matches(e){return yd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function yd(n){return n.op==="and"}function Ed(n){return Rg(n)&&yd(n)}function Rg(n){for(const e of n.filters)if(e instanceof At)return!1;return!0}function ca(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+sr(n.value);if(Ed(n))return n.filters.map(e=>ca(e)).join(",");{const e=n.filters.map(t=>ca(t)).join(",");return`${n.op}(${e})`}}function Td(n,e){return n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.field.isEqual(s.field)&&at(r.value,s.value)}(n,e):n instanceof At?function(r,s){return s instanceof At&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Td(a,s.filters[l]),!0):!1}(n,e):void q(19439)}function vd(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${sr(t.value)}`}(n):n instanceof At?function(t){return t.op.toString()+" {"+t.getFilters().map(vd).join(" ,")+"}"}(n):"Filter"}class Cg extends ve{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class Sg extends ve{constructor(e,t){super(e,"in",t),this.keys=wd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pg extends ve{constructor(e,t){super(e,"not-in",t),this.keys=wd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function wd(n,e){return(e.arrayValue?.values||[]).map(t=>B.fromName(t.referenceValue))}class bg extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ir(t)&&cs(t.arrayValue,this.value)}}class Vg extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cs(this.value.arrayValue,t)}}class Ng extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!cs(this.value.arrayValue,t)}}class xg extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ir(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>cs(this.value.arrayValue,r))}}/**
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
 */class Si{constructor(e,t="asc"){this.field=e,this.dir=t}}function Dg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new ue(0,0))}static max(){return new $(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Le{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Le(e,0,$.min(),$.min(),$.min(),et.empty(),0)}static newFoundDocument(e,t,r,s){return new Le(e,1,t,$.min(),r,s,0)}static newNoDocument(e,t){return new Le(e,2,t,$.min(),$.min(),et.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,$.min(),$.min(),et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */const ps=-1;function kg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new ue(t+1,0):new ue(t,r));return new en(s,B.empty(),e)}function Og(n){return new en(n.readTime,n.key,ps)}class en{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new en($.min(),B.empty(),ps)}static max(){return new en($.max(),B.empty(),ps)}}function Lg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
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
 */class Mg{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.R=null}}function yc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Mg(n,e,t,r,s,i,a)}function Id(n){const e=W(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ca(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>sr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>sr(r)).join(",")),e.R=t}return e.R}function Ad(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Dg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Td(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gc(n.startAt,e.startAt)&&gc(n.endAt,e.endAt)}function _n(n){return!!n.isCorePipeline}function Rd(n){return!!n.path&&B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Qi{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function Fg(n,e,t,r,s,i,a,l){return new Qi(n,e,t,r,s,i,a,l)}function Ka(n){return new Qi(n)}function Ec(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ug(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Bg(n){return n.collectionGroup!==null}function Qr(n){const e=W(n);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ge(nt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new Si(i,r))}),t.has(nt.keyField().canonicalString())||e.I.push(new Si(nt.keyField(),r))}return e.I}function vt(n){const e=W(n);return e.A||(e.A=qg(e,Qr(n))),e.A}function qg(n,e){if(n.limitType==="F")return yc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Si(s.field,i)});const t=n.endAt?new Ci(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ci(n.startAt.position,n.startAt.inclusive):null;return yc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ha(n,e,t){return new Qi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function jg(n,e){return Ad(vt(n),vt(e))&&n.limitType===e.limitType}function Yr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>vd(s)).join(", ")}]`),Gi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>sr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>sr(s)).join(",")),`Target(${r})`}(vt(n))}; limitType=${n.limitType})`}function Yi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Qr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=_c(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Qr(r),s)||r.endAt&&!function(a,l,c){const h=_c(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Qr(r),s))}(n,e)}function Qa(n){return(e,t)=>{let r=!1;for(const s of Qr(n)){const i=$g(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $g(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Ye(c,h):q(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
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
 */class Wg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var pe,X;function Gg(n){switch(n){case N.OK:return q(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function Cd(n){if(n===void 0)return kt("GRPC error has no .code"),N.UNKNOWN;switch(n){case pe.OK:return N.OK;case pe.CANCELLED:return N.CANCELLED;case pe.UNKNOWN:return N.UNKNOWN;case pe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case pe.INTERNAL:return N.INTERNAL;case pe.UNAVAILABLE:return N.UNAVAILABLE;case pe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case pe.NOT_FOUND:return N.NOT_FOUND;case pe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case pe.ABORTED:return N.ABORTED;case pe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case pe.DATA_LOSS:return N.DATA_LOSS;default:return q(39323,{code:n})}}(X=pe||(pe={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class xn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return td(this.inner)}size(){return this.innerSize}}/**
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
 */const zg=new fe(B.comparator);function ze(){return zg}const Sd=new fe(B.comparator);function $n(...n){let e=Sd;for(const t of n)e=e.insert(t.key,t);return e}function Pd(n){let e=Sd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function $t(){return Xr()}function bd(){return Xr()}function Xr(){return new xn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Hg=new fe(B.comparator),Kg=new ge(B.comparator);function H(...n){let e=Kg;for(const t of n)e=e.add(t);return e}const Qg=new ge(K);function Yg(){return Qg}/**
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
 */function Xg(){return new TextEncoder}/**
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
 */const Jg=new Gt([4294967295,4294967295],0);function Tc(n){const e=Xg().encode(n),t=new Kh;return t.update(e),new Uint8Array(t.digest())}function vc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gt([t,r],0),new Gt([s,i],0)]}class Ya{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wr(`Invalid padding: ${t}`);if(r<0)throw new Wr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=Gt.fromNumber(this.m)}v(e,t,r){let s=e.add(t.multiply(Gt.fromNumber(r)));return s.compare(Jg)===1&&(s=new Gt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}S(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=Tc(e),[r,s]=vc(t);for(let i=0;i<this.hashCount;i++){const a=this.v(r,s,i);if(!this.S(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ya(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.m===0)return;const t=Tc(e),[r,s]=vc(t);for(let i=0;i<this.hashCount;i++){const a=this.v(r,s,i);this.D(a)}}D(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vs{constructor(e,t,r,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ns.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Vs($.min(),s,new fe(K),ze(),ze(),H())}}class Ns{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ns(r,t,H(),H(),H())}}/**
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
 */class fi{constructor(e,t,r,s){this.C=e,this.removedTargetIds=t,this.key=r,this.F=s}}class Vd{constructor(e,t){this.targetId=e,this.O=t}}class Nd{constructor(e,t,r=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class wc{constructor(e){this.targetId=e,this.M=0,this.N=Ic(),this.L=ye.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=H(),t=H(),r=H();return this.N.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}}),new Ns(this.L,this.B,e,t,r)}W(){this.U=!1,this.N=Ic()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,U(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const Mr="WatchChangeAggregator";class Zg{constructor(e){this.Z=e,this.X=new Map,this.ee=ze(),this.te=ii(),this.ne=ze(),this.re=ii(),this.ie=new fe(K)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,t=>{const r=this.X.get(t);if(r)switch(e.state){case 0:this.ue(t)&&r.$(e.resumeToken);break;case 1:r.J(),r.k||r.W(),r.$(e.resumeToken);break;case 2:r.J(),r.k||this.removeTarget(t);break;case 3:this.ue(t)&&(r.Y(),r.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),r.$(e.resumeToken));break;default:q(56790,{state:e.state})}else k(Mr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach((r,s)=>{this.ue(s)&&t(s)})}le(e){return _n(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:Rd(e)}Ee(e){const t=e.targetId,r=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(r===0){const a=new B(_n(i)?te.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,a,Le.newNoDocument(a,$.min()))}else U(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.Te(t);if(a!==r){const l=this.Pe(e),c=l?this.Re(l,e,a):1;if(c!==0){this.ce(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,h)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Jt(r).toUint8Array()}catch(c){if(c instanceof rd)return pt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ya(a,s,i)}catch(c){return pt(c instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.m===0?null:l}Re(e,t,r){return t.O.count===r-this.Ve(e,t.targetId)?0:2}Ve(e,t){const r=this.Z.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Z.Ae(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.oe(t,i,null),s++)}),s}de(e){const t=new Map;this.X.forEach((i,a)=>{const l=this.he(a);if(l){if(i.current&&this.le(l.target)){const c=_n(l.target)?te.fromString(l.target.getPipelineDocuments()[0]):l.target.path,h=new B(c);this.fe(h).has(a)||this.me(a,h)||this.oe(a,h,Le.newNoDocument(h,e))}i.q&&(t.set(a,i.K()),i.W())}});let r=H();this.re.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.he(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ee.forEach((i,a)=>a.setReadTime(e)),this.ne.forEach((i,a)=>a.setReadTime(e));const s=new Vs(e,t,this.ie,this.ee,this.ne,r);return this.ee=ze(),this.te=ii(),this.ne=ze(),this.re=ii(),this.ie=new fe(K),s}_e(e,t){const r=this.X.get(e);if(!r||!this.ue(e))return void k(Mr,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;r.G(t.key,s),_n(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,r){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),r&&(_n(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,r):this.ee=this.ee.insert(t,r))):k(Mr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const r=t.K();return this.Z.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}H(e){let t=this.X.get(e);t||(k(Mr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new wc(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new ge(K),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new ge(K),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||k(Mr,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new wc(e)),this.Z.getRemoteKeysForTarget(e).forEach(t=>{this.oe(e,t,null)})}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function ii(){return new fe(B.comparator)}function Ic(){return new fe(B.comparator)}const ey={asc:"ASCENDING",desc:"DESCENDING"},ty={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ny={and:"AND",or:"OR"};class ry{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function da(n,e){return n.useProto3Json||Gi(e)?e:{value:e}}function Pi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xa(n){const e=Xt(n);return new ue(e.seconds,e.nanos)}function xd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function pi(n,e){return Pi(n,e.toTimestamp())}function wt(n){return U(!!n,49232),$.fromTimestamp(Xa(n))}function Ja(n,e){return fa(n,e).canonicalString()}function fa(n,e){const t=function(s){return new te(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Dd(n){const e=te.fromString(n);return U(Fd(e),10190,{key:e.toString()}),e}function bi(n,e){return Ja(n.databaseId,e.path)}function jo(n,e){const t=Dd(e);if(t.get(1)!==n.databaseId.projectId)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Od(t))}function kd(n,e){return Ja(n.databaseId,e)}function sy(n){const e=Dd(n);return e.length===4?te.emptyPath():Od(e)}function pa(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Od(n){return U(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ac(n,e,t){return{name:bi(n,e),fields:t.value.mapValue.fields}}function iy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(U(f===void 0||typeof f=="string",58123),ye.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ye.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?N.UNKNOWN:Cd(h.code);return new F(f,h.message||"")}(a);t=new Nd(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=jo(n,r.document.name),i=wt(r.document.updateTime),a=r.document.createTime?wt(r.document.createTime):$.min(),l=new et({mapValue:{fields:r.document.fields}}),c=Le.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new fi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=jo(n,r.document),i=r.readTime?wt(r.readTime):$.min(),a=Le.newNoDocument(s,i),l=r.removedTargetIds||[];t=new fi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=jo(n,r.document),i=r.removedTargetIds||[];t=new fi([],i,s,null)}else{if(!("filter"in e))return q(11601,{ye:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Wg(s,i),l=r.targetId;t=new Vd(l,a)}}return t}function oy(n,e){let t;if(e instanceof bs)t={update:Ac(n,e.key,e.value)};else if(e instanceof Ha)t={delete:bi(n,e.key)};else if(e instanceof Nn)t={update:Ac(n,e.key,e.data),updateMask:_y(e.fieldMask)};else{if(!(e instanceof Ag))return q(16599,{we:e.type});t={verify:bi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof wi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof hs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ds)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fs)return{fieldPath:a.field.canonicalString(),increment:l.l};if(l instanceof Ii)return{fieldPath:a.field.canonicalString(),minimum:l.l};if(l instanceof Ai)return{fieldPath:a.field.canonicalString(),maximum:l.l};throw q(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pi(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)}(n,e.precondition)),t}function ay(n,e){return n&&n.length>0?(U(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?wt(s.updateTime):wt(i);return a.isEqual($.min())&&(a=wt(i)),new vg(a,s.transformResults||[])}(t,e))):[]}function ly(n,e){return{documents:[kd(n,e.path)]}}function uy(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=kd(n,s);const i=function(h){if(h.length!==0)return Md(At.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(T){return{field:Wn(T.field),direction:fy(T.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=da(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{be:t,parent:s}}function cy(n){let e=sy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){U(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const T=Ld(p);return T instanceof At&&Ed(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(T=>function(b){return new Si(Gn(b.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(T))}(t.orderBy));let l=null;t.limit&&(l=function(p){let T;return T=typeof p=="object"?p.value:p,Gi(T)?null:T}(t.limit));let c=null;t.startAt&&(c=function(p){const T=!!p.before,S=p.values||[];return new Ci(S,T)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const T=!p.before,S=p.values||[];return new Ci(S,T)}(t.endAt)),Fg(e,s,a,i,l,"F",c,h)}function hy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dy(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function Ld(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Gn(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Gn(t.unaryFilter.field);return ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gn(t.unaryFilter.field);return ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Gn(t.unaryFilter.field);return ve.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(t){return ve.create(Gn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return At.create(t.compositeFilter.filters.map(r=>Ld(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(n):q(30097,{filter:n})}function fy(n){return ey[n]}function py(n){return ty[n]}function my(n){return ny[n]}function Wn(n){return{fieldPath:n.canonicalString()}}function Gn(n){return nt.fromServerFormat(n.fieldPath)}function Md(n){return n instanceof ve?function(t){if(t.op==="=="){if(Xe(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NAN"}};if(tt(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xe(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NAN"}};if(tt(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(t.field),op:py(t.op),value:t.value}}}(n):n instanceof At?function(t){const r=t.getFilters().map(s=>Md(s));return r.length===1?r[0]:{compositeFilter:{op:my(t.op),filters:r}}}(n):q(54877,{filter:n})}function _y(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Fd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ud(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function ms(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function Bd(n){return{stringValue:n}}/**
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
 */function Xi(n){return new ry(n,!0)}/**
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
 */class it{constructor(e){this._byteString=e}static fromBase64String(e){try{return new it(ye.fromBase64String(e))}catch(t){throw new F(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new it(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:it._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ss(e,it._jsonSchema))return it.fromBase64String(e.bytes)}}it._jsonSchemaVersion="firestore/bytes/1.0",it._jsonSchema={type:me("string",it._jsonSchemaVersion),bytes:me("string")};/**
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
 */class Za{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function gy(){return new Za(tr)}/**
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
 */class qd{constructor(e){this._methodName=e}}/**
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
 */class It{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:It._jsonSchemaVersion}}static fromJSON(e){if(Ss(e,It._jsonSchema))return new It(e.latitude,e.longitude)}}It._jsonSchemaVersion="firestore/geoPoint/1.0",It._jsonSchema={type:me("string",It._jsonSchemaVersion),latitude:me("number"),longitude:me("number")};/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */class vn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class jd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Oe.UNAUTHENTICATED))}shutdown(){}}class Ey{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ty{constructor(e){this.Se=e,this.currentUser=Oe.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){U(this.xe===void 0,42304);let r=this.De;const s=c=>this.De!==r?(r=this.De,t(c)):Promise.resolve();let i=new vn;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new vn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.xe&&(this.auth.addAuthTokenListener(this.xe),a())};this.Se.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.Se.getImmediate({optional:!0});c?l(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vn)}},0),a()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.De!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string",31837,{Fe:r}),new jd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string",2055,{Oe:e}),new Oe(e)}}class vy{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class wy{constructor(e,t,r){this.Me=e,this.Ne=t,this.Le=r}getToken(){return Promise.resolve(new vy(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable(()=>t(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iy{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,Wh(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){U(this.xe===void 0,3512);const r=i=>{i.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.qe;return this.qe=i.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.$e)return Promise.resolve(new Rc(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(U(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Rc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function $d(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */class Ay{Ke(e){}shutdown(){}}/**
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
 */const Cc="ConnectivityMonitor";class Sc{constructor(){this.We=()=>this.Qe(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.We),window.addEventListener("offline",this.Ge)}Qe(){k(Cc,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){k(Cc,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let oi=null;function ma(){return oi===null?oi=function(){return 268435456+Math.round(2147483648*Math.random())}():oi++,"0x"+oi.toString(16)}/**
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
 */const $o="RestConnection",Ry={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Cy{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${r}/databases/${s}`,this.et=this.databaseId.database===Ti?`project_id=${r}`:`project_id=${r}&database_id=${s}`}tt(e,t,r,s,i){const a=ma(),l=this.nt(e,t.toUriEncodedString());k($o,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(c,s,i);const{host:h}=new URL(l),f=$h(h);return this.it(e,l,c,r,f).then(p=>(k($o,`Received RPC '${e}' ${a}: `,p),p),p=>{throw pt($o,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}st(e,t,r,s,i,a){return this.tt(e,t,r,s,i)}rt(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const r=Ry[e];let s=`${this.Ze}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Sy{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
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
 */const ke="WebChannelConnection",Fr=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Kn extends Cy{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!Kn.gt){const e=Jh();Fr(e,Xh.STAT_EVENT,t=>{t.stat===ia.PROXY?k(ke,"STAT_EVENT: detected buffering proxy"):t.stat===ia.NOPROXY&&k(ke,"STAT_EVENT: detected no buffering proxy")}),Kn.gt=!0}}it(e,t,r,s,i){const a=ma();return new Promise((l,c)=>{const h=new Qh;h.setWithCredentials(!0),h.listenOnce(Yh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ci.NO_ERROR:const p=h.getResponseJson();k(ke,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case ci.TIMEOUT:k(ke,`RPC '${e}' ${a} timed out`),c(new F(N.DEADLINE_EXCEEDED,"Request time out"));break;case ci.HTTP_ERROR:const T=h.getStatus();if(k(ke,`RPC '${e}' ${a} failed with status:`,T,"response text:",h.getResponseText()),T>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const b=S?.error;if(b&&b.status&&b.message){const M=function(G){const ee=G.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(ee)>=0?ee:N.UNKNOWN}(b.status);c(new F(M,b.message))}else c(new F(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new F(N.UNAVAILABLE,"Connection failed."));break;default:q(9055,{yt:e,streamId:a,wt:h.getLastErrorCode(),bt:h.getLastError()})}}finally{k(ke,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);k(ke,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}vt(e,t,r){const s=ma(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.rt(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");k(ke,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=a.createWebChannel(h,l);this.St(f);let p=!1,T=!1;const S=new Sy({_t:b=>{T?k(ke,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(p||(k(ke,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),k(ke,`RPC '${e}' stream ${s} sending:`,b),f.send(b))},ot:()=>f.close()});return Fr(f,$r.EventType.OPEN,()=>{T||(k(ke,`RPC '${e}' stream ${s} transport opened.`),S.Rt())}),Fr(f,$r.EventType.CLOSE,()=>{T||(T=!0,k(ke,`RPC '${e}' stream ${s} transport closed`),S.At(),this.Dt(f))}),Fr(f,$r.EventType.ERROR,b=>{T||(T=!0,pt(ke,`RPC '${e}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),S.At(new F(N.UNAVAILABLE,"The operation could not be completed")))}),Fr(f,$r.EventType.MESSAGE,b=>{if(!T){const M=b.data[0];U(!!M,16349);const L=M,G=L?.error||L[0]?.error;if(G){k(ke,`RPC '${e}' stream ${s} received error:`,G);const ee=G.status;let ie=function(be){const w=pe[be];if(w!==void 0)return Cd(w)}(ee),xe=G.message;ee==="NOT_FOUND"&&xe.includes("database")&&xe.includes("does not exist")&&xe.includes(this.databaseId.database)&&pt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ie===void 0&&(ie=N.INTERNAL,xe="Unknown error status: "+ee+" with message "+G.message),T=!0,S.At(new F(ie,xe)),f.close()}else k(ke,`RPC '${e}' stream ${s} received:`,M),S.Vt(M)}}),Kn.ft(),setTimeout(()=>{S.It()},0),S}terminate(){this.dt.forEach(e=>e.close()),this.dt=[]}St(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter(t=>t===e)}rt(e,t,r){super.rt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Zh()}}/**
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
 */function Py(n){return new Kn(n)}Kn.gt=!1;class Wd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=r,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),r=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,()=>(this.Lt=Date.now(),e())),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
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
 */const Pc="PersistentStream";class Gd{constructor(e,t,r,s,i,a,l,c){this.xt=e,this.$t=r,this.Kt=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Wt=0,this.Qt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new Wd(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Qt===null&&(this.Qt=this.xt.enqueueAfterDelay(this.$t,6e4,()=>this.en()))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Qt&&(this.Qt.cancel(),this.Qt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Wt++,e!==4?this.jt.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(kt(t.toString()),kt("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wt===t&&this.an(r,s)},r=>{e(()=>{const s=new F(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.un(s)})})}an(e,t){const r=this._n(this.Wt);this.stream=this.cn(e,t),this.stream.ut(()=>{r(()=>this.listener.ut())}),this.stream.lt(()=>{r(()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,()=>(this.Jt()&&(this.state=3),Promise.resolve())),this.listener.lt()))}),this.stream.ht(s=>{r(()=>this.un(s))}),this.stream.onMessage(s=>{r(()=>++this.zt==1?this.En(s):this.onNext(s))})}Yt(){this.state=5,this.jt.Ut(async()=>{this.state=0,this.start()})}un(e){return k(Pc,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget(()=>this.Wt===e?t():(k(Pc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class by extends Gd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}cn(e,t){return this.connection.vt("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=iy(this.serializer,e),r=function(i){if(!("targetChange"in i))return $.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?wt(a.readTime):$.min()}(e);return this.listener.hn(t,r)}Tn(e){const t={};t.database=pa(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=_n(c)?{pipelineQuery:dy(i,c)}:Rd(c)?{documents:ly(i,c)}:{query:uy(i,c).be},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=xd(i,a.resumeToken);const h=da(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo($.min())>0){l.readTime=Pi(i,a.snapshotVersion.toTimestamp());const h=da(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=hy(this.serializer,e);r&&(t.labels=r),this.tn(t)}Pn(e){const t={};t.database=pa(this.serializer),t.removeTarget=e,this.tn(t)}}class Vy extends Gd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.vt("Write",e,t)}En(e){return U(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,U(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){U(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=ay(e.writeResults,e.commitTime),r=wt(e.commitTime);return this.listener.Vn(r,t)}dn(){const e={};e.database=pa(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>oy(this.serializer,r))};this.tn(t)}}/**
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
 */class Ny{}class xy extends Ny{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,r,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.tt(e,fa(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(N.UNKNOWN,i.toString())})}st(e,t,r,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.st(e,fa(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(N.UNKNOWN,a.toString())})}terminate(){this.fn=!0,this.connection.terminate()}}function Dy(n,e,t,r){return new xy(n,e,t,r)}/**
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
 */const ky="ComponentProvider",bc=new Map;function Oy(n,e,t,r,s){return new dg(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,$d(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
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
 */const Vc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zd=41943040;class We{static withCacheSize(e){return new We(e,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}We.DEFAULT_COLLECTION_PERCENTILE=10,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,We.DEFAULT=new We(zd,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),We.DISABLED=new We(-1,0,0);/**
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
 */class Ji{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.pn(r),this.gn=r=>t.writeSequenceNumber(r))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}Ji.yn=-1;/**
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
 */const Ly="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class My{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function dr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Ly)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Fy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const Nc="LruGarbageCollector",Uy=1048576;function xc([n,e],[t,r]){const s=K(n,t);return s===0?K(e,r):s}class By{constructor(e){this.Jn=e,this.buffer=new ge(xc),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();xc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){k(Nc,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){fr(t)?k(Nc,"Ignoring IndexedDB error during garbage collection: ",t):await dr(t)}await this.tr(3e5)})}}class jy{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Ji.yn);const r=new By(t);return this.nr.forEachTarget(e,s=>r.Xn(s.sequenceNumber)).next(()=>this.nr.ir(e,s=>r.Xn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.nr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Vc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vc):this.sr(e,t))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),qn()<=Q.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function $y(n,e){return new jy(n,e)}/**
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
 */const Hd="firestore.googleapis.com",Dc=!0;class kc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hd,this.ssl=Dc}else this.host=e.host,this.ssl=e.ssl??Dc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=zd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Uy)throw new F(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(cg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$d(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new F(N.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),a=Object.keys(s);if(i.length!==a.length)return!1;for(const l of i)if(r[l]!==s[l])return!1;return!0}(this._customHeaders,e._customHeaders)}}let Zi=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yy;switch(r.type){case"firstParty":return new wy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=bc.get(t);r&&(k(ky,"Removing Datastore"),bc.delete(t),r.terminate())}(this),Promise.resolve()}};function Wy(n,e,t,r={}){n=En(n,Zi);const s=$h(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&t_(`https://${l}`),i.host!==Hd&&i.host!==l&&pt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!yi(c,a)&&(n._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Oe.MOCK_USER;else{h=Bm(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new F(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Oe(p)}n._authCredentials=new Ey(new jd(h,f))}}/**
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
 */class eo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new eo(this.firestore,e,this._query)}}class _e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}toJSON(){return{type:_e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ss(t,_e._jsonSchema))return new _e(e,r||null,new B(te.fromString(t.referencePath)))}}_e._jsonSchemaVersion="firestore/documentReference/1.0",_e._jsonSchema={type:me("string",_e._jsonSchemaVersion),referencePath:me("string")};class Ht extends eo{constructor(e,t,r){super(e,t,Ka(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new B(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function KA(n,e,...t){if(n=An(n),nd("collection","path",e),n instanceof Zi){const r=te.fromString(e,...t);return ac(r),new Ht(n,null,r)}{if(!(n instanceof _e||n instanceof Ht))throw new F(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return ac(r),new Ht(n.firestore,null,r)}}function QA(n,e,...t){if(n=An(n),arguments.length===1&&(e=qa.newId()),nd("doc","path",e),n instanceof Zi){const r=te.fromString(e,...t);return oc(r),new _e(n,null,new B(r))}{if(!(n instanceof _e||n instanceof Ht))throw new F(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return oc(r),new _e(n.firestore,n instanceof Ht?n.converter:null,new B(r))}}/**
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
 */class Ke{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ke._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ss(e,Ke._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ke(e.vectorValues);throw new F(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ke._jsonSchemaVersion="firestore/vectorValue/1.0",Ke._jsonSchema={type:me("string",Ke._jsonSchemaVersion),vectorValues:me("object")};/**
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
 */const Gy=/^__.*__$/;class zy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Nn(e,this.data,this.fieldMask,t,this.fieldTransforms):new bs(e,this.data,t,this.fieldTransforms)}}function Kd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{dataSource:n})}}class el{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new el({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Vi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Kd(this.dataSource)&&Gy.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Hy{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Xi(e)}createContext(e,t,r,s=!1){return new el({dataSource:e,methodName:t,targetDoc:r,path:nt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ky(n){const e=n._freezeSettings(),t=Xi(n._databaseId);return new Hy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Qy(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Xd("Data must be an object, but it was:",a,r);const l=Qd(r,a);let c,h;if(i.merge)c=new ht(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const T=to(e,p,t);if(!a.contains(T))throw new F(N.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Jy(f,T)||f.push(T)}c=new ht(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new zy(new et(l),c,h)}function _s(n,e,t){if(Yd(n=An(n)))return Xd("Unsupported field value:",e,n),Qd(n,e);if(n instanceof qd)return function(s,i){if(!Kd(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const a=[];let l=0;for(const c of s){let h=_s(c,i.childContextForArray(l));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),l++}return{arrayValue:{values:a}}}(n,e)}return function(s,i,a){if((s=An(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Ga(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ue.fromDate(s);return{timestampValue:Pi(i.serializer,l)}}if(s instanceof ue){const l=new ue(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Pi(i.serializer,l)}}if(s instanceof It)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof it)return{bytesValue:xd(i.serializer,s._byteString)};if(s instanceof _e){const l=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ja(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Ke)return function(c,h){const f=c instanceof Ke?c.toArray():c;return{mapValue:{fields:{[ld]:{stringValue:ud},[us]:{arrayValue:{values:f.map(T=>{if(typeof T!="number")throw h.createError("VectorValues must only contain numeric values.");return zi(h.serializer,T)})}}}}}}(s,i);if(Ud(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${ja(s)}`)}(n,e)}function Qd(n,e){const t={};return td(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vn(n,(r,s)=>{const i=_s(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Yd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof It||n instanceof it||n instanceof _e||n instanceof qd||n instanceof Ke||Ud(n))}function Xd(n,e,t){if(!Yd(t)||!Cs(t)){const r=ja(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function to(n,e,t){if((e=An(e))instanceof Za)return e._internalPath;if(typeof e=="string")return Xy(n,e);throw Vi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Yy=new RegExp("[~\\*/\\[\\]]");function Xy(n,e,t){if(e.search(Yy)>=0)throw Vi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Za(...e.split("."))._internalPath}catch{throw Vi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new F(N.INVALID_ARGUMENT,l+n+c)}function Jy(n,e){return n.some(t=>t.isEqual(e))}function Zy(n){return typeof n._readUserData=="function"}/**
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
 */class Be{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=et.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let l;i.nestedOptions&&Cs(a)?l={mapValue:{fields:new Be(i.nestedOptions).getOptionsProto(t,a)}}:a&&(l=_s(a,t)??void 0),l&&r.set(nt.fromServerFormat(i.serverName),l)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(ug(r,(a,l)=>[nt.fromServerFormat(l),a!==void 0?_s(a,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function eE(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Cs(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function tE(n){return new Ke(n)}/**
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
 */function x(n){let e;return n instanceof Dn?n:(e=Cs(n)?aE(n):n instanceof Array?lE(n):Jd(n,void 0),e)}function Wo(n){if(n instanceof Dn)return n;if(n instanceof Ke)return gs(n);if(Array.isArray(n))return gs(tE(n));throw new Error("Unsupported value: "+typeof n)}function tl(n){return mg(n)?sE(n):x(n)}class Dn{constructor(){this._protoValueType="ProtoValue"}add(e){return new P("add",[this,x(e)],"add")}asBoolean(){if(this instanceof tn)return this;if(this instanceof pr)return new ef(this);if(this instanceof xs)return new oE(this);if(this instanceof P)return new Zd(this);throw new F("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new P("subtract",[this,x(e)],"subtract")}multiply(e){return new P("multiply",[this,x(e)],"multiply")}divide(e){return new P("divide",[this,x(e)],"divide")}mod(e){return new P("mod",[this,x(e)],"mod")}equal(e){return new P("equal",[this,x(e)],"equal").asBoolean()}notEqual(e){return new P("not_equal",[this,x(e)],"notEqual").asBoolean()}lessThan(e){return new P("less_than",[this,x(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new P("less_than_or_equal",[this,x(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new P("greater_than",[this,x(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new P("greater_than_or_equal",[this,x(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>x(s));return new P("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new P("array_contains",[this,x(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Gr(e.map(x),"arrayContainsAll"):e;return new P("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Gr(e.map(x),"arrayContainsAny"):e;return new P("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new P("array_reverse",[this])}arrayLength(){return new P("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Gr(e.map(x),"equalAny"):e;return new P("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Gr(e.map(x),"notEqualAny"):e;return new P("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new P("exists",[this],"exists").asBoolean()}charLength(){return new P("char_length",[this],"charLength")}like(e){return new P("like",[this,x(e)],"like").asBoolean()}regexContains(e){return new P("regex_contains",[this,x(e)],"regexContains").asBoolean()}regexFind(e){return new P("regex_find",[this,x(e)],"regexFind")}regexFindAll(e){return new P("regex_find_all",[this,x(e)],"regexFindAll")}regexMatch(e){return new P("regex_match",[this,x(e)],"regexMatch").asBoolean()}stringContains(e){return new P("string_contains",[this,x(e)],"stringContains").asBoolean()}startsWith(e){return new P("starts_with",[this,x(e)],"startsWith").asBoolean()}endsWith(e){return new P("ends_with",[this,x(e)],"endsWith").asBoolean()}toLower(){return new P("to_lower",[this],"toLower")}toUpper(){return new P("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(x(e)),new P("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(x(e)),new P("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(x(e)),new P("rtrim",t,"rtrim")}type(){return new P("type",[this])}isType(e){return new P("is_type",[this,gs(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(x);return new P("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new P("string_index_of",[this,x(e)],"stringIndexOf")}stringRepeat(e){return new P("string_repeat",[this,x(e)],"stringRepeat")}stringReplaceAll(e,t){return new P("string_replace_all",[this,x(e),x(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new P("string_replace_one",[this,x(e),x(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(x);return new P("concat",[this,...r],"concat")}reverse(){return new P("reverse",[this],"reverse")}arrayFilter(e,t){return new P("array_filter",[this,x(e),t],"arrayFilter")}arrayTransform(e,t){return new P("array_transform",[this,x(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new P("array_transform",[this,x(e),x(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,x(e)];return t!==void 0&&r.push(x(t)),new P("array_slice",r,"arraySlice")}arrayFirst(){return new P("array_first",[this],"arrayFirst")}arrayFirstN(e){return new P("array_first_n",[this,x(e)],"arrayFirstN")}arrayLast(){return new P("array_last",[this],"arrayLast")}arrayLastN(e){return new P("array_last_n",[this,x(e)],"arrayLastN")}arrayMaximum(){return new P("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new P("maximum_n",[this,x(e)],"arrayMaximumN")}arrayMinimum(){return new P("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new P("minimum_n",[this,x(e)],"arrayMinimumN")}arrayIndexOf(e){return new P("array_index_of",[this,x(e),x("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new P("array_index_of",[this,x(e),x("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new P("array_index_of_all",[this,x(e)],"arrayIndexOfAll")}byteLength(){return new P("byte_length",[this],"byteLength")}ceil(){return new P("ceil",[this])}floor(){return new P("floor",[this])}abs(){return new P("abs",[this])}exp(){return new P("exp",[this])}mapGet(e){return new P("map_get",[this,gs(e)],"mapGet")}mapSet(e,t,...r){const s=[this,x(e),x(t),...r.map(x)];return new P("map_set",s,"mapSet")}mapKeys(){return new P("map_keys",[this],"mapKeys")}mapValues(){return new P("map_values",[this],"mapValues")}mapEntries(){return new P("map_entries",[this],"mapEntries")}getField(e){return new P("get_field",[this,x(e)],"get_field")}count(){return Ze._create("count",[this],"count")}sum(){return Ze._create("sum",[this],"sum")}average(){return Ze._create("average",[this],"average")}minimum(){return Ze._create("minimum",[this],"minimum")}maximum(){return Ze._create("maximum",[this],"maximum")}first(){return Ze._create("first",[this],"first")}last(){return Ze._create("last",[this],"last")}arrayAgg(){return Ze._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Ze._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Ze._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new P("maximum",[this,...r.map(x)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new P("minimum",[this,...r.map(x)],"minimum")}vectorLength(){return new P("vector_length",[this],"vectorLength")}cosineDistance(e){return new P("cosine_distance",[this,Wo(e)],"cosineDistance")}dotProduct(e){return new P("dot_product",[this,Wo(e)],"dotProduct")}euclideanDistance(e){return new P("euclidean_distance",[this,Wo(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new P("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new P("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new P("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new P("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new P("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new P("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new P("timestamp_add",[this,x(e),x(t)],"timestampAdd")}timestampSubtract(e,t){return new P("timestamp_subtract",[this,x(e),x(t)],"timestampSubtract")}timestampDiff(e,t){return new P("timestamp_diff",[this,tl(e),x(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,x(e)];return t&&r.push(x(t)),new P("timestamp_extract",r,"timestampExtract")}documentId(){return new P("document_id",[this],"documentId")}parent(){return new P("parent",[this],"parent")}substring(e,t){const r=x(e);return new P("substring",t===void 0?[this,r]:[this,r,x(t)],"substring")}arrayGet(e){return new P("array_get",[this,x(e)],"arrayGet")}isError(){return new P("is_error",[this],"isError").asBoolean()}ifError(e){const t=new P("if_error",[this,x(e)],"ifError");return e instanceof tn?t.asBoolean():t}isAbsent(){return new P("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new P("map_remove",[this,x(e)],"mapRemove")}mapMerge(e,...t){const r=x(e),s=t.map(x);return new P("map_merge",[this,r,...s],"mapMerge")}pow(e){return new P("pow",[this,x(e)])}trunc(e){return e===void 0?new P("trunc",[this]):new P("trunc",[this,x(e)],"trunc")}round(e){return e===void 0?new P("round",[this]):new P("round",[this,x(e)],"round")}collectionId(){return new P("collection_id",[this])}length(){return new P("length",[this])}ln(){return new P("ln",[this])}sqrt(){return new P("sqrt",[this])}stringReverse(){return new P("string_reverse",[this])}ifAbsent(e){return new P("if_absent",[this,x(e)],"ifAbsent")}ifNull(e){return new P("if_null",[this,x(e)],"ifNull")}coalesce(e,...t){return new P("coalesce",[this,x(e),...t.map(x)],"coalesce")}join(e){return new P("join",[this,x(e)],"join")}log10(){return new P("log10",[this])}arraySum(){return new P("sum",[this])}split(e){return new P("split",[this,x(e)])}timestampTruncate(e,t){const r=[this,x(e)];return t&&r.push(x(t)),new P("timestamp_trunc",r)}ascending(){return uE(this)}descending(){return cE(this)}as(e){return new rE(this,e,"as")}}class Ze{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new Ze(e,t);return s._methodName=r,s}as(e){return new nE(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class nE{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class rE{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Gr extends Dn{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map(t=>t._toProto(e))}}}_readUserData(e){this.ur.forEach(t=>t._readUserData(e))}}class xs extends Dn{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new P("geo_distance",[this,x(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function sE(n){return iE(n,"field")}function iE(n,e){return new xs(typeof n=="string"?tr===n?gy()._internalPath:to("field",n):n._internalPath,e)}class pr extends Dn{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new pr(e,void 0);return t._protoValue=e,t}_toProto(e){return U(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,eE(this._protoValue)||(this._protoValue=_s(this.value,e))}}function gs(n,e){return Jd(n,"constant")}function Jd(n,e){const t=new pr(n,e);return typeof n=="boolean"?new ef(t):t}class P extends Dn{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Be({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class tn extends Dn{get _methodName(){return this._expr._methodName}countIf(){return Ze._create("count_if",[this],"countIf")}not(){return new P("not",[this],"not").asBoolean()}conditional(e,t){return new P("conditional",[this,e,t],"conditional")}ifError(e){const t=x(e),r=new P("if_error",[this,t],"ifError");return t instanceof tn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Zd extends tn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class ef extends tn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class oE extends tn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function aE(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(gs(r)),t.push(x(s))}return new P("map",t,"map")}function lE(n){return function(t,r){return new P("array",t.map(s=>x(s)),r)}(n,"array")}function uE(n){return new tf(tl(n),"ascending","ascending")}function cE(n){return new tf(tl(n),"descending","descending")}class tf{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Bd(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class st{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class nf extends st{get _name(){return"add_fields"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ms(e,this.fields)]}}_readUserData(e){super._readUserData(e),nn(this.fields,e)}}class rf extends st{get _name(){return"aggregate"}get _optionsUtil(){return new Be({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ms(e,this.accumulators),ms(e,this.groups)]}}_readUserData(e){super._readUserData(e),nn(this.groups,e),nn(this.accumulators,e)}}class sf extends st{get _name(){return"distinct"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ms(e,this.groups)]}}_readUserData(e){super._readUserData(e),nn(this.groups,e)}}class no extends st{get _name(){return"collection"}get _optionsUtil(){return new Be({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class ro extends st{get _name(){return"collection_group"}get _optionsUtil(){return new Be({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class nl extends st{get _name(){return"database"}get _optionsUtil(){return new Be({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class rl extends st{get _name(){return"documents"}get _optionsUtil(){return new Be({})}constructor(e,t){if(super(t),!e||e.length===0)throw new F(N.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new F(N.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=r,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class sl extends st{get _name(){return"where"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),nn(this.condition,e)}}class ys extends st{get _name(){return"limit"}get _optionsUtil(){return new Be({})}constructor(e,t){U(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Ga(e,this.limit)]}}}class Oc extends st{get _name(){return"offset"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Ga(e,this.offset)]}}}class hE extends st{get _name(){return"select"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ms(e,this.selections)]}}_readUserData(e){super._readUserData(e),nn(this.selections,e)}}class il extends st{get _name(){return"sort"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),nn(this.orderings,e)}}class ol extends st{get _name(){return"replace_with"}get _optionsUtil(){return new Be({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Bd(ol.Pr)]}}_readUserData(e){super._readUserData(e),nn(this.map,e)}}ol.Pr="full_replace";function nn(n,e){return Zy(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class E{constructor(e,t){this.type=e,this.value=t}static dr(){return new E("ERROR",void 0)}static mr(){return new E("UNSET",void 0)}static pr(){return new E("NULL",rr)}static newValue(e){return tt(e)?new E("NULL",rr):function(r){return!!r&&"booleanValue"in r}(e)?new E("BOOLEAN",e):yt(e)?new E("INT",e):gn(e)?new E("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new E("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new E("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new E("BYTES",e):e.referenceValue?new E("REFERENCE",e):e.geoPointValue?new E("GEO_POINT",e):ir(e)?new E("ARRAY",e):vi(e)?new E("VECTOR",e):Tn(e)?new E("MAP",e):new E("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function Jr(n){if(!n.gr())return n.value}function of(n){return n instanceof tn?n._expr:n}function j(n){if((n=of(n))instanceof xs)return new dE(n);if(n instanceof pr)return new fE(n);if(n instanceof Gr)return new pE(n);if(n instanceof P){if(n.name==="add")return new gE(n);if(n.name==="subtract")return new yE(n);if(n.name==="multiply")return new EE(n);if(n.name==="divide")return new TE(n);if(n.name==="mod")return new vE(n);if(n.name==="and")return new wE(n);if(n.name==="equal")return new kE(n);if(n.name==="not_equal")return new OE(n);if(n.name==="less_than")return new LE(n);if(n.name==="less_than_or_equal")return new ME(n);if(n.name==="greater_than")return new FE(n);if(n.name==="greater_than_or_equal")return new UE(n);if(n.name==="array_concat")return new BE(n);if(n.name==="array_reverse")return new qE(n);if(n.name==="array_contains")return new jE(n);if(n.name==="array_contains_all")return new $E(n);if(n.name==="array_contains_any")return new WE(n);if(n.name==="array_length")return new GE(n);if(n.name==="array_element")return new zE(n);if(n.name==="equal_any")return new af(n);if(n.name==="not_equal_any")return new AE(n);if(n.name==="is_nan")return new RE(n);if(n.name==="is_not_nan")return new CE(n);if(n.name==="is_null")return new SE(n);if(n.name==="is_not_null")return new PE(n);if(n.name==="is_error")return new bE(n);if(n.name==="exists")return new VE(n);if(n.name==="not")return new so(n);if(n.name==="or")return new IE(n);if(n.name==="xor")return new al(n);if(n.name==="conditional")return new NE(n);if(n.name==="maximum")return new xE(n);if(n.name==="minimum")return new DE(n);if(n.name==="reverse")return new HE(n);if(n.name==="replace_first")return new KE(n);if(n.name==="replace_all")return new QE(n);if(n.name==="char_length")return new YE(n);if(n.name==="byte_length")return new XE(n);if(n.name==="like")return new JE(n);if(n.name==="regex_contains")return new ZE(n);if(n.name==="regex_match")return new eT(n);if(n.name==="string_contains")return new tT(n);if(n.name==="starts_with")return new nT(n);if(n.name==="ends_with")return new rT(n);if(n.name==="to_lower")return new sT(n);if(n.name==="to_upper")return new iT(n);if(n.name==="trim")return new oT(n);if(n.name==="string_concat")return new aT(n);if(n.name==="map_get")return new lT(n);if(n.name==="cosine_distance")return new uT(n);if(n.name==="dot_product")return new cT(n);if(n.name==="euclidean_distance")return new hT(n);if(n.name==="vector_length")return new dT(n);if(n.name==="unix_micros_to_timestamp")return new gT(n);if(n.name==="timestamp_to_unix_micros")return new TT(n);if(n.name==="unix_millis_to_timestamp")return new yT(n);if(n.name==="timestamp_to_unix_millis")return new vT(n);if(n.name==="unix_seconds_to_timestamp")return new ET(n);if(n.name==="timestamp_to_unix_seconds")return new wT(n);if(n.name==="timestamp_add")return new IT(n);if(n.name==="timestamp_subtract")return new AT(n)}throw new Error(`Unknown Expr : ${n}`)}class dE{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===tr)return E.newValue({referenceValue:bi(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return E.newValue({timestampValue:pi(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return E.newValue({timestampValue:pi(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Wi(r)?E.newValue(function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:pi(i.serializer,$.fromTimestamp(nr(a)))};if(i.serverTimestampBehavior==="previous"){const l=Ps(a);if(l)return l}return{nullValue:"NULL_VALUE"}}(e,r)):E.newValue(r):E.mr()}}class fE{constructor(e){this.expr=e}evaluate(e,t){return E.newValue(this.expr._getValue())}}class pE{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.ur.map(s=>j(s).evaluate(e,t));return r.some(s=>s.gr())?E.dr():E.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function Ne(n){return gn(n)?Number(n.doubleValue):Number(n.integerValue)}function Rt(n){return BigInt(n.integerValue)}const mE=BigInt("0x7fffffffffffffff"),_E=-BigInt("0x8000000000000000");class Ds{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length>=2,24778);const r=j(this.expr.params[0]).evaluate(e,t),s=j(this.expr.params[1]).evaluate(e,t);let i=this.wr(r,s);for(const a of this.expr.params.slice(2)){const l=j(a).evaluate(e,t);i=this.wr(i,l)}return i}wr(e,t){if(e.gr()||t.gr())return E.dr();if(e.yr()||t.yr())return E.pr();const r=e.value,s=t.value;if(!gn(r)&&!yt(r)||!gn(s)&&!yt(s))return E.dr();if(gn(r)||gn(s)){const i=this.br(r,s);return i?E.newValue(i):E.dr()}if(yt(r)&&yt(s)){const i=this.vr(r,s);return i===void 0?E.dr():typeof i=="number"?E.newValue({doubleValue:i}):i<_E||i>mE?E.dr():E.newValue({integerValue:`${i}`})}return E.dr()}}function Ot(n,e){return Ee(n)!==Ee(e)?"TYPE_MISMATCH":Xe(n)||Xe(e)?"NOT_EQ":tt(n)&&tt(e)?"EQ":tt(n)||tt(e)?"NULL":ir(n)&&ir(e)?function(r,s){if(r.values?.length!==s.values?.length)return"NOT_EQ";let i=!1;for(let a=0;a<(r.values?.length??0);a++){const l=r.values[a],c=s.values[a];switch(Ot(l,c)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:q(44609,{Sr:l,Dr:c})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):vi(n)&&vi(e)||Tn(n)&&Tn(e)?function(r,s){const i=r.fields||{},a=s.fields||{};if(Ei(i)!==Ei(a))return"NOT_EQ";let l=!1;for(const c in i)if(i.hasOwnProperty(c)){if(a[c]===void 0)return"NOT_EQ";switch(Ot(i[c],a[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":l=!0}}return l?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return at(r,s,{o:!1,t:!0,i:!0})}(n,e)?"EQ":"NOT_EQ"}class gE extends Ds{vr(e,t){return Rt(e)+Rt(t)}br(e,t){return{doubleValue:Ne(e)+Ne(t)}}}class yE extends Ds{constructor(e){super(e),this.expr=e}vr(e,t){return Rt(e)-Rt(t)}br(e,t){return{doubleValue:Ne(e)-Ne(t)}}}class EE extends Ds{constructor(e){super(e),this.expr=e}vr(e,t){return Rt(e)*Rt(t)}br(e,t){return{doubleValue:Ne(e)*Ne(t)}}}class TE extends Ds{constructor(e){super(e),this.expr=e}vr(e,t){const r=Rt(t);if(r!==BigInt(0))return Rt(e)/r}br(e,t){const r=Ne(t);return r===0?{doubleValue:ls(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ne(e)/r}}}class vE extends Ds{constructor(e){super(e),this.expr=e}vr(e,t){const r=Rt(t);if(r!==BigInt(0))return Rt(e)%r}br(e,t){const r=Ne(t);if(r!==0)return{doubleValue:Ne(e)%r}}}class wE{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=j(i).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!a.value?.booleanValue)return E.newValue(Pe);break;case"NULL":s=!0;break;default:r=!0}}return r?E.dr():s?E.pr():E.newValue(Qe)}}class so{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,9634);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return E.newValue({booleanValue:!r.value?.booleanValue});case"NULL":return E.pr();default:return E.dr()}}}class IE{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=j(i).evaluate(e,t);switch(a.type){case"BOOLEAN":if(a.value?.booleanValue)return E.newValue(Qe);break;case"NULL":s=!0;break;default:r=!0}}return r?E.dr():s?E.pr():E.newValue(Pe)}}class al{constructor(e){this.expr=e}evaluate(e,t){let r=!1,s=!1;for(const i of this.expr.params){const a=j(i).evaluate(e,t);switch(a.type){case"BOOLEAN":r=al.xor(r,!!a.value?.booleanValue);break;case"NULL":s=!0;break;default:return E.dr()}}return s?E.pr():E.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class af{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,55094);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return E.dr()}const i=j(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.dr()}if(r)return E.pr();for(const a of i.value?.arrayValue?.values??[])switch(tt(s.value)&&tt(a)?"EQ":Ot(s.value,a)){case"EQ":return E.newValue(Qe);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(44608,{value:s.value,candidate:a})}return r?E.pr():E.newValue(Pe)}}class AE{constructor(e){this.expr=e}evaluate(e,t){return new so(new P("not",[new P("equal_any",this.expr.params)])).evaluate(e,t)}}class RE{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,23322);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return E.newValue(Pe);case"DOUBLE":return E.newValue({booleanValue:isNaN(Ne(r.value))});case"NULL":return E.pr();default:return E.dr()}}}class CE{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,50406),new so(new P("not",[new P("is_nan",this.expr.params)])).evaluate(e,t)}}class SE{constructor(e){this.expr=e}evaluate(e,t){switch(U(this.expr.params.length===1,23123),j(this.expr.params[0]).evaluate(e,t).type){case"NULL":return E.newValue(Qe);case"UNSET":case"ERROR":return E.dr();default:return E.newValue(Pe)}}}class PE{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,23167),new so(new P("not",[new P("is_null",this.expr.params)])).evaluate(e,t)}}class bE{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===1,5228),j(this.expr.params[0]).evaluate(e,t).type==="ERROR"?E.newValue(Qe):E.newValue(Pe)}}class VE{constructor(e){this.expr=e}evaluate(e,t){switch(U(this.expr.params.length===1,6877),j(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return E.dr();case"UNSET":return E.newValue(Pe);default:return E.newValue(Qe)}}}class NE{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===3,11706);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return r.value?.booleanValue?j(this.expr.params[1]).evaluate(e,t):j(this.expr.params[2]).evaluate(e,t);case"NULL":return j(this.expr.params[2]).evaluate(e,t);default:return E.dr()}}}class xE{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>j(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Ye(i.value,s.value)>0?i:s}return s===void 0?E.pr():s}}class DE{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>j(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Ye(i.value,s.value)<0?i:s}return s===void 0?E.pr():s}}class mr{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return E.dr()}const s=j(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return E.dr()}return this.Cr(r,s)}}class kE extends mr{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return E.newValue(Qe);if(e.yr()||t.yr()||Xe(e.value)||Xe(t.value)||Ee(e.value)!==Ee(t.value))return E.newValue(Pe);switch(Ot(e.value,t.value)){case"EQ":return E.newValue(Qe);case"NOT_EQ":return E.newValue(Pe);case"NULL":return E.pr();default:q(44615,{left:e,right:t})}}}class OE extends mr{constructor(e){super(e),this.expr=e}Cr(e,t){switch(Ot(e.value,t.value)){case"EQ":return E.newValue(Pe);case"NOT_EQ":case"TYPE_MISMATCH":return E.newValue(Qe);case"NULL":return E.pr();default:q(44614,{left:e,right:t})}}}class LE extends mr{constructor(e){super(e),this.expr=e}Cr(e,t){return Ee(e.value)!==Ee(t.value)||Xe(e.value)||Xe(t.value)?E.newValue(Pe):E.newValue({booleanValue:Ye(e.value,t.value)<0})}}class ME extends mr{constructor(e){super(e),this.expr=e}Cr(e,t){return Ee(e.value)!==Ee(t.value)||Xe(e.value)||Xe(t.value)?E.newValue(Pe):Ot(e.value,t.value)==="EQ"?E.newValue(Qe):E.newValue({booleanValue:Ye(e.value,t.value)<0})}}class FE extends mr{constructor(e){super(e),this.expr=e}Cr(e,t){return Ee(e.value)!==Ee(t.value)||Xe(e.value)||Xe(t.value)?E.newValue(Pe):E.newValue({booleanValue:Ye(e.value,t.value)>0})}}class UE extends mr{constructor(e){super(e),this.expr=e}Cr(e,t){return Ee(e.value)!==Ee(t.value)||Xe(e.value)||Xe(t.value)?E.newValue(Pe):Ot(e.value,t.value)==="EQ"?E.newValue(Qe):E.newValue({booleanValue:Ye(e.value,t.value)>0})}}class BE{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class qE{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,216);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.pr();case"ARRAY":{const s=r.value.arrayValue?.values??[];return E.newValue({arrayValue:{values:[...s].reverse()}})}default:return E.dr()}}}class jE{constructor(e){this.expr=e}evaluate(e,t){return U(this.expr.params.length===2,52884),new af(new P("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class $E{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,1392);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.dr()}const i=j(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.dr()}if(r)return E.pr();const a=i.value?.arrayValue?.values??[],l=s.value?.arrayValue?.values??[];for(const c of a){let h=!1;r=!1;for(const f of l){switch(tt(c)&&tt(f)?"EQ":Ot(c,f)){case"EQ":h=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(44613,{value:f,search:c})}if(h)break}if(!h)return E.newValue(Pe)}return E.newValue(Qe)}}class WE{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,2680);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.dr()}const i=j(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return E.dr()}if(r)return E.pr();const a=i.value?.arrayValue?.values??[],l=s.value?.arrayValue?.values??[];for(const c of l)for(const h of a)switch(tt(c)&&tt(h)?"EQ":Ot(c,h)){case"EQ":return E.newValue(Qe);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:q(60403,{value:c,search:h})}return r?E.pr():E.newValue(Pe)}}class GE{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,38605);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.pr();case"ARRAY":return E.newValue({integerValue:`${r.value?.arrayValue?.values?.length??0}`});default:return E.dr()}}}class zE{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class HE{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,1508);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.pr();case"BYTES":{const s=r.value?.bytesValue;if(typeof s=="string"){const i=ye.fromBase64String(s).toUint8Array();return i.reverse(),E.newValue({bytesValue:ye.fromUint8Array(i).toBase64()})}return E.newValue({bytesValue:new Uint8Array(s).reverse()})}case"STRING":{const s=r.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(s),a=Array.from(i,l=>l.segment).reverse();return E.newValue({stringValue:a.join("")})}default:return E.dr()}}}class KE{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class QE{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class YE{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,19400);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return E.pr();case"STRING":{const s=function(a){let l=0;for(let c=0;c<a.length;c++){const h=a.codePointAt(c);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const f=a.codePointAt(c+1);f!==void 0&&f>=56320&&f<=57343?(l+=1,c++):l+=1}else l+=1;else l+=1;else{if(!(h<=1114111))return;l+=1,c++}}return l}(r.value.stringValue);return s===void 0?E.dr():E.newValue({integerValue:s})}default:return E.dr()}}}class XE{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,8486);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const s=r.value?.bytesValue;return typeof s=="string"?E.newValue({integerValue:ye.fromBase64String(s).toUint8Array().length}):E.newValue({integerValue:new Uint8Array(s).length})}case"STRING":{const s=function(a){let l=0;for(let c=0;c<a.length;c++){const h=a.codePointAt(c);if(h===void 0)return;if(h>=55296&&h<=57343){if(!(h<=56319))return;{const f=a.codePointAt(c+1);if(f===void 0||!(f>=56320&&f<=57343))return;l+=4,c++}}else if(h<=127)l+=1;else if(h<=2047)l+=2;else if(h<=65535)l+=3;else{if(!(h<=1114111))return;l+=4,c++}}return l}(r.value?.stringValue);return s===void 0?E.dr():E.newValue({integerValue:s})}case"NULL":return E.pr();default:return E.dr()}}}class _r{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return E.dr()}const i=j(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return E.dr()}return r?E.pr():this.Fr(s.value?.stringValue,i.value?.stringValue)}}class JE extends _r{Fr(e,t){try{const r=function(a){let l="";for(let c=0;c<a.length;c++){const h=a.charAt(c);switch(h){case"_":l+=".";break;case"%":l+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":l+="\\"+h;break;default:l+=h}}return"^"+l+"$"}(t),s=Oa.compile(r);return E.newValue({booleanValue:s.matches(e)})}catch(r){return pt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),E.dr()}}}class ZE extends _r{Fr(e,t){try{const r=Oa.compile(t);return E.newValue({booleanValue:r.test(e)})}catch{return pt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),E.dr()}}}class eT extends _r{Fr(e,t){try{return E.newValue({booleanValue:Oa.compile(t).matches(e)})}catch{return pt(`Invalid regex pattern found in regex_match: ${t}, returning error`),E.dr()}}}class tT extends _r{Fr(e,t){return E.newValue({booleanValue:e.includes(t)})}}class nT extends _r{Fr(e,t){return E.newValue({booleanValue:e.startsWith(t)})}}class rT extends _r{Fr(e,t){return E.newValue({booleanValue:e.endsWith(t)})}}class sT{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,29079);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return E.newValue({stringValue:r.value?.stringValue?.toLowerCase()});case"NULL":return E.pr();default:return E.dr()}}}class iT{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,60487);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return E.newValue({stringValue:r.value?.stringValue?.toUpperCase()});case"NULL":return E.pr();default:return E.dr()}}}class oT{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,28544);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return E.newValue({stringValue:r.value?.stringValue?.trim()});case"NULL":return E.pr();default:return E.dr()}}}class aT{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(a=>j(a).evaluate(e,t));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return E.dr()}return i?E.pr():E.newValue({stringValue:s})}}class lT{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,4483);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return E.mr();case"MAP":break;default:return E.dr()}const s=j(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return E.dr();const i=r.value?.mapValue?.fields?.[s.value?.stringValue];return i===void 0?E.mr():E.newValue(i)}}class ll{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return E.dr()}const i=j(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return E.dr()}if(r)return E.pr();const a=ua(s.value),l=ua(i.value);if(a===void 0||l===void 0||a.values?.length!==l.values?.length)return E.dr();const c=this.Or(a,l);return c===void 0||isNaN(c)?E.dr():E.newValue({doubleValue:c})}}class uT extends ll{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return;let i=0,a=0,l=0;for(let h=0;h<r.length;h++){if(!Zt(r[h])||!Zt(s[h]))return;const f=Ne(r[h]),p=Ne(s[h]);i+=f*p,a+=f*f,l+=p*p}const c=Math.sqrt(a)*Math.sqrt(l);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class cT extends ll{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Zt(r[a])||!Zt(s[a]))return;i+=Ne(r[a])*Ne(s[a])}return i}}class hT extends ll{Or(e,t){const r=e?.values??[],s=t?.values??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!Zt(r[a])||!Zt(s[a]))return;const l=Ne(r[a]),c=Ne(s[a]);i+=Math.pow(l-c,2)}return Math.sqrt(i)}}class dT{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,39044);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const s=ua(r.value);return E.newValue({integerValue:s?.values?.length??0})}case"NULL":return E.pr();default:return E.dr()}}}const Es=BigInt(-62135596800),Ts=BigInt(253402300799),Ni=BigInt(1e3),Kt=BigInt(1e6),fT=Es*Ni,pT=Ts*Ni+BigInt(999),mT=Es*Kt,_T=Ts*Kt+BigInt(999999);function ul(n){return n>=mT&&n<=_T}function lf(n){return n>=Es&&n<=Ts}function vs(n,e){const t=BigInt(n);return!(t<Es||t>Ts)&&!(e<0||e>=1e9)&&(t!==Es||e===0)&&!(t===Ts&&e>999999999)}function uf(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function cl(n){return BigInt(n.seconds)*Kt+BigInt(Math.trunc(n.nanoseconds/1e3))}class hl{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return E.pr();default:return E.dr()}}}class gT extends hl{toTimestamp(e){if(!ul(e))return E.dr();let t=Number(e/Kt),r=Number(e%Kt*BigInt(1e3));const s=uf(t,r);return t=s.seconds,r=s.nanos,vs(t,r)?E.newValue({timestampValue:{seconds:t,nanos:r}}):E.dr()}}class yT extends hl{toTimestamp(e){if(!function(a){return a>=fT&&a<=pT}(e))return E.dr();let t=Number(e/Ni),r=Number(e%Ni*BigInt(1e6));const s=uf(t,r);return t=s.seconds,r=s.nanos,vs(t,r)?E.newValue({timestampValue:{seconds:t,nanos:r}}):E.dr()}}class ET extends hl{toTimestamp(e){if(!lf(e))return E.dr();const t=Number(e);return E.newValue({timestampValue:{seconds:t,nanos:0}})}}class dl{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=j(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return E.pr();default:return E.dr()}const s=Xa(r.value.timestampValue);return vs(s.seconds,s.nanoseconds)?this.Mr(s):E.dr()}}class TT extends dl{Mr(e){const t=cl(e);return ul(t)?E.newValue({integerValue:`${t.toString()}`}):E.dr()}}class vT extends dl{Mr(e){const t=cl(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?E.newValue({integerValue:r.toString()}):E.newValue({integerValue:(r-BigInt(1)).toString()})}}class wT extends dl{Mr(e){const t=BigInt(e.seconds);return lf(t)?E.newValue({integerValue:t.toString()}):E.dr()}}class cf{constructor(e){this.expr=e}evaluate(e,t){U(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=j(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return E.dr()}const i=j(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=function(ee){switch(ee){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),a===void 0)return E.dr();break;case"NULL":r=!0;break;default:return E.dr()}const l=j(this.expr.params[2]).evaluate(e,t);switch(l.type){case"INT":break;case"NULL":r=!0;break;default:return E.dr()}if(r)return E.pr();const c=BigInt(l.value.integerValue);let h;try{switch(a){case"microsecond":h=c;break;case"millisecond":h=c*BigInt(1e3);break;case"second":h=c*BigInt(1e6);break;case"minute":h=c*BigInt(6e7);break;case"hour":h=c*BigInt(36e8);break;case"day":h=c*BigInt(864e8);break;default:return E.dr()}if(a!=="microsecond"&&c!==BigInt(0)&&h/c!==BigInt(this.Nr(a)))return E.dr()}catch(G){return pt(`Error during timestamp arithmetic: ${G}`),E.dr()}const f=Xa(s.value.timestampValue);if(!vs(f.seconds,f.nanoseconds))return E.dr();const p=cl(f),T=this.Lr(p,h);if(!ul(T))return E.dr();const S=Number(T/Kt),b=T%Kt,M=Number((b<0?b+Kt:b)*BigInt(1e3)),L=b<0?S-1:S;return vs(L,M)?E.newValue({timestampValue:{seconds:L,nanos:M}}):E.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class IT extends cf{Lr(e,t){return e+t}}class AT extends cf{Lr(e,t){return e-t}}// Copyright 2024 Google LLC* @license
class Ge{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return io(this)}getPipelineCollectionGroup(){return fl(this)}getPipelineCollectionId(){return RT(this)}getPipelineDocuments(){return _a(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==sf.name&&s._name!==rf.name||(r="keyless"),s._name===hE.name&&r==="exact"&&(r="augmented"),s._name===nf.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Qt(this)}}function Qt(n){const e=n.stages[0];return e instanceof no||e instanceof ro||e instanceof nl||e instanceof rl?e._name:"unknown"}function io(n){if(Qt(n)==="collection")return n.stages[0].Er}function fl(n){if(Qt(n)==="collection_group")return n.stages[0].collectionId}function RT(n){switch(Qt(n)){case"collection":return te.fromString(io(n)).lastSegment();case"collection_group":return fl(n);default:return}}function _a(n){if(Qt(n)==="documents")return n.stages[0].hr}function ws(n){if((n=of(n))instanceof xs)return`fld(${n.fieldName})`;if(n instanceof pr)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof _e?`ref(${t.path})`:t instanceof Ke?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof P)return`fn(${n.name},[${n.params.map(ws).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.ur.map(ws).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function CT(n){if(n instanceof nf)return`${n._name}(${ai(n.fields)})`;if(n instanceof rf){let e=`${n._name}(${ai(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${ai(n.groups)})`),e}if(n instanceof sf)return`${n._name}(${ai(n.groups)})`;if(n instanceof no)return`${n._name}(${n.Er})`;if(n instanceof ro)return`${n._name}(${n.collectionId})`;if(n instanceof nl)return`${n._name}()`;if(n instanceof rl)return`${n._name}(${n.hr.sort()})`;if(n instanceof sl)return`${n._name}(${ws(n.condition)})`;if(n instanceof ys)return`${n._name}(${n.limit})`;if(n instanceof il)return`${n._name}(${function(t){return t.map(r=>`${ws(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function ai(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${ws(t)}`).join(",")}`}function Nt(n){return n.stages.map(e=>CT(e)).join("|")}function hf(n,e){return Nt(n)===Nt(e)}function we(n){return n instanceof Ge}function Lc(n){return we(n)?Nt(n):Yr(n)}function df(n){return we(n)?Nt(n):function(t){return`${Id(vt(t))}|lt:${t.limitType}`}(n)}function oo(n,e){return n instanceof Ge&&e instanceof Ge?hf(n,e):!(n instanceof Ge&&!(e instanceof Ge)||!(n instanceof Ge)&&e instanceof Ge)&&jg(n,e)}function ff(n){return _n(n)?Nt(n):Id(n)}function pf(n,e){return n instanceof Ge&&e instanceof Ge?hf(n,e):!(n instanceof Ge&&!(e instanceof Ge)||!(n instanceof Ge)&&e instanceof Ge)&&Ad(n,e)}/**
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
 */class ST{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wg(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Kr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Kr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=md(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(t,r)=>fc(t,r))&&er(this.baseMutations,e.baseMutations,(t,r)=>fc(t,r))}}class pl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){U(e.mutations.length===r.length,58842,{Br:e.mutations.length,Ur:r.length});let s=function(){return Hg}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new pl(e,t,r,s)}}/**
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
 */const mf="";function PT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Mc(e)),e=bT(n.get(t),e);return Mc(e)}function bT(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case mf:t+="";break;default:t+=i}}return t}function Mc(n){return n+mf+""}/**
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
 */class VT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class bt{constructor(e,t,r,s,i=$.min(),a=$.min(),l=ye.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class NT{constructor(e){this.qr=e}}function xT(n){const e=cy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ha(e,e.limit,"L"):e}/**
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
 */class DT{constructor(){this.Yi=new kT}addToCollectionParentIndex(e,t){return this.Yi.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(en.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(en.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class kT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ge(te.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ge(te.comparator)).toArray()}}/**
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
 */class rn{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new rn(0)}static ws(){return new rn(-1)}}// Copyright 2024 Google LLC* @license
function _f(n,e){let t=e;for(const r of n.stages)t=LT({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},r,t);return t}function ao(n,e){return _f(n,[e]).length>0}function OT(n,e){return we(n)?ao(n,e):Yi(n,e)}function LT(n,e,t){if(e instanceof no)return function(s,i,a){return a.filter(l=>l.isFoundDocument()&&`/${l.key.getCollectionPath().canonicalString()}`===i.Er)}(0,e,t);if(e instanceof sl)return function(s,i,a){return a.filter(l=>{const c=Jr(j(i.condition).evaluate(s,l));return c!==void 0&&at(c,Qe)})}(n,e,t);if(e instanceof ro)return function(s,i,a){return a.filter(l=>l.isFoundDocument()&&l.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof nl)return function(s,i,a){return a.filter(l=>l.isFoundDocument())}(0,0,t);if(e instanceof rl)return function(s,i,a){return a.filter(l=>l.isFoundDocument()&&i.Tr.has(l.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof ys)return function(s,i,a){return a.slice(0,i.limit)}(0,e,t);if(e instanceof il)return function(s,i,a){const l=i.orderings.map(c=>({Os:j(c.expr),direction:c.direction}));return[...a].sort((c,h)=>{for(const{Os:f,direction:p}of l){const T=Jr(f.evaluate(s,c)),S=Jr(f.evaluate(s,h)),b=Ye(T??rr,S??rr);if(b!==0)return p==="ascending"?b:-b}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function ga(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof il)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=Jr(j(s.expr).evaluate({serializer:n.serializer},t)),a=Jr(j(s.expr).evaluate({serializer:n.serializer},r)),l=Ye(i||rr,a||rr);if(l!==0)return s.direction==="ascending"?l:-l}return 0}}function Go(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof ys)return{limit:t.limit}}}/**
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
 */class MT{constructor(){this.changes=new xn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class UT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Kr(r.mutation,s,ht.empty(),ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,t,r=H()){const s=$t();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=$n();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=$t();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,H()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=ze();const a=Xr(),l=function(){return Xr()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Nn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Kr(f.mutation,h,f.mutation.getFieldMask(),ue.now())):a.set(h.key,ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>l.set(h,new FT(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,t){const r=Xr();let s=new fe((a,l)=>a-l),i=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||ht.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||H()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=bd();f.forEach(T=>{if(!i.has(T)){const S=md(t.get(T),r.get(T));S!==null&&p.set(T,S),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return we(t)?this.getDocumentsMatchingPipeline(e,t,r,s):Ug(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve($t());let l=ps,c=i;return a.next(h=>V.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(T=>{c=c.insert(f,T)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,H())).next(f=>({batchId:l,changes:Pd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=$n();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=$n();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,c=>{const h=function(p,T){return new Qi(T,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,T)=>{a=a.insert(p,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>this.retrieveMatchingLocalDocuments(i,a,l=>Yi(t,l)))}getDocumentsMatchingPipeline(e,t,r,s){if(Qt(t)==="collection_group"){const i=fl(t);let a=$n();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,c=>{const h=function(p,T){const S=p.stages.map(b=>b instanceof ro?new no(T.canonicalString(),{}):b);return new Ge(p.serializer,S)}(t,c.child(i));return this.getDocumentsMatchingPipeline(e,h,r,s).next(f=>{f.forEach((p,T)=>{a=a.insert(p,T)})})}).next(()=>a))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(a=>{switch(i=a,Qt(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let l=H();for(const c of _a(t))l=l.add(B.fromPath(c));return this.remoteDocumentCache.getEntries(e,l);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new F("invalid-argument",`Invalid pipeline source to execute offline: ${Nt(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(i,a,l=>ao(t,l)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,a)=>{const l=a.getKey();t.get(l)===null&&(t=t.insert(l,Le.newInvalidDocument(l)))});let s=$n();return t.forEach((i,a)=>{const l=e.get(i);l!==void 0&&Kr(l.mutation,a,ht.empty(),ue.now()),r(a)&&(s=s.insert(i,a))}),s}getOverlaysForPipeline(e,t,r){switch(Qt(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,te.fromString(io(t)),r);case"collection_group":throw new F("invalid-argument",`Unexpected collection group pipeline: ${Nt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,_a(t).map(s=>B.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new F("invalid-argument",`Failed to get overlays for pipeline: ${Nt(t)}`)}}}/**
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
 */class BT{constructor(e){this.serializer=e,this.Ks=new Map,this.Ws=new Map}getBundleMetadata(e,t){return V.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,function(s){return{id:s.id,version:s.version,createTime:wt(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:xT(s.bundledQuery),readTime:wt(s.readTime)}}(t)),V.resolve()}}/**
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
 */class qT{constructor(){this.overlays=new fe(B.comparator),this.Qs=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=$t();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=$t();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),V.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Yr(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qs.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=$t(),i=t.length+1,a=new B(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new fe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=$t(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=$t(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return V.resolve(l)}Yr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qs.get(s.largestBatchId).delete(r.key);this.Qs.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new VT(t,r));let i=this.Qs.get(t);i===void 0&&(i=H(),this.Qs.set(t,i)),this.Qs.set(t,i.add(r.key))}}/**
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
 */class jT{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class ml{constructor(){this.Gs=new ge(Re.zs),this.js=new ge(Re.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const r=new Re(e,t);this.Gs=this.Gs.add(r),this.js=this.js.add(r)}Js(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ys(new Re(e,t))}Zs(e,t){e.forEach(r=>this.removeReference(r,t))}Xs(e){const t=new B(new te([])),r=new Re(t,e),s=new Re(t,e+1),i=[];return this.js.forEachInRange([r,s],a=>{this.Ys(a),i.push(a.key)}),i}e_(){this.Gs.forEach(e=>this.Ys(e))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new B(new te([])),r=new Re(t,e),s=new Re(t,e+1);let i=H();return this.js.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Re(e,0),r=this.Gs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return B.comparator(e.key,t.key)||K(e.n_,t.n_)}static Hs(e,t){return K(e.n_,t.n_)||B.comparator(e.key,t.key)}}/**
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
 */class $T{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Qr=1,this.r_=new ge(Re.zs)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Qr;this.Qr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ST(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.r_=this.r_.add(new Re(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.s_(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?$a:this.Qr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Re(t,0),s=new Re(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([r,s],a=>{const l=this.i_(a.n_);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ge(K);return t.forEach(s=>{const i=new Re(s,0),a=new Re(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,a],l=>{r=r.add(l.n_)})}),V.resolve(this.__(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const a=new Re(new B(i),0);let l=new ge(K);return this.r_.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.n_)),!0)},a),V.resolve(this.__(l))}__(e){const t=[];return e.forEach(r=>{const s=this.i_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){U(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.r_;return V.forEach(t.mutations,s=>{const i=new Re(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.r_=r})}jr(e){}containsKey(e,t){const r=new Re(t,0),s=this.r_.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class WT{constructor(e){this.a_=e,this.docs=function(){return new fe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.a_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let r=ze();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Le.newInvalidDocument(s))}),V.resolve(r)}getAllEntries(e){let t=ze();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),V.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;we(t)?(i=te.fromString(io(t)),a=f=>ao(t,f)):(i=t.path,a=f=>Yi(t,f));let l=ze();const c=new B(i.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!i.isPrefixOf(f.path))break;f.path.length>i.length+1||Lg(Og(p),r)<=0||(s.has(p.key)||a(p))&&(l=l.insert(p.key,p.mutableCopy()))}return V.resolve(l)}getAllFromCollectionGroup(e,t,r,s){q(9500)}u_(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new GT(this)}getSize(e){return V.resolve(this.size)}}class GT extends MT{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
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
 */class zT{constructor(e){this.persistence=e,this.c_=new xn(t=>ff(t),pf),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.l_=0,this.E_=new ml,this.targetCount=0,this.h_=rn.ys()}forEachTarget(e,t){return this.c_.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.l_&&(this.l_=t),V.resolve()}Ss(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new rn(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.Ss(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Ss(t),V.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.c_.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.c_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.c_.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.E_.Js(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.E_.Zs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.E_.t_(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.E_.containsKey(t))}}/**
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
 */class gf{constructor(e,t){this.T_={},this.overlays={},this.P_=new Ji(0),this.R_=!1,this.R_=!0,this.I_=new jT,this.referenceDelegate=e(this),this.A_=new zT(this),this.indexManager=new DT,this.remoteDocumentCache=function(s){return new WT(s)}(r=>this.referenceDelegate.V_(r)),this.serializer=new NT(t),this.d_=new BT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.T_[e.toKey()];return r||(r=new $T(t,this.referenceDelegate),this.T_[e.toKey()]=r),r}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,r){k("MemoryPersistence","Starting transaction:",e);const s=new HT(this.P_.next());return this.referenceDelegate.f_(),r(s).next(i=>this.referenceDelegate.m_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}p_(e,t){return V.or(Object.values(this.T_).map(r=>()=>r.containsKey(e,t)))}}class HT extends My{constructor(e){super(),this.currentSequenceNumber=e}}class _l{constructor(e){this.persistence=e,this.g_=new ml,this.y_=null}static w_(e){return new _l(e)}get b_(){if(this.y_)return this.y_;throw q(60996)}addReference(e,t,r){return this.g_.addReference(r,t),this.b_.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.g_.removeReference(r,t),this.b_.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),V.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach(s=>this.b_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.b_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.b_,r=>{const s=B.fromPath(r);return this.v_(e,s).next(i=>{i||t.removeEntry(s,$.min())})}).next(()=>(this.y_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(r=>{r?this.b_.delete(t.toString()):this.b_.add(t.toString())})}V_(e){return 0}v_(e,t){return V.or([()=>V.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class xi{constructor(e,t){this.persistence=e,this.S_=new xn(r=>PT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=$y(this,t)}static w_(e,t){return new xi(e,t)}f_(){}m_(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}xs(e){let t=0;return this.ir(e,r=>{t++}).next(()=>t)}ir(e,t){return V.forEach(this.S_,(r,s)=>this.Fs(e,r,s).next(i=>i?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,a=>this.Fs(e,a,t).next(l=>{l||(r++,i.removeEntry(a,$.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.S_.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.S_.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.S_.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.S_.set(t,e.currentSequenceNumber),V.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hi(e.data.value)),t}Fs(e,t,r){return V.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.S_.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ao=r,this.Vo=s}static fo(e,t){let r=H(),s=H();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gl(e,t.fromCache,r,s)}}/**
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
 */function KT(n,e){return B.comparator(n.key,e.key)}/**
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
 */class QT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YT{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=function(){return Wm()?8:Fy(Uh())>0?6:4}()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.vo(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.So(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new QT;return this.Do(e,t,a).next(l=>{if(i.result=l,this.po)return this.xo(e,t,a,l.size)})}).next(()=>i.result)}xo(e,t,r,s){return we(t)?V.resolve():r.documentReadCount<this.yo?(qn()<=Q.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Yr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),V.resolve()):(qn()<=Q.DEBUG&&k("QueryEngine","Query:",Yr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.wo*s?(qn()<=Q.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Yr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vt(t))):V.resolve())}vo(e,t){if(we(t))return V.resolve(null);let r=t;if(Ec(r))return V.resolve(null);let s=vt(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=ha(r,null,"F"),s=vt(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(a=>{const l=H(...a);return this.bo.getDocuments(e,l).next(c=>this.indexManager.getMinOffset(e,s).next(h=>{const f=this.Co(r,c);return this.Fo(r,f,l,h.readTime)?this.vo(e,ha(r,null,"F")):this.Oo(e,f,r,h)}))})))}So(e,t,r,s){return(we(t)?function(a){for(const l of a.stages){if(l instanceof ys||l instanceof Oc)return!1;if(l instanceof sl){if(l.condition instanceof Zd&&l.condition._expr.name==="exists"&&l.condition._expr.params[0]instanceof xs&&l.condition._expr.params[0].fieldName===tr)continue;return!1}}return!0}(t):Ec(t))||s.isEqual($.min())?V.resolve(null):this.bo.getDocuments(e,r).next(i=>{const a=this.Co(t,i);return this.Fo(t,a,r,s)?V.resolve(null):(qn()<=Q.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lc(t)),this.Oo(e,a,t,kg(s,ps)).next(l=>l))})}Co(e,t){let r,s;return we(e)?(r=new ge(KT),s=i=>ao(e,i)):(r=new ge(Qa(e)),s=i=>Yi(e,i)),t.forEach((i,a)=>{s(a)&&(r=r.add(a))}),r}Fo(e,t,r,s){if(we(e))return function(l){return l.stages.some(c=>c instanceof ys||c instanceof Oc)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,r){return qn()<=Q.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Lc(t)),this.bo.getDocumentsMatchingQuery(e,t,en.min(),r)}Oo(e,t,r,s){return this.bo.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const yl="LocalStore",XT=3e8;class JT{constructor(e,t,r,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new fe(K),this.Lo=new xn(i=>ff(i),pf),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(r)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UT(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.No))}}function ZT(n,e,t,r){return new JT(n,e,t,r)}async function yf(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=H();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({qo:h,removedBatchIds:a,addedBatchIds:l}))})})}function ev(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,T=p.keys();let S=V.resolve();return T.forEach(b=>{S=S.next(()=>f.getEntry(c,b)).next(M=>{const L=h.docVersions.get(b);U(L!==null,48541),M.version.compareTo(L)<0&&(p.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),f.addEntry(M)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=H();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Ef(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.A_.getLastRemoteSnapshotVersion(t))}function tv(n,e){const t=W(n),r=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const l=[];e.targetChanges.forEach((f,p)=>{const T=s.get(p);if(!T)return;l.push(t.A_.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.A_.addMatchingKeys(i,f.addedDocuments,p)));let S=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(ye.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(p,S),function(M,L,G){return M.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=XT?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(T,S,f)&&l.push(t.A_.updateTargetData(i,S))});let c=ze(),h=H();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(nv(i,a,e.documentUpdates).next(f=>{c=f.$o,h=f.Ko})),!r.isEqual($.min())){const f=t.A_.getLastRemoteSnapshotVersion(i).next(p=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.No=s,i))}function nv(n,e,t){let r=H(),s=H();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=ze();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual($.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):k(yl,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{$o:a,Ko:s}})}function rv(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=$a),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sv(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.A_.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.A_.allocateTargetId(r).next(a=>(s=new bt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.A_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.No.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(r.targetId,r),t.Lo.set(e,r.targetId)),r})}async function ya(n,e,t){const r=W(n),s=r.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!fr(a))throw a;k(yl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.No=r.No.remove(e),r.Lo.delete(s.target)}function Fc(n,e,t){const r=W(n);let s=$.min(),i=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=W(c),T=p.Lo.get(f);return T!==void 0?V.resolve(p.No.get(T)):p.A_.getTargetData(h,f)}(r,a,we(e)?e:vt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.A_.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Mo.getDocumentsMatchingQuery(a,e,t?s:$.min(),t?i:H())).next(l=>(iv(r,l),{documents:l,Wo:i})))}function iv(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Bo.get(s)||$.min();r.readTime.compareTo(i)>0&&n.Bo.set(s,r.readTime)})}/**
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
 */class ov{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve())))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(kt(t),this.Zo=!1):k("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
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
 */const Ct="RemoteStore";class av{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new rn(1e3),this.ua=new rn(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke(a=>{r.enqueueAndForget(async()=>{kn(this)&&(k(Ct,"Restarting streams for network reachability change."),await async function(c){const h=W(c);h.ca.add(4),await ks(h),h.ha.set("Unknown"),h.ca.delete(4),await lo(h)}(this))})}),this.ha=new ov(r,s)}}async function lo(n){if(kn(n))for(const e of n.la)await e(!0)}async function ks(n){for(const e of n.la)await e(!1)}function Ea(n,e){return n._a.get(e)||void 0}function Tf(n,e){const t=W(n),r=Ea(t,e.targetId);if(r!==void 0&&t.sa.has(r))return;const s=function(l,c){const h=Ea(l,c);h!==void 0&&l.oa.delete(h);const f=function(T,S){return S%2!=0?T.ua.next():T.aa.next()}(l,c);return l._a.set(c,f),l.oa.set(f,c),f}(t,e.targetId);k(Ct,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new bt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),wl(t)?vl(t):gr(t).Jt()&&Tl(t,i)}function El(n,e){const t=W(n),r=gr(t),s=Ea(t,e);k(Ct,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),r.Jt()&&vf(t,s),t.sa.size===0&&(r.Jt()?r.Xt():kn(t)&&t.ha.set("Unknown"))}function Tl(n,e){if(n.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.oa.get(e.targetId);if(t===void 0)return void k(Ct,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}gr(n).Tn(e)}function vf(n,e){n.Ta.H(e),gr(n).Pn(e)}function vl(n){n.Ta=new Zg({getRemoteKeysForTarget:e=>{const t=n.oa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):H()},ge:e=>n.sa.get(e)||null,Ae:()=>n.datastore.serializer.databaseId}),gr(n).start(),n.ha.Xo()}function wl(n){return kn(n)&&!gr(n).Ht()&&n.sa.size>0}function kn(n){return W(n).ca.size===0}function wf(n){n.Ta=void 0}async function lv(n){n.ha.set("Online")}async function uv(n){n.sa.forEach((e,t)=>{Tl(n,e)})}async function cv(n,e){wf(n),wl(n)?(n.ha.na(e),vl(n)):n.ha.set("Unknown")}async function hv(n,e,t){if(n.ha.set("Online"),e instanceof Nd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds){if(s.sa.has(l)){const c=s.oa.get(l);c!==void 0&&(await s.remoteSyncer.rejectListen(c,a),s._a.delete(c),s.oa.delete(l)),s.sa.delete(l)}s.Ta.removeTarget(l)}}(n,e)}catch(r){k(Ct,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Di(n,r)}else if(e instanceof fi?n.Ta.se(e):e instanceof Vd?n.Ta.Ee(e):n.Ta.ae(e),!t.isEqual($.min()))try{const r=await Ef(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Ta.de(a);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.sa.get(f);p&&i.sa.set(f,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const p=i.sa.get(h);if(!p)return;i.sa.set(h,p.withResumeToken(ye.EMPTY_BYTE_STRING,p.snapshotVersion)),vf(i,h);const T=new bt(p.target,h,f,p.sequenceNumber);Tl(i,T)});const c=function(f,p){const T=new Map;p.targetChanges.forEach((b,M)=>{const L=f.oa.get(M);L!==void 0&&T.set(L,b)});let S=new fe(K);return p.targetMismatches.forEach((b,M)=>{const L=f.oa.get(b);L!==void 0&&(S=S.insert(L,M))}),new Vs(p.snapshotVersion,T,S,p.documentUpdates,p.augmentedDocumentUpdates,p.resolvedLimboDocuments)}(i,l);return i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){k(Ct,"Failed to raise snapshot:",r),await Di(n,r)}}async function Di(n,e,t){if(!fr(e))throw e;n.ca.add(1),await ks(n),n.ha.set("Offline"),t||(t=()=>Ef(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k(Ct,"Retrying IndexedDB access"),await t(),n.ca.delete(1),await lo(n)})}function If(n,e){return e().catch(t=>Di(n,t,e))}async function uo(n){const e=W(n),t=sn(e);let r=e.ia.length>0?e.ia[e.ia.length-1].batchId:$a;for(;dv(e);)try{const s=await rv(e.localStore,r);if(s===null){e.ia.length===0&&t.Xt();break}r=s.batchId,fv(e,s)}catch(s){await Di(e,s)}Af(e)&&Rf(e)}function dv(n){return kn(n)&&n.ia.length<10}function fv(n,e){n.ia.push(e);const t=sn(n);t.Jt()&&t.Rn&&t.In(e.mutations)}function Af(n){return kn(n)&&!sn(n).Ht()&&n.ia.length>0}function Rf(n){sn(n).start()}async function pv(n){sn(n).dn()}async function mv(n){const e=sn(n);for(const t of n.ia)e.In(t.mutations)}async function _v(n,e,t){const r=n.ia.shift(),s=pl.from(r,e,t);await If(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await uo(n)}async function gv(n,e){e&&sn(n).Rn&&await async function(r,s){if(function(a){return Gg(a)&&a!==N.ABORTED}(s.code)){const i=r.ia.shift();sn(r).Zt(),await If(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await uo(r)}}(n,e),Af(n)&&Rf(n)}async function Uc(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),k(Ct,"RemoteStore received new credentials");const r=kn(t);t.ca.add(3),await ks(t),r&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await lo(t)}async function yv(n,e){const t=W(n);e?(t.ca.delete(2),await lo(t)):e||(t.ca.add(2),await ks(t),t.ha.set("Unknown"))}function gr(n){return n.Pa||(n.Pa=function(t,r,s){const i=W(t);return i.mn(),new by(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:lv.bind(null,n),lt:uv.bind(null,n),ht:cv.bind(null,n),hn:hv.bind(null,n)}),n.la.push(async e=>{e?(n.Pa.Zt(),wl(n)?vl(n):n.ha.set("Unknown")):(await n.Pa.stop(),wf(n))})),n.Pa}function sn(n){return n.Ra||(n.Ra=function(t,r,s){const i=W(t);return i.mn(),new Vy(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ut:()=>Promise.resolve(),lt:pv.bind(null,n),ht:gv.bind(null,n),An:mv.bind(null,n),Vn:_v.bind(null,n)}),n.la.push(async e=>{e?(n.Ra.Zt(),await uo(n)):(await n.Ra.stop(),n.ia.length>0&&(k(Ct,`Stopping write stream with ${n.ia.length} pending writes`),n.ia=[]))})),n.Ra}/**
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
 */class Ev{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):kt("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Il{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Il(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Al(n,e){if(kt("AsyncQueue",`${e}: ${n}`),fr(n))return new F(N.UNAVAILABLE,`${e}: ${n}`);throw n}class Bc{constructor(){this.activeTargetIds=Yg()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tv{constructor(){this.du=new Bc,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,r){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new Bc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function zo(){return typeof document<"u"?document:null}/**
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
 */class wn{static emptySet(e){return new wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=$n(),this.sortedSet=new fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new wn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class qc{constructor(){this.mu=new fe(B.comparator)}track(e){const t=e.doc.key,r=this.mu.get(t);r?e.type!==0&&r.type===3?this.mu=this.mu.insert(t,e):e.type===3&&r.type!==1?this.mu=this.mu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.mu=this.mu.remove(t):e.type===1&&r.type===2?this.mu=this.mu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):q(63341,{ye:e,pu:r}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal((t,r)=>{e.push(r)}),e}}class or{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new or(e,t,wn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class vv{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some(e=>e.vu())}}class wv{constructor(){this.queries=jc(),this.onlineState="Unknown",this.Su=new Set}terminate(){(function(t,r){const s=W(t),i=s.queries;s.queries=jc(),i.forEach((a,l)=>{for(const c of l.wu)c.onError(r)})})(this,new F(N.ABORTED,"Firestore shutting down"))}}function jc(){return new xn(n=>df(n),oo)}async function Iv(n,e){const t=W(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.vu()&&(r=2):(i=new vv,r=e.vu()?0:1);try{switch(r){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Al(a,`Initialization of query '${we(e.query)?Nt(e.query):Yr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&Rl(t)}async function Av(n,e){const t=W(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wu.indexOf(e);a>=0&&(i.wu.splice(a,1),i.wu.length===0?s=e.vu()?0:1:!i.bu()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Rv(n,e){const t=W(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.wu)l.xu(s)&&(r=!0);a.yu=s}}r&&Rl(t)}function Cv(n,e,t){const r=W(n),s=r.queries.get(e);if(s)for(const i of s.wu)i.onError(t);r.queries.delete(e)}function Rl(n){n.Su.forEach(e=>{e.next()})}var Ta;(function(n){n.Default="default",n.Cache="cache"})(Ta||(Ta={}));class Sv{constructor(e,t,r){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=r||{}}xu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new or(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.vu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}vu(){return this.options.source!==Ta.Cache}}/**
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
 */class Cf{constructor(e){this.key=e}}class Sf{constructor(e){this.key=e}}class Pv{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=H(),this.mutatedKeys=H(),this.Hu=we(e)?ga(e):Qa(e),this.Ju=new wn(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const r=t?t.Xu:new qc,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const[c,h]=this.ec(this.query,s);e.inorderTraversal((p,T)=>{const S=s.get(p),b=OT(this.query,T)?T:null,M=!!S&&this.mutatedKeys.has(S.key),L=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let G=!1;S&&b?S.data.isEqual(b.data)?M!==L&&(r.track({type:3,doc:b}),G=!0):this.tc(S,b)||(r.track({type:2,doc:b}),G=!0,(c&&this.Hu(b,c)>0||h&&this.Hu(b,h)<0)&&(l=!0)):!S&&b?(r.track({type:0,doc:b}),G=!0):S&&!b&&(r.track({type:1,doc:S}),G=!0,(c||h)&&(l=!0)),G&&(b?(a=a.add(b),i=L?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))});const f=this.nc(this.query);if(f)if(we(this.query)){const p=[];a.forEach(b=>p.push(b));const T=_f(this.query,p);let S=new wn(ga(this.query));for(const b of T)S=S.add(b);a.forEach(b=>{S.has(b.key)||(i=i.delete(b.key),r.track({type:1,doc:b}))}),a=S}else{const p=this.rc(this.query);for(;a.size>f;){const T=p==="F"?a.last():a.first();a=a.delete(T.key),i=i.delete(T.key),r.track({type:1,doc:T})}}return{Ju:a,Xu:r,Fo:l,mutatedKeys:i}}nc(e){return we(e)?Go(e)?.limit:e.limit||void 0}rc(e){if(we(e)){const t=Go(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){if(we(e)){const r=Go(e)?.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const a=e.Xu.gu();a.sort((f,p)=>function(S,b){const M=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{ye:L})}};return M(S)-M(b)}(f.type,p.type)||this.Hu(f.doc,p.doc)),this.sc(r),s=s??!1;const l=t&&!s?this._c():[],c=this.ju.size===0&&this.current&&!s?1:0,h=c!==this.zu;return this.zu=c,a.length!==0||h?{snapshot:new or(this.query,e.Ju,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),oc:l}:{oc:l}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new qc,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach(t=>this.Gu=this.Gu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Gu=this.Gu.delete(t)),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=H(),this.Ju.forEach(r=>{this.ac(r.key)&&(this.ju=this.ju.add(r.key))});const t=[];return e.forEach(r=>{this.ju.has(r)||t.push(new Sf(r))}),this.ju.forEach(r=>{e.has(r)||t.push(new Cf(r))}),t}uc(e){this.Gu=e.Wo,this.ju=H();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return or.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const Cl="SyncEngine";class bv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Vv{constructor(e){this.key=e,this.lc=!1}}class Nv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ec={},this.hc=new xn(l=>df(l),oo),this.Tc=new Map,this.Pc=new Set,this.Rc=new fe(B.comparator),this.Ic=new Map,this.Ac=new ml,this.Vc={},this.dc=new Map,this.fc=rn.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function xv(n,e,t=!0){const r=Df(n);let s;const i=r.hc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await Pf(r,e,t,!0),s}async function Dv(n,e){const t=Df(n);await Pf(t,e,!0,!1)}async function Pf(n,e,t,r){const s=await sv(n.localStore,we(e)?e:vt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await kv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Tf(n.remoteStore,s),l}async function kv(n,e,t,r,s){n.gc=(p,T,S)=>async function(M,L,G,ee){let ie=L.view.Zu(G);ie.Fo&&(ie=await Fc(M.localStore,L.query,!1).then(({documents:w})=>L.view.Zu(w,ie)));const xe=ee&&ee.targetChanges.get(L.targetId),ut=ee&&ee.targetMismatches.get(L.targetId)!=null,be=L.view.applyChanges(ie,M.isPrimaryClient,xe,ut);return Wc(M,L.targetId,be.oc),be.snapshot}(n,p,T,S);const i=await Fc(n.localStore,e,!0),a=new Pv(e,i.Wo),l=a.Zu(i.documents),c=Ns.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Wc(n,t,h.oc);const f=new bv(e,t,a);return n.hc.set(e,f),n.Tc.has(t)?n.Tc.get(t).push(e):n.Tc.set(t,[e]),h.snapshot}async function Ov(n,e,t){const r=W(n),s=r.hc.get(e),i=r.Tc.get(s.targetId);if(i.length>1)return r.Tc.set(s.targetId,i.filter(a=>!oo(a,e))),void r.hc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ya(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&El(r.remoteStore,s.targetId),va(r,s.targetId)}).catch(dr)):(va(r,s.targetId),await ya(r.localStore,s.targetId,!0))}async function Lv(n,e){const t=W(n),r=t.hc.get(e),s=t.Tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),El(t.remoteStore,r.targetId))}async function Mv(n,e,t){const r=Wv(n);try{const s=await function(a,l){const c=W(a),h=ue.now(),f=l.reduce((S,b)=>S.add(b.key),H());let p,T;return c.persistence.runTransaction("Locally write mutations","readwrite",S=>{let b=ze(),M=H();return c.Uo.getEntries(S,f).next(L=>{b=L,b.forEach((G,ee)=>{ee.isValidDocument()||(M=M.add(G))})}).next(()=>c.localDocuments.getOverlayedDocuments(S,b)).next(L=>{p=L;const G=[];for(const ee of l){const ie=Ig(ee,p.get(ee.key).overlayedDocument);ie!=null&&G.push(new Nn(ee.key,ie,cd(ie.value.mapValue),Tt.exists(!0)))}return c.mutationQueue.addMutationBatch(S,h,G,l)}).next(L=>{T=L;const G=L.applyToLocalDocumentSet(p,M);return c.documentOverlayCache.saveOverlays(S,L.batchId,G)})}).then(()=>({batchId:T.batchId,changes:Pd(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Vc[a.currentUser.toKey()];h||(h=new fe(K)),h=h.insert(l,c),a.Vc[a.currentUser.toKey()]=h}(r,s.batchId,t),await Os(r,s.changes),await uo(r.remoteStore)}catch(s){const i=Al(s,"Failed to persist write");t.reject(i)}}async function bf(n,e){const t=W(n);try{const r=await tv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ic.get(i);a&&(U(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lc=!0:s.modifiedDocuments.size>0?U(a.lc,14607):s.removedDocuments.size>0&&(U(a.lc,42227),a.lc=!1))}),await Os(t,r,e)}catch(r){await dr(r)}}function $c(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.hc.forEach((i,a)=>{const l=a.view.Du(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=W(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const T of p.wu)T.Du(l)&&(h=!0)}),h&&Rl(c)}(r.eventManager,e),s.length&&r.Ec.hn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fv(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ic.get(e),i=s&&s.key;if(i){let a=new fe(B.comparator);a=a.insert(i,Le.newNoDocument(i,$.min()));const l=H().add(i),c=new Vs($.min(),new Map,new fe(K),a,ze(),l);await bf(r,c),r.Rc=r.Rc.remove(i),r.Ic.delete(e),Sl(r)}else await ya(r.localStore,e,!1).then(()=>va(r,e,t)).catch(dr)}async function Uv(n,e){const t=W(n),r=e.batch.batchId;try{const s=await ev(t.localStore,e);Nf(t,r,null),Vf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Os(t,s)}catch(s){await dr(s)}}async function Bv(n,e,t){const r=W(n);try{const s=await function(a,l){const c=W(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(U(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Nf(r,e,t),Vf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Os(r,s)}catch(s){await dr(s)}}function Vf(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function Nf(n,e,t){const r=W(n);let s=r.Vc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vc[r.currentUser.toKey()]=s}}function va(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tc.get(e))n.hc.delete(r),t&&n.Ec.yc(r,t);n.Tc.delete(e),n.isPrimaryClient&&n.Ac.Xs(e).forEach(r=>{n.Ac.containsKey(r)||xf(n,r)})}function xf(n,e){n.Pc.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(El(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ic.delete(t),Sl(n))}function Wc(n,e,t){for(const r of t)r instanceof Cf?(n.Ac.addReference(r.key,e),qv(n,r)):r instanceof Sf?(k(Cl,"Document no longer in limbo: "+r.key),n.Ac.removeReference(r.key,e),n.Ac.containsKey(r.key)||xf(n,r.key)):q(19791,{wc:r})}function qv(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Pc.has(r)||(k(Cl,"New document in limbo: "+t),n.Pc.add(r),Sl(n))}function Sl(n){for(;n.Pc.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Pc.values().next().value;n.Pc.delete(e);const t=new B(te.fromString(e)),r=n.fc.next();n.Ic.set(r,new Vv(t)),n.Rc=n.Rc.insert(t,r),Tf(n.remoteStore,new bt(vt(Ka(t.path)),r,"TargetPurposeLimboResolution",Ji.yn))}}async function Os(n,e,t){const r=W(n),s=[],i=[],a=[];r.hc.isEmpty()||(r.hc.forEach((l,c)=>{a.push(r.gc(c,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(c.targetId)?.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(h){s.push(h);const f=gl.fo(c.targetId,h);i.push(f)}}))}),await Promise.all(a),r.Ec.hn(s),await async function(c,h){const f=W(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(h,T=>V.forEach(T.Ao,S=>f.persistence.referenceDelegate.addReference(p,T.targetId,S)).next(()=>V.forEach(T.Vo,S=>f.persistence.referenceDelegate.removeReference(p,T.targetId,S)))))}catch(p){if(!fr(p))throw p;k(yl,"Failed to update sequence numbers: "+p)}for(const p of h){const T=p.targetId;if(!p.fromCache){const S=f.No.get(T),b=S.snapshotVersion,M=S.withLastLimboFreeSnapshotVersion(b);f.No=f.No.insert(T,M)}}}(r.localStore,i))}async function jv(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){k(Cl,"User change. New user:",e.toKey());const r=await yf(t.localStore,e);t.currentUser=e,function(i,a){i.dc.forEach(l=>{l.forEach(c=>{c.reject(new F(N.CANCELLED,a))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Os(t,r.qo)}}function $v(n,e){const t=W(n),r=t.Ic.get(e);if(r&&r.lc)return H().add(r.key);{let s=H();const i=t.Tc.get(e);if(!i)return s;for(const a of i??[]){const l=t.hc.get(a);s=s.unionWith(l.view.Yu)}return s}}function Df(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=bf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$v.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fv.bind(null,e),e.Ec.hn=Rv.bind(null,e.eventManager),e.Ec.yc=Cv.bind(null,e.eventManager),e}function Wv(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Uv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bv.bind(null,e),e}class ki{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xi(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Sc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return ZT(this.persistence,new YT,e.initialUser,this.serializer)}Sc(e){return new gf(_l.w_,this.serializer)}vc(e){return new Tv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ki.provider={build:()=>new ki};class Gv extends ki{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){U(this.persistence.referenceDelegate instanceof xi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qy(r,e.asyncQueue,t)}Sc(e){const t=this.cacheSizeBytes!==void 0?We.withCacheSize(this.cacheSizeBytes):We.DEFAULT;return new gf(r=>xi.w_(r,t),this.serializer)}}class wa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$c(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jv.bind(null,this.syncEngine),await yv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wv}()}createDatastore(e){const t=Xi(e.databaseInfo.databaseId),r=Py(e.databaseInfo);return Dy(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new av(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>$c(this.syncEngine,t,0),function(){return Sc.Je()?new Sc:new Ay}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const p=new Nv(s,i,a,l,c,h);return f&&(p.mc=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=W(t);k(Ct,"RemoteStore shutting down."),r.ca.add(5),await ks(r),r.Ea.shutdown(),r.ha.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}wa.provider={build:()=>new wa};/**
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
 */const on="FirestoreClient";class zv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=qa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{k(on,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(k(on,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Al(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ho(n,e){n.asyncQueue.verifyOperationInProgress(),k(on,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Gc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Hv(n);k(on,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Uc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Uc(e.remoteStore,s)),n._onlineComponents=e}async function Hv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(on,"Using user provided OfflineComponentProvider");try{await Ho(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;pt("Error using user provided cache. Falling back to memory cache: "+t),await Ho(n,new ki)}}else k(on,"Using default OfflineComponentProvider"),await Ho(n,new Gv(void 0));return n._offlineComponents}async function kf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(on,"Using user provided OnlineComponentProvider"),await Gc(n,n._uninitializedComponentsProvider._online)):(k(on,"Using default OnlineComponentProvider"),await Gc(n,new wa))),n._onlineComponents}function Kv(n){return kf(n).then(e=>e.syncEngine)}async function zc(n){const e=await kf(n),t=e.eventManager;return t.onListen=xv.bind(null,e.syncEngine),t.onUnlisten=Ov.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Dv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Lv.bind(null,e.syncEngine),t}function Qv(n,e,t,r){const s=new Ev(r),i=new Sv(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>Iv(await zc(n),i)),()=>{s.Aa(),n.asyncQueue.enqueueAndForget(async()=>Av(await zc(n),i))}}function Yv(n,e){const t=new vn;return n.asyncQueue.enqueueAndForget(async()=>Mv(await Kv(n),e,t)),t.promise}/**
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
 */const Hc="AsyncQueue";class Kc{constructor(e=Promise.resolve()){this.Wc=[],this.Qc=!1,this.Gc=[],this.zc=null,this.jc=!1,this.Hc=!1,this.Jc=[],this.jt=new Wd(this,"async_queue_retry"),this.Yc=()=>{const r=zo();r&&k(Hc,"Visibility state changed to "+r.visibilityState),this.jt.qt()},this.Zc=e;const t=zo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.el(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const t=zo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const t=new vn;return this.el(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Wc.push(e),this.tl()))}async tl(){if(this.Wc.length!==0){try{await this.Wc[0](),this.Wc.shift(),this.jt.reset()}catch(e){if(!fr(e))throw e;k(Hc,"Operation failed with retryable error: "+e)}this.Wc.length>0&&this.jt.Ut(()=>this.tl())}}el(e){const t=this.Zc.then(()=>(this.jc=!0,e().catch(r=>{throw this.zc=r,this.jc=!1,kt("INTERNAL UNHANDLED ERROR: ",Qc(r)),r}).then(r=>(this.jc=!1,r))));return this.Zc=t,t}enqueueAfterDelay(e,t,r){this.Xc(),this.Jc.indexOf(e)>-1&&(t=0);const s=Il.createAndSchedule(this,e,t,r,i=>this.nl(i));return this.Gc.push(s),s}Xc(){this.zc&&q(47125,{rl:Qc(this.zc)})}verifyOperationInProgress(){}async il(){let e;do e=this.Zc,await e;while(e!==this.Zc)}sl(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}_l(e){return this.il().then(()=>{this.Gc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Gc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.il()})}ol(e){this.Jc.push(e)}nl(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}function Qc(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Is extends Zi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Kc,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kc(e),this._firestoreClient=void 0,await e}}}function YA(n,e){const t=typeof n=="object"?n:G_(),r=typeof n=="string"?n:Ti,s=q_(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Um("firestore");i&&Wy(s,...i)}return s}function Of(n){if(n._terminated)throw new F(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xv(n),n._firestoreClient}function Xv(n){const e=n._freezeSettings(),t=Oy(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new zv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}}(n._componentsProvider))}/**
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
 */class Jv{convertValue(e,t="none"){switch(Ee(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Vn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){const t=e.fields?.[us].arrayValue?.values?.map(r=>he(r.doubleValue));return new Ke(t)}convertGeoPoint(e){return new It(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ps(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(nr(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=te.fromString(e);U(Fd(r),9688,{name:e});const s=new as(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||kt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class Lf extends Jv{constructor(e){super(),this.firestore=e}convertBytes(e){return new it(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,t)}}/**
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
 */function Yc(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}const Xc="@firebase/firestore",Jc="4.17.0";/**
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
 */let Mf=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(to("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Zv=class extends Mf{data(){return super.data()}};/**
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
 */function ew(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function tw(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class zr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class In extends Mf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(to("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=In._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}In._jsonSchemaVersion="firestore/documentSnapshot/1.0",In._jsonSchema={type:me("string",In._jsonSchemaVersion),bundleSource:me("string","DocumentSnapshot"),bundleName:me("string"),bundle:me("string")};class mi extends In{data(e={}){return super.data(e)}}class Qn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new zr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new mi(this._firestore,this._userDataWriter,r.key,r,new zr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{we(s._snapshot.query)?ga(s._snapshot.query):Qa(s.query._query);const c=new mi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new zr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new mi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new zr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:nw(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
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
 */Qn._jsonSchemaVersion="firestore/querySnapshot/1.0",Qn._jsonSchema={type:me("string",Qn._jsonSchemaVersion),bundleSource:me("string","QuerySnapshot"),bundleName:me("string"),bundle:me("string")};function ZA(n,e,t){n=En(n,_e);const r=En(n.firestore,Is),s=tw(n.converter,e,t),i=Ky(r);return Ff(r,[Qy(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Tt.none())])}function eR(n){return Ff(En(n.firestore,Is),[new Ha(n._key,Tt.none())])}function tR(n,...e){n=An(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Yc(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Yc(e[r])){const h=e[r];e[r]=h.next?.bind(h),e[r+1]=h.error?.bind(h),e[r+2]=h.complete?.bind(h)}let i,a,l;if(n instanceof _e)a=En(n.firestore,Is),l=Ka(n._key.path),i={next:h=>{e[r]&&e[r](rw(a,n,h))},error:e[r+1],complete:e[r+2]};else{const h=En(n,eo);a=En(h.firestore,Is),l=h._query;const f=new Lf(a);i={next:p=>{e[r]&&e[r](new Qn(a,f,h,p))},error:e[r+1],complete:e[r+2]},ew(n._query)}const c=Of(a);return Qv(c,l,s,i)}function Ff(n,e){const t=Of(n);return Yv(t,e)}function rw(n,e,t){const r=t.docs.get(e._key),s=new Lf(n);return new In(n,s,e._key,r,new zr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){sg(Gh),is(new Zn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Is(new Ty(r.getProvider("auth-internal")),new Iy(a,r.getProvider("app-check-internal")),fg(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Wt(Xc,Jc,e),Wt(Xc,Jc,"esm2020")})();var Zc={};const eh="@firebase/database",th="1.1.4";/**
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
 */let Uf="";function sw(n){Uf=n}/**
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
 */class iw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ow{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Bf=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iw(e)}}catch{}return new ow},yn=Bf("localStorage"),aw=Bf("sessionStorage");/**
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
 */const Yn=new Ua("@firebase/database"),lw=function(){let n=1;return function(){return n++}}(),qf=function(n){const e=e_(n),t=new Jm;t.update(e);const r=t.digest();return La.encodeByteArray(r)},Ls=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ls.apply(null,r):typeof r=="object"?e+=Ve(r):e+=r,e+=" "}return e};let Zr=null,nh=!0;const uw=function(n,e){O(!0,"Can't turn on custom loggers persistently."),Yn.logLevel=Q.VERBOSE,Zr=Yn.log.bind(Yn)},Me=function(...n){if(nh===!0&&(nh=!1,Zr===null&&aw.get("logging_enabled")===!0&&uw()),Zr){const e=Ls.apply(null,n);Zr(e)}},Ms=function(n){return function(...e){Me(n,...e)}},Ia=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ls(...n);Yn.error(e)},Cn=function(...n){const e=`FIREBASE FATAL ERROR: ${Ls(...n)}`;throw Yn.error(e),new Error(e)},rt=function(...n){const e="FIREBASE WARNING: "+Ls(...n);Yn.warn(e)},cw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jf=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},hw=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ar="[MIN_NAME]",Sn="[MAX_NAME]",yr=function(n,e){if(n===e)return 0;if(n===ar||e===Sn)return-1;if(e===ar||n===Sn)return 1;{const t=rh(n),r=rh(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},dw=function(n,e){return n===e?0:n<e?-1:1},Ur=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ve(e))},Pl=function(n){if(typeof n!="object"||n===null)return Ve(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Ve(e[r]),t+=":",t+=Pl(n[e[r]]);return t+="}",t},$f=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function lt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Wf=function(n){O(!jf(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,a,l,c;n===0?(i=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=l+r,a=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(i=0,a=Math.round(n/Math.pow(2,1-r-t))));const h=[];for(c=t;c;c-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(c=e;c;c-=1)h.push(i%2?1:0),i=Math.floor(i/2);h.push(s?1:0),h.reverse();const f=h.join("");let p="";for(c=0;c<64;c+=8){let T=parseInt(f.substr(c,8),2).toString(16);T.length===1&&(T="0"+T),p=p+T}return p.toLowerCase()},fw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},pw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},mw=new RegExp("^-?(0*)\\d{1,10}$"),_w=-2147483648,gw=2147483647,rh=function(n){if(mw.test(n)){const e=Number(n);if(e>=_w&&e<=gw)return e}return null},Fs=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw rt("Exception was thrown by user callback.",t),e},Math.floor(0))}},yw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},es=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Ew{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Wh(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){rt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Tw{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',rt(e)}}/**
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
 */const bl="5",Gf="v",zf="s",Hf="r",Kf="f",Qf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yf="ls",Xf="p",Aa="ac",Jf="websocket",Zf="long_polling";/**
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
 */class vw{constructor(e,t,r,s,i=!1,a="",l=!1,c=!1,h=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ww(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ep(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let r;if(e===Jf)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Zf)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ww(n)&&(t.ns=n.namespace);const s=[];return lt(t,(i,a)=>{s.push(i+"="+a)}),r+s.join("&")}/**
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
 */class Iw{constructor(){this.counters_={}}incrementCounter(e,t=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return xm(this.counters_)}}/**
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
 */const Ko={},Qo={};function Vl(n){const e=n.toString();return Ko[e]||(Ko[e]=new Iw),Ko[e]}function Aw(n,e){const t=n.toString();return Qo[t]||(Qo[t]=e()),Qo[t]}/**
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
 */class Rw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Fs(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const sh="start",Cw="close",Sw="pLPCommand",Pw="pRTLPCB",tp="id",np="pw",rp="ser",bw="cb",Vw="seg",Nw="ts",xw="d",Dw="dframe",sp=1870,ip=30,kw=sp-ip,Ow=25e3,Lw=3e4;class zn{constructor(e,t,r,s,i,a,l){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ms(e),this.stats_=Vl(t),this.urlFn=c=>(this.appCheckToken&&(c[Aa]=this.appCheckToken),ep(t,Zf,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Rw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lw)),hw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Nl((...i)=>{const[a,l,c,h,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===sh)this.id=l,this.password=c;else if(a===Cw)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...i)=>{const[a,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[sh]="t",r[rp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[bw]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Gf]=bl,this.transportSessionId&&(r[zf]=this.transportSessionId),this.lastSessionId&&(r[Yf]=this.lastSessionId),this.applicationId&&(r[Xf]=this.applicationId),this.appCheckToken&&(r[Aa]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qf.test(location.hostname)&&(r[Hf]=Kf);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){zn.forceAllow_=!0}static forceDisallow(){zn.forceDisallow_=!0}static isAvailable(){return zn.forceAllow_?!0:!zn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fw()&&!pw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ve(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Lh(t),s=$f(r,kw);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Dw]="t",r[tp]=e,r[np]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ve(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Nl{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lw(),window[Sw+this.uniqueCallbackIdentifier]=e,window[Pw+this.uniqueCallbackIdentifier]=t,this.myIFrame=Nl.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){Me("frame writing exception"),l.stack&&Me(l.stack),Me(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tp]=this.myID,e[np]=this.myPW,e[rp]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ip+r.length<=sp;){const a=this.pendingSegs.shift();r=r+"&"+Vw+s+"="+a.seg+"&"+Nw+s+"="+a.ts+"&"+xw+s+"="+a.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(Ow)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Mw=16384,Fw=45e3;let Oi=null;typeof MozWebSocket<"u"?Oi=MozWebSocket:typeof WebSocket<"u"&&(Oi=WebSocket);class ct{constructor(e,t,r,s,i,a,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ms(this.connId),this.stats_=Vl(t),this.connURL=ct.connectionURL_(t,a,l,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const a={};return a[Gf]=bl,typeof location<"u"&&location.hostname&&Qf.test(location.hostname)&&(a[Hf]=Kf),t&&(a[zf]=t),r&&(a[Yf]=r),s&&(a[Aa]=s),i&&(a[Xf]=i),ep(e,Jf,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yn.set("previous_websocket_failure",!0);try{let r;$m(),this.mySock=new Oi(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Oi!==null&&!ct.forceDisallow_}static previouslyFailed(){return yn.isInMemoryStorage||yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=rs(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Ve(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=$f(t,Mw);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fw))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
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
 */class As{static get ALL_TRANSPORTS(){return[zn,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ct&&ct.isAvailable();let r=t&&!ct.previouslyFailed();if(e.webSocketOnly&&(t||rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ct];else{const s=this.transports_=[];for(const i of As.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);As.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}As.globalTransportInitialized_=!1;/**
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
 */const Uw=6e4,Bw=5e3,qw=10*1024,jw=100*1024,Yo="t",ih="d",$w="s",oh="r",Ww="e",ah="o",lh="a",uh="n",ch="p",Gw="h";class zw{constructor(e,t,r,s,i,a,l,c,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=c,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ms("c:"+this.id+":"),this.transportManager_=new As(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yo in e){const t=e[Yo];t===lh?this.upgradeIfSecondaryHealthy_():t===oh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ah&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ur("t",e),r=Ur("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ch,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:uh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ur("t",e),r=Ur("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ur(Yo,e);if(ih in e){const r=e[ih];if(t===Gw){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===uh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===$w?this.onConnectionShutdown_(r):t===oh?this.onReset_(r):t===Ww?Ia("Server Error: "+r):t===ah?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ia("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),bl!==r&&rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Uw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Bw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ch,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class op{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ap{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Li extends ap{static getInstance(){return new Li}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const hh=32,dh=768;class ce{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function re(){return new ce("")}function J(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function an(n){return n.pieces_.length-n.pieceNum_}function le(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ce(n.pieces_,e)}function lp(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Hw(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function up(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function cp(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ce(e,0)}function Se(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new ce(t,0)}function Y(n){return n.pieceNum_>=n.pieces_.length}function ot(n,e){const t=J(n),r=J(e);if(t===null)return e;if(t===r)return ot(le(n),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function hp(n,e){if(an(n)!==an(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function dt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(an(n)>an(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class Kw{constructor(e,t){this.errorPrefix_=t,this.parts_=up(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=$i(this.parts_[r]);dp(this)}}function Qw(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=$i(e),dp(n)}function Yw(n){const e=n.parts_.pop();n.byteLength_-=$i(e),n.parts_.length>0&&(n.byteLength_-=1)}function dp(n){if(n.byteLength_>dh)throw new Error(n.errorPrefix_+"has a key path longer than "+dh+" bytes ("+n.byteLength_+").");if(n.parts_.length>hh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hh+") or object contains a cycle "+mn(n))}function mn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class xl extends ap{static getInstance(){return new xl}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Br=1e3,Xw=60*5*1e3,fh=30*1e3,Jw=1.3,Zw=3e4,eI="server_kill",ph=3;class xt extends op{constructor(e,t,r,s,i,a,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=xt.nextPersistentConnectionId_++,this.log_=Ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Br,this.maxReconnectDelay_=Xw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Li.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(Ve(i)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Fa,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(a).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},a="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(a,i,l=>{const c=l.d,h=l.s;xt.warnOnListenWarnings_(c,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(h,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Lt(e,"w")){const r=Jn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ym(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Qm(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,a=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},a="n";s&&(i.q=r,i.t=s),this.sendRequest(a,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const a={p:t,d:r};i!==void 0&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ia("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Br,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Br,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Zw&&(this.reconnectDelay_=Br),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+xt.nextConnectionId_++,i=this.lastSessionId;let a=!1,l=null;const c=function(){l?l.close():(a=!0,r())},h=function(p){O(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,T]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);a?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=T&&T.token,l=new zw(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,S=>{rt(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(eI)},i))}catch(p){this.log_("Failed to get token: "+p),a||(this.repoInfo_.nodeAdmin&&rt(p),c())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xu(this.interruptReasons_)&&(this.reconnectDelay_=Br,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>Pl(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new ce(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Me("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ph&&(this.reconnectDelay_=fh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Me("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ph&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Uf.replace(/\./g,"-")]=1,Bh()?e["framework.cordova"]=1:jm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Li.getInstance().currentlyOnline();return Xu(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
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
 */class Z{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Z(e,t)}}/**
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
 */class co{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Z(ar,e),s=new Z(ar,t);return this.compare(r,s)!==0}minPost(){return Z.MIN}}/**
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
 */let li;class fp extends co{static get __EMPTY_NODE(){return li}static set __EMPTY_NODE(e){li=e}compare(e,t){return yr(e.name,t.name)}isDefinedOn(e){throw ur("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Z.MIN}maxPost(){return new Z(Sn,li)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,li)}toString(){return".key"}}const Xn=new fp;/**
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
 */class ui{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?r(e.key,t):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ce.RED,this.left=s??He.EMPTY_NODE,this.right=i??He.EMPTY_NODE}copy(e,t,r,s,i){return new Ce(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return He.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class tI{copy(e,t,r,s,i){return this}insert(e,t,r){return new Ce(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class He{constructor(e,t=He.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new He(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new He(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ui(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ui(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ui(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ui(this.root_,null,this.comparator_,!0,e)}}He.EMPTY_NODE=new tI;/**
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
 */function nI(n,e){return yr(n.name,e.name)}function Dl(n,e){return yr(n,e)}/**
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
 */let Ra;function rI(n){Ra=n}const pp=function(n){return typeof n=="number"?"number:"+Wf(n):"string:"+n},mp=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else O(n===Ra||n.isEmpty(),"priority of unexpected type.");O(n===Ra||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let mh;class Ae{static set __childrenNodeConstructor(e){mh=e}static get __childrenNodeConstructor(){return mh}constructor(e,t=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:J(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=J(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||an(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pp(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Wf(this.value_):e+=this.value_,this.lazyHash_=qf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Ae.VALUE_TYPE_ORDER.indexOf(t),i=Ae.VALUE_TYPE_ORDER.indexOf(r);return O(s>=0,"Unknown leaf type: "+t),O(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let _p,gp;function sI(n){_p=n}function iI(n){gp=n}class oI extends co{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?yr(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(Sn,new Ae("[PRIORITY-POST]",gp))}makePost(e,t){const r=_p(e);return new Z(t,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ue=new oI;/**
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
 */const aI=Math.log(2);class lI{constructor(e){const t=i=>parseInt(Math.log(i)/aI,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mi=function(n,e,t,r){n.sort(e);const s=function(c,h){const f=h-c;let p,T;if(f===0)return null;if(f===1)return p=n[c],T=t?t(p):p,new Ce(T,p.node,Ce.BLACK,null,null);{const S=parseInt(f/2,10)+c,b=s(c,S),M=s(S+1,h);return p=n[S],T=t?t(p):p,new Ce(T,p.node,Ce.BLACK,b,M)}},i=function(c){let h=null,f=null,p=n.length;const T=function(b,M){const L=p-b,G=p;p-=b;const ee=s(L+1,G),ie=n[L],xe=t?t(ie):ie;S(new Ce(xe,ie.node,M,null,ee))},S=function(b){h?(h.left=b,h=b):(f=b,h=b)};for(let b=0;b<c.count;++b){const M=c.nextBitIsOne(),L=Math.pow(2,c.count-(b+1));M?T(L,Ce.BLACK):(T(L,Ce.BLACK),T(L,Ce.RED))}return f},a=new lI(n.length),l=i(a);return new He(r||e,l)};/**
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
 */let Xo;const Bn={};class Vt{static get Default(){return O(Bn&&Ue,"ChildrenNode.ts has not been loaded"),Xo=Xo||new Vt({".priority":Bn},{".priority":Ue}),Xo}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Jn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof He?t:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,t){O(e!==Xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(Z.Wrap);let a=i.getNext();for(;a;)s=s||e.isDefinedOn(a.node),r.push(a),a=i.getNext();let l;s?l=Mi(r,e.getCompare()):l=Bn;const c=e.toString(),h={...this.indexSet_};h[c]=e;const f={...this.indexes_};return f[c]=l,new Vt(f,h)}addToIndexes(e,t){const r=gi(this.indexes_,(s,i)=>{const a=Jn(this.indexSet_,i);if(O(a,"Missing index implementation for "+i),s===Bn)if(a.isDefinedOn(e.node)){const l=[],c=t.getIterator(Z.Wrap);let h=c.getNext();for(;h;)h.name!==e.name&&l.push(h),h=c.getNext();return l.push(e),Mi(l,a.getCompare())}else return Bn;else{const l=t.get(e.name);let c=s;return l&&(c=c.remove(new Z(e.name,l))),c.insert(e,e.node)}});return new Vt(r,this.indexSet_)}removeFromIndexes(e,t){const r=gi(this.indexes_,s=>{if(s===Bn)return s;{const i=t.get(e.name);return i?s.remove(new Z(e.name,i)):s}});return new Vt(r,this.indexSet_)}}/**
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
 */let qr;class ne{static get EMPTY_NODE(){return qr||(qr=new ne(new He(Dl),null,Vt.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&mp(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qr}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?qr:t}}getChild(e){const t=J(e);return t===null?this:this.getImmediateChild(t).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Z(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const a=s.isEmpty()?qr:this.priorityNode_;return new ne(s,a,i)}}updateChild(e,t){const r=J(e);if(r===null)return t;{O(J(e)!==".priority"||an(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(le(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(Ue,(a,l)=>{t[a]=l.val(e),r++,i&&ne.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):i=!1}),!e&&i&&s<2*r){const a=[];for(const l in t)a[l]=t[l];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pp(this.getPriority().val())+":"),this.forEachChild(Ue,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":qf(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Z(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Z(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Z(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Z.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Us?-1:0}withIndex(e){if(e===Xn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Ue),s=t.getIterator(Ue);let i=r.getNext(),a=s.getNext();for(;i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=r.getNext(),a=s.getNext()}return i===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Xn?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uI extends ne{constructor(){super(new He(Dl),ne.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const Us=new uI;Object.defineProperties(Z,{MIN:{value:new Z(ar,ne.EMPTY_NODE)},MAX:{value:new Z(Sn,Us)}});fp.__EMPTY_NODE=ne.EMPTY_NODE;Ae.__childrenNodeConstructor=ne;rI(Us);iI(Us);/**
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
 */const cI=!0;function Fe(n,e=null){if(n===null)return ne.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ae(t,Fe(e))}if(!(n instanceof Array)&&cI){const t=[];let r=!1;if(lt(n,(a,l)=>{if(a.substring(0,1)!=="."){const c=Fe(l);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),t.push(new Z(a,c)))}}),t.length===0)return ne.EMPTY_NODE;const i=Mi(t,nI,a=>a.name,Dl);if(r){const a=Mi(t,Ue.getCompare());return new ne(i,Fe(e),new Vt({".priority":a},{".priority":Ue}))}else return new ne(i,Fe(e),Vt.Default)}else{let t=ne.EMPTY_NODE;return lt(n,(r,s)=>{if(Lt(n,r)&&r.substring(0,1)!=="."){const i=Fe(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(Fe(e))}}sI(Fe);/**
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
 */class hI extends co{constructor(e){super(),this.indexPath_=e,O(!Y(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?yr(e.name,t.name):i}makePost(e,t){const r=Fe(e),s=ne.EMPTY_NODE.updateChild(this.indexPath_,r);return new Z(t,s)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,Us);return new Z(Sn,e)}toString(){return up(this.indexPath_,0).join("/")}}/**
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
 */class dI extends co{compare(e,t){const r=e.node.compareTo(t.node);return r===0?yr(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,t){const r=Fe(e);return new Z(t,r)}toString(){return".value"}}const fI=new dI;/**
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
 */function pI(n){return{type:"value",snapshotNode:n}}function mI(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function _I(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function _h(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function gI(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class kl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ar}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new kl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ue?t="$priority":n.index_===fI?t="$value":n.index_===Xn?t="$key":(O(n.index_ instanceof hI,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ve(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ve(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ve(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ve(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ve(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function yh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ue&&(e.i=n.index_.toString()),e}/**
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
 */class Fi extends op{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ms("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const a=Fi.getListenId_(e,r),l={};this.listens_[a]=l;const c=gh(e._queryParams);this.restRequest_(i+".json",c,(h,f)=>{let p=f;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(i,p,!1,r),Jn(this.listens_,a)===l){let T;h?h===401?T="permission_denied":T="rest_error:"+h:T="ok",s(T,null)}})}unlisten(e,t){const r=Fi.getListenId_(e,t);delete this.listens_[r]}get(e){const t=gh(e._queryParams),r=e._path.toString(),s=new Fa;return this.restRequest_(r+".json",t,(i,a)=>{let l=a;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xm(t);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=rs(l.responseText)}catch{rt("Failed to parse JSON response for "+a+": "+l.responseText)}r(null,c)}else l.status!==401&&l.status!==404&&rt("Got unsuccessful REST response for "+a+" Status: "+l.status),r(l.status);r=null}},l.open("GET",a,!0),l.send()})}}/**
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
 */class yI{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ui(){return{value:null,children:new Map}}function yp(n,e,t){if(Y(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=J(e);n.children.has(r)||n.children.set(r,Ui());const s=n.children.get(r);e=le(e),yp(s,e,t)}}function Ca(n,e,t){n.value!==null?t(e,n.value):EI(n,(r,s)=>{const i=new ce(e.toString()+"/"+r);Ca(s,i,t)})}function EI(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class TI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&lt(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
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
 */const Eh=10*1e3,vI=30*1e3,wI=5*60*1e3;class II{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new TI(e);const r=Eh+(vI-Eh)*Math.random();es(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;lt(e,(s,i)=>{i>0&&Lt(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),es(this.reportStats_.bind(this),Math.floor(Math.random()*2*wI))}}/**
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
 */var Et;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function Ep(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vp(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Bi{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=Ep()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ce(e));return new Bi(re(),t,this.revert)}}else return O(J(this.path)===e,"operationForChild called for unrelated child."),new Bi(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class Pn{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return Y(this.path)?new Pn(this.source,re(),this.snap.getImmediateChild(e)):new Pn(this.source,le(this.path),this.snap)}}/**
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
 */class Rs{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Et.MERGE}operationForChild(e){if(Y(this.path)){const t=this.children.subtree(new ce(e));return t.isEmpty()?null:t.value?new Pn(this.source,re(),t.value):new Rs(this.source,re(),t)}else return O(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rs(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ol{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const t=J(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function AI(n,e,t,r){const s=[],i=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&i.push(gI(a.childName,a.snapshotNode))}),jr(n,s,"child_removed",e,r,t),jr(n,s,"child_added",e,r,t),jr(n,s,"child_moved",i,r,t),jr(n,s,"child_changed",e,r,t),jr(n,s,"value",e,r,t),s}function jr(n,e,t,r,s,i){const a=r.filter(l=>l.type===t);a.sort((l,c)=>CI(n,l,c)),a.forEach(l=>{const c=RI(n,l,i);s.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(c,n.query_))})})}function RI(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function CI(n,e,t){if(e.childName==null||t.childName==null)throw ur("Should only compare child_ events.");const r=new Z(e.childName,e.snapshotNode),s=new Z(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
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
 */function wp(n,e){return{eventCache:n,serverCache:e}}function ts(n,e,t,r){return wp(new Ol(e,t,r),n.serverCache)}function Ip(n,e,t,r){return wp(n.eventCache,new Ol(e,t,r))}function Sa(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function bn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Jo;const SI=()=>(Jo||(Jo=new He(dw)),Jo);class ae{static fromObject(e){let t=new ae(null);return lt(e,(r,s)=>{t=t.set(new ce(r),s)}),t}constructor(e,t=SI()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:re(),value:this.value};if(Y(e))return null;{const r=J(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(le(e),t);return i!=null?{path:Se(new ce(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const t=J(e),r=this.children.get(t);return r!==null?r.subtree(le(e)):new ae(null)}}set(e,t){if(Y(e))return new ae(t,this.children);{const r=J(e),i=(this.children.get(r)||new ae(null)).set(le(e),t),a=this.children.insert(r,i);return new ae(this.value,a)}}remove(e){if(Y(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const t=J(e),r=this.children.get(t);if(r){const s=r.remove(le(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new ae(null):new ae(this.value,i)}else return this}}get(e){if(Y(e))return this.value;{const t=J(e),r=this.children.get(t);return r?r.get(le(e)):null}}setTree(e,t){if(Y(e))return t;{const r=J(e),i=(this.children.get(r)||new ae(null)).setTree(le(e),t);let a;return i.isEmpty()?a=this.children.remove(r):a=this.children.insert(r,i),new ae(this.value,a)}}fold(e){return this.fold_(re(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Se(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,re(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(Y(e))return null;{const i=J(e),a=this.children.get(i);return a?a.findOnPath_(le(e),Se(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,re(),t)}foreachOnPath_(e,t,r){if(Y(e))return this;{this.value&&r(t,this.value);const s=J(e),i=this.children.get(s);return i?i.foreachOnPath_(le(e),Se(t,s),r):new ae(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(Se(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class ft{constructor(e){this.writeTree_=e}static empty(){return new ft(new ae(null))}}function ns(n,e,t){if(Y(e))return new ft(new ae(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const a=ot(s,e);return i=i.updateChild(a,t),new ft(n.writeTree_.set(s,i))}else{const s=new ae(t),i=n.writeTree_.setTree(e,s);return new ft(i)}}}function Th(n,e,t){let r=n;return lt(t,(s,i)=>{r=ns(r,Se(e,s),i)}),r}function vh(n,e){if(Y(e))return ft.empty();{const t=n.writeTree_.setTree(e,new ae(null));return new ft(t)}}function Pa(n,e){return On(n,e)!=null}function On(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ot(t.path,e)):null}function wh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ue,(r,s)=>{e.push(new Z(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Z(r,s.value))}),e}function Yt(n,e){if(Y(e))return n;{const t=On(n,e);return t!=null?new ft(new ae(t)):new ft(n.writeTree_.subtree(e))}}function ba(n){return n.writeTree_.isEmpty()}function lr(n,e){return Ap(re(),n.writeTree_,e)}function Ap(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(O(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=Ap(Se(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Se(n,".priority"),r)),t}}/**
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
 */function Rp(n,e){return Vp(e,n)}function PI(n,e,t,r,s){O(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=ns(n.visibleWrites,e,t)),n.lastWriteId=r}function bI(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function VI(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=t&&NI(l,r.path)?s=!1:dt(r.path,l.path)&&(i=!0)),a--}if(s){if(i)return xI(n),!0;if(r.snap)n.visibleWrites=vh(n.visibleWrites,r.path);else{const l=r.children;lt(l,c=>{n.visibleWrites=vh(n.visibleWrites,Se(r.path,c))})}return!0}else return!1}function NI(n,e){if(n.snap)return dt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&dt(Se(n.path,t),e))return!0;return!1}function xI(n){n.visibleWrites=Cp(n.allWrites,DI,re()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function DI(n){return n.visible}function Cp(n,e,t){let r=ft.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const a=i.path;let l;if(i.snap)dt(t,a)?(l=ot(t,a),r=ns(r,l,i.snap)):dt(a,t)&&(l=ot(a,t),r=ns(r,re(),i.snap.getChild(l)));else if(i.children){if(dt(t,a))l=ot(t,a),r=Th(r,l,i.children);else if(dt(a,t))if(l=ot(a,t),Y(l))r=Th(r,re(),i.children);else{const c=Jn(i.children,J(l));if(c){const h=c.getChild(le(l));r=ns(r,re(),h)}}}else throw ur("WriteRecord should have .snap or .children")}}return r}function Sp(n,e,t,r,s){if(!r&&!s){const i=On(n.visibleWrites,e);if(i!=null)return i;{const a=Yt(n.visibleWrites,e);if(ba(a))return t;if(t==null&&!Pa(a,re()))return null;{const l=t||ne.EMPTY_NODE;return lr(a,l)}}}else{const i=Yt(n.visibleWrites,e);if(!s&&ba(i))return t;if(!s&&t==null&&!Pa(i,re()))return null;{const a=function(h){return(h.visible||s)&&(!r||!~r.indexOf(h.writeId))&&(dt(h.path,e)||dt(e,h.path))},l=Cp(n.allWrites,a,e),c=t||ne.EMPTY_NODE;return lr(l,c)}}}function kI(n,e,t){let r=ne.EMPTY_NODE;const s=On(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ue,(i,a)=>{r=r.updateImmediateChild(i,a)}),r;if(t){const i=Yt(n.visibleWrites,e);return t.forEachChild(Ue,(a,l)=>{const c=lr(Yt(i,new ce(a)),l);r=r.updateImmediateChild(a,c)}),wh(i).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}else{const i=Yt(n.visibleWrites,e);return wh(i).forEach(a=>{r=r.updateImmediateChild(a.name,a.node)}),r}}function OI(n,e,t,r,s){O(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Se(e,t);if(Pa(n.visibleWrites,i))return null;{const a=Yt(n.visibleWrites,i);return ba(a)?s.getChild(t):lr(a,s.getChild(t))}}function LI(n,e,t,r){const s=Se(e,t),i=On(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const a=Yt(n.visibleWrites,s);return lr(a,r.getNode().getImmediateChild(t))}else return null}function MI(n,e){return On(n.visibleWrites,e)}function FI(n,e,t,r,s,i,a){let l;const c=Yt(n.visibleWrites,e),h=On(c,re());if(h!=null)l=h;else if(t!=null)l=lr(c,t);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const f=[],p=a.getCompare(),T=i?l.getReverseIteratorFrom(r,a):l.getIteratorFrom(r,a);let S=T.getNext();for(;S&&f.length<s;)p(S,r)!==0&&f.push(S),S=T.getNext();return f}else return[]}function UI(){return{visibleWrites:ft.empty(),allWrites:[],lastWriteId:-1}}function Va(n,e,t,r){return Sp(n.writeTree,n.treePath,e,t,r)}function Pp(n,e){return kI(n.writeTree,n.treePath,e)}function Ih(n,e,t,r){return OI(n.writeTree,n.treePath,e,t,r)}function qi(n,e){return MI(n.writeTree,Se(n.treePath,e))}function BI(n,e,t,r,s,i){return FI(n.writeTree,n.treePath,e,t,r,s,i)}function Ll(n,e,t){return LI(n.writeTree,n.treePath,e,t)}function bp(n,e){return Vp(Se(n.treePath,e),n.writeTree)}function Vp(n,e){return{treePath:n,writeTree:e}}/**
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
 */class qI{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,_h(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,_I(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,mI(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,_h(r,e.snapshotNode,s.oldSnap));else throw ur("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class jI{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Np=new jI;class Ml{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ol(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ll(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bn(this.viewCache_),i=BI(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}function $I(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function WI(n,e,t,r,s){const i=new qI;let a,l;if(t.type===Et.OVERWRITE){const h=t;h.source.fromUser?a=Na(n,e,h.path,h.snap,r,s,i):(O(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!Y(h.path),a=ji(n,e,h.path,h.snap,r,s,l,i))}else if(t.type===Et.MERGE){const h=t;h.source.fromUser?a=zI(n,e,h.path,h.children,r,s,i):(O(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),a=xa(n,e,h.path,h.children,r,s,l,i))}else if(t.type===Et.ACK_USER_WRITE){const h=t;h.revert?a=QI(n,e,h.path,r,s,i):a=HI(n,e,h.path,h.affectedTree,r,s,i)}else if(t.type===Et.LISTEN_COMPLETE)a=KI(n,e,t.path,r,i);else throw ur("Unknown operation type: "+t.type);const c=i.getChanges();return GI(e,a,c),{viewCache:a,changes:c}}function GI(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Sa(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(pI(Sa(e)))}}function xp(n,e,t,r,s,i){const a=e.eventCache;if(qi(r,t)!=null)return e;{let l,c;if(Y(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=bn(e),f=h instanceof ne?h:ne.EMPTY_NODE,p=Pp(r,f);l=n.filter.updateFullNode(e.eventCache.getNode(),p,i)}else{const h=Va(r,bn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const h=J(t);if(h===".priority"){O(an(t)===1,"Can't have a priority with additional path components");const f=a.getNode();c=e.serverCache.getNode();const p=Ih(r,t,f,c);p!=null?l=n.filter.updatePriority(f,p):l=a.getNode()}else{const f=le(t);let p;if(a.isCompleteForChild(h)){c=e.serverCache.getNode();const T=Ih(r,t,a.getNode(),c);T!=null?p=a.getNode().getImmediateChild(h).updateChild(f,T):p=a.getNode().getImmediateChild(h)}else p=Ll(r,h,e.serverCache);p!=null?l=n.filter.updateChild(a.getNode(),h,p,f,s,i):l=a.getNode()}}return ts(e,l,a.isFullyInitialized()||Y(t),n.filter.filtersNodes())}}function ji(n,e,t,r,s,i,a,l){const c=e.serverCache;let h;const f=a?n.filter:n.filter.getIndexedFilter();if(Y(t))h=f.updateFullNode(c.getNode(),r,null);else if(f.filtersNodes()&&!c.isFiltered()){const S=c.getNode().updateChild(t,r);h=f.updateFullNode(c.getNode(),S,null)}else{const S=J(t);if(!c.isCompleteForPath(t)&&an(t)>1)return e;const b=le(t),L=c.getNode().getImmediateChild(S).updateChild(b,r);S===".priority"?h=f.updatePriority(c.getNode(),L):h=f.updateChild(c.getNode(),S,L,b,Np,null)}const p=Ip(e,h,c.isFullyInitialized()||Y(t),f.filtersNodes()),T=new Ml(s,p,i);return xp(n,p,t,s,T,l)}function Na(n,e,t,r,s,i,a){const l=e.eventCache;let c,h;const f=new Ml(s,e,i);if(Y(t))h=n.filter.updateFullNode(e.eventCache.getNode(),r,a),c=ts(e,h,!0,n.filter.filtersNodes());else{const p=J(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),r),c=ts(e,h,l.isFullyInitialized(),l.isFiltered());else{const T=le(t),S=l.getNode().getImmediateChild(p);let b;if(Y(T))b=r;else{const M=f.getCompleteChild(p);M!=null?lp(T)===".priority"&&M.getChild(cp(T)).isEmpty()?b=M:b=M.updateChild(T,r):b=ne.EMPTY_NODE}if(S.equals(b))c=e;else{const M=n.filter.updateChild(l.getNode(),p,b,T,f,a);c=ts(e,M,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Ah(n,e){return n.eventCache.isCompleteForChild(e)}function zI(n,e,t,r,s,i,a){let l=e;return r.foreach((c,h)=>{const f=Se(t,c);Ah(e,J(f))&&(l=Na(n,l,f,h,s,i,a))}),r.foreach((c,h)=>{const f=Se(t,c);Ah(e,J(f))||(l=Na(n,l,f,h,s,i,a))}),l}function Rh(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function xa(n,e,t,r,s,i,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,h;Y(t)?h=r:h=new ae(null).setTree(t,r);const f=e.serverCache.getNode();return h.children.inorderTraversal((p,T)=>{if(f.hasChild(p)){const S=e.serverCache.getNode().getImmediateChild(p),b=Rh(n,S,T);c=ji(n,c,new ce(p),b,s,i,a,l)}}),h.children.inorderTraversal((p,T)=>{const S=!e.serverCache.isCompleteForChild(p)&&T.value===null;if(!f.hasChild(p)&&!S){const b=e.serverCache.getNode().getImmediateChild(p),M=Rh(n,b,T);c=ji(n,c,new ce(p),M,s,i,a,l)}}),c}function HI(n,e,t,r,s,i,a){if(qi(s,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(Y(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return ji(n,e,t,c.getNode().getChild(t),s,i,l,a);if(Y(t)){let h=new ae(null);return c.getNode().forEachChild(Xn,(f,p)=>{h=h.set(new ce(f),p)}),xa(n,e,t,h,s,i,l,a)}else return e}else{let h=new ae(null);return r.foreach((f,p)=>{const T=Se(t,f);c.isCompleteForPath(T)&&(h=h.set(f,c.getNode().getChild(T)))}),xa(n,e,t,h,s,i,l,a)}}function KI(n,e,t,r,s){const i=e.serverCache,a=Ip(e,i.getNode(),i.isFullyInitialized()||Y(t),i.isFiltered());return xp(n,a,t,r,Np,s)}function QI(n,e,t,r,s,i){let a;if(qi(r,t)!=null)return e;{const l=new Ml(r,e,s),c=e.eventCache.getNode();let h;if(Y(t)||J(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Va(r,bn(e));else{const p=e.serverCache.getNode();O(p instanceof ne,"serverChildren would be complete if leaf node"),f=Pp(r,p)}f=f,h=n.filter.updateFullNode(c,f,i)}else{const f=J(t);let p=Ll(r,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=c.getImmediateChild(f)),p!=null?h=n.filter.updateChild(c,f,p,le(t),l,i):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(c,f,ne.EMPTY_NODE,le(t),l,i):h=c,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=Va(r,bn(e)),a.isLeafNode()&&(h=n.filter.updateFullNode(h,a,i)))}return a=e.serverCache.isFullyInitialized()||qi(r,re())!=null,ts(e,h,a,n.filter.filtersNodes())}}function YI(n,e){const t=bn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Y(e)&&!t.getImmediateChild(J(e)).isEmpty())?t.getChild(e):null}function Ch(n,e,t,r){e.type===Et.MERGE&&e.source.queryId!==null&&(O(bn(n.viewCache_),"We should always have a full cache before handling merges"),O(Sa(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=WI(n.processor_,s,e,t,r);return $I(n.processor_,i.viewCache),O(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,XI(n,i.changes,i.viewCache.eventCache.getNode())}function XI(n,e,t,r){const s=n.eventRegistrations_;return AI(n.eventGenerator_,e,t,s)}/**
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
 */let Sh;function JI(n){O(!Sh,"__referenceConstructor has already been defined"),Sh=n}function Fl(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return O(i!=null,"SyncTree gave us an op for an invalid query."),Ch(i,e,t,r)}else{let i=[];for(const a of n.views.values())i=i.concat(Ch(a,e,t,r));return i}}function Ul(n,e){let t=null;for(const r of n.views.values())t=t||YI(r,e);return t}/**
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
 */let Ph;function ZI(n){O(!Ph,"__referenceConstructor has already been defined"),Ph=n}class bh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=UI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function eA(n,e,t,r,s){return PI(n.pendingWriteTree_,e,t,r,s),s?fo(n,new Pn(Ep(),e,t)):[]}function Hn(n,e,t=!1){const r=bI(n.pendingWriteTree_,e);if(VI(n.pendingWriteTree_,e)){let i=new ae(null);return r.snap!=null?i=i.set(re(),!0):lt(r.children,a=>{i=i.set(new ce(a),!0)}),fo(n,new Bi(r.path,i,t))}else return[]}function ho(n,e,t){return fo(n,new Pn(Tp(),e,t))}function tA(n,e,t){const r=ae.fromObject(t);return fo(n,new Rs(Tp(),e,r))}function nA(n,e,t,r){const s=Lp(n,r);if(s!=null){const i=Mp(s),a=i.path,l=i.queryId,c=ot(a,e),h=new Pn(vp(l),c,t);return Fp(n,a,h)}else return[]}function rA(n,e,t,r){const s=Lp(n,r);if(s){const i=Mp(s),a=i.path,l=i.queryId,c=ot(a,e),h=ae.fromObject(t),f=new Rs(vp(l),c,h);return Fp(n,a,f)}else return[]}function Dp(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(a,l)=>{const c=ot(a,e),h=Ul(l,c);if(h)return h});return Sp(s,e,i,t,!0)}function fo(n,e){return kp(e,n.syncPointTree_,null,Rp(n.pendingWriteTree_,re()))}function kp(n,e,t,r){if(Y(n.path))return Op(n,e,t,r);{const s=e.get(re());t==null&&s!=null&&(t=Ul(s,re()));let i=[];const a=J(n.path),l=n.operationForChild(a),c=e.children.get(a);if(c&&l){const h=t?t.getImmediateChild(a):null,f=bp(r,a);i=i.concat(kp(l,c,h,f))}return s&&(i=i.concat(Fl(s,n,r,t))),i}}function Op(n,e,t,r){const s=e.get(re());t==null&&s!=null&&(t=Ul(s,re()));let i=[];return e.children.inorderTraversal((a,l)=>{const c=t?t.getImmediateChild(a):null,h=bp(r,a),f=n.operationForChild(a);f&&(i=i.concat(Op(f,l,c,h)))}),s&&(i=i.concat(Fl(s,n,r,t))),i}function Lp(n,e){return n.tagToQueryMap.get(e)}function Mp(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ce(n.substr(0,e))}}function Fp(n,e,t){const r=n.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const s=Rp(n.pendingWriteTree_,e);return Fl(r,t,s,null)}/**
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
 */class Bl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Bl(t)}node(){return this.node_}}class ql{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Se(this.path_,e);return new ql(this.syncTree_,t)}node(){return Dp(this.syncTree_,this.path_)}}const sA=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Vh=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return iA(n[".sv"],e,t);if(typeof n[".sv"]=="object")return oA(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},iA=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},oA=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const s=e.node();if(O(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const a=s.getValue();return typeof a!="number"?r:a+r},aA=function(n,e,t,r){return jl(e,new ql(t,n),r)},lA=function(n,e,t){return jl(n,new Bl(e),t)};function jl(n,e,t){const r=n.getPriority().val(),s=Vh(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const a=n,l=Vh(a.getValue(),e,t);return l!==a.getValue()||s!==a.getPriority().val()?new Ae(l,Fe(s)):n}else{const a=n;return i=a,s!==a.getPriority().val()&&(i=i.updatePriority(new Ae(s))),a.forEachChild(Ue,(l,c)=>{const h=jl(c,e.getImmediateChild(l),t);h!==c&&(i=i.updateImmediateChild(l,h))}),i}}/**
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
 */class $l{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Wl(n,e){let t=e instanceof ce?e:new ce(e),r=n,s=J(t);for(;s!==null;){const i=Jn(r.node.children,s)||{children:{},childCount:0};r=new $l(s,r,i),t=le(t),s=J(t)}return r}function Er(n){return n.node.value}function Up(n,e){n.node.value=e,Da(n)}function Bp(n){return n.node.childCount>0}function uA(n){return Er(n)===void 0&&!Bp(n)}function po(n,e){lt(n.node.children,(t,r)=>{e(new $l(t,n,r))})}function qp(n,e,t,r){t&&e(n),po(n,s=>{qp(s,e,!0)})}function cA(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Bs(n){return new ce(n.parent===null?n.name:Bs(n.parent)+"/"+n.name)}function Da(n){n.parent!==null&&hA(n.parent,n.name,n)}function hA(n,e,t){const r=uA(t),s=Lt(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Da(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Da(n))}/**
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
 */const dA=/[\[\].#$\/\u0000-\u001F\u007F]/,fA=/[\[\].#$\u0000-\u001F\u007F]/,Zo=10*1024*1024,jp=function(n){return typeof n=="string"&&n.length!==0&&!dA.test(n)},pA=function(n){return typeof n=="string"&&n.length!==0&&!fA.test(n)},mA=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pA(n)},$p=function(n,e,t){const r=t instanceof ce?new Kw(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+mn(r));if(typeof e=="function")throw new Error(n+"contains a function "+mn(r)+" with contents = "+e.toString());if(jf(e))throw new Error(n+"contains "+e.toString()+" "+mn(r));if(typeof e=="string"&&e.length>Zo/3&&$i(e)>Zo)throw new Error(n+"contains a string greater than "+Zo+" utf8 bytes "+mn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(lt(e,(a,l)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(i=!0,!jp(a)))throw new Error(n+" contains an invalid key ("+a+") "+mn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qw(r,a),$p(n,l,r),Yw(r)}),s&&i)throw new Error(n+' contains ".value" child '+mn(r)+" in addition to actual children.")}},_A=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!jp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!mA(t))throw new Error(Zm(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class gA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yA(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!hp(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function Ln(n,e,t){yA(n,t),EA(n,r=>dt(r,e)||dt(e,r))}function EA(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(TA(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function TA(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Zr&&Me("event: "+t.toString()),Fs(r)}}}/**
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
 */const vA="repo_interrupt",wA=25;class IA{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ui(),this.transactionQueueTree_=new $l,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AA(n,e,t){if(n.stats_=Vl(n.repoInfo_),n.forceRestClient_||yw())n.server_=new Fi(n.repoInfo_,(r,s,i,a)=>{Nh(n,r,s,i,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>xh(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new xt(n.repoInfo_,e,(r,s,i,a)=>{Nh(n,r,s,i,a)},r=>{xh(n,r)},r=>{CA(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=Aw(n.repoInfo_,()=>new II(n.stats_,n.server_)),n.infoData_=new yI,n.infoSyncTree_=new bh({startListening:(r,s,i,a)=>{let l=[];const c=n.infoData_.getNode(r._path);return c.isEmpty()||(l=ho(n.infoSyncTree_,r._path,c),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),Gl(n,"connected",!1),n.serverSyncTree_=new bh({startListening:(r,s,i,a)=>(n.server_.listen(r,i,s,(l,c)=>{const h=a(l,c);Ln(n.eventQueue_,r._path,h)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function RA(n){const t=n.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Wp(n){return sA({timestamp:RA(n)})}function Nh(n,e,t,r,s){n.dataUpdateCount++;const i=new ce(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(s)if(r){const c=gi(t,h=>Fe(h));a=rA(n.serverSyncTree_,i,c,s)}else{const c=Fe(t);a=nA(n.serverSyncTree_,i,c,s)}else if(r){const c=gi(t,h=>Fe(h));a=tA(n.serverSyncTree_,i,c)}else{const c=Fe(t);a=ho(n.serverSyncTree_,i,c)}let l=i;a.length>0&&(l=Hl(n,i)),Ln(n.eventQueue_,l,a)}function xh(n,e){Gl(n,"connected",e),e===!1&&PA(n)}function CA(n,e){lt(e,(t,r)=>{Gl(n,t,r)})}function Gl(n,e,t){const r=new ce("/.info/"+e),s=Fe(t);n.infoData_.updateSnapshot(r,s);const i=ho(n.infoSyncTree_,r,s);Ln(n.eventQueue_,r,i)}function SA(n){return n.nextWriteId_++}function PA(n){Gp(n,"onDisconnectEvents");const e=Wp(n),t=Ui();Ca(n.onDisconnect_,re(),(s,i)=>{const a=aA(s,i,n.serverSyncTree_,e);yp(t,s,a)});let r=[];Ca(t,re(),(s,i)=>{r=r.concat(ho(n.serverSyncTree_,s,i));const a=xA(n,s);Hl(n,a)}),n.onDisconnect_=Ui(),Ln(n.eventQueue_,re(),r)}function bA(n){n.persistentConnection_&&n.persistentConnection_.interrupt(vA)}function Gp(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Me(t,...e)}function zp(n,e,t){return Dp(n.serverSyncTree_,e,t)||ne.EMPTY_NODE}function zl(n,e=n.transactionQueueTree_){if(e||mo(n,e),Er(e)){const t=Kp(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&VA(n,Bs(e),t)}else Bp(e)&&po(e,t=>{zl(n,t)})}function VA(n,e,t){const r=t.map(h=>h.currentWriteId),s=zp(n,e,r);let i=s;const a=s.hash();for(let h=0;h<t.length;h++){const f=t[h];O(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=ot(e,f.path);i=i.updateChild(p,f.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;n.server_.put(c.toString(),l,h=>{Gp(n,"transaction put response",{path:c.toString(),status:h});let f=[];if(h==="ok"){const p=[];for(let T=0;T<t.length;T++)t[T].status=2,f=f.concat(Hn(n.serverSyncTree_,t[T].currentWriteId)),t[T].onComplete&&p.push(()=>t[T].onComplete(null,!0,t[T].currentOutputSnapshotResolved)),t[T].unwatcher();mo(n,Wl(n.transactionQueueTree_,e)),zl(n,n.transactionQueueTree_),Ln(n.eventQueue_,e,f);for(let T=0;T<p.length;T++)Fs(p[T])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{rt("transaction at "+c.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}Hl(n,e)}},a)}function Hl(n,e){const t=Hp(n,e),r=Bs(t),s=Kp(n,t);return NA(n,s,r),r}function NA(n,e,t){if(e.length===0)return;const r=[];let s=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],h=ot(t,c.path);let f=!1,p;if(O(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,p=c.abortReason,s=s.concat(Hn(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=wA)f=!0,p="maxretry",s=s.concat(Hn(n.serverSyncTree_,c.currentWriteId,!0));else{const T=zp(n,c.path,a);c.currentInputSnapshot=T;const S=e[l].update(T.val());if(S!==void 0){$p("transaction failed: Data returned ",S,c.path);let b=Fe(S);typeof S=="object"&&S!=null&&Lt(S,".priority")||(b=b.updatePriority(T.getPriority()));const L=c.currentWriteId,G=Wp(n),ee=lA(b,T,G);c.currentOutputSnapshotRaw=b,c.currentOutputSnapshotResolved=ee,c.currentWriteId=SA(n),a.splice(a.indexOf(L),1),s=s.concat(eA(n.serverSyncTree_,c.path,ee,c.currentWriteId,c.applyLocally)),s=s.concat(Hn(n.serverSyncTree_,L,!0))}else f=!0,p="nodata",s=s.concat(Hn(n.serverSyncTree_,c.currentWriteId,!0))}Ln(n.eventQueue_,t,s),s=[],f&&(e[l].status=2,function(T){setTimeout(T,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(p),!1,null))))}mo(n,n.transactionQueueTree_);for(let l=0;l<r.length;l++)Fs(r[l]);zl(n,n.transactionQueueTree_)}function Hp(n,e){let t,r=n.transactionQueueTree_;for(t=J(e);t!==null&&Er(r)===void 0;)r=Wl(r,t),e=le(e),t=J(e);return r}function Kp(n,e){const t=[];return Qp(n,e,t),t.sort((r,s)=>r.order-s.order),t}function Qp(n,e,t){const r=Er(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);po(e,s=>{Qp(n,s,t)})}function mo(n,e){const t=Er(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,Up(e,t.length>0?t:void 0)}po(e,r=>{mo(n,r)})}function xA(n,e){const t=Bs(Hp(n,e)),r=Wl(n.transactionQueueTree_,e);return cA(r,s=>{ea(n,s)}),ea(n,r),qp(r,s=>{ea(n,s)}),t}function ea(n,e){const t=Er(e);if(t){const r=[];let s=[],i=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(O(i===a-1,"All SENT items should be at beginning of queue."),i=a,t[a].status=3,t[a].abortReason="set"):(O(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),s=s.concat(Hn(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&r.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Up(e,void 0):t.length=i+1,Ln(n.eventQueue_,Bs(e),s);for(let a=0;a<r.length;a++)Fs(r[a])}}/**
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
 */function DA(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function kA(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):rt(`Invalid query segment '${t}' in query '${n}'`)}return e}const Dh=function(n,e){const t=OA(n),r=t.namespace;t.domain==="firebase.com"&&Cn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Cn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||cw();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new vw(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new ce(t.pathString)}},OA=function(n){let e="",t="",r="",s="",i="",a=!0,l="https",c=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(s=DA(n.substring(f,p)));const T=kA(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(a=l==="https"||l==="wss",c=parseInt(e.substring(h+1),10)):h=e.length;const S=e.slice(0,h);if(S.toLowerCase()==="localhost")t="localhost";else if(S.split(".").length<=2)t=S;else{const b=e.indexOf(".");r=e.substring(0,b).toLowerCase(),t=e.substring(b+1),i=r}"ns"in T&&(i=T.ns)}return{host:e,port:c,domain:t,subdomain:r,secure:a,scheme:l,pathString:s,namespace:i}};/**
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
 */class Kl{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return Y(this._path)?null:lp(this._path)}get ref(){return new Tr(this._repo,this._path)}get _queryIdentifier(){const e=yh(this._queryParams),t=Pl(e);return t==="{}"?"default":t}get _queryObject(){return yh(this._queryParams)}isEqual(e){if(e=An(e),!(e instanceof Kl))return!1;const t=this._repo===e._repo,r=hp(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Hw(this._path)}}class Tr extends Kl{constructor(e,t){super(e,t,new kl,!1)}get parent(){const e=cp(this._path);return e===null?null:new Tr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}JI(Tr);ZI(Tr);/**
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
 */const LA="FIREBASE_DATABASE_EMULATOR_HOST",ka={};let MA=!1;function FA(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||Cn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=Dh(i,s),l=a.repoInfo,c;typeof process<"u"&&Zc&&(c=Zc[LA]),c?(i=`http://${c}?ns=${l.namespace}`,a=Dh(i,s),l=a.repoInfo):a.repoInfo.secure;const h=new Tw(n.name,n.options,e);_A("Invalid Firebase Database URL",a),Y(a.path)||Cn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=BA(l,n,h,new Ew(n,t));return new qA(f,n)}function UA(n,e){const t=ka[e];(!t||t[n.key]!==n)&&Cn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),bA(n),delete t[n.key]}function BA(n,e,t,r){let s=ka[e.name];s||(s={},ka[e.name]=s);let i=s[n.toURLString()];return i&&Cn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new IA(n,MA,t,r),s[n.toURLString()]=i,i}class qA{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tr(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cn("Cannot call "+e+" on a deleted database.")}}/**
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
 */function jA(n){sw(Gh),is(new Zn("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return FA(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),Wt(eh,th,n),Wt(eh,th,"esm2020")}/**
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
 */xt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};jA();export{G_ as a,YA as b,KA as c,QA as d,eR as e,WA as g,W_ as i,tR as o,ZA as s};
