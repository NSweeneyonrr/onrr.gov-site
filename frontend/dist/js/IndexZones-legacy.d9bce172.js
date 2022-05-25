"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[567],{6643:function(e,t,n){n.d(t,{Z:function(){return s}});n(7327),n(1539),n(7941),n(6755),n(2222),n(9941),n(6428),n(3210),n(9600);var i=n(144);function r(e){return i.Z.extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,n){var i=n.props,r=n.data,o=n.children;r.staticClass="".concat(e," ").concat(r.staticClass||"").trim();var s=r.attrs;if(s){r.attrs={};var a=Object.keys(s).filter((function(e){if("slot"===e)return!1;var t=s[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}));a.length&&(r.staticClass+=" ".concat(a.join(" ")))}return i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),t(i.tag,r,o)}})}var o=n(9312),s=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var n,i=t.props,r=t.data,s=t.children,a=r.attrs;return a&&(r.attrs={},n=Object.keys(a).filter((function(e){if("slot"===e)return!1;var t=a[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}))),i.id&&(r.domProps=r.domProps||{},r.domProps.id=i.id),e(i.tag,(0,o.ZP)(r,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),s)}})},1884:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-4"},[n("v-card",[n("v-data-table",{attrs:{headers:e.headers,items:e.collectionItems,"item-key":"title"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("SelectField",{attrs:{fields:e.indexZonesInputField}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("MultipleSelectField",{attrs:{fields:e.indexZonesYearsInputField}})],1)],1)],1)]},proxy:!0},{key:"item.index_zone",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.index_zone)+" ("+e._s(n.abbreviation)+") ")]}},{key:"item.year",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.year)+" ")]}},{key:"item.month",fn:function(t){var n=t.item;return[e._v(" "+e._s(e.formatMonth(n.month))+" ")]}},{key:"item.price",fn:function(t){var n=t.item;return[e._v(" "+e._s(e.formatToDollarInt(n.price))+" ")]}}],null,!0)})],1)],1)},r=[],o=n(7174),s=(n(1539),n(8783),n(3948),n(1249),n(6699),n(2707),n(4747),n(4916),n(3123),n(8930)),a=function(){return Promise.all([n.e(860),n.e(248)]).then(n.bind(n,9571))},l=function(){return n.e(486).then(n.bind(n,1622))},d={name:"IndexZonesCollection",data:function(){return{indexZonesInputField:{items:[],label:"Index Zone",ref:"indexZoneSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"index_zone",clearable:!0},indexZonesYearsInputField:{items:[],label:"All Years",ref:"indexZoneSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"years"}}},props:{collection:[Array,Object]},components:{SelectField:a,MultipleSelectField:l},methods:{getMonth:s.jw,getYear:s.So,formatToDollarInt:s.Pl,formatMonth:function(e){return(0,s.jw)(e,"long")},formatYear:function(e){return(0,s.So)(e)},formatPrice:function(e){return(0,s.Pl)(e)},indexZonesList:function(){var e=[];this.collectionItems&&this.collectionItems.map((function(t){t.index_zone&&(e.includes(t.index_zone)||e.push(t.index_zone))})),this.indexZonesInputField.items=(0,o.Z)(e.sort())},indexZonesYearList:function(){var e=[];this.collectionItems&&this.collectionItems.map((function(t){t.year&&(e.includes(t.year)||e.push(t.year))})),this.indexZonesYearsInputField.items=(0,o.Z)(e.sort().reverse())},indexZonesFilter:function(e){return!this.indexZonesInputField.selected||null===this.indexZonesInputField.selected||0===this.indexZonesInputField.selected.length||e.toLowerCase()===this.indexZonesInputField.selected.toLowerCase()},indexZonesYearFilter:function(e){return!this.indexZonesYearsInputField.selected||null===this.indexZonesYearsInputField.selected||0===this.indexZonesYearsInputField.selected.length||this.indexZonesYearsInputField.selected.indexOf(e)>=0}},computed:{headers:function(){return[{text:"Index Zone",align:"start",sortable:!0,value:"index_zone",filter:this.indexZonesFilter},{text:"Year",align:"start",sortable:!0,value:"year",filter:this.indexZonesYearFilter},{text:"Month",align:"start",sortable:!1,value:"month"},{text:"Price",align:"end",sortable:!1,value:"price"}]},collectionItems:function(){var e=this,t=[];return this.collection&&this.collection.map((function(n){n.index_zones.forEach((function(i){var r={};r.index_zone=i.index_zone,r.year=e.formatYear(n.date),r.month=n.date,r.price=i.price,r.abbreviation=i.abbreviation,t.push(r)}))})),t}},created:function(){var e=this;setTimeout((function(){e.indexZonesList(),e.indexZonesYearList()}),300)},mounted:function(){var e=this.$route.query.index_zone,t=this.$route.query.years&&this.$route.query.years.split(",");this.indexZonesInputField.selected=e||null,this.indexZonesYearsInputField.selected=t||null}},c=d,u=n(1001),f=n(3453),p=n.n(f),m=n(9391),h=n(3121),x=n(6643),v=n(9049),Z=n(4722),y=(0,u.Z)(c,i,r,!1,null,null,null),I=y.exports;p()(y,{VCard:m.Z,VCol:h.Z,VContainer:x.Z,VDataTable:v.Z,VRow:Z.Z})}}]);
//# sourceMappingURL=IndexZones-legacy.d9bce172.js.map