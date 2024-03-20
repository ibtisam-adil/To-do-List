(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,"/* BODY */\nbody {\n  /* padding: 10rem 25rem; */\n  display: grid;\n  place-items: center;\n  height: 100vh;\n}\n\n/* Structure */\n.structure {\n  padding: 2rem;\n  background-color: aliceblue;\n  width: 30rem;\n  border-radius: 5px;\n}\n\n/* P-REFERESH */\n.p-referesh {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.bx {\n  width: 1rem;\n  height: 1rem;\n}\n\n.bx-refresh {\n  font-size: 1.5rem;\n}\n\n.p-desc {\n  padding-left: 1rem;\n}\n\n/* ADD_LIST */\n.add-list {\n  height: 2rem;\n  width: 24rem;\n  margin: 1rem 0;\n}\n\n.dynamic-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n.check-p-wrap {\n  display: flex;\n}\n\n.underline {\n  height: 0;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n\n/* TODO-LIST */\n.todo-list {\n  padding-right: 1rem;\n  max-height: 20rem;\n  overflow-y: auto;\n}\n\n/* CLEAR TASKS */\n.clear-tasks {\n  padding: 0.8rem 0.3rem;\n  margin-top: 1.5rem;\n  background-color: antiquewhite;\n  text-align: center;\n  border-radius: 7px;\n}\n\n.dropdown {\n  display: none;\n}\n\n.completed {\n  text-decoration: line-through;\n}\n",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),o=n.n(r),a=n(659),i=n.n(a),s=n(56),d=n.n(s),c=n(540),l=n.n(c),u=n(113),p=n.n(u),h=n(208),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(h.A,m),h.A&&h.A.locals&&h.A.locals;const f=document.querySelector(".todo-list"),v=document.querySelector(".add-list"),y=document.querySelector(".clear-tasks");(new class{constructor(){this.todo=this.getTodoListFromLocal()||[],this.rendertodo()}getTodoListFromLocal=()=>JSON.parse(localStorage.getItem("localtodo"));clearAllTasks=()=>{this.todo=this.todo.filter((e=>!0!==e.isCompleted)),this.rendertodo()};addTask=()=>{((e,t,n)=>{const r=n.value;n.value="";const o={taskValue:r,isCompleted:!1};e.push(o),localStorage.setItem("localtodo",JSON.stringify(e)),t()})(this.todo,this.rendertodo,v)};editTask=(e,t)=>{e.contentEditable=!0,e.focus(),e.addEventListener("keypress",(n=>{"Enter"===n.key&&(this.todo[t].taskValue=e.innerHTML,this.updateLocalStorage(),this.rendertodo())}))};updateTaskStatus=e=>{this.todo[e].isCompleted?(this.todo[e].isCompleted=!1,this.rendertodo()):(this.todo[e].isCompleted=!0,this.rendertodo())};deleteTask=e=>{this.todo.splice(e,1),this.updateLocalStorage(),this.rendertodo()};updateLocalStorage=()=>{localStorage.setItem("localtodo",JSON.stringify(this.todo))};rendertodo=()=>{var e,t,n,r;e=this.todo,t=this.editTask,n=this.deleteTask,r=this.updateTaskStatus,f.innerHTML=e.map(((e,t)=>`\n          <div class="dynamic-wrapper">\n              <div class="check-p-wrap">\n                  <input class="checkbox" type="checkbox">\n                  <label id="task-${t}" class="p-desc ${e.isCompleted?"completed":""}">${e.taskValue}</label>\n              </div>\n              <i class='bx bx-dots-vertical-rounded dots'></i>\n              <select id="delete-edit-${t}" class="dropdown" name="edit" style="display:none;">\n                  <option value="select">Select</option>\n                  <option value="delete">Delete</option>\n                  <option value="edit">Edit</option>\n              </select>\n          </div>\n          <div class="underline"></div>\n    `)).join(""),document.querySelectorAll(".dots").forEach(((o,a)=>{const i=document.querySelector(`#delete-edit-${a}`),s=document.querySelector(`#task-${a}`);document.querySelectorAll(".checkbox").forEach(((e,t)=>{e.addEventListener("change",(()=>{r(t)}))})),o.addEventListener("click",(()=>{i.style.display="block",o.style.display="none"})),i.addEventListener("change",(e=>{const r=e.target.value;"edit"===r?t(s,a):"delete"===r&&n(a),i.style.display="none"})),s.addEventListener("blur",(()=>{s.contentEditable=!1,e[a].taskValue=s.textContent}))}))};bindEvent=()=>{y.addEventListener("click",this.clearAllTasks),v.addEventListener("keypress",(e=>{"Enter"===e.key&&this.addTask()}))}}).bindEvent()})()})();