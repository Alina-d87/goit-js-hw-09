!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),l={form:document.querySelector(".form"),delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]")};console.log(l),l.form.addEventListener("submit",(function(e){e.preventDefault(),i=l.delay.value,console.log(i),c=l.step.value,console.log(c);var n=l.amount.value;console.log(n),i=Number.parseInt(i)+Number.parseInt(c),console.log(i);for(var o=0;o<=n;o+=1){a(o,i).then((function(e){e.position,e.delay;return setTimeout((function(){resolve}),c)})).catch((function(e){e.position,e.delay;return setTimeout((function(){reject}),c)}))}}));var i=null,c=null;function a(n,o){return new Promise((function(t,r){var l=Math.random()>.3;setTimeout((function(){l?e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")):e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}),c)}))}}();
//# sourceMappingURL=03-promises.59838d52.js.map
