(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r);function i(e){return a.a.createElement("div",null,"\ud83d\udcdd ",e.name,e.altName&&a.a.createElement("span",{className:"alt-name"}," (",e.altName,")"))}function o(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"\ud83d\udcc1 ",e.name,e.altName&&a.a.createElement("span",{className:"alt-name"}," (",e.altName,")")),a.a.createElement("div",{className:"folder-contents"},e.children))}function l(e){return a.a.createElement("div",{className:"display-file-structure"},e.children)}},107:function(e,t,n){"use strict";var r=n(0),a=n(108);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},108:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},136:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/tasks_json-7027d9625501d821d9da3e066d5eb7d8.txt"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return j})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return y}));var r=n(3),a=n(7),i=n(0),o=n.n(i),l=n(95),c=n(107),s=n(97),u=n(72),d=n.n(u),b=37,p=39;var m=function(e){var t=e.lazy,n=e.block,r=e.children,a=e.defaultValue,l=e.values,u=e.groupId,m=e.className,g=Object(c.a)(),f=g.tabGroupChoices,O=g.setTabGroupChoices,j=Object(i.useState)(a),h=j[0],v=j[1];if(null!=u){var y=f[u];null!=y&&y!==h&&l.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=u&&O(u,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},m)},l.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(s.a)("tabs__item",d.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(i.cloneElement)(r.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},r.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))};var g=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)},f=n(106),O={id:"getting-started",title:"Getting Started with Development",sidebar_label:"Getting Started w/ Dev"},j={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started with Development",description:"Required Repositories and File Structure for Development",source:"@site/docs/getting-started.mdx",slug:"/getting-started",permalink:"/imslogger-docs/docs/getting-started",editUrl:"https://github.com/IntegratedMillSystems/imslogger-docs/tree/master/docs/getting-started.mdx",version:"current",sidebar_label:"Getting Started w/ Dev",sidebar:"rootSidebar",previous:{title:"Installing on a Host Machine",permalink:"/imslogger-docs/docs/installing"},next:{title:"The Backend",permalink:"/imslogger-docs/docs/backend/"}},h=[{value:"Required Repositories and File Structure for Development",id:"required-repositories-and-file-structure-for-development",children:[]},{value:"Building and Running the project",id:"building-and-running-the-project",children:[{value:"Building",id:"building",children:[]},{value:"Running",id:"running",children:[]},{value:"VSCode Tasks",id:"vscode-tasks",children:[]}]}],v={rightToc:h};function y(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},v,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"required-repositories-and-file-structure-for-development"},"Required Repositories and File Structure for Development"),Object(l.b)("p",null,"Five repositories make up the source code of the IMS Logger."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/IntegratedMillSystems/imslogger-compose"}),"imslogger-compose")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/IntegratedMillSystems/imslogger-logger"}),"imslogger-logger")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/IntegratedMillSystems/imslogger-py"}),"imslogger-py")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/IntegratedMillSystems/pyconpro"}),"pyconpro")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/IntegratedMillSystems/imslogger-webinterface"}),"imslogger-webinterface"))),Object(l.b)("p",null,"The current file structure required for development is not ideal. Several repositories\nmust be cloned and in some cases renamed before the software can be built."),Object(l.b)("p",null,"Below is the required file structure. The source repository of each folder is given\nin parentheses."),Object(l.b)(f.a,{mdxType:"DisplayFileStructure"},Object(l.b)(f.c,{name:"Project Root",mdxType:"Folder"},Object(l.b)(f.c,{name:"compose_files",altName:"imslogger-compose",mdxType:"Folder"}),Object(l.b)(f.c,{name:"logger",altName:"imslogger-logger",mdxType:"Folder"},Object(l.b)(f.c,{name:"lib",mdxType:"Folder"},Object(l.b)(f.c,{name:"imslogger",altName:"imslogger-logger",mdxType:"Folder"}),Object(l.b)(f.c,{name:"pyconpro",altName:"pyconpro",mdxType:"Folder"}))),Object(l.b)(f.c,{name:"webinterface",altName:"imslogger-webinterface",mdxType:"Folder"}))),Object(l.b)("p",null,"Note that the ",Object(l.b)("em",{parentName:"p"},"lib")," folder has no source repository; instead it has two repositories\nnested inside of it. After cloning imslogger-logger, this lib folder must be created\n(it is in the ",Object(l.b)("em",{parentName:"p"},".gitignore")," file of the repository), and then the two nested repositories must be cloned\ninside of it."),Object(l.b)("h2",{id:"building-and-running-the-project"},"Building and Running the project"),Object(l.b)("p",null,"Building and running the project is fairly easy, but it's easy to forget."),Object(l.b)("h3",{id:"building"},"Building"),Object(l.b)("p",null,"To build the project, both the frontend and the backend (the docker images) must be\nbuilt."),Object(l.b)(m,{groupId:"env",defaultValue:"prod",values:[{label:"Production",value:"prod"},{label:"Development",value:"dev"}],mdxType:"Tabs"},Object(l.b)(g,{value:"prod",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Build the Frontend:")," run ",Object(l.b)("inlineCode",{parentName:"p"},"npm run build")," in the ",Object(l.b)("em",{parentName:"p"},"/webinterface/frontend")," directory"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Build the docker images:")," run the build script (",Object(l.b)("inlineCode",{parentName:"p"},"./build"),") in ",Object(l.b)("em",{parentName:"p"},"./compose_files/imslogger/"))),Object(l.b)(g,{value:"dev",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Build the Frontend:")," run ",Object(l.b)("inlineCode",{parentName:"p"},"npm run dev")," in the ",Object(l.b)("em",{parentName:"p"},"./webinterface/frontend")," directory."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Build the docker images:")," run the build script (",Object(l.b)("inlineCode",{parentName:"p"},"./build"),") in ",Object(l.b)("em",{parentName:"p"},"./compose_files/imslogger_dev/")))),Object(l.b)("h3",{id:"running"},"Running"),Object(l.b)(m,{groupId:"env",defaultValue:"prod",values:[{label:"Production",value:"prod"},{label:"Development",value:"dev"}],mdxType:"Tabs"},Object(l.b)(g,{value:"prod",mdxType:"TabItem"},Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"docker-compose up")," in the ",Object(l.b)("em",{parentName:"p"},"./compose_files/imslogger/")," directory.")),Object(l.b)(g,{value:"dev",mdxType:"TabItem"},Object(l.b)("p",null,"Run ",Object(l.b)("inlineCode",{parentName:"p"},"docker-compose up")," in the ",Object(l.b)("em",{parentName:"p"},"./compose_files/imslogger_dev/")," directory."))),Object(l.b)("h3",{id:"vscode-tasks"},"VSCode Tasks"),Object(l.b)("p",null,"Alternatively, you can use the VSCode tasks in ",Object(l.b)("a",{target:"_blank",href:n(136).default},"this")," file."))}y.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}}}]);