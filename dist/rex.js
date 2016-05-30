!function(n){n._contains=function(n,t){return!(-1==n.indexOf(t))}}(this),function(n){this._overload=function(n,t,e){!function(r){n[t]=function(){return(e.length==arguments.length?e:r||e).apply(null,arguments)}}(n[t])}}(this),function(n){function t(n,t,e){return n!=e&&t.push(e),t}n._remove=function(n,e){return n.reduce(t.bind(null,e),[])}}(this),function(n){function t(t,e){return!n._contains(t,e)&&t.push(e),t}n._uniq=function(n){return n.reduce(t,[])}}(this),function(n,t,e,r){function u(n,t){return{callback:t,dependencies:n}}function i(n){throw new ReferenceError("The "+n+" module is not defined")}function o(t){return n[t]||(n[t]=c(e[t]||i(t)))}function c(n){return n.callback.apply(null,n.dependencies.map(o))}t._overload(this,"Rex",function(n,t){r.push(u(n,t))}),t._overload(this,"Rex",function(n,t,r){Object.defineProperty(e,n,{value:u(t,r)})}),window.addEventListener("load",function(){t._overload(this,"Rex",function(n,t){c(u(n,t))}),r.forEach(function(n){window.setTimeout(c.bind(null,n),0)})})}({},this,{},[]),Rex("h.cElement",["cond","get","reduce","h.isNode","h.isText","h.nUpdate"],function(n,t,e,r,u,i){function o(n,t){return n.appendChild(a(t)),n}function c(n){return document.createTextNode(t(n,"textContent"))}function f(n){return e(t(n,"childNodes"),o,i(document.createElement(t(n,"tagName")),n))}function a(t){return n([[r,f],[u,c]])(t)}return a}),Rex("h",["h.parseChild","h.parseProperty","h.parseTag","h.vNode"],function(n,t,e,r){function u(n,t,u){return r(e(n,t),t,u)}return function(e,r,i){return u(e,t(r),n(i,r))}}),Rex("h.isHook",["equal","get"],function(n,t){return function(e,r){return n(e,t(r,"nodeType"))}}),Rex("h.isNode",["partial","h.isHook"],function(n,t){return n(t,[1])}),Rex("h.isText",["partial","h.isHook"],function(n,t){return n(t,[3])}),Rex("h.nExchange",["h.cElement"],function(n){return function(t,e,r){return r.replaceChild(n(e),t)}}),Rex("h.nExtend",["curry","get","keys","reduce","set","_"],function(n,t,e,r,u,i){function o(n,e,r){return u(n,r,t(e,r,""))}return function(t,u){return r(e(u),n(o)(i,u,i),t)}}),Rex("h.nInsert",["equal","get","h.cElement"],function(n,t,e){return function(r,u,i){return n(t(i,"nodeType",0),1)&&i.appendChild(e(u))}}),Rex("h.nRemove",[],function(){return function(n,t,e){return e.removeChild(n),{childNodes:[]}}}),Rex("h.nUpdate",["cond","forEach","get","or","partial","set","h.isNode","h.isText","h.nExtend"],function(n,t,e,r,u,i,o,c,f){function a(n,t,u){return f(e(n,u),r(e(t,u),{}))}function s(n,e){return t(["dataset","style"],u(a,[n,e])),delete e.style,f(n,e)}function l(n,t){return s(n,e(t,"properties"))}function p(n,t){return i(n,"textContent",e(t,"textContent")),n}return n([[o,l],[c,p]])}),Rex("h.parseChild",["arity","cond","curry","flip","isArray","isNumber","isString","or","push","reduce","t","h.isNode","h.isText","h.vText","_"],function(n,t,e,r,u,i,o,c,f,a,s,l,p,h,d){function x(t,u){return a(t,e(n(2,r(b))),u)}function y(n,t){return R(String(n),t)}function R(n,t){return f(t,h(n)),t}function g(n,t){return f(t,n),t}function m(n,t){return t}function b(n,e){return t([[o,R],[i,y],[u,x],[p,g],[l,g],[s,m]])(n,e)}return function(n,t){return b(c(c(n,t),{}),[])}}),Rex("h.parseProperty",["isObject"],function(n){return function(t){return n(t)?t:{}}}),Rex("h.parseTag",["both","charAt","compose","concat","curry","equal","get","join","or","partial","reduce","set","split","substring","test","toUpperCase","trim","_"],function(n,t,e,r,u,i,o,c,f,a,s,l,p,h,d,x,y,R){function g(n,e){return i(t(n,0),e)}function m(t,r){return n(u(g)(R,"#"),e(a(l,[t,"id"]),_))(r),r}function b(t,r){return n(u(g)(R,"."),e(a(l,[t,"className"]),a(j,[t])))(r),r}function j(n,t){return y(c(r(p(o(n,"className","")," "),[_(t)])," "))}function w(n,t,r){return e(a(b,[n]),a(m,[n]))(r),v(t,r)}function _(n){return h(n,1,o(n,"length"))}function v(n,t){return d(/^\.|#/,t)?n:f(t,n)}return function(n,t){return x(s(p(n,/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/),a(w,[f(t,{})]),"DIV"))}}),Rex("h.reflow",["forEach","get","max","sparse","h.repaint"],function(n,t,e,r,u){function i(n){return t(t(n,"childNodes",[]),"length",0)}function o(n,e,r,u){c(t(n,"childNodes",[])[r],t(e,"childNodes",[])[u],n),n}function c(n,e,r){f(u(n,e,t(n,"parentNode",r)),e)}function f(t,e){n(a(t,e),function(n,r,u){o(t,e,r-(u.length-a(t,e).length),r)})}function a(n,t){return r(e(i(n),i(t)))}return c}),Rex("h.repaint",["and","cond","different","equal","get","f","t","h.nExchange","h.nInsert","h.nRemove","h.nUpdate"],function(n,t,e,r,u,i,o,c,f,a,s){function l(t,e){return n(r(!!t,!1),r(!!e,!1))}function p(t,e){return n(r(!!t,!0),r(!!e,!1))}function h(n,t){return e(u(n,"tagName"),u(t,"tagName"))}function d(t,e){return n(r(!!t,!1),r(!!e,!0))}return t([[l,i],[p,a],[d,f],[h,c],[o,s]])}),Rex("h.vNode",[],function(){return function n(t,e,r){return this instanceof n?{get childNodes(){return r},get nodeType(){return 1},get properties(){return e},get tagName(){return t}}:new n(t,e,r)}}),Rex("h.vText",[],function(){return function n(t){return this instanceof n?{get nodeType(){return 3},get textContent(){return t}}:new n(t)}}),Rex("http.handler",[],function(n){return[]}),Rex("http",["always","equal","get","or","set","http.interceptor"],function(n,t,e,r,u,i){return function(o,c,f){return function(a,s){return s.onreadystatechange=function(){t(e(this,"readyState"),4)&&r(e(a,e(this,"status")),n)(i("response",o,c,e(this,"responseText"),this),this)},s.open(o,c,!0),s.send(i("request",o,c,f,s)),function l(n,t){return u(a,n,t),l}}({},new XMLHttpRequest)}}),Rex("http.interceptor",["curry","get","or","reduce","http.handler","_"],function(n,t,e,r,u,i){function o(n,t,e,r){return e}function c(n,r,u,i,c,f){return e(t(f,n),o)(r,u,i,c)}return function(t,e,o,f,a){return r(u,n(c)(t,e,o,i,a,i),f)}}),Rex("http.parse",["or"],function(n){return{request:function(t,e,r,u){return JSON.stringify(n(r,""))},response:function(t,e,r,u){try{return JSON.parse(n(r||"{}"))}catch(i){return r}}}}),Rex("http.urlParameter",["format","get","join","keys","map"],function(n,t,e,r,u){return function(i){return e(u(r(i),function(e){return n("{0}={1}",[e,t(i,e,"")])}),"&")}}),Rex("$",["or"],function(n){return function(t,e){return n(e,document).querySelector(t)}}),function(n){function t(t){return["keys","slice"].reduce(n._remove,t)}function e(t){!function(t){n.Rex(t,[],function(){return function(n){return n[t].apply(n,[].slice.call(arguments,1))}})}(t)}function r(n,t){return n.concat(Object.getOwnPropertyNames(t).reduce(u.bind(null,t),[]))}function u(n,t,e){return"function"==typeof n[e]&&t.push(e),t}t(n._uniq([Array.prototype,Number.prototype,Object.prototype,String.prototype].reduce(r,[]))).forEach(e)}(this),Rex("always",[],function(){return function(n){return function(){return n}}}),Rex("apply",[],function(){return function(n,t){return n.apply(n,t)}}),Rex("arity",["apply"],function(n){return function(t,e){switch(t){case 0:return function(){return n(e,arguments)};case 1:return function(t){return n(e,arguments)};case 2:return function(t,r){return n(e,arguments)};case 3:return function(t,r,u){return n(e,arguments)};case 4:return function(t,r,u,i){return n(e,arguments)};default:throw new Error("First argument to arity must be a non-negative integer no greater than four")}}}),Rex("both",["apply"],function(n){return function(t,e){return function(){return n(t,arguments)&&n(e,arguments)}}}),Rex("clone",[],function(){return function(n){return JSON.parse(JSON.stringify(n))}}),Rex("compose",["arity","curry","reduce","reverse","slice","_"],function(n,t,e,r,u,i){function o(n,t){return t(n)}return function(){return t(n(3,e))(r(u(arguments)),o,i)}}),Rex("cond",["apply","partial","reduce","slice"],function(n,t,e,r){return function(t){return function(){for(var e=-1,r=t.length;++e<r;)if(n(t[e][0],arguments))return n(t[e][1],arguments)}}}),function(n){n.Rex("contains",[],function(){return n._contains})}(this),Rex("copy",["get","set"],function(n,t){return function(e,r,u){return t(e,u,n(r,u))}}),Rex("curry",["apply","different","every","map","partial","slice","sparse","split","_"],function(n,t,e,r,u,i,o,c,f){function a(n){return function(){return n.shift()}}function s(n,e){return r(n,function(n){return t(n,f)?n:e()})}function l(n){return e(n,u(t,[f]))}return function(t){function e(n){return r(s(n,a(i(arguments,1))))}function r(r){return l(r)?n(t,r):u(e,[r])}return u(e,[o(t.length)])}}),Rex("dobounce",["partial","slice"],function(n,t){return function(e,r,u){return function(){u=window.clearTimeout(u),u=window.setTimeout(n(r,t(arguments)),e)}}}),Rex("extend",["copy","curry","keys","reduce","_"],function(n,t,e,r,u){return function(i,o){return r(e(o),t(n)(u,o,u),i)}}),Rex("f",["always"],function(n){return n(!1)}),Rex("flip",["apply","reverse","slice"],function(n,t,e){return function(r){return function(){return n(r,t(e(arguments)))}}}),Rex("format",["or","partial","replace","translation"],function(n,t,e,r){function u(t,e,u,i,o){return i?r(o,n(t[u],"")):n(t[u],"")}return function(n,r){return e(n,/{(\d+)(:(.*?))?}/g,t(u,[r]))}}),Rex("_",["uid"],function(n){return n()}),Rex("get",["or"],function(n){return function(t,e,r){return n(n(t,{})[e],r)}}),function(n){[["isArray",/\[object Array\]/],["isNumber",/\[object Number\]/],["isObject",/\[object Object\]/],["isString",/\[object String\]/]].forEach(function(t){(function(t,e){n.Rex(t,["test"],function(n){return function(t){return n(e,Object.prototype.toString.call(t))}})}).apply(null,t)})}(this),Rex("iterator",["add","clone","get","gt","lt","partial","slice"],function(n,t,e,r,u,i,o){return i(function(i,o){return this instanceof arguments.callee?{get current(){return e(o,i,null)},get data(){return t(o)},get index(){return i},get hasNext(){return u(n(1,i),e(o,"length",0))},get hasPrev(){return r(n(-1,i),-1)},get isFirst(){return!this.hasPrev},get isLast(){return!this.hasNext},get length(){return o.length},next:function(){return e(o,i+=1,null)},prev:function(){return e(o,i-=1,null)},rewind:function(){return i=-1,this}}:new arguments.callee(-1,o)},[-1])}),Rex("keys",[],function(){return function(n){return Object.keys(n)}}),Rex("lambda",["apply","arity","concat","curry","format","match","partial","split","_"],function(n,t,e,r,u,i,o,c,f){function a(t,r){return n(Function,e(c(t(r)[1],","),[u("return {0}",[t(r)[2]])]))}return o(a,[r(t(2,i))(f,/^\((.*)\)\s*=>\s*(.*)$/)])}),Rex("max",[],function(){return Math.max}),Rex("memoize",["apply","partial"],function(n,t){return t(function(t,e){function r(r,u){return t[r]||(t[r]=n(e,u))}return function(){return r(JSON.stringify(arguments),arguments)}},[{}])}),Rex("merged",["extend","keys","pick"],function(n,t,e){return function(r,u){return n(r,e(t(r),u))}}),Rex("not",[],function(){return function(n){return!n}}),Rex("once",["always","apply"],function(n,t){return function(e){return function(){return!!e&&n(t(e,arguments))(e=null)}}}),function(n){[["add","+"],["and","&&"],["different","!="],["divide","/"],["equal","=="],["gt",">"],["gte",">="],["lt","<"],["lte","<="],["mod","%"],["multiply","*"],["or","||"],["subtract","-"]].forEach(function(t){(function(t,e){n.Rex(t,[],function(){return Function.apply(null,["a","b"].concat("return a "+e+" b"))})}).apply(null,t)})}(this),function(n){n.Rex("overload",[],function(){return n._overload})}(this),Rex("partial",["apply","concat","slice"],function(n,t,e){return function(r,u){return function(){return n(r,t(u,e(arguments)))}}}),Rex("pick",["copy","curry","reduce","_"],function(n,t,e,r){return function(u,i){return e(u,t(n)(r,i,r),{})}}),function(n){n.Rex("remove",["reduce"],function(t){return n._remove})}(this),Rex("restrict",["compose","contains","filter","keys","not","partial","pick"],function(n,t,e,r,u,i){return function(o,c){return i(e(r(o),n(not,u(t,[r(c)]))),o)}}),Rex("semaphore",["apply","curry","each","gt","partial","push","_"],function(n,t,e,r,u,i,o){return u(function(u,c){function f(u,f){function a(r){e(this._listeners,t(n)(o,[this._result=r]))}return this._result?void f(this._result):(i(this._listeners=this._listeners||[],f),void(r(this._listeners.length,1)||c(u,a.bind(this))))}function a(n){return u[n]=u[n]||f.bind({})}return function(n,t){a(JSON.stringify(n))(n,t)}},[{}])}),Rex("set",[],function(){return function(n,t,e){return n[t]=e,n}}),Rex("slice",["isString"],function(n){return function(t){return(n(t)?"":[]).slice.apply(t,[].slice.call(arguments,1))}}),Rex("sparse",["always","map","split","_"],function(n,t,e,r){return function(u){return u?t(e(Array(u).toString(),","),n(r)):[]}}),Rex("t",["always"],function(n){return n(!0)}),Rex("test",[],function(){return function(n,t){return n.test(t)}}),Rex("toArray",[],function(){return function(n){return[].slice.call(n)}}),Rex("translation",["iterator","join","map","partial","reverse","test","toArray"],function(n,t,e,r,u,i,o){function c(n,t,e){return s(n,t)||a(t,e)}function f(n,t,e){return s(n,t)||t.prev()&&e}function a(n,t){return n.hasNext?l[t](n,t):null}function s(n,t){return i(n,t.next())?t.current:!1}var l={9:r(c,[/[0-9]/]),A:r(c,[/[a-zA-Z]/]),"#":r(c,[/[a-zA-Z0-9]/]),".":r(f,[/[\.]/]),",":r(f,[/[\,]/]),":":r(f,[/[\:]/]),"-":r(f,[/[\-]/]),"/":r(f,[/[\/]/]),"(":r(f,[/[\(]/]),")":r(f,[/[\)]/])," ":r(f,[/[\ ]/])};return function(i,c,f){return function(u){return t(u(e(u(o(i)),r(a,[n(u(o(c)))]))),"")}(f?u:function(n){return n})}}),Rex("uid",[],function(){return function(){return window.parseInt(Date.now()*Math.random()).toString(36)}}),function(n){n.Rex("uniq",[],function(){return n._uniq})}(this),Rex("route.compare",["equal","get","split","test"],function(n,t,e,r){return function(u,i){return r(/^\:\w+/i,u)?!0:n(t(e(window.location.pathname,"/"),i,""),u)}}),Rex("route.handler",[],function(){return{}}),Rex("route.init",["equal","every","forEach","get","keys","split","test","route.compare","route.handler","route.param","route.query"],function(n,t,e,r,u,i,o,c,f,a,s){function l(n){t(i(n,"/"),c)&&f[n](window.history.state,a(n),s())}return window.onpopstate=function(){e(u(f),l)}}),Rex("route.param",["get","reduce","set","slice","split","test"],function(n,t,e,r,u,i){return function(o){return t(u(o,"/"),function(t,o,c){return i(/^\:\w+/i,o)?e(t,r(o,1),n(u(window.location.pathname,"/"),c,"")):t},{})}}),Rex("route.pushState",["route.init"],function(n){return function(t,e,r){window.history.pushState(t,e,r),n()}}),Rex("route.query",["lambda","get","map","reduce","set","slice","split"],function(n,t,e,r,u,i,o){function c(n,e){return u(n,t(e,0),t(e,1,""))}return function(){return r(e(o(i(window.location.search,1),"&"),n('(a) => a.split("=")')),c,{})}}),Rex("route",["set","route.handler"],function(n,t){return function(e,r){n(t,e,r)}});