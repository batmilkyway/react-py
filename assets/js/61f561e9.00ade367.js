"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[417],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>s,withMDXComponents:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=l.createContext({}),m=function(e){return function(t){var n=s(t.components);return l.createElement(e,r({},t,{components:n}))}},s=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,p=m["".concat(o,".").concat(u)]||m[u]||f[u]||r;return n?l.createElement(p,i(i({ref:t},d),{},{components:n})):l.createElement(p,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9587:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var l=n(7294),a=n(6010);function r(e){const{items:t}=e,n=t.filter((e=>!e.hidden));return l.createElement("div",{className:"z-10 -mb-16 flex justify-end p-2"},l.createElement("div",{className:"rounded-md bg-white p-1 opacity-80 shadow-md hover:opacity-100"},l.createElement("span",{className:"isolate inline-flex rounded-md"},n.map(((e,t)=>l.createElement("button",{key:e.label,type:"button",onClick:e.onClick,disabled:e.disabled,className:(0,a.default)("relative inline-flex items-center border border-none border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-0",e.disabled?"opacity-50":"opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100",0===t&&"rounded-l-md",t===n.length-1&&"rounded-r-md")},l.createElement(e.icon,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),e.label))))))}},8633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>C,default:()=>O,frontMatter:()=>v,metadata:()=>E,toc:()=>k});var l=n(7462),a=n(7294),r=n(3905),o=n(1262),i=n(2949),c=n(3598),d=n(9587);const m=a.forwardRef((function({title:e,titleId:t,...n},l){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"}))}));const s=a.forwardRef((function({title:e,titleId:t,...n},l){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"}),a.createElement("path",{fillRule:"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z",clipRule:"evenodd"}))}));const u=a.forwardRef((function({title:e,titleId:t,...n},l){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},n),e?a.createElement("title",{id:t},e):null,a.createElement("path",{d:"M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z"}),a.createElement("path",{d:"M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z"}),a.createElement("path",{d:"M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z"}))}));var p=n(1193),f=n(1221),h=n(6207);const y={enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,highlightActiveLine:!1,showPrintMargin:!1},x=e=>{e.renderer.setScrollMargin(10,10,0,0),e.moveCursorTo(0,0)},b="def add(a, b):\n  result = a + b\n  return result",w="from utils import add\n\nprint(add(2, 3))";function g(){const[e,t]=(0,a.useState)(b),[l,r]=(0,a.useState)(w),[g,v]=(0,a.useState)(!1),[C,E]=(0,a.useState)(),{colorMode:N}=(0,i.useColorMode)(),{runPython:k,stdout:M,stderr:O,isLoading:P,isRunning:j,interruptExecution:S,writeFile:z,watchModules:T,unwatchModules:R}=(0,c.usePython)();function D(){k(l),E(void 0),v(!0)}function L(){S(),v(!1)}function I(){v(!1),t(b),r(w)}function A(){v(!1),z("utils.py",e),E("File written")}function B(){v(!1),T(["utils"]),E("Watching file")}function _(){v(!1),R(["utils"]),E("Not watching file")}return a.createElement("div",{className:"relative mb-10"},a.createElement(o.default,{fallback:a.createElement("div",null,"Loading...")},(()=>{const o=n(4981).default;return n(4007),n(2777),n(3783),n(2679),a.createElement("div",{className:"flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0"},a.createElement("div",{className:"flex-1"},a.createElement("div",{className:"relative flex justify-between"},a.createElement("h2",null,"utils.py"),a.createElement("div",{className:"absolute right-0 top-0 -m-2 -mt-3"},a.createElement(d.default,{items:[{label:"Write",icon:m,onClick:A},{label:"Watch",icon:s,onClick:B},{label:"Unwatch",icon:u,onClick:_}]}))),a.createElement(o,{value:e,mode:"python",name:"CodeBlock",fontSize:"0.9rem",className:"min-h-[4rem] overflow-clip rounded shadow-md",theme:"dark"===N?"idle_fingers":"textmate",onChange:e=>t(e),width:"100%",maxLines:1/0,onLoad:x,editorProps:{$blockScrolling:!0},setOptions:y})),a.createElement("div",{className:"flex-1"},a.createElement("div",{className:"relative flex justify-between"},a.createElement("h2",null,"main.py"),a.createElement("div",{className:"absolute right-0 top-0 -m-2 -mt-3"},a.createElement(d.default,{items:[{label:"Run",icon:p.default,onClick:D,disabled:P||j,hidden:j},{label:"Stop",icon:f.default,onClick:L,hidden:!j},{label:"Reset",icon:h.default,onClick:I,disabled:j}]}))),a.createElement(o,{value:l,mode:"python",name:"CodeBlock",fontSize:"0.9rem",className:"min-h-[4rem] overflow-clip rounded shadow-md",theme:"dark"===N?"idle_fingers":"textmate",onChange:e=>r(e),width:"100%",maxLines:1/0,onLoad:x,editorProps:{$blockScrolling:!0},setOptions:y})))})),C&&a.createElement("pre",{className:"mt-4 text-left text-blue-500"},a.createElement("code",null,C)),g&&a.createElement("pre",{className:"mt-4 text-left"},a.createElement("code",null,M),a.createElement("code",{className:"text-red-500"},O)))}const v={sidebar_position:6},C="Custom Modules",E={unversionedId:"examples/custom-modules",id:"examples/custom-modules",title:"Custom Modules",description:"By default, Python modules are cached. If you intend to make changes to an imported module, it needs to be watched and reloaded.",source:"@site/docs/examples/custom-modules.mdx",sourceDirName:"examples",slug:"/examples/custom-modules",permalink:"/react-py/docs/examples/custom-modules",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"File System",permalink:"/react-py/docs/examples/file-system"},next:{title:"Making API Calls",permalink:"/react-py/docs/examples/making-api-calls"}},N={},k=[],M={toc:k};function O(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,l.default)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"custom-modules"},"Custom Modules"),(0,r.mdx)("p",null,"By default, Python modules are cached. If you intend to make changes to an imported module, it needs to be watched and reloaded."),(0,r.mdx)("p",null,"Create a module using the file system APIs or write the file using Python, ",(0,r.mdx)("a",{parentName:"p",href:"file-system"},"examples here"),"."),(0,r.mdx)("p",null,"Then call ",(0,r.mdx)("inlineCode",{parentName:"p"},"watchModules()")," to automatically reload the module before running code. For more info, see the ",(0,r.mdx)("a",{parentName:"p",href:"../introduction/api-reference#watchModules"},"API reference docs"),"."),(0,r.mdx)("p",null,"The following example shows this in action. To try it out:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Click ",(0,r.mdx)("inlineCode",{parentName:"li"},"Write file")," which will call ",(0,r.mdx)("inlineCode",{parentName:"li"},"writeFile()")," and create ",(0,r.mdx)("inlineCode",{parentName:"li"},"utils.py")," with the code in the editor window"),(0,r.mdx)("li",{parentName:"ul"},"Run ",(0,r.mdx)("inlineCode",{parentName:"li"},"main.py")," by clicking ",(0,r.mdx)("inlineCode",{parentName:"li"},"Run")),(0,r.mdx)("li",{parentName:"ul"},"Make a change to ",(0,r.mdx)("inlineCode",{parentName:"li"},"utils.py")," and click ",(0,r.mdx)("inlineCode",{parentName:"li"},"Write file")," again, note that when you ",(0,r.mdx)("inlineCode",{parentName:"li"},"Run")," again, the imported module is unchanged"),(0,r.mdx)("li",{parentName:"ul"},"Click ",(0,r.mdx)("inlineCode",{parentName:"li"},"Watch")," which will call ",(0,r.mdx)("inlineCode",{parentName:"li"},"watchModules(['utils'])")," and then observe the module has been reloaded when you ",(0,r.mdx)("inlineCode",{parentName:"li"},"Run")," again"),(0,r.mdx)("li",{parentName:"ul"},"You will still need to click ",(0,r.mdx)("inlineCode",{parentName:"li"},"Write file")," again if you make any further changes"),(0,r.mdx)("li",{parentName:"ul"},"To no longer automatically reload the module, you can click ",(0,r.mdx)("inlineCode",{parentName:"li"},"Unwatch")," which will call ",(0,r.mdx)("inlineCode",{parentName:"li"},"unwatchModules(['utils'])"))),(0,r.mdx)(g,{mdxType:"CustomModuleExample"}),(0,r.mdx)("p",null,"You can find the source code for this example ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/elilambnz/react-py/blob/main/website/src/components/CustomModuleExample.tsx"},"here"),"."))}O.isMDXComponent=!0}}]);