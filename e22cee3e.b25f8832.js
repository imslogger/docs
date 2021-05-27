(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(92)),c={id:"readme",slug:"./",title:"PyConPro",sidebar_label:"Overview"},i={unversionedId:"backend/pyconpro/readme",id:"backend/pyconpro/readme",isDocsHomePage:!1,title:"PyConPro",description:"PyConPro is a python library that allows us to make multiple consumer connections",source:"@site/docs/backend/pyconpro/readme.mdx",slug:"/backend/pyconpro/",permalink:"/imslogger-docs/docs/backend/pyconpro/",editUrl:"https://github.com/IntegratedMillSystems/imslogger-docs/tree/master/docs/backend/pyconpro/readme.mdx",version:"current",sidebar_label:"Overview",sidebar:"backendSidebar",previous:{title:"The Backend",permalink:"/imslogger-docs/docs/backend/"},next:{title:"API Reference",permalink:"/imslogger-docs/docs/backend/pyconpro/api"}},l=[{value:"Usage Guide",id:"usage-guide",children:[]},{value:"Full Example",id:"full-example",children:[]},{value:"The Please Reset Error",id:"the-please-reset-error",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"PyConPro")," is a python library that allows us to make multiple consumer connections\nwith multiple PLCs. At some point we would also like to add a feature allowing\nproducer connections, but we don't know when that will happen."),Object(o.b)("p",null,"This library has three main classes: ",Object(o.b)("strong",{parentName:"p"},"Connection"),", ",Object(o.b)("strong",{parentName:"p"},"PLC"),", and ",Object(o.b)("strong",{parentName:"p"},"Consumer"),".\nEach of these are responsible for a different part of the Consumer/Producer protocol."),Object(o.b)("h2",{id:"usage-guide"},"Usage Guide"),Object(o.b)("p",null,"In order to start a connection with any PLC, an instance of the Connection class\nmust be created and then started."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"con = Connection()\ncon.Start()\n")),Object(o.b)("p",null,"Then, we can add a plc using the ",Object(o.b)("inlineCode",{parentName:"p"},"addPLC")," function."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'myPlc = con.addPLC("172.16.13.200", slot=0)\n')),Object(o.b)("p",null,"To start a Consumer/Producer, we first need to define the ",Object(o.b)("inlineCode",{parentName:"p"},"ConsumerHint"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'myHint = ConsumerHint(tag="test", datasize=6, rpi=1000, otrpi=1100)\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Set ",Object(o.b)("inlineCode",{parentName:"li"},"tag")," to the name of the tag you would like to log."),Object(o.b)("li",{parentName:"ul"},"Set ",Object(o.b)("inlineCode",{parentName:"li"},"datasize")," to the bytesize of the tag."),Object(o.b)("li",{parentName:"ul"},"Set ",Object(o.b)("inlineCode",{parentName:"li"},"rpi")," to your desired delay between data points (in milliseconds)."),Object(o.b)("li",{parentName:"ul"},"Set ",Object(o.b)("inlineCode",{parentName:"li"},"otrpi")," to a number slightly higher than you ",Object(o.b)("inlineCode",{parentName:"li"},"rpi"),". ",Object(o.b)("em",{parentName:"li"},"(More documentation needed)"))),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"datasize")," field must include an extra 2 bytes for the header."),Object(o.b)("p",{parentName:"div"},"I.e. if the tag has 4 bytes of data, set ",Object(o.b)("inlineCode",{parentName:"p"},"datasize")," to 6."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Common Issues")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Before logging, make sure the tag is configured to accept a Consumer/Producer connection."))),Object(o.b)("p",null,"We also need to provide our consumer a function to handle the data we recieve."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def handler(bytedata):\n  print(bytedata)\n")),Object(o.b)("p",null,"Now, we initialize and start the consumer."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"myConsumer = myPlc.addConsumer(myHint, handler)\nmyConsumer.Start()\n")),Object(o.b)("p",null,"You should get an output that looks something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"b'\\x00\\x00HB'\nb'\\x00\\x00HB'\nb'\\x00\\x00HB'\nb'\\x00\\x00HB'\nb'\\x00\\x00HB'\nb'\\x00\\x00HB'\n...\n")),Object(o.b)("p",null,"To stop the consumer, call ",Object(o.b)("inlineCode",{parentName:"p"},"myConsumer.Stop()"),"."),Object(o.b)("h2",{id:"full-example"},"Full Example"),Object(o.b)("p",null,"Here's a full example showing it's possible to log more than one tag at a time."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from pyconpro import Connection, ConsumerHint\nfrom time import sleep\n\ncon = Connection()\nmyplc = con.addPLC("172.16.13.200")\n\ndef handler1(data):\n    print("My first consumer: ", data)\n\ndef handler2(data):\n    print("My second consumer: ", data)\n\ncon.Start()\n\nmyhint = ConsumerHint(tag="test", datasize=6, rpi=1000, otrpi=1100)\nmyconsumer = myplc.addConsumer(myhint, handler1)\nmyconsumer.Start()\n\nsleep(0.3)\n\nmyhint2 = ConsumerHint(tag="test2", datasize=6, rpi=1000, otrpi=1100)\nmyconsumer2 = myplc.addConsumer(myhint2, handler2)\nmyconsumer2.Start()\n\ncon.Join()\ncon.Close()\n')),Object(o.b)("h2",{id:"the-please-reset-error"},"The Please Reset Error"),Object(o.b)("p",null,"If, after all consumers with a particular PLC are stopped, another consumer connection\nwith that PLC is started, a ",Object(o.b)("inlineCode",{parentName:"p"},"PleaseResetError")," may be thrown. This could occur for\ntwo reasons:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The PLC stopped listening"),Object(o.b)("li",{parentName:"ul"},"An unhandled part of the Consumer/Producer protocol was used. This particular\nissue can happen if a consumer is started to soon after all of the other consumers\nfor a particular PLC were stopped.")),Object(o.b)("p",null,"If either of these issues are encountered, just try to start the consumer again."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," this solution is abstracted away by the server."))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,i(i({ref:t},s),{},{components:n})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);