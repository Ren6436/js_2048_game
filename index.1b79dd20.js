!function(){function e(e,t,n,r,i,o,l){try{var a=e[o](l),u=a.value}catch(e){n(e);return}a.done?t(u):Promise.resolve(u).then(r,i)}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function n(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function i(e,t,n){if(!t.has(e))throw TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function o(e,t){var n=i(e,t,"get");return n.get?n.get.call(e):n.value}function l(e,t,n){!function(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function a(e,t,n){var r=i(e,t,"set");return!function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=n}}(e,r,n),n}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}"function"==typeof SuppressedError&&SuppressedError;var c=new WeakMap,f=new WeakMap,h=function(){function e(t){r(this,e),l(this,f,{get:d,set:void 0}),l(this,c,{writable:!0,value:void 0}),t.style.setProperty("--grid-size",4),t.style.setProperty("--cell-size","".concat(12,"vmin")),t.style.setProperty("--cell-gap","".concat(2,"vmin")),a(this,c,(function(e){for(var t=[],n=0;n<16;n++){var r=document.createElement("div");r.classList.add("cell"),t.push(r),e.append(r)}return t})(t).map(function(e,t){return new g(e,t%4,Math.floor(t/4))}))}return s(e,[{key:"cells",get:function(){return o(this,c)}},{key:"cellsByColumn",get:function(){return o(this,c).reduce(function(e,t){return e[t.x]=e[t.x]||[],e[t.x][t.y]=t,e},[])}},{key:"cellsByRow",get:function(){return o(this,c).reduce(function(e,t){return e[t.y]=e[t.y]||[],e[t.y][t.x]=t,e},[])}},{key:"randomEmptyCell",value:function(){var e=Math.floor(Math.random()*o(this,f).length);return o(this,f)[e]}}]),e}();function d(){return o(this,c).filter(function(e){return null==e.tile})}var y=new WeakMap,v=new WeakMap,p=new WeakMap,m=new WeakMap,w=new WeakMap,g=function(){function e(t,n,i){r(this,e),l(this,y,{writable:!0,value:void 0}),l(this,v,{writable:!0,value:void 0}),l(this,p,{writable:!0,value:void 0}),l(this,m,{writable:!0,value:void 0}),l(this,w,{writable:!0,value:void 0}),a(this,y,t),a(this,v,n),a(this,p,i)}return s(e,[{key:"x",get:function(){return o(this,v)}},{key:"y",get:function(){return o(this,p)}},{key:"tile",get:function(){return o(this,m)},set:function(e){a(this,m,e),null!=e&&(o(this,m).x=o(this,v),o(this,m).y=o(this,p))}},{key:"mergeTile",get:function(){return o(this,w)},set:function(e){a(this,w,e),null!=e&&(o(this,w).x=o(this,v),o(this,w).y=o(this,p))}},{key:"canAccept",value:function(e){return null==this.tile||null==this.mergeTile&&this.tile.value===e.value}},{key:"mergeTiles",value:function(){null!=this.tile&&null!=this.mergeTile&&(this.tile.value=this.tile.value+this.mergeTile.value,this.mergeTile.remove(),this.mergeTile=null)}}]),e}(),b=new WeakMap,k=new WeakMap,C=new WeakMap,x=new WeakMap,S=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.random()>.5?2:4;r(this,e),l(this,b,{writable:!0,value:void 0}),l(this,k,{writable:!0,value:void 0}),l(this,C,{writable:!0,value:void 0}),l(this,x,{writable:!0,value:void 0}),a(this,b,document.createElement("div")),o(this,b).classList.add("tile"),t.append(o(this,b)),this.value=n}return s(e,[{key:"value",get:function(){return o(this,x)},set:function(e){a(this,x,e),o(this,b).textContent=e;var t=100-9*Math.log2(e);o(this,b).style.setProperty("--background-lightness","".concat(t,"%")),o(this,b).style.setProperty("--text-lightness","".concat(t<=50?90:10,"%"))}},{key:"x",set:function(e){a(this,k,e),o(this,b).style.setProperty("--x",e)}},{key:"y",set:function(e){a(this,C,e),o(this,b).style.setProperty("--y",e)}},{key:"remove",value:function(){o(this,b).remove()}},{key:"waitForTransition",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(n){o(e,b).addEventListener(t?"animationend":"transitionend",n,{once:!0})})}}]),e}(),E=document.getElementById("game-board"),M=document.querySelector(".button"),T=document.querySelector(".game-score"),L=document.querySelector(".game-best"),A=document.querySelector(".message-start"),P=document.querySelector(".message-win"),B=document.querySelector(".message-lose"),W=document.querySelector(".message-end"),q=new h(E),R=0,I=0,j=+localStorage.getItem("bestScore")||0;function z(){window.addEventListener("keydown",O,{once:!0})}function O(e){return F.apply(this,arguments)}function F(){var t;return t=function(e){var t;return function(e,t){var n,r,i,o,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(u){return function(a){if(n)throw TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(l=0)),l;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(i=(i=l.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){l.label=a[1];break}if(6===a[0]&&l.label<i[1]){l.label=i[1],i=a;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(a);break}i[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}(this,function(r){switch(r.label){case 0:switch(e.key){case"ArrowUp":return[3,1];case"ArrowDown":return[3,3];case"ArrowLeft":return[3,5];case"ArrowRight":return[3,7]}return[3,9];case 1:if(!D())return z(),[2];return[4,U(q.cellsByColumn)];case 2:case 4:case 6:case 8:return r.sent(),[3,10];case 3:if(!G())return z(),[2];return[4,U(q.cellsByColumn.map(function(e){return n(e).reverse()}))];case 5:if(!$())return z(),[2];return[4,U(q.cellsByRow)];case 7:if(!H())return z(),[2];return[4,U(q.cellsByRow.map(function(e){return n(e).reverse()}))];case 9:return z(),[2];case 10:if(q.cells.forEach(function(e){return e.mergeTiles()}),t=new S(E),q.randomEmptyCell().tile=t,!D()&&!G()&&!$()&&!H()){if(!P.classList.contains("hidden"))return W.classList.remove("hidden"),[2];return B.classList.remove("hidden"),[2]}return z(),[2]}})},(F=function(){var n=this,r=arguments;return new Promise(function(i,o){var l=t.apply(n,r);function a(t){e(l,i,o,a,u,"next",t)}function u(t){e(l,i,o,a,u,"throw",t)}a(void 0)})}).apply(this,arguments)}function U(e){return Promise.all(e.flatMap(function(e){for(var t=[],n=1;n<e.length;n++){var r=e[n];if(null!=r.tile){for(var i=void 0,o=n-1;o>=0;o--){var l=e[o];if(!l.canAccept(r.tile))break;i=l}if(null!=i){if(t.push(r.tile.waitForTransition()),null!=i.tile){i.mergeTile=r.tile;var a=i.tile.value+r.tile.value;I+=a,T.textContent=I,I>j&&(j=I,localStorage.setItem("bestScore",j),L.textContent=j),2048===a&&P.classList.remove("hidden")}else i.tile=r.tile;r.tile=null}}}return t}))}function D(){return J(q.cellsByColumn)}function G(){return J(q.cellsByColumn.map(function(e){return n(e).reverse()}))}function $(){return J(q.cellsByRow)}function H(){return J(q.cellsByRow.map(function(e){return n(e).reverse()}))}function J(e){return e.some(function(e){return e.some(function(t,n){return 0!==n&&null!=t.tile&&e[n-1].canAccept(t.tile)})})}L.textContent=j,M.addEventListener("click",function(){for(;E.firstChild;)E.removeChild(E.firstChild);(q=new h(E)).randomEmptyCell().tile=new S(E),q.randomEmptyCell().tile=new S(E),R=0,T.textContent=R,M.classList.replace("start","restart"),M.textContent="Restart",A.classList.add("hidden"),B.classList.add("hidden"),P.classList.add("hidden"),W.classList.add("hidden"),M.blur(),z()})}();
//# sourceMappingURL=index.1b79dd20.js.map
