"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[229],{8058:function(t,e,n){n.d(e,{Z:function(){return o}});var s=n(4254),a=(n(9653),n(5598)),l=n(171),r=n(3553),o=(0,r.Z)(l.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return(0,s.Z)({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,a.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},1909:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",t._l(t.tableHeaderItems,(function(e,s){return n("th",{key:s,class:[t.textClass,"black--text"]},[n("span",{domProps:{innerHTML:t._s(e)}})])})),0)]),n("tbody",t._l(t.tableRowItems,(function(e,s){return n("tr",{key:s,class:[t.textClass,"black--text"]},t._l(e,(function(e,s){return n("td",{key:s,class:[t.textClass,"black--text"]},[n("span",{domProps:{innerHTML:t._s(e)}})])})),0)})),0)]},proxy:!0}])})},a=[],l=(n(7327),n(1539),{name:"TableBlock",data:function(){return{}},props:{block:{type:[Object]}},methods:{},computed:{tableHeaderItems:function(){var t=this.block.data.content[0];return t},tableRowItems:function(){var t=this.block.data.content.filter((function(t,e){return e>0}));return t},textClass:function(){var t,e,n,s="text-".concat(null===(t=this.block)||void 0===t||null===(e=t.tunes)||void 0===e||null===(n=e.alignmentTune)||void 0===n?void 0:n.alignment)||0;return s}}}),r=l,o=n(1001),i=n(3453),u=n.n(i),d=n(8058),c=(0,o.Z)(r,s,a,!1,null,null,null),h=c.exports;u()(c,{VSimpleTable:d.Z})}}]);
//# sourceMappingURL=TableBlock-legacy.2f38323f.js.map