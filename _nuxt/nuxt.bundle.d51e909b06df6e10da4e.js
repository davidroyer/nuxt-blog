webpackJsonp([4],{100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.app;t.store;e.testStore={posts:"posts here"}}},101:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(17),o=n.n(r),a=n(186),i=n.n(a),s=n(149),u=(n.n(s),n(150)),c=(n.n(u),{_default:function(){return n.e(2).then(n.bind(null,197))}});e.default={head:{title:"NuxtFire Blog - David Royer",titleTemplate:"%s - NuxtFire Blog - David Royer",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Demo of NuxtFire Blog. Made by David Royer, Front-End Web Designer and Developer"}],link:[{rel:"preload",as:"style",href:"https://fonts.googleapis.com/css?family=Roboto"},{rel:"preload",as:"style",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}],style:[],script:[]},data:function(){return{layout:null,layoutName:""}},mounted:function(){this.$loading=this.$refs.loading,this.$nuxt.$loading=this.$loading},methods:{setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&c["_"+t]||(t="default");var n="_"+t;return"function"!=typeof c[n]?o.a.resolve(c[n]):c[n]().then(function(t){return c[n]=t,c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message});console.error(t)})}},components:{NuxtLoading:i.a}}},102:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"nuxt-error",props:["error"],head:function(){return{title:this.error.message||"An error occured"}}}},103:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.default={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},104:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(63),a=n(90),i=n.n(a);e.default={name:"nuxt",beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options._nuxt)},created:function(){r.default.prototype.$nuxt=this,this.$root.$nuxt=this,this.setLayout=this.$root.setLayout.bind(this.$root),"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.$root.error},mounted:function(){this.$root.$loading&&this.$root.$loading.start&&(this.$loading=this.$root.$loading)},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())}},components:{NuxtChild:o.a,NuxtError:i.a}}},149:function(t,e){},150:function(t,e){},151:function(t,e){},152:function(t,e){},185:function(t,e,n){var r=n(23)(n(101),n(188),null,null,null);t.exports=r.exports},186:function(t,e,n){function r(t){n(151)}var o=n(23)(n(103),n(189),r,"data-v-226dd2a4",null);t.exports=o.exports},187:function(t,e,n){var r=n(23)(n(104),n(191),null,null,null);t.exports=r.exports},188:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"__nuxt"}},[n("nuxt-loading",{ref:"loading"}),t.layout?n(t.layout,{tag:"component"}):t._e()],1)},staticRenderFns:[]}},189:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},staticRenderFns:[]}},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-page"},[n("div",[n("h1",{staticClass:"error-code"},[t._v(t._s(t.error.statusCode))]),n("div",{staticClass:"error-wrapper-message"},[n("h2",{staticClass:"error-message"},[t._v(t._s(t.error.message))])]),404===t.error.statusCode?n("p",[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e()])])},staticRenderFns:[]}},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.nuxt.err?n("nuxt-error",{attrs:{error:t.nuxt.err}}):n("nuxt-child")},staticRenderFns:[]}},193:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=193},57:function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.options.data||L;t.options.data=function(){var t=n.call(this);return T()({},t,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}function o(t){return t.options?(t._Ctor=t,t.extendOptions=t.options):(t=j.default.extend(t),t._Ctor=t),!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t}function a(t){return[].concat.apply([],t.matched.map(function(t){return k()(t.components).map(function(e){return t.components[e]})}))}function i(t){return[].concat.apply([],t.matched.map(function(t){return k()(t.instances).map(function(e){return t.instances[e]})}))}function s(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return k()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function u(t,e){var n={isServer:!!t.isServer,isClient:!!t.isClient,isDev:!1,app:e,store:t.store,route:t.to?t.to:t.route,payload:t.payload,error:t.error,base:"/",env:{},hotReload:t.hotReload||!1},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t,e,o){t&&(n._redirected=!0,"string"!=typeof t||void 0!==e&&"object"!==(void 0===e?"undefined":$()(e))||(o=e||{},e=t,t=302),r({path:e,query:o,status:t}))},t.req&&(n.req=t.req),t.res&&(n.res=t.res),n}function c(t,e){return!t.length||e._redirected?b.a.resolve():f(t[0],e).then(function(){return c(t.slice(1),e)})}function f(t,e){var n=void 0;return n=2===t.length?new b.a(function(n){t(e,function(t,r){t&&e.error(t),r=r||{},n(r)})}):t(e),n&&(n instanceof b.a||"function"==typeof n.then)||(n=b.a.resolve(n)),n}function l(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function d(t,e){return m(p(t,e))}function p(t,e){for(var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";null!=(n=A.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var l=t[a],d=n[2],p=n[3],h=n[4],v=n[5],m=n[6],y=n[7];i&&(r.push(i),i="");var g=null!=d&&null!=l&&l!==d,w="+"===m||"*"===m,b="?"===m||"*"===m,C=n[2]||s,$=h||v;r.push({name:p||o++,prefix:d||"",delimiter:C,optional:b,repeat:w,partial:g,asterisk:!!y,pattern:$?_($):y?".*":"[^"+x(C)+"]+?"})}}return a<t.length&&(i+=t.substr(a)),i&&r.push(i),r}function h(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function v(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function m(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===$()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?h:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var f,l=a[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+g()(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(f=s(l[d]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+g()(f)+"`");o+=(0===d?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?v(l):s(l),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}function x(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function _(t){return t.replace(/([=!:$\/()])/g,"\\$1")}e.e=r,e.g=o,e.b=a,e.i=i,e.f=s,e.a=u,e.h=c,e.d=f,e.j=l,e.c=d;var y=n(105),g=n.n(y),w=n(17),b=n.n(w),C=n(58),$=n.n(C),E=n(93),k=n.n(E),R=n(65),T=n.n(R),j=n(1),L=function(){return{}},A=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},63:function(t,e,n){"use strict";var r=(n(1),["name","mode","css","type","duration","enterClass","leaveClass","enterActiveClass","enterActiveClass","leaveActiveClass","enterToClass","leaveToClass"]),o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled"];e.a={name:"nuxt-child",functional:!0,render:function(t,e){var n=e.parent,a=e.data;a.nuxtChild=!0;for(var i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;a.nuxtChildDepth=u;var c=i[u]||s,f={};r.forEach(function(t){void 0!==c[t]&&(f[t]=c[t])});var l={};return o.forEach(function(t){"function"==typeof c[t]&&(l[t]=c[t])}),t("transition",{props:f,on:l},[t("router-view",a)])}}},90:function(t,e,n){function r(t){n(152)}var o=n(23)(n(102),n(190),r,"data-v-61ad7170",null);t.exports=o.exports},91:function(t,e,n){"use strict";n.d(e,"b",function(){return R});var r=n(34),o=n.n(r),a=n(35),i=n.n(a),s=n(65),u=n.n(s),c=n(17),f=n.n(c),l=n(33),d=n.n(l),p=n(1),h=n(59),v=n.n(h),m=n(98),x=n(99),_=n(63),y=n(96),g=n(90),w=n.n(g),b=n(187),C=n.n(b),$=n(185),E=n.n($),k=n(57);n.d(e,"a",function(){return w.a});var R=function(){var t=d()(o.a.mark(function t(e){var r,a,s,c,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.i(x.a)(),a=n.i(m.a)(),!e||!e.url){t.next=5;break}return t.next=5,new f.a(function(t,n){a.push(e.url,t,n)});case 5:if(window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),s=u()({router:a,store:r,_nuxt:{defaultTransition:L,transitions:[L],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?i()({},L,{name:t}):i()({},L,t):L}),this.$options._nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){return t=t||null,"string"==typeof t&&(t={statusCode:500,message:t}),this.$options._nuxt.dateErr=Date.now(),this.$options._nuxt.err=t,t}}},E.a),c=e?e.next:function(t){return s.router.push(t)},l=n.i(k.a)({isServer:!!e,isClient:!e,route:a.currentRoute,next:c,store:r,req:e?e.req:void 0,res:e?e.res:void 0},s),delete l.error,"function"!=typeof T){t.next=13;break}return t.next=13,T(l);case 13:if("function"!=typeof j){t.next=16;break}return t.next=16,j(l);case 16:return t.abrupt("return",{app:s,router:a,store:r});case 17:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var T=n(97);T=T.default||T;var j=n(100);j=j.default||j,p.default.component(_.a.name,_.a),p.default.component(y.a.name,y.a),p.default.component(C.a.name,C.a),p.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var L={name:"page",mode:"out-in"}},92:function(t,e,n){"use strict";var r=n(64),o=n.n(r),a=n(94),i=a.keys(),s={},u=!0,c=!1,f=void 0;try{for(var l,d=o()(i);!(u=(l=d.next()).done);u=!0){var p=l.value;s[p.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=function(t){var e=a(t);return e.default?e.default:e}(p)}}catch(t){c=!0,f=t}finally{try{!u&&d.return&&d.return()}finally{if(c)throw f}}e.a=s},94:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=94},95:function(t,e,n){"use strict";function r(t,e,n){return t.map(function(t){var r=t.options.transition;return"function"==typeof r?r(e,n):r})}function o(t,e,r){var o=this,a=n.i(w.f)(t,function(t,e,r,o){return"function"!=typeof t||t.options?(t=n.i(w.g)(t),r.components[o]=t,r.components[o]):new x.a(function(e,a){var i=function(t){t=n.i(w.g)(t),r.components[o]=t,e(t)};t().then(i).catch(a)})}),i=e.fullPath.split("#")[0],s=t.fullPath.split("#")[0];this._hashChanged=i===s,this._hashChanged||this.$loading.start&&this.$loading.start(),x.a.all(a).then(function(){return r()}).catch(function(t){var e=t.statusCode||t.status||t.response&&t.response.status||500;o.error({statusCode:e,message:t.message}),r(!1)})}function a(t,e,r){var o=this,a=[],i=!1;if(void 0!==r&&(a=[],r.middleware&&(a=a.concat(r.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"!=typeof y.a[t]&&(i=!0,o.error({statusCode:500,message:"Unknown middleware "+t})),y.a[t]}),!i)return n.i(w.h)(a,e)}function i(t,e){n.i(w.f)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":l()(t))||t.options||(t=_.default.extend(t),t._Ctor=t,n.components[r]=t),t})}function s(t,e){var r=this;this._hashChanged||_.default.nextTick(function(){var e=n.i(w.i)(t);E=e.map(function(t,e){if(!t)return"";if($[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)_.default.set(t.$data,r,n[r])}return t.constructor.options.__file}),r._hadError&&r._dateLastError===r.$options._nuxt.dateErr&&r.error();var o=r.$options._nuxt.err?g.a.layout:t.matched[0].components.default.options.layout;"function"==typeof o&&(o=o(r._context)),r.setLayout(o),setTimeout(function(){return u(r)},100)})}function u(t){return}function c(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),R.afterEach(function(e,n){t.$nuxt.$emit("routeChanged",e,n)})}Object.defineProperty(e,"__esModule",{value:!0});var f=n(58),l=n.n(f),d=n(34),p=n.n(d),h=n(33),v=n.n(h),m=n(17),x=n.n(m),_=n(1),y=n(92),g=n(91),w=n(57),b=this,C=function(){var t=v()(p.a.mark(function t(e,o,i){var s,u,c,f,l,d,h,v=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this._hashChanged){t.next=2;break}return t.abrupt("return",i());case 2:if(s=void 0,u=!1,c=function(t){this.$loading.finish&&this.$loading.finish(),u||(u=!0,i(t))},f=n.i(w.a)({to:e,store:T,isClient:!0,next:c.bind(this),error:this.error.bind(this)},k),l=n.i(w.b)(e),this._context=f,this._dateLastError=this.$options._nuxt.dateErr,this._hadError=!!this.$options._nuxt.err,l.length){t.next=24;break}return t.next=13,a.call(this,l,f);case 13:if(!f._redirected){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof g.a.layout?g.a.layout(f):g.a.layout);case 17:return s=t.sent,t.next=20,a.call(this,l,f,s);case 20:if(!f._redirected){t.next=22;break}return t.abrupt("return");case 22:return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",i());case 24:return l.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(r(l,e,o)),t.prev=26,t.next=29,a.call(this,l,f);case 29:if(!f._redirected){t.next=31;break}return t.abrupt("return");case 31:return s=l[0].options.layout,"function"==typeof s&&(s=s(f)),t.next=35,this.loadLayout(s);case 35:return s=t.sent,t.next=38,a.call(this,l,f,s);case 38:if(!f._redirected){t.next=40;break}return t.abrupt("return");case 40:if(d=!0,l.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:e.params||{},query:e.query||{},store:f.store}))}),d){t.next=45;break}return this.error({statusCode:404,message:"This page could not be found."}),t.abrupt("return",i());case 45:return t.next=47,x.a.all(l.map(function(t,r){if(t._path=n.i(w.c)(e.matched[r].path)(e.params),!v._hadError&&t._path===$[r]&&r+1!==l.length)return x.a.resolve();var o=[];if(t.options.asyncData&&"function"==typeof t.options.asyncData){var a=n.i(w.d)(t.options.asyncData,f);a.then(function(e){n.i(w.e)(t,e),v.$loading.increase&&v.$loading.increase(30)}),o.push(a)}if(t.options.fetch){var i=t.options.fetch(f);i&&(i instanceof x.a||"function"==typeof i.then)||(i=x.a.resolve(i)),i.then(function(){return v.$loading.increase&&v.$loading.increase(30)}),o.push(i)}return x.a.all(o)}));case 47:$=l.map(function(t,r){return n.i(w.c)(e.matched[r].path)(e.params)}),this.$loading.finish&&this.$loading.finish(),u||i(),t.next=59;break;case 52:t.prev=52,t.t0=t.catch(26),$=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,h=g.a.layout,"function"==typeof h&&(h=h(f)),this.loadLayout(h).then(function(){v.error(t.t0),i(!1)});case 59:case"end":return t.stop()}},t,this,[[26,52]])}));return function(e,n,r){return t.apply(this,arguments)}}(),$=[],E=[],k=void 0,R=void 0,T=void 0,j=window.__NUXT__||{};if(!j)throw new Error("[nuxt.js] cannot find the global variable __NUXT__, make sure the server is working.");var L=function(t){var e=n.i(w.j)(t.options.base);return n.i(w.f)(t.match(e),function(t,e,r,o,a){return"function"!=typeof t||t.options?(t=n.i(w.g)(t),r.components[o]=t,t):new x.a(function(e,i){var s=function(t){t=n.i(w.g)(t),j.serverRendered&&n.i(w.e)(t,j.data[a]),r.components[o]=t,e(t)};t().then(s).catch(i)})})};n.i(g.b)().then(function(){var t=v()(p.a.mark(function t(e){var a,f,l,d;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return k=e.app,R=e.router,T=e.store,t.next=5,x.a.all(L(R));case 5:return a=t.sent,f=new _.default(k),l=j.layout||"default",t.next=10,f.loadLayout(l);case 10:if(f.setLayout(l),d=function(){f.$mount("#__nuxt"),_.default.nextTick(function(){u(f),c(f)})},f.setTransitions=f.$options._nuxt.setTransitions.bind(f),a.length&&(f.setTransitions(r(a,R.currentRoute)),$=R.currentRoute.matched.map(function(t){return n.i(w.c)(t.path)(R.currentRoute.params)}),E=a.map(function(t){return t.options.__file})),f.error=f.$options._nuxt.error.bind(f),f.$loading={},j.error&&f.error(j.error),R.beforeEach(o.bind(f)),R.beforeEach(C.bind(f)),R.afterEach(i),R.afterEach(s.bind(f)),!j.serverRendered){t.next=24;break}return d(),t.abrupt("return");case 24:C.call(f,R.currentRoute,R.currentRoute,function(t){if(t){var e=!1;return R.afterEach(function(){e||(e=!0,d())}),void R.push(t)}i(R.currentRoute,R.currentRoute),s.call(f,R.currentRoute,R.currentRoute),d()});case 25:case"end":return t.stop()}},t,b)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){console.error("[nuxt.js] Cannot load components",t)})},96:function(t,e,n){"use strict";n(1);e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},97:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=n(1),r=n(157),o=n.n(r),a={install:function(){e.default.__nuxt_firebase_installed__||(e.default.__nuxt_firebase_installed__=!0,e.default.prototype.$firebase||(e.default.prototype.$firebase=o.a.initializeApp({apiKey:t.env.apiKey||"AIzaSyCz8gCkmdI8jV-jB9_2sgH2rP1s7CyuiAY",authDomain:t.env.authDomain||"nuxtfire.firebaseapp.com",databaseURL:t.env.databaseURL||"https://nuxtfire.firebaseio.com",storageBucket:t.env.storageBucket||"nuxtfire.appspot.com"})))}};e.default.use(a)}.call(e,n(62))},98:function(t,e,n){"use strict";function r(){return new a.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:u,routes:[{path:"/",component:i,name:"index"},{path:"/posts/:slug?",component:s,name:"posts-slug"}]})}e.a=r;var o=n(1),a=n(60);o.default.use(a.default);var i=function(){return n.e(1).then(n.bind(null,198))},s=function(){return n.e(0).then(n.bind(null,199))},u=function(t,e,n){if(n)return n;var r={};return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),t.hash&&(r={selector:t.hash}),r}},99:function(t,e,n){"use strict";function r(t){var e=l(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function o(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},o(t.modules[n],e)}n.d(e,"a",function(){return C});var a=n(35),i=n.n(a),s=n(64),u=n.n(s),c=n(1),f=n(61);c.default.use(f.default);var l=n(193),d=l.keys(),p={},h=d.find(function(t){return t.includes("./index.")});if(h&&(p=r(h)),"function"!=typeof p){p.modules||(p.modules={});var v=!0,m=!1,x=void 0;try{for(var _,y=u()(d);!(v=(_=y.next()).done);v=!0){var g=_.value,w=g.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==w){var b=w.split(/\//),t=o(p,b);w=b.pop(),t[w]=r(g),t[w].namespaced=!0}}}catch(t){m=!0,x=t}finally{try{!v&&y.return&&y.return()}finally{if(m)throw x}}}var C=p instanceof Function?p:function(){return new f.default.Store(i()({},p,{state:p.state instanceof Function?p.state():{}}))}}},[95]);