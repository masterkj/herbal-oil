(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d21a3d2":"57cd1eb8"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var s=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/docs/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav-bar"),n("router-view"),n("site-footer")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},u=[],c={},s=c,l=n("0c7c"),f=Object(l["a"])(s,i,u,!1,null,null,null),d=f.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer p-4"},[n("div",{staticClass:"container p-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 col-sm-6 col-lg-3"},[n("div",{staticClass:"footer__title"},[e._v("\n          About Us\n        ")]),n("div",{staticClass:"footer__paragraph"},[e._v("\n          We love what we do and how we do! We put our care, quality and passion into creating our extra virgin olive oil. Our passion pushes us to continually craft the freshest extra virgin olive oil.\n\n          We use traditional methods to produce oil so when you buy olive oil from us, you buy quality guarantee.\n        ")])]),n("div",{staticClass:"col-md-4 col-sm-6 col-lg-3"},[n("div",{staticClass:"footer__title"},[e._v("\n          Information\n        ")]),n("div",{staticClass:"footer__paragraph"},[n("div",{staticClass:"footer__link"})])])])])])}],h={},m=h,b=Object(l["a"])(m,p,v,!1,null,null,null),y=b.exports,_={components:{navBar:d,siteFooter:y}},g=_,w=Object(l["a"])(g,o,a,!1,null,null,null),O=w.exports,j=n("5f5b");r["default"].use(j["a"]);n("a058");var x=n("8c4f"),C=function(e){return n("9dac")("./".concat(e))},k=[{path:"",name:"Home",component:function(){return C("Home")}}];r["default"].use(x["a"]);var P=new x["a"]({mode:"history",routes:k.concat([{path:"*",redirect:"/"}]),scrollBehavior:function(e,t,n){return n||(e.hash?{selector:e.hash}:{x:0,y:0})}}),E=P;r["default"].config.productionTip=!1,new r["default"]({router:E,render:function(e){return e(O)}}).$mount("#app")},"9dac":function(e,t,n){var r={"./Home":["bb51","chunk-2d21a3d2"],"./Home.vue":["bb51","chunk-2d21a3d2"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="9dac",e.exports=o},a058:function(e,t,n){}});
//# sourceMappingURL=app.b96389ff.js.map