(this["webpackJsonpbreach-protocol"]=this["webpackJsonpbreach-protocol"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n.n(c),o=n(17),a=n.n(o),s=n(3),u=n(4),l=n(9),d=n(23),h=n(5);function f(){var e=Object(s.a)(["\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  padding: 2px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 4rem;\n  color: ",";\n  background-color: ",";\n\n  &:hover&:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border: 1px dashed var(--primary-color-dark);\n  }\n"]);return f=function(){return e},e}var b=u.a.span(f(),(function(e){return e.color}),(function(e){return e.backgroundColor})),j=Object(h.a)((function(e){var t=e.children,n=e.disabled,i=e.selected,o=e.completed,a=e.onClick,s=Object(d.a)(e,["children","disabled","selected","completed","onClick"]),u=Object(c.useCallback)((function(){return n?"var(--disabled-color-dark)":"var(--primary-color)"}),[n]),h=Object(c.useCallback)((function(){return n?"var(--disabled-color)":o?"var(--sucess-color)":i?"var(--active-color)":"initial"}),[n,o,i]);return Object(r.jsx)(b,Object(l.a)(Object(l.a)({color:u,backgroundColor:h,isDisabled:n},s),{},{onClick:n?null:a,children:t}))})),p=n(8),v=n.n(p);function O(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: ",";\n  flex-wrap: ",";\n  justify-content: ",";\n  align-items: ",";\n\n  & > *:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return O=function(){return e},e}var m=u.a.div(O(),(function(e){return e.direction}),(function(e){return e.wrap}),(function(e){return e.justify}),(function(e){return e.align}),(function(e){return"".concat(e.spacing,"rem")}));m.propTypes={direction:v.a.string,wrap:v.a.string,justify:v.a.string,align:v.a.string,spacing:v.a.number},m.defaultProps={direction:"row",wrap:"nowrap",justify:"flex-start",align:"flex-start",spacing:0};var g=m,x=n(6),y=n(7),C=n(24),k=n(21),w=function(e){Object(C.a)(n,e);var t=Object(k.a)(n);function n(e){var r;return Object(x.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(y.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log("componentDidCatch : ",e,t)}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log("error :",e),{hasError:!0}}}]),n}(c.Component),E=n(2),I=Object.freeze({created:"CREATED",started:"STARTED",finished:"FINISHED"}),D=Object.freeze({row:"ROW",column:"COLUMN"}),M=function(){function e(t,n,r){if(Object(x.a)(this,e),!t.isEmpty())throw Error("Buffer must be empty");if(this.buffer=t,0===n.length)throw Error("At least one sequence must be provided");this.sequences=n,this.matrix=r,this.selectedIndex=0,this.history=[],Object(E.k)(this)}return Object(y.a)(e,[{key:"create",value:function(){this.state=I.created}},{key:"select",value:function(e,t){if(this.history.includes("".concat(e,":").concat(t)))throw Error("Cannot select an already visited cell");if(this.selectionMode===D.row&&e!==this.selectedIndex)throw Error("Selected row must be ".concat(this.selectedIndex));if(this.selectionMode===D.column&&t!==this.selectedIndex)throw Error("Selected column must be ".concat(this.selectedIndex));var n=this.matrix[e][t];return this.selectedIndex=this.selectionMode===D.row?t:e,this.buffer.addEntry(n),this.history.push("".concat(e,":").concat(t)),n}},{key:"state",get:function(){return this.buffer.isFull()?I.finished:this.state}},{key:"selectionMode",get:function(){return this.buffer.position%2===0?D.row:D.column}}]),e}(),S=n(15),B=n.n(S);function F(){var e=Object(s.a)(["\n  background-color: var(--primary-color);\n"]);return F=function(){return e},e}function T(){var e=Object(s.a)(["\n  border: 1px solid var(--primary-color);\n"]);return T=function(){return e},e}var q=u.a.div(T()),z=u.a.div(F()),A=Object(h.a)((function(e){var t=e.matrix,n=e.selectedIndex,i=e.selectionMode,o=e.onCellClick,a=e.history,s=Object(c.useCallback)((function(e,t){return function(){o(e,t)}}),[o]);return Object(r.jsxs)(q,{children:[Object(r.jsx)(z,{colSpan:t.length,children:"CODE MATRIX"}),t.map((function(e,t){return Object(r.jsx)("div",{children:e.map((function(e,c){return Object(r.jsx)(j,{onClick:s(t,c),disabled:a.includes("".concat(t,":").concat(c)),selected:i===D.row&&n===t||i===D.column&&n===c,children:e},B.a.generate())}))},B.a.generate())}))]})})),R=n(22);function L(){var e=Object(s.a)(["\n  min-height: 52px;\n  min-width: ",";\n  border: 1px solid var(--primary-color);\n"]);return L=function(){return e},e}var P=u.a.aside(L(),(function(e){return"calc(60px * ".concat(e.size,")")})),J=Object(h.a)((function(e){var t=e.capacity,n=e.values;return console.log("Buffer ; ",Object(E.m)(n)),Object(r.jsx)(P,{size:t,children:Object(R.a)(Array(t)).map((function(e,t){return t>=n.length?null:Object(r.jsx)(j,{children:n[t]||null},t)}))})})),N=function(e){var t=e.sequences;return Object(r.jsx)(g,{direction:"column",children:t.map((function(e){return Object(r.jsx)(J,{capacity:e.length,values:e})}))})},H=Object(h.a)((function(e){var t=e.game;return Object(r.jsxs)(g,{children:[Object(r.jsx)(A,{matrix:t.matrix,selectedIndex:t.selectedIndex,selectionMode:t.selectionMode,history:t.history,onCellClick:function(e,n){t.select(e,n)}}),Object(r.jsxs)(g,{direction:"column",spacing:1,children:[Object(r.jsx)(J,Object(l.a)({},t.buffer)),Object(r.jsx)(N,{sequences:t.sequences})]})]})})),U=function(){function e(t){Object(x.a)(this,e),this.capacity=t,this.values=[],Object(E.k)(this)}return Object(y.a)(e,[{key:"isEmpty",value:function(){return 0===this.values.length}},{key:"isFull",value:function(){return this.values.length===this.capacity}},{key:"addEntry",value:function(e){if(this.isFull())throw Error("Buffer is full");this.values.push(e)}},{key:"containsSequence",value:function(e){return this.values.join("").includes(e.join(""))}},{key:"position",get:function(){return this.values.length}}]),e}();function W(){var e=Object(s.a)(["\n  border: 1px solid var(--primary-color);\n  height: 100%;\n  padding: 4%;\n"]);return W=function(){return e},e}var X=u.a.main(W());var G=function(){var e=new U(8),t=new M(e,[["55","1C"],["1C","1C","E9"],["BD","E9","55"]],[["1C","E9","1C","55","1C"],["E9","55","1C","1C","BD"],["55","BD","1C","BD","55"],["55","1C","55","55","1C"],["E9","1C","1C","1C","55"]]);return Object(r.jsx)(w,{children:Object(r.jsx)(X,{children:Object(r.jsx)(H,{game:t})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};n(43);a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root")),K()}},[[44,1,2]]]);
//# sourceMappingURL=main.8b7e4117.chunk.js.map