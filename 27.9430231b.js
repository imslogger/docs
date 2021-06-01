(window.webpackJsonp=window.webpackJsonp||[]).push([[27,28],{119:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(109);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},133:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},134:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(95),l=n(22),c=n(25),i=n(109),s=n(3),u=n(7),p=n(97),m=n(96),d=n(106),b=n(122),f=n(123),y=n(121),h=n(100),g=n(102),v=n(124),j=n(64),k=n.n(j);var O=function e(t,n){return"link"===t.type?Object(m.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function E(e){var t,n,o,l=e.item,c=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=l.items,f=l.label,y=O(l,m),h=(n=y,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!y&&l.collapsed)})),v=g[0],j=g[1],E=Object(a.useRef)(null),C=Object(a.useState)(void 0),x=C[0],w=C[1],P=function(e){var t;void 0===e&&(e=!0),w(e?(null===(t=E.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){y&&!h&&v&&j(!1)}),[y,h,v]);var T=Object(a.useCallback)((function(e){e.preventDefault(),x||P(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[x]);return 0===b.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&y},t[k.a.menuLinkText]=!i,t)),onClick:i?T:void 0,href:i?"#!":void 0},d),f),r.a.createElement("ul",{className:"menu__list",ref:E,style:{height:x},onTransitionEnd:function(){v||P(!1)}},b.map((function(e){return r.a.createElement(N,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:i,activePath:m})}))))}function C(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=t.href,c=t.label,i=O(t,a);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(h.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:l},Object(g.a)(l)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function N(e){switch(e.item.type){case"category":return r.a.createElement(E,e);case"link":default:return r.a.createElement(C,e)}}var x=function(e){var t,n,o=e.path,l=e.sidebar,c=e.sidebarCollapsible,i=void 0===c||c,s=e.onCollapse,u=e.isHidden,h=Object(a.useState)(!1),g=h[0],j=h[1],O=Object(m.useThemeConfig)(),E=O.navbar.hideOnScroll,C=O.hideableSidebar,x=Object(d.a)().isAnnouncementBarClosed,w=Object(y.a)().scrollY;Object(b.a)(g);var P=Object(f.a)();return Object(a.useEffect)((function(){P===f.b.desktop&&j(!1)}),[P]),r.a.createElement("div",{className:Object(p.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=E,t[k.a.sidebarHidden]=u,t))},E&&r.a.createElement(v.a,{tabIndex:-1,className:k.a.sidebarLogo}),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive","thin-scrollbar",k.a.menu,(n={"menu--show":g},n[k.a.menuWithAnnouncementBar]=!x&&0===w,n))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!g)}},g?r.a.createElement("span",{className:Object(p.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(N,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:i,activePath:o})})))),C&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(p.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:s}))},w={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},P={Prism:n(23).a,theme:w};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var _=/\r\n|\r|\n/,D=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},I=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},L=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=S({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=S({},n,{backgroundColor:null}),r};function M(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var B=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?L(e.theme,e.language):void 0;return t.themeDict=n})),T(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=S({},M(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?S({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),T(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),T(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=S({},M(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?S({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],p=n[l][o];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=I(u,p.type),p.alias&&(u=I(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(_),d=m.length;c.push({types:u,content:m[0]});for(var b=1;b<d;b++)D(c),i.push(c=[]),c.push({types:u,content:m[b]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return D(c),i}(void 0!==l?t.tokenize(a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),R=n(133),A=n.n(R),W=n(134),F=n.n(W),H={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},$=n(118),z=function(){var e=Object(m.useThemeConfig)().prism,t=Object($.a)().isDarkTheme,n=e.theme||H,a=e.darkTheme||n;return t?a:n},J=n(65),K=n.n(J),U=/{([\d,-]+)}/,V=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},X=/(?:title=")(.*)(?:")/,Y=function(e){var t=e.children,n=e.className,o=e.metastring,l=Object(m.useThemeConfig)().prism,c=Object(a.useState)(!1),i=c[0],u=c[1],d=Object(a.useState)(!1),b=d[0],f=d[1];Object(a.useEffect)((function(){f(!0)}),[]);var y=Object(a.useRef)(null),h=[],g="",v=z();if(Array.isArray(t)&&(t=t.join("")),o&&U.test(o)){var j=o.match(U)[1];h=F()(j).filter((function(e){return e>0}))}o&&X.test(o)&&(g=o.match(X)[1]);var k=n&&n.replace(/language-/,"");!k&&l.defaultLanguage&&(k=l.defaultLanguage);var O=t.replace(/\n$/,"");if(0===h.length&&void 0!==k){for(var E,C="",N=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return V(["js","jsBlock"]);case"jsx":case"tsx":return V(["js","jsBlock","jsx"]);case"html":return V(["js","jsBlock","html"]);case"python":case"py":return V(["python"]);default:return V()}}(k),x=t.replace(/\n$/,"").split("\n"),w=0;w<x.length;){var T=w+1,S=x[w].match(N);if(null!==S){switch(S.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":C+=T+",";break;case"highlight-start":E=T;break;case"highlight-end":C+=E+"-"+(T-1)+","}x.splice(w,1)}else w+=1}h=F()(C),O=x.join("\n")}var _=function(){A()(O),u(!0),setTimeout((function(){return u(!1)}),2e3)};return r.a.createElement(B,Object(s.a)({},P,{key:String(b),theme:v,code:O,language:k}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement("div",{style:a,className:K.a.codeBlockTitle},g),r.a.createElement("div",{className:K.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(p.a)(n,K.a.codeBlock,"thin-scrollbar",(t={},t[K.a.codeBlockWithTitle]=g,t))},r.a.createElement("div",{className:K.a.codeBlockLines,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return h.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},c({token:e,key:t})))})))})))),r.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(p.a)(K.a.copyButton),onClick:_},i?"Copied":"Copy")))}))},q=(n(66),n(67)),G=n.n(q),Q=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),l=Object(m.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(n={},n[G.a.enhancedAnchor]=!l,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},Z=n(68),ee=n.n(Z),te={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(Y,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(h.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:ee.a.mdxCodeBlock},e))},h1:Q("h1"),h2:Q("h2"),h3:Q("h3"),h4:Q("h4"),h5:Q("h5"),h6:Q("h6")},ne=n(119),ae=n(101),re=n(69),oe=n.n(re);function le(e){var t,n,c,s,u=e.currentDocRoute,d=e.versionMetadata,b=e.children,f=Object(l.default)(),y=f.siteConfig,h=f.isClient,g=d.pluginId,v=d.permalinkToSidebar,j=d.docsSidebars,k=d.version,O=v[u.path],E=j[O],C=Object(a.useState)(!1),N=C[0],w=C[1],P=Object(a.useState)(!1),T=P[0],S=P[1],_=Object(a.useCallback)((function(){T&&S(!1),w(!N)}),[T]);return r.a.createElement(i.a,{key:h,searchMetadatas:{version:k,tag:Object(m.docVersionSearchTag)(g,k)}},r.a.createElement("div",{className:oe.a.docPage},E&&r.a.createElement("div",{className:Object(p.a)(oe.a.docSidebarContainer,(t={},t[oe.a.docSidebarContainerHidden]=N,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(oe.a.docSidebarContainer)&&N&&S(!0)},role:"complementary"},r.a.createElement(x,{key:O,sidebar:E,path:u.path,sidebarCollapsible:null===(n=null===(c=y.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===n||n,onCollapse:_,isHidden:T}),T&&r.a.createElement("div",{className:oe.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:_,onClick:_})),r.a.createElement("main",{className:oe.a.docMainContainer},r.a.createElement("div",{className:Object(p.a)("container padding-vert--lg",oe.a.docItemWrapper,(s={},s[oe.a.docItemWrapperEnhanced]=N,s))},r.a.createElement(o.a,{components:te},b)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(ae.matchPath)(a.pathname,e)}));return o?r.a.createElement(le,{currentDocRoute:o,versionMetadata:n},Object(c.a)(t)):r.a.createElement(ne.default,e)}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);