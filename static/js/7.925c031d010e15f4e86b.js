webpackJsonp([7],{"G+yj":function(t,e){},VZrM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("lC5x"),n=a.n(s),i=a("J0Oq"),r=a.n(i),c=a("teIl"),o=a("TVmP"),d={data:function(){return{pageIndex:1,pageSize:100,cards:[],activeIndex:null}},methods:{fetch:function(){var t=this;return r()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("card/page",{params:{page_index:t.pageIndex,page_size:t.pageSize}});case 2:a=e.sent,console.log(a.data),200==a.code&&(t.cards=a.data.result);case 5:case"end":return e.stop()}},e,t)}))()},getUserInfo:function(){var t=this;return r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("auth/info");case 2:e.sent;case 3:case"end":return e.stop()}},e,t)}))()},toDetail:function(t,e){this.activeIndex==t&&this.$router.push({name:"detail",params:{id:e}})}},mounted:function(){this.fetch()},components:{Header:c.a,Footer:o.a}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("Header"),t._v(" "),a("div",{staticClass:"main"},[t._m(0),t._v(" "),a("div",{staticClass:"star-cards"},t._l(t.cards,function(e,s){return a("div",{key:s,staticClass:"card-item",class:{on:t.activeIndex==s},on:{click:function(e){t.activeIndex=s}}},[a("div",{staticClass:"card-icon"},[a("img",{attrs:{src:e.icon,alt:""}})]),t._v(" "),a("div",{staticClass:"card-des"},[a("div",{staticClass:"star-name"},[t._v(t._s(e.title))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex==s,expression:"activeIndex == index"}],staticClass:"card-button"},[a("div",{staticClass:"button-icon"}),t._v(" "),a("div",{staticClass:"button-txt",on:{click:function(a){return t.toDetail(s,e.id)}}},[t._v("做测试")])])])}),0)]),t._v(" "),a("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rotate-section"},[e("div",{staticClass:"text-box"}),this._v(" "),e("div",{staticClass:"rotate-img"})])}]};var v=a("C7Lr")(d,u,!1,function(t){a("G+yj")},"data-v-e4373e38",null);e.default=v.exports}});
//# sourceMappingURL=7.925c031d010e15f4e86b.js.map