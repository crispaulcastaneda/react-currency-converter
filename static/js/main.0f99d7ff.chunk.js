(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),u=n.n(r),o=n(6),s=n(1);n(12);function l(e){var t=e.currencyOptions,n=e.selectedCurrency,a=e.onChangeCurrency,r=e.onChangeAmount,u=e.amount;return c.a.createElement("div",null,c.a.createElement("input",{type:"number",className:"input card",value:u,onChange:r}),c.a.createElement("select",{className:"card",value:n,onChange:a},t.map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))))}var i="https://api.exchangeratesapi.io/latest";var m=function(){var e,t,n=Object(a.useState)([]),r=Object(s.a)(n,2),u=r[0],m=r[1],b=Object(a.useState)(),f=Object(s.a)(b,2),h=f[0],O=f[1],j=Object(a.useState)(),y=Object(s.a)(j,2),p=y[0],v=y[1],g=Object(a.useState)(),E=Object(s.a)(g,2),C=E[0],d=E[1],S=Object(a.useState)(1),k=Object(s.a)(S,2),N=k[0],A=k[1],w=Object(a.useState)(!0),x=Object(s.a)(w,2),J=x[0],M=x[1];return J?(t=N,e=N*C):(e=N,t=N/C),Object(a.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];m([e.base].concat(Object(o.a)(Object.keys(e.rates)))),O(e.base),v(t),d(e.rates[t])}))}),[]),Object(a.useEffect)((function(){null!=h&&null!=p&&fetch("".concat(i,"?base=").concat(h,"&symbols=").concat(p)).then((function(e){return e.json()})).then((function(e){return d(e.rates[p])}))}),[h,p]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cover"},c.a.createElement("h1",null," Money Rates "),c.a.createElement(l,{currencyOptions:u,selectedCurrency:h,onChangeCurrency:function(e){return O(e.target.value)},onChangeAmount:function(e){A(e.target.value),M(!0)},amount:t}),c.a.createElement(l,{currencyOptions:u,selectedCurrency:p,onChangeCurrency:function(e){return v(e.target.value)},onChangeAmount:function(e){A(e.target.value),M(!1)},amount:e})),c.a.createElement("div",{className:"socmed"}))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.0f99d7ff.chunk.js.map