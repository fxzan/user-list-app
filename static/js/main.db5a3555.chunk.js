(this["webpackJsonpuser-list-app"]=this["webpackJsonpuser-list-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(3),a=n.n(c),r=(n(12),n(7)),l=n(2),i=(n(13),n(0));var o=function(e){return Object(i.jsx)("div",{className:"card ".concat(e.className),children:e.children})};n(15);var u=function(e){return Object(i.jsx)("button",{className:"button ".concat(e.className),type:e.type||"button",onClick:e.onClick,children:e.children})};n(16),n(17);function j(e){return Object(i.jsx)("div",{className:"backdrop",onClick:e.onClose})}function d(e){return Object(i.jsxs)(o,{className:"modal",children:[Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h2",{children:e.title})}),Object(i.jsx)("div",{className:"content",children:Object(i.jsx)("p",{children:e.message})}),Object(i.jsx)("footer",{className:"actions",children:Object(i.jsx)(u,{onClick:e.onClose,children:"Close"})})]})}var b=function(e){return Object(i.jsxs)(i.Fragment,{children:[a.a.createPortal(Object(i.jsx)(j,{onClose:e.onClose}),document.getElementById("backdrop-root")),a.a.createPortal(Object(i.jsx)(d,{title:e.title,message:e.message,onClose:e.onClose}),document.getElementById("overlay-root"))]})};var m=function(e){var t=Object(s.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(""),j=Object(l.a)(r,2),d=j[0],m=j[1],O=Object(s.useState)(),h=Object(l.a)(O,2),g=h[0],f=h[1];return Object(i.jsxs)(i.Fragment,{children:[g&&Object(i.jsx)(b,{title:g.title,message:g.message,onClose:function(){f(null)}}),Object(i.jsx)(o,{className:"input",children:Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==c.trim().length&&0!==d.trim().length?+d<0?f({title:"Invalid Age",message:"Age must be greater than or equal to 1."}):(e.onAddUser({name:c,age:d,id:Math.random().toString()}),a(""),m("")):f({title:"Invalid Input",message:"Please enter a valid name and age."})},children:[Object(i.jsx)("label",{htmlFor:"username",children:"Name"}),Object(i.jsx)("input",{id:"username",type:"text",value:c,onChange:function(e){a(e.target.value)}}),Object(i.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(i.jsx)("input",{id:"age",type:"number",value:d,onChange:function(e){m(e.target.value)}}),Object(i.jsx)(u,{className:"center",type:"submit",children:"Add User"})]})})]})};n(18);var O=function(e){function t(t){e.onDelete(t.target.id)}return Object(i.jsx)(o,{className:"users",children:0===e.users.length?Object(i.jsx)("h2",{children:"No users."}):Object(i.jsx)("ul",{children:e.users.map((function(e){return Object(i.jsxs)("li",{id:e.id,onClick:t,children:[e.name," (",e.age," years old)"]},e.id)}))})})};var h=function(){var e=JSON.parse(localStorage.getItem("users"))||[],t=Object(s.useState)(e),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{onAddUser:function(e){a((function(t){var n=[].concat(Object(r.a)(t),[e]);return localStorage.setItem("users",JSON.stringify(n)),n}))}}),Object(i.jsx)(O,{onDelete:function(e){a((function(t){var n=t.filter((function(t){return t.id!==e}));return localStorage.setItem("users",JSON.stringify(n)),n}))},users:c})]})};a.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.db5a3555.chunk.js.map