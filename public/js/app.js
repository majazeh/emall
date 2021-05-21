/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
      define(factory);
    } else if (typeof exports === 'object') {
      module.exports = factory();
    } else {
      root.NProgress = factory();
    }

  })(this, function() {
    var NProgress = {};

    NProgress.version = '0.2.0';

    var Settings = NProgress.settings = {
      minimum: 0.08,
      easing: 'linear',
      positionUsing: '',
      speed: 200,
      trickle: true,
      trickleSpeed: 200,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: 'body',
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };

    /**
     * Updates configuration.
     *
     *     NProgress.configure({
     *       minimum: 0.1
     *     });
     */
    NProgress.configure = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
      }

      return this;
    };

    /**
     * Last number.
     */

    NProgress.status = null;

    /**
     * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
     *
     *     NProgress.set(0.4);
     *     NProgress.set(1.0);
     */

    NProgress.set = function(n) {
      var started = NProgress.isStarted();

      n = clamp(n, Settings.minimum, 1);
      NProgress.status = (n === 1 ? null : n);

      var progress = NProgress.render(!started),
          bar      = progress.querySelector(Settings.barSelector),
          speed    = Settings.speed,
          ease     = Settings.easing;

      progress.offsetWidth; /* Repaint */

      queue(function(next) {
        // Set positionUsing if it hasn't already been set
        if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

        // Add transition
        css(bar, barPositionCSS(n, speed, ease));

        if (n === 1) {
          // Fade out
          css(progress, {
            transition: 'none',
            opacity: 1
          });
          progress.offsetWidth; /* Repaint */

          setTimeout(function() {
            css(progress, {
              transition: 'all ' + speed + 'ms linear',
              opacity: 0
            });
            setTimeout(function() {
              NProgress.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });

      return this;
    };

    NProgress.isStarted = function() {
      return typeof NProgress.status === 'number';
    };

    /**
     * Shows the progress bar.
     * This is the same as setting the status to 0%, except that it doesn't go backwards.
     *
     *     NProgress.start();
     *
     */
    NProgress.start = function() {
      if (!NProgress.status) NProgress.set(0);

      var work = function() {
        setTimeout(function() {
          if (!NProgress.status) return;
          NProgress.trickle();
          work();
        }, Settings.trickleSpeed);
      };

      if (Settings.trickle) work();

      return this;
    };

    /**
     * Hides the progress bar.
     * This is the *sort of* the same as setting the status to 100%, with the
     * difference being `done()` makes some placebo effect of some realistic motion.
     *
     *     NProgress.done();
     *
     * If `true` is passed, it will show the progress bar even if its hidden.
     *
     *     NProgress.done(true);
     */

    NProgress.done = function(force) {
      if (!force && !NProgress.status) return this;

      return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };

    /**
     * Increments by a random amount.
     */

    NProgress.inc = function(amount) {
      var n = NProgress.status;

      if (!n) {
        return NProgress.start();
      } else if(n > 1) {
        return;
      } else {
        if (typeof amount !== 'number') {
          if (n >= 0 && n < 0.2) { amount = 0.1; }
          else if (n >= 0.2 && n < 0.5) { amount = 0.04; }
          else if (n >= 0.5 && n < 0.8) { amount = 0.02; }
          else if (n >= 0.8 && n < 0.99) { amount = 0.005; }
          else { amount = 0; }
        }

        n = clamp(n + amount, 0, 0.994);
        return NProgress.set(n);
      }
    };

    NProgress.trickle = function() {
      return NProgress.inc();
    };

    /**
     * Waits for all supplied jQuery promises and
     * increases the progress as the promises resolve.
     *
     * @param $promise jQUery Promise
     */
    (function() {
      var initial = 0, current = 0;

      NProgress.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }

        if (current === 0) {
          NProgress.start();
        }

        initial++;
        current++;

        $promise.always(function() {
          current--;
          if (current === 0) {
              initial = 0;
              NProgress.done();
          } else {
              NProgress.set((initial - current) / initial);
          }
        });

        return this;
      };

    })();

    /**
     * (Internal) renders the progress bar markup based on the `template`
     * setting.
     */

    NProgress.render = function(fromStart) {
      if (NProgress.isRendered()) return document.getElementById('nprogress');

      addClass(document.documentElement, 'nprogress-busy');

      var progress = document.createElement('div');
      progress.id = 'nprogress';
      progress.innerHTML = Settings.template;



      var bar = progress.querySelector(Settings.barSelector),
          perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
          parent = isDOM(Settings.parent)
            ? Settings.parent
            : document.querySelector(Settings.parent),
          spinner

      css(bar, {
        transition: 'all 0 linear',
        transform: 'translate3d(' + perc + '%,0,0)'
      });

      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }

      if (parent != document.body) {
        addClass(parent, 'nprogress-custom-parent');
      }

      parent.appendChild(progress);
      return progress;
    };

    /**
     * Removes the element. Opposite of render().
     */

    NProgress.remove = function() {
      removeClass(document.documentElement, 'nprogress-busy');
      var parent = isDOM(Settings.parent)
        ? Settings.parent
        : document.querySelector(Settings.parent)
      removeClass(parent, 'nprogress-custom-parent')
      var progress = document.getElementById('nprogress');
      progress && removeElement(progress);
    };

    /**
     * Checks if the progress bar is rendered.
     */

    NProgress.isRendered = function() {
      return !!document.getElementById('nprogress');
    };

    /**
     * Determine which positioning CSS rule to use.
     */

    NProgress.getPositioningCSS = function() {
      // Sniff on document.body.style
      var bodyStyle = document.body.style;

      // Sniff prefixes
      var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                         ('MozTransform' in bodyStyle) ? 'Moz' :
                         ('msTransform' in bodyStyle) ? 'ms' :
                         ('OTransform' in bodyStyle) ? 'O' : '';

      if (vendorPrefix + 'Perspective' in bodyStyle) {
        // Modern browsers with 3D support, e.g. Webkit, IE10
        return 'translate3d';
      } else if (vendorPrefix + 'Transform' in bodyStyle) {
        // Browsers without 3D support, e.g. IE9
        return 'translate';
      } else {
        // Browsers without translate() support, e.g. IE7-8
        return 'margin';
      }
    };

    /**
     * Helpers
     */

    function isDOM (obj) {
      if (typeof HTMLElement === 'object') {
        return obj instanceof HTMLElement
      }
      return (
        obj &&
        typeof obj === 'object' &&
        obj.nodeType === 1 &&
        typeof obj.nodeName === 'string'
      )
    }

    function clamp(n, min, max) {
      if (n < min) return min;
      if (n > max) return max;
      return n;
    }

    /**
     * (Internal) converts a percentage (`0..1`) to a bar translateX
     * percentage (`-100%..0%`).
     */

    function toBarPerc(n) {
      return (-1 + n) * 100;
    }


    /**
     * (Internal) returns the correct CSS for changing the bar's
     * position given an n percentage, and speed and ease from Settings
     */

    function barPositionCSS(n, speed, ease) {
      var barCSS;

      if (Settings.positionUsing === 'translate3d') {
        barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
      } else if (Settings.positionUsing === 'translate') {
        barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
      } else {
        barCSS = { 'margin-left': toBarPerc(n)+'%' };
      }

      barCSS.transition = 'all '+speed+'ms '+ease;

      return barCSS;
    }

    /**
     * (Internal) Queues a function to be executed.
     */

    var queue = (function() {
      var pending = [];

      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }

      return function(fn) {
        pending.push(fn);
        if (pending.length == 1) next();
      };
    })();

    /**
     * (Internal) Applies css properties to an element, similar to the jQuery
     * css method.
     *
     * While this helper does assist with vendor prefixed property names, it
     * does not perform any manipulation of values prior to setting styles.
     */

    var css = (function() {
      var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
          cssProps    = {};

      function camelCase(string) {
        return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }

      function getVendorProp(name) {
        var style = document.body.style;
        if (name in style) return name;

        var i = cssPrefixes.length,
            capName = name.charAt(0).toUpperCase() + name.slice(1),
            vendorName;
        while (i--) {
          vendorName = cssPrefixes[i] + capName;
          if (vendorName in style) return vendorName;
        }

        return name;
      }

      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }

      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }

      return function(element, properties) {
        var args = arguments,
            prop,
            value;

        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      }
    })();

    /**
     * (Internal) Determines if an element or space separated list of class names contains a class name.
     */

    function hasClass(element, name) {
      var list = typeof element == 'string' ? element : classList(element);
      return list.indexOf(' ' + name + ' ') >= 0;
    }

    /**
     * (Internal) Adds a class to an element.
     */

    function addClass(element, name) {
      var oldList = classList(element),
          newList = oldList + name;

      if (hasClass(oldList, name)) return;

      // Trim the opening space.
      element.className = newList.substring(1);
    }

    /**
     * (Internal) Removes a class from an element.
     */

    function removeClass(element, name) {
      var oldList = classList(element),
          newList;

      if (!hasClass(element, name)) return;

      // Replace the class name.
      newList = oldList.replace(' ' + name + ' ', ' ');

      // Trim the opening and closing spaces.
      element.className = newList.substring(1, newList.length - 1);
    }

    /**
     * (Internal) Gets a space separated list of the class names on the element.
     * The list is wrapped with a single space on each end to facilitate finding
     * matches within the list.
     */

    function classList(element) {
      return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
    }

    /**
     * (Internal) Removes an element from the DOM.
     */

    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }

    return NProgress;
  });

(function(){
    var target = {};
    window.metarget = function(){
        removeTargets();
        $('[data-metarget]').each(function(){
            var tg = $(this).attr('data-metarget');
            if($(this).attr('data-metarget-pattern')){
                target[tg] = new RegExp($(this).attr('data-metarget-pattern'));
            }
            if(target[tg] && target[tg].constructor.name == 'RegExp' && target[tg].test(location.pathname)){
                initTarget($(this));
            }else if(typeof(target[tg]) == 'function' && target[tg].call()){
                initTarget($(this));
            }
        });
        if(!$('.metarget').length){
            initTarget($('[data-metarget-default]'));
        }
    }
    function initTarget(target){
        target.addClass(['active', 'metarget']);
    }
    function removeTargets(){
        $('.metarget, [data-metarget]').removeClass(['active', 'metarget']);
    }
})();

