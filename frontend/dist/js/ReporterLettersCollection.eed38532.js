(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ReporterLettersCollection"],{"22c3":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["basic"===t.collectionLayout?i("div",[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"secondary"}},t._l(t.slicedCollection,(function(e,s){return i("v-list-item",{key:s,staticClass:"pa-0",attrs:{href:t.fileLink(t.API+"/reporter-letters/",e),target:"_blank"}},[i("v-list-item-icon",{staticClass:"mr-1"},[i("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.fileIcon(e.file.type)))])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"secondary--text text-body-1 text-wrap text-decoration-underline",domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),i("div",{staticClass:"text-center"},[i("v-btn",{staticClass:"mx-auto",attrs:{color:"secondary",href:"/references/reporter-letters"}},[t._v("View All")])],1)],1):t._e(),"full"===t.collectionLayout?i("div",[i("v-card",[i("v-data-table",{attrs:{headers:t.headers,items:t.collection,"item-key":"title"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6"}},[i("MultipleSelectField",{attrs:{fields:t.topicsInputField}})],1),i("v-col",{attrs:{cols:"12",sm:"6"}},[i("TextField",{attrs:{fields:t.titleInputField}})],1)],1)],1)]},proxy:!0},{key:"header.title",fn:function(e){var s=e.header;return[i("div",{staticClass:"text-h6 text-capitalize"},[t._v(t._s(s.text))])]}},{key:"header.date",fn:function(e){var s=e.header;return[i("div",{staticClass:"text-h6 text-capitalize"},[t._v(t._s(s.text))])]}},{key:"header.topics",fn:function(e){var s=e.header;return[i("div",{staticClass:"text-h6 text-capitalize"},[t._v(t._s(s.text))])]}},{key:"item.title",fn:function(e){var s=e.item;return[i("div",[i("a",{staticClass:"link-item",attrs:{href:t.fileLink(t.API+"/reporter-letters/",s),target:"_blank"}},[t._v(t._s(s.title))]),i("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.fileIcon(s.file.type)))])],1),s.accessible_file?i("div",[i("a",{staticClass:"link-item",attrs:{href:t.accessibleFileLink(t.API+"/reporter-letters/",s),target:"_blank"}},[t._v(t._s(s.accessible_file.title))]),i("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.fileIcon(s.accessible_file.type)))])],1):t._e()]}},{key:"item.date",fn:function(e){var i=e.item;return[t._v(" "+t._s(t.formatNiceDate(i.date))+" ")]}},{key:"item.topics",fn:function(e){var i=e.item;return[t._v(" "+t._s(t.getTopics(i.topics))+" ")]}}],null,!1,4067437900)})],1)],1):t._e()])},a=[],l=i("5530"),r=i("2909"),o=(i("d3b7"),i("3ca3"),i("ddb0"),i("a15b"),i("d81d"),i("caad"),i("4e827"),i("2532"),i("ac1f"),i("1276"),i("1b62")),n=i("9944"),c=function(){return i.e("MultipleSelectField").then(i.bind(null,"ab0b"))},u=function(){return i.e("TextField").then(i.bind(null,"bc8c"))},d={name:"ReporterLettersCollection",mixins:[o["c"],o["a"]],data:function(){return{API:"https://preview-onrr-cms.app.cloud.gov",titleInputField:{label:"Search",text:"",ref:"searchInput",color:"secondary",icon:"mdi-magnify"},topicsInputField:{items:[],label:"All Topics",ref:"topicSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"topic"}}},props:{},components:{MultipleSelectField:c,TextField:u},methods:{getTopics:function(t){var e;return e=t.length>1?t.join(", "):t[0],e},topicList:function(){var t=[];this.collection.map((function(e){e.topics&&e.topics.length>0?e.topics.map((function(e){t.includes(e)||t.push(e)})):t.includes(e)||t.push(e)})),this.topicsInputField.items=Object(r["a"])(t.sort())},titleFilter:function(t){return!this.titleInputField.text||t.toLowerCase().includes(this.titleInputField.text.toLowerCase())},topicsFilter:function(t){var e=this;return!this.topicsInputField.selected||null===this.topicsInputField.selected||0===this.topicsInputField.selected.length||t.some((function(t){return e.topicsInputField.selected.indexOf(t)>=0}))},addParamsToLocation:function(t){var e=Object(l["a"])(Object(l["a"])({path:this.$route.fullPath},this.$route.query),{},{query:t});this.$router.push(e).catch((function(){}))},formattedLabel:function(t){return Object(n["b"])(t)},fileIcon:function(t){var e;switch(t){case"application/pdf":e="mdi-file-pdf-box";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":e="mdi-file-excel-box";break;default:e=void 0;break}return e}},computed:{headers:function(){return[{text:"Reporter Letters",align:"start",sortable:!1,value:"title",filter:this.titleFilter},{text:"Date",align:"start",sortable:!0,value:"date"},{text:"Topics",align:"start",sortable:!1,value:"topics",filter:this.topicsFilter}]}},created:function(){setTimeout(function(){this.topicList()}.bind(this),500)},mounted:function(){var t=this.$route.query.topic&&this.$route.query.topic.split(",");this.topicsInputField.selected=t||null}},f=d,p=(i("3082"),i("2877")),v=i("6544"),m=i.n(v),b=i("8336"),h=i("b0af"),_=i("62ad"),y=i("a523"),x=i("8fea"),C=i("132d"),I=i("8860"),L=i("da13"),g=i("5d23"),k=i("1baa"),F=i("34c3"),V=i("0fd9"),w=Object(p["a"])(f,s,a,!1,null,"55bc9cac",null);e["default"]=w.exports;m()(w,{VBtn:b["a"],VCard:h["a"],VCol:_["a"],VContainer:y["a"],VDataTable:x["a"],VIcon:C["a"],VList:I["a"],VListItem:L["a"],VListItemContent:g["a"],VListItemGroup:k["a"],VListItemIcon:F["a"],VListItemTitle:g["c"],VRow:V["a"]})},3082:function(t,e,i){"use strict";i("fde6")},"877c":function(t,e,i){"use strict";i("8c49")},"8c49":function(t,e,i){},"8fc3":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["basic"===t.collectionLayout?i("div",[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"secondary"}},t._l(t.slicedCollection,(function(e,s){return i("v-list-item",{key:s,staticClass:"pa-0",attrs:{href:t.fileLink(t.API+"/press-releases/",e),target:"_blank"}},[i("v-list-item-icon",{staticClass:"mr-1"},[i("v-icon",{attrs:{color:"secondary"}},[t._v("mdi-file-pdf-box")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"secondary--text text-body-1 text-wrap text-decoration-underline",domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),i("div",{staticClass:"text-center"},[i("v-btn",{staticClass:"mx-auto",attrs:{color:"secondary",href:"/about/public-affairs"}},[t._v("View All")])],1)],1):t._e(),"full"===t.collectionLayout?i("div",[i("CollectionFilterToolbar",{ref:"collectionFilterToolbar",attrs:{collection:t.collection,searchResults:t.filterCollection}}),t._l(t.filterCollection,(function(e,s){return i("v-card",{key:s,staticClass:"ml-1 mr-1 mt-1 mb-4",attrs:{elevation:"1",transition:"fade-transition"}},[i("v-list-item",{staticClass:"pa-2",attrs:{"three-line":""}},[i("v-list-item-avatar",{staticClass:"d-flex flex-column justify-start mr-2",attrs:{tile:"",size:"80"}},[i("div",{staticClass:"secondary--text font-weight-bold text-h1"},[t._v(t._s(t.getDay(e.date,"numeric")))]),i("div",{staticClass:"font-weight-bold text-uppercase"},[t._v(t._s(t.getMonth(e.date,"short")))])]),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-h5 mb-1 text-wrap"},[t._v(" "+t._s(e.title)+" "),"archived"===e.status?i("v-chip",{attrs:{small:"",color:"orange",outlined:""}},[t._v(t._s(e.status))]):t._e()],1),i("v-list-item-subtitle",{staticClass:"mb-2 black--text"},[i("v-icon",[t._v("mdi-calendar-month")]),t._v(" "+t._s(t.getFullDate(e.date))+" ")],1),e.excerpt?i("div",{staticClass:"mb-2 text-body-1",domProps:{innerHTML:t._s(e.excerpt)}}):t._e(),t.fileLink(t.API+"/press-releases/",e)?i("div",[i("a",{attrs:{href:t.fileLink(t.API+"/press-releases/",e),target:"_blank"}},[t._v("View press release document ")]),i("v-icon",{attrs:{color:"secondary"}},[t._v("mdi-file-pdf-box")])],1):t._e()],1)],1)],1)}))],2):t._e()])},a=[],l=i("2909"),r=(i("d3b7"),i("3ca3"),i("ddb0"),i("4e827"),i("a9e3"),i("4de4"),i("ac1f"),i("1276"),i("caad"),i("2532"),i("c0d6")),o=i("1b62"),n=function(){return i.e("CollectionFilterToolbar").then(i.bind(null,"d81d1"))},c={name:"PressReleasesCollection",mixins:[o["c"],o["a"]],data:function(){return{API:"https://preview-onrr-cms.app.cloud.gov"}},props:{showToolbar:Boolean},components:{CollectionFilterToolbar:n},computed:{filterCollection:function(){var t=this.collection&&Object(l["a"])(this.collection).sort((function(t,e){return t.date<e.date?1:-1})),e=Number(r["b"].collections.year)?this.filterCollectionByYear(this.filterCollectionBySearch(t)):this.filterCollectionBySearch(t);return e&&0!==e.length?e:t}},methods:{filterCollectionBySearch:function(t){var e=r["b"].collections.searchQuery||"",i=""!==e?t.filter((function(t){return e.toLowerCase().split(" ").every((function(e){return t.title.toLowerCase().includes(e)}))})):t;return i},filterCollectionByYear:function(t){var e=this,i=r["b"].collections.year,s=t&&t.filter((function(t){return e.getYear(t.date)===i}));return s}}},u=c,d=(i("877c"),i("2877")),f=i("6544"),p=i.n(f),v=i("8336"),m=i("b0af"),b=i("cc20"),h=i("132d"),_=i("8860"),y=i("da13"),x=i("8270"),C=i("5d23"),I=i("1baa"),L=i("34c3"),g=Object(d["a"])(u,s,a,!1,null,"43594e40",null);e["default"]=g.exports;p()(g,{VBtn:v["a"],VCard:m["a"],VChip:b["a"],VIcon:h["a"],VList:_["a"],VListItem:y["a"],VListItemAvatar:x["a"],VListItemContent:C["a"],VListItemGroup:I["a"],VListItemIcon:L["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"]})},c0d6:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"a",(function(){return l}));var s=i("2b0e"),a=s["a"].observable({collections:{searchQuery:"",year:(new Date).getFullYear(),queryParams:{}},queryParams:{tabs:[],panel:""}}),l={updateCollections:function(t,e){console.log("updateCollectionsSearchQuery --------\x3e ",e),a.collections[t]=e},updateQueryParams:function(t,e){console.log("updateQueryParams --------\x3e ",e),a.queryParams[t]=e}}},fde6:function(t,e,i){}}]);
//# sourceMappingURL=ReporterLettersCollection.eed38532.js.map