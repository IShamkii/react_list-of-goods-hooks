(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(6),r=n(8),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.Default=0]="Default",t[t.Abc=1]="Abc",t[t.Length=2]="Length"}(c||(c={}));var d=function(){var t=Object(a.useState)(c.Default),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),u=Object(i.a)(o,2),d=u[0],j=u[1],f=function(t,e){var n=e.sortField,s=e.isReversed,o=Object(r.a)(t);return n!==c.Default&&o.sort((function(t,e){switch(n){case c.Abc:return t.localeCompare(e);case c.Length:return t.length-e.length;default:return 0}})),s&&o.reverse(),o}(h,{sortField:n,isReversed:d});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return s(c.Abc)},type:"button",className:l()("button is-info",{"is-light":n!==c.Abc}),children:"Sort alphabetically"}),Object(b.jsx)("button",{onClick:function(){return s(c.Length)},type:"button",className:l()("button is-success",{"is-light":n!==c.Length}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){return j(!d)},type:"button",className:l()("button is-warning",{"is-light":!d}),children:"Reverse"}),(d||n!==c.Default)&&Object(b.jsx)("button",{onClick:function(){s(c.Default),j(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:f.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.03f2810c.chunk.js.map