(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["IBMPCollection"],{2751:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pt-4"},[a("v-card",[a("v-data-table",{attrs:{headers:e.headers,items:e.collectionItems,"item-key":"title"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("SelectField",{attrs:{fields:e.designatedAreaInputField}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("MultipleSelectField",{attrs:{fields:e.ibmpYearsInputField}})],1)],1)],1)]},proxy:!0},{key:"item.designatedArea",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.designatedArea)+" ")]}},{key:"item.year",fn:function(t){var a=t.item;return[e._v(" "+e._s(a.year)+" ")]}},{key:"item.month",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.formatMonth(a.month))+" ")]}},{key:"item.price",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.formatToDollarInt(a.price))+" ")]}}])})],1)],1)},l=[],r=a("2909"),i=(a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("caad"),a("4e827"),a("159b"),a("ac1f"),a("1276"),a("9944")),s=function(){return Promise.all([a.e("ContactsSearch~IBMPCollection~IndexZones~IndianGasMajorPortion~NYMEXCollection~ReporterLettersCollec~31606624"),a.e("SelectField")]).then(a.bind(null,"a924"))},o=function(){return a.e("MultipleSelectField").then(a.bind(null,"ab0b"))},d={name:"IndexZonesCollection",data:function(){return{designatedAreaInputField:{items:[],label:"All Areas",ref:"designatedAreaSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"designated_area",clearable:!0},ibmpYearsInputField:{items:[],label:"All Years",ref:"indexZoneSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"years"}}},props:{collection:[Array,Object]},components:{SelectField:s,MultipleSelectField:o},methods:{getMonth:i["e"],getYear:i["f"],formatToDollarInt:i["a"],formatMonth:function(e){return Object(i["e"])(e,"long")},formatYear:function(e){return Object(i["f"])(e)},formatPrice:function(e){return Object(i["a"])(e)},designatedAreaList:function(){var e=[];this.collectionItems&&this.collectionItems.map((function(t){t.designatedArea&&(e.includes(t.designatedArea)||e.push(t.designatedArea))})),this.designatedAreaInputField.items=Object(r["a"])(e.sort())},yearList:function(){var e=[];this.collectionItems&&this.collectionItems.map((function(t){t.year&&(e.includes(t.year)||e.push(t.year))})),this.ibmpYearsInputField.items=Object(r["a"])(e.sort()).reverse()},designatedAreaFilter:function(e){return console.log("designatedFilter: ",e),!this.designatedAreaInputField.selected||null===this.designatedAreaInputField.selected||0===this.designatedAreaInputField.selected.length||e.toLowerCase()===this.designatedAreaInputField.selected.toLowerCase()},yearFilter:function(e){return!this.ibmpYearsInputField.selected||null===this.ibmpYearsInputField.selected||0===this.ibmpYearsInputField.selected.length||this.ibmpYearsInputField.selected.indexOf(e)>=0}},computed:{headers:function(){return[{text:"Designated Area",align:"start",sortable:!0,value:"designatedArea",filter:this.designatedAreaFilter},{text:"Year",align:"start",sortable:!0,value:"year",filter:this.yearFilter},{text:"Month",align:"start",sortable:!1,value:"month"},{text:"Condensate (02)",align:"start",sortable:!1,value:"condensate02"},{text:"Sweet (61)",align:"start",sortable:!1,value:"sweet61"},{text:"Sour (62)",align:"start",sortable:!1,value:"sour62"},{text:"Asphaltic (63)",align:"start",sortable:!1,value:"asphaltic63"},{text:"Black Wax (64)",align:"start",sortable:!1,value:"blackWax64"},{text:"Yellow Wax (65)",align:"start",sortable:!1,value:"yellowWax65"}]},collectionItems:function(){var e=this,t=[];return this.collection&&this.collection.map((function(a){a.ibmp_line_items.forEach((function(n){var l={};l.year=e.formatYear(a.date),l.month=a.date,l.designatedArea=n.designatedArea,l.condensate02=isNaN(n.condensate02)?n.condensate02:Object(i["a"])(n.condensate02),l.sweet61=isNaN(n.sweet61)?n.sweet61:e.formatToDollarInt(n.sweet61),l.sour62=isNaN(n.sour62)?n.sour62:e.formatToDollarInt(n.sour62),l.asphaltic63=isNaN(n.asphaltic63)?n.asphaltic63:e.formatToDollarInt(n.asphaltic63),l.blackWax64=isNaN(n.blackWax64)?n.blackWax64:e.formatToDollarInt(n.blackWax64),l.yellowWax65=isNaN(n.yellowWax65)?n.yellowWax65:e.formatToDollarInt(n.yellowWax65),t.push(l)}))})),t}},created:function(){var e=this;setTimeout((function(){e.designatedAreaList(),e.yearList()}),300)},mounted:function(){var e=this.$route.query.designated_area,t=this.$route.query.years&&this.$route.query.years.split(",");this.designatedAreaInputField.selected=e||null,this.ibmpYearsInputField.selected=t||null}},c=d,u=a("2877"),m=a("6544"),p=a.n(m),f=a("b0af"),h=a("62ad"),b=a("a523"),g=a("8fea"),I=a("0fd9"),v=Object(u["a"])(c,n,l,!1,null,null,null);t["default"]=v.exports;p()(v,{VCard:f["a"],VCol:h["a"],VContainer:b["a"],VDataTable:g["a"],VRow:I["a"]})}}]);
//# sourceMappingURL=IBMPCollection.17271534.js.map