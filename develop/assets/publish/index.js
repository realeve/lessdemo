"use strict";var setData=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#text1";return document.querySelector(a).innerText=t},ac="test",data=211,b={ac:ac,data:data};setData(JSON.stringify(b));var a=new Array(9).fill("🚀");setData(JSON.stringify(a),"#text2");var sum=function(t,a){return t=2*t,t+a};setData(sum(3,5),"#text3");
"use strict";var getRootPath2=function(t){var n=window.document.location.href,o=window.document.location.pathname,i=n.indexOf(o),e=n.substring(0,i),r=o.substring(0,o.substr(1).indexOf("/")+1);return 0===t?e+r:e};