/*! For license information please see 7db4832d901f4d28a6866efb24967f16ab7aef67-1a2a49b1318ccd0ae1ad.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"6VGE":function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyAeP_Ivy3U39pBLv8FkX6I-263guAoeLaU","authDomain":"vote-younglondon-ca.firebaseapp.com","databaseURL":"https://vote-younglondon-ca.firebaseio.com","projectId":"vote-younglondon-ca","storageBucket":"vote-younglondon-ca.appspot.com","messagingSenderId":"601639762004","appId":"1:601639762004:web:f06c36448e1cb48f3a15c1","measurementId":"G-LNVKE0TYJ0"}')},"8+s/":function(e,t,n){"use strict";var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",c),p}}},VvBc:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("nKUr"),o=n("q1tI"),i=n("YwZP"),a=n("vOnD"),c=n("9Sct"),s=Object(a.a)({"@font-face":{fontFamily:"lyac",src:"url('/fonts/lyac.otf'); url('/fonts/lyac.otf') format(\"ttf\")"},dl:{marginBottom:"1rem"},h1:{marginBottom:"0"},h2:{marginBottom:"0"},h3:{marginBottom:"0"},h4:{marginBottom:"0"},h5:{marginBottom:"0"},h6:{marginBottom:"0"},ol:{marginBottom:"1rem"},p:{marginBottom:"1rem"},pre:{MsOverflowStyle:"scrollbar",flex:1},ul:{marginBottom:"1rem"},address:{fontStyle:"normal"},body:{margin:"0",fontFamily:"lyac",color:c.a.DEFAULT_COLOR,backgroundColor:c.a.BACKGROUND_COLOR},caption:{paddingTop:".75rem",paddingBottom:".75rem",color:"#868e96",captionSide:"bottom"},button:{WebkitAppearance:"button"},hr:{boxSizing:"content-box",height:"0"},input:{margin:"0",fontFamily:"inherit",fontSize:"inherit",lineHeight:"inherit"},textarea:{resize:"vertical"},div:{display:"flex"},article:{display:"block"},aside:{display:"block"},dialog:{display:"block"},figcaption:{display:"block"},figure:{margin:"0 0 1rem"},footer:{display:"block"},header:{display:"block"},hgroup:{display:"block"},legend:{width:"100%",maxWidth:"100%",padding:"0",fontSize:"1.5rem",color:"inherit",whiteSpace:"normal"},main:{display:"block"},nav:{display:"block"},section:{display:"block"},dd:{marginLeft:"0"},label:{MsTouchAction:"manipulation",touchAction:"manipulation"},progress:{verticalAlign:"baseline"},sub:{bottom:"-.25em"},sup:{top:"-.5em"},output:{display:"inline-block"},after:{boxSizing:"border-box"},before:{boxSizing:"border-box"},html:{fontFamily:"sans-serif",lineHeight:"1.15",WebkitTextSizeAdjust:"100%",MsTextSizeAdjust:"100%",MsOverflowStyle:"scrollbar",WebkitTapHighlightColor:"transparent"},ms_viewport:{width:"device-width"},tabindex___1___focus:{outline:"0!important"},abbr_data_original_title:{WebkitTextDecoration:"none dotted",textDecoration:"none dotted",cursor:"help",borderBottom:"0"},abbr_title:{WebkitTextDecoration:"none dotted",textDecoration:"none dotted",cursor:"help",borderBottom:"0"},ol_ol:{marginBottom:"0"},ol_ul:{marginBottom:"0"},ul_ol:{marginBottom:"0"},ul_ul:{marginBottom:"0"},dt:{fontWeight:"700"},blockquote:{margin:"0 0 1rem"},dfn:{fontStyle:"italic"},b:{fontWeight:"bolder"},strong:{fontWeight:"bolder"},small:{fontSize:"80%"},a:{MsTouchAction:"manipulation",touchAction:"manipulation"},a_hover:{textDecoration:"none"},a_not__href___not__tabindex:{textDecoration:"none"},a_not__href___not__tabindex___focus:{outline:"0"},a_not__href___not__tabindex___hover:{textDecoration:"none"},code:{fontFamily:"monospace,monospace",fontSize:"1em"},kbd:{fontFamily:"monospace,monospace",fontSize:"1em"},samp:{fontFamily:"monospace,monospace",fontSize:"1em"},img:{verticalAlign:"middle",borderStyle:"none"},svg_not__root:{overflow:"hidden"},role_button:{MsTouchAction:"manipulation",touchAction:"manipulation"},area:{MsTouchAction:"manipulation",touchAction:"manipulation"},input_not__type_range:{MsTouchAction:"manipulation",touchAction:"manipulation"},select:{textTransform:"none"},summary:{display:"list-item"},table:{borderCollapse:"collapse"},th:{textAlign:"inherit"},button_focus:{outline:"-webkit-focus-ring-color auto 5px"},optgroup:{margin:"0",fontFamily:"inherit",fontSize:"inherit",lineHeight:"inherit"},type_reset:{WebkitAppearance:"button"},type_submit:{WebkitAppearance:"button"},html__type_button:{WebkitAppearance:"button"},type_button____moz_focus_inner:{padding:"0",borderStyle:"none"},type_reset____moz_focus_inner:{padding:"0",borderStyle:"none"},type_submit____moz_focus_inner:{padding:"0",borderStyle:"none"},button___moz_focus_inner:{padding:"0",borderStyle:"none"},input_type_checkbox:{boxSizing:"border-box",padding:"0"},input_type_radio:{boxSizing:"border-box",padding:"0"},input_type_date:{WebkitAppearance:"listbox"},input_type_datetime_local:{WebkitAppearance:"listbox"},input_type_month:{WebkitAppearance:"listbox"},input_type_time:{WebkitAppearance:"listbox"},fieldset:{minWidth:"0",padding:"0",margin:"0",border:"0"},type_number____webkit_inner_spin_button:{height:"auto"},type_number____webkit_outer_spin_button:{height:"auto"},type_search:{outlineOffset:"-2px",WebkitAppearance:"none"},type_search____webkit_search_cancel_button:{WebkitAppearance:"none"},type_search____webkit_search_decoration:{WebkitAppearance:"none"},webkit_file_upload_button:{font:"inherit",WebkitAppearance:"button"},template:{display:"none"},hidden:{display:"none!important"}}),u=n("qhky"),l=n("xW4G"),p=n("/XCn"),f=function(e){var t=e.page,n=e.crawl,a=Object(i.useLocation)(),c=a.origin,s=void 0===c?"https://vote.younglondon.ca":c,f=a.pathname;return Object(o.useEffect)((function(){"https://vote.younglondon.ca"===s&&Object(l.b)().logEvent("page_view")}),[]),Object(r.jsxs)(u.a,{children:[Object(r.jsx)("html",{lang:Object(p.a)("active-lang")}),Object(r.jsx)("base",{href:s}),Object(r.jsx)("title",{children:Object(p.a)(t+"-seo-title")}),Object(r.jsx)("meta",{name:"title",content:Object(p.a)(t+"-seo-title")}),Object(r.jsx)("meta",{name:"description",content:Object(p.a)(t+"-seo-description")}),Object(r.jsx)("link",{rel:"canonical",href:"https://vote.younglondon.ca"+f}),Object(r.jsx)("meta",{name:"robots",content:n?"index, follow":"noindex, follow"}),Object(r.jsx)("meta",{name:"keywords",content:"Young London, LYAC, Election, Vote"}),Object(r.jsx)("meta",{name:"author",content:"Young London"}),Object(r.jsx)("meta",{name:"publisher",content:"Young London"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),Object(r.jsx)("meta",{property:"og:type",content:"website"}),Object(r.jsx)("meta",{property:"og:url",content:"https://vote.younglondon.ca"+f}),Object(r.jsx)("meta",{property:"og:title",content:Object(p.a)(t+"-seo-title")}),Object(r.jsx)("meta",{property:"og:description",content:Object(p.a)(t+"-seo-description")}),Object(r.jsx)("meta",{property:"og:image",content:"https://vote.younglondon.ca/social/og-image.jpg"}),Object(r.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(r.jsx)("meta",{property:"twitter:url",content:"https://vote.younglondon.ca"+f}),Object(r.jsx)("meta",{property:"twitter:title",content:Object(p.a)(t+"-seo-title")}),Object(r.jsx)("meta",{property:"twitter:description",content:Object(p.a)(t+"-seo-description")}),Object(r.jsx)("meta",{property:"twitter:image",content:"https://vote.younglondon.ca/social/og-image.jpg"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/favicons/apple-icon-57x57.png"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/favicons/apple-icon-60x60.png"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/favicons/apple-icon-72x72.png"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/favicons/apple-icon-76x76.png"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/favicons/apple-icon-114x114.png"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/favicons/apple-icon-120x120.png"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/favicons/apple-icon-144x144.png"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/favicons/apple-icon-152x152.png"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicons/apple-icon-180x180.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicons/android-icon-192x192.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicons/favicon-32x32.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicons/favicon-96x96.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicons/favicon-16x16.png"}),Object(r.jsx)("link",{rel:"manifest",href:"/favicons/manifest.json"}),Object(r.jsx)("meta",{name:"msapplication-TileColor",content:"#6039A9"}),Object(r.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),Object(r.jsx)("meta",{name:"theme-color",content:"#6039A9"})]})},d=Object(a.b)("svg").withConfig({displayName:"LoadingSpinnerstyle__Spinner",componentId:"sc-196rix2-0"})({margin:"auto",viewBox:"0 0 50 50",animation:"rotate 2s linear infinite",width:50,height:50,"@keyframes rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes dash":{"0%":{strokeDasharray:"1, 150",strokeDashoffset:"0"},"50%":{strokeDasharray:"90, 150",strokeDashoffset:-35},"100%":{strokeDasharray:"90, 150",strokeDashoffset:-124}}}),m=Object(a.b)("circle").withConfig({displayName:"LoadingSpinnerstyle__Circle",componentId:"sc-196rix2-1"})({stroke:c.a.PRIMARY_COLOR,strokeLinecap:"round",animation:"dash 1.5s ease-in-out infinite",cx:25,cy:25,r:20,fill:"none",strokeWidth:4}),b=function(){return Object(r.jsx)(d,{children:Object(r.jsx)(m,{})})},h=Object(a.b)("div").withConfig({displayName:"PageLayoutstyle__PageLayout",componentId:"sc-15snni5-0"})({width:"100vw",minWidth:300,height:"100%",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"stretch",background:c.a.BACKGROUND_COLOR,overflowX:"hidden"}),y=Object(a.b)("main").withConfig({displayName:"PageLayoutstyle__Main",componentId:"sc-15snni5-1"})((function(e){return Object.assign({boxSizing:"border-box",position:"relative",width:"100%",margin:"auto",maxWidth:c.a.LARGE_VIEW,flex:1,display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"flex-start",paddingRight:15,paddingLeft:15},e.style)})),g=function(e){var t=e.children,n=e.page,a=e.crawl,c=e.style,u=void 0===c?{}:c,l=Object(o.useState)("pending"),p=l[0],d=l[1];return Object(o.useEffect)((function(){var e=(new Date).getTime(),t=new Date("November 01, 2020 00:00:00").getTime(),n=new Date("November 09, 2020 00:00:00").getTime();d(e>t&&e<n?"open":"closed")}),[]),Object(r.jsxs)(h,{children:[Object(r.jsx)(s,{}),Object(r.jsx)(f,{page:n,crawl:a}),"pending"===p&&Object(r.jsx)(b,{}),"open"===p&&Object(r.jsx)(y,{style:u,children:t}),"closed"===p&&Object(r.jsx)(i.Redirect,{to:"/closed"})]})}},Wcq6:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(n("wj3C"));o.default.registerVersion("firebase","7.23.0","app"),e.exports=o.default},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(s=c;0!=s--;)if(!e(t[s],a[s]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!e(s.value[1],a.get(s.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(s=c;0!=s--;)if(t[s]!==a[s])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],a[u[s]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return be}));var r,o,i,a,c=n("17x9"),s=n.n(c),u=n("8+s/"),l=n.n(u),p=n("bmMU"),f=n.n(p),d=n("q1tI"),m=n.n(d),b=n("YVoz"),h=n.n(b),y="bodyAttributes",g="htmlAttributes",v="titleAttributes",j={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},_=(Object.keys(j).map((function(e){return j[e]})),"charset"),x="cssText",O="href",w="http-equiv",T="innerHTML",A="itemprop",k="name",S="property",C="rel",E="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",z="defer",B="encodeSpecialCharacters",D="onChangeClientState",M="titleTemplate",R=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),N=[j.NOSCRIPT,j.SCRIPT,j.STYLE],W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},H=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Z(e,j.TITLE),n=Z(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,P);return t||r||void 0},G=function(e){return Z(e,D)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[j.BASE]})).map((function(e){return e[j.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===C&&"canonical"===e[n].toLowerCase()||s===C&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==T&&c!==x&&c!==A||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=h()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,p=e.title,f=e.titleAttributes;se(j.BODY,r),se(j.HTML,o),ce(p,f);var d={baseTag:ue(j.BASE,n),linkTags:ue(j.LINK,i),metaTags:ue(j.META,a),noscriptTags:ue(j.NOSCRIPT,c),scriptTags:ue(j.SCRIPT,u),styleTags:ue(j.STYLE,l)},m={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),s(e,m,b)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(j.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(j.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case j.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=pe(n,r),[m.a.createElement(j.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=le(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return pe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===T||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===T||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===N.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,p=void 0===l?"":l,f=e.titleAttributes;return{base:fe(j.BASE,t,r),bodyAttributes:fe(y,n,r),htmlAttributes:fe(g,o,r),link:fe(j.LINK,i,r),meta:fe(j.META,a,r),noscript:fe(j.NOSCRIPT,c,r),script:fe(j.SCRIPT,s,r),style:fe(j.STYLE,u,r),title:fe(j.TITLE,{title:p,titleAttributes:f},r)}},me=l()((function(e){return{baseTag:X([O,I],e),bodyAttributes:J(y,e),defer:Z(e,z),encode:Z(e,B),htmlAttributes:J(g,e),linkTags:$(j.LINK,[C,O],e),metaTags:$(j.META,[k,_,w,S,A],e),noscriptTags:$(j.NOSCRIPT,[T],e),onChangeClientState:G(e),scriptTags:$(j.SCRIPT,[E,T],e),styleTags:$(j.STYLE,[x],e),title:V(e),titleAttributes:J(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),be=(o=me,a=i=function(e){function t(){return q(this,t),H(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case j.SCRIPT:case j.NOSCRIPT:return{innerHTML:t};case j.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case j.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case j.BODY:return U({},o,{bodyAttributes:U({},i)});case j.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case j.LINK:case j.META:case j.NOSCRIPT:case j.SCRIPT:case j.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);be.renderStatic=be.rewind}).call(this,n("yLpj"))},xW4G:function(e,t,n){"use strict";function r(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function o(e){return function t(n){return 0===arguments.length||r(n)?t:e.apply(this,arguments)}}function i(e){return function t(n,i){switch(arguments.length){case 0:return t;case 1:return r(n)?t:o((function(t){return e(n,t)}));default:return r(n)&&r(i)?t:r(n)?o((function(t){return e(t,i)})):r(i)?o((function(t){return e(n,t)})):e(n,i)}}}function a(e){return function t(n,a,c){switch(arguments.length){case 0:return t;case 1:return r(n)?t:i((function(t,r){return e(n,t,r)}));case 2:return r(n)&&r(a)?t:r(n)?i((function(t,n){return e(t,a,n)})):r(a)?i((function(t,r){return e(n,t,r)})):o((function(t){return e(n,a,t)}));default:return r(n)&&r(a)&&r(c)?t:r(n)&&r(a)?i((function(t,n){return e(t,n,c)})):r(n)&&r(c)?i((function(t,n){return e(t,a,n)})):r(a)&&r(c)?i((function(t,r){return e(n,t,r)})):r(n)?o((function(t){return e(t,a,c)})):r(a)?o((function(t){return e(n,t,c)})):r(c)?o((function(t){return e(n,a,t)})):e(n,a,c)}}}n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return y}));var c=i((function(e,t){return null==t||t!=t?e:t})),s=Number.isInteger||function(e){return e<<0===e};var u=i((function(e,t){var n,r=e<0?t.length+e:e;return n=t,"[object String]"===Object.prototype.toString.call(n)?t.charAt(r):t[r]})),l=i((function(e,t){return e.map((function(e){for(var n,r=t,o=0;o<e.length;){if(null==r)return;n=e[o],r=s(n)?u(n,r):r[n],o+=1}return r}))})),p=i((function(e,t){return l([e],t)[0]})),f=a((function(e,t,n){return c(e,p(t,n))})),d=n("Wcq6"),m=n.n(d),b=n("6VGE");m.a.initializeApp({apiKey:b.apiKey,authDomain:b.authDomain,databaseURL:b.databaseURL,projectId:b.projectId,storageBucket:b.storageBucket,messagingSenderId:b.messagingSenderId,appId:b.appId,measurementId:b.measurementId});f(void 0,["auth"],m.a);var h=f(void 0,["firestore"],m.a),y=(f(void 0,["firestore","Timestamp"],m.a),f(void 0,["analytics"],m.a))}}]);
//# sourceMappingURL=7db4832d901f4d28a6866efb24967f16ab7aef67-1a2a49b1318ccd0ae1ad.js.map