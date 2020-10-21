/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-borderradius-boxsizing-cssanimations-csspositionsticky-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-emoji-flexbox-flexboxlegacy-fontface-hovermq-inlinesvg-mediaqueries-smil-svgasimg-svgclippaths-svgfilters-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,o,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),S.push((s?"":"no-")+a.join("-"))}}function o(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?C.className.baseVal=t:C.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){if("object"==typeof e)for(var n in e)R(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),s=Modernizr[r[0]];if(2==r.length&&(s=s[r[1]]),"undefined"!=typeof s)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function l(){var e=t.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function u(e,n,r,s){var o,a,u,f,c="modernizr",d=i("div"),p=l();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=s?s[r]:c+(r+1),d.appendChild(u);return o=i("style"),o.type="text/css",o.id="s"+c,(p.fake?p:d).appendChild(o),p.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=f,C.offsetHeight):d.parentNode.removeChild(d),!!a}function f(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var s;for(var o in e)if(e[o]in t)return n===!1?e[o]:(s=t[e[o]],r(s,"function")?d(s,n||t):s);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function g(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(m(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+m(t[s])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==v(e,null,"position")})}return n}function h(e,t,s,o){function a(){u&&(delete q.style,delete q.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var l=g(e,s);if(!r(l,"undefined"))return l}for(var u,d,p,m,v,h=["modernizr","tspan","samp"];!q.style&&h.length;)u=!0,q.modElem=i(h.shift()),q.style=q.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],v=q.style[m],f(m,"-")&&(m=c(m)),q.style[m]!==n){if(o||r(s,"undefined"))return a(),"pfx"==t?m:!0;try{q.style[m]=s}catch(y){}if(q.style[m]!=v)return a(),"pfx"==t?m:!0}return a(),!1}function y(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+O.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,s,o):(a=(e+" "+V.join(i+" ")+i).split(" "),p(a,t,n))}function x(e,t,r){return y(e,n,n,t,r)}var S=[],w=[],T={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr,Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var C=t.documentElement,_="svg"===C.nodeName.toLowerCase();Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var b=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];T._prefixes=b,Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=i("a"),r=n.style;return r.cssText=e+b.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)});var E={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var P="CSS"in e&&"supports"in e.CSS,z="supportsCSS"in e;Modernizr.addTest("supports",P||z);var R;!function(){var e={}.hasOwnProperty;R=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),T._l={},T.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},T._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){T.addTest=a}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var A=T.testStyles=u,N=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();N?Modernizr.addTest("fontface",!1):A('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),s=r.sheet||r.styleSheet,o=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)});var j=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();T.mq=j,Modernizr.addTest("mediaqueries",j("only all")),Modernizr.addTest("hovermq",j("(hover)"));var M="Moz O ms Webkit",O=T._config.usePrefixes?M.split(" "):[];T._cssomPrefixes=O;var V=T._config.usePrefixes?M.toLowerCase().split(" "):[];T._domPrefixes=V;var k={elem:i("modernizr")};Modernizr._q.push(function(){delete k.elem});var q={style:k.elem.style};Modernizr._q.unshift(function(){delete q.style}),T.testAllProps=y,T.testAllProps=x,Modernizr.addTest("cssanimations",x("animationName","a",!0)),Modernizr.addTest("borderradius",x("borderRadius","0px",!0)),Modernizr.addTest("boxsizing",x("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("flexbox",x("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",x("boxDirection","reverse",!0)),Modernizr.addTest("csstransforms3d",function(){return!!x("perspective","1px",!0)}),Modernizr.addTest("csstransformslevel2",function(){return x("translate","45px",!0)}),Modernizr.addTest("csstransitions",x("transition","all",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&x("transform","scale(1)",!0)}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof i("canvas").getContext("2d").fillText}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var t=e.devicePixelRatio||1,n=12*t,r=i("canvas"),s=r.getContext("2d");return s.fillStyle="#f00",s.textBaseline="top",s.font="32px Arial",s.fillText("🐨",0,0),0!==s.getImageData(n,n,1,1).data[0]}),s(),o(S),delete T.addTest,delete T.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);