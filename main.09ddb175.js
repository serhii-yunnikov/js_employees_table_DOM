parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,c=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==a.return||a.return()}finally{if(i)throw o}}}}function t(e){return o(e)||a(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=document.querySelector("thead").firstElementChild,l=t(i.querySelectorAll("th")),u=document.querySelector("tbody"),s=t(u.children);function d(t){var n,r=e(t.slice(0,3));try{for(r.s();!(n=r.n()).done;){n.value.dataset.type="text"}}catch(a){r.e(a)}finally{r.f()}t[3].dataset.type="number",t[4].dataset.type="salary"}l.forEach(function(e){return e.setAttribute("class","column")}),d(l);var f=function(e){return e.slice(1).split(",").join("")},m=function(e){return"$".concat(Number(e).toLocaleString())};function v(e){var n=l.indexOf(e),r=e.dataset,a=t(u.children).sort(function(e,t){var a=e.children[n].innerText,o=t.children[n].innerText,c=a,i=o;switch("asc"===r.order&&(c=o,i=a),r.type){case"text":return c.localeCompare(i);case"salary":return f(c)-f(i);case"number":return c-i}});s.forEach(function(e){return e.remove()}),a.forEach(function(e){return u.append(e)}),r.order&&"desc"!==r.order?r.order="desc":r.order="asc"}i.addEventListener("click",function(e){var t=e.target.closest(".column");t&&i.contains(t)&&v(t)}),s.forEach(function(e){return e.setAttribute("class","row")}),u.addEventListener("click",function(n){var r=n.target.closest(".row");if(r&&u.contains(r)){var a,o=e(s);try{for(o.s();!(a=o.n()).done;){var c=a.value;c.classList.contains("active")&&(c.classList.remove("active"),t(c.children).forEach(function(e){return e.classList.remove("cell-active")}))}}catch(i){o.e(i)}finally{o.f()}r.classList.add("active"),t(r.children).forEach(function(e){return e.classList.add("cell-active")})}});var y=document.createElement("form");y.setAttribute("class","new-employee-form"),y.autocomplete="off",document.body.insertBefore(y,document.body.lastChild);var p=["name","position","age","salary"],b=p.map(function(e){return'<label for = "'.concat(e,'">').concat(e[0].toUpperCase()+e.slice(1),':  <input name="').concat(e,'" type="text" id = "').concat(e,'"   data-qa = "').concat(e,'"></label>')});b.forEach(function(e){return y.insertAdjacentHTML("beforeend",e)});var h=document.querySelector("#age"),g=document.querySelector("#salary");h.type="number",g.type="number";var E=document.createElement("label");E.htmlFor="office";var A=document.createElement("select");A.setAttribute("id","office"),A.setAttribute("name","office"),A.dataset.qa="office",A.setAttribute("required","");var S=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"],x=S.map(function(e){return'<option data-id="'.concat(e,'">').concat(e,"</option>")});x.forEach(function(e){return A.insertAdjacentHTML("beforeend",e)}),E.append(A),y.insertBefore(E,y.children[2]),E.insertAdjacentText("afterbegin","Office:");var T=document.createElement("button");function L(e){return e.split("").some(function(e){return"0123456789".includes(e)})}T.type="submit",T.innerText="Save to table",y.append(T);var w=function(e){return e.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ")},q=function(e){e.preventDefault();var t=document.createElement("tr");t.className="row";var n=new FormData(y),r=Object.fromEntries(n.entries());return t.innerHTML="\n      <td>".concat(w(r.name),"</td>\n      <td>").concat(w(r.position),"</td>\n      <td>").concat(r.office,"</td>\n      <td>").concat(r.age,"</td>\n      <td>").concat(m(r.salary),"</td>\n  "),r.name.length<4||L(r.name)?H(I,"error"):r.position.length<=0?H(k,"error"):r.age<18?H(C,"error"):r.age>90?H(N,"error"):(H(M,"success"),u.append(t),void y.reset())};y.addEventListener("submit",q);var j=document.createElement("div");j.style.top="5px",j.style.right="-300px",j.style.position="fixed",j.style.textAlign="center",j.style.display="flex",j.style.alignItems="center",j.style.justifyContent="center",j.style.color="#5A5A5A",j.dataset.qa="notification",j.style.transition="all 1s ease",document.body.append(j);var C="Sorry, you are too young for this game",N="Sorry, you are too old for this game",I="Please, enter valid name",k="Please, enter valid position",O="Please, enter valid salary",M="Employee successfully added",H=function(e,t){j.className="notification ".concat(t),j.innerHTML='<p class="title">'.concat(e,"</p>"),j.style.right="5px",j.style.opacity="1",setTimeout(function(){var e=document.querySelector(".".concat(t));e.style.right="-300px",e.style.opacity="0"},"2800")};function B(e,n){var r=t(document.getElementsByTagName("label")).map(function(e){return e.firstElementChild})[n].cloneNode(!0);(4===n?r.setAttribute("value","".concat(f(e.innerText))):r.setAttribute("value","".concat(e.innerText)),r.className="cell-input",e.append(r),e.firstChild.remove(),2===n)&&u.querySelector('[data-id="'.concat(e.firstElementChild.getAttribute("value"),'"]')).setAttribute("selected","");document.querySelector(".cell-input").focus()}u.addEventListener("dblclick",function(e){var n=e.target.closest(".cell-active"),r=document.querySelector(".cell-active--mod");if(n&&u.contains(n)){r&&r.classList.remove("cell-active--mod"),n.className+="--mod";var a=t(document.querySelector(".row.active").children).findIndex(function(e){return"cell-active--mod"===e.className});B(e.target,a)}});var F=function(e,t){if(t.value.length<4||L(t.value))return H(I,"error");e.innerText=w(t.value),Y(e,t)},P=function(e,t){e.innerText=w(t.value),Y(e,t)},U=function(e,t){e.innerText="".concat(t.value),Y(e,t)},D=function(e,t){return t.value<18?H(C,"error"):t.value>90?H(N,"error"):(e.innerText="".concat(t.value),void Y(e,t))},$=function(e,t){if(t.value<=0)return H(O,"error");e.innerText="".concat(m(t.value)),Y(e,t)};function Y(e,t){t.remove(),e.classList.remove("cell-active--mod"),t.value||(e.innerText="".concat(t.getAttribute("value")))}var z=function(){var e=document.querySelector(".cell-input"),t=document.querySelector(".cell-active--mod");if(e&&u.contains(e))switch("".concat(e.name)){case"name":return F(t,e);case"position":return P(t,e);case"office":return U(t,e);case"age":return D(t,e);case"salary":return $(t,e)}};u.addEventListener("blur",z,!0),u.addEventListener("keydown",function(e){"Enter"===e.code&&z()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.09ddb175.js.map