this.wc=this.wc||{},this.wc.wcBlocksSharedHocs=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=168)}({0:function(t,e){!function(){t.exports=this.wp.element}()},12:function(t,e){!function(){t.exports=this.wp.apiFetch}()},14:function(t,e,r){var n=r(26),o=r(27),u=r(19),c=r(28);t.exports=function(t,e){return n(t)||o(t,e)||u(t,e)||c()},t.exports.default=t.exports,t.exports.__esModule=!0},15:function(t,e){function r(){return t.exports=r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,r.apply(this,arguments)}t.exports=r,t.exports.default=t.exports,t.exports.__esModule=!0},168:function(t,e,r){"use strict";r.r(e),r.d(e,"withProductDataContext",(function(){return b}));var n=r(15),o=r.n(n),u=r(29),c=r.n(u),i=r(14),a=r.n(i),s=r(0),f=r(4),l=r.n(f),p=r(12),d=r.n(p),x=r(37),y=function(t){var e=t.productId,r=t.OriginalComponent,n=Object(s.useState)(null),o=a()(n,2),u=o[0],i=o[1],f=Object(s.useState)(!0),p=a()(f,2),y=p[0],b=p[1];return Object(s.useEffect)((function(){t.product&&(i(t.product),b(!1))}),[t.product]),Object(s.useEffect)((function(){e>0&&(b(!0),d()({path:"/wc/store/products/".concat(e)}).then((function(t){i(t)})).catch(c()(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(null);case 1:case"end":return t.stop()}}),t)})))).finally((function(){b(!1)})))}),[e]),y||u?Object(s.createElement)(x.ProductDataContextProvider,{product:u,isLoading:y},Object(s.createElement)(r,t)):null},b=function(t){return function(e){var r=Object(x.useProductDataContext)();return e.product||!r.hasContext?Object(s.createElement)(y,o()({},e,{OriginalComponent:t})):Object(s.createElement)(t,e)}}},19:function(t,e,r){var n=r(20);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},20:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n},t.exports.default=t.exports,t.exports.__esModule=!0},26:function(t,e){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},27:function(t,e){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,u=[],_n=!0,c=!1;try{for(r=r.call(t);!(_n=(n=r.next()).done)&&(u.push(n.value),!e||u.length!==e);_n=!0);}catch(t){c=!0,o=t}finally{try{_n||null==r.return||r.return()}finally{if(c)throw o}}return u}},t.exports.default=t.exports,t.exports.__esModule=!0},28:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},29:function(t,e){function r(t,e,r,n,o,u,c){try{var i=t[u](c),a=i.value}catch(t){return void r(t)}i.done?e(a):Promise.resolve(a).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,u){var c=t.apply(e,n);function i(t){r(c,o,u,i,a,"next",t)}function a(t){r(c,o,u,i,a,"throw",t)}i(void 0)}))}},t.exports.default=t.exports,t.exports.__esModule=!0},37:function(t,e){!function(){t.exports=this.wc.wcBlocksSharedContext}()},4:function(t,e){!function(){t.exports=this.regeneratorRuntime}()}});