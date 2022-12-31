"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[831],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){return function(t){var n=m(t.components);return r.createElement(e,o({},t,{components:n}))}},m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,u=c["".concat(p,".").concat(d)]||c[d]||f[d]||o;return n?r.createElement(u,s(s({ref:t},l),{},{components:n})):r.createElement(u,s({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},p="Making API Calls",s={unversionedId:"examples/making-api-calls",id:"examples/making-api-calls",title:"Making API Calls",description:"Due to sockets being unavailable in Pyodide, packages such as requests are currently unsupported.",source:"@site/docs/examples/making-api-calls.md",sourceDirName:"examples",slug:"/examples/making-api-calls",permalink:"/react-py/docs/examples/making-api-calls",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Custom Modules",permalink:"/react-py/docs/examples/custom-modules"}},i={},l=[{value:"<code>GET</code>",id:"get",level:2},{value:"<code>POST</code>",id:"post",level:2},{value:"<code>PUT</code>",id:"put",level:2},{value:"<code>DELETE</code>",id:"delete",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.default)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"making-api-calls"},"Making API Calls"),(0,a.mdx)("p",null,"Due to sockets being unavailable in Pyodide, packages such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"requests")," are ",(0,a.mdx)("a",{parentName:"p",href:"https://pyodide.org/en/stable/project/roadmap.html#write-http-client-in-terms-of-web-apis"},"currently unsupported"),"."),(0,a.mdx)("p",null,"The following methods to make synchronous API calls are made available using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"react_py.http")," module. These methods return the request response as a string."),(0,a.mdx)("p",null,"For more info about the ",(0,a.mdx)("inlineCode",{parentName:"p"},"react_py.http")," module, see the ",(0,a.mdx)("a",{parentName:"p",href:"../introduction/api-reference#http"},"API reference docs"),"."),(0,a.mdx)("p",null,"Try it out:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"from react_py.http import get\nimport json\n\nresponse = get('https://api.github.com/repos/elilambnz/react-py')\ndata = json.loads(response)\n\nprint(\"*\" * 50)\nprint(f\"Repository: {data['full_name']}\")\nprint(f\"Owner: {data['owner']['login']}\")\nprint(f\"Number of stars: {data['stargazers_count']} \u2b50\ufe0f\")\nprint(f\"Number of forks: {data['forks_count']} \ud83c\udf74\")\nprint(f\"Number of watchers: {data['watchers_count']} \ud83d\udc40\")\nprint(\"*\" * 50)\n")),(0,a.mdx)("h2",{id:"get"},(0,a.mdx)("inlineCode",{parentName:"h2"},"GET")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"from react_py.http import get\nimport json\n\nresponse = get('https://reqres.in/api/users/2')\ndata = json.loads(response)\n\nprint(data)\n")),(0,a.mdx)("h2",{id:"post"},(0,a.mdx)("inlineCode",{parentName:"h2"},"POST")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'from react_py.http import post\nimport json\n\nresponse = post(\'https://reqres.in/api/users\', { "name": "morpheus", "job": "leader" })\ndata = json.loads(response)\n\nprint(data)\n')),(0,a.mdx)("h2",{id:"put"},(0,a.mdx)("inlineCode",{parentName:"h2"},"PUT")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'from react_py.http import put\nimport json\n\nresponse = put(\'https://reqres.in/api/users/2\', { "name": "morpheus", "job": "zion resident" })\ndata = json.loads(response)\n\nprint(data)\n')),(0,a.mdx)("h2",{id:"delete"},(0,a.mdx)("inlineCode",{parentName:"h2"},"DELETE")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"from react_py.http import delete\nimport json\n\nresponse = delete('https://reqres.in/api/users/2')\n\nif response == \"\":\n  print ('Success')\n")))}m.isMDXComponent=!0}}]);