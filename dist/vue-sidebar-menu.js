!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-sidebar-menu"]=t():e["vue-sidebar-menu"]=t()}(this,(function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=4)}([function(e,t,i){},function(e,t,i){var n=i(2);e.exports=d,e.exports.parse=s,e.exports.compile=function(e,t){return l(s(e,t))},e.exports.tokensToFunction=l,e.exports.tokensToRegExp=c;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function s(e,t){for(var i,n=[],s=0,r=0,l="",m=t&&t.delimiter||"/";null!=(i=o.exec(e));){var u=i[0],c=i[1],d=i.index;if(l+=e.slice(r,d),r=d+u.length,c)l+=c[1];else{var p=e[r],f=i[2],v=i[3],b=i[4],g=i[5],w=i[6],_=i[7];l&&(n.push(l),l="");var C=null!=f&&null!=p&&p!==f,y="+"===w||"*"===w,x="?"===w||"*"===w,I=i[2]||m,S=b||g;n.push({name:v||s++,prefix:f||"",delimiter:I,optional:x,repeat:y,partial:C,asterisk:!!_,pattern:S?h(S):_?".*":"[^"+a(I)+"]+?"})}}return r<e.length&&(l+=e.substr(r)),l&&n.push(l),n}function r(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function l(e){for(var t=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(t[i]=new RegExp("^(?:"+e[i].pattern+")$"));return function(i,o){for(var s="",l=i||{},a=(o||{}).pretty?r:encodeURIComponent,h=0;h<e.length;h++){var m=e[h];if("string"!=typeof m){var u,c=l[m.name];if(null==c){if(m.optional){m.partial&&(s+=m.prefix);continue}throw new TypeError('Expected "'+m.name+'" to be defined')}if(n(c)){if(!m.repeat)throw new TypeError('Expected "'+m.name+'" to not repeat, but received `'+JSON.stringify(c)+"`");if(0===c.length){if(m.optional)continue;throw new TypeError('Expected "'+m.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(u=a(c[d]),!t[h].test(u))throw new TypeError('Expected all "'+m.name+'" to match "'+m.pattern+'", but received `'+JSON.stringify(u)+"`");s+=(0===d?m.prefix:m.delimiter)+u}}else{if(u=m.asterisk?encodeURI(c).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):a(c),!t[h].test(u))throw new TypeError('Expected "'+m.name+'" to match "'+m.pattern+'", but received "'+u+'"');s+=m.prefix+u}}else s+=m}return s}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function h(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function m(e,t){return e.keys=t,e}function u(e){return e.sensitive?"":"i"}function c(e,t,i){n(t)||(i=t||i,t=[]);for(var o=(i=i||{}).strict,s=!1!==i.end,r="",l=0;l<e.length;l++){var h=e[l];if("string"==typeof h)r+=a(h);else{var c=a(h.prefix),d="(?:"+h.pattern+")";t.push(h),h.repeat&&(d+="(?:"+c+d+")*"),r+=d=h.optional?h.partial?c+"("+d+")?":"(?:"+c+"("+d+"))?":c+"("+d+")"}}var p=a(i.delimiter||"/"),f=r.slice(-p.length)===p;return o||(r=(f?r.slice(0,-p.length):r)+"(?:"+p+"(?=$))?"),r+=s?"$":o&&f?"":"(?="+p+"|$)",m(new RegExp("^"+r,u(i)),t)}function d(e,t,i){return n(t)||(i=t||i,t=[]),i=i||{},e instanceof RegExp?function(e,t){var i=e.source.match(/\((?!\?)/g);if(i)for(var n=0;n<i.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return m(e,t)}(e,t):n(e)?function(e,t,i){for(var n=[],o=0;o<e.length;o++)n.push(d(e[o],t,i).source);return m(new RegExp("(?:"+n.join("|")+")",u(i)),t)}(e,t,i):function(e,t,i){return c(s(e,i),t,i)}(e,t,i)}},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,i){"use strict";var n=i(0);i.n(n).a},function(e,t,i){"use strict";i.r(t),i.d(t,"SidebarMenu",(function(){return p}));var n=i(1),o=i.n(n);function s(e,t,i,n,o,s,r,l){var a,h="function"==typeof e?e.options:e;if(t&&(h.render=t,h.staticRenderFns=i,h._compiled=!0),n&&(h.functional=!0),s&&(h._scopeId="data-v-"+s),r?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},h._ssrRegister=a):o&&(a=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(h.functional){h._injectStyles=a;var m=h.render;h.render=function(e,t){return a.call(t),m(e,t)}}else{var u=h.beforeCreate;h.beforeCreate=u?[].concat(u,a):[a]}return{exports:e,options:h}}var r=s({name:"SidebarMenuLink",props:{item:{type:Object,required:!0},attributes:{type:Object,default:null}},computed:{isRouterLink:function(){return!!this.$router&&this.item.href&&!this.item.external},tag:function(){return this.isRouterLink?"router-link":"a"},href:function(){return this.item.href?this.item.href:"#"},target:function(){return this.item.external?"_blank":"_self"}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag,e._b({tag:"component",attrs:{tabindex:e.item.disabled&&-1,target:e.target}},"component",[e.isRouterLink?{to:e.href}:{href:e.href},e.attributes],!1),[e._t("default")],2)}),[],!1,null,null,null);r.options.__file="SidebarMenuLink.vue";var l=r.exports,a=s({name:"SidebarMenuIcon",props:{icon:{type:[String,Object],default:""}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.icon.element?e.icon.element:"i",e._b({tag:"component",staticClass:"vsm--icon",class:"string"==typeof e.icon||e.icon instanceof String?e.icon:e.icon.class},"component",e.icon.attributes,!1),[e._v("\n  "+e._s(e.icon.text)+"\n")])}),[],!1,null,null,null);a.options.__file="SidebarMenuIcon.vue";var h=a.exports,m=s({name:"SidebarMenuBadge",props:{badge:{type:Object,default:function(){}}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.badge.element?e.badge.element:"span",e._b({tag:"component",staticClass:"vsm--badge",class:e.badge.class},"component",e.badge.attributes,!1),[e._v("\n  "+e._s(e.badge.text)+"\n")])}),[],!1,null,null,null);m.options.__file="SidebarMenuBadge.vue";var u=s({name:"SidebarMenuItem",components:{SidebarMenuLink:l,SidebarMenuIcon:h,SidebarMenuBadge:m.exports},props:{item:{type:Object,required:!0},level:{type:Number,default:1},isCollapsed:{type:Boolean},isMobileItem:{type:Boolean,default:!1},mobileItem:{type:Object,default:null},activeShow:{type:Object,default:null},showChild:{type:Boolean,default:!1},showOneChild:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},disableHover:{type:Boolean,default:!1},mobileItemStyle:{type:Object,default:null}},data:function(){return{active:!1,exactActive:!1,itemShow:!1,itemHover:!1}},computed:{isFirstLevel:function(){return 1===this.level},show:{get:function(){return!!this.itemHasChild&&(!(!this.showChild&&!this.isMobileItem)||this.itemShow)},set:function(e){this.showOneChild&&(e?this.emitActiveShow(this.item):this.emitActiveShow(null)),this.itemShow=e}},itemLinkClass:function(){return["vsm--link",this.isMobileItem?"":"vsm--link_level-"+this.level,{"vsm--link_mobile-item":this.isMobileItem},{"vsm--link_hover":this.hover},{"vsm--link_active":this.active},{"vsm--link_exact-active":this.exactActive},{"vsm--link_disabled":this.item.disabled},this.item.class]},isItemHidden:function(){return this.isCollapsed?!(!this.item.hidden||void 0!==this.item.hiddenOnCollapse)||!0===this.item.hiddenOnCollapse:!0===this.item.hidden},hover:function(){return this.isCollapsed&&this.isFirstLevel?this.item===this.mobileItem:this.itemHover},itemHasChild:function(){return!!(this.item.child&&this.item.child.length>0)}},watch:{$route:function(){var e=this;setTimeout((function(){e.item.header||e.item.component||e.initState()}),1)},item:function(e,t){this.emitItemUpdate(e,t)},activeShow:function(){this.itemShow=this.item===this.activeShow}},created:function(){this.item.header||this.item.component||this.initState()},mounted:function(){this.$router||window.addEventListener("hashchange",this.initState)},destroyed:function(){this.$router||window.removeEventListener("hashchange",this.initState)},methods:{isLinkActive:function(e){return this.matchRoute(e)||this.isChildActive(e.child)||this.isAliasActive(e)},isLinkExactActive:function(e){return this.matchExactRoute(e.href)},isChildActive:function(e){var t=this;return!!e&&e.some((function(e){return t.isLinkActive(e)}))},isAliasActive:function(e){if(e.alias){var t=this.$router?this.$route.fullPath:window.location.pathname+window.location.search+window.location.hash;return Array.isArray(e.alias)?e.alias.some((function(e){return o()(e).test(t)})):o()(e.alias).test(t)}return!1},matchRoute:function(e){var t=e.href,i=e.exactPath;if(!t)return!1;if(this.$router){var n=this.$router.resolve(t).route;return i?n.path===this.$route.path:this.matchExactRoute(t)}return i?t===window.location.pathname:this.matchExactRoute(t)},matchExactRoute:function(e){return!!e&&(this.$router?this.$router.resolve(e).route.fullPath===this.$route.fullPath:e===window.location.pathname+window.location.search+window.location.hash)},clickEvent:function(e){this.item.disabled||(this.item.href||e.preventDefault(),this.emitItemClick(e,this.item,this),this.emitMobileItem(e,e.currentTarget.offsetParent),!this.itemHasChild||this.showChild||this.isMobileItem||this.item.href&&!this.exactActive||(this.show=!this.show))},emitMobileItem:function(e,t){var i=this;this.hover||this.isCollapsed&&this.isFirstLevel&&!this.isMobileItem&&(this.$emit("unset-mobile-item",!0),setTimeout((function(){i.mobileItem!==i.item&&i.$emit("set-mobile-item",{item:i.item,itemEl:t}),"click"!==e.type||i.itemHasChild||i.$emit("unset-mobile-item",!1)}),0))},initState:function(){this.initActiveState(),this.initShowState()},initActiveState:function(){this.active=this.isLinkActive(this.item),this.exactActive=this.isLinkExactActive(this.item)},initShowState:function(){this.itemHasChild&&!this.showChild&&(this.showOneChild&&this.active&&!this.show||this.active&&!this.show?this.show=!0:this.showOneChild&&!this.active&&this.show&&(this.show=!1))},mouseOverEvent:function(e){this.item.disabled||(e.stopPropagation(),this.itemHover=!0,this.disableHover||this.emitMobileItem(e,e.currentTarget))},mouseOutEvent:function(e){e.stopPropagation(),this.itemHover=!1},expandEnter:function(e){e.style.height=e.scrollHeight+"px"},expandAfterEnter:function(e){e.style.height="auto"},expandBeforeLeave:function(e){this.isCollapsed&&this.isFirstLevel?e.style.display="none":e.style.height=e.scrollHeight+"px"}},inject:["emitActiveShow","emitItemClick","emitItemUpdate"]},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.item.component&&!e.isItemHidden?i(e.item.component,e._b({tag:"component"},"component",e.item.props,!1)):e.item.header&&!e.isItemHidden?i("div",e._b({staticClass:"vsm--header",class:e.item.class},"div",e.item.attributes,!1),[e._v("\n  "+e._s(e.item.title)+"\n")]):e.isItemHidden?e._e():i("div",{staticClass:"vsm--item",class:[{"vsm--item_open":e.show}],on:{mouseover:e.mouseOverEvent,mouseout:e.mouseOutEvent}},[i("sidebar-menu-link",{class:e.itemLinkClass,attrs:{item:e.item,attributes:e.item.attributes},nativeOn:{click:function(t){return e.clickEvent(t)}}},[e.item.icon&&!e.isMobileItem?i("sidebar-menu-icon",{attrs:{icon:e.item.icon}}):e._e(),e._v(" "),i("transition",{attrs:{name:"fade-animation",appear:e.isMobileItem}},[e.isCollapsed&&!e.isFirstLevel||!e.isCollapsed||e.isMobileItem?[i("span",{staticClass:"vsm--title"},[e._v(e._s(e.item.title))])]:e._e()],2),e._v(" "),e.isCollapsed&&!e.isFirstLevel||!e.isCollapsed||e.isMobileItem?[e.item.badge?i("sidebar-menu-badge",{attrs:{badge:e.item.badge}}):e._e(),e._v(" "),e.itemHasChild?i("div",{staticClass:"vsm--arrow",class:[{"vsm--arrow_open":e.show},{"vsm--arrow_slot":e.$slots["dropdown-icon"]}]},[e._t("dropdown-icon")],2):e._e()]:e._e()],2),e._v(" "),e.itemHasChild?[e.isCollapsed&&!e.isFirstLevel||!e.isCollapsed||e.isMobileItem?[i("transition",{attrs:{appear:e.isMobileItem,name:"expand"},on:{enter:e.expandEnter,afterEnter:e.expandAfterEnter,beforeLeave:e.expandBeforeLeave}},[e.show?i("div",{staticClass:"vsm--dropdown",class:e.isMobileItem&&"vsm--dropdown_mobile-item",style:e.isMobileItem&&e.mobileItemStyle.dropdown},[i("div",{staticClass:"vsm--list"},e._l(e.item.child,(function(t,n){return i("sidebar-menu-item",{key:n,attrs:{item:t,level:e.level+1,"show-child":e.showChild,rtl:e.rtl,"is-collapsed":e.isCollapsed}},[e._t("dropdown-icon",null,{slot:"dropdown-icon"})],2)})),1)]):e._e()])]:e._e()]:e._e()],2)}),[],!1,null,null,null);u.options.__file="SidebarMenuItem.vue";var c={name:"SidebarMenu",components:{SidebarMenuItem:u.exports},props:{menu:{type:Array,required:!0},collapsed:{type:Boolean,default:!1},width:{type:String,default:"350px"},widthCollapsed:{type:String,default:"50px"},showChild:{type:Boolean,default:!1},theme:{type:String,default:""},showOneChild:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},relative:{type:Boolean,default:!1},hideToggle:{type:Boolean,default:!1},disableHover:{type:Boolean,default:!1}},data:function(){return{isCollapsed:this.collapsed,mobileItem:null,mobileItemPos:0,mobileItemHeight:0,mobileItemTimeout:null,activeShow:null,parentHeight:0,parentWidth:0,parentOffsetTop:0,parentOffsetLeft:0}},computed:{sidebarWidth:function(){return this.isCollapsed?this.widthCollapsed:this.width},sidebarClass:function(){return[this.isCollapsed?"vsm_collapsed":"vsm_expanded",this.theme?"vsm_"+this.theme:"",this.rtl?"vsm_rtl":"",this.relative?"vsm_relative":""]},mobileItemStyle:function(){return{item:[{position:"absolute"},{top:this.mobileItemPos+"px"},this.rtl?{right:"0px"}:{left:"0px"},this.rtl?{"padding-right":this.sidebarWidth}:{"padding-left":this.sidebarWidth},this.rtl&&{direction:"rtl"},{"z-index":0},{width:this.parentWidth-this.parentOffsetLeft+"px"},{"max-width":this.width}],dropdown:[{position:"absolute"},{top:this.mobileItemHeight+"px"},{width:"100%"},{"max-height":this.parentHeight-(this.mobileItemPos+this.mobileItemHeight)-this.parentOffsetTop+"px"},{"overflow-y":"auto"}],background:[{position:"absolute"},{top:"0px"},{left:"0px"},{right:"0px"},{width:"100%"},{height:this.mobileItemHeight+"px"},{"z-index":-1}]}}},watch:{collapsed:function(e){this.isCollapsed!==this.collapsed&&(this.isCollapsed=e,this.mobileItem=null)}},methods:{onMouseLeave:function(){this.unsetMobileItem(!1,300)},onMouseEnter:function(){this.isCollapsed&&this.mobileItemTimeout&&clearTimeout(this.mobileItemTimeout)},onToggleClick:function(){this.isCollapsed=!this.isCollapsed,this.mobileItem=null,this.$emit("toggle-collapse",this.isCollapsed)},onActiveShow:function(e){this.activeShow=e},onItemClick:function(e,t,i){this.$emit("item-click",e,t,i)},setMobileItem:function(e){var t=e.item,i=e.itemEl;if(this.mobileItem!==t){var n=this.$el.getBoundingClientRect().top,o=i.children[0].getBoundingClientRect(),s=o.top,r=o.height,l=s-n;this.initParentOffsets(),this.mobileItem=t,this.mobileItemPos=l,this.mobileItemHeight=r}},unsetMobileItem:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:800;this.mobileItem&&(this.mobileItemTimeout&&clearTimeout(this.mobileItemTimeout),e?this.mobileItem=null:this.mobileItemTimeout=setTimeout((function(){t.mobileItem=null}),i))},initParentOffsets:function(){var e=this.$el.getBoundingClientRect(),t=e.top,i=e.left,n=e.right,o=this.relative?this.$el.parentElement:document.documentElement;if(this.parentHeight=o.clientHeight,this.parentWidth=o.clientWidth,this.relative){var s=o.getBoundingClientRect(),r=s.top,l=s.left;this.parentOffsetTop=t-(r+o.clientTop),this.parentOffsetLeft=this.rtl?this.parentWidth-n+(l+o.clientLeft):i-(l+o.clientLeft)}else this.parentOffsetTop=t,this.parentOffsetLeft=this.rtl?this.parentWidth-n:i},onItemUpdate:function(e,t){t===this.mobileItem&&(this.mobileItem=e),t===this.activeShow&&(this.activeShow=e)}},provide:function(){return{emitActiveShow:this.onActiveShow,emitItemClick:this.onItemClick,emitItemUpdate:this.onItemUpdate}}},d=(i(3),s(c,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-sidebar-menu",class:e.sidebarClass,style:[{"max-width":e.sidebarWidth}],on:{mouseleave:e.onMouseLeave,mouseenter:e.onMouseEnter}},[e._t("header"),e._v(" "),i("div",{staticClass:"vsm--scroll-wrapper",style:e.isCollapsed&&[e.rtl?{"margin-left":"-17px"}:{"margin-right":"-17px"}]},[i("div",{staticClass:"vsm--list",style:e.isCollapsed&&{width:e.widthCollapsed}},e._l(e.menu,(function(t,n){return i("sidebar-menu-item",{key:n,attrs:{item:t,"is-collapsed":e.isCollapsed,"active-show":e.activeShow,"show-one-child":e.showOneChild,"show-child":e.showChild,rtl:e.rtl,"mobile-item":e.mobileItem,"disable-hover":e.disableHover},on:{"set-mobile-item":e.setMobileItem,"unset-mobile-item":e.unsetMobileItem}},[e._t("dropdown-icon",null,{slot:"dropdown-icon"})],2)})),1),e._v(" "),e.isCollapsed?i("div",{staticClass:"vsm--mobile-item",style:e.mobileItemStyle.item},[e.mobileItem?i("sidebar-menu-item",{attrs:{item:e.mobileItem,"is-mobile-item":!0,"mobile-item-style":e.mobileItemStyle,"is-collapsed":e.isCollapsed,"show-child":e.showChild,rtl:e.rtl,"disable-hover":e.disableHover}},[e._t("dropdown-icon",null,{slot:"dropdown-icon"})],2):e._e(),e._v(" "),i("transition",{attrs:{name:"slide-animation"}},[e.mobileItem?i("div",{staticClass:"vsm--mobile-bg",style:e.mobileItemStyle.background}):e._e()])],1):e._e()]),e._v(" "),e._t("footer"),e._v(" "),e.hideToggle?e._e():i("button",{staticClass:"vsm--toggle-btn",class:{"vsm--toggle-btn_slot":e.$slots["toggle-icon"]},on:{click:e.onToggleClick}},[e._t("toggle-icon")],2)],2)}),[],!1,null,null,null));d.options.__file="SidebarMenu.vue";var p=d.exports;t.default={install:function(e){e.component("sidebar-menu",p)}}}])}));
//# sourceMappingURL=vue-sidebar-menu.js.map