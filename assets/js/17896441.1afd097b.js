"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[918],{8072:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7294),o=r(1262),a=r(2949),i=r(632),l=r(6010);const c={enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,highlightActiveLine:!1,showPrintMargin:!1},s=e=>{e.renderer.setScrollMargin(10,10,0,0),e.moveCursorTo(0,0)};function d(e){const{code:t}=e,[d,m]=(0,n.useState)(t.trimEnd()),[u,p]=(0,n.useState)(!1),{colorMode:y}=(0,a.I)();return(0,n.useEffect)((()=>{m(t.trimEnd()),p(!1)}),[t]),n.createElement("div",{className:"relative mb-10"},n.createElement(o.Z,{fallback:n.createElement("div",null,"Loading...")},(()=>{const e=r(4981).ZP;return r(4007),r(2777),r(3783),r(2679),n.createElement(e,{value:d,mode:"python",name:"CodeBlock",fontSize:"0.9rem",className:"overflow-clip rounded shadow-md",theme:"dark"===y?"idle_fingers":"textmate",onChange:e=>m(e),width:"100%",maxLines:1/0,onLoad:s,editorProps:{$blockScrolling:!0},setOptions:c})})),n.createElement(o.Z,{fallback:n.createElement("div",null,"Loading...")},(()=>{const{runPython:e,stdout:r,stderr:o,isLoading:a,isRunning:c,interruptExecution:s}=(0,i.s)();return n.createElement(n.Fragment,null,n.createElement("span",{className:"absolute top-2 right-2 z-10 inline-flex rounded-md shadow-sm"},c?n.createElement("button",{onClick:function(){p(!1),s()},type:"button",className:"relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100"},"Stop"):n.createElement("button",{onClick:function(){p(!0),e(d)},type:"button",disabled:a,className:(0,l.Z)("relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700",a?"opacity-50":"opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100")},"Run"),n.createElement("button",{onClick:function(){p(!1),m(t.trimEnd())},type:"button",disabled:c,className:(0,l.Z)("relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700",c?"opacity-50":"opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100")},"Reset")),u&&n.createElement("pre",{className:"mt-4 text-left"},n.createElement("code",null,r),n.createElement("code",{className:"text-red-500"},o)))})))}},8573:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7462),o=r(7294),a=r(2389),i=r(1170),l=r(5864),c=r(8072);function s(e){let{children:t,...r}=e;const s=(0,a.Z)(),d=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t);if("language-python"===r.className)return o.createElement(c.Z,{code:d});{const e="string"==typeof d?l.Z:i.Z;return o.createElement(e,(0,n.Z)({key:String(s)},r),d)}}}}]);