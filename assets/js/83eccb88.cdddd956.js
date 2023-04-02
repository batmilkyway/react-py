"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[538],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,u=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(u,l(l({ref:t},c),{},{components:n})):r.createElement(u,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8072:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(7294),a=n(1262),o=n(2949),i=n(3598),l=n(9587),s=n(1451),c=n(6533),p=n(4967);const d={enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,highlightActiveLine:!1,showPrintMargin:!1},m=e=>{e.renderer.setScrollMargin(10,10,0,0),e.moveCursorTo(0,0)};function u(e){const{code:t,packages:u}=e,[f,g]=(0,r.useState)(t.trimEnd()),[h,y]=(0,r.useState)(!1);(0,r.useEffect)((()=>{g(t.trimEnd()),y(!1)}),[t]);const{colorMode:b}=(0,o.useColorMode)(),{runPython:x,stdout:v,stderr:k,isLoading:w,isRunning:P,interruptExecution:E}=(0,i.usePython)({packages:u});return r.createElement("div",{className:"relative mb-10 flex flex-col"},r.createElement(l.default,{items:[{label:"Run",icon:s,onClick:function(){x(f),y(!0)},disabled:w||P,hidden:P},{label:"Stop",icon:c,onClick:function(){E(),y(!1)},hidden:!P},{label:"Reset",icon:p,onClick:function(){y(!1),g(t.trimEnd())},disabled:P}]}),r.createElement(a.default,{fallback:r.createElement("div",null,"Loading...")},(()=>{const e=n(4981).default;return n(4007),n(2777),n(3783),n(2679),r.createElement(e,{value:f,mode:"python",name:"CodeBlock",fontSize:"0.9rem",className:"min-h-[4rem] overflow-clip rounded shadow-md",theme:"dark"===b?"idle_fingers":"textmate",onChange:e=>g(e),width:"100%",maxLines:1/0,onLoad:m,editorProps:{$blockScrolling:!0},setOptions:d})})),h&&r.createElement("pre",{className:"mt-4 text-left"},r.createElement("code",null,v),r.createElement("code",{className:"text-red-500"},k)))}},9587:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(7294),a=n(6010);function o(e){const{items:t}=e,n=t.filter((e=>!e.hidden));return r.createElement("div",{className:"pointer-events-none z-10 -mb-16 flex justify-end p-2"},r.createElement("div",{className:"pointer-events-auto rounded-md bg-white p-1 opacity-80 shadow-md hover:opacity-100"},r.createElement("span",{className:"isolate inline-flex rounded-md"},n.map(((e,t)=>r.createElement("button",{key:e.label,type:"button",onClick:e.onClick,disabled:e.disabled,className:(0,a.default)("relative inline-flex items-center border border-none border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-0",e.disabled?"opacity-50 hover:cursor-not-allowed":"opacity-75 hover:cursor-pointer hover:bg-gray-50 hover:opacity-100",0===t&&"rounded-l-md",t===n.length-1&&"rounded-r-md")},r.createElement(e.icon,{className:"-ml-1 mr-2 h-5 w-5 text-gray-400","aria-hidden":"true"}),e.label))))))}},8234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,micropipPackagesCode:()=>m,officialPackagesCode:()=>d,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(8072);const i={sidebar_position:4},l="Using Packages",s={unversionedId:"examples/using-packages",id:"examples/using-packages",title:"Using Packages",description:"Packages can be installed using the following Packages object and can be imported either globally through the provider, or per instance. For props, see the API reference docs.",source:"@site/docs/examples/using-packages.mdx",sourceDirName:"examples",slug:"/examples/using-packages",permalink:"/react-py/docs/examples/using-packages",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Interrupting Execution",permalink:"/react-py/docs/examples/interrupting-execution"},next:{title:"File System",permalink:"/react-py/docs/examples/file-system"}},c={},p=[{value:"Python standard library",id:"python-standard-library",level:2},{value:"Pyodide official packages",id:"pyodide-official-packages",level:2},{value:"Installing packages with micropip",id:"installing-packages-with-micropip",level:2}],d="from asciitree import LeftAligned\nfrom collections import OrderedDict as OD\n\ntree = {\n    'asciitree': OD([\n        ('sometimes',\n            {'you': {}}),\n        ('just',\n            {'want': OD([\n                ('to', {}),\n                ('draw', {}),\n            ])}),\n        ('trees', {}),\n        ('in', {\n            'your': {\n                'browser': {}\n            }\n        })\n    ])\n}\n\ntr = LeftAligned()\nprint(tr(tree))\n",m='from cowsay import cowsay\n\nmessage = """\nThe most remarkable thing about my mother is that for thirty years she served\nthe family nothing but leftovers.  The original meal has never been found.\n\t\t-- Calvin Trillin\n""".strip()\nprint(cowsay(message))\n',u={toc:p,officialPackagesCode:d,micropipPackagesCode:m},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.mdx)(f,(0,r.default)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"using-packages"},"Using Packages"),(0,a.mdx)("p",null,"Packages can be installed using the following ",(0,a.mdx)("inlineCode",{parentName:"p"},"Packages")," object and can be imported either globally through the provider, or per instance. For props, see the ",(0,a.mdx)("a",{parentName:"p",href:"../introduction/api-reference"},"API reference docs"),"."),(0,a.mdx)("p",null,"Example importing packages globally:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"import { PythonProvider } from 'react-py'\n\nfunction App() {\n  const packages = {\n    official: ['asciitree'],\n    micropip: ['python-cowsay'],\n  }\n\n  return (\n    <PythonProvider packages={packages}>\n      <Codeblock />\n    </PythonProvider>\n  )\n}\n\n...\n")),(0,a.mdx)("p",null,"Example importing packages per instance:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx"},"import { usePython } from 'react-py'\n\nconst packages = {\n  official: ['asciitree'],\n  micropip: ['python-cowsay'],\n}\n\nfunction Codeblock() {\n  const { runPython, ... } = usePython(packages)\n\n  ...\n}\n")),(0,a.mdx)("h2",{id:"python-standard-library"},"Python standard library"),(0,a.mdx)("p",null,"The Python standard library is available without needing to install any packages, ",(0,a.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/library"},"view the full list here"),"."),(0,a.mdx)("p",null,"Example using ",(0,a.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/library/uuid.html"},"uuid"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},"import uuid\n\nprint(uuid.uuid4())\n")),(0,a.mdx)("h2",{id:"pyodide-official-packages"},"Pyodide official packages"),(0,a.mdx)("p",null,"There is a list of official packages included with Pyodide, ",(0,a.mdx)("a",{parentName:"p",href:"https://pyodide.org/en/stable/usage/packages-in-pyodide.html"},"view the full list here"),"."),(0,a.mdx)("p",null,"Example using ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/mbr/asciitree"},"asciitree"),"."),(0,a.mdx)(o.default,{code:d,packages:{official:["asciitree"]},mdxType:"CodeEditor"}),(0,a.mdx)("h2",{id:"installing-packages-with-micropip"},"Installing packages with micropip"),(0,a.mdx)("p",null,"Micropip can be used to install pure Python packages with wheels available on PyPI ",(0,a.mdx)("a",{parentName:"p",href:"https://pyodide.org/en/stable/usage/loading-packages.html#installing-wheels-from-arbitrary-urls"},"or from other URLs"),"."),(0,a.mdx)("p",null,"Example using ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/James-Ansley/cowsay"},"python-cowsay"),"."),(0,a.mdx)(o.default,{code:m,packages:{micropip:["python-cowsay"]},mdxType:"CodeEditor"}))}g.isMDXComponent=!0}}]);