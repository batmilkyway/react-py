(()=>{"use strict";__webpack_require__.gca=function(e){return e={}[e]||e,__webpack_require__.p+__webpack_require__.u(e)};const e=Symbol("Comlink.proxy"),t=Symbol("Comlink.endpoint"),n=Symbol("Comlink.releaseProxy"),r=Symbol("Comlink.thrown"),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,o=new Map([["proxy",{canHandle:t=>a(t)&&t[e],serialize(e){const{port1:t,port2:n}=new MessageChannel;return i(e,t),[n,[n]]},deserialize(e){return e.start(),c(e,[],t);var t}}],["throw",{canHandle:e=>a(e)&&r in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function i(t,n=self){n.addEventListener("message",(function a(o){if(!o||!o.data)return;const{id:u,type:c,path:l}=Object.assign({path:[]},o.data),h=(o.data.argumentList||[]).map(d);let y;try{const n=l.slice(0,-1).reduce(((e,t)=>e[t]),t),r=l.reduce(((e,t)=>e[t]),t);switch(c){case"GET":y=r;break;case"SET":n[l.slice(-1)[0]]=d(o.data.value),y=!0;break;case"APPLY":y=r.apply(n,h);break;case"CONSTRUCT":y=function(t){return Object.assign(t,{[e]:!0})}(new r(...h));break;case"ENDPOINT":{const{port1:e,port2:n}=new MessageChannel;i(t,n),y=function(e,t){return p.set(e,t),e}(e,[e])}break;case"RELEASE":y=void 0;break;default:return}}catch(m){y={value:m,[r]:0}}Promise.resolve(y).catch((e=>({value:e,[r]:0}))).then((e=>{const[t,r]=f(e);n.postMessage(Object.assign(Object.assign({},t),{id:u}),r),"RELEASE"===c&&(n.removeEventListener("message",a),s(n))}))})),n.start&&n.start()}function s(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function u(e){if(e)throw new Error("Proxy has been released and is not useable")}function c(e,r=[],a=function(){}){let o=!1;const i=new Proxy(a,{get(t,a){if(u(o),a===n)return()=>h(e,{type:"RELEASE",path:r.map((e=>e.toString()))}).then((()=>{s(e),o=!0}));if("then"===a){if(0===r.length)return{then:()=>i};const t=h(e,{type:"GET",path:r.map((e=>e.toString()))}).then(d);return t.then.bind(t)}return c(e,[...r,a])},set(t,n,a){u(o);const[i,s]=f(a);return h(e,{type:"SET",path:[...r,n].map((e=>e.toString())),value:i},s).then(d)},apply(n,a,i){u(o);const s=r[r.length-1];if(s===t)return h(e,{type:"ENDPOINT"}).then(d);if("bind"===s)return c(e,r.slice(0,-1));const[p,f]=l(i);return h(e,{type:"APPLY",path:r.map((e=>e.toString())),argumentList:p},f).then(d)},construct(t,n){u(o);const[a,i]=l(n);return h(e,{type:"CONSTRUCT",path:r.map((e=>e.toString())),argumentList:a},i).then(d)}});return i}function l(e){const t=e.map(f);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const p=new WeakMap;function f(e){for(const[t,n]of o)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},p.get(e)||[]]}function d(e){switch(e.type){case"HANDLER":return o.get(e.name).deserialize(e.value);case"RAW":return e.value}}function h(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}var y=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},m=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(u){s=[6,u],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};importScripts("https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"),i({init:function(e,t,n){return y(this,void 0,void 0,(function(){var r;return m(this,(function(a){switch(a.label){case 0:return r=self,[4,loadPyodide({stdout:function(n){return t(e,n)}})];case 1:return r.pyodide=a.sent(),n(self.pyodide.version),[2]}}))}))},run:function(e){return y(this,void 0,void 0,(function(){return m(this,(function(t){switch(t.label){case 0:return[4,self.pyodide.runPythonAsync(e)];case 1:return t.sent(),[2]}}))}))}})})();