(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Page"],{"0bc6":function(t,e,a){},2048:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.$apollo.loading?a("div",{staticClass:"text-center"},[a("v-progress-circular",{attrs:{value:20}})],1):a("div",{staticClass:"page-wrap"},[a("Breadcrumbs"),t.page.page_builder?a("div",t._l(t.page.page_builder.blocks,(function(e){return a("div",{key:e.id},[a("keep-alive",[a(t.pageBlock(e.type),{key:e.id,tag:"component",staticClass:"block-component",attrs:{block:e}})],1)],1)})),0):t._e()],1)])},r=[],i=(a("d3b7"),a("3ca3"),a("ddb0"),a("ac1f"),a("5319"),a("7db0"),a("4de4"),a("0306")),s=function(){return Promise.resolve().then(a.bind(null,"cf1b"))},c=function(){return a.e("TextBlock").then(a.bind(null,"30d2"))},o=function(){return a.e("TabsBlock").then(a.bind(null,"712c"))},u=function(){return a.e("ListBlock").then(a.bind(null,"b134"))},l=function(){return a.e("TableBlock").then(a.bind(null,"6229"))},d=function(){return a.e("CodeBlock").then(a.bind(null,"11d9"))},b=function(){return a.e("ImageBlock").then(a.bind(null,"c7d7"))},p={name:"Page",metaInfo:function(){return{title:this.metaTitle||this.pageTitle,meta:[{name:"description",content:this.metaDescription},{property:"og:title",content:this.metaTitle},{property:"og:site_name",content:"Office of Natural Resources Revenue"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"}]}},components:{Breadcrumbs:s,TextBlock:c,TabsBlock:o,ListBlock:u,TableBlock:l,CodeBlock:d,ImageBlock:b},data:function(){return{pages:[],pages_by_id:[],code:""}},apollo:{pages:{query:i["f"],loadingKey:"loading..."},pages_by_id:{query:i["e"],loadingKey:"loading...",variables:function(){return{ID:this.findPageBySlug.id}}}},props:{slug:String},created:function(){this.$apollo.queries.pages_by_id.refetch()},methods:{pageBlock:function(t){var e;switch(t){case"header":case"paragraph":e=c;break;case"tabs":e=o;break;case"list":e=u;break;case"table":e=l;break;case"code":e=d;break;case"image":e=b;break;default:e=c;break}return e}},computed:{findPageBySlug:function(){var t,e=this,a=this.$route.path,n=a.replace(/\//g,"");return this.pages&&(t=this.slug?this.pages.find((function(t){return t.slug===e.slug})):this.pages.find((function(t){return t.slug===n}))),t},page:function(){return this.pages_by_id},cardBlockCount:function(){var t=this.pages_by_id&&this.pages_by_id.page_blocks.filter((function(t){return"card_blocks"===t.item.__typename}));return t},metaTitle:function(){return this.pages_by_id.meta_title},metaDescription:function(){return this.pages_by_id.meta_description},pageTitle:function(){return this.pages_by_id.title}}},m=p,f=(a("c918"),a("2877")),h=a("6544"),g=a.n(h),v=a("490a"),_=Object(f["a"])(m,n,r,!1,null,"c7bbdbfe",null);e["default"]=_.exports;g()(_,{VProgressCircular:v["a"]})},"4a67":function(t,e,a){},"4eb2":function(t,e,a){},"90a5":function(t,e,a){"use strict";a("4eb2")},9944:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));a("ac1f"),a("1276"),a("d81d"),a("159b"),a("fb6a"),a("5319");var n=function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t);return e},r=function(t){return t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))}},abd3:function(t,e,a){},b8fa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contacts-wrap"},[a("Breadcrumbs"),t._l(t.contacts,(function(e){return a("v-card",{key:e.id,staticClass:"mx-auto v-card",attrs:{"max-width":"100%"}},[a("v-list",[a("v-subheader",[t._v(" Category: Paying > Federal accounts receivable, billing, and finance > Company Contact ")]),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.primary_contact)}},[t._v(t._s(e.primary_contact))])],1),e.primary_email?a("v-list-item-icon",[a("v-icon",[t._v(" mdi-email ")]),a("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(e.primary_email))])],1):t._e(),e.primary_phone?a("v-list-item-icon",[a("v-icon",[t._v(" mdi-phone ")]),a("span",{staticStyle:{"margin-left":"8px"}},[t._v(t._s(e.primary_phone))])],1):t._e()],1)],1)],1)}))],2)},r=[],i=a("0306"),s=a("cf1b"),c={name:"Contact",metaInfo:{title:"Contact"},data:function(){return{contacts:[]}},components:{Breadcrumbs:s["default"]},apollo:{contacts:{query:i["b"],loadingKey:"loading...",result:function(t){var e=t.data;e&&(console.log("contacts data yo-------\x3e ",e),this.contacts=e.contacts)}}}},o=c,u=(a("90a5"),a("2877")),l=a("6544"),d=a.n(l),b=a("b0af"),p=a("132d"),m=a("8860"),f=a("da13"),h=a("5d23"),g=a("34c3"),v=a("e0c7"),_=Object(u["a"])(o,n,r,!1,null,"d4bc0b60",null);e["default"]=_.exports;d()(_,{VCard:b["a"],VIcon:p["a"],VList:m["a"],VListItem:f["a"],VListItemContent:h["a"],VListItemIcon:g["a"],VListItemTitle:h["b"],VSubheader:v["a"]})},c918:function(t,e,a){"use strict";a("4a67")},cf1b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-breadcrumbs",{attrs:{divider:"|",items:t.breadcrumbs},scopedSlots:t._u([{key:"breadcrumb",fn:function(e){var n=e.breadcrumb;return[a("v-breadcrumbs-item",[t._v(" "+t._s(n)+" ")])]}}])})},r=[],i=(a("ac1f"),a("5319"),a("7db0"),a("1276"),a("99af"),a("0306")),s=a("9944"),c={name:"Breadcrumbs",data:function(){return{pages:[]}},apollo:{pages:{query:i["f"],loadingKey:"loading..."}},methods:{prettyBreadcrumb:function(t){var e=t.replace(/-/g," ").replace(/^./,(function(t){return t.toUpperCase()}));return Object(s["b"])(e)},getPageTitleBySlug:function(t){var e=this.pages.find((function(e){return e.slug===t}));return e.title}},computed:{breadcrumbs:function(){var t=this.$route.path.split("/");t.shift();for(var e=[],a="",n=0,r=0;r<t.length;++r)a="".concat(a,"/").concat(t[r]),this.$route.matched[r]&&Object.hasOwnProperty.call(this.$route.matched[r],"meta")&&Object.hasOwnProperty.call(this.$route.matched[r].meta,"breadcrumb")&&(e.push({href:0!==r&&t[r-(r-n)]?"/"+t[r-(r-n)]+a:a,disabled:r+1===t.length,text:this.$route.matched[r].meta.breadcrumb||this.getPageTitleBySlug(t[r])}),n=r,a="");var i={href:"/",disabled:!1,text:"Home"};return e.unshift(i),e}}},o=c,u=a("2877"),l=a("6544"),d=a.n(l),b=a("5530"),p=(a("a15b"),a("abd3"),a("ade3")),m=a("1c87"),f=a("58df"),h=Object(f["a"])(m["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(p["a"])({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),a=e.tag,n=e.data;return t("li",[t(a,Object(b["a"])(Object(b["a"])({},n),{},{attrs:Object(b["a"])(Object(b["a"])({},n.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),g=a("80d2"),v=Object(g["g"])("v-breadcrumbs__divider","li"),_=a("7560"),y=Object(f["a"])(_["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return Object(b["a"])({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,a=[],n=0;n<this.items.length;n++){var r=this.items[n];a.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(h,{key:a.join("."),props:r},[r.text])),n<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),k=Object(u["a"])(o,n,r,!1,null,null,null);e["default"]=k.exports;d()(k,{VBreadcrumbs:y,VBreadcrumbsItem:h})},e0c7:function(t,e,a){"use strict";var n=a("5530"),r=(a("0bc6"),a("7560")),i=a("58df");e["a"]=Object(i["a"])(r["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(n["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=Page.00e29771.js.map