(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["CardBlock"],{"615b":function(t,e,c){},"6bed":function(t,e,c){"use strict";c("c583")},"99d9":function(t,e,c){"use strict";c.d(e,"a",(function(){return n})),c.d(e,"b",(function(){return i})),c.d(e,"c",(function(){return s}));var a=c("b0af"),r=c("80d2"),o=Object(r["i"])("v-card__actions"),n=Object(r["i"])("v-card__subtitle"),i=Object(r["i"])("v-card__text"),s=Object(r["i"])("v-card__title");a["a"]},b0af:function(t,e,c){"use strict";var a=c("5530"),r=(c("a9e3"),c("0481"),c("4069"),c("615b"),c("10d2")),o=c("297c"),n=c("1c87"),i=c("58df");e["a"]=Object(i["a"])(o["a"],n["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),c=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(c,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},c583:function(t,e,c){},f8bd:function(t,e,c){"use strict";c.r(e);var a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("v-card",{staticClass:"card v-card__item card-block",class:t.blockColor},[t.cardTitle?c("v-card-title",{staticClass:"text-h5 black--text"},[t._v(" "+t._s(t.cardTitle)+" ")]):t._e(),t.cardSubtitle?c("v-card-subtitle",{staticClass:"v-card__subtitle black--text"},[t._v(" "+t._s(t.cardSubtitle)+" ")]):t._e(),c("v-card-text",{staticClass:"text--primary body-1"},[0===t.blockItems.length?c("div",t._l(t.block.item.block_content.blocks,(function(t){return c("div",{key:t.id},[c("EditorBlock",{attrs:{blockContent:t}})],1)})),0):t._e(),t.blockItems.length>1?c("LayoutBlock",{attrs:{layoutBlocks:t.blockItems}}):t._e()],1)],1)},r=[],o=c("2909"),n=(c("d3b7"),c("3ca3"),c("ddb0"),c("4de4"),c("1b62")),i=function(){return Promise.all([c.e("Home~IBMPCollection~IndexZones~IndianGasMajorPortion~LayoutBlock~ReporterLettersCollection~Rulemakin~0c183eab"),c.e("LayoutBlock")]).then(c.bind(null,"0b83"))},s={mixins:[n["b"],n["d"]],name:"CardBlock",data:function(){return{data:{}}},props:{cardTitle:{type:String},cardSubtitle:{type:String},cardContent:{type:[String,Array]},block:[Array,Object]},components:{LayoutBlock:i},mounted:function(){},computed:{blocks:function(){var t=this.block.block_content.blocks;return t},blockColor:function(){return this.block.item.block_color},blockItems:function(){var t=Object(o["a"])(this.block.item.card_content_blocks.filter((function(t){return null!==t.item})));return t}}},l=s,d=(c("6bed"),c("2877")),u=c("6544"),b=c.n(u),k=c("b0af"),v=c("99d9"),f=Object(d["a"])(l,a,r,!1,null,"4cc910bf",null);e["default"]=f.exports;b()(f,{VCard:k["a"],VCardSubtitle:v["a"],VCardText:v["b"],VCardTitle:v["c"]})}}]);
//# sourceMappingURL=CardBlock.e563245d.js.map