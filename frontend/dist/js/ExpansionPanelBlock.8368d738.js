(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ExpansionPanelBlock"],{"210b":function(e,n,t){},"25dc":function(e,n,t){},6795:function(e,n,t){"use strict";t("25dc")},afb5:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"pa-1"},[t("v-expansion-panels",{attrs:{accordion:"",value:e.openedPanel}},e._l(e.blockItems,(function(n,s){return t("v-expansion-panel",{key:s,staticClass:"mb-4",attrs:{"disable-icon-rotate":""}},[t("v-expansion-panel-header",{attrs:{color:"expansionPanel"},scopedSlots:e._u([{key:"actions",fn:function(){return[t("v-icon",{staticClass:"v-icon-plus",attrs:{color:"secondary"}},[e._v(" mdi-plus-box ")]),t("v-icon",{staticClass:"v-icon-minus",attrs:{color:"secondary"}},[e._v(" mdi-minus-box ")])]},proxy:!0}],null,!0)},[e._v(" "+e._s(n.item.block_label)+" ")]),t("v-expansion-panel-content",{staticClass:"pt-4"},[t("LayoutBlock",{attrs:{layoutBlocks:n.panelBlocks}})],1)],1)})),1)],1)},a=[],i=t("5530"),o=(t("d3b7"),t("3ca3"),t("ddb0"),t("159b"),t("c740"),t("1b62")),l=function(){return t.e("LayoutBlock").then(t.bind(null,"0b83"))},c={mixins:[o["b"],o["a"]],name:"ExpansionPanelBlock",data:function(){return{panels:[]}},props:{block:[Array,Object]},components:{LayoutBlock:l},methods:{getAllIndexes:function(e,n){var t=[],s=-1;while(-1!=(s=e.indexOf(n,s+1)))t.push(s);return t}},computed:{blockItems:function(){var e=this,n=this.block.item.expansion_panel_blocks,t=[];return n&&n.forEach((function(n){null!==n.item&&(n&&"expansion_panel_block_label"===n.item.__typename?(e.panels.push(n),t.push(Object(i["a"])(Object(i["a"])({},n),{},{panelBlocks:[]}))):t[t.length-1].panelBlocks.push(n))})),t},openedPanel:function(){var e,n,t=null===(e=this.block.item.open_by_default)||void 0===e?void 0:e.id;return t&&(n=this.panels.findIndex((function(e){return e.item.id===t}))),n}}},r=c,p=(t("6795"),t("2877")),u=t("6544"),d=t.n(u),h=t("4e82"),v=t("3206"),x=t("80d2"),b=t("58df"),f=Object(b["a"])(Object(h["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(v["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(i["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(x["s"])(this))}}),m=t("0789"),k=t("9d65"),y=t("a9ad"),g=Object(b["a"])(k["a"],y["a"],Object(v["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),B=g.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(m["a"],this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(x["s"])(n))])]})))}}),O=t("9d26"),P=t("5607"),A=Object(b["a"])(y["a"],Object(v["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),_=A.extend().extend({name:"v-expansion-panel-header",directives:{ripple:P["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(x["s"])(this,"actions")||[this.$createElement(O["a"],this.expandIcon)];return this.$createElement(m["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(i["a"])(Object(i["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(x["s"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),j=(t("0481"),t("4069"),t("210b"),t("604c")),C=t("d9bd"),w=j["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},j["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(C["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(C["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),s=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(s)}}}),I=t("132d"),$=Object(p["a"])(r,s,a,!1,null,null,null);n["default"]=$.exports;d()($,{VExpansionPanel:f,VExpansionPanelContent:B,VExpansionPanelHeader:_,VExpansionPanels:w,VIcon:I["a"]})}}]);
//# sourceMappingURL=ExpansionPanelBlock.8368d738.js.map