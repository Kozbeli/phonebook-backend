(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{42:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(17),r=t.n(c),a=t(8),o=t(18),i=t(3),u=t(1),s=t(0),d=function(e){var n=e.filter,t=e.handleFilterChange;return Object(s.jsxs)("div",{children:["filter shown with: ",Object(s.jsx)("input",{value:n,onChange:t})]})},l=function(e){return Object(s.jsxs)("form",{onSubmit:e.addPerson,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},f=t(5),j=t.n(f),b="/api/persons",h=function(){return j.a.get(b).then((function(e){return e.data}))},m=function(e){return j.a.post(b,e).then((function(e){return e.data}))},O=function(e,n){return j.a.put("".concat(b,"/").concat(n),e).then((function(e){return e.data}))},v=function(e){return j.a.delete("".concat(b,"/").concat(e.id),{person:e}).then((function(n){return console.log("after removing ".concat(e.id," response data returns: ").concat(n)),n.data}))},p=function(e){var n=e.message,t=e.errorType;return null===n?null:Object(s.jsx)("div",{className:t,children:n})},g=function(e){var n=e.persons,t=e.remove,c=n.filter((function(e){return e.id})).map((function(e){return console.log("Person_id: ".concat(e.id," ").concat(e.name)),Object(s.jsxs)("li",{children:[e.name," ",e.number,Object(s.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.id)}));return Object(s.jsx)("ul",{children:c})},x=function(){var e=Object(u.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],r=Object(u.useState)(""),f=Object(i.a)(r,2),j=f[0],b=f[1],x=Object(u.useState)(""),w=Object(i.a)(x,2),C=w[0],N=w[1],y=Object(u.useState)(""),S=Object(i.a)(y,2),k=S[0],P=S[1],I=Object(u.useState)(""),T=Object(i.a)(I,2),D=T[0],E=T[1],F=Object(u.useState)(""),J=Object(i.a)(F,2),L=J[0],A=J[1];Object(u.useEffect)((function(){h().then((function(e){c(e)}))}),[]);var B=0===k.length?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())})),R=function(e,n){E(e),A(n),setTimeout((function(){E(null),A(null)}),5e3)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(p,{message:D,errorType:L}),Object(s.jsx)(d,{filter:k,handleFilterChange:function(e){P(e.target.value)}}),Object(s.jsx)("h2",{children:"add a new"}),Object(s.jsx)(l,{addPerson:function(e){e.preventDefault();var n={name:j,number:C};if(t.some((function(e){return e.name===j}))){if(window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))){var r=t.find((function(e){return e.name===j})),o=Object(a.a)(Object(a.a)({},r),{},{number:C}),i=r.id;O(o,i).then((function(e){c(t.map((function(n){return n.id!==i?n:e}))),R("Updated ".concat(e.name),"green")})).catch((function(e){R("Information of ".concat(r.name," has already been removed from server"),"red")}))}}else m(n).then((function(e){c(t.concat(e)),R("Added ".concat(e.name),"green")}));b(""),N("")},newName:j,handleNameChange:function(e){b(e.target.value)},newNumber:C,handleNumberChange:function(e){N(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(g,{persons:B,remove:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&v(n).then((function(e){var r=t.indexOf(n),a=Object(o.a)(t);a.splice(r,1),c(a),R("Removed ".concat(n.name),"green")})).catch((function(e){R("Information of ".concat(n.name," has already been removed from server"),"red")}))}})]})};t(42);r.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4c8fbeb9.chunk.js.map