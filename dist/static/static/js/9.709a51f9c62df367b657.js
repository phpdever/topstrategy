webpackJsonp([9],{"5Ph6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("WhmC"),n=(a("Fd2+"),a("vMJZ")),i={name:"Message",components:{TheFooter:s.a},data:function(){return{avatar:"../../../static/home/rank_head.jpg",tableData:[],withdraw:[],user:{userId:""}}},mounted:function(){this.user.userId=localStorage.getItem("USERID")||"",this.getRecharge(),this.getWithdraw()},methods:{getRecharge:function(){var t=this;this.tableData=[],Object(n.c)({userId:this.user.userId}).then(function(e){var a=e.state,s=e.message;a||(t.tableData=s.list)})},getWithdraw:function(){var t=this;this.withdraw=[],Object(n.f)({userId:this.user.userId}).then(function(e){var a=e.state,s=e.message;a&&(t.withdraw=s.list)})},formatTime:function(t){return this.$moment(t).format("YYYY-MM-DD HH:mm:ss")}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"资金明细","left-arrow":""},on:{"click-left":function(e){t.$router.back(-1)}}}),t._v(" "),a("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"充值"}},[a("div",{staticStyle:{"padding-bottom":"5rem","min-height":"10rem",width:"100%",float:"left"}},t._l(t.tableData,function(e){return a("div",{key:e.index,staticClass:"fund_box"},[a("van-row",[a("van-col",{staticClass:"fund_item",attrs:{span:"24"}},[t._v("充值 / "+t._s(e.typeName))])],1),t._v(" "),a("van-row",[a("van-col",{staticClass:"fund_item",attrs:{span:"24"}},[t._v(t._s(t.formatTime(1e3*e.rechargeTime)))])],1),t._v(" "),a("div",{staticClass:"fund_type"},[t._v("+"+t._s(e.rechargeMoney.toFixed(2)))])],1)}))]),t._v(" "),a("van-tab",{attrs:{title:"提现"}},[a("div",{staticStyle:{"padding-bottom":"5rem","min-height":"10rem",width:"100%",float:"left"}},t._l(t.withdraw,function(e){return a("div",{key:e.index,staticClass:"fund_box"},[a("van-row",[a("van-col",{staticClass:"fund_item",attrs:{span:"24"}},[t._v("提现 / "+t._s(e.typeName))])],1),t._v(" "),a("van-row",[a("van-col",{staticClass:"fund_item",attrs:{span:"24"}},[t._v(t._s(t.formatTime(1e3*e.withdrawTime)))])],1),t._v(" "),a("div",{staticClass:"fund_type"},[t._v("-"+t._s(e.withdrawMoney.toFixed(2)))])],1)}))])],1),t._v(" "),a("TheFooter")],1)},staticRenderFns:[]};var o=a("VU/8")(i,r,!1,function(t){a("TUnu")},null,null);e.default=o.exports},TUnu:function(t,e){}});
//# sourceMappingURL=9.709a51f9c62df367b657.js.map