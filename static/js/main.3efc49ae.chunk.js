(this["webpackJsonprisk-manager"]=this["webpackJsonprisk-manager"]||[]).push([[0],{40:function(e,a,t){e.exports=t(49)},49:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(87),o=t(37),i=t(86),c=t(13),s=t.n(c),u=t(29),m=t(52),d=t(78),p=t(51),h=t(88),b=t(91),g=t(90),v=t(89),f=t(77),E=function(e){var a=e.value,t=e.onChange,n=e.label,r=e.labelWidth,o=e.sign,i=e.className;return(l.a.createElement(b.a,{className:i,variant:"outlined"},l.a.createElement(g.a,{htmlFor:"outlined-adornment-amount",color:"secondary"},n),l.a.createElement(v.a,{id:"outlined-adornment-amount",value:a,onChange:t,startAdornment:l.a.createElement(f.a,{position:"start"},o),labelWidth:r,required:!0,color:"secondary",type:"number"})))},k=t(27),x=t(30),w={risk:"1",balance:"10000",stopLoss:"0.35",takeProfit:"2"},j=function(){var e=Object(n.useState)(w),a=Object(u.a)(e,2),t=a[0],l=a[1];return{values:t,handleChange:function(e){return function(a){a.persist(),l((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(k.a)({},e,a.target.value))}))}},isAllInputsFulfilled:Object.values(t).every((function(e){return!!e}))}},y=Object(m.a)((function(e){return{paper:{width:"400px",padding:"15px 0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},headline:{marginBottom:"15px"},input:{margin:e.spacing(2),width:"350px"},button:{width:"350px",height:"45px",margin:e.spacing(2)}}})),C=function(e){var a=e.saveValues,t=j(),n=t.values,r=t.handleChange,o=t.isAllInputsFulfilled,i=y();return l.a.createElement(d.a,{className:i.paper},l.a.createElement(p.a,{className:i.headline,variant:"h5"},"Calculator"),l.a.createElement(E,{onChange:r("risk"),value:n.risk,label:"Risk per position",className:i.input,labelWidth:125,sign:"%"}),l.a.createElement(E,{onChange:r("balance"),value:n.balance,label:"Balance",className:i.input,labelWidth:65,sign:"$"}),l.a.createElement(E,{onChange:r("stopLoss"),value:n.stopLoss,label:"Stop loss",className:i.input,labelWidth:75,sign:"%"}),l.a.createElement(E,{onChange:r("takeProfit"),value:n.takeProfit,label:"Take profit",className:i.input,labelWidth:85,sign:"%"}),l.a.createElement(h.a,{variant:"contained",disableElevation:!0,color:"secondary",onClick:function(){return a(n)},disabled:!o,className:i.button},"Calculate"))},N=t(79),O=t(81),F=t(85),W=t(84),P=t(80),L=t(82),B=t(83),I=Object(N.a)({paper:{width:350,margin:20},value:{fontWeight:"bold"}}),S=function(e,a){return{label:e,value:a}},$=l.a.forwardRef((function(e,a){var t=e.values,n=I(),r=function(e){var a=e?e.risk/e.stopLoss:0,t=e?e.takeProfit/e.stopLoss:0,n=e?e.balance*a:0,l=e?n*e.takeProfit/100:0,r=e?n*e.stopLoss/100:0;return[S("Risk ratio",t?"".concat(t.toFixed(2)," : 1"):(0).toFixed(2)),S("Max leverage",a.toFixed(2)),S("Balance with leverage","$".concat(n.toFixed(2))),S("Possible loss","$".concat(r.toFixed(2))),S("Possible profit","$".concat(l.toFixed(2)))]}(t);return l.a.createElement(P.a,{className:n.paper,ref:a,component:d.a},l.a.createElement(O.a,{className:n.table,"aria-label":"simple table"},l.a.createElement(L.a,null,l.a.createElement(B.a,null,l.a.createElement(W.a,null,"Stat"),l.a.createElement(W.a,{align:"right"},"Value"))),l.a.createElement(F.a,null,r.map((function(e){return l.a.createElement(B.a,{key:e.label},l.a.createElement(W.a,{component:"th",scope:"row"},e.label),l.a.createElement(W.a,{className:n.value,align:"right"},e.value))})))))})),A=Object(m.a)((function(e){return{root:{display:"flex",justifyContent:"center",width:"100%",height:"100vh",minHeight:"900px",alignItems:"center"}}})),R=function(){var e=Object(n.useState)(null),a=Object(u.a)(e,2),t=a[0],r=a[1],o=A();return l.a.createElement("div",{className:o.root},l.a.createElement(C,{saveValues:r}),l.a.createElement($,{values:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=Object(o.a)({palette:{background:{default:"#262626"},type:"dark"}});s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{theme:V},l.a.createElement(r.a,null),l.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.3efc49ae.chunk.js.map