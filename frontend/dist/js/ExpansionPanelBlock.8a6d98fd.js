(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ExpansionPanelBlock"],{"210b":function(e,n,t){},"25dc":function(e,n,t){},6795:function(e,n,t){"use strict";t("25dc")},afb5:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"pa-1",attrs:{id:"foo-bar"}},[t("v-expansion-panels",{attrs:{accordion:"",value:e.openedPanel}},e._l(e.blockItems,(function(n,a){return t("v-expansion-panel",{key:a,staticClass:"mb-4",attrs:{"disable-icon-rotate":""},on:{click:function(t){e.addParamsToLocation({panel:e.formattedLabel(n.item.block_label)})}}},[t("v-expansion-panel-header",{ref:e.formattedLabel(n.item.block_label),refInFor:!0,attrs:{color:"expansionPanel"},scopedSlots:e._u([{key:"actions",fn:function(){return[t("v-icon",{staticClass:"v-icon-plus",attrs:{color:"secondary"}},[e._v(" mdi-plus-box ")]),t("v-icon",{staticClass:"v-icon-minus",attrs:{color:"secondary"}},[e._v(" mdi-minus-box ")])]},proxy:!0}],null,!0)},[e._v(" "+e._s(n.item.block_label)+" ")]),t("v-expansion-panel-content",{staticClass:"pt-4"},[t("LayoutBlock",{attrs:{layoutBlocks:n.panelBlocks}})],1)],1)})),1)],1)},i=[],s=t("5530"),o=(t("d3b7"),t("3ca3"),t("ddb0"),t("d81d"),t("159b"),t("c740"),t("9944")),l=t("1b62"),c=function(){return Promise.all([t.e("Home~IBMPCollection~IndexZones~IndianGasMajorPortion~LayoutBlock~ReporterLettersCollection~Rulemakin~0c183eab"),t.e("LayoutBlock")]).then(t.bind(null,"0b83"))},r={mixins:[l["d"],l["b"]],name:"ExpansionPanelBlock",data:function(){return{panels:[],panelQueryParamExists:!1}},props:{block:[Array,Object]},components:{LayoutBlock:c},methods:{getAllIndexes:function(e,n){var t=[],a=-1;while(-1!=(a=e.indexOf(n,a+1)))t.push(a);return t},addParamsToLocation:function(e){var n=this;setTimeout((function(){var t=Object(s["a"])(Object(s["a"])({path:n.$route.fullPath},n.$route.query),{},{query:e});n.$router.push(t).catch((function(){}))}),0)},formattedLabel:function(e){return Object(o["b"])(e)},formattedLabelsArr:function(){var e=this,n=this.panels;return n.map((function(n){return e.formattedLabel(n.item.block_label)}))}},computed:{blockItems:function(){var e=this,n=this.block.item.expansion_panel_blocks,t=[];return n&&n.forEach((function(n){null!==n.item&&(n&&"expansion_panel_block_label"===n.item.__typename?(e.panels.push(n),t.push(Object(s["a"])(Object(s["a"])({},n),{},{panelBlocks:[]}))):t[t.length-1].panelBlocks.push(n))})),t},openedPanel:function(){var e,n,t=this,a=null===(e=this.block.item.open_by_default)||void 0===e?void 0:e.id,i=this.formattedLabelsArr();return this.$route.query.panel?n=i.findIndex((function(e){return e===t.$route.query.panel})):a&&(n=this.panels.findIndex((function(e){return e.item.id===a}))),n}},created:function(){}},u=r,p=(t("6795"),t("2877")),d=t("6544"),h=t.n(d),v=t("4e82"),b=t("3206"),f=t("80d2"),x=t("58df"),m=Object(x["a"])(Object(v["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(b["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(s["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(f["s"])(this))}}),k=t("0789"),y=t("9d65"),P=t("a9ad"),g=Object(x["a"])(y["a"],P["a"],Object(b["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),B=g.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(k["a"],this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(f["s"])(n))])]})))}}),O=t("9d26"),j=t("5607"),_=Object(x["a"])(P["a"],Object(b["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),A=_.extend().extend({name:"v-expansion-panel-header",directives:{ripple:j["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(f["s"])(this,"actions")||[this.$createElement(O["a"],this.expandIcon)];return this.$createElement(k["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(s["a"])(Object(s["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(f["s"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),C=(t("0481"),t("4069"),t("210b"),t("604c")),I=t("d9bd"),w=C["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},C["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(I["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(I["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),a=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(a)}}}),$=t("132d"),L=Object(p["a"])(u,a,i,!1,null,null,null);n["default"]=L.exports;h()(L,{VExpansionPanel:m,VExpansionPanelContent:B,VExpansionPanelHeader:A,VExpansionPanels:w,VIcon:$["a"]})}}]);
//# sourceMappingURL=ExpansionPanelBlock.8a6d98fd.js.map