this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["single-product"]=function(e){function t(t){for(var n,i,a=t[0],s=t[1],u=t[2],p=0,d=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);d.length;)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={39:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var c,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=function(e){return i.p+""+({1:"atomic-block-components/add-to-cart--atomic-block-components/button--atomic-block-components/image---a7e2bb9b",2:"atomic-block-components/add-to-cart--atomic-block-components/image--atomic-block-components/title",3:"atomic-block-components/add-to-cart--atomic-block-components/button",4:"atomic-block-components/sale-badge",8:"atomic-block-components/add-to-cart",9:"atomic-block-components/button",10:"atomic-block-components/category-list",11:"atomic-block-components/image",12:"atomic-block-components/price",13:"atomic-block-components/rating",14:"atomic-block-components/sku",15:"atomic-block-components/stock-indicator",16:"atomic-block-components/summary",17:"atomic-block-components/tag-list",18:"atomic-block-components/title"}[e]||e)+".js"}(e);var s=new Error;c=function(t){a.onerror=a.onload=null,clearTimeout(u);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",s.name="ChunkLoadError",s.type=n,s.request=c,r[1](s)}o[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:a})}),12e4);a.onerror=a.onload=c,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;return c.push([794,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},111:function(e,t){!function(){e.exports=this.wp.wordcount}()},115:function(e,t){},116:function(e,t){!function(){e.exports=this.wp.coreData}()},12:function(e,t,r){"use strict";r.d(t,"q",(function(){return c})),r.d(t,"p",(function(){return i})),r.d(t,"o",(function(){return a})),r.d(t,"l",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return p})),r.d(t,"i",(function(){return d})),r.d(t,"h",(function(){return f})),r.d(t,"n",(function(){return b})),r.d(t,"m",(function(){return m})),r.d(t,"c",(function(){return h})),r.d(t,"d",(function(){return g})),r.d(t,"g",(function(){return O})),r.d(t,"j",(function(){return v})),r.d(t,"a",(function(){return w})),r.d(t,"k",(function(){return j})),r.d(t,"b",(function(){return y})),r.d(t,"t",(function(){return E})),r.d(t,"u",(function(){return _})),r.d(t,"r",(function(){return P})),r.d(t,"s",(function(){return S}));var n,o=r(3),c=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=c.pluginUrl+"images/",a=c.pluginUrl+"build/",s=c.buildPhase,u=null===(n=o.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,l=o.STORE_PAGES.checkout.id,p=o.STORE_PAGES.checkout.permalink,d=o.STORE_PAGES.privacy.permalink,f=o.STORE_PAGES.privacy.title,b=o.STORE_PAGES.terms.permalink,m=o.STORE_PAGES.terms.title,h=o.STORE_PAGES.cart.id,g=o.STORE_PAGES.cart.permalink,O=o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),v=Object(o.getSetting)("shippingCountries",{}),w=Object(o.getSetting)("allowedCountries",{}),j=Object(o.getSetting)("shippingStates",{}),y=Object(o.getSetting)("allowedStates",{}),k=r(25),E=function(e,t){if(s>2)return Object(k.registerBlockType)(e,t)},_=function(e,t){if(s>1)return Object(k.registerBlockType)(e,t)},P=function(){return s>2},S=function(){return s>1}},120:function(e,t,r){"use strict";var n=r(14),o=r.n(n),c=r(15),i=r.n(c),a=r(13),s=r.n(a),u=r(16),l=r.n(u),p=r(17),d=r.n(p),f=r(10),b=r.n(f),m=r(5),h=r.n(m),g=r(0),O=(r(2),r(8)),v=r(1),w=r(12),j=function(e){var t=e.imageUrl,r=void 0===t?"".concat(w.p,"/block-error.svg"):t,n=e.header,o=void 0===n?Object(v.__)("Oops!","woo-gutenberg-products-block"):n,c=e.text,i=void 0===c?Object(v.__)("There was an error loading the content.","woo-gutenberg-products-block"):c,a=e.errorMessage,s=e.errorMessagePrefix,u=void 0===s?Object(v.__)("Error:","woo-gutenberg-products-block"):s,l=e.button;return Object(g.createElement)("div",{className:"wc-block-error wc-block-components-error"},r&&Object(g.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:r,alt:""}),Object(g.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},o&&Object(g.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},o),i&&Object(g.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},i),a&&Object(g.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},u?u+" ":"",a),l&&Object(g.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},l)))};r(204);var y=function(e){l()(c,e);var t,r,n=(t=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=b()(t);if(r){var o=b()(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return d()(this,e)});function c(){var e;o()(this,c);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),h()(s()(e),"state",{errorMessage:"",hasError:!1}),e}return i()(c,[{key:"render",value:function(){var e=this.props,t=e.header,r=e.imageUrl,n=e.showErrorMessage,o=e.text,c=e.errorMessagePrefix,i=e.renderError,a=e.button,s=this.state,u=s.errorMessage;return s.hasError?"function"==typeof i?i({errorMessage:u}):Object(g.createElement)(j,{errorMessage:n?u:null,header:t,imageUrl:r,text:o,errorMessagePrefix:c,button:a}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(g.createElement)(g.Fragment,null,Object(g.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}}]),c}(O.Component);y.defaultProps={showErrorMessage:!0},t.a=y},126:function(e,t,r){"use strict";var n=r(9),o=r.n(n),c=r(19),i=r.n(c),a=r(0),s=r(47),u=r(4),l=r(6),p=r.n(l),d=["className","item","isSelected","isLoading","onSelect","disabled"];t.a=function(e){var t=e.className,r=e.item,n=e.isSelected,c=e.isLoading,l=e.onSelect,f=e.disabled,b=i()(e,d);return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(s.c,o()({},b,{key:r.id,className:t,isSelected:n,item:r,onSelect:l,isSingle:!0,disabled:f})),n&&c&&Object(a.createElement)("div",{key:"loading",className:p()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(a.createElement)(u.Spinner,null)))}},134:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(64),i=r(153),a=r(3),s=r(21),u=r(44);t.a=function(e){var t=(Object(u.useProductDataContext)().product||{}).id||e.productId||0;return t?Object(n.createElement)(s.InspectorControls,null,Object(n.createElement)("div",{className:"wc-block-single-product__edit-card"},Object(n.createElement)("div",{className:"wc-block-single-product__edit-card-title"},Object(n.createElement)("a",{href:"".concat(a.ADMIN_URL,"post.php?post=").concat(t,"&action=edit"),target:"_blank",rel:"noopener noreferrer"},Object(o.__)("Edit this product's details","woo-gutenberg-products-block"),Object(n.createElement)(c.a,{srcElement:i.a,size:16}))),Object(n.createElement)("div",{className:"wc-block-single-product__edit-card-description"},Object(o.__)("Edit details such as title, price, description and more.","woo-gutenberg-products-block")))):null}},142:function(e,t,r){"use strict";var n=r(34),o=r.n(n),c=r(5),i=r.n(c),a=r(9),s=r.n(a),u=r(0),l=r(1),p=r(7),d=(r(2),r(47)),f=r(24),b=r(14),m=r.n(b),h=r(15),g=r.n(h),O=r(16),v=r.n(O),w=r(17),j=r.n(w),y=r(10),k=r.n(y);var E=Object(f.createHigherOrderComponent)((function(e){var t=function(t){v()(c,t);var r,n,o=(r=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k()(r);if(n){var o=k()(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return j()(this,e)});function c(){return m()(this,c),o.apply(this,arguments)}return g()(c,[{key:"render",value:function(){var t=this.props.selected,r=null==t;return Object(u.createElement)(e,s()({},this.props,{selected:r?[]:[t]}))}}]),c}(u.Component);return t.defaultProps={selected:null},t}),"withTransformSingleSelectToMultipleSelect"),_=r(290),P=r(30),S=r.n(P),x=r(13),C=r.n(x),B=r(23),R=r.n(B),N=r(35),A=r.n(N),z=r(40),I=r(43);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=Object(f.createHigherOrderComponent)((function(e){var t=function(t){v()(c,t);var r,n,o=(r=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k()(r);if(n){var o=k()(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return j()(this,e)});function c(){var e;m()(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=o.call.apply(o,[this].concat(r)),i()(C()(e),"state",{error:null,loading:!1,variations:{}}),i()(C()(e),"loadVariations",(function(){var t=e.props.products,r=e.state,n=r.loading,o=r.variations;if(!n){var c=e.getExpandedProduct();if(c&&!o[c]){var a=t.find((function(e){return e.id===c}));a.variations&&0!==a.variations.length?(e.setState({loading:!0}),Object(z.g)(c).then((function(t){var r=t.map((function(e){return L(L({},e),{},{parent:c})}));e.setState({variations:L(L({},e.state.variations),{},i()({},c,r)),loading:!1,error:null})})).catch(function(){var t=S()(R.a.mark((function t(r){var n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(I.a)(r);case 2:n=t.sent,e.setState({variations:L(L({},e.state.variations),{},i()({},c,null)),loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(_x){return t.apply(this,arguments)}}())):e.setState({variations:L(L({},e.state.variations),{},i()({},c,null)),loading:!1,error:null})}}})),e}return g()(c,[{key:"componentDidMount",value:function(){var e=this.props,t=e.selected,r=e.showVariations;t&&r&&this.loadVariations()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.isLoading,n=t.selected;t.showVariations&&(!A()(e.selected,n)||e.isLoading&&!r)&&this.loadVariations()}},{key:"isProductId",value:function(e){return this.props.products.some((function(t){return t.id===e}))}},{key:"findParentProduct",value:function(e){return this.props.products.filter((function(t){return t.variations&&t.variations.find((function(t){return t.id===e}))}))[0].id}},{key:"getExpandedProduct",value:function(){var e=this.props,t=e.isLoading,r=e.selected;if(!e.showVariations)return null;var n=r&&r.length?r[0]:null;return n?this.prevSelectedItem=n:this.prevSelectedItem&&(t||this.isProductId(this.prevSelectedItem)||(n=this.prevSelectedItem)),!t&&n?this.isProductId(n)?n:this.findParentProduct(n):null}},{key:"render",value:function(){var t=this.props,r=t.error,n=t.isLoading,o=this.state,c=o.error,i=o.loading,a=o.variations;return Object(u.createElement)(e,s()({},this.props,{error:c||r,expandedProduct:this.getExpandedProduct(),isLoading:n,variations:a,variationsLoading:i}))}}]),c}(u.Component);return i()(t,"defaultProps",{selected:[],showVariations:!1}),t}),"withProductVariations"),T=r(51),V=r(6),H=r.n(V),G=r(126);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(201);var F={list:Object(l.__)("Products","woo-gutenberg-products-block"),noItems:Object(l.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(l.__)("Search for a product to display","woo-gutenberg-products-block"),updated:Object(l.__)("Product search results updated.","woo-gutenberg-products-block")},Q=function(e){var t=e.expandedProduct,r=e.error,n=e.instanceId,c=e.isCompact,i=e.isLoading,a=e.onChange,f=e.onSearch,b=e.products,m=e.renderItem,h=e.selected,g=e.showVariations,O=e.variations,v=e.variationsLoading;if(r)return Object(u.createElement)(T.a,{error:r});var w=O&&O[t]?O[t]:[],j=[].concat(o()(b),o()(w));return Object(u.createElement)(d.b,{className:"woocommerce-products",list:j,isCompact:c,isLoading:i,isSingle:!0,selected:j.filter((function(e){var t=e.id;return h.includes(t)})),onChange:a,renderItem:m||(g?function(e){var t=e.item,r=e.search,o=e.depth,c=void 0===o?0:o,a=e.isSelected,f=e.onSelect,b=t.variations&&Array.isArray(t.variations)?t.variations.length:0,m=H()("woocommerce-search-product__item","woocommerce-search-list__item","depth-".concat(c),"has-count",{"is-searching":r.length>0,"is-skip-level":0===c&&0!==t.parent,"is-variable":b>0});if(!t.breadcrumbs.length)return Object(u.createElement)(G.a,s()({},e,{className:H()(m,{"is-selected":a}),isSelected:a,item:t,onSelect:function(){return function(){f(t)()}},isLoading:i||v,countLabel:t.variations.length>0?Object(l.sprintf)(
/* translators: %1$d is the number of variations of a product product. */
Object(l.__)("%1$d variations","woo-gutenberg-products-block"),t.variations.length):null,name:"products-".concat(n),"aria-label":Object(l.sprintf)(
/* translators: %1$s is the product name, %2$d is the number of variations of that product. */
Object(l._n)("%1$s, has %2$d variation","%1$s, has %2$d variations",t.variations.length,"woo-gutenberg-products-block"),t.name,t.variations.length)}));var h=Object(p.isEmpty)(t.variation)?e:q(q({},e),{},{item:q(q({},e.item),{},{name:t.variation}),"aria-label":"".concat(t.breadcrumbs[0],": ").concat(t.variation)});return Object(u.createElement)(d.c,s()({},h,{className:m,name:"variations-".concat(n)}))}:null),onSearch:f,messages:F,isHierarchical:!0})};Q.defaultProps={isCompact:!1,expandedProduct:null,selected:[],showVariations:!1},t.a=E(Object(_.a)(D(Object(f.withInstanceId)(Q))))},143:function(e,t,r){"use strict";var n=r(0),o=r(32),c=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));t.a=c},148:function(e,t){},153:function(e,t,r){"use strict";var n=r(0),o=r(32),c=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(n.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(n.createElement)("g",{mask:"url(#external-mask)"},Object(n.createElement)("path",{d:"M0 0h24v24H0z"})));t.a=c},179:function(e,t){!function(){e.exports=this.wp.warning}()},18:function(e,t){!function(){e.exports=this.wp.apiFetch}()},20:function(e,t){!function(){e.exports=this.wp.data}()},201:function(e,t){},204:function(e,t){},21:function(e,t){!function(){e.exports=this.wp.blockEditor}()},22:function(e,t){!function(){e.exports=this.wp.url}()},23:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},24:function(e,t){!function(){e.exports=this.wp.compose}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},26:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},29:function(e,t){!function(){e.exports=this.moment}()},290:function(e,t,r){"use strict";var n=r(9),o=r.n(n),c=r(30),i=r.n(c),a=r(14),s=r.n(a),u=r(15),l=r.n(u),p=r(13),d=r.n(p),f=r(16),b=r.n(f),m=r(17),h=r.n(m),g=r(10),O=r.n(g),v=r(0),w=r(23),j=r.n(w),y=r(7),k=r(24),E=(r(2),r(12)),_=r(40),P=r(43);var S=Object(k.createHigherOrderComponent)((function(e){var t=function(t){b()(u,t);var r,n,c,a=(n=u,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O()(n);if(c){var r=O()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h()(this,e)});function u(){var e;return s()(this,u),(e=a.apply(this,arguments)).state={list:[],loading:!0},e.setError=e.setError.bind(d()(e)),e.debouncedOnSearch=Object(y.debounce)(e.onSearch.bind(d()(e)),400),e}return l()(u,[{key:"componentDidMount",value:function(){var e=this,t=this.props.selected;Object(_.h)({selected:t}).then((function(t){e.setState({list:t,loading:!1})})).catch(this.setError)}},{key:"componentWillUnmount",value:function(){this.debouncedOnSearch.cancel()}},{key:"onSearch",value:function(e){var t=this,r=this.props.selected;Object(_.h)({selected:r,search:e}).then((function(e){t.setState({list:e,loading:!1})})).catch(this.setError)}},{key:"setError",value:(r=i()(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)(t);case 2:r=e.sent,this.setState({list:[],loading:!1,error:r});case 4:case"end":return e.stop()}}),e,this)}))),function(_x){return r.apply(this,arguments)})},{key:"render",value:function(){var t=this,r=this.state,n=r.error,c=r.list,i=r.loading;return Object(v.createElement)(e,o()({},this.props,{error:n,products:c,isLoading:i,onSearch:E.q.productCount>100?function(e){t.setState({loading:!0}),t.debouncedOnSearch(e)}:null}))}}]),u}(v.Component);return t.defaultProps={selected:[]},t}),"withSearchedProducts");t.a=S},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},32:function(e,t){!function(){e.exports=this.wp.primitives}()},35:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},36:function(e,t){!function(){e.exports=this.wp.dataControls}()},38:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},4:function(e,t){!function(){e.exports=this.wp.components}()},40:function(e,t,r){"use strict";r.d(t,"h",(function(){return f})),r.d(t,"e",(function(){return b})),r.d(t,"b",(function(){return m})),r.d(t,"i",(function(){return h})),r.d(t,"f",(function(){return g})),r.d(t,"c",(function(){return O})),r.d(t,"d",(function(){return v})),r.d(t,"g",(function(){return w})),r.d(t,"a",(function(){return j}));var n=r(5),o=r.n(n),c=r(22),i=r(18),a=r.n(i),s=r(7),u=r(3),l=r(12);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,u=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,a=void 0===i?[]:i,s=l.q.productCount>100,u={per_page:s?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},p=[Object(c.addQueryArgs)("/wc/store/products",d(d({},u),a))];return s&&r.length&&p.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),p}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(u.map((function(e){return a()({path:e})}))).then((function(e){return Object(s.uniqBy)(Object(s.flatten)(e),"id").map((function(e){return d(d({},e),{},{parent:0})}))})).catch((function(e){throw e}))},b=function(e){return a()({path:"/wc/store/products/".concat(e)})},m=function(){return a()({path:"wc/store/products/attributes"})},h=function(e){return a()({path:"wc/store/products/attributes/".concat(e,"/terms")})},g=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=Object(u.getSetting)("limitTags",!1),i=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:o?100:0,orderby:o?"count":"name",order:o?"desc":"asc",search:n})];return o&&r.length&&i.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),i}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return a()({path:e})}))).then((function(e){return Object(s.uniqBy)(Object(s.flatten)(e),"id")}))},O=function(e){return a()({path:Object(c.addQueryArgs)("wc/store/products/categories",d({per_page:0},e))})},v=function(e){return a()({path:"wc/store/products/categories/".concat(e)})},w=function(e){return a()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},j=function(e,t){if(!e.title.raw)return e.slug;var r=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(r?"":" - ".concat(e.slug))}},43:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(30),o=r.n(n),c=r(23),i=r.n(c),a=r(1),s=function(){var e=o()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(_x){return e.apply(this,arguments)}}(),u=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(a.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},44:function(e,t){!function(){e.exports=this.wc.wcBlocksSharedContext}()},46:function(e,t){!function(){e.exports=this.wc.priceFormat}()},464:function(e,t,r){"use strict";var n=r(9),o=r.n(n),c=r(30),i=r.n(c),a=r(14),s=r.n(a),u=r(15),l=r.n(u),p=r(13),d=r.n(p),f=r(16),b=r.n(f),m=r(17),h=r.n(m),g=r(10),O=r.n(g),v=r(5),w=r.n(v),j=r(0),y=r(23),k=r.n(y),E=r(24),_=r(40),P=r(43);var S=Object(E.createHigherOrderComponent)((function(e){return function(t){b()(a,t);var r,n,c=(r=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O()(r);if(n){var o=O()(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return h()(this,e)});function a(){var e;s()(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=c.call.apply(c,[this].concat(r)),w()(d()(e),"state",{error:null,loading:!1,product:"preview"===e.props.attributes.productId?e.props.attributes.previewProduct:null}),w()(d()(e),"loadProduct",(function(){var t=e.props.attributes.productId;"preview"!==t&&(t?(e.setState({loading:!0}),Object(_.e)(t).then((function(t){e.setState({product:t,loading:!1,error:null})})).catch(function(){var t=i()(k.a.mark((function t(r){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.a)(r);case 2:n=t.sent,e.setState({product:null,loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(_x){return t.apply(this,arguments)}}())):e.setState({product:null,loading:!1,error:null}))})),e}return l()(a,[{key:"componentDidMount",value:function(){this.loadProduct()}},{key:"componentDidUpdate",value:function(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,c=t.product;return Object(j.createElement)(e,o()({},this.props,{error:r,getProduct:this.loadProduct,isLoading:n,product:c}))}}]),a}(j.Component)}),"withProduct");t.a=S},49:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},51:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(49));t.a=function(e){var t,r,i,a=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=a).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},53:function(e,t){!function(){e.exports=this.wp.deprecated}()},54:function(e,t){!function(){e.exports=this.wp.keycodes}()},55:function(e,t){!function(){e.exports=this.wc.wcBlocksRegistry}()},58:function(e,t){!function(){e.exports=this.wp.hooks}()},64:function(e,t,r){"use strict";var n=r(5),o=r.n(n),c=r(19),i=r.n(c),a=r(0),s=["srcElement","size"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=i()(e,s);return Object(a.isValidElement)(t)?Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c)):null}},7:function(e,t){!function(){e.exports=this.lodash}()},74:function(e,t){!function(){e.exports=this.wp.dom}()},76:function(e,t){!function(){e.exports=this.wp.a11y}()},79:function(e,t){!function(){e.exports=this.wc.wcBlocksSharedHocs}()},794:function(e,t,r){e.exports=r(801)},795:function(e,t){},8:function(e,t){!function(){e.exports=this.React}()},80:function(e,t){!function(){e.exports=this.ReactDOM}()},801:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(12),c=r(11),i=r.n(c),a=r(0),s=r(4),u=r(464),l=r(120),p=r(134),d=Object(a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 230 100"},Object(a.createElement)("path",{fill:"#E1E3E6",d:"M76 0h11v6H76zm0 11h88v11H76zm0 16h28v6H76zm0 17h154v28H76zm0 39h22v17H76zm28 0h44v17h-44zM0 0h66v66H0z",style:{width:"100%"}})),f=r(21),b=(r(795),r(97)),m=function(e){var t=e.error,r=e.isLoading,n=e.getProduct;return Object(a.createElement)(b.a,{className:"wc-block-single-product-error",error:t,isLoading:r,onRetry:n})},h=r(142),g=function(e){var t=e.attributes,r=e.setAttributes;return Object(a.createElement)(h.a,{selected:t.productId||0,showVariations:!0,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e[0]?e[0].id:0;r({productId:t})}})},O=function(e){var t=e.isEditing,r=e.setIsEditing;return Object(a.createElement)(f.BlockControls,null,Object(a.createElement)(s.ToolbarGroup,{controls:[{icon:"edit",title:Object(n.__)("Edit","woo-gutenberg-products-block"),onClick:function(){return r(!t)},isActive:t}]}))},v=r(20),w=r(44),j=r(25),y=r(64),k=r(32),E=Object(a.createElement)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(a.createElement)("path",{d:"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-5 0-9 4-9 9H0l4 4 4-4H5a7 7 0 113 5.7l-1.5 1.4A9 9 0 1012 3z"})),_=r(34),P=r.n(_),S=Object(a.createElement)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(a.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(a.createElement)("path",{d:"M21 4H3a2 2 0 00-2 2v13c0 1.1.9 2 2 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"})),x=r(822),C="woocommerce/single-product",B=Object(n.__)("Single Product","woo-gutenberg-products-block"),R=Object(a.createElement)(y.a,{srcElement:S}),N=Object(n.__)("Display a single product.","woo-gutenberg-products-block"),A=[["core/columns",{},[["core/column",{},[["woocommerce/product-image",{showSaleBadge:!1}]]],["core/column",{},[["woocommerce/product-sale-badge"],["woocommerce/product-title",{headingLevel:2}],["woocommerce/product-rating"],["woocommerce/product-price"],["woocommerce/product-summary"],["woocommerce/product-stock-indicator"],["woocommerce/product-add-to-cart",{showFormElements:!0}],["woocommerce/product-sku"],["woocommerce/product-category-list"],["woocommerce/product-tag-list"]]]]]],z=["core/columns","core/column"].concat(P()(Object.keys(Object(x.a)(C)))),I=function(e){var t=e.isLoading,r=e.product,o=e.clientId,c=Object(v.useDispatch)("core/block-editor").replaceInnerBlocks,u=Object(a.useCallback)((function(){c(o,function e(t){return t.map((function(t){var r=i()(t,3),n=r[0],o=r[1],c=void 0===o?{}:o,a=r[2],s=void 0===a?[]:a,u=s?e(s):[];return Object(j.createBlock)(n,c,u)}))}(A),!1)}),[o,c]);return Object(a.createElement)(w.InnerBlockLayoutContextProvider,{parentName:C,parentClassName:"wc-block-single-product wc-block-layout"},Object(a.createElement)(w.ProductDataContextProvider,{product:r,isLoading:t},Object(a.createElement)(f.InspectorControls,null,Object(a.createElement)(s.PanelBody,{title:Object(n.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(a.createElement)(s.Button,{label:Object(n.__)("Reset layout to default","woo-gutenberg-products-block"),onClick:u,isTertiary:!0,className:"wc-block-single-product__reset-layout"},Object(a.createElement)(y.a,{srcElement:E})," ",Object(n.__)("Reset layout","woo-gutenberg-products-block")))),Object(a.createElement)("div",{className:"wc-block-single-product wc-block-layout"},Object(a.createElement)(f.InnerBlocks,{template:A,allowedBlocks:z,templateLock:!1,renderAppender:!1}))))},M=Object(u.a)((function(e){var t=e.className,r=e.attributes,o=e.setAttributes,c=e.error,u=e.getProduct,b=e.product,h=e.isLoading,v=e.clientId,w=r.productId,j=r.isPreview,y=Object(a.useState)(!w),k=i()(y,2),E=k[0],_=k[1];return j?d:c?Object(a.createElement)(m,{error:c,isLoading:h,getProduct:u}):Object(a.createElement)("div",{className:t},Object(a.createElement)(l.a,{header:Object(n.__)("Single Product Block Error","woo-gutenberg-products-block")},Object(a.createElement)(O,{setIsEditing:_,isEditing:E}),E?Object(a.createElement)(s.Placeholder,{icon:R,label:B,className:"wc-block-single-product"},N,Object(a.createElement)("div",{className:"wc-block-single-product__selection"},Object(a.createElement)(g,{attributes:r,setAttributes:o}),Object(a.createElement)(s.Button,{isSecondary:!0,onClick:function(){_(!1)}},Object(n.__)("Done","woo-gutenberg-products-block")))):Object(a.createElement)(a.Fragment,null,Object(a.createElement)(f.InspectorControls,null,Object(a.createElement)(s.PanelBody,{title:Object(n.__)("Product","woo-gutenberg-products-block"),initialOpen:!1},Object(a.createElement)(g,{attributes:r,setAttributes:o}))),Object(a.createElement)(p.a,{productId:w}),Object(a.createElement)(I,{clientId:v,product:b,isLoading:h}))))})),L=r(6),D=r.n(L),T={title:B,icon:{src:R,foreground:"#96588a"},category:"woocommerce",keywords:[Object(n.__)("WooCommerce","woo-gutenberg-products-block")],description:N,supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{isPreview:{type:"boolean",default:!1,save:!1},productId:{type:"number"}},edit:M,save:function(e){var t=e.attributes;return Object(a.createElement)("div",{className:D()("is-loading",t.className)},Object(a.createElement)(f.InnerBlocks.Content,null))}};Object(o.t)(C,T)},82:function(e,t){!function(){e.exports=this.wp.viewport}()},822:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(55),o=r(0),c=r(12);r.p=c.o,Object(n.registerBlockComponent)({blockName:"woocommerce/product-price",component:Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(12)]).then(r.bind(null,465))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-image",component:Object(o.lazy)((function(){return Promise.all([r.e(1),r.e(2),r.e(4),r.e(11)]).then(r.bind(null,844))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-title",component:Object(o.lazy)((function(){return Promise.all([r.e(1),r.e(2),r.e(18)]).then(r.bind(null,845))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-rating",component:Object(o.lazy)((function(){return r.e(13).then(r.bind(null,466))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-button",component:Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(9)]).then(r.bind(null,467))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-summary",component:Object(o.lazy)((function(){return r.e(16).then(r.bind(null,469))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:Object(o.lazy)((function(){return r.e(4).then(r.bind(null,292))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-sku",component:Object(o.lazy)((function(){return r.e(14).then(r.bind(null,470))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-category-list",component:Object(o.lazy)((function(){return r.e(10).then(r.bind(null,471))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-tag-list",component:Object(o.lazy)((function(){return r.e(17).then(r.bind(null,472))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:Object(o.lazy)((function(){return r.e(15).then(r.bind(null,473))}))}),Object(n.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:Object(o.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(8)]).then(r.bind(null,846))}))});var i=function(e){return Object(n.getRegisteredBlockComponents)(e)}},85:function(e,t){!function(){e.exports=this.wp.autop}()},91:function(e,t){!function(){e.exports=this.wp.date}()},97:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(64)),i=r(143),a=r(6),s=r.n(a),u=r(4),l=r(51);r(148),t.a=function(e){var t=e.className,r=e.error,a=e.isLoading,p=e.onRetry;return Object(n.createElement)(u.Placeholder,{icon:Object(n.createElement)(c.a,{srcElement:i.a}),label:Object(o.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:s()("wc-block-api-error",t)},Object(n.createElement)(l.a,{error:r}),p&&Object(n.createElement)(n.Fragment,null,a?Object(n.createElement)(u.Spinner,null):Object(n.createElement)(u.Button,{isSecondary:!0,onClick:p},Object(o.__)("Retry","woo-gutenberg-products-block"))))}}});