!function(){window.JResp=function(e,t){if(e.trigger("jresp",[t]),t.message&&!e.is(".d-notification"))if(window.toastr)toastr[t.is_ok?"success":"error"](t.message_text||t.message,void 0,{closeButton:!0,newestOnTop:!0,positionClass:"toast-bottom-right"});else if(window.iziToast){var a=t.message_text||t.message;if(t.errors){var i=0;for(err in t.errors)++i;1===i&&1==t.errors[err].length&&(a=t.errors[err][0])}iziToast[t.is_ok?"show":"error"]({message:a,rtl:$("body").is(".rtl"),closeOnClick:!0})}t.redirect&&(t.direct?location.href=t.redirect:new Statio({url:t.redirect,replace:t.replace,type:["render","url"].indexOf(t.lijax_type)>=0?t.lijax_type:"both"}))}}(),function(){window.Lijax=function(e,t){var a=$(e).val()||$(e).attr("data-value");$(e).is(":checkbox")&&(a=$(e).is(":checked")?1:0);var i=null,r=null;r=$(e).is("form")&&!$(e).attr("data-lijax")?["submit"]:$(e).is("input, select, textarea")?$(e).attr("data-lijax")?$(e).attr("data-lijax").split(" "):["change"]:$(e).attr("data-lijax")?$(e).attr("data-lijax").split(" "):["click"];for(var n=0;n<r.length;n++)if(/^\d+$/.test(r[n])){var s=r[n];$(e).on("keyup",function(){i&&clearTimeout(i),i=setTimeout(o,s)})}else $(e).on(r[n],o);function o(){var i=url.parse(location.href),r=$(e).attr("data-name")||$(e).attr("name");i.get&&i.get[r]&&delete i.get[r];var n=url.buildget(i.get);i=i.url.replace(/\?(.*)$/,n?"?"+n:"");var s=$(e).attr("href")||$(e).attr("action")||$(e).attr("data-action")||i,o=$(e).attr("data-method")||$(e).attr("method")||"GET",d=$(e).attr("data-state"),l=void 0;if($(e).addClass("lijax-sending"),$(e).on("statio:done",function(){$(this).removeClass("lijax-sending")}),$(e).is("form")){var c=new FormData(e),u={};"multipart/form-data"==$(e).attr("enctype")||$("input:file",e).length?u=c:c.forEach(function(e,t){u[t]=/\[\]$/.test(t)?c.getAll(t):c.get(t)}),d=!1,$("input, select, textarea, button",e).not(":disabled").addClass("lijax-disable").attr("disabled","disabled"),$(e).on("statio:done",function(){$(".lijax-disable",this).removeClass("lijax-disable").removeAttr("disabled")})}else{if(l=$(e).val()||$(e).attr("data-value")||null,$(e).is(":checkbox")&&(l=$(e).is(":checked")?1:0),a==l&&$(e).is("input, textarea, select")&&!t)return;if(a=l,$(e).is(":file"))(u=new FormData).append(r,e.files[0]);else if(u={},r&&(u[r]=l),$(e).attr("data-merge")){var m=JSON.parse($(e).attr("data-merge"));console.log($.extend(u,m))}}if($(e).attr("data-query")){var f=url.parse(s),h=url.parse("?"+$(e).attr("data-query"));f.get=$.extend(null,f.get||{},h.get),s=url.build(f)}var p={};$(e).attr("data-xhrBase")&&(p={"Data-xhr-base":$(e).attr("data-xhrBase")});var g=$("#"+$(e).attr("data-lijax-preload")).eq(0),v=$("#"+$(e).attr("data-lijax-success")).eq(0);$(e).on("statio:jsonResponse",function(t,a,i){g&&202!=i.status&&($(this).removeClass("lijax-preload"),v&&["Created","OK"].indexOf(i.statusText)>=0?(g.hide(),v.hide().removeClass("d-none").fadeIn("fast")):(g.hide(),$(e).fadeIn("fast")))});var x=$(e).attr("data-remove-query");if(x){var b=url.parse(s),y=x.split(" ");if(b.get)for(var w=0;w<y.length;w++)b.get[y[w]]&&delete b.get[y[w]];var _=[];for(var j in b.get||{})_.push(j+"="+b.get[j]);b.query=_.join("&"),s=url.build(b)}var k=!!($(e).is(":file")||$(e).is("form")&&("multipart/form-data"==$(e).attr("enctype")||$("input:file",e).length));return $(e).trigger("lijax:data",[u]),new Statio({type:d?"both":"render",context:e,ajax:{contentType:!k&&"application/x-www-form-urlencoded; charset=UTF-8",processData:!k,cache:!1,method:o,data:u,headers:p,beforeSend:function(){$(e).is("[data-lijax-preload]")&&($(e).addClass("lijax-preload").hide(),g.hide().removeClass("d-none").fadeIn("fast"))}},url:s}),!1}t&&o()}}(),function(){var e=null,t=!1,a=null,i={title:function(e){$("title").html(e)},state:function(e){new Statio({fake:!0,url:e})},page:function(e){$("body").attr("data-page",e)},qSearch:function(e){var t=$("#quick_search");t.attr("data-basePage")!=$("body").attr("data-page")&&(t.attr("data-basePage",$("body").attr("data-page")),t.val("")),e?t.parents("form").fadeIn("fast"):t.parents("form").fadeOut("fast");var a=url.parse(location.href).get||{};a.q=a?a.q:"",t.is(":focus")||a.q==t.val()||t.val(a.q)}},r={type:"GET",cache:!1},n={object:null,title:null,ajax:r,type:"both",fake:!1,response:null,replace:!1,context:document};window.Statio=function(s){if("object"!=typeof s&&(s={}),s.ajax=$.extend({},r,s.ajax),s.ajax.url=s.url,/^\#(.*)$/.test(s.ajax.url))return!0;s.globals=$.extend({},i,s.globals);var o=$.extend({},n,s),d={body:o.response,data:{}};o.context instanceof jQuery||(o.context=$(o.context)),$(document).trigger("statio:global:init",[o.context]),o.context.trigger("statio:init");var l=null;if("render"!=o.type&&(a=o.ajax.url),o.fake)if("url"!=o.type&&d.body)h(),p(),$(document).trigger("statio:global:done",[o.context]),o.context.trigger("statio:done");else{try{o.replace?history.replaceState(JSON.parse(JSON.stringify(o)),o.title,l||o.url):history.pushState(JSON.parse(JSON.stringify(o)),o.title,l||o.url)}catch(e){console.error(e)}$(document).trigger("statio:global:done",[o.context]),o.context.trigger("statio:done")}else{if(o.ajax.complete){var c=o.ajax.complete;o.ajax.complete=function(){f.call(this,...arguments),c.call(this,...arguments)}}else o.ajax.complete=f;var u=o.ajax.beforeSend;if(o.ajax.beforeSend=function(e,t){"render"==o.type&&"GET"==o.ajax.type||(NProgress.configure({showSpinner:!1}),NProgress.start()),l=this.url;var a=url.parse(l);a.get&&a.get._&&delete a.get._;var i=url.buildget(a.get);l=a.url.replace(/\?([^#]*)(\#.*)?$/,i?"?"+i+"$2":"$2"),u&&u.call(this,e,t)},0==o.fake&&"render"!=o.type)try{t.abort()}catch(e){}var m=this.ajax=$.ajax(o.ajax);0==o.fake&&"render"!=o.type&&(t=m)}function f(e,t){if(NProgress.done(),e.responseJSON)d.data=e.responseJSON,$(document).trigger("statio:global:jsonResponse",[o.context,e.responseJSON,e]),o.context.trigger("statio:jsonResponse",[e.responseJSON,e]),new JResp(o.context,d.data);else if(d.body=e.responseText,h(),"success"==t){if("render"!=o.type)try{o.response=d,o.replace?history.replaceState(JSON.parse(JSON.stringify(o)),o.title,l||o.url):history.pushState(JSON.parse(JSON.stringify(o)),o.title,l||o.url)}catch(e){try{o.replace?history.replaceState(o.data,o.title,l||o.url):history.pushState(o.data,o.title,l||o.url)}catch(e){console.error(e)}}$(document).trigger("statio:global:success",[o.context,d.data,d.body,e]),o.context.trigger("statio:success",[d.data,d.body,e]),"url"!=o.type&&p()}else $(document).trigger("statio:global:errorResponse",[o.context,d.data,d.body,e]),o.context.trigger("statio:errorResponse",[d.data,d.body,e]);$(document).trigger("statio:global:done",[o.context,d.data,d.body,e]),o.context.trigger("statio:done",[d.data,d.body,e])}function h(){if("string"==typeof d.body)try{var e=d.body.split("\n");d.data=JSON.parse(e[0]),d.body=e.length>1?$($.parseHTML(e.splice(1).join(""))):null}catch(e){d.body=$($.parseHTML(d.body))}else"object"==typeof d.body&&null!=d.body&&(d.body instanceof HTMLElement?d.body=$(d.body):d.body instanceof jQuery||(d.data=d.body,d.body=null))}function p(){for(D in d.data)o.globals[D]&&o.globals[D](d.data[D],d.data,d.body);if(d.body){var t=[];d.body.each(function(){var e=$(this).attr("data-xhr");if(e){t.push(this),$("[data-xhr='"+e+"']").replaceWith(this);var a=$(this).attr("data-xhr-fold");a?"."==a.substr(0,1)&&$("[data-xhr='"+e+"']").addClass(a.substr(1)):$("[data-xhr='"+e+"']").addClass("statio-fold")}}),$(document).trigger("statio:global:renderResponse",[$(t),o.context,d.data,d.body]),o.context.trigger("statio:renderResponse",[$(t),d.data,d.body]),d&&d.data&&d.data.page&&(e&&$("body").trigger("statio:"+e+":onunload",[$(t),d.data,d.body]),e=d.data.page.replace(/[-]/g,":"),$("body").trigger("statio:"+e,[$(t),d.data,d.body]))}}return this},new Statio({url:location.href,fake:!0,replace:!0}),window.onpopstate=function(e){var t=a?a.match(/^([^#]*)(\#(.*))?$/):null,i=location.href?location.href.match(/^([^#]*)(\#(.*))?$/):null;if(t[1]==i[1]&&t[3]!=i[3])return a=location.href,!1;new Statio({url:location.href,replace:!0})}}(),function(){"use strict";var e=/\[([^\[]*)\]$/,t=/^(?:([a-z]*):)?(?:\/\/)?(?:([^:@]*)(?::([^@]*))?@)?([0-9a-z-._]+)?(?::([0-9]*))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/i,a=["mailto","bitcoin"],i={get:function(t,a){t=t||"",void 0===a&&(a={}),void 0===a.full&&(a.full=!1),void 0===a.array&&(a.array=!1),!0===a.full&&(t=i.parse(t,{get:!1}).query||"");for(var r={},n=t.split("&"),s=0;s<n.length;s++)if(n[s].length){var o=n[s].indexOf("="),d=n[s],l=!0;if(o>=0&&(d=n[s].substr(0,o),l=n[s].substr(o+1),l=decodeURIComponent(l)),a.array){for(var c,u=[],m=r,f=d;c=f.match(e);)f=f.substr(0,c.index),u.unshift(decodeURIComponent(c[1]));if(f=decodeURIComponent(f),u.some(function(e){if(void 0===m[f]&&(m[f]=[]),!Array.isArray(m[f]))return!0;m=m[f],""===e&&(e=m.length),f=e}))continue;m[f]=l}else r[d=decodeURIComponent(d)]=l}return r},buildget:function(e,t){var a=[];for(var r in e){var n=encodeURIComponent(r);void 0!==t&&(n=t+"["+n+"]");var s=e[r];switch(typeof s){case"boolean":s&&a.push(n);break;case"number":s=s.toString();case"string":a.push(n+"="+encodeURIComponent(s));break;case"object":a.push(i.buildget(s,n))}}return a.join("&")},parse:function(e,a){void 0===a&&(a={});var r=e.match(t)||[],n={url:e,scheme:r[1],user:r[2],pass:r[3],host:r[4],port:r[5]&&+r[5],path:r[6],query:r[7],hash:r[8]};return!1!==a.get&&(n.get=n.query&&i.get(n.query,a.get)),n},build:function(e,t){t=t||{};var r="";if(void 0!==e.scheme&&(r+=e.scheme,r+=a.indexOf(e.scheme)>=0?":":"://"),void 0!==e.user&&(r+=e.user,void 0===e.pass&&(r+="@")),void 0!==e.pass&&(r+=":"+e.pass+"@"),void 0!==e.host&&(r+=e.host),void 0!==e.port&&(r+=":"+e.port),void 0!==e.path&&(r+=e.path),t.useemptyget)void 0!==e.get?r+="?"+i.buildget(e.get):void 0!==e.query&&(r+="?"+e.query);else{var n=e.get&&i.buildget(e.get)||e.query;n&&(r+="?"+n)}return void 0!==e.hash&&(r+="#"+e.hash),r||e.url||""}};"undefined"!=typeof define&&define.amd?define(i):"undefined"!=typeof module?module.exports=i:window.url=i}();const aside=document.querySelector("#aside"),asideBtn=document.querySelector("#aside-btn");function handleAside(e){aside.classList.add("open")}asideBtn&&asideBtn.addEventListener("click",handleAside);const profile=document.querySelector(".profile");if(profile){const e=document.querySelector(".profile-dropdown");function handleProfileClick(t){e.classList.add("open")}profile.addEventListener("click",handleProfileClick),window.addEventListener("click",function(t){t.target.closest(".profile-div")||e.classList.remove("open"),t.target.closest("#aside")||t.target.closest("#aside-btn")||aside.classList.remove("open")})}$(document).ready(function(){$.fn.select2&&$(".select2").select2()}),jQuery,$.fn.hajmad=function(){$(this).each(function(){var e=this,t=$(this).next("label"),a=t.children("img"),i=t.next("button"),r=a.attr("src");$(this).change(function(){if(this.files&&this.files[0]&&"image/"==this.files[0].type.substr(0,6)){var e=new FileReader;e.onload=function(t){a.attr("src",e.result)},e.readAsDataURL(this.files[0])}i.removeClass("d-none")}),i.on("click",function(){e.value=null,a.attr("src",r),$(this).addClass("d-none")})})};var media_xm=window.matchMedia("(max-width: 575.98px)"),media_sm=window.matchMedia("(min-width: 576px) and (max-width: 767.98px)"),media_md=window.matchMedia("(min-width: 768px) and (max-width: 991.98px)"),media_lg=window.matchMedia("(min-width: 992px) and (max-width: 1199.98px)"),media_xl=window.matchMedia("(min-width: 1200px)");function event_media_xm(e){return e.matches?$(document).trigger("media:xm",[e]):$(document).trigger("media:xm:exit",[e])}function event_media_sm(e){return e.matches?$(document).trigger("media:sm",[e]):$(document).trigger("media:sm:exit",[e])}function event_media_md(e){return e.matches?$(document).trigger("media:md",[e]):$(document).trigger("media:md:exit",[e])}function event_media_lg(e){return e.matches?$(document).trigger("media:lg",[e]):$(document).trigger("media:lg:exit",[e])}function event_media_xl(e){return e.matches?$(document).trigger("media:xl",[e]):$(document).trigger("media:xl:exit",[e])}function select2element(){var e={width:"100%",amdLanguageBase:"dist/vendors/select2-4.0.13/dist/js/i18n",language:"fa",minimumInputLength:0,allowClear:$(this).is("[data-allowClear]")||$(this).is(".has-clear"),dir:"rtl",tags:$(this).is(".tag-type"),templateResult:$(this).is("[data-template]")?window["select2result_"+$(this).attr("data-template")].bind(this):void 0,templateSelection:$(this).is("[data-template]")?window["select2result_"+$(this).attr("data-template")].bind(this):void 0,dropdownParent:$("#"+$(this).attr("data-dropdownParent")).length?$("#"+$(this).attr("data-dropdownParent")):void 0,placeholder:{}};if(e.placeholder.text=$(this).attr("data-placeholder")||"...",$(this).is("[data-url]")){$(this).attr("data-title");var t=this;e.ajax={delay:250,url:$(this).attr("data-url"),dataType:"json",quietMillis:250,data:function(e){return{q:e.term||""}},processResults:function(e){e=e.data||e;var a=$(t).attr("data-id")||"id",i=$(t).attr("data-title")||"title",r={results:[]};$(t).is("[data-allowClear]")&&r.results.push({id:"",text:"-",all:null});for(var n=0;n<e.length;n++)r.results.push({id:select2find_data(e[n],a),text:select2find_data(e[n],i),all:e[n]});return r},cache:!1}}$(this).select2(e)}function select2find_data(e,t){function a(t){var a=t.split("."),i=e;for(k in a){if(!i[a[k]])return null;i=i[a[k]]}return i}if(!(t.indexOf(" ")>=0))return a(t);for(var i=t.split(" "),r=0;r<i.length;r++){var n=a(i[r]);if(n)return n}return null}function select2result_users(e,t){if(!e.all&&e.element&&(e.all=JSON.parse($(e.element).attr("data-json")),$(e.element).attr("data-json","")),e.all){var a=$('<div class="d-flex align-items-center fs-12 d-inline-block"><span class="media media-sm media-primary"><img alt="A"></span><div class="pr-1"><div class="font-weight-bold data-name"></div><div class="fs-10 data-id"></div></div></div>'),i=select2find_data(e.all,$(this).attr("data-avatar")||"avatar.tiny.url avatar.small.url"),r=$(this).attr("data-title")?select2find_data(e.all,$(this).attr("data-title")):e.text;return i?$("img",a).attr("src",i):($("img",a).remove(),$(".media",a).html("<span>"+(r?r.substr(0,1):"IR")+"</span>")),$("div.data-name",a).html(r||"بی‌نام"),$("div.data-id",a).html(e.id),a}return e.text}function responsive_menu(){$("#menu").removeClass("d-none").addClass("d-flex"),$("body").addClass("responsive-menu"),$("#btn-menu").find($(".fas")).removeClass("fa-bars").addClass("fa-arrow-right"),$(this).off("click.responsive-menu"),$(this).on("click.close-responsive-menu",function(){$(this).off("click.close-responsive-menu"),$(this).on("click.responsive-menu",responsive_menu),$("#menu").addClass("d-none").removeClass("d-flex"),$("body").removeClass("responsive-menu"),$("#btn-menu").find($(".fas")).removeClass("fa-arrow-right").addClass("fa-bars")})}$(document).ready(function(){event_media_xm(media_xm),media_xm.addListener(event_media_xm),event_media_sm(media_sm),media_sm.addListener(event_media_sm),event_media_md(media_md),media_md.addListener(event_media_md),event_media_lg(media_lg),media_lg.addListener(event_media_lg),event_media_xl(media_xl),media_xl.addListener(event_media_xl)}),$(document).ready(function(){window.i18n&&window.lang&&window.lang[$("html").attr("lang")]&&i18n.translator.add(window.lang[$("html").attr("lang")]),$.ajaxSetup({headers:{"X-CSRF-Token":$('meta[name="csrf-token"]').attr("content")}}),$(document).trigger("statio:global:renderResponse",[$(document)]);var e=$("body[data-page]").attr("data-page");$("body").trigger("statio:"+e.replace(/[-]/g,":"),[$("body")])}),$(document).on("statio:global:renderResponse",function(e,t,a){t.each(function(){$(".dropdown-menu.keep-open",this).on("click",function(e){e.stopPropagation()}),$("[data-Lijax], .lijax",this).each(function(){new Lijax(this)}),$("a",this).not(".direct, [data-direct], [target=_blank], .lijax, [data-lijax]").on("click",function(e){if(/^\#(.*)$/.test($(this).attr("href")))return!0;new Statio({url:$(this).attr("href"),type:$(this).is(".action")?"render":"both",context:$(this)}),e.preventDefault()}),$("form[action]",this).not(".direct, [data-direct], [target=_blank], .lijax").each(function(){new Lijax(this)}).on("jresp",function(e,t){if($(".is-invalid",this).removeClass("is-invalid"),$(".invalid-feedback",this).remove(),t.errors)for(var a in t.errors){if(a.split(".").length>1)var i=a.split("."),r=$("#"+i[0]+"_"+i[1]+':not(.hide-input), [data-alias~="'+i[0]+'[]"], [name="'+i[0]+'[]"]:not(.hide-input)',this).eq(i[1]);else r=$("#"+a+':not(.hide-input), [data-alias~="'+a+'"], [name="'+a+'"]:not(.hide-input)',this);r.addClass("is-invalid"),r.each(function(){$(this).is(".form-control-m")?$('<div class="invalid-feedback">'+t.errors[a][0]+"</div>").insertAfter($(this).next("label")):$('<div class="invalid-feedback">'+t.errors[a][0]+"</div>").insertAfter($(this))})}}),$(".date-picker",this).each(function(){var e=$(this).val(),t=this,a=$(this).attr("dpicker-format")||"YYYY/M/D H:m";if($(this).persianDatepicker({format:a,minDate:$(this).attr("data-picker-minDate")?1e3*$(this).attr("data-picker-minDate"):void 0,maxDate:$(this).attr("data-picker-maxDate")?1e3*$(this).attr("data-picker-maxDate"):void 0,altFieldFormatter:function(e){return $("#"+$(t).attr("data-picker-alt")).trigger("change",[t,e]),e/1e3},altFormat:"unix",altField:"#"+$(this).attr("data-picker-alt"),calendar:{persian:{locale:"fa",showHint:!1,leapYearMode:"algorithmic"}},navigator:{enabled:!0,scroll:{enabled:!0}},toolbox:{calendarSwitch:{enabled:!1},submitButton:{enabled:!0}},timePicker:{enabled:$(this).is("[dpicker-time]"),second:{enabled:!1}},responsive:!0}),e){var i=new persianDate(1e3*e);$(this).val(i.format(a)),$("#"+$(this).attr("data-picker-alt")).val(e)}})})}),$(window).on("hashchange",function(){var e=location.hash;window.tabs&&window.tabs.toggle&&window.tabs.toggle(e)}),$(document).on("media:xm media:sm",function(e,t){$("body:not(.responsive-menu) #btn-menu").on("click.responsive-menu",responsive_menu);var a=$("#menu"),i=$("#desktop"),r=$("#btn-menu");$(document).mouseup(function(e){a.is(e.target)||0!==a.has(e.target).length||i.is(e.target)||0!==i.has(e.target).length||r.is(e.target)||0!==r.has(e.target).length||$("body.responsive-menu #btn-menu").trigger("click.close-responsive-menu")})}),$(document).on("media:md media:lg media:xl",function(e,t){$("body.responsive-menu #btn-menu").trigger("click.close-responsive-menu"),$("#btn-menu").off("click.responsive-menu")}),function(){function e(){$(".custom-file-input",this).on("change",function(){if(!(window.File||window.FileReader||window.FileList||window.Blob))return console.error("FileReader unsupported!"),!1;var e,t=0;$(this).next().html("");for(var a=[];e=this.files.item(t++);)a.push(e.name);$(this).next().html(a.join(" : "))})}$(document).on("statio:global:renderResponse",function(t,a,i){a.each(function(){e.call(this)})}),e.call(document)}();
;$(document).ready(function() {
    $('body', document).on('click' ,function(e){
        if(!$(e.target).parents('#aside-open, #aside').length && !$(e.target).is('#aside-open, #aside') && $('body').hasClass('aside-open')){
            $('body').removeClass('aside-open');
        }
    });
    $('#aside-open').click(function(event) {
        $('body').toggleClass('aside-open');
    });
});

window.davat = {};
$(document).on('statio:global:renderResponse', function (event, base, context) {
    metarget();
    base.each(function () {
        davat.select2($('.select2-select', this));
        davat.cartItem($('[data-cart]', this));
        davat.map(this);
    });
    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
        initMap();
    }
});
function initMap() {
    $('[data-map]').trigger('map_maker');
}

(function(davat){
    var select2 = function(){
        var _self = this;
        var options = {
            width: '100%',
            amdLanguageBase: 'dist/vendors/select2-4.0.13/dist/js/i18n',
            language: 'fa',
            minimumInputLength: 0,
            dir: "rtl",
            templateResult : function(data){
                if(!$(_self).is('[data-url], [data-url-pattern]')){
                    return data.text;
                }
                if(!data.id) return data.text;
                if(!data.html){
                    var html =  $(data.element).parent().data('default-value');
                    if(html){
                        data.html = $('[data-id="'+data.id+'"]', $(html));
                    }else{
                        return data.text;
                    }
                }
                return data.html ? $('[data-selection]', data.html) : data.text;
            },
            templateSelection : function(data){
                if(!data.id) return data.text;
                if(!data.html){
                    var html =  $(data.element).parent().data('default-value');
                    if(html){
                        if(!$('[data-id="'+data.id+'"]', $(html)).length){
                            return data.text;
                        }
                        html = $('[data-id="'+data.id+'"]', $(html))[0].outerHTML;
                    }else{
                        return data.text;
                    }
                }
                html = html || data.html;
                $('[data-xhr]', html).each(function(){
                    var xhr = $(this).attr('data-xhr');
                    new Statio({
                        type: 'render',
                        fake: true,
                        response : $(html).html(),
                        context: $('[data-xhr="'+xhr+'"]').get(0)
                    });
                });
                return html ? $('[data-selection]', html) : data.text;
            },
        };
        if($('[data-for="'+$(this).attr('id')+'"]')[0]){
            $(this).data('default-value', $('[data-for="'+$(this).attr('id')+'"]')[0].outerHTML);
        }
        $('[data-for="'+$(this).attr('id')+'"]').remove();
        if ($(this).is('[data-url]')) {
            var _self = this;
            options.ajax = {
                delay: 250,
                url: $(this).attr('data-url'),
                quietMillis: 250,
                beforeSend: function(xhr){xhr.setRequestHeader('data-xhr-base', $(_self).attr('data-xhr-base') || 'select2');},
                data: function (params) {
                    return {
                        q: params.term || ''
                    };
                },
                processResults: function (data) {
                    data = data.data || data;
                    if(typeof data == 'string'){
                        var split = data.split(/\n/, 1);
                        var html = $('<div>' + data.substr(split[0].length)  + '</div>');
                        data = JSON.parse(split[0]);
                    }
                    var result = { results: [] };
                    for (var i = 0; i < data.length; i++) {
                        result.results.push({
                            id: data[i].id,
                            text: data[i].title,
                            html : html ? $('[data-id="'+ data[i].id +'"]', html).get(0).outerHTML : undefined
                        });
                    }
                    return result;
                },
                cache: false
            };
        }
        $(this).select2(options);
        if($(this).is('[data-relation]')){
            $(this).on('select2:select', function (e) {
                var relation_ids = $(this).attr('data-relation');
                var f_id = $(this).val();
                relation_ids.split(' ').forEach(function (relation_id){
                    var relation = $('#' + relation_id);
                    if (!relation.length) return;
                    var url = unescape(relation.attr('data-url-pattern')).replace('%%', f_id);
                    relation.attr('data-url', url);
                    relation.val(null).trigger("change");
                    relation.select2('destroy');
                    select2.call(relation[0]);
                });
            });
        }
    }
    davat.select2 = function(element){
        element.each(function(){
            select2.call(this);
        });
    }
})(window.davat);

;(function(){
    var delay = undefined;
    function cartItem(){
        var _cart = this;
        $('[data-action]', this).each(function(){
            $(this).on('statio:done', function(e, data, xhr, response){
                if(response.status != 200 || response.status != 201){
                    $(_cart).attr('data-order', $(_cart).attr('data-quantity'));
                    $('[data-quantityLog]', _cart).text($(_cart).attr('data-quantity'));
                }
            });
        });
        $('[data-action]', this).on('click', function(){
            var trigger = this;
            var order = $(_cart).attr('data-order') || $(_cart).attr('data-quantity');
            var product = $(_cart).attr('data-cart') ;
            var quantity = parseInt(order) + ($(this).attr('data-action') == 'minus' ? -1 : 1);
            if(quantity < 1 && $(this).attr('data-action') == 'minus') quantity = 1;
            $(_cart).attr('data-order', quantity);
            $('[data-quantityLog]', _cart).text(quantity);
            if(delay) clearTimeout(delay);
            var _self = this;
            delay = setTimeout(function(){
                new Statio({
                    url: '/cart/items/'+product,
                    type : 'render',
                    context : _self,
                    ajax : {
                        data : {quantity : quantity, current : parseInt($(_cart).attr('data-quantity'))},
                        method : 'post'
                    }
                });
            }, 500);
            return false;
        });
    }
    davat.cartItem = function(base){
        base.each(function(){
            cartItem.call(this);
        });
    }
})(davat);

(function(){
    function map(){
        $(".get-current-location", this).click(function () {
            if (navigator.geolocation) {
                var for_id = $(this).attr('data-for');
                var input_item = $('#' + for_id);
                for_id = input_item.attr('data-for');
                var map_item = $('#' + for_id);
                navigator.geolocation.getCurrentPosition(function (position) {
                    input_item.attr('data-lat', position.coords.latitude);
                    input_item.attr('data-lng', position.coords.longitude);
                    map_item.trigger('map_maker');
                    iziToast.info({
                        message: ":)"
                    })
                });
            }
        });
        $("[data-map]", this).on('map_maker', function () {
            var map_type = $(this).attr('data-type');
            if ($(this).attr('data-map') == 'span') {
                var center = $(this).attr('data-center');
                center = center.split(',');
                var mapCor = { lat: parseFloat(center[0]), lng: parseFloat(center[1]) };
                var location_lists = $('span', this);
            }
            else {
                var mapCor = { lat: parseFloat($('#location').attr('data-lat')), lng: parseFloat($('#location').attr('data-lng')) }
            }

            var icon = {
                url: "/images/emall-location-50.png",
                size: new google.maps.Size(50, 50)
            }
            var map = new google.maps.Map(this, {
                center: mapCor,
                zoom: parseInt($(this).attr('data-zoom')) || 13,
                disableDefaultUI: true
            })

            if ($(this).attr('data-map') == 'span') {
                heatmapData = [];
                location_lists.each(function () {
                    var loc = $(this).attr('data-location');
                    loc = loc.split(',');
                    if (map_type == 'heatmap') {
                        heatmapData.push({
                            location: new google.maps.LatLng(parseFloat(loc[0]), parseFloat(loc[1])),
                        });
                        return;
                    }
                    var xicon = icon;
                    if ($(this).attr('data-icon')) {
                        var sicon = $(this).attr('data-sicon').split(',');
                        xicon = {
                            url: $(this).attr('data-icon'),
                            size: new google.maps.Size(parseInt(sicon[0]), parseInt(sicon[1]))
                        }
                    }
                    var marker = new google.maps.Marker({
                        position: { lat: parseFloat(loc[0]), lng: parseFloat(loc[1]) },
                        map: map,
                    });
                    var infoWindow = new google.maps.InfoWindow({
                        content: $(this).html()
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        infoWindow.open(map, marker);
                    });
                });
                if (map_type == 'heatmap') {
                    var heatmap = new google.maps.visualization.HeatmapLayer({
                        data: heatmapData,
                        radius: 20
                    });
                    heatmap.setMap(map);
                }
            }
            else {
                var markerCor = { lat: parseFloat($('#location').attr('data-lat')), lng: parseFloat($('#location').attr('data-lng')) };
                var marker = new google.maps.Marker({
                    position: markerCor,
                    map: map,
                    draggable: true,
                });
                marker.addListener('dragend', function () {
                    $('#location').val(marker.getPosition().lat() + "," + marker.getPosition().lng());
                });
                $('#location').val(marker.getPosition().lat() + "," + marker.getPosition().lng());
            }
        });
    }
    davat.map = function(base){
        map.call(base);
    }
})(davat);

/*!
 * Select2 4.1.0-rc.0
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;(function (factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
      // Node/CommonJS
      module.exports = function (root, jQuery) {
        if (jQuery === undefined) {
          // require('jQuery') returns a factory that requires window to
          // build a jQuery instance, we normalize how we use modules
          // that require this pattern but the window provided is a noop
          // if it's defined (how jquery works)
          if (typeof window !== 'undefined') {
            jQuery = require('jquery');
          }
          else {
            jQuery = require('jquery')(root);
          }
        }
        factory(jQuery);
        return jQuery;
      };
    } else {
      // Browser globals
      factory(jQuery);
    }
  } (function (jQuery) {
    // This is needed so we can catch the AMD loader configuration and use it
    // The inner file should be wrapped (by `banner.start.js`) in a function that
    // returns the AMD loader references.
    var S2 =(function () {
    // Restore the Select2 AMD loader so it can be used
    // Needed mostly in the language files, where the loader is not inserted
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
      var S2 = jQuery.fn.select2.amd;
    }
  var S2;(function () { if (!S2 || !S2.requirejs) {
  if (!S2) { S2 = {}; } else { require = S2; }
  /**
   * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
   * Released under MIT license, http://github.com/requirejs/almond/LICENSE
   */
  //Going sloppy to avoid 'use strict' string cost, but strict practices should
  //be followed.
  /*global setTimeout: false */

  var requirejs, require, define;
  (function (undef) {
      var main, req, makeMap, handlers,
          defined = {},
          waiting = {},
          config = {},
          defining = {},
          hasOwn = Object.prototype.hasOwnProperty,
          aps = [].slice,
          jsSuffixRegExp = /\.js$/;

      function hasProp(obj, prop) {
          return hasOwn.call(obj, prop);
      }

      /**
       * Given a relative module name, like ./something, normalize it to
       * a real name that can be mapped to a path.
       * @param {String} name the relative name
       * @param {String} baseName a real name that the name arg is relative
       * to.
       * @returns {String} normalized name
       */
      function normalize(name, baseName) {
          var nameParts, nameSegment, mapValue, foundMap, lastIndex,
              foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
              baseParts = baseName && baseName.split("/"),
              map = config.map,
              starMap = (map && map['*']) || {};

          //Adjust any relative paths.
          if (name) {
              name = name.split('/');
              lastIndex = name.length - 1;

              // If wanting node ID compatibility, strip .js from end
              // of IDs. Have to do this here, and not in nameToUrl
              // because node allows either .js or non .js to map
              // to same file.
              if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                  name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
              }

              // Starts with a '.' so need the baseName
              if (name[0].charAt(0) === '.' && baseParts) {
                  //Convert baseName to array, and lop off the last part,
                  //so that . matches that 'directory' and not name of the baseName's
                  //module. For instance, baseName of 'one/two/three', maps to
                  //'one/two/three.js', but we want the directory, 'one/two' for
                  //this normalization.
                  normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                  name = normalizedBaseParts.concat(name);
              }

              //start trimDots
              for (i = 0; i < name.length; i++) {
                  part = name[i];
                  if (part === '.') {
                      name.splice(i, 1);
                      i -= 1;
                  } else if (part === '..') {
                      // If at the start, or previous value is still ..,
                      // keep them so that when converted to a path it may
                      // still work when converted to a path, even though
                      // as an ID it is less than ideal. In larger point
                      // releases, may be better to just kick out an error.
                      if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                          continue;
                      } else if (i > 0) {
                          name.splice(i - 1, 2);
                          i -= 2;
                      }
                  }
              }
              //end trimDots

              name = name.join('/');
          }

          //Apply map config if available.
          if ((baseParts || starMap) && map) {
              nameParts = name.split('/');

              for (i = nameParts.length; i > 0; i -= 1) {
                  nameSegment = nameParts.slice(0, i).join("/");

                  if (baseParts) {
                      //Find the longest baseName segment match in the config.
                      //So, do joins on the biggest to smallest lengths of baseParts.
                      for (j = baseParts.length; j > 0; j -= 1) {
                          mapValue = map[baseParts.slice(0, j).join('/')];

                          //baseName segment has  config, find if it has one for
                          //this name.
                          if (mapValue) {
                              mapValue = mapValue[nameSegment];
                              if (mapValue) {
                                  //Match, update name to the new value.
                                  foundMap = mapValue;
                                  foundI = i;
                                  break;
                              }
                          }
                      }
                  }

                  if (foundMap) {
                      break;
                  }

                  //Check for a star map match, but just hold on to it,
                  //if there is a shorter segment match later in a matching
                  //config, then favor over this star map.
                  if (!foundStarMap && starMap && starMap[nameSegment]) {
                      foundStarMap = starMap[nameSegment];
                      starI = i;
                  }
              }

              if (!foundMap && foundStarMap) {
                  foundMap = foundStarMap;
                  foundI = starI;
              }

              if (foundMap) {
                  nameParts.splice(0, foundI, foundMap);
                  name = nameParts.join('/');
              }
          }

          return name;
      }

      function makeRequire(relName, forceSync) {
          return function () {
              //A version of a require function that passes a moduleName
              //value for items that may need to
              //look up paths relative to the moduleName
              var args = aps.call(arguments, 0);

              //If first arg is not require('string'), and there is only
              //one arg, it is the array form without a callback. Insert
              //a null so that the following concat is correct.
              if (typeof args[0] !== 'string' && args.length === 1) {
                  args.push(null);
              }
              return req.apply(undef, args.concat([relName, forceSync]));
          };
      }

      function makeNormalize(relName) {
          return function (name) {
              return normalize(name, relName);
          };
      }

      function makeLoad(depName) {
          return function (value) {
              defined[depName] = value;
          };
      }

      function callDep(name) {
          if (hasProp(waiting, name)) {
              var args = waiting[name];
              delete waiting[name];
              defining[name] = true;
              main.apply(undef, args);
          }

          if (!hasProp(defined, name) && !hasProp(defining, name)) {
              throw new Error('No ' + name);
          }
          return defined[name];
      }

      //Turns a plugin!resource to [plugin, resource]
      //with the plugin being undefined if the name
      //did not have a plugin prefix.
      function splitPrefix(name) {
          var prefix,
              index = name ? name.indexOf('!') : -1;
          if (index > -1) {
              prefix = name.substring(0, index);
              name = name.substring(index + 1, name.length);
          }
          return [prefix, name];
      }

      //Creates a parts array for a relName where first part is plugin ID,
      //second part is resource ID. Assumes relName has already been normalized.
      function makeRelParts(relName) {
          return relName ? splitPrefix(relName) : [];
      }

      /**
       * Makes a name map, normalizing the name, and using a plugin
       * for normalization if necessary. Grabs a ref to plugin
       * too, as an optimization.
       */
      makeMap = function (name, relParts) {
          var plugin,
              parts = splitPrefix(name),
              prefix = parts[0],
              relResourceName = relParts[1];

          name = parts[1];

          if (prefix) {
              prefix = normalize(prefix, relResourceName);
              plugin = callDep(prefix);
          }

          //Normalize according
          if (prefix) {
              if (plugin && plugin.normalize) {
                  name = plugin.normalize(name, makeNormalize(relResourceName));
              } else {
                  name = normalize(name, relResourceName);
              }
          } else {
              name = normalize(name, relResourceName);
              parts = splitPrefix(name);
              prefix = parts[0];
              name = parts[1];
              if (prefix) {
                  plugin = callDep(prefix);
              }
          }

          //Using ridiculous property names for space reasons
          return {
              f: prefix ? prefix + '!' + name : name, //fullName
              n: name,
              pr: prefix,
              p: plugin
          };
      };

      function makeConfig(name) {
          return function () {
              return (config && config.config && config.config[name]) || {};
          };
      }

      handlers = {
          require: function (name) {
              return makeRequire(name);
          },
          exports: function (name) {
              var e = defined[name];
              if (typeof e !== 'undefined') {
                  return e;
              } else {
                  return (defined[name] = {});
              }
          },
          module: function (name) {
              return {
                  id: name,
                  uri: '',
                  exports: defined[name],
                  config: makeConfig(name)
              };
          }
      };

      main = function (name, deps, callback, relName) {
          var cjsModule, depName, ret, map, i, relParts,
              args = [],
              callbackType = typeof callback,
              usingExports;

          //Use name if no relName
          relName = relName || name;
          relParts = makeRelParts(relName);

          //Call the callback to define the module, if necessary.
          if (callbackType === 'undefined' || callbackType === 'function') {
              //Pull out the defined dependencies and pass the ordered
              //values to the callback.
              //Default to [require, exports, module] if no deps
              deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
              for (i = 0; i < deps.length; i += 1) {
                  map = makeMap(deps[i], relParts);
                  depName = map.f;

                  //Fast path CommonJS standard dependencies.
                  if (depName === "require") {
                      args[i] = handlers.require(name);
                  } else if (depName === "exports") {
                      //CommonJS module spec 1.1
                      args[i] = handlers.exports(name);
                      usingExports = true;
                  } else if (depName === "module") {
                      //CommonJS module spec 1.1
                      cjsModule = args[i] = handlers.module(name);
                  } else if (hasProp(defined, depName) ||
                             hasProp(waiting, depName) ||
                             hasProp(defining, depName)) {
                      args[i] = callDep(depName);
                  } else if (map.p) {
                      map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                      args[i] = defined[depName];
                  } else {
                      throw new Error(name + ' missing ' + depName);
                  }
              }

              ret = callback ? callback.apply(defined[name], args) : undefined;

              if (name) {
                  //If setting exports via "module" is in play,
                  //favor that over return value and exports. After that,
                  //favor a non-undefined return value over exports use.
                  if (cjsModule && cjsModule.exports !== undef &&
                          cjsModule.exports !== defined[name]) {
                      defined[name] = cjsModule.exports;
                  } else if (ret !== undef || !usingExports) {
                      //Use the return value from the function.
                      defined[name] = ret;
                  }
              }
          } else if (name) {
              //May just be an object definition for the module. Only
              //worry about defining if have a module name.
              defined[name] = callback;
          }
      };

      requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
          if (typeof deps === "string") {
              if (handlers[deps]) {
                  //callback in this case is really relName
                  return handlers[deps](callback);
              }
              //Just return the module wanted. In this scenario, the
              //deps arg is the module name, and second arg (if passed)
              //is just the relName.
              //Normalize module name, if it contains . or ..
              return callDep(makeMap(deps, makeRelParts(callback)).f);
          } else if (!deps.splice) {
              //deps is a config object, not an array.
              config = deps;
              if (config.deps) {
                  req(config.deps, config.callback);
              }
              if (!callback) {
                  return;
              }

              if (callback.splice) {
                  //callback is an array, which means it is a dependency list.
                  //Adjust args if there are dependencies
                  deps = callback;
                  callback = relName;
                  relName = null;
              } else {
                  deps = undef;
              }
          }

          //Support require(['a'])
          callback = callback || function () {};

          //If relName is a function, it is an errback handler,
          //so remove it.
          if (typeof relName === 'function') {
              relName = forceSync;
              forceSync = alt;
          }

          //Simulate async callback;
          if (forceSync) {
              main(undef, deps, callback, relName);
          } else {
              //Using a non-zero value because of concern for what old browsers
              //do, and latest browsers "upgrade" to 4 if lower value is used:
              //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
              //If want a value immediately, use require('id') instead -- something
              //that works in almond on the global level, but not guaranteed and
              //unlikely to work in other AMD implementations.
              setTimeout(function () {
                  main(undef, deps, callback, relName);
              }, 4);
          }

          return req;
      };

      /**
       * Just drops the config on the floor, but returns req in case
       * the config return value is used.
       */
      req.config = function (cfg) {
          return req(cfg);
      };

      /**
       * Expose module registry for debugging and tooling
       */
      requirejs._defined = defined;

      define = function (name, deps, callback) {
          if (typeof name !== 'string') {
              throw new Error('See almond README: incorrect module build, no module name');
          }

          //This module may not have dependencies
          if (!deps.splice) {
              //deps is not an array, so probably means
              //an object literal or factory function for
              //the value. Adjust args.
              callback = deps;
              deps = [];
          }

          if (!hasProp(defined, name) && !hasProp(waiting, name)) {
              waiting[name] = [name, deps, callback];
          }
      };

      define.amd = {
          jQuery: true
      };
  }());

  S2.requirejs = requirejs;S2.require = require;S2.define = define;
  }
  }());
  S2.define("almond", function(){});

  /* global jQuery:false, $:false */
  S2.define('jquery',[],function () {
    var _$ = jQuery || $;

    if (_$ == null && console && console.error) {
      console.error(
        'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
        'found. Make sure that you are including jQuery before Select2 on your ' +
        'web page.'
      );
    }

    return _$;
  });

  S2.define('select2/utils',[
    'jquery'
  ], function ($) {
    var Utils = {};

    Utils.Extend = function (ChildClass, SuperClass) {
      var __hasProp = {}.hasOwnProperty;

      function BaseConstructor () {
        this.constructor = ChildClass;
      }

      for (var key in SuperClass) {
        if (__hasProp.call(SuperClass, key)) {
          ChildClass[key] = SuperClass[key];
        }
      }

      BaseConstructor.prototype = SuperClass.prototype;
      ChildClass.prototype = new BaseConstructor();
      ChildClass.__super__ = SuperClass.prototype;

      return ChildClass;
    };

    function getMethods (theClass) {
      var proto = theClass.prototype;

      var methods = [];

      for (var methodName in proto) {
        var m = proto[methodName];

        if (typeof m !== 'function') {
          continue;
        }

        if (methodName === 'constructor') {
          continue;
        }

        methods.push(methodName);
      }

      return methods;
    }

    Utils.Decorate = function (SuperClass, DecoratorClass) {
      var decoratedMethods = getMethods(DecoratorClass);
      var superMethods = getMethods(SuperClass);

      function DecoratedClass () {
        var unshift = Array.prototype.unshift;

        var argCount = DecoratorClass.prototype.constructor.length;

        var calledConstructor = SuperClass.prototype.constructor;

        if (argCount > 0) {
          unshift.call(arguments, SuperClass.prototype.constructor);

          calledConstructor = DecoratorClass.prototype.constructor;
        }

        calledConstructor.apply(this, arguments);
      }

      DecoratorClass.displayName = SuperClass.displayName;

      function ctr () {
        this.constructor = DecoratedClass;
      }

      DecoratedClass.prototype = new ctr();

      for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
      }

      var calledMethod = function (methodName) {
        // Stub out the original method if it's not decorating an actual method
        var originalMethod = function () {};

        if (methodName in DecoratedClass.prototype) {
          originalMethod = DecoratedClass.prototype[methodName];
        }

        var decoratedMethod = DecoratorClass.prototype[methodName];

        return function () {
          var unshift = Array.prototype.unshift;

          unshift.call(arguments, originalMethod);

          return decoratedMethod.apply(this, arguments);
        };
      };

      for (var d = 0; d < decoratedMethods.length; d++) {
        var decoratedMethod = decoratedMethods[d];

        DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
      }

      return DecoratedClass;
    };

    var Observable = function () {
      this.listeners = {};
    };

    Observable.prototype.on = function (event, callback) {
      this.listeners = this.listeners || {};

      if (event in this.listeners) {
        this.listeners[event].push(callback);
      } else {
        this.listeners[event] = [callback];
      }
    };

    Observable.prototype.trigger = function (event) {
      var slice = Array.prototype.slice;
      var params = slice.call(arguments, 1);

      this.listeners = this.listeners || {};

      // Params should always come in as an array
      if (params == null) {
        params = [];
      }

      // If there are no arguments to the event, use a temporary object
      if (params.length === 0) {
        params.push({});
      }

      // Set the `_type` of the first object to the event
      params[0]._type = event;

      if (event in this.listeners) {
        this.invoke(this.listeners[event], slice.call(arguments, 1));
      }

      if ('*' in this.listeners) {
        this.invoke(this.listeners['*'], arguments);
      }
    };

    Observable.prototype.invoke = function (listeners, params) {
      for (var i = 0, len = listeners.length; i < len; i++) {
        listeners[i].apply(this, params);
      }
    };

    Utils.Observable = Observable;

    Utils.generateChars = function (length) {
      var chars = '';

      for (var i = 0; i < length; i++) {
        var randomChar = Math.floor(Math.random() * 36);
        chars += randomChar.toString(36);
      }

      return chars;
    };

    Utils.bind = function (func, context) {
      return function () {
        func.apply(context, arguments);
      };
    };

    Utils._convertData = function (data) {
      for (var originalKey in data) {
        var keys = originalKey.split('-');

        var dataLevel = data;

        if (keys.length === 1) {
          continue;
        }

        for (var k = 0; k < keys.length; k++) {
          var key = keys[k];

          // Lowercase the first letter
          // By default, dash-separated becomes camelCase
          key = key.substring(0, 1).toLowerCase() + key.substring(1);

          if (!(key in dataLevel)) {
            dataLevel[key] = {};
          }

          if (k == keys.length - 1) {
            dataLevel[key] = data[originalKey];
          }

          dataLevel = dataLevel[key];
        }

        delete data[originalKey];
      }

      return data;
    };

    Utils.hasScroll = function (index, el) {
      // Adapted from the function created by @ShadowScripter
      // and adapted by @BillBarry on the Stack Exchange Code Review website.
      // The original code can be found at
      // http://codereview.stackexchange.com/q/13338
      // and was designed to be used with the Sizzle selector engine.

      var $el = $(el);
      var overflowX = el.style.overflowX;
      var overflowY = el.style.overflowY;

      //Check both x and y declarations
      if (overflowX === overflowY &&
          (overflowY === 'hidden' || overflowY === 'visible')) {
        return false;
      }

      if (overflowX === 'scroll' || overflowY === 'scroll') {
        return true;
      }

      return ($el.innerHeight() < el.scrollHeight ||
        $el.innerWidth() < el.scrollWidth);
    };

    Utils.escapeMarkup = function (markup) {
      var replaceMap = {
        '\\': '&#92;',
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;',
        '/': '&#47;'
      };

      // Do not try to escape the markup if it's not a string
      if (typeof markup !== 'string') {
        return markup;
      }

      return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
        return replaceMap[match];
      });
    };

    // Cache objects in Utils.__cache instead of $.data (see #4346)
    Utils.__cache = {};

    var id = 0;
    Utils.GetUniqueElementId = function (element) {
      // Get a unique element Id. If element has no id,
      // creates a new unique number, stores it in the id
      // attribute and returns the new id with a prefix.
      // If an id already exists, it simply returns it with a prefix.

      var select2Id = element.getAttribute('data-select2-id');

      if (select2Id != null) {
        return select2Id;
      }

      // If element has id, use it.
      if (element.id) {
        select2Id = 'select2-data-' + element.id;
      } else {
        select2Id = 'select2-data-' + (++id).toString() +
          '-' + Utils.generateChars(4);
      }

      element.setAttribute('data-select2-id', select2Id);

      return select2Id;
    };

    Utils.StoreData = function (element, name, value) {
      // Stores an item in the cache for a specified element.
      // name is the cache key.
      var id = Utils.GetUniqueElementId(element);
      if (!Utils.__cache[id]) {
        Utils.__cache[id] = {};
      }

      Utils.__cache[id][name] = value;
    };

    Utils.GetData = function (element, name) {
      // Retrieves a value from the cache by its key (name)
      // name is optional. If no name specified, return
      // all cache items for the specified element.
      // and for a specified element.
      var id = Utils.GetUniqueElementId(element);
      if (name) {
        if (Utils.__cache[id]) {
          if (Utils.__cache[id][name] != null) {
            return Utils.__cache[id][name];
          }
          return $(element).data(name); // Fallback to HTML5 data attribs.
        }
        return $(element).data(name); // Fallback to HTML5 data attribs.
      } else {
        return Utils.__cache[id];
      }
    };

    Utils.RemoveData = function (element) {
      // Removes all cached items for a specified element.
      var id = Utils.GetUniqueElementId(element);
      if (Utils.__cache[id] != null) {
        delete Utils.__cache[id];
      }

      element.removeAttribute('data-select2-id');
    };

    Utils.copyNonInternalCssClasses = function (dest, src) {
      var classes;

      var destinationClasses = dest.getAttribute('class').trim().split(/\s+/);

      destinationClasses = destinationClasses.filter(function (clazz) {
        // Save all Select2 classes
        return clazz.indexOf('select2-') === 0;
      });

      var sourceClasses = src.getAttribute('class').trim().split(/\s+/);

      sourceClasses = sourceClasses.filter(function (clazz) {
        // Only copy non-Select2 classes
        return clazz.indexOf('select2-') !== 0;
      });

      var replacements = destinationClasses.concat(sourceClasses);

      dest.setAttribute('class', replacements.join(' '));
    };

    return Utils;
  });

  S2.define('select2/results',[
    'jquery',
    './utils'
  ], function ($, Utils) {
    function Results ($element, options, dataAdapter) {
      this.$element = $element;
      this.data = dataAdapter;
      this.options = options;

      Results.__super__.constructor.call(this);
    }

    Utils.Extend(Results, Utils.Observable);

    Results.prototype.render = function () {
      var $results = $(
        '<ul class="select2-results__options" role="listbox"></ul>'
      );

      if (this.options.get('multiple')) {
        $results.attr('aria-multiselectable', 'true');
      }

      this.$results = $results;

      return $results;
    };

    Results.prototype.clear = function () {
      this.$results.empty();
    };

    Results.prototype.displayMessage = function (params) {
      var escapeMarkup = this.options.get('escapeMarkup');

      this.clear();
      this.hideLoading();

      var $message = $(
        '<li role="alert" aria-live="assertive"' +
        ' class="select2-results__option"></li>'
      );

      var message = this.options.get('translations').get(params.message);

      $message.append(
        escapeMarkup(
          message(params.args)
        )
      );

      $message[0].className += ' select2-results__message';

      this.$results.append($message);
    };

    Results.prototype.hideMessages = function () {
      this.$results.find('.select2-results__message').remove();
    };

    Results.prototype.append = function (data) {
      this.hideLoading();

      var $options = [];

      if (data.results == null || data.results.length === 0) {
        if (this.$results.children().length === 0) {
          this.trigger('results:message', {
            message: 'noResults'
          });
        }

        return;
      }

      data.results = this.sort(data.results);

      for (var d = 0; d < data.results.length; d++) {
        var item = data.results[d];

        var $option = this.option(item);

        $options.push($option);
      }

      this.$results.append($options);
    };

    Results.prototype.position = function ($results, $dropdown) {
      var $resultsContainer = $dropdown.find('.select2-results');
      $resultsContainer.append($results);
    };

    Results.prototype.sort = function (data) {
      var sorter = this.options.get('sorter');

      return sorter(data);
    };

    Results.prototype.highlightFirstItem = function () {
      var $options = this.$results
        .find('.select2-results__option--selectable');

      var $selected = $options.filter('.select2-results__option--selected');

      // Check if there are any selected options
      if ($selected.length > 0) {
        // If there are selected options, highlight the first
        $selected.first().trigger('mouseenter');
      } else {
        // If there are no selected options, highlight the first option
        // in the dropdown
        $options.first().trigger('mouseenter');
      }

      this.ensureHighlightVisible();
    };

    Results.prototype.setClasses = function () {
      var self = this;

      this.data.current(function (selected) {
        var selectedIds = selected.map(function (s) {
          return s.id.toString();
        });

        var $options = self.$results
          .find('.select2-results__option--selectable');

        $options.each(function () {
          var $option = $(this);

          var item = Utils.GetData(this, 'data');

          // id needs to be converted to a string when comparing
          var id = '' + item.id;

          if ((item.element != null && item.element.selected) ||
              (item.element == null && selectedIds.indexOf(id) > -1)) {
            this.classList.add('select2-results__option--selected');
            $option.attr('aria-selected', 'true');
          } else {
            this.classList.remove('select2-results__option--selected');
            $option.attr('aria-selected', 'false');
          }
        });

      });
    };

    Results.prototype.showLoading = function (params) {
      this.hideLoading();

      var loadingMore = this.options.get('translations').get('searching');

      var loading = {
        disabled: true,
        loading: true,
        text: loadingMore(params)
      };
      var $loading = this.option(loading);
      $loading.className += ' loading-results';

      this.$results.prepend($loading);
    };

    Results.prototype.hideLoading = function () {
      this.$results.find('.loading-results').remove();
    };

    Results.prototype.option = function (data) {
      var option = document.createElement('li');
      option.classList.add('select2-results__option');
      option.classList.add('select2-results__option--selectable');

      var attrs = {
        'role': 'option'
      };

      var matches = window.Element.prototype.matches ||
        window.Element.prototype.msMatchesSelector ||
        window.Element.prototype.webkitMatchesSelector;

      if ((data.element != null && matches.call(data.element, ':disabled')) ||
          (data.element == null && data.disabled)) {
        attrs['aria-disabled'] = 'true';

        option.classList.remove('select2-results__option--selectable');
        option.classList.add('select2-results__option--disabled');
      }

      if (data.id == null) {
        option.classList.remove('select2-results__option--selectable');
      }

      if (data._resultId != null) {
        option.id = data._resultId;
      }

      if (data.title) {
        option.title = data.title;
      }

      if (data.children) {
        attrs.role = 'group';
        attrs['aria-label'] = data.text;

        option.classList.remove('select2-results__option--selectable');
        option.classList.add('select2-results__option--group');
      }

      for (var attr in attrs) {
        var val = attrs[attr];

        option.setAttribute(attr, val);
      }

      if (data.children) {
        var $option = $(option);

        var label = document.createElement('strong');
        label.className = 'select2-results__group';

        this.template(data, label);

        var $children = [];

        for (var c = 0; c < data.children.length; c++) {
          var child = data.children[c];

          var $child = this.option(child);

          $children.push($child);
        }

        var $childrenContainer = $('<ul></ul>', {
          'class': 'select2-results__options select2-results__options--nested',
          'role': 'none'
        });

        $childrenContainer.append($children);

        $option.append(label);
        $option.append($childrenContainer);
      } else {
        this.template(data, option);
      }

      Utils.StoreData(option, 'data', data);

      return option;
    };

    Results.prototype.bind = function (container, $container) {
      var self = this;

      var id = container.id + '-results';

      this.$results.attr('id', id);

      container.on('results:all', function (params) {
        self.clear();
        self.append(params.data);

        if (container.isOpen()) {
          self.setClasses();
          self.highlightFirstItem();
        }
      });

      container.on('results:append', function (params) {
        self.append(params.data);

        if (container.isOpen()) {
          self.setClasses();
        }
      });

      container.on('query', function (params) {
        self.hideMessages();
        self.showLoading(params);
      });

      container.on('select', function () {
        if (!container.isOpen()) {
          return;
        }

        self.setClasses();

        if (self.options.get('scrollAfterSelect')) {
          self.highlightFirstItem();
        }
      });

      container.on('unselect', function () {
        if (!container.isOpen()) {
          return;
        }

        self.setClasses();

        if (self.options.get('scrollAfterSelect')) {
          self.highlightFirstItem();
        }
      });

      container.on('open', function () {
        // When the dropdown is open, aria-expended="true"
        self.$results.attr('aria-expanded', 'true');
        self.$results.attr('aria-hidden', 'false');

        self.setClasses();
        self.ensureHighlightVisible();
      });

      container.on('close', function () {
        // When the dropdown is closed, aria-expended="false"
        self.$results.attr('aria-expanded', 'false');
        self.$results.attr('aria-hidden', 'true');
        self.$results.removeAttr('aria-activedescendant');
      });

      container.on('results:toggle', function () {
        var $highlighted = self.getHighlightedResults();

        if ($highlighted.length === 0) {
          return;
        }

        $highlighted.trigger('mouseup');
      });

      container.on('results:select', function () {
        var $highlighted = self.getHighlightedResults();

        if ($highlighted.length === 0) {
          return;
        }

        var data = Utils.GetData($highlighted[0], 'data');

        if ($highlighted.hasClass('select2-results__option--selected')) {
          self.trigger('close', {});
        } else {
          self.trigger('select', {
            data: data
          });
        }
      });

      container.on('results:previous', function () {
        var $highlighted = self.getHighlightedResults();

        var $options = self.$results.find('.select2-results__option--selectable');

        var currentIndex = $options.index($highlighted);

        // If we are already at the top, don't move further
        // If no options, currentIndex will be -1
        if (currentIndex <= 0) {
          return;
        }

        var nextIndex = currentIndex - 1;

        // If none are highlighted, highlight the first
        if ($highlighted.length === 0) {
          nextIndex = 0;
        }

        var $next = $options.eq(nextIndex);

        $next.trigger('mouseenter');

        var currentOffset = self.$results.offset().top;
        var nextTop = $next.offset().top;
        var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

        if (nextIndex === 0) {
          self.$results.scrollTop(0);
        } else if (nextTop - currentOffset < 0) {
          self.$results.scrollTop(nextOffset);
        }
      });

      container.on('results:next', function () {
        var $highlighted = self.getHighlightedResults();

        var $options = self.$results.find('.select2-results__option--selectable');

        var currentIndex = $options.index($highlighted);

        var nextIndex = currentIndex + 1;

        // If we are at the last option, stay there
        if (nextIndex >= $options.length) {
          return;
        }

        var $next = $options.eq(nextIndex);

        $next.trigger('mouseenter');

        var currentOffset = self.$results.offset().top +
          self.$results.outerHeight(false);
        var nextBottom = $next.offset().top + $next.outerHeight(false);
        var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

        if (nextIndex === 0) {
          self.$results.scrollTop(0);
        } else if (nextBottom > currentOffset) {
          self.$results.scrollTop(nextOffset);
        }
      });

      container.on('results:focus', function (params) {
        params.element[0].classList.add('select2-results__option--highlighted');
        params.element[0].setAttribute('aria-selected', 'true');
      });

      container.on('results:message', function (params) {
        self.displayMessage(params);
      });

      if ($.fn.mousewheel) {
        this.$results.on('mousewheel', function (e) {
          var top = self.$results.scrollTop();

          var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

          var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
          var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

          if (isAtTop) {
            self.$results.scrollTop(0);

            e.preventDefault();
            e.stopPropagation();
          } else if (isAtBottom) {
            self.$results.scrollTop(
              self.$results.get(0).scrollHeight - self.$results.height()
            );

            e.preventDefault();
            e.stopPropagation();
          }
        });
      }

      this.$results.on('mouseup', '.select2-results__option--selectable',
        function (evt) {
        var $this = $(this);

        var data = Utils.GetData(this, 'data');

        if ($this.hasClass('select2-results__option--selected')) {
          if (self.options.get('multiple')) {
            self.trigger('unselect', {
              originalEvent: evt,
              data: data
            });
          } else {
            self.trigger('close', {});
          }

          return;
        }

        self.trigger('select', {
          originalEvent: evt,
          data: data
        });
      });

      this.$results.on('mouseenter', '.select2-results__option--selectable',
        function (evt) {
        var data = Utils.GetData(this, 'data');

        self.getHighlightedResults()
            .removeClass('select2-results__option--highlighted')
            .attr('aria-selected', 'false');

        self.trigger('results:focus', {
          data: data,
          element: $(this)
        });
      });
    };

    Results.prototype.getHighlightedResults = function () {
      var $highlighted = this.$results
      .find('.select2-results__option--highlighted');

      return $highlighted;
    };

    Results.prototype.destroy = function () {
      this.$results.remove();
    };

    Results.prototype.ensureHighlightVisible = function () {
      var $highlighted = this.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var $options = this.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      var currentOffset = this.$results.offset().top;
      var nextTop = $highlighted.offset().top;
      var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

      var offsetDelta = nextTop - currentOffset;
      nextOffset -= $highlighted.outerHeight(false) * 2;

      if (currentIndex <= 2) {
        this.$results.scrollTop(0);
      } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
        this.$results.scrollTop(nextOffset);
      }
    };

    Results.prototype.template = function (result, container) {
      var template = this.options.get('templateResult');
      var escapeMarkup = this.options.get('escapeMarkup');

      var content = template(result, container);

      if (content == null) {
        container.style.display = 'none';
      } else if (typeof content === 'string') {
        container.innerHTML = escapeMarkup(content);
      } else {
        $(container).append(content);
      }
    };

    return Results;
  });

  S2.define('select2/keys',[

  ], function () {
    var KEYS = {
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      DELETE: 46
    };

    return KEYS;
  });

  S2.define('select2/selection/base',[
    'jquery',
    '../utils',
    '../keys'
  ], function ($, Utils, KEYS) {
    function BaseSelection ($element, options) {
      this.$element = $element;
      this.options = options;

      BaseSelection.__super__.constructor.call(this);
    }

    Utils.Extend(BaseSelection, Utils.Observable);

    BaseSelection.prototype.render = function () {
      var $selection = $(
        '<span class="select2-selection" role="combobox" ' +
        ' aria-haspopup="true" aria-expanded="false">' +
        '</span>'
      );

      this._tabindex = 0;

      if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
        this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
      } else if (this.$element.attr('tabindex') != null) {
        this._tabindex = this.$element.attr('tabindex');
      }

      $selection.attr('title', this.$element.attr('title'));
      $selection.attr('tabindex', this._tabindex);
      $selection.attr('aria-disabled', 'false');

      this.$selection = $selection;

      return $selection;
    };

    BaseSelection.prototype.bind = function (container, $container) {
      var self = this;

      var resultsId = container.id + '-results';

      this.container = container;

      this.$selection.on('focus', function (evt) {
        self.trigger('focus', evt);
      });

      this.$selection.on('blur', function (evt) {
        self._handleBlur(evt);
      });

      this.$selection.on('keydown', function (evt) {
        self.trigger('keypress', evt);

        if (evt.which === KEYS.SPACE) {
          evt.preventDefault();
        }
      });

      container.on('results:focus', function (params) {
        self.$selection.attr('aria-activedescendant', params.data._resultId);
      });

      container.on('selection:update', function (params) {
        self.update(params.data);
      });

      container.on('open', function () {
        // When the dropdown is open, aria-expanded="true"
        self.$selection.attr('aria-expanded', 'true');
        self.$selection.attr('aria-owns', resultsId);

        self._attachCloseHandler(container);
      });

      container.on('close', function () {
        // When the dropdown is closed, aria-expanded="false"
        self.$selection.attr('aria-expanded', 'false');
        self.$selection.removeAttr('aria-activedescendant');
        self.$selection.removeAttr('aria-owns');

        self.$selection.trigger('focus');

        self._detachCloseHandler(container);
      });

      container.on('enable', function () {
        self.$selection.attr('tabindex', self._tabindex);
        self.$selection.attr('aria-disabled', 'false');
      });

      container.on('disable', function () {
        self.$selection.attr('tabindex', '-1');
        self.$selection.attr('aria-disabled', 'true');
      });
    };

    BaseSelection.prototype._handleBlur = function (evt) {
      var self = this;

      // This needs to be delayed as the active element is the body when the tab
      // key is pressed, possibly along with others.
      window.setTimeout(function () {
        // Don't trigger `blur` if the focus is still in the selection
        if (
          (document.activeElement == self.$selection[0]) ||
          ($.contains(self.$selection[0], document.activeElement))
        ) {
          return;
        }

        self.trigger('blur', evt);
      }, 1);
    };

    BaseSelection.prototype._attachCloseHandler = function (container) {

      $(document.body).on('mousedown.select2.' + container.id, function (e) {
        var $target = $(e.target);

        var $select = $target.closest('.select2');

        var $all = $('.select2.select2-container--open');

        $all.each(function () {
          if (this == $select[0]) {
            return;
          }

          var $element = Utils.GetData(this, 'element');

          $element.select2('close');
        });
      });
    };

    BaseSelection.prototype._detachCloseHandler = function (container) {
      $(document.body).off('mousedown.select2.' + container.id);
    };

    BaseSelection.prototype.position = function ($selection, $container) {
      var $selectionContainer = $container.find('.selection');
      $selectionContainer.append($selection);
    };

    BaseSelection.prototype.destroy = function () {
      this._detachCloseHandler(this.container);
    };

    BaseSelection.prototype.update = function (data) {
      throw new Error('The `update` method must be defined in child classes.');
    };

    /**
     * Helper method to abstract the "enabled" (not "disabled") state of this
     * object.
     *
     * @return {true} if the instance is not disabled.
     * @return {false} if the instance is disabled.
     */
    BaseSelection.prototype.isEnabled = function () {
      return !this.isDisabled();
    };

    /**
     * Helper method to abstract the "disabled" state of this object.
     *
     * @return {true} if the disabled option is true.
     * @return {false} if the disabled option is false.
     */
    BaseSelection.prototype.isDisabled = function () {
      return this.options.get('disabled');
    };

    return BaseSelection;
  });

  S2.define('select2/selection/single',[
    'jquery',
    './base',
    '../utils',
    '../keys'
  ], function ($, BaseSelection, Utils, KEYS) {
    function SingleSelection () {
      SingleSelection.__super__.constructor.apply(this, arguments);
    }

    Utils.Extend(SingleSelection, BaseSelection);

    SingleSelection.prototype.render = function () {
      var $selection = SingleSelection.__super__.render.call(this);

      $selection[0].classList.add('select2-selection--single');

      $selection.html(
        '<span class="select2-selection__rendered"></span>' +
        '<span class="select2-selection__arrow" role="presentation">' +
          '<b role="presentation"></b>' +
        '</span>'
      );

      return $selection;
    };

    SingleSelection.prototype.bind = function (container, $container) {
      var self = this;

      SingleSelection.__super__.bind.apply(this, arguments);

      var id = container.id + '-container';

      this.$selection.find('.select2-selection__rendered')
        .attr('id', id)
        .attr('role', 'textbox')
        .attr('aria-readonly', 'true');
      this.$selection.attr('aria-labelledby', id);
      this.$selection.attr('aria-controls', id);

      this.$selection.on('mousedown', function (evt) {
        // Only respond to left clicks
        if (evt.which !== 1) {
          return;
        }

        self.trigger('toggle', {
          originalEvent: evt
        });
      });

      this.$selection.on('focus', function (evt) {
        // User focuses on the container
      });

      this.$selection.on('blur', function (evt) {
        // User exits the container
      });

      container.on('focus', function (evt) {
        if (!container.isOpen()) {
          self.$selection.trigger('focus');
        }
      });
    };

    SingleSelection.prototype.clear = function () {
      var $rendered = this.$selection.find('.select2-selection__rendered');
      $rendered.empty();
      $rendered.removeAttr('title'); // clear tooltip on empty
    };

    SingleSelection.prototype.display = function (data, container) {
      var template = this.options.get('templateSelection');
      var escapeMarkup = this.options.get('escapeMarkup');

      return escapeMarkup(template(data, container));
    };

    SingleSelection.prototype.selectionContainer = function () {
      return $('<span></span>');
    };

    SingleSelection.prototype.update = function (data) {
      if (data.length === 0) {
        this.clear();
        return;
      }

      var selection = data[0];

      var $rendered = this.$selection.find('.select2-selection__rendered');
      var formatted = this.display(selection, $rendered);

      $rendered.empty().append(formatted);

      var title = selection.title || selection.text;

      if (title) {
        $rendered.attr('title', title);
      } else {
        $rendered.removeAttr('title');
      }
    };

    return SingleSelection;
  });

  S2.define('select2/selection/multiple',[
    'jquery',
    './base',
    '../utils'
  ], function ($, BaseSelection, Utils) {
    function MultipleSelection ($element, options) {
      MultipleSelection.__super__.constructor.apply(this, arguments);
    }

    Utils.Extend(MultipleSelection, BaseSelection);

    MultipleSelection.prototype.render = function () {
      var $selection = MultipleSelection.__super__.render.call(this);

      $selection[0].classList.add('select2-selection--multiple');

      $selection.html(
        '<ul class="select2-selection__rendered"></ul>'
      );

      return $selection;
    };

    MultipleSelection.prototype.bind = function (container, $container) {
      var self = this;

      MultipleSelection.__super__.bind.apply(this, arguments);

      var id = container.id + '-container';
      this.$selection.find('.select2-selection__rendered').attr('id', id);

      this.$selection.on('click', function (evt) {
        self.trigger('toggle', {
          originalEvent: evt
        });
      });

      this.$selection.on(
        'click',
        '.select2-selection__choice__remove',
        function (evt) {
          // Ignore the event if it is disabled
          if (self.isDisabled()) {
            return;
          }

          var $remove = $(this);
          var $selection = $remove.parent();

          var data = Utils.GetData($selection[0], 'data');

          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        }
      );

      this.$selection.on(
        'keydown',
        '.select2-selection__choice__remove',
        function (evt) {
          // Ignore the event if it is disabled
          if (self.isDisabled()) {
            return;
          }

          evt.stopPropagation();
        }
      );
    };

    MultipleSelection.prototype.clear = function () {
      var $rendered = this.$selection.find('.select2-selection__rendered');
      $rendered.empty();
      $rendered.removeAttr('title');
    };

    MultipleSelection.prototype.display = function (data, container) {
      var template = this.options.get('templateSelection');
      var escapeMarkup = this.options.get('escapeMarkup');

      return escapeMarkup(template(data, container));
    };

    MultipleSelection.prototype.selectionContainer = function () {
      var $container = $(
        '<li class="select2-selection__choice">' +
          '<button type="button" class="select2-selection__choice__remove" ' +
          'tabindex="-1">' +
            '<span aria-hidden="true">&times;</span>' +
          '</button>' +
          '<span class="select2-selection__choice__display"></span>' +
        '</li>'
      );

      return $container;
    };

    MultipleSelection.prototype.update = function (data) {
      this.clear();

      if (data.length === 0) {
        return;
      }

      var $selections = [];

      var selectionIdPrefix = this.$selection.find('.select2-selection__rendered')
        .attr('id') + '-choice-';

      for (var d = 0; d < data.length; d++) {
        var selection = data[d];

        var $selection = this.selectionContainer();
        var formatted = this.display(selection, $selection);

        var selectionId = selectionIdPrefix + Utils.generateChars(4) + '-';

        if (selection.id) {
          selectionId += selection.id;
        } else {
          selectionId += Utils.generateChars(4);
        }

        $selection.find('.select2-selection__choice__display')
          .append(formatted)
          .attr('id', selectionId);

        var title = selection.title || selection.text;

        if (title) {
          $selection.attr('title', title);
        }

        var removeItem = this.options.get('translations').get('removeItem');

        var $remove = $selection.find('.select2-selection__choice__remove');

        $remove.attr('title', removeItem());
        $remove.attr('aria-label', removeItem());
        $remove.attr('aria-describedby', selectionId);

        Utils.StoreData($selection[0], 'data', selection);

        $selections.push($selection);
      }

      var $rendered = this.$selection.find('.select2-selection__rendered');

      $rendered.append($selections);
    };

    return MultipleSelection;
  });

  S2.define('select2/selection/placeholder',[

  ], function () {
    function Placeholder (decorated, $element, options) {
      this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

      decorated.call(this, $element, options);
    }

    Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
      if (typeof placeholder === 'string') {
        placeholder = {
          id: '',
          text: placeholder
        };
      }

      return placeholder;
    };

    Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
      var $placeholder = this.selectionContainer();

      $placeholder.html(this.display(placeholder));
      $placeholder[0].classList.add('select2-selection__placeholder');
      $placeholder[0].classList.remove('select2-selection__choice');

      var placeholderTitle = placeholder.title ||
        placeholder.text ||
        $placeholder.text();

      this.$selection.find('.select2-selection__rendered').attr(
        'title',
        placeholderTitle
      );

      return $placeholder;
    };

    Placeholder.prototype.update = function (decorated, data) {
      var singlePlaceholder = (
        data.length == 1 && data[0].id != this.placeholder.id
      );
      var multipleSelections = data.length > 1;

      if (multipleSelections || singlePlaceholder) {
        return decorated.call(this, data);
      }

      this.clear();

      var $placeholder = this.createPlaceholder(this.placeholder);

      this.$selection.find('.select2-selection__rendered').append($placeholder);
    };

    return Placeholder;
  });

  S2.define('select2/selection/allowClear',[
    'jquery',
    '../keys',
    '../utils'
  ], function ($, KEYS, Utils) {
    function AllowClear () { }

    AllowClear.prototype.bind = function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      if (this.placeholder == null) {
        if (this.options.get('debug') && window.console && console.error) {
          console.error(
            'Select2: The `allowClear` option should be used in combination ' +
            'with the `placeholder` option.'
          );
        }
      }

      this.$selection.on('mousedown', '.select2-selection__clear',
        function (evt) {
          self._handleClear(evt);
      });

      container.on('keypress', function (evt) {
        self._handleKeyboardClear(evt, container);
      });
    };

    AllowClear.prototype._handleClear = function (_, evt) {
      // Ignore the event if it is disabled
      if (this.isDisabled()) {
        return;
      }

      var $clear = this.$selection.find('.select2-selection__clear');

      // Ignore the event if nothing has been selected
      if ($clear.length === 0) {
        return;
      }

      evt.stopPropagation();

      var data = Utils.GetData($clear[0], 'data');

      var previousVal = this.$element.val();
      this.$element.val(this.placeholder.id);

      var unselectData = {
        data: data
      };
      this.trigger('clear', unselectData);
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
      }

      for (var d = 0; d < data.length; d++) {
        unselectData = {
          data: data[d]
        };

        // Trigger the `unselect` event, so people can prevent it from being
        // cleared.
        this.trigger('unselect', unselectData);

        // If the event was prevented, don't clear it out.
        if (unselectData.prevented) {
          this.$element.val(previousVal);
          return;
        }
      }

      this.$element.trigger('input').trigger('change');

      this.trigger('toggle', {});
    };

    AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
      if (container.isOpen()) {
        return;
      }

      if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
        this._handleClear(evt);
      }
    };

    AllowClear.prototype.update = function (decorated, data) {
      decorated.call(this, data);

      this.$selection.find('.select2-selection__clear').remove();
      this.$selection[0].classList.remove('select2-selection--clearable');

      if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
          data.length === 0) {
        return;
      }

      var selectionId = this.$selection.find('.select2-selection__rendered')
        .attr('id');

      var removeAll = this.options.get('translations').get('removeAllItems');

      var $remove = $(
        '<button type="button" class="select2-selection__clear" tabindex="-1">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>'
      );
      $remove.attr('title', removeAll());
      $remove.attr('aria-label', removeAll());
      $remove.attr('aria-describedby', selectionId);
      Utils.StoreData($remove[0], 'data', data);

      this.$selection.prepend($remove);
      this.$selection[0].classList.add('select2-selection--clearable');
    };

    return AllowClear;
  });

  S2.define('select2/selection/search',[
    'jquery',
    '../utils',
    '../keys'
  ], function ($, Utils, KEYS) {
    function Search (decorated, $element, options) {
      decorated.call(this, $element, options);
    }

    Search.prototype.render = function (decorated) {
      var searchLabel = this.options.get('translations').get('search');
      var $search = $(
        '<span class="select2-search select2-search--inline">' +
          '<textarea class="select2-search__field"'+
          ' type="search" tabindex="-1"' +
          ' autocorrect="off" autocapitalize="none"' +
          ' spellcheck="false" role="searchbox" aria-autocomplete="list" >' +
          '</textarea>' +
        '</span>'
      );

      this.$searchContainer = $search;
      this.$search = $search.find('textarea');

      this.$search.prop('autocomplete', this.options.get('autocomplete'));
      this.$search.attr('aria-label', searchLabel());

      var $rendered = decorated.call(this);

      this._transferTabIndex();
      $rendered.append(this.$searchContainer);

      return $rendered;
    };

    Search.prototype.bind = function (decorated, container, $container) {
      var self = this;

      var resultsId = container.id + '-results';
      var selectionId = container.id + '-container';

      decorated.call(this, container, $container);

      self.$search.attr('aria-describedby', selectionId);

      container.on('open', function () {
        self.$search.attr('aria-controls', resultsId);
        self.$search.trigger('focus');
      });

      container.on('close', function () {
        self.$search.val('');
        self.resizeSearch();
        self.$search.removeAttr('aria-controls');
        self.$search.removeAttr('aria-activedescendant');
        self.$search.trigger('focus');
      });

      container.on('enable', function () {
        self.$search.prop('disabled', false);

        self._transferTabIndex();
      });

      container.on('disable', function () {
        self.$search.prop('disabled', true);
      });

      container.on('focus', function (evt) {
        self.$search.trigger('focus');
      });

      container.on('results:focus', function (params) {
        if (params.data._resultId) {
          self.$search.attr('aria-activedescendant', params.data._resultId);
        } else {
          self.$search.removeAttr('aria-activedescendant');
        }
      });

      this.$selection.on('focusin', '.select2-search--inline', function (evt) {
        self.trigger('focus', evt);
      });

      this.$selection.on('focusout', '.select2-search--inline', function (evt) {
        self._handleBlur(evt);
      });

      this.$selection.on('keydown', '.select2-search--inline', function (evt) {
        evt.stopPropagation();

        self.trigger('keypress', evt);

        self._keyUpPrevented = evt.isDefaultPrevented();

        var key = evt.which;

        if (key === KEYS.BACKSPACE && self.$search.val() === '') {
          var $previousChoice = self.$selection
            .find('.select2-selection__choice').last();

          if ($previousChoice.length > 0) {
            var item = Utils.GetData($previousChoice[0], 'data');

            self.searchRemoveChoice(item);

            evt.preventDefault();
          }
        }
      });

      this.$selection.on('click', '.select2-search--inline', function (evt) {
        if (self.$search.val()) {
          evt.stopPropagation();
        }
      });

      // Try to detect the IE version should the `documentMode` property that
      // is stored on the document. This is only implemented in IE and is
      // slightly cleaner than doing a user agent check.
      // This property is not available in Edge, but Edge also doesn't have
      // this bug.
      var msie = document.documentMode;
      var disableInputEvents = msie && msie <= 11;

      // Workaround for browsers which do not support the `input` event
      // This will prevent double-triggering of events for browsers which support
      // both the `keyup` and `input` events.
      this.$selection.on(
        'input.searchcheck',
        '.select2-search--inline',
        function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents) {
            self.$selection.off('input.search input.searchcheck');
            return;
          }

          // Unbind the duplicated `keyup` event
          self.$selection.off('keyup.search');
        }
      );

      this.$selection.on(
        'keyup.search input.search',
        '.select2-search--inline',
        function (evt) {
          // IE will trigger the `input` event when a placeholder is used on a
          // search box. To get around this issue, we are forced to ignore all
          // `input` events in IE and keep using `keyup`.
          if (disableInputEvents && evt.type === 'input') {
            self.$selection.off('input.search input.searchcheck');
            return;
          }

          var key = evt.which;

          // We can freely ignore events from modifier keys
          if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
            return;
          }

          // Tabbing will be handled during the `keydown` phase
          if (key == KEYS.TAB) {
            return;
          }

          self.handleSearch(evt);
        }
      );
    };

    /**
     * This method will transfer the tabindex attribute from the rendered
     * selection to the search box. This allows for the search box to be used as
     * the primary focus instead of the selection container.
     *
     * @private
     */
    Search.prototype._transferTabIndex = function (decorated) {
      this.$search.attr('tabindex', this.$selection.attr('tabindex'));
      this.$selection.attr('tabindex', '-1');
    };

    Search.prototype.createPlaceholder = function (decorated, placeholder) {
      this.$search.attr('placeholder', placeholder.text);
    };

    Search.prototype.update = function (decorated, data) {
      var searchHadFocus = this.$search[0] == document.activeElement;

      this.$search.attr('placeholder', '');

      decorated.call(this, data);

      this.resizeSearch();
      if (searchHadFocus) {
        this.$search.trigger('focus');
      }
    };

    Search.prototype.handleSearch = function () {
      this.resizeSearch();

      if (!this._keyUpPrevented) {
        var input = this.$search.val();

        this.trigger('query', {
          term: input
        });
      }

      this._keyUpPrevented = false;
    };

    Search.prototype.searchRemoveChoice = function (decorated, item) {
      this.trigger('unselect', {
        data: item
      });

      this.$search.val(item.text);
      this.handleSearch();
    };

    Search.prototype.resizeSearch = function () {
      this.$search.css('width', '25px');

      var width = '100%';

      if (this.$search.attr('placeholder') === '') {
        var minimumWidth = this.$search.val().length + 1;

        width = (minimumWidth * 0.75) + 'em';
      }

      this.$search.css('width', width);
    };

    return Search;
  });

  S2.define('select2/selection/selectionCss',[
    '../utils'
  ], function (Utils) {
    function SelectionCSS () { }

    SelectionCSS.prototype.render = function (decorated) {
      var $selection = decorated.call(this);

      var selectionCssClass = this.options.get('selectionCssClass') || '';

      if (selectionCssClass.indexOf(':all:') !== -1) {
        selectionCssClass = selectionCssClass.replace(':all:', '');

        Utils.copyNonInternalCssClasses($selection[0], this.$element[0]);
      }

      $selection.addClass(selectionCssClass);

      return $selection;
    };

    return SelectionCSS;
  });

  S2.define('select2/selection/eventRelay',[
    'jquery'
  ], function ($) {
    function EventRelay () { }

    EventRelay.prototype.bind = function (decorated, container, $container) {
      var self = this;
      var relayEvents = [
        'open', 'opening',
        'close', 'closing',
        'select', 'selecting',
        'unselect', 'unselecting',
        'clear', 'clearing'
      ];

      var preventableEvents = [
        'opening', 'closing', 'selecting', 'unselecting', 'clearing'
      ];

      decorated.call(this, container, $container);

      container.on('*', function (name, params) {
        // Ignore events that should not be relayed
        if (relayEvents.indexOf(name) === -1) {
          return;
        }

        // The parameters should always be an object
        params = params || {};

        // Generate the jQuery event for the Select2 event
        var evt = $.Event('select2:' + name, {
          params: params
        });

        self.$element.trigger(evt);

        // Only handle preventable events if it was one
        if (preventableEvents.indexOf(name) === -1) {
          return;
        }

        params.prevented = evt.isDefaultPrevented();
      });
    };

    return EventRelay;
  });

  S2.define('select2/translation',[
    'jquery',
    'require'
  ], function ($, require) {
    function Translation (dict) {
      this.dict = dict || {};
    }

    Translation.prototype.all = function () {
      return this.dict;
    };

    Translation.prototype.get = function (key) {
      return this.dict[key];
    };

    Translation.prototype.extend = function (translation) {
      this.dict = $.extend({}, translation.all(), this.dict);
    };

    // Static functions

    Translation._cache = {};

    Translation.loadPath = function (path) {
      if (!(path in Translation._cache)) {
        var translations = require(path);

        Translation._cache[path] = translations;
      }

      return new Translation(Translation._cache[path]);
    };

    return Translation;
  });

  S2.define('select2/diacritics',[

  ], function () {
    var diacritics = {
      '\u24B6': 'A',
      '\uFF21': 'A',
      '\u00C0': 'A',
      '\u00C1': 'A',
      '\u00C2': 'A',
      '\u1EA6': 'A',
      '\u1EA4': 'A',
      '\u1EAA': 'A',
      '\u1EA8': 'A',
      '\u00C3': 'A',
      '\u0100': 'A',
      '\u0102': 'A',
      '\u1EB0': 'A',
      '\u1EAE': 'A',
      '\u1EB4': 'A',
      '\u1EB2': 'A',
      '\u0226': 'A',
      '\u01E0': 'A',
      '\u00C4': 'A',
      '\u01DE': 'A',
      '\u1EA2': 'A',
      '\u00C5': 'A',
      '\u01FA': 'A',
      '\u01CD': 'A',
      '\u0200': 'A',
      '\u0202': 'A',
      '\u1EA0': 'A',
      '\u1EAC': 'A',
      '\u1EB6': 'A',
      '\u1E00': 'A',
      '\u0104': 'A',
      '\u023A': 'A',
      '\u2C6F': 'A',
      '\uA732': 'AA',
      '\u00C6': 'AE',
      '\u01FC': 'AE',
      '\u01E2': 'AE',
      '\uA734': 'AO',
      '\uA736': 'AU',
      '\uA738': 'AV',
      '\uA73A': 'AV',
      '\uA73C': 'AY',
      '\u24B7': 'B',
      '\uFF22': 'B',
      '\u1E02': 'B',
      '\u1E04': 'B',
      '\u1E06': 'B',
      '\u0243': 'B',
      '\u0182': 'B',
      '\u0181': 'B',
      '\u24B8': 'C',
      '\uFF23': 'C',
      '\u0106': 'C',
      '\u0108': 'C',
      '\u010A': 'C',
      '\u010C': 'C',
      '\u00C7': 'C',
      '\u1E08': 'C',
      '\u0187': 'C',
      '\u023B': 'C',
      '\uA73E': 'C',
      '\u24B9': 'D',
      '\uFF24': 'D',
      '\u1E0A': 'D',
      '\u010E': 'D',
      '\u1E0C': 'D',
      '\u1E10': 'D',
      '\u1E12': 'D',
      '\u1E0E': 'D',
      '\u0110': 'D',
      '\u018B': 'D',
      '\u018A': 'D',
      '\u0189': 'D',
      '\uA779': 'D',
      '\u01F1': 'DZ',
      '\u01C4': 'DZ',
      '\u01F2': 'Dz',
      '\u01C5': 'Dz',
      '\u24BA': 'E',
      '\uFF25': 'E',
      '\u00C8': 'E',
      '\u00C9': 'E',
      '\u00CA': 'E',
      '\u1EC0': 'E',
      '\u1EBE': 'E',
      '\u1EC4': 'E',
      '\u1EC2': 'E',
      '\u1EBC': 'E',
      '\u0112': 'E',
      '\u1E14': 'E',
      '\u1E16': 'E',
      '\u0114': 'E',
      '\u0116': 'E',
      '\u00CB': 'E',
      '\u1EBA': 'E',
      '\u011A': 'E',
      '\u0204': 'E',
      '\u0206': 'E',
      '\u1EB8': 'E',
      '\u1EC6': 'E',
      '\u0228': 'E',
      '\u1E1C': 'E',
      '\u0118': 'E',
      '\u1E18': 'E',
      '\u1E1A': 'E',
      '\u0190': 'E',
      '\u018E': 'E',
      '\u24BB': 'F',
      '\uFF26': 'F',
      '\u1E1E': 'F',
      '\u0191': 'F',
      '\uA77B': 'F',
      '\u24BC': 'G',
      '\uFF27': 'G',
      '\u01F4': 'G',
      '\u011C': 'G',
      '\u1E20': 'G',
      '\u011E': 'G',
      '\u0120': 'G',
      '\u01E6': 'G',
      '\u0122': 'G',
      '\u01E4': 'G',
      '\u0193': 'G',
      '\uA7A0': 'G',
      '\uA77D': 'G',
      '\uA77E': 'G',
      '\u24BD': 'H',
      '\uFF28': 'H',
      '\u0124': 'H',
      '\u1E22': 'H',
      '\u1E26': 'H',
      '\u021E': 'H',
      '\u1E24': 'H',
      '\u1E28': 'H',
      '\u1E2A': 'H',
      '\u0126': 'H',
      '\u2C67': 'H',
      '\u2C75': 'H',
      '\uA78D': 'H',
      '\u24BE': 'I',
      '\uFF29': 'I',
      '\u00CC': 'I',
      '\u00CD': 'I',
      '\u00CE': 'I',
      '\u0128': 'I',
      '\u012A': 'I',
      '\u012C': 'I',
      '\u0130': 'I',
      '\u00CF': 'I',
      '\u1E2E': 'I',
      '\u1EC8': 'I',
      '\u01CF': 'I',
      '\u0208': 'I',
      '\u020A': 'I',
      '\u1ECA': 'I',
      '\u012E': 'I',
      '\u1E2C': 'I',
      '\u0197': 'I',
      '\u24BF': 'J',
      '\uFF2A': 'J',
      '\u0134': 'J',
      '\u0248': 'J',
      '\u24C0': 'K',
      '\uFF2B': 'K',
      '\u1E30': 'K',
      '\u01E8': 'K',
      '\u1E32': 'K',
      '\u0136': 'K',
      '\u1E34': 'K',
      '\u0198': 'K',
      '\u2C69': 'K',
      '\uA740': 'K',
      '\uA742': 'K',
      '\uA744': 'K',
      '\uA7A2': 'K',
      '\u24C1': 'L',
      '\uFF2C': 'L',
      '\u013F': 'L',
      '\u0139': 'L',
      '\u013D': 'L',
      '\u1E36': 'L',
      '\u1E38': 'L',
      '\u013B': 'L',
      '\u1E3C': 'L',
      '\u1E3A': 'L',
      '\u0141': 'L',
      '\u023D': 'L',
      '\u2C62': 'L',
      '\u2C60': 'L',
      '\uA748': 'L',
      '\uA746': 'L',
      '\uA780': 'L',
      '\u01C7': 'LJ',
      '\u01C8': 'Lj',
      '\u24C2': 'M',
      '\uFF2D': 'M',
      '\u1E3E': 'M',
      '\u1E40': 'M',
      '\u1E42': 'M',
      '\u2C6E': 'M',
      '\u019C': 'M',
      '\u24C3': 'N',
      '\uFF2E': 'N',
      '\u01F8': 'N',
      '\u0143': 'N',
      '\u00D1': 'N',
      '\u1E44': 'N',
      '\u0147': 'N',
      '\u1E46': 'N',
      '\u0145': 'N',
      '\u1E4A': 'N',
      '\u1E48': 'N',
      '\u0220': 'N',
      '\u019D': 'N',
      '\uA790': 'N',
      '\uA7A4': 'N',
      '\u01CA': 'NJ',
      '\u01CB': 'Nj',
      '\u24C4': 'O',
      '\uFF2F': 'O',
      '\u00D2': 'O',
      '\u00D3': 'O',
      '\u00D4': 'O',
      '\u1ED2': 'O',
      '\u1ED0': 'O',
      '\u1ED6': 'O',
      '\u1ED4': 'O',
      '\u00D5': 'O',
      '\u1E4C': 'O',
      '\u022C': 'O',
      '\u1E4E': 'O',
      '\u014C': 'O',
      '\u1E50': 'O',
      '\u1E52': 'O',
      '\u014E': 'O',
      '\u022E': 'O',
      '\u0230': 'O',
      '\u00D6': 'O',
      '\u022A': 'O',
      '\u1ECE': 'O',
      '\u0150': 'O',
      '\u01D1': 'O',
      '\u020C': 'O',
      '\u020E': 'O',
      '\u01A0': 'O',
      '\u1EDC': 'O',
      '\u1EDA': 'O',
      '\u1EE0': 'O',
      '\u1EDE': 'O',
      '\u1EE2': 'O',
      '\u1ECC': 'O',
      '\u1ED8': 'O',
      '\u01EA': 'O',
      '\u01EC': 'O',
      '\u00D8': 'O',
      '\u01FE': 'O',
      '\u0186': 'O',
      '\u019F': 'O',
      '\uA74A': 'O',
      '\uA74C': 'O',
      '\u0152': 'OE',
      '\u01A2': 'OI',
      '\uA74E': 'OO',
      '\u0222': 'OU',
      '\u24C5': 'P',
      '\uFF30': 'P',
      '\u1E54': 'P',
      '\u1E56': 'P',
      '\u01A4': 'P',
      '\u2C63': 'P',
      '\uA750': 'P',
      '\uA752': 'P',
      '\uA754': 'P',
      '\u24C6': 'Q',
      '\uFF31': 'Q',
      '\uA756': 'Q',
      '\uA758': 'Q',
      '\u024A': 'Q',
      '\u24C7': 'R',
      '\uFF32': 'R',
      '\u0154': 'R',
      '\u1E58': 'R',
      '\u0158': 'R',
      '\u0210': 'R',
      '\u0212': 'R',
      '\u1E5A': 'R',
      '\u1E5C': 'R',
      '\u0156': 'R',
      '\u1E5E': 'R',
      '\u024C': 'R',
      '\u2C64': 'R',
      '\uA75A': 'R',
      '\uA7A6': 'R',
      '\uA782': 'R',
      '\u24C8': 'S',
      '\uFF33': 'S',
      '\u1E9E': 'S',
      '\u015A': 'S',
      '\u1E64': 'S',
      '\u015C': 'S',
      '\u1E60': 'S',
      '\u0160': 'S',
      '\u1E66': 'S',
      '\u1E62': 'S',
      '\u1E68': 'S',
      '\u0218': 'S',
      '\u015E': 'S',
      '\u2C7E': 'S',
      '\uA7A8': 'S',
      '\uA784': 'S',
      '\u24C9': 'T',
      '\uFF34': 'T',
      '\u1E6A': 'T',
      '\u0164': 'T',
      '\u1E6C': 'T',
      '\u021A': 'T',
      '\u0162': 'T',
      '\u1E70': 'T',
      '\u1E6E': 'T',
      '\u0166': 'T',
      '\u01AC': 'T',
      '\u01AE': 'T',
      '\u023E': 'T',
      '\uA786': 'T',
      '\uA728': 'TZ',
      '\u24CA': 'U',
      '\uFF35': 'U',
      '\u00D9': 'U',
      '\u00DA': 'U',
      '\u00DB': 'U',
      '\u0168': 'U',
      '\u1E78': 'U',
      '\u016A': 'U',
      '\u1E7A': 'U',
      '\u016C': 'U',
      '\u00DC': 'U',
      '\u01DB': 'U',
      '\u01D7': 'U',
      '\u01D5': 'U',
      '\u01D9': 'U',
      '\u1EE6': 'U',
      '\u016E': 'U',
      '\u0170': 'U',
      '\u01D3': 'U',
      '\u0214': 'U',
      '\u0216': 'U',
      '\u01AF': 'U',
      '\u1EEA': 'U',
      '\u1EE8': 'U',
      '\u1EEE': 'U',
      '\u1EEC': 'U',
      '\u1EF0': 'U',
      '\u1EE4': 'U',
      '\u1E72': 'U',
      '\u0172': 'U',
      '\u1E76': 'U',
      '\u1E74': 'U',
      '\u0244': 'U',
      '\u24CB': 'V',
      '\uFF36': 'V',
      '\u1E7C': 'V',
      '\u1E7E': 'V',
      '\u01B2': 'V',
      '\uA75E': 'V',
      '\u0245': 'V',
      '\uA760': 'VY',
      '\u24CC': 'W',
      '\uFF37': 'W',
      '\u1E80': 'W',
      '\u1E82': 'W',
      '\u0174': 'W',
      '\u1E86': 'W',
      '\u1E84': 'W',
      '\u1E88': 'W',
      '\u2C72': 'W',
      '\u24CD': 'X',
      '\uFF38': 'X',
      '\u1E8A': 'X',
      '\u1E8C': 'X',
      '\u24CE': 'Y',
      '\uFF39': 'Y',
      '\u1EF2': 'Y',
      '\u00DD': 'Y',
      '\u0176': 'Y',
      '\u1EF8': 'Y',
      '\u0232': 'Y',
      '\u1E8E': 'Y',
      '\u0178': 'Y',
      '\u1EF6': 'Y',
      '\u1EF4': 'Y',
      '\u01B3': 'Y',
      '\u024E': 'Y',
      '\u1EFE': 'Y',
      '\u24CF': 'Z',
      '\uFF3A': 'Z',
      '\u0179': 'Z',
      '\u1E90': 'Z',
      '\u017B': 'Z',
      '\u017D': 'Z',
      '\u1E92': 'Z',
      '\u1E94': 'Z',
      '\u01B5': 'Z',
      '\u0224': 'Z',
      '\u2C7F': 'Z',
      '\u2C6B': 'Z',
      '\uA762': 'Z',
      '\u24D0': 'a',
      '\uFF41': 'a',
      '\u1E9A': 'a',
      '\u00E0': 'a',
      '\u00E1': 'a',
      '\u00E2': 'a',
      '\u1EA7': 'a',
      '\u1EA5': 'a',
      '\u1EAB': 'a',
      '\u1EA9': 'a',
      '\u00E3': 'a',
      '\u0101': 'a',
      '\u0103': 'a',
      '\u1EB1': 'a',
      '\u1EAF': 'a',
      '\u1EB5': 'a',
      '\u1EB3': 'a',
      '\u0227': 'a',
      '\u01E1': 'a',
      '\u00E4': 'a',
      '\u01DF': 'a',
      '\u1EA3': 'a',
      '\u00E5': 'a',
      '\u01FB': 'a',
      '\u01CE': 'a',
      '\u0201': 'a',
      '\u0203': 'a',
      '\u1EA1': 'a',
      '\u1EAD': 'a',
      '\u1EB7': 'a',
      '\u1E01': 'a',
      '\u0105': 'a',
      '\u2C65': 'a',
      '\u0250': 'a',
      '\uA733': 'aa',
      '\u00E6': 'ae',
      '\u01FD': 'ae',
      '\u01E3': 'ae',
      '\uA735': 'ao',
      '\uA737': 'au',
      '\uA739': 'av',
      '\uA73B': 'av',
      '\uA73D': 'ay',
      '\u24D1': 'b',
      '\uFF42': 'b',
      '\u1E03': 'b',
      '\u1E05': 'b',
      '\u1E07': 'b',
      '\u0180': 'b',
      '\u0183': 'b',
      '\u0253': 'b',
      '\u24D2': 'c',
      '\uFF43': 'c',
      '\u0107': 'c',
      '\u0109': 'c',
      '\u010B': 'c',
      '\u010D': 'c',
      '\u00E7': 'c',
      '\u1E09': 'c',
      '\u0188': 'c',
      '\u023C': 'c',
      '\uA73F': 'c',
      '\u2184': 'c',
      '\u24D3': 'd',
      '\uFF44': 'd',
      '\u1E0B': 'd',
      '\u010F': 'd',
      '\u1E0D': 'd',
      '\u1E11': 'd',
      '\u1E13': 'd',
      '\u1E0F': 'd',
      '\u0111': 'd',
      '\u018C': 'd',
      '\u0256': 'd',
      '\u0257': 'd',
      '\uA77A': 'd',
      '\u01F3': 'dz',
      '\u01C6': 'dz',
      '\u24D4': 'e',
      '\uFF45': 'e',
      '\u00E8': 'e',
      '\u00E9': 'e',
      '\u00EA': 'e',
      '\u1EC1': 'e',
      '\u1EBF': 'e',
      '\u1EC5': 'e',
      '\u1EC3': 'e',
      '\u1EBD': 'e',
      '\u0113': 'e',
      '\u1E15': 'e',
      '\u1E17': 'e',
      '\u0115': 'e',
      '\u0117': 'e',
      '\u00EB': 'e',
      '\u1EBB': 'e',
      '\u011B': 'e',
      '\u0205': 'e',
      '\u0207': 'e',
      '\u1EB9': 'e',
      '\u1EC7': 'e',
      '\u0229': 'e',
      '\u1E1D': 'e',
      '\u0119': 'e',
      '\u1E19': 'e',
      '\u1E1B': 'e',
      '\u0247': 'e',
      '\u025B': 'e',
      '\u01DD': 'e',
      '\u24D5': 'f',
      '\uFF46': 'f',
      '\u1E1F': 'f',
      '\u0192': 'f',
      '\uA77C': 'f',
      '\u24D6': 'g',
      '\uFF47': 'g',
      '\u01F5': 'g',
      '\u011D': 'g',
      '\u1E21': 'g',
      '\u011F': 'g',
      '\u0121': 'g',
      '\u01E7': 'g',
      '\u0123': 'g',
      '\u01E5': 'g',
      '\u0260': 'g',
      '\uA7A1': 'g',
      '\u1D79': 'g',
      '\uA77F': 'g',
      '\u24D7': 'h',
      '\uFF48': 'h',
      '\u0125': 'h',
      '\u1E23': 'h',
      '\u1E27': 'h',
      '\u021F': 'h',
      '\u1E25': 'h',
      '\u1E29': 'h',
      '\u1E2B': 'h',
      '\u1E96': 'h',
      '\u0127': 'h',
      '\u2C68': 'h',
      '\u2C76': 'h',
      '\u0265': 'h',
      '\u0195': 'hv',
      '\u24D8': 'i',
      '\uFF49': 'i',
      '\u00EC': 'i',
      '\u00ED': 'i',
      '\u00EE': 'i',
      '\u0129': 'i',
      '\u012B': 'i',
      '\u012D': 'i',
      '\u00EF': 'i',
      '\u1E2F': 'i',
      '\u1EC9': 'i',
      '\u01D0': 'i',
      '\u0209': 'i',
      '\u020B': 'i',
      '\u1ECB': 'i',
      '\u012F': 'i',
      '\u1E2D': 'i',
      '\u0268': 'i',
      '\u0131': 'i',
      '\u24D9': 'j',
      '\uFF4A': 'j',
      '\u0135': 'j',
      '\u01F0': 'j',
      '\u0249': 'j',
      '\u24DA': 'k',
      '\uFF4B': 'k',
      '\u1E31': 'k',
      '\u01E9': 'k',
      '\u1E33': 'k',
      '\u0137': 'k',
      '\u1E35': 'k',
      '\u0199': 'k',
      '\u2C6A': 'k',
      '\uA741': 'k',
      '\uA743': 'k',
      '\uA745': 'k',
      '\uA7A3': 'k',
      '\u24DB': 'l',
      '\uFF4C': 'l',
      '\u0140': 'l',
      '\u013A': 'l',
      '\u013E': 'l',
      '\u1E37': 'l',
      '\u1E39': 'l',
      '\u013C': 'l',
      '\u1E3D': 'l',
      '\u1E3B': 'l',
      '\u017F': 'l',
      '\u0142': 'l',
      '\u019A': 'l',
      '\u026B': 'l',
      '\u2C61': 'l',
      '\uA749': 'l',
      '\uA781': 'l',
      '\uA747': 'l',
      '\u01C9': 'lj',
      '\u24DC': 'm',
      '\uFF4D': 'm',
      '\u1E3F': 'm',
      '\u1E41': 'm',
      '\u1E43': 'm',
      '\u0271': 'm',
      '\u026F': 'm',
      '\u24DD': 'n',
      '\uFF4E': 'n',
      '\u01F9': 'n',
      '\u0144': 'n',
      '\u00F1': 'n',
      '\u1E45': 'n',
      '\u0148': 'n',
      '\u1E47': 'n',
      '\u0146': 'n',
      '\u1E4B': 'n',
      '\u1E49': 'n',
      '\u019E': 'n',
      '\u0272': 'n',
      '\u0149': 'n',
      '\uA791': 'n',
      '\uA7A5': 'n',
      '\u01CC': 'nj',
      '\u24DE': 'o',
      '\uFF4F': 'o',
      '\u00F2': 'o',
      '\u00F3': 'o',
      '\u00F4': 'o',
      '\u1ED3': 'o',
      '\u1ED1': 'o',
      '\u1ED7': 'o',
      '\u1ED5': 'o',
      '\u00F5': 'o',
      '\u1E4D': 'o',
      '\u022D': 'o',
      '\u1E4F': 'o',
      '\u014D': 'o',
      '\u1E51': 'o',
      '\u1E53': 'o',
      '\u014F': 'o',
      '\u022F': 'o',
      '\u0231': 'o',
      '\u00F6': 'o',
      '\u022B': 'o',
      '\u1ECF': 'o',
      '\u0151': 'o',
      '\u01D2': 'o',
      '\u020D': 'o',
      '\u020F': 'o',
      '\u01A1': 'o',
      '\u1EDD': 'o',
      '\u1EDB': 'o',
      '\u1EE1': 'o',
      '\u1EDF': 'o',
      '\u1EE3': 'o',
      '\u1ECD': 'o',
      '\u1ED9': 'o',
      '\u01EB': 'o',
      '\u01ED': 'o',
      '\u00F8': 'o',
      '\u01FF': 'o',
      '\u0254': 'o',
      '\uA74B': 'o',
      '\uA74D': 'o',
      '\u0275': 'o',
      '\u0153': 'oe',
      '\u01A3': 'oi',
      '\u0223': 'ou',
      '\uA74F': 'oo',
      '\u24DF': 'p',
      '\uFF50': 'p',
      '\u1E55': 'p',
      '\u1E57': 'p',
      '\u01A5': 'p',
      '\u1D7D': 'p',
      '\uA751': 'p',
      '\uA753': 'p',
      '\uA755': 'p',
      '\u24E0': 'q',
      '\uFF51': 'q',
      '\u024B': 'q',
      '\uA757': 'q',
      '\uA759': 'q',
      '\u24E1': 'r',
      '\uFF52': 'r',
      '\u0155': 'r',
      '\u1E59': 'r',
      '\u0159': 'r',
      '\u0211': 'r',
      '\u0213': 'r',
      '\u1E5B': 'r',
      '\u1E5D': 'r',
      '\u0157': 'r',
      '\u1E5F': 'r',
      '\u024D': 'r',
      '\u027D': 'r',
      '\uA75B': 'r',
      '\uA7A7': 'r',
      '\uA783': 'r',
      '\u24E2': 's',
      '\uFF53': 's',
      '\u00DF': 's',
      '\u015B': 's',
      '\u1E65': 's',
      '\u015D': 's',
      '\u1E61': 's',
      '\u0161': 's',
      '\u1E67': 's',
      '\u1E63': 's',
      '\u1E69': 's',
      '\u0219': 's',
      '\u015F': 's',
      '\u023F': 's',
      '\uA7A9': 's',
      '\uA785': 's',
      '\u1E9B': 's',
      '\u24E3': 't',
      '\uFF54': 't',
      '\u1E6B': 't',
      '\u1E97': 't',
      '\u0165': 't',
      '\u1E6D': 't',
      '\u021B': 't',
      '\u0163': 't',
      '\u1E71': 't',
      '\u1E6F': 't',
      '\u0167': 't',
      '\u01AD': 't',
      '\u0288': 't',
      '\u2C66': 't',
      '\uA787': 't',
      '\uA729': 'tz',
      '\u24E4': 'u',
      '\uFF55': 'u',
      '\u00F9': 'u',
      '\u00FA': 'u',
      '\u00FB': 'u',
      '\u0169': 'u',
      '\u1E79': 'u',
      '\u016B': 'u',
      '\u1E7B': 'u',
      '\u016D': 'u',
      '\u00FC': 'u',
      '\u01DC': 'u',
      '\u01D8': 'u',
      '\u01D6': 'u',
      '\u01DA': 'u',
      '\u1EE7': 'u',
      '\u016F': 'u',
      '\u0171': 'u',
      '\u01D4': 'u',
      '\u0215': 'u',
      '\u0217': 'u',
      '\u01B0': 'u',
      '\u1EEB': 'u',
      '\u1EE9': 'u',
      '\u1EEF': 'u',
      '\u1EED': 'u',
      '\u1EF1': 'u',
      '\u1EE5': 'u',
      '\u1E73': 'u',
      '\u0173': 'u',
      '\u1E77': 'u',
      '\u1E75': 'u',
      '\u0289': 'u',
      '\u24E5': 'v',
      '\uFF56': 'v',
      '\u1E7D': 'v',
      '\u1E7F': 'v',
      '\u028B': 'v',
      '\uA75F': 'v',
      '\u028C': 'v',
      '\uA761': 'vy',
      '\u24E6': 'w',
      '\uFF57': 'w',
      '\u1E81': 'w',
      '\u1E83': 'w',
      '\u0175': 'w',
      '\u1E87': 'w',
      '\u1E85': 'w',
      '\u1E98': 'w',
      '\u1E89': 'w',
      '\u2C73': 'w',
      '\u24E7': 'x',
      '\uFF58': 'x',
      '\u1E8B': 'x',
      '\u1E8D': 'x',
      '\u24E8': 'y',
      '\uFF59': 'y',
      '\u1EF3': 'y',
      '\u00FD': 'y',
      '\u0177': 'y',
      '\u1EF9': 'y',
      '\u0233': 'y',
      '\u1E8F': 'y',
      '\u00FF': 'y',
      '\u1EF7': 'y',
      '\u1E99': 'y',
      '\u1EF5': 'y',
      '\u01B4': 'y',
      '\u024F': 'y',
      '\u1EFF': 'y',
      '\u24E9': 'z',
      '\uFF5A': 'z',
      '\u017A': 'z',
      '\u1E91': 'z',
      '\u017C': 'z',
      '\u017E': 'z',
      '\u1E93': 'z',
      '\u1E95': 'z',
      '\u01B6': 'z',
      '\u0225': 'z',
      '\u0240': 'z',
      '\u2C6C': 'z',
      '\uA763': 'z',
      '\u0386': '\u0391',
      '\u0388': '\u0395',
      '\u0389': '\u0397',
      '\u038A': '\u0399',
      '\u03AA': '\u0399',
      '\u038C': '\u039F',
      '\u038E': '\u03A5',
      '\u03AB': '\u03A5',
      '\u038F': '\u03A9',
      '\u03AC': '\u03B1',
      '\u03AD': '\u03B5',
      '\u03AE': '\u03B7',
      '\u03AF': '\u03B9',
      '\u03CA': '\u03B9',
      '\u0390': '\u03B9',
      '\u03CC': '\u03BF',
      '\u03CD': '\u03C5',
      '\u03CB': '\u03C5',
      '\u03B0': '\u03C5',
      '\u03CE': '\u03C9',
      '\u03C2': '\u03C3',
      '\u2019': '\''
    };

    return diacritics;
  });

  S2.define('select2/data/base',[
    '../utils'
  ], function (Utils) {
    function BaseAdapter ($element, options) {
      BaseAdapter.__super__.constructor.call(this);
    }

    Utils.Extend(BaseAdapter, Utils.Observable);

    BaseAdapter.prototype.current = function (callback) {
      throw new Error('The `current` method must be defined in child classes.');
    };

    BaseAdapter.prototype.query = function (params, callback) {
      throw new Error('The `query` method must be defined in child classes.');
    };

    BaseAdapter.prototype.bind = function (container, $container) {
      // Can be implemented in subclasses
    };

    BaseAdapter.prototype.destroy = function () {
      // Can be implemented in subclasses
    };

    BaseAdapter.prototype.generateResultId = function (container, data) {
      var id = container.id + '-result-';

      id += Utils.generateChars(4);

      if (data.id != null) {
        id += '-' + data.id.toString();
      } else {
        id += '-' + Utils.generateChars(4);
      }
      return id;
    };

    return BaseAdapter;
  });

  S2.define('select2/data/select',[
    './base',
    '../utils',
    'jquery'
  ], function (BaseAdapter, Utils, $) {
    function SelectAdapter ($element, options) {
      this.$element = $element;
      this.options = options;

      SelectAdapter.__super__.constructor.call(this);
    }

    Utils.Extend(SelectAdapter, BaseAdapter);

    SelectAdapter.prototype.current = function (callback) {
      var self = this;

      var data = Array.prototype.map.call(
        this.$element[0].querySelectorAll(':checked'),
        function (selectedElement) {
          return self.item($(selectedElement));
        }
      );

      callback(data);
    };

    SelectAdapter.prototype.select = function (data) {
      var self = this;

      data.selected = true;

      // If data.element is a DOM node, use it instead
      if (
        data.element != null && data.element.tagName.toLowerCase() === 'option'
      ) {
        data.element.selected = true;

        this.$element.trigger('input').trigger('change');

        return;
      }

      if (this.$element.prop('multiple')) {
        this.current(function (currentData) {
          var val = [];

          data = [data];
          data.push.apply(data, currentData);

          for (var d = 0; d < data.length; d++) {
            var id = data[d].id;

            if (val.indexOf(id) === -1) {
              val.push(id);
            }
          }

          self.$element.val(val);
          self.$element.trigger('input').trigger('change');
        });
      } else {
        var val = data.id;

        this.$element.val(val);
        this.$element.trigger('input').trigger('change');
      }
    };

    SelectAdapter.prototype.unselect = function (data) {
      var self = this;

      if (!this.$element.prop('multiple')) {
        return;
      }

      data.selected = false;

      if (
        data.element != null &&
        data.element.tagName.toLowerCase() === 'option'
      ) {
        data.element.selected = false;

        this.$element.trigger('input').trigger('change');

        return;
      }

      this.current(function (currentData) {
        var val = [];

        for (var d = 0; d < currentData.length; d++) {
          var id = currentData[d].id;

          if (id !== data.id && val.indexOf(id) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);

        self.$element.trigger('input').trigger('change');
      });
    };

    SelectAdapter.prototype.bind = function (container, $container) {
      var self = this;

      this.container = container;

      container.on('select', function (params) {
        self.select(params.data);
      });

      container.on('unselect', function (params) {
        self.unselect(params.data);
      });
    };

    SelectAdapter.prototype.destroy = function () {
      // Remove anything added to child elements
      this.$element.find('*').each(function () {
        // Remove any custom data set by Select2
        Utils.RemoveData(this);
      });
    };

    SelectAdapter.prototype.query = function (params, callback) {
      var data = [];
      var self = this;

      var $options = this.$element.children();

      $options.each(function () {
        if (
          this.tagName.toLowerCase() !== 'option' &&
          this.tagName.toLowerCase() !== 'optgroup'
        ) {
          return;
        }

        var $option = $(this);

        var option = self.item($option);

        var matches = self.matches(params, option);

        if (matches !== null) {
          data.push(matches);
        }
      });

      callback({
        results: data
      });
    };

    SelectAdapter.prototype.addOptions = function ($options) {
      this.$element.append($options);
    };

    SelectAdapter.prototype.option = function (data) {
      var option;

      if (data.children) {
        option = document.createElement('optgroup');
        option.label = data.text;
      } else {
        option = document.createElement('option');

        if (option.textContent !== undefined) {
          option.textContent = data.text;
        } else {
          option.innerText = data.text;
        }
      }

      if (data.id !== undefined) {
        option.value = data.id;
      }

      if (data.disabled) {
        option.disabled = true;
      }

      if (data.selected) {
        option.selected = true;
      }

      if (data.title) {
        option.title = data.title;
      }

      var normalizedData = this._normalizeItem(data);
      normalizedData.element = option;

      // Override the option's data with the combined data
      Utils.StoreData(option, 'data', normalizedData);

      return $(option);
    };

    SelectAdapter.prototype.item = function ($option) {
      var data = {};

      data = Utils.GetData($option[0], 'data');

      if (data != null) {
        return data;
      }

      var option = $option[0];

      if (option.tagName.toLowerCase() === 'option') {
        data = {
          id: $option.val(),
          text: $option.text(),
          disabled: $option.prop('disabled'),
          selected: $option.prop('selected'),
          title: $option.prop('title')
        };
      } else if (option.tagName.toLowerCase() === 'optgroup') {
        data = {
          text: $option.prop('label'),
          children: [],
          title: $option.prop('title')
        };

        var $children = $option.children('option');
        var children = [];

        for (var c = 0; c < $children.length; c++) {
          var $child = $($children[c]);

          var child = this.item($child);

          children.push(child);
        }

        data.children = children;
      }

      data = this._normalizeItem(data);
      data.element = $option[0];

      Utils.StoreData($option[0], 'data', data);

      return data;
    };

    SelectAdapter.prototype._normalizeItem = function (item) {
      if (item !== Object(item)) {
        item = {
          id: item,
          text: item
        };
      }

      item = $.extend({}, {
        text: ''
      }, item);

      var defaults = {
        selected: false,
        disabled: false
      };

      if (item.id != null) {
        item.id = item.id.toString();
      }

      if (item.text != null) {
        item.text = item.text.toString();
      }

      if (item._resultId == null && item.id && this.container != null) {
        item._resultId = this.generateResultId(this.container, item);
      }

      return $.extend({}, defaults, item);
    };

    SelectAdapter.prototype.matches = function (params, data) {
      var matcher = this.options.get('matcher');

      return matcher(params, data);
    };

    return SelectAdapter;
  });

  S2.define('select2/data/array',[
    './select',
    '../utils',
    'jquery'
  ], function (SelectAdapter, Utils, $) {
    function ArrayAdapter ($element, options) {
      this._dataToConvert = options.get('data') || [];

      ArrayAdapter.__super__.constructor.call(this, $element, options);
    }

    Utils.Extend(ArrayAdapter, SelectAdapter);

    ArrayAdapter.prototype.bind = function (container, $container) {
      ArrayAdapter.__super__.bind.call(this, container, $container);

      this.addOptions(this.convertToOptions(this._dataToConvert));
    };

    ArrayAdapter.prototype.select = function (data) {
      var $option = this.$element.find('option').filter(function (i, elm) {
        return elm.value == data.id.toString();
      });

      if ($option.length === 0) {
        $option = this.option(data);

        this.addOptions($option);
      }

      ArrayAdapter.__super__.select.call(this, data);
    };

    ArrayAdapter.prototype.convertToOptions = function (data) {
      var self = this;

      var $existing = this.$element.find('option');
      var existingIds = $existing.map(function () {
        return self.item($(this)).id;
      }).get();

      var $options = [];

      // Filter out all items except for the one passed in the argument
      function onlyItem (item) {
        return function () {
          return $(this).val() == item.id;
        };
      }

      for (var d = 0; d < data.length; d++) {
        var item = this._normalizeItem(data[d]);

        // Skip items which were pre-loaded, only merge the data
        if (existingIds.indexOf(item.id) >= 0) {
          var $existingOption = $existing.filter(onlyItem(item));

          var existingData = this.item($existingOption);
          var newData = $.extend(true, {}, item, existingData);

          var $newOption = this.option(newData);

          $existingOption.replaceWith($newOption);

          continue;
        }

        var $option = this.option(item);

        if (item.children) {
          var $children = this.convertToOptions(item.children);

          $option.append($children);
        }

        $options.push($option);
      }

      return $options;
    };

    return ArrayAdapter;
  });

  S2.define('select2/data/ajax',[
    './array',
    '../utils',
    'jquery'
  ], function (ArrayAdapter, Utils, $) {
    function AjaxAdapter ($element, options) {
      this.ajaxOptions = this._applyDefaults(options.get('ajax'));

      if (this.ajaxOptions.processResults != null) {
        this.processResults = this.ajaxOptions.processResults;
      }

      AjaxAdapter.__super__.constructor.call(this, $element, options);
    }

    Utils.Extend(AjaxAdapter, ArrayAdapter);

    AjaxAdapter.prototype._applyDefaults = function (options) {
      var defaults = {
        data: function (params) {
          return $.extend({}, params, {
            q: params.term
          });
        },
        transport: function (params, success, failure) {
          var $request = $.ajax(params);

          $request.then(success);
          $request.fail(failure);

          return $request;
        }
      };

      return $.extend({}, defaults, options, true);
    };

    AjaxAdapter.prototype.processResults = function (results) {
      return results;
    };

    AjaxAdapter.prototype.query = function (params, callback) {
      var matches = [];
      var self = this;

      if (this._request != null) {
        // JSONP requests cannot always be aborted
        if (typeof this._request.abort === 'function') {
          this._request.abort();
        }

        this._request = null;
      }

      var options = $.extend({
        type: 'GET'
      }, this.ajaxOptions);

      if (typeof options.url === 'function') {
        options.url = options.url.call(this.$element, params);
      }

      if (typeof options.data === 'function') {
        options.data = options.data.call(this.$element, params);
      }

      function request () {
        var $request = options.transport(options, function (data) {
          var results = self.processResults(data, params);

          if (self.options.get('debug') && window.console && console.error) {
            // Check to make sure that the response included a `results` key.
            if (!results || !results.results || !Array.isArray(results.results)) {
              console.error(
                'Select2: The AJAX results did not return an array in the ' +
                '`results` key of the response.'
              );
            }
          }

          callback(results);
        }, function () {
          // Attempt to detect if a request was aborted
          // Only works if the transport exposes a status property
          if ('status' in $request &&
              ($request.status === 0 || $request.status === '0')) {
            return;
          }

          self.trigger('results:message', {
            message: 'errorLoading'
          });
        });

        self._request = $request;
      }

      if (this.ajaxOptions.delay && params.term != null) {
        if (this._queryTimeout) {
          window.clearTimeout(this._queryTimeout);
        }

        this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
      } else {
        request();
      }
    };

    return AjaxAdapter;
  });

  S2.define('select2/data/tags',[
    'jquery'
  ], function ($) {
    function Tags (decorated, $element, options) {
      var tags = options.get('tags');

      var createTag = options.get('createTag');

      if (createTag !== undefined) {
        this.createTag = createTag;
      }

      var insertTag = options.get('insertTag');

      if (insertTag !== undefined) {
          this.insertTag = insertTag;
      }

      decorated.call(this, $element, options);

      if (Array.isArray(tags)) {
        for (var t = 0; t < tags.length; t++) {
          var tag = tags[t];
          var item = this._normalizeItem(tag);

          var $option = this.option(item);

          this.$element.append($option);
        }
      }
    }

    Tags.prototype.query = function (decorated, params, callback) {
      var self = this;

      this._removeOldTags();

      if (params.term == null || params.page != null) {
        decorated.call(this, params, callback);
        return;
      }

      function wrapper (obj, child) {
        var data = obj.results;

        for (var i = 0; i < data.length; i++) {
          var option = data[i];

          var checkChildren = (
            option.children != null &&
            !wrapper({
              results: option.children
            }, true)
          );

          var optionText = (option.text || '').toUpperCase();
          var paramsTerm = (params.term || '').toUpperCase();

          var checkText = optionText === paramsTerm;

          if (checkText || checkChildren) {
            if (child) {
              return false;
            }

            obj.data = data;
            callback(obj);

            return;
          }
        }

        if (child) {
          return true;
        }

        var tag = self.createTag(params);

        if (tag != null) {
          var $option = self.option(tag);
          $option.attr('data-select2-tag', 'true');

          self.addOptions([$option]);

          self.insertTag(data, tag);
        }

        obj.results = data;

        callback(obj);
      }

      decorated.call(this, params, wrapper);
    };

    Tags.prototype.createTag = function (decorated, params) {
      if (params.term == null) {
        return null;
      }

      var term = params.term.trim();

      if (term === '') {
        return null;
      }

      return {
        id: term,
        text: term
      };
    };

    Tags.prototype.insertTag = function (_, data, tag) {
      data.unshift(tag);
    };

    Tags.prototype._removeOldTags = function (_) {
      var $options = this.$element.find('option[data-select2-tag]');

      $options.each(function () {
        if (this.selected) {
          return;
        }

        $(this).remove();
      });
    };

    return Tags;
  });

  S2.define('select2/data/tokenizer',[
    'jquery'
  ], function ($) {
    function Tokenizer (decorated, $element, options) {
      var tokenizer = options.get('tokenizer');

      if (tokenizer !== undefined) {
        this.tokenizer = tokenizer;
      }

      decorated.call(this, $element, options);
    }

    Tokenizer.prototype.bind = function (decorated, container, $container) {
      decorated.call(this, container, $container);

      this.$search =  container.dropdown.$search || container.selection.$search ||
        $container.find('.select2-search__field');
    };

    Tokenizer.prototype.query = function (decorated, params, callback) {
      var self = this;

      function createAndSelect (data) {
        // Normalize the data object so we can use it for checks
        var item = self._normalizeItem(data);

        // Check if the data object already exists as a tag
        // Select it if it doesn't
        var $existingOptions = self.$element.find('option').filter(function () {
          return $(this).val() === item.id;
        });

        // If an existing option wasn't found for it, create the option
        if (!$existingOptions.length) {
          var $option = self.option(item);
          $option.attr('data-select2-tag', true);

          self._removeOldTags();
          self.addOptions([$option]);
        }

        // Select the item, now that we know there is an option for it
        select(item);
      }

      function select (data) {
        self.trigger('select', {
          data: data
        });
      }

      params.term = params.term || '';

      var tokenData = this.tokenizer(params, this.options, createAndSelect);

      if (tokenData.term !== params.term) {
        // Replace the search term if we have the search box
        if (this.$search.length) {
          this.$search.val(tokenData.term);
          this.$search.trigger('focus');
        }

        params.term = tokenData.term;
      }

      decorated.call(this, params, callback);
    };

    Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
      var separators = options.get('tokenSeparators') || [];
      var term = params.term;
      var i = 0;

      var createTag = this.createTag || function (params) {
        return {
          id: params.term,
          text: params.term
        };
      };

      while (i < term.length) {
        var termChar = term[i];

        if (separators.indexOf(termChar) === -1) {
          i++;

          continue;
        }

        var part = term.substr(0, i);
        var partParams = $.extend({}, params, {
          term: part
        });

        var data = createTag(partParams);

        if (data == null) {
          i++;
          continue;
        }

        callback(data);

        // Reset the term to not include the tokenized portion
        term = term.substr(i + 1) || '';
        i = 0;
      }

      return {
        term: term
      };
    };

    return Tokenizer;
  });

  S2.define('select2/data/minimumInputLength',[

  ], function () {
    function MinimumInputLength (decorated, $e, options) {
      this.minimumInputLength = options.get('minimumInputLength');

      decorated.call(this, $e, options);
    }

    MinimumInputLength.prototype.query = function (decorated, params, callback) {
      params.term = params.term || '';

      if (params.term.length < this.minimumInputLength) {
        this.trigger('results:message', {
          message: 'inputTooShort',
          args: {
            minimum: this.minimumInputLength,
            input: params.term,
            params: params
          }
        });

        return;
      }

      decorated.call(this, params, callback);
    };

    return MinimumInputLength;
  });

  S2.define('select2/data/maximumInputLength',[

  ], function () {
    function MaximumInputLength (decorated, $e, options) {
      this.maximumInputLength = options.get('maximumInputLength');

      decorated.call(this, $e, options);
    }

    MaximumInputLength.prototype.query = function (decorated, params, callback) {
      params.term = params.term || '';

      if (this.maximumInputLength > 0 &&
          params.term.length > this.maximumInputLength) {
        this.trigger('results:message', {
          message: 'inputTooLong',
          args: {
            maximum: this.maximumInputLength,
            input: params.term,
            params: params
          }
        });

        return;
      }

      decorated.call(this, params, callback);
    };

    return MaximumInputLength;
  });

  S2.define('select2/data/maximumSelectionLength',[

  ], function (){
    function MaximumSelectionLength (decorated, $e, options) {
      this.maximumSelectionLength = options.get('maximumSelectionLength');

      decorated.call(this, $e, options);
    }

    MaximumSelectionLength.prototype.bind =
      function (decorated, container, $container) {
        var self = this;

        decorated.call(this, container, $container);

        container.on('select', function () {
          self._checkIfMaximumSelected();
        });
    };

    MaximumSelectionLength.prototype.query =
      function (decorated, params, callback) {
        var self = this;

        this._checkIfMaximumSelected(function () {
          decorated.call(self, params, callback);
        });
    };

    MaximumSelectionLength.prototype._checkIfMaximumSelected =
      function (_, successCallback) {
        var self = this;

        this.current(function (currentData) {
          var count = currentData != null ? currentData.length : 0;
          if (self.maximumSelectionLength > 0 &&
            count >= self.maximumSelectionLength) {
            self.trigger('results:message', {
              message: 'maximumSelected',
              args: {
                maximum: self.maximumSelectionLength
              }
            });
            return;
          }

          if (successCallback) {
            successCallback();
          }
        });
    };

    return MaximumSelectionLength;
  });

  S2.define('select2/dropdown',[
    'jquery',
    './utils'
  ], function ($, Utils) {
    function Dropdown ($element, options) {
      this.$element = $element;
      this.options = options;

      Dropdown.__super__.constructor.call(this);
    }

    Utils.Extend(Dropdown, Utils.Observable);

    Dropdown.prototype.render = function () {
      var $dropdown = $(
        '<span class="select2-dropdown">' +
          '<span class="select2-results"></span>' +
        '</span>'
      );

      $dropdown.attr('dir', this.options.get('dir'));

      this.$dropdown = $dropdown;

      return $dropdown;
    };

    Dropdown.prototype.bind = function () {
      // Should be implemented in subclasses
    };

    Dropdown.prototype.position = function ($dropdown, $container) {
      // Should be implemented in subclasses
    };

    Dropdown.prototype.destroy = function () {
      // Remove the dropdown from the DOM
      this.$dropdown.remove();
    };

    return Dropdown;
  });

  S2.define('select2/dropdown/search',[
    'jquery'
  ], function ($) {
    function Search () { }

    Search.prototype.render = function (decorated) {
      var $rendered = decorated.call(this);
      var searchLabel = this.options.get('translations').get('search');

      var $search = $(
        '<span class="select2-search select2-search--dropdown">' +
          '<input class="select2-search__field" type="search" tabindex="-1"' +
          ' autocorrect="off" autocapitalize="none"' +
          ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
        '</span>'
      );

      this.$searchContainer = $search;
      this.$search = $search.find('input');

      this.$search.prop('autocomplete', this.options.get('autocomplete'));
      this.$search.attr('aria-label', searchLabel());

      $rendered.prepend($search);

      return $rendered;
    };

    Search.prototype.bind = function (decorated, container, $container) {
      var self = this;

      var resultsId = container.id + '-results';

      decorated.call(this, container, $container);

      this.$search.on('keydown', function (evt) {
        self.trigger('keypress', evt);

        self._keyUpPrevented = evt.isDefaultPrevented();
      });

      // Workaround for browsers which do not support the `input` event
      // This will prevent double-triggering of events for browsers which support
      // both the `keyup` and `input` events.
      this.$search.on('input', function (evt) {
        // Unbind the duplicated `keyup` event
        $(this).off('keyup');
      });

      this.$search.on('keyup input', function (evt) {
        self.handleSearch(evt);
      });

      container.on('open', function () {
        self.$search.attr('tabindex', 0);
        self.$search.attr('aria-controls', resultsId);

        self.$search.trigger('focus');

        window.setTimeout(function () {
          self.$search.trigger('focus');
        }, 0);
      });

      container.on('close', function () {
        self.$search.attr('tabindex', -1);
        self.$search.removeAttr('aria-controls');
        self.$search.removeAttr('aria-activedescendant');

        self.$search.val('');
        self.$search.trigger('blur');
      });

      container.on('focus', function () {
        if (!container.isOpen()) {
          self.$search.trigger('focus');
        }
      });

      container.on('results:all', function (params) {
        if (params.query.term == null || params.query.term === '') {
          var showSearch = self.showSearch(params);

          if (showSearch) {
            self.$searchContainer[0].classList.remove('select2-search--hide');
          } else {
            self.$searchContainer[0].classList.add('select2-search--hide');
          }
        }
      });

      container.on('results:focus', function (params) {
        if (params.data._resultId) {
          self.$search.attr('aria-activedescendant', params.data._resultId);
        } else {
          self.$search.removeAttr('aria-activedescendant');
        }
      });
    };

    Search.prototype.handleSearch = function (evt) {
      if (!this._keyUpPrevented) {
        var input = this.$search.val();

        this.trigger('query', {
          term: input
        });
      }

      this._keyUpPrevented = false;
    };

    Search.prototype.showSearch = function (_, params) {
      return true;
    };

    return Search;
  });

  S2.define('select2/dropdown/hidePlaceholder',[

  ], function () {
    function HidePlaceholder (decorated, $element, options, dataAdapter) {
      this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

      decorated.call(this, $element, options, dataAdapter);
    }

    HidePlaceholder.prototype.append = function (decorated, data) {
      data.results = this.removePlaceholder(data.results);

      decorated.call(this, data);
    };

    HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
      if (typeof placeholder === 'string') {
        placeholder = {
          id: '',
          text: placeholder
        };
      }

      return placeholder;
    };

    HidePlaceholder.prototype.removePlaceholder = function (_, data) {
      var modifiedData = data.slice(0);

      for (var d = data.length - 1; d >= 0; d--) {
        var item = data[d];

        if (this.placeholder.id === item.id) {
          modifiedData.splice(d, 1);
        }
      }

      return modifiedData;
    };

    return HidePlaceholder;
  });

  S2.define('select2/dropdown/infiniteScroll',[
    'jquery'
  ], function ($) {
    function InfiniteScroll (decorated, $element, options, dataAdapter) {
      this.lastParams = {};

      decorated.call(this, $element, options, dataAdapter);

      this.$loadingMore = this.createLoadingMore();
      this.loading = false;
    }

    InfiniteScroll.prototype.append = function (decorated, data) {
      this.$loadingMore.remove();
      this.loading = false;

      decorated.call(this, data);

      if (this.showLoadingMore(data)) {
        this.$results.append(this.$loadingMore);
        this.loadMoreIfNeeded();
      }
    };

    InfiniteScroll.prototype.bind = function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('query', function (params) {
        self.lastParams = params;
        self.loading = true;
      });

      container.on('query:append', function (params) {
        self.lastParams = params;
        self.loading = true;
      });

      this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
    };

    InfiniteScroll.prototype.loadMoreIfNeeded = function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        this.$loadingMore[0]
      );

      if (this.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = this.$results.offset().top +
        this.$results.outerHeight(false);
      var loadingMoreOffset = this.$loadingMore.offset().top +
        this.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        this.loadMore();
      }
    };

    InfiniteScroll.prototype.loadMore = function () {
      this.loading = true;

      var params = $.extend({}, {page: 1}, this.lastParams);

      params.page++;

      this.trigger('query:append', params);
    };

    InfiniteScroll.prototype.showLoadingMore = function (_, data) {
      return data.pagination && data.pagination.more;
    };

    InfiniteScroll.prototype.createLoadingMore = function () {
      var $option = $(
        '<li ' +
        'class="select2-results__option select2-results__option--load-more"' +
        'role="option" aria-disabled="true"></li>'
      );

      var message = this.options.get('translations').get('loadingMore');

      $option.html(message(this.lastParams));

      return $option;
    };

    return InfiniteScroll;
  });

  S2.define('select2/dropdown/attachBody',[
    'jquery',
    '../utils'
  ], function ($, Utils) {
    function AttachBody (decorated, $element, options) {
      this.$dropdownParent = $(options.get('dropdownParent') || document.body);

      decorated.call(this, $element, options);
    }

    AttachBody.prototype.bind = function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('open', function () {
        self._showDropdown();
        self._attachPositioningHandler(container);

        // Must bind after the results handlers to ensure correct sizing
        self._bindContainerResultHandlers(container);
      });

      container.on('close', function () {
        self._hideDropdown();
        self._detachPositioningHandler(container);
      });

      this.$dropdownContainer.on('mousedown', function (evt) {
        evt.stopPropagation();
      });
    };

    AttachBody.prototype.destroy = function (decorated) {
      decorated.call(this);

      this.$dropdownContainer.remove();
    };

    AttachBody.prototype.position = function (decorated, $dropdown, $container) {
      // Clone all of the container classes
      $dropdown.attr('class', $container.attr('class'));

      $dropdown[0].classList.remove('select2');
      $dropdown[0].classList.add('select2-container--open');

      $dropdown.css({
        position: 'absolute',
        top: -999999
      });

      this.$container = $container;
    };

    AttachBody.prototype.render = function (decorated) {
      var $container = $('<span></span>');

      var $dropdown = decorated.call(this);
      $container.append($dropdown);

      this.$dropdownContainer = $container;

      return $container;
    };

    AttachBody.prototype._hideDropdown = function (decorated) {
      this.$dropdownContainer.detach();
    };

    AttachBody.prototype._bindContainerResultHandlers =
        function (decorated, container) {

      // These should only be bound once
      if (this._containerResultsHandlersBound) {
        return;
      }

      var self = this;

      container.on('results:all', function () {
        self._positionDropdown();
        self._resizeDropdown();
      });

      container.on('results:append', function () {
        self._positionDropdown();
        self._resizeDropdown();
      });

      container.on('results:message', function () {
        self._positionDropdown();
        self._resizeDropdown();
      });

      container.on('select', function () {
        self._positionDropdown();
        self._resizeDropdown();
      });

      container.on('unselect', function () {
        self._positionDropdown();
        self._resizeDropdown();
      });

      this._containerResultsHandlersBound = true;
    };

    AttachBody.prototype._attachPositioningHandler =
        function (decorated, container) {
      var self = this;

      var scrollEvent = 'scroll.select2.' + container.id;
      var resizeEvent = 'resize.select2.' + container.id;
      var orientationEvent = 'orientationchange.select2.' + container.id;

      var $watchers = this.$container.parents().filter(Utils.hasScroll);
      $watchers.each(function () {
        Utils.StoreData(this, 'select2-scroll-position', {
          x: $(this).scrollLeft(),
          y: $(this).scrollTop()
        });
      });

      $watchers.on(scrollEvent, function (ev) {
        var position = Utils.GetData(this, 'select2-scroll-position');
        $(this).scrollTop(position.y);
      });

      $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
        function (e) {
        self._positionDropdown();
        self._resizeDropdown();
      });
    };

    AttachBody.prototype._detachPositioningHandler =
        function (decorated, container) {
      var scrollEvent = 'scroll.select2.' + container.id;
      var resizeEvent = 'resize.select2.' + container.id;
      var orientationEvent = 'orientationchange.select2.' + container.id;

      var $watchers = this.$container.parents().filter(Utils.hasScroll);
      $watchers.off(scrollEvent);

      $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
    };

    AttachBody.prototype._positionDropdown = function () {
      var $window = $(window);

      var isCurrentlyAbove = this.$dropdown[0].classList
        .contains('select2-dropdown--above');
      var isCurrentlyBelow = this.$dropdown[0].classList
        .contains('select2-dropdown--below');

      var newDirection = null;

      var offset = this.$container.offset();

      offset.bottom = offset.top + this.$container.outerHeight(false);

      var container = {
        height: this.$container.outerHeight(false)
      };

      container.top = offset.top;
      container.bottom = offset.top + container.height;

      var dropdown = {
        height: this.$dropdown.outerHeight(false)
      };

      var viewport = {
        top: $window.scrollTop(),
        bottom: $window.scrollTop() + $window.height()
      };

      var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
      var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

      var css = {
        left: offset.left,
        top: container.bottom
      };

      // Determine what the parent element is to use for calculating the offset
      var $offsetParent = this.$dropdownParent;

      // For statically positioned elements, we need to get the element
      // that is determining the offset
      if ($offsetParent.css('position') === 'static') {
        $offsetParent = $offsetParent.offsetParent();
      }

      var parentOffset = {
        top: 0,
        left: 0
      };

      if (
        $.contains(document.body, $offsetParent[0]) ||
        $offsetParent[0].isConnected
        ) {
        parentOffset = $offsetParent.offset();
      }

      css.top -= parentOffset.top;
      css.left -= parentOffset.left;

      if (!isCurrentlyAbove && !isCurrentlyBelow) {
        newDirection = 'below';
      }

      if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
        newDirection = 'above';
      } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
        newDirection = 'below';
      }

      if (newDirection == 'above' ||
        (isCurrentlyAbove && newDirection !== 'below')) {
        css.top = container.top - parentOffset.top - dropdown.height;
      }

      if (newDirection != null) {
        this.$dropdown[0].classList.remove('select2-dropdown--below');
        this.$dropdown[0].classList.remove('select2-dropdown--above');
        this.$dropdown[0].classList.add('select2-dropdown--' + newDirection);

        this.$container[0].classList.remove('select2-container--below');
        this.$container[0].classList.remove('select2-container--above');
        this.$container[0].classList.add('select2-container--' + newDirection);
      }

      this.$dropdownContainer.css(css);
    };

    AttachBody.prototype._resizeDropdown = function () {
      var css = {
        width: this.$container.outerWidth(false) + 'px'
      };

      if (this.options.get('dropdownAutoWidth')) {
        css.minWidth = css.width;
        css.position = 'relative';
        css.width = 'auto';
      }

      this.$dropdown.css(css);
    };

    AttachBody.prototype._showDropdown = function (decorated) {
      this.$dropdownContainer.appendTo(this.$dropdownParent);

      this._positionDropdown();
      this._resizeDropdown();
    };

    return AttachBody;
  });

  S2.define('select2/dropdown/minimumResultsForSearch',[

  ], function () {
    function countResults (data) {
      var count = 0;

      for (var d = 0; d < data.length; d++) {
        var item = data[d];

        if (item.children) {
          count += countResults(item.children);
        } else {
          count++;
        }
      }

      return count;
    }

    function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
      this.minimumResultsForSearch = options.get('minimumResultsForSearch');

      if (this.minimumResultsForSearch < 0) {
        this.minimumResultsForSearch = Infinity;
      }

      decorated.call(this, $element, options, dataAdapter);
    }

    MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
      if (countResults(params.data.results) < this.minimumResultsForSearch) {
        return false;
      }

      return decorated.call(this, params);
    };

    return MinimumResultsForSearch;
  });

  S2.define('select2/dropdown/selectOnClose',[
    '../utils'
  ], function (Utils) {
    function SelectOnClose () { }

    SelectOnClose.prototype.bind = function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('close', function (params) {
        self._handleSelectOnClose(params);
      });
    };

    SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
      if (params && params.originalSelect2Event != null) {
        var event = params.originalSelect2Event;

        // Don't select an item if the close event was triggered from a select or
        // unselect event
        if (event._type === 'select' || event._type === 'unselect') {
          return;
        }
      }

      var $highlightedResults = this.getHighlightedResults();

      // Only select highlighted results
      if ($highlightedResults.length < 1) {
        return;
      }

      var data = Utils.GetData($highlightedResults[0], 'data');

      // Don't re-select already selected resulte
      if (
        (data.element != null && data.element.selected) ||
        (data.element == null && data.selected)
      ) {
        return;
      }

      this.trigger('select', {
          data: data
      });
    };

    return SelectOnClose;
  });

  S2.define('select2/dropdown/closeOnSelect',[

  ], function () {
    function CloseOnSelect () { }

    CloseOnSelect.prototype.bind = function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function (evt) {
        self._selectTriggered(evt);
      });

      container.on('unselect', function (evt) {
        self._selectTriggered(evt);
      });
    };

    CloseOnSelect.prototype._selectTriggered = function (_, evt) {
      var originalEvent = evt.originalEvent;

      // Don't close if the control key is being held
      if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
        return;
      }

      this.trigger('close', {
        originalEvent: originalEvent,
        originalSelect2Event: evt
      });
    };

    return CloseOnSelect;
  });

  S2.define('select2/dropdown/dropdownCss',[
    '../utils'
  ], function (Utils) {
    function DropdownCSS () { }

    DropdownCSS.prototype.render = function (decorated) {
      var $dropdown = decorated.call(this);

      var dropdownCssClass = this.options.get('dropdownCssClass') || '';

      if (dropdownCssClass.indexOf(':all:') !== -1) {
        dropdownCssClass = dropdownCssClass.replace(':all:', '');

        Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0]);
      }

      $dropdown.addClass(dropdownCssClass);

      return $dropdown;
    };

    return DropdownCSS;
  });

  S2.define('select2/dropdown/tagsSearchHighlight',[
    '../utils'
  ], function (Utils) {
    function TagsSearchHighlight () { }

    TagsSearchHighlight.prototype.highlightFirstItem = function (decorated) {
      var $options = this.$results
      .find(
        '.select2-results__option--selectable' +
        ':not(.select2-results__option--selected)'
      );

      if ($options.length > 0) {
        var $firstOption = $options.first();
        var data = Utils.GetData($firstOption[0], 'data');
        var firstElement = data.element;

        if (firstElement && firstElement.getAttribute) {
          if (firstElement.getAttribute('data-select2-tag') === 'true') {
            $firstOption.trigger('mouseenter');

            return;
          }
        }
      }

      decorated.call(this);
    };

    return TagsSearchHighlight;
  });

  S2.define('select2/i18n/en',[],function () {
    // English
    return {
      errorLoading: function () {
        return 'The results could not be loaded.';
      },
      inputTooLong: function (args) {
        var overChars = args.input.length - args.maximum;

        var message = 'Please delete ' + overChars + ' character';

        if (overChars != 1) {
          message += 's';
        }

        return message;
      },
      inputTooShort: function (args) {
        var remainingChars = args.minimum - args.input.length;

        var message = 'Please enter ' + remainingChars + ' or more characters';

        return message;
      },
      loadingMore: function () {
        return 'Loading more results…';
      },
      maximumSelected: function (args) {
        var message = 'You can only select ' + args.maximum + ' item';

        if (args.maximum != 1) {
          message += 's';
        }

        return message;
      },
      noResults: function () {
        return 'No results found';
      },
      searching: function () {
        return 'Searching…';
      },
      removeAllItems: function () {
        return 'Remove all items';
      },
      removeItem: function () {
        return 'Remove item';
      },
      search: function() {
        return 'Search';
      }
    };
  });

  S2.define('select2/defaults',[
    'jquery',

    './results',

    './selection/single',
    './selection/multiple',
    './selection/placeholder',
    './selection/allowClear',
    './selection/search',
    './selection/selectionCss',
    './selection/eventRelay',

    './utils',
    './translation',
    './diacritics',

    './data/select',
    './data/array',
    './data/ajax',
    './data/tags',
    './data/tokenizer',
    './data/minimumInputLength',
    './data/maximumInputLength',
    './data/maximumSelectionLength',

    './dropdown',
    './dropdown/search',
    './dropdown/hidePlaceholder',
    './dropdown/infiniteScroll',
    './dropdown/attachBody',
    './dropdown/minimumResultsForSearch',
    './dropdown/selectOnClose',
    './dropdown/closeOnSelect',
    './dropdown/dropdownCss',
    './dropdown/tagsSearchHighlight',

    './i18n/en'
  ], function ($,

               ResultsList,

               SingleSelection, MultipleSelection, Placeholder, AllowClear,
               SelectionSearch, SelectionCSS, EventRelay,

               Utils, Translation, DIACRITICS,

               SelectData, ArrayData, AjaxData, Tags, Tokenizer,
               MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

               Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
               AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,
               DropdownCSS, TagsSearchHighlight,

               EnglishTranslation) {
    function Defaults () {
      this.reset();
    }

    Defaults.prototype.apply = function (options) {
      options = $.extend(true, {}, this.defaults, options);

      if (options.dataAdapter == null) {
        if (options.ajax != null) {
          options.dataAdapter = AjaxData;
        } else if (options.data != null) {
          options.dataAdapter = ArrayData;
        } else {
          options.dataAdapter = SelectData;
        }

        if (options.minimumInputLength > 0) {
          options.dataAdapter = Utils.Decorate(
            options.dataAdapter,
            MinimumInputLength
          );
        }

        if (options.maximumInputLength > 0) {
          options.dataAdapter = Utils.Decorate(
            options.dataAdapter,
            MaximumInputLength
          );
        }

        if (options.maximumSelectionLength > 0) {
          options.dataAdapter = Utils.Decorate(
            options.dataAdapter,
            MaximumSelectionLength
          );
        }

        if (options.tags) {
          options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
        }

        if (options.tokenSeparators != null || options.tokenizer != null) {
          options.dataAdapter = Utils.Decorate(
            options.dataAdapter,
            Tokenizer
          );
        }
      }

      if (options.resultsAdapter == null) {
        options.resultsAdapter = ResultsList;

        if (options.ajax != null) {
          options.resultsAdapter = Utils.Decorate(
            options.resultsAdapter,
            InfiniteScroll
          );
        }

        if (options.placeholder != null) {
          options.resultsAdapter = Utils.Decorate(
            options.resultsAdapter,
            HidePlaceholder
          );
        }

        if (options.selectOnClose) {
          options.resultsAdapter = Utils.Decorate(
            options.resultsAdapter,
            SelectOnClose
          );
        }

        if (options.tags) {
          options.resultsAdapter = Utils.Decorate(
            options.resultsAdapter,
            TagsSearchHighlight
          );
        }
      }

      if (options.dropdownAdapter == null) {
        if (options.multiple) {
          options.dropdownAdapter = Dropdown;
        } else {
          var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

          options.dropdownAdapter = SearchableDropdown;
        }

        if (options.minimumResultsForSearch !== 0) {
          options.dropdownAdapter = Utils.Decorate(
            options.dropdownAdapter,
            MinimumResultsForSearch
          );
        }

        if (options.closeOnSelect) {
          options.dropdownAdapter = Utils.Decorate(
            options.dropdownAdapter,
            CloseOnSelect
          );
        }

        if (options.dropdownCssClass != null) {
          options.dropdownAdapter = Utils.Decorate(
            options.dropdownAdapter,
            DropdownCSS
          );
        }

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          AttachBody
        );
      }

      if (options.selectionAdapter == null) {
        if (options.multiple) {
          options.selectionAdapter = MultipleSelection;
        } else {
          options.selectionAdapter = SingleSelection;
        }

        // Add the placeholder mixin if a placeholder was specified
        if (options.placeholder != null) {
          options.selectionAdapter = Utils.Decorate(
            options.selectionAdapter,
            Placeholder
          );
        }

        if (options.allowClear) {
          options.selectionAdapter = Utils.Decorate(
            options.selectionAdapter,
            AllowClear
          );
        }

        if (options.multiple) {
          options.selectionAdapter = Utils.Decorate(
            options.selectionAdapter,
            SelectionSearch
          );
        }

        if (options.selectionCssClass != null) {
          options.selectionAdapter = Utils.Decorate(
            options.selectionAdapter,
            SelectionCSS
          );
        }

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          EventRelay
        );
      }

      // If the defaults were not previously applied from an element, it is
      // possible for the language option to have not been resolved
      options.language = this._resolveLanguage(options.language);

      // Always fall back to English since it will always be complete
      options.language.push('en');

      var uniqueLanguages = [];

      for (var l = 0; l < options.language.length; l++) {
        var language = options.language[l];

        if (uniqueLanguages.indexOf(language) === -1) {
          uniqueLanguages.push(language);
        }
      }

      options.language = uniqueLanguages;

      options.translations = this._processTranslations(
        options.language,
        options.debug
      );

      return options;
    };

    Defaults.prototype.reset = function () {
      function stripDiacritics (text) {
        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
        function match(a) {
          return DIACRITICS[a] || a;
        }

        return text.replace(/[^\u0000-\u007E]/g, match);
      }

      function matcher (params, data) {
        // Always return the object if there is nothing to compare
        if (params.term == null || params.term.trim() === '') {
          return data;
        }

        // Do a recursive check for options with children
        if (data.children && data.children.length > 0) {
          // Clone the data object if there are children
          // This is required as we modify the object to remove any non-matches
          var match = $.extend(true, {}, data);

          // Check each child of the option
          for (var c = data.children.length - 1; c >= 0; c--) {
            var child = data.children[c];

            var matches = matcher(params, child);

            // If there wasn't a match, remove the object in the array
            if (matches == null) {
              match.children.splice(c, 1);
            }
          }

          // If any children matched, return the new object
          if (match.children.length > 0) {
            return match;
          }

          // If there were no matching children, check just the plain object
          return matcher(params, match);
        }

        var original = stripDiacritics(data.text).toUpperCase();
        var term = stripDiacritics(params.term).toUpperCase();

        // Check if the text contains the term
        if (original.indexOf(term) > -1) {
          return data;
        }

        // If it doesn't contain the term, don't return anything
        return null;
      }

      this.defaults = {
        amdLanguageBase: './i18n/',
        autocomplete: 'off',
        closeOnSelect: true,
        debug: false,
        dropdownAutoWidth: false,
        escapeMarkup: Utils.escapeMarkup,
        language: {},
        matcher: matcher,
        minimumInputLength: 0,
        maximumInputLength: 0,
        maximumSelectionLength: 0,
        minimumResultsForSearch: 0,
        selectOnClose: false,
        scrollAfterSelect: false,
        sorter: function (data) {
          return data;
        },
        templateResult: function (result) {
          return result.text;
        },
        templateSelection: function (selection) {
          return selection.text;
        },
        theme: 'default',
        width: 'resolve'
      };
    };

    Defaults.prototype.applyFromElement = function (options, $element) {
      var optionLanguage = options.language;
      var defaultLanguage = this.defaults.language;
      var elementLanguage = $element.prop('lang');
      var parentLanguage = $element.closest('[lang]').prop('lang');

      var languages = Array.prototype.concat.call(
        this._resolveLanguage(elementLanguage),
        this._resolveLanguage(optionLanguage),
        this._resolveLanguage(defaultLanguage),
        this._resolveLanguage(parentLanguage)
      );

      options.language = languages;

      return options;
    };

    Defaults.prototype._resolveLanguage = function (language) {
      if (!language) {
        return [];
      }

      if ($.isEmptyObject(language)) {
        return [];
      }

      if ($.isPlainObject(language)) {
        return [language];
      }

      var languages;

      if (!Array.isArray(language)) {
        languages = [language];
      } else {
        languages = language;
      }

      var resolvedLanguages = [];

      for (var l = 0; l < languages.length; l++) {
        resolvedLanguages.push(languages[l]);

        if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
          // Extract the region information if it is included
          var languageParts = languages[l].split('-');
          var baseLanguage = languageParts[0];

          resolvedLanguages.push(baseLanguage);
        }
      }

      return resolvedLanguages;
    };

    Defaults.prototype._processTranslations = function (languages, debug) {
      var translations = new Translation();

      for (var l = 0; l < languages.length; l++) {
        var languageData = new Translation();

        var language = languages[l];

        if (typeof language === 'string') {
          try {
            // Try to load it with the original name
            languageData = Translation.loadPath(language);
          } catch (e) {
            try {
              // If we couldn't load it, check if it wasn't the full path
              language = this.defaults.amdLanguageBase + language;
              languageData = Translation.loadPath(language);
            } catch (ex) {
              // The translation could not be loaded at all. Sometimes this is
              // because of a configuration problem, other times this can be
              // because of how Select2 helps load all possible translation files
              if (debug && window.console && console.warn) {
                console.warn(
                  'Select2: The language file for "' + language + '" could ' +
                  'not be automatically loaded. A fallback will be used instead.'
                );
              }
            }
          }
        } else if ($.isPlainObject(language)) {
          languageData = new Translation(language);
        } else {
          languageData = language;
        }

        translations.extend(languageData);
      }

      return translations;
    };

    Defaults.prototype.set = function (key, value) {
      var camelKey = $.camelCase(key);

      var data = {};
      data[camelKey] = value;

      var convertedData = Utils._convertData(data);

      $.extend(true, this.defaults, convertedData);
    };

    var defaults = new Defaults();

    return defaults;
  });

  S2.define('select2/options',[
    'jquery',
    './defaults',
    './utils'
  ], function ($, Defaults, Utils) {
    function Options (options, $element) {
      this.options = options;

      if ($element != null) {
        this.fromElement($element);
      }

      if ($element != null) {
        this.options = Defaults.applyFromElement(this.options, $element);
      }

      this.options = Defaults.apply(this.options);
    }

    Options.prototype.fromElement = function ($e) {
      var excludedData = ['select2'];

      if (this.options.multiple == null) {
        this.options.multiple = $e.prop('multiple');
      }

      if (this.options.disabled == null) {
        this.options.disabled = $e.prop('disabled');
      }

      if (this.options.autocomplete == null && $e.prop('autocomplete')) {
        this.options.autocomplete = $e.prop('autocomplete');
      }

      if (this.options.dir == null) {
        if ($e.prop('dir')) {
          this.options.dir = $e.prop('dir');
        } else if ($e.closest('[dir]').prop('dir')) {
          this.options.dir = $e.closest('[dir]').prop('dir');
        } else {
          this.options.dir = 'ltr';
        }
      }

      $e.prop('disabled', this.options.disabled);
      $e.prop('multiple', this.options.multiple);

      if (Utils.GetData($e[0], 'select2Tags')) {
        if (this.options.debug && window.console && console.warn) {
          console.warn(
            'Select2: The `data-select2-tags` attribute has been changed to ' +
            'use the `data-data` and `data-tags="true"` attributes and will be ' +
            'removed in future versions of Select2.'
          );
        }

        Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
        Utils.StoreData($e[0], 'tags', true);
      }

      if (Utils.GetData($e[0], 'ajaxUrl')) {
        if (this.options.debug && window.console && console.warn) {
          console.warn(
            'Select2: The `data-ajax-url` attribute has been changed to ' +
            '`data-ajax--url` and support for the old attribute will be removed' +
            ' in future versions of Select2.'
          );
        }

        $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
        Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
      }

      var dataset = {};

      function upperCaseLetter(_, letter) {
        return letter.toUpperCase();
      }

      // Pre-load all of the attributes which are prefixed with `data-`
      for (var attr = 0; attr < $e[0].attributes.length; attr++) {
        var attributeName = $e[0].attributes[attr].name;
        var prefix = 'data-';

        if (attributeName.substr(0, prefix.length) == prefix) {
          // Get the contents of the attribute after `data-`
          var dataName = attributeName.substring(prefix.length);

          // Get the data contents from the consistent source
          // This is more than likely the jQuery data helper
          var dataValue = Utils.GetData($e[0], dataName);

          // camelCase the attribute name to match the spec
          var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

          // Store the data attribute contents into the dataset since
          dataset[camelDataName] = dataValue;
        }
      }

      // Prefer the element's `dataset` attribute if it exists
      // jQuery 1.x does not correctly handle data attributes with multiple dashes
      if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
        dataset = $.extend(true, {}, $e[0].dataset, dataset);
      }

      // Prefer our internal data cache if it exists
      var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

      data = Utils._convertData(data);

      for (var key in data) {
        if (excludedData.indexOf(key) > -1) {
          continue;
        }

        if ($.isPlainObject(this.options[key])) {
          $.extend(this.options[key], data[key]);
        } else {
          this.options[key] = data[key];
        }
      }

      return this;
    };

    Options.prototype.get = function (key) {
      return this.options[key];
    };

    Options.prototype.set = function (key, val) {
      this.options[key] = val;
    };

    return Options;
  });

  S2.define('select2/core',[
    'jquery',
    './options',
    './utils',
    './keys'
  ], function ($, Options, Utils, KEYS) {
    var Select2 = function ($element, options) {
      if (Utils.GetData($element[0], 'select2') != null) {
        Utils.GetData($element[0], 'select2').destroy();
      }

      this.$element = $element;

      this.id = this._generateId($element);

      options = options || {};

      this.options = new Options(options, $element);

      Select2.__super__.constructor.call(this);

      // Set up the tabindex

      var tabindex = $element.attr('tabindex') || 0;
      Utils.StoreData($element[0], 'old-tabindex', tabindex);
      $element.attr('tabindex', '-1');

      // Set up containers and adapters

      var DataAdapter = this.options.get('dataAdapter');
      this.dataAdapter = new DataAdapter($element, this.options);

      var $container = this.render();

      this._placeContainer($container);

      var SelectionAdapter = this.options.get('selectionAdapter');
      this.selection = new SelectionAdapter($element, this.options);
      this.$selection = this.selection.render();

      this.selection.position(this.$selection, $container);

      var DropdownAdapter = this.options.get('dropdownAdapter');
      this.dropdown = new DropdownAdapter($element, this.options);
      this.$dropdown = this.dropdown.render();

      this.dropdown.position(this.$dropdown, $container);

      var ResultsAdapter = this.options.get('resultsAdapter');
      this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
      this.$results = this.results.render();

      this.results.position(this.$results, this.$dropdown);

      // Bind events

      var self = this;

      // Bind the container to all of the adapters
      this._bindAdapters();

      // Register any DOM event handlers
      this._registerDomEvents();

      // Register any internal event handlers
      this._registerDataEvents();
      this._registerSelectionEvents();
      this._registerDropdownEvents();
      this._registerResultsEvents();
      this._registerEvents();

      // Set the initial state
      this.dataAdapter.current(function (initialData) {
        self.trigger('selection:update', {
          data: initialData
        });
      });

      // Hide the original select
      $element[0].classList.add('select2-hidden-accessible');
      $element.attr('aria-hidden', 'true');

      // Synchronize any monitored attributes
      this._syncAttributes();

      Utils.StoreData($element[0], 'select2', this);

      // Ensure backwards compatibility with $element.data('select2').
      $element.data('select2', this);
    };

    Utils.Extend(Select2, Utils.Observable);

    Select2.prototype._generateId = function ($element) {
      var id = '';

      if ($element.attr('id') != null) {
        id = $element.attr('id');
      } else if ($element.attr('name') != null) {
        id = $element.attr('name') + '-' + Utils.generateChars(2);
      } else {
        id = Utils.generateChars(4);
      }

      id = id.replace(/(:|\.|\[|\]|,)/g, '');
      id = 'select2-' + id;

      return id;
    };

    Select2.prototype._placeContainer = function ($container) {
      $container.insertAfter(this.$element);

      var width = this._resolveWidth(this.$element, this.options.get('width'));

      if (width != null) {
        $container.css('width', width);
      }
    };

    Select2.prototype._resolveWidth = function ($element, method) {
      var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

      if (method == 'resolve') {
        var styleWidth = this._resolveWidth($element, 'style');

        if (styleWidth != null) {
          return styleWidth;
        }

        return this._resolveWidth($element, 'element');
      }

      if (method == 'element') {
        var elementWidth = $element.outerWidth(false);

        if (elementWidth <= 0) {
          return 'auto';
        }

        return elementWidth + 'px';
      }

      if (method == 'style') {
        var style = $element.attr('style');

        if (typeof(style) !== 'string') {
          return null;
        }

        var attrs = style.split(';');

        for (var i = 0, l = attrs.length; i < l; i = i + 1) {
          var attr = attrs[i].replace(/\s/g, '');
          var matches = attr.match(WIDTH);

          if (matches !== null && matches.length >= 1) {
            return matches[1];
          }
        }

        return null;
      }

      if (method == 'computedstyle') {
        var computedStyle = window.getComputedStyle($element[0]);

        return computedStyle.width;
      }

      return method;
    };

    Select2.prototype._bindAdapters = function () {
      this.dataAdapter.bind(this, this.$container);
      this.selection.bind(this, this.$container);

      this.dropdown.bind(this, this.$container);
      this.results.bind(this, this.$container);
    };

    Select2.prototype._registerDomEvents = function () {
      var self = this;

      this.$element.on('change.select2', function () {
        self.dataAdapter.current(function (data) {
          self.trigger('selection:update', {
            data: data
          });
        });
      });

      this.$element.on('focus.select2', function (evt) {
        self.trigger('focus', evt);
      });

      this._syncA = Utils.bind(this._syncAttributes, this);
      this._syncS = Utils.bind(this._syncSubtree, this);

      this._observer = new window.MutationObserver(function (mutations) {
        self._syncA();
        self._syncS(mutations);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    };

    Select2.prototype._registerDataEvents = function () {
      var self = this;

      this.dataAdapter.on('*', function (name, params) {
        self.trigger(name, params);
      });
    };

    Select2.prototype._registerSelectionEvents = function () {
      var self = this;
      var nonRelayEvents = ['toggle', 'focus'];

      this.selection.on('toggle', function () {
        self.toggleDropdown();
      });

      this.selection.on('focus', function (params) {
        self.focus(params);
      });

      this.selection.on('*', function (name, params) {
        if (nonRelayEvents.indexOf(name) !== -1) {
          return;
        }

        self.trigger(name, params);
      });
    };

    Select2.prototype._registerDropdownEvents = function () {
      var self = this;

      this.dropdown.on('*', function (name, params) {
        self.trigger(name, params);
      });
    };

    Select2.prototype._registerResultsEvents = function () {
      var self = this;

      this.results.on('*', function (name, params) {
        self.trigger(name, params);
      });
    };

    Select2.prototype._registerEvents = function () {
      var self = this;

      this.on('open', function () {
        self.$container[0].classList.add('select2-container--open');
      });

      this.on('close', function () {
        self.$container[0].classList.remove('select2-container--open');
      });

      this.on('enable', function () {
        self.$container[0].classList.remove('select2-container--disabled');
      });

      this.on('disable', function () {
        self.$container[0].classList.add('select2-container--disabled');
      });

      this.on('blur', function () {
        self.$container[0].classList.remove('select2-container--focus');
      });

      this.on('query', function (params) {
        if (!self.isOpen()) {
          self.trigger('open', {});
        }

        this.dataAdapter.query(params, function (data) {
          self.trigger('results:all', {
            data: data,
            query: params
          });
        });
      });

      this.on('query:append', function (params) {
        this.dataAdapter.query(params, function (data) {
          self.trigger('results:append', {
            data: data,
            query: params
          });
        });
      });

      this.on('keypress', function (evt) {
        var key = evt.which;

        if (self.isOpen()) {
          if (key === KEYS.ESC || (key === KEYS.UP && evt.altKey)) {
            self.close(evt);

            evt.preventDefault();
          } else if (key === KEYS.ENTER || key === KEYS.TAB) {
            self.trigger('results:select', {});

            evt.preventDefault();
          } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
            self.trigger('results:toggle', {});

            evt.preventDefault();
          } else if (key === KEYS.UP) {
            self.trigger('results:previous', {});

            evt.preventDefault();
          } else if (key === KEYS.DOWN) {
            self.trigger('results:next', {});

            evt.preventDefault();
          }
        } else {
          if (key === KEYS.ENTER || key === KEYS.SPACE ||
              (key === KEYS.DOWN && evt.altKey)) {
            self.open();

            evt.preventDefault();
          }
        }
      });
    };

    Select2.prototype._syncAttributes = function () {
      this.options.set('disabled', this.$element.prop('disabled'));

      if (this.isDisabled()) {
        if (this.isOpen()) {
          this.close();
        }

        this.trigger('disable', {});
      } else {
        this.trigger('enable', {});
      }
    };

    Select2.prototype._isChangeMutation = function (mutations) {
      var self = this;

      if (mutations.addedNodes && mutations.addedNodes.length > 0) {
        for (var n = 0; n < mutations.addedNodes.length; n++) {
          var node = mutations.addedNodes[n];

          if (node.selected) {
            return true;
          }
        }
      } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
        return true;
      } else if (Array.isArray(mutations)) {
        return mutations.some(function (mutation) {
          return self._isChangeMutation(mutation);
        });
      }

      return false;
    };

    Select2.prototype._syncSubtree = function (mutations) {
      var changed = this._isChangeMutation(mutations);
      var self = this;

      // Only re-pull the data if we think there is a change
      if (changed) {
        this.dataAdapter.current(function (currentData) {
          self.trigger('selection:update', {
            data: currentData
          });
        });
      }
    };

    /**
     * Override the trigger method to automatically trigger pre-events when
     * there are events that can be prevented.
     */
    Select2.prototype.trigger = function (name, args) {
      var actualTrigger = Select2.__super__.trigger;
      var preTriggerMap = {
        'open': 'opening',
        'close': 'closing',
        'select': 'selecting',
        'unselect': 'unselecting',
        'clear': 'clearing'
      };

      if (args === undefined) {
        args = {};
      }

      if (name in preTriggerMap) {
        var preTriggerName = preTriggerMap[name];
        var preTriggerArgs = {
          prevented: false,
          name: name,
          args: args
        };

        actualTrigger.call(this, preTriggerName, preTriggerArgs);

        if (preTriggerArgs.prevented) {
          args.prevented = true;

          return;
        }
      }

      actualTrigger.call(this, name, args);
    };

    Select2.prototype.toggleDropdown = function () {
      if (this.isDisabled()) {
        return;
      }

      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    };

    Select2.prototype.open = function () {
      if (this.isOpen()) {
        return;
      }

      if (this.isDisabled()) {
        return;
      }

      this.trigger('query', {});
    };

    Select2.prototype.close = function (evt) {
      if (!this.isOpen()) {
        return;
      }

      this.trigger('close', { originalEvent : evt });
    };

    /**
     * Helper method to abstract the "enabled" (not "disabled") state of this
     * object.
     *
     * @return {true} if the instance is not disabled.
     * @return {false} if the instance is disabled.
     */
    Select2.prototype.isEnabled = function () {
      return !this.isDisabled();
    };

    /**
     * Helper method to abstract the "disabled" state of this object.
     *
     * @return {true} if the disabled option is true.
     * @return {false} if the disabled option is false.
     */
    Select2.prototype.isDisabled = function () {
      return this.options.get('disabled');
    };

    Select2.prototype.isOpen = function () {
      return this.$container[0].classList.contains('select2-container--open');
    };

    Select2.prototype.hasFocus = function () {
      return this.$container[0].classList.contains('select2-container--focus');
    };

    Select2.prototype.focus = function (data) {
      // No need to re-trigger focus events if we are already focused
      if (this.hasFocus()) {
        return;
      }

      this.$container[0].classList.add('select2-container--focus');
      this.trigger('focus', {});
    };

    Select2.prototype.enable = function (args) {
      if (this.options.get('debug') && window.console && console.warn) {
        console.warn(
          'Select2: The `select2("enable")` method has been deprecated and will' +
          ' be removed in later Select2 versions. Use $element.prop("disabled")' +
          ' instead.'
        );
      }

      if (args == null || args.length === 0) {
        args = [true];
      }

      var disabled = !args[0];

      this.$element.prop('disabled', disabled);
    };

    Select2.prototype.data = function () {
      if (this.options.get('debug') &&
          arguments.length > 0 && window.console && console.warn) {
        console.warn(
          'Select2: Data can no longer be set using `select2("data")`. You ' +
          'should consider setting the value instead using `$element.val()`.'
        );
      }

      var data = [];

      this.dataAdapter.current(function (currentData) {
        data = currentData;
      });

      return data;
    };

    Select2.prototype.val = function (args) {
      if (this.options.get('debug') && window.console && console.warn) {
        console.warn(
          'Select2: The `select2("val")` method has been deprecated and will be' +
          ' removed in later Select2 versions. Use $element.val() instead.'
        );
      }

      if (args == null || args.length === 0) {
        return this.$element.val();
      }

      var newVal = args[0];

      if (Array.isArray(newVal)) {
        newVal = newVal.map(function (obj) {
          return obj.toString();
        });
      }

      this.$element.val(newVal).trigger('input').trigger('change');
    };

    Select2.prototype.destroy = function () {
      Utils.RemoveData(this.$container[0]);
      this.$container.remove();

      this._observer.disconnect();
      this._observer = null;

      this._syncA = null;
      this._syncS = null;

      this.$element.off('.select2');
      this.$element.attr('tabindex',
      Utils.GetData(this.$element[0], 'old-tabindex'));

      this.$element[0].classList.remove('select2-hidden-accessible');
      this.$element.attr('aria-hidden', 'false');
      Utils.RemoveData(this.$element[0]);
      this.$element.removeData('select2');

      this.dataAdapter.destroy();
      this.selection.destroy();
      this.dropdown.destroy();
      this.results.destroy();

      this.dataAdapter = null;
      this.selection = null;
      this.dropdown = null;
      this.results = null;
    };

    Select2.prototype.render = function () {
      var $container = $(
        '<span class="select2 select2-container">' +
          '<span class="selection"></span>' +
          '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
        '</span>'
      );

      $container.attr('dir', this.options.get('dir'));

      this.$container = $container;

      this.$container[0].classList
        .add('select2-container--' + this.options.get('theme'));

      Utils.StoreData($container[0], 'element', this.$element);

      return $container;
    };

    return Select2;
  });

  S2.define('jquery-mousewheel',[
    'jquery'
  ], function ($) {
    // Used to shim jQuery.mousewheel for non-full builds.
    return $;
  });

  S2.define('jquery.select2',[
    'jquery',
    'jquery-mousewheel',

    './select2/core',
    './select2/defaults',
    './select2/utils'
  ], function ($, _, Select2, Defaults, Utils) {
    if ($.fn.select2 == null) {
      // All methods that should return the element
      var thisMethods = ['open', 'close', 'destroy'];

      $.fn.select2 = function (options) {
        options = options || {};

        if (typeof options === 'object') {
          this.each(function () {
            var instanceOptions = $.extend(true, {}, options);

            var instance = new Select2($(this), instanceOptions);
          });

          return this;
        } else if (typeof options === 'string') {
          var ret;
          var args = Array.prototype.slice.call(arguments, 1);

          this.each(function () {
            var instance = Utils.GetData(this, 'select2');

            if (instance == null && window.console && console.error) {
              console.error(
                'The select2(\'' + options + '\') method was called on an ' +
                'element that is not using Select2.'
              );
            }

            ret = instance[options].apply(instance, args);
          });

          // Check if we should be returning `this`
          if (thisMethods.indexOf(options) > -1) {
            return this;
          }

          return ret;
        } else {
          throw new Error('Invalid arguments for Select2: ' + options);
        }
      };
    }

    if ($.fn.select2.defaults == null) {
      $.fn.select2.defaults = Defaults;
    }

    return Select2;
  });

    // Return the AMD loader configuration so it can be used outside of this file
    return {
      define: S2.define,
      require: S2.require
    };
  }());

    // Autoload the jQuery bindings
    // We know that all of the modules exist above this, so we're safe
    var select2 = S2.require('jquery.select2');

    // Hold the AMD module references on the jQuery function that was just loaded
    // This allows Select2 to use the internal loader outside of this file, such
    // as in the language files.
    jQuery.fn.select2.amd = S2;

    // Return the Select2 instance for anyone who is importing it.
    return select2;
  }));
