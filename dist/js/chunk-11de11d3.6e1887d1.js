(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11de11d3"],{"10d2":function(t,e,n){"use strict";var i=n("8dd9");e["a"]=i["a"]},"210b":function(t,e,n){},5615:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"max-width":"360"}},[n("div",{staticClass:"d-flex justify-space-between"},[n("v-btn",{staticClass:"px-0",attrs:{plain:"",large:""}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-chevron-left ")]),n("span",[t._v("Previous")])],1),n("v-btn",{staticClass:"px-0",attrs:{plain:"",large:""}},[n("span",[t._v("Next")]),n("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1),n("v-expansion-panels",t._l(t.records,(function(e,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",[n("h3",[t._v("2021 / 8 / "+t._s(i+2)+"（"+t._s(e)+"）")]),1==i?n("v-icon",{attrs:{color:"red lighten-1"}},[t._v("mdi-information")]):n("v-icon",{attrs:{color:"red lighten-1"}})],1),n("v-expansion-panel-content",[n("v-list",{staticClass:"py-0"},[n("v-list-item",{staticClass:"px-0"},[n("v-list-item-content",{staticClass:"py-0"},[n("v-list-item-title",{staticClass:"mb-0"},[t._v("Punch in - 09:30")]),n("p",{staticClass:"pt-1 grey--text body-2"},[t._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, in architecto officia libero ullam cumque distinctio cupiditate quibusdam et temporibus? ")])],1)],1),n("v-list-item",{staticClass:"px-0"},[n("v-list-item-content",{staticClass:"py-0"},[1==i?n("v-list-item-title",{staticClass:"mb-0"},[t._v("Punch out - no data "),n("v-btn",{staticClass:"ml-2",attrs:{small:"",rounded:"",outlined:"",to:{path:"mending"},color:"orange"}},[t._v(" Apply ")])],1):n("v-list-item-title",{staticClass:"mb-0"},[t._v("Punch out - 18:30")]),n("p",{staticClass:"pt-1 grey--text body-2"},[t._v("No notes")])],1)],1),n("v-list-item",{staticClass:"px-0"},[n("v-list-item-content",{staticClass:"py-0"},[n("v-list-item-title",{staticClass:"mb-0"},1==i?[t._v("hours -")]:[t._v("hours - 8")])],1)],1)],1)],1)],1)})),1)],1)},s=[],a={data:function(){return{records:["Mon","Tue","Wen","Thu","Fri"]}}},o=a,r=n("2877"),l=n("6544"),c=n.n(l),u=n("8336"),h=n("5530"),d=n("4e82"),p=n("3206"),v=n("80d2"),b=n("58df"),f=Object(b["a"])(Object(d["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(p["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(h["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(t){this.content=t},unregisterContent:function(){this.content=null},registerHeader:function(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var t=this;this.$nextTick((function(){return t.$emit("change")}))}},render:function(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(v["m"])(this))}}),m=n("0789"),x=n("9d65"),g=n("a9ad"),y=Object(b["a"])(x["a"],g["a"],Object(p["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),C=y.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(t,e){var n=this;t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick((function(){return n.isActive=t}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(t){var e=this;return t(m["a"],this.showLazyContent((function(){return[t("div",e.setBackgroundColor(e.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:e.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(v["m"])(e))])]})))}}),B=n("9d26"),O=n("5607"),w=Object(b["a"])(g["a"],Object(p["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),j=w.extend().extend({name:"v-expansion-panel-header",directives:{ripple:O["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(t){this.$emit("click",t)},genIcon:function(){var t=Object(v["m"])(this,"actions")||[this.$createElement(B["a"],this.expandIcon)];return this.$createElement(m["b"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render:function(t){var e=this;return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(h["a"])(Object(h["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return e.hasMousedown=!0},mouseup:function(){return e.hasMousedown=!1}})}),[Object(v["m"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),k=(n("0481"),n("210b"),n("604c")),_=n("d9bd"),$=k["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(h["a"])(Object(h["a"])({},k["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(_["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(_["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(t,e){var n=this.getValue(t,e),i=this.getValue(t,e+1);t.isActive=this.toggleMethod(n),t.nextIsActive=this.toggleMethod(i)}}}),P=n("132d"),S=n("8860"),A=n("da13"),z=n("5d23"),E=Object(r["a"])(o,i,s,!1,null,null,null);e["default"]=E.exports;c()(E,{VBtn:u["a"],VExpansionPanel:f,VExpansionPanelContent:C,VExpansionPanelHeader:j,VExpansionPanels:$,VIcon:P["a"],VList:S["a"],VListItem:A["a"],VListItemContent:z["a"],VListItemTitle:z["c"]})},8336:function(t,e,n){"use strict";var i=n("53ca"),s=n("3835"),a=n("5530"),o=(n("c7cd"),n("a9e3"),n("caad"),n("86cc"),n("10d2")),r=(n("99af"),n("8d4f"),n("90a2")),l=n("a9ad"),c=n("80d2"),u=l["a"].extend({name:"v-progress-circular",directives:{intersect:r["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(c["f"])(this.calculatedSize),width:Object(c["f"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,n){this.isVisible=n}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),h=u,d=n("4e82"),p=n("f2e7"),v=n("c995"),b=n("fe6c"),f=n("1c87"),m=n("af2b"),x=n("58df"),g=n("d9bd"),y=Object(x["a"])(o["a"],f["a"],b["a"],m["a"],Object(d["a"])("btnToggle"),Object(p["b"])("inputValue"));e["a"]=y.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({"v-btn":!0},f["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return v["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(a["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var n=Object(s["a"])(e,2),i=n[0],a=n[1];t.$attrs.hasOwnProperty(i)&&Object(g["a"])(i,a,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(h,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],n=this.generateRouteLink(),s=n.tag,a=n.data,o=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(a.attrs.type=this.type,a.attrs.disabled=this.disabled),a.attrs.value=["string","number"].includes(Object(i["a"])(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?a:o(this.color,a),e)}})},"86cc":function(t,e,n){},"8d4f":function(t,e,n){}}]);
//# sourceMappingURL=chunk-11de11d3.6e1887d1.js.map