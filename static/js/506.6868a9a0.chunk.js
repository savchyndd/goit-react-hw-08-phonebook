"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[506],{5506:function(n,e,r){r.r(e),r.d(e,{default:function(){return Zn}});var i,t,o,a,c,l,d,s,p,u,x,f,b,g,h,m,Z,v,w,j,y,k,z,C,E,_,N=r(9439),I=r(2791),L=r(9434),M=r(1892),$=function(n){return n.contacts.items},q=function(n){return n.contacts.isLoading},A=function(n){return n.contacts.error},B=function(n){return n.filters},D=r(9195),S=r(168),F=r(4934),K=r(9135),T=(0,F.Z)(K.Bj$)(i||(i=(0,S.Z)(["\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n"]))),G=F.Z.form(t||(t=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),J=F.Z.label(o||(o=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),P=F.Z.input(a||(a=(0,S.Z)(["\n  width: 250px;\n  padding: 22px 36px;\n\n  color: #000000;\n  background: #efefef;\n  border-radius: 18px;\n  border-style: none;\n\n  :placeholder {\n    color: #757575;\n  }\n"]))),R=F.Z.button(c||(c=(0,S.Z)(["\n  font-weight: 700;\n  font-size: 18px;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: fit-content;\n\n  margin-top: 24px;\n  padding: 1.063em 1.5em;\n\n  background-color: #000000;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 14px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n\n    > svg {\n      fill: #000000;\n    }\n  }\n"]))),X=r(3329),Y=function(n){var e=n.onCloseModal,r=(0,L.I0)(),i=(0,L.v9)($);return(0,X.jsxs)(G,{onSubmit:function(n){n.preventDefault();var t=n.target,o=n.target.elements.name.value,a=n.target.elements.number.value;return i.some((function(n){return n.name===o}))?alert("".concat(o," is already in contacts")):i.some((function(n){return n.number===a}))?alert("".concat(a," is already in contacts")):(r((0,M.uK)({name:o,number:a.toString()})),e(),void t.reset())},autoComplete:"off",children:[(0,X.jsxs)(J,{children:["Name",(0,X.jsx)(P,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name ...",value:i.name})]}),(0,X.jsxs)(J,{children:["Number",(0,X.jsx)(P,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number ...",value:i.number})]}),(0,X.jsxs)(R,{type:"submit",children:[(0,X.jsx)(T,{}),"New contact"]})]})},H=r(3985),O=F.Z.label(l||(l=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),Q=F.Z.input(d||(d=(0,S.Z)(["\n  width: 250px;\n  padding: 22px 36px;\n\n  color: #000000;\n  background: #efefef;\n  border-radius: 18px;\n  border-style: none;\n\n  :placeholder {\n    color: #757575;\n  }\n"]))),U=function(){var n=(0,L.I0)(),e=(0,L.v9)(B);return(0,X.jsx)(O,{children:(0,X.jsx)(Q,{type:"text",name:"filter",placeholder:"Enter contact name",value:e,onChange:function(e){var r=e.currentTarget.value.toLowerCase().trim();n((0,H.p)(r))}})})},V=r(3433),W=(0,F.Z)(K.Xws)(s||(s=(0,S.Z)(["\n  padding: 8px;\n\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n\n  border-radius: 12px;\n\n  background-color: rgba(250, 187, 24, 0.1);\n"]))),nn=(0,F.Z)(K.DNl)(p||(p=(0,S.Z)(["\n  padding: 8px;\n\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n\n  border-radius: 12px;\n\n  background-color: rgba(250, 187, 24, 0.1);\n"]))),en=(0,F.Z)(K.dIY)(u||(u=(0,S.Z)(["\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n"]))),rn=F.Z.li(x||(x=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 6px;\n\n  padding: 20px 20px;\n\n  border-radius: 24px;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n"]))),tn=F.Z.p(f||(f=(0,S.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  margin: 0;\n  font-weight: 500;\n"]))),on=F.Z.p(b||(b=(0,S.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  margin: 0;\n  /* margin-left: 10px; */\n"]))),an=F.Z.button(g||(g=(0,S.Z)(["\n  font-weight: 700;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n\n  padding: 0.563em 1em;\n  background-color: #000000;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 8px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n\n    > svg {\n      fill: #000000;\n    }\n  }\n"]))),cn=function(n){var e=n.id,r=n.name,i=n.number,t=(0,L.I0)();return(0,X.jsxs)(rn,{children:[(0,X.jsxs)(tn,{children:[(0,X.jsx)(W,{}),r]}),(0,X.jsxs)(on,{children:[(0,X.jsx)(nn,{}),i]}),(0,X.jsxs)(an,{onClick:function(){return n=e,void t((0,M.GK)(n));var n},children:[(0,X.jsx)(en,{}),"Delete"]})]},e)},ln=F.Z.ul(h||(h=(0,S.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n\n  grid-gap: 24px;\n"]))),dn=function(){var n=(0,L.v9)($),e=(0,L.v9)(B),r=(0,V.Z)(n.filter((function(n){return n.name.toLowerCase().includes(e)})));return(0,X.jsx)(ln,{children:r.map((function(n){var e=n.name,r=n.number,i=n.id;return(0,X.jsx)(cn,{id:i,name:e,number:r},i)}))})},sn=(0,F.Z)(K.Bj$)(m||(m=(0,S.Z)(["\n  width: 20px;\n  height: 20px;\n\n  fill: #fabb18;\n"]))),pn=F.Z.div(Z||(Z=(0,S.Z)(["\n  padding: 38px 48px;\n  height: 100vh;\n\n  border-radius: 32px 32px 0 0;\n  background-color: #f9f9f9;\n"]))),un=F.Z.div(v||(v=(0,S.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n"]))),xn=F.Z.h2(w||(w=(0,S.Z)(["\n  font-weight: 700;\n  font-size: 34px;\n\n  margin: 0;\n"]))),fn=F.Z.div(j||(j=(0,S.Z)(["\n  display: flex;\n  margin-left: auto;\n"]))),bn=(F.Z.form(y||(y=(0,S.Z)([""]))),F.Z.label(k||(k=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),F.Z.input(z||(z=(0,S.Z)(["\n  width: 250px;\n  padding: 22px 36px;\n\n  color: #000000;\n  background: #efefef;\n  border-radius: 18px;\n  border-style: none;\n\n  :placeholder {\n    color: #757575;\n  }\n"]))),F.Z.button(C||(C=(0,S.Z)(["\n  font-weight: 700;\n  font-size: 14px;\n\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: fit-content;\n\n  padding: 1.063em 1.5em;\n  margin-left: 28px;\n\n  background-color: #000000;\n\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(250, 187, 24, 0.1);\n  border-radius: 14px;\n\n  cursor: pointer;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #000000;\n    background-color: rgba(250, 187, 24, 0.1);\n    border: 1px solid #000000;\n    > svg {\n      fill: #000000;\n    }\n  }\n"])))),gn=F.Z.div(E||(E=(0,S.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(138.13deg, #22343c75 25.87%, #1f2e3572 100%);\n  z-index: 1200;\n"]))),hn=F.Z.div(_||(_=(0,S.Z)(["\n  border-radius: 25px;\n  overflow: hidden;\n\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #f9f9f9;\n"]))),mn=function(n){var e=n.children,r=n.onCloseModal;(0,I.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]);return(0,X.jsx)(gn,{onClick:function(n){var e=n.target;n.currentTarget===e&&r()},children:(0,X.jsx)(hn,{children:e})})},Zn=function(){var n=(0,L.I0)(),e=(0,L.v9)(q),r=(0,L.v9)(A),i=(0,I.useState)(!1),t=(0,N.Z)(i,2),o=t[0],a=t[1];(0,I.useEffect)((function(){n((0,M.yF)())}),[n]);var c=function(){a((function(n){return!n}))};return(0,X.jsxs)(pn,{children:[(0,X.jsxs)(D.$,{children:[(0,X.jsxs)(un,{children:[(0,X.jsx)(xn,{children:"Contacts"}),(0,X.jsxs)(fn,{children:[(0,X.jsx)(U,{}),(0,X.jsxs)(bn,{type:"button",onClick:c,children:[(0,X.jsx)(sn,{}),"New Contact"]})]})]}),e&&!r&&(0,X.jsx)("b",{children:"Request in progress"}),(0,X.jsx)(dn,{})]}),o&&(0,X.jsx)(mn,{children:(0,X.jsx)(D.$,{title:"Add New Contact",children:(0,X.jsx)(Y,{onCloseModal:c})}),onCloseModal:c})]})}},9195:function(n,e,r){r.d(e,{$:function(){return s}});var i,t,o=r(168),a=r(4934),c=a.Z.section(i||(i=(0,o.Z)(["\n  margin: auto;\n  padding: 26px 0;\n\n  background-color: #f9f9f9;\n"]))),l=a.Z.h2(t||(t=(0,o.Z)(["\n  font-weight: 700;\n  font-size: 34px;\n\n  text-align: center;\n  margin: 0;\n"]))),d=r(3329),s=function(n){var e=n.title,r=n.children;return(0,d.jsxs)(c,{children:[e&&(0,d.jsx)(l,{children:e}),r]})}}}]);
//# sourceMappingURL=506.6868a9a0.chunk.js.map