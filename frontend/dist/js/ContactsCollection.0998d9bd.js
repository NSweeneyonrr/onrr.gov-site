(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ContactsCollection"],{"17b3":function(t,e,a){},"3e05":function(t,e,a){},"615b":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return c}));var i=a("b0af"),n=a("80d2"),r=Object(n["i"])("v-card__actions"),s=Object(n["i"])("v-card__subtitle"),o=Object(n["i"])("v-card__text"),c=Object(n["i"])("v-card__title");i["a"]},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var i=a("2b0e");function n(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var i=a.props,n=a.data,r=a.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var s=n.attrs;if(s){n.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),e(i.tag,n,r)}})}var r=a("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,i=e.props,n=e.data,s=e.children,o=n.attrs;return o&&(n.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(n.domProps=n.domProps||{},n.domProps.id=i.id),t(i.tag,Object(r["a"])(n,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),s)}})},a889:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticClass:"pa-0 mt-10"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("TextField",{attrs:{fields:t.searchInputField}})],1)],1),a("v-row",[a("v-col",[a("div",{staticClass:"text-left mt-4"},[t._v(" Displaying "+t._s(t.visibleItems.length)+" of "+t._s(t.collectionItems.length)+" contacts ")])]),a("v-col",[a("div",{staticClass:"text-right mb-4"},[a("v-pagination",{attrs:{color:"secondary",length:Math.ceil(t.collectionItems.length/t.perPage)},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])],1)],1),t.visibleItems.length>0?a("div",[a("v-fade-transition",{attrs:{group:"","hide-on-leave":"","leave-absolute":"",origin:"top left"}},t._l(t.visibleItems,(function(e,i){return a("div",{key:i,staticClass:"mb-5"},[a("h2",{staticClass:"collection-category pa-3 mb-3"},[t._v(" "+t._s(e.header)+" "),null!==e.agency?a("span",[t._v("("+t._s(e.agency)+")")]):t._e(),null!==e.operatorNumber?a("span",[t._v("(Operator #: "+t._s(e.operatorNumber)+")")]):t._e()]),a("v-container",{staticClass:"pa-0"},[a("v-row",t._l(e.contacts,(function(e,i){return a("v-col",{key:i,attrs:{cols:"12",sm:"4"}},[e.contact?a("v-card",{staticClass:"text-wrap contact-card",attrs:{elevation:"1"}},[a("v-card-title",{class:[t.formatToSlug(e.role).toLowerCase(),"contact-title"]},[t._v(t._s(e.role))]),a("v-card-text",{staticClass:"pa-4"},[e.contact?a("div",{staticClass:"contact contact-row"},[t._v(t._s(e.contact))]):t._e(),e.email?a("div",{staticClass:"contact-row"},[a("v-icon",{staticClass:"mr-1",attrs:{color:"secondary"}},[t._v("mdi-email")]),a("a",{attrs:{href:"mailto:"+e.email}},[t._v(t._s(e.email))])],1):t._e(),e.phone?a("div",{staticClass:"contact-row"},[a("v-icon",{staticClass:"mr-1",attrs:{color:"secondary"}},[t._v("mdi-phone")]),a("a",{attrs:{href:"tel:"+e.phone}},[t._v(t._s(e.phone))])],1):t._e(),e.fax?a("div",{staticClass:"contact-row"},[a("v-icon",{staticClass:"mr-1",attrs:{color:"secondary"}},[t._v("mdi-fax")]),a("a",{attrs:{href:"tel:"+e.fax}},[t._v(t._s(e.fax))])],1):t._e()])],1):t._e()],1)})),1)],1)],1)})),0)],1):a("div",[t._v("No contacts found.")]),a("v-container",{staticClass:"pa-0"},[a("v-row",[a("v-col",[a("div",{staticClass:"text-left mt-4"},[t._v(" Displaying "+t._s(t.visibleItems.length)+" of "+t._s(t.collectionItems.length)+" contacts ")])]),a("v-col",[a("div",{staticClass:"text-right mb-4"},[a("v-pagination",{attrs:{color:"secondary",length:Math.ceil(t.collectionItems.length/t.perPage)},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])],1)],1)],1)},n=[],r=a("5530"),s=(a("d3b7"),a("3ca3"),a("ddb0"),a("ac1f"),a("1276"),a("caad"),a("2532"),a("4de4"),a("d81d"),a("fb6a"),a("9944")),o=function(){return a.e("TextField").then(a.bind(null,"bc8c"))},c={name:"ContactsCollection",data:function(){return{page:1,perPage:5,searchInputField:{label:"Search contacts",text:null,ref:"searchContactsInput",color:"secondary",icon:"mdi-magnify"}}},props:{collection:[Object,Array],collectionName:String,collectionLayout:String,collectionPage:String,collectionTab:String,collectionAccordion:String,showToolbar:Boolean},methods:{formatToSlug:s["b"],resetPagination:function(){return this.page=1},findSearchValue:function(t){return this.searchInputField.text.toLowerCase().split(" ").every((function(e){return t&&t.toLowerCase().includes(e)}))},filterProperties:function(t){var e=this,a=t.filter((function(t){var a=t.letter,i=t.header,n=t.operatorNumber,r=t.companyName,s=t.agency;return e.findSearchValue(a)||e.findSearchValue(i)||e.findSearchValue(n)||e.findSearchValue(r)||e.findSearchValue(s)}));return a||t},filterContacts:function(t){var e=this,a=t.map((function(t){return Object(r["a"])(Object(r["a"])({},t),{},{contacts:t.contacts.filter((function(t){if(null!==t.contact)return e.findSearchValue(t.contact)||e.findSearchValue(t.email)||e.findSearchValue(t.role)}))})})).filter((function(t){return t.contacts.length>0}));return a||t}},components:{TextField:o},computed:{collectionItems:function(){var t=this,e=[];return this.collection&&this.collection.filter((function(a){if(a.page===t.collectionPage&&a.tab===t.collectionTab&&a.accordion===t.collectionAccordion){var i={};i.__typename=a.__typename,i.id=a.id,i.status=a.status,i.page=a.page,i.tab=a.tab,i.accordion=a.accordion,i.company=a.company_yn,i.letter=a.letter,i.header=a.header,i.companyName=a.company_name,i.operatorNumber=a.operator_number,i.agency=a.agency,i.contacts=[{contact:a.primary_contact,role:a.primary_role,email:a.email,phone:a.phone,fax:a.fax},{contact:a.contact_2,role:a.role_2,email:a.email_2,phone:a.phone_2},{contact:a.contact_3,role:a.role_3,email:a.email_3,phone:a.phone_3},{contact:a.contact_4,role:a.role_4,email:a.email_4,phone:a.phone_4},{contact:a.contact_5,role:a.role_5,email:a.email_5,phone:a.phone_5},{contact:a.contact_6,role:a.role_6,email:a.email_6,phone:a.phone_6}],e.push(i)}})),this.searchInputField.text?0===this.filterProperties(e).length?(this.resetPagination(),this.filterContacts(e)||e):(this.resetPagination(),this.filterProperties(e)||e):e},visibleItems:function(){return this.collectionItems.slice((this.page-1)*this.perPage,this.page*this.perPage)}}},l=c,u=(a("d255"),a("2877")),h=a("6544"),d=a.n(h),p=a("b0af"),v=a("99d9"),f=a("62ad"),g=a("a523"),m=a("0789"),b=a("132d"),_=a("2909"),y=(a("a9e3"),a("99af"),a("25f0"),a("17b3"),a("9d26")),C=a("dc22"),x=a("a9ad"),S=a("de2c"),I=a("7560"),w=a("58df"),P=Object(w["a"])(x["a"],Object(S["a"])({onVisible:["init"]}),I["a"]).extend({name:"v-pagination",directives:{Resize:C["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(r["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,i=Math.floor(e/2),n=this.length-i+1+a;if(this.value>i&&this.value<n){var r=1,s=this.length,o=this.value-i+2,c=this.value+i-2-a,l=o-1===r+1?2:"...",u=c+1===s-1?c+1:"...";return[1,l].concat(Object(_["a"])(this.range(o,c)),[u,this.length])}if(this.value===i){var h=this.value+i-1-a;return[].concat(Object(_["a"])(this.range(1,h)),["...",this.length])}if(this.value===n){var d=this.value-i+1;return[1,"..."].concat(Object(_["a"])(this.range(d,this.length)))}return[].concat(Object(_["a"])(this.range(1,i)),["..."],Object(_["a"])(this.range(n,this.length)))}},watch:{value:function(){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var i=t;i<=e;i++)a.push(i);return a},genIcon:function(t,e,a,i,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{disabled:a,type:"button","aria-label":n},on:a?{}:{click:i}},[t(y["a"],[e])])])},genItem:function(t,e){var a=this,i=e===this.value&&(this.color||"primary"),n=e===this.value,r=n?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":n,"aria-label":this.$vuetify.lang.t(r,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,i){return t("li",{key:i},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),$=a("0fd9"),j=Object(u["a"])(l,i,n,!1,null,"569e2974",null);e["default"]=j.exports;d()(j,{VCard:p["a"],VCardText:v["b"],VCardTitle:v["c"],VCol:f["a"],VContainer:g["a"],VFadeTransition:m["d"],VIcon:b["a"],VPagination:P,VRow:$["a"]})},b0af:function(t,e,a){"use strict";var i=a("5530"),n=(a("a9e3"),a("0481"),a("4069"),a("615b"),a("10d2")),r=a("297c"),s=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(r["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},d255:function(t,e,a){"use strict";a("3e05")}}]);
//# sourceMappingURL=ContactsCollection.0998d9bd.js.map