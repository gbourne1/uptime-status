function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function c(e,t,n,s,r,o,a){const c=function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(t,s,r,o);if(c){const r=i(t,n,s,a);e.p(r,c)}}function l(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function u(e){return null==e?"":e}function h(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function f(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function y(){return b(" ")}function $(){return b("")}function v(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function w(e){return function(t){return t.preventDefault(),e.call(this,t)}}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:_(e,s,t[s])}function A(e){return Array.from(e.childNodes)}function S(e,t,n,s){for(let s=0;s<e.length;s+=1){const r=e[s];if(r.nodeName===t){let t=0;const o=[];for(;t<r.attributes.length;){const e=r.attributes[t++];n[e.name]||o.push(e.name)}for(let e=0;e<o.length;e++)r.removeAttribute(o[e]);return e.splice(s,1)[0]}}return s?g(t):m(t)}function P(e,t){for(let n=0;n<e.length;n+=1){const s=e[n];if(3===s.nodeType)return s.data=""+t,e.splice(n,1)[0]}return b(t)}function T(e){return P(e," ")}function I(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function x(e,t){e.value=null==t?"":t}let L,N;function R(){if(void 0===L){L=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){L=!0}}return L}function k(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=m("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=R();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=v(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=v(n.contentWindow,"resize",t)}),h(e,n),()=>{(s||r&&n.contentWindow)&&r(),d(n)}}function O(e,t=document.body){return Array.from(t.querySelectorAll(e))}class C{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=m(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)p(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(d)}}function j(e){N=e}function H(){if(!N)throw new Error("Function called outside component initialization");return N}function U(e){H().$$.on_mount.push(e)}function M(e){H().$$.after_update.push(e)}function D(e){H().$$.on_destroy.push(e)}const z=[],B=[],q=[],G=[],K=Promise.resolve();let Y=!1;function J(e){q.push(e)}let V=!1;const W=new Set;function F(){if(!V){V=!0;do{for(let e=0;e<z.length;e+=1){const t=z[e];j(t),Q(t.$$)}for(j(null),z.length=0;B.length;)B.pop()();for(let e=0;e<q.length;e+=1){const t=q[e];W.has(t)||(W.add(t),t())}q.length=0}while(z.length);for(;G.length;)G.pop()();Y=!1,V=!1,W.clear()}}function Q(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}const X=new Set;let Z;function ee(){Z={r:0,c:[],p:Z}}function te(){Z.r||r(Z.c),Z=Z.p}function ne(e,t){e&&e.i&&(X.delete(e),e.i(t))}function se(e,t,n,s){if(e&&e.o){if(X.has(e))return;X.add(e),Z.c.push((()=>{X.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function re(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function oe(e){return"object"==typeof e&&null!==e?e:{}}function ae(e){e&&e.c()}function ie(e,t){e&&e.l(t)}function ce(e,t,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=e.$$;i&&i.m(t,s),a||J((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(J)}function le(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){-1===e.$$.dirty[0]&&(z.push(e),Y||(Y=!0,K.then(F)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function he(t,n,o,a,i,c,l=[-1]){const u=N;j(t);const h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let p=!1;if(h.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return h.ctx&&i(h.ctx[e],h.ctx[e]=r)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](r),p&&ue(t,e)),n})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const e=A(n.target);h.fragment&&h.fragment.l(e),e.forEach(d)}else h.fragment&&h.fragment.c();n.intro&&ne(t.$$.fragment),ce(t,n.target,n.anchor,n.customElement),F()}j(u)}class pe{$destroy(){le(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const de=[];function fe(t,n=e){let s;const r=[];function o(e){if(a(t,e)&&(t=e,s)){const e=!de.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),de.push(n,t)}if(e){for(let e=0;e<de.length;e+=2)de[e][0](de[e+1]);de.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||e),a(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const me={};var ge={owner:"ayrshare",repo:"uptime-status",sites:[{name:"Ayrshare App",url:"https://app.ayrshare.com",icon:"https://app.ayrshare.com/ayrshare-purple-icon.jpg"},{name:"Ayrshare Website",url:"https://www.ayrshare.com",icon:"https://app.ayrshare.com/icon.png"},{name:"/user API endpoint",url:"https://app.ayrshare.com/api/user",icon:"https://app.ayrshare.com/rest-api.png",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"]},{name:"/post Twitter API Post",url:"https://app.ayrshare.com/api/post/random",icon:"https://app.ayrshare.com/rest-api.png",method:"POST",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"],body:'{ "post": "Check on me.", "platforms": ["twitter"] }'},{name:"/post Facebook API Post",url:"https://app.ayrshare.com/api/post/random",icon:"https://app.ayrshare.com/rest-api.png",method:"POST",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"],body:'{ "post": "Check on me.", "platforms": ["facebook"] }'},{name:"/post Instagram API Post",url:"https://app.ayrshare.com/api/post/random",icon:"https://app.ayrshare.com/rest-api.png",method:"POST",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"],body:'{ "post": "Check on me.", "platforms": ["instagram"], "unsplash": { "type": "random", "size": "small", "options": { "orientation": "squarish" } } }'},{name:"/post LinkedIn API Post",url:"https://app.ayrshare.com/api/post/random",icon:"https://app.ayrshare.com/rest-api.png",method:"POST",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"],body:'{ "post": "Check on me.", "platforms": ["linkedin"] }'},{name:"/post Telegram API Post",url:"https://app.ayrshare.com/api/post/random",icon:"https://app.ayrshare.com/rest-api.png",method:"POST",headers:["Authorization: Bearer $API_KEY","Content-Type: application/json"],body:'{ "post": "Check on me.", "platforms": ["telegram"] }'}],"status-website":{name:"Ayrshare Status",logoUrl:"https://app.ayrshare.com/ayrshare-purple-icon.jpg",favicon:"https://app.ayrshare.com/icon.png",cname:"status.ayrshare.com",introTitle:"**Ayrshare** - an API for social posting and management.",introMessage:"The uptime status of [Ayrshare's](https://www.ayrshare.com) website, app. and APIs. Login to the [Ayrshare Dashboard](https://app.ayrshare.com).",scripts:[{src:"https://plausible.io/js/plausible.js",defer:!0,async:!0,"data-domain":"ayrshare.com"}],navbar:[{title:"Ayrshare Home",href:"https://www.ayrshare.com"},{title:"API Docs",href:"https://docs.ayrshare.com"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},workflowSchedule:{graphs:"0 0 * * *",responseTime:"0 23 * * *",staticSite:"0 1 * * *",summary:"0 0 * * *",updateTemplate:"0 0 * * *",updates:"0 3 * * *",uptime:"0 * * * *"},path:"https://status.ayrshare.com",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function be(e,t,n){const s=e.slice();return s[1]=t[n],s}function ye(t){let n,s,r,o=ge["status-website"]&&!ge["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=m("img"),this.h()},l(e){n=S(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){_(n,"alt",""),n.src!==(s=ge["status-website"].logoUrl)&&_(n,"src",s),_(n,"class","svelte-a08hsz")},m(e,t){p(e,n,t)},p:e,d(e){e&&d(n)}}}(),a=ge["status-website"]&&!ge["status-website"].hideNavTitle&&function(t){let n,s,r=ge["status-website"].name+"";return{c(){n=m("div"),s=b(r)},l(e){n=S(e,"DIV",{});var t=A(n);s=P(t,r),t.forEach(d)},m(e,t){p(e,n,t),h(n,s)},p:e,d(e){e&&d(n)}}}();return{c(){n=m("div"),s=m("a"),o&&o.c(),r=y(),a&&a.c(),this.h()},l(e){n=S(e,"DIV",{});var t=A(n);s=S(t,"A",{href:!0,class:!0});var i=A(s);o&&o.l(i),r=T(i),a&&a.l(i),i.forEach(d),t.forEach(d),this.h()},h(){_(s,"href",ge["status-website"].logoHref||ge.path),_(s,"class","logo svelte-a08hsz")},m(e,t){p(e,n,t),h(n,s),o&&o.m(s,null),h(s,r),a&&a.m(s,null)},p(e,t){ge["status-website"]&&!ge["status-website"].hideNavLogo&&o.p(e,t),ge["status-website"]&&!ge["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&d(n),o&&o.d(),a&&a.d()}}}function $e(e){let t,n,s,r,o,a=e[1].title+"";return{c(){t=m("li"),n=m("a"),s=b(a),o=y(),this.h()},l(e){t=S(e,"LI",{});var r=A(t);n=S(r,"A",{"aria-current":!0,href:!0,class:!0});var i=A(n);s=P(i,a),i.forEach(d),o=T(r),r.forEach(d),this.h()},h(){_(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),_(n,"href",e[1].href.replace("$OWNER",ge.owner).replace("$REPO",ge.repo)),_(n,"class","svelte-a08hsz")},m(e,r){p(e,t,r),h(t,n),h(n,s),h(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&_(n,"aria-current",r)},d(e){e&&d(t)}}}function ve(t){let n,s,r,o,a,i=ge["status-website"]&&ge["status-website"].logoUrl&&ye(),c=ge["status-website"]&&ge["status-website"].navbar&&function(e){let t,n=ge["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=$e(be(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=$()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=$()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(1&r){let o;for(n=ge["status-website"].navbar,o=0;o<n.length;o+=1){const a=be(e,n,o);s[o]?s[o].p(a,r):(s[o]=$e(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){f(s,e),e&&d(t)}}}(t),l=ge["status-website"]&&ge["status-website"].navbarGitHub&&!ge["status-website"].navbar&&function(t){let n,s,r,o=ge.i18n.navGitHub+"";return{c(){n=m("li"),s=m("a"),r=b(o),this.h()},l(e){n=S(e,"LI",{});var t=A(n);s=S(t,"A",{href:!0,class:!0});var a=A(s);r=P(a,o),a.forEach(d),t.forEach(d),this.h()},h(){_(s,"href",`https://github.com/${ge.owner}/${ge.repo}`),_(s,"class","svelte-a08hsz")},m(e,t){p(e,n,t),h(n,s),h(s,r)},p:e,d(e){e&&d(n)}}}();return{c(){n=m("nav"),s=m("div"),i&&i.c(),r=y(),o=m("ul"),c&&c.c(),a=y(),l&&l.c(),this.h()},l(e){n=S(e,"NAV",{class:!0});var t=A(n);s=S(t,"DIV",{class:!0});var u=A(s);i&&i.l(u),r=T(u),o=S(u,"UL",{class:!0});var h=A(o);c&&c.l(h),a=T(h),l&&l.l(h),h.forEach(d),u.forEach(d),t.forEach(d),this.h()},h(){_(o,"class","svelte-a08hsz"),_(s,"class","container svelte-a08hsz"),_(n,"class","svelte-a08hsz")},m(e,t){p(e,n,t),h(n,s),i&&i.m(s,null),h(s,r),h(s,o),c&&c.m(o,null),h(o,a),l&&l.m(o,null)},p(e,[t]){ge["status-website"]&&ge["status-website"].logoUrl&&i.p(e,t),ge["status-website"]&&ge["status-website"].navbar&&c.p(e,t),ge["status-website"]&&ge["status-website"].navbarGitHub&&!ge["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&d(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function we(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class _e extends pe{constructor(e){super(),he(this,e,we,ve,a,{segment:0})}}var Ee={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ae(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Se(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pe(e,t){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},h=0;function p(e){var t=Ee[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function d(){for(var e="";c.length;)e+=p(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(e);)s=e.substring(h,r.index),h=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ae(Se(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Pe(Ae(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Se(r[8])+'" alt="'+Se(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Se(r[11]||u[s.toLowerCase()])+'">'),n=d()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Pe(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Se(r[16])+"</code>":(r[17]||r[1])&&(n=p(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(h)+d()).replace(/^\n+|\n+$/g,"")}function Te(e,t,n){const s=e.slice();return s[3]=t[n],s}function Ie(e,t,n){const s=e.slice();return s[3]=t[n],s}function xe(e,t,n){const s=e.slice();return s[8]=t[n],s}function Le(t){let n;return{c(){n=m("link"),this.h()},l(e){n=S(e,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",`${ge.path}/themes/${(ge["status-website"]||{}).theme||"light"}.css`)},m(e,t){p(e,n,t)},p:e,d(e){e&&d(n)}}}function Ne(t){let n;return{c(){n=m("link"),this.h()},l(e){n=S(e,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",(ge["status-website"]||{}).themeUrl)},m(e,t){p(e,n,t)},p:e,d(e){e&&d(n)}}}function Re(t){let n,s;return{c(){n=m("script"),this.h()},l(e){n=S(e,"SCRIPT",{src:!0,async:!0,defer:!0}),A(n).forEach(d),this.h()},h(){n.src!==(s=t[8].src)&&_(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){p(e,n,t)},p:e,d(e){e&&d(n)}}}function ke(t){let n;return{c(){n=m("link"),this.h()},l(e){n=S(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){_(n,"rel",t[3].rel),_(n,"href",t[3].href),_(n,"media",t[3].media)},m(e,t){p(e,n,t)},p:e,d(e){e&&d(n)}}}function Oe(t){let n;return{c(){n=m("meta"),this.h()},l(e){n=S(e,"META",{name:!0,content:!0}),this.h()},h(){_(n,"name",t[3].name),_(n,"content",t[3].content)},m(e,t){p(e,n,t)},p:e,d(e){e&&d(n)}}}function Ce(t){let n,s,r,o,a,l,u,g,b,v,w,E,P,I,x,L,N,R,k=Pe(ge.i18n.footer.replace(/\$REPO/,`https://github.com/${ge.owner}/${ge.repo}`))+"",j=(ge["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(ge["status-website"]||{}).customHeadHtml+"";return{c(){s=$(),this.h()},l(e){s=$(),this.h()},h(){n=new C(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&d(s),e&&n.d()}}}();let H=((ge["status-website"]||{}).themeUrl?Ne:Le)(t),U=(ge["status-website"]||{}).scripts&&function(e){let t,n=(ge["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=Re(xe(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=$()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=$()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(0&r){let o;for(n=(ge["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=xe(e,n,o);s[o]?s[o].p(a,r):(s[o]=Re(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){f(s,e),e&&d(t)}}}(t),M=(ge["status-website"]||{}).links&&function(e){let t,n=(ge["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=ke(Ie(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=$()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=$()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(0&r){let o;for(n=(ge["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Ie(e,n,o);s[o]?s[o].p(a,r):(s[o]=ke(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){f(s,e),e&&d(t)}}}(t),D=(ge["status-website"]||{}).metaTags&&function(e){let t,n=(ge["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=Oe(Te(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=$()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=$()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);p(e,t,n)},p(e,r){if(0&r){let o;for(n=(ge["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Te(e,n,o);s[o]?s[o].p(a,r):(s[o]=Oe(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){f(s,e),e&&d(t)}}}(t),z=ge["status-website"].css&&function(t){let n,s,r=`<style>${ge["status-website"].css}</style>`;return{c(){s=$(),this.h()},l(e){s=$(),this.h()},h(){n=new C(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&d(s),e&&n.d()}}}(),B=ge["status-website"].js&&function(t){let n,s,r=`<script>${ge["status-website"].js}<\/script>`;return{c(){s=$(),this.h()},l(e){s=$(),this.h()},h(){n=new C(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&d(s),e&&n.d()}}}(),q=(ge["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(ge["status-website"]||{}).customBodyHtml+"";return{c(){s=$(),this.h()},l(e){s=$(),this.h()},h(){n=new C(s)},m(e,t){n.m(r,e,t),p(e,s,t)},p:e,d(e){e&&d(s),e&&n.d()}}}();E=new _e({props:{segment:t[0]}});const G=t[2].default,K=function(e,t,n,s){if(e){const r=i(e,t,n,s);return e[0](r)}}(G,t,t[1],null);return{c(){j&&j.c(),n=$(),H.c(),s=m("link"),r=m("link"),o=m("link"),U&&U.c(),a=$(),M&&M.c(),l=$(),D&&D.c(),u=$(),z&&z.c(),g=$(),B&&B.c(),b=$(),v=y(),q&&q.c(),w=y(),ae(E.$$.fragment),P=y(),I=m("main"),K&&K.c(),x=y(),L=m("footer"),N=m("p"),this.h()},l(e){const t=O('[data-svelte="svelte-ri9y7q"]',document.head);j&&j.l(t),n=$(),H.l(t),s=S(t,"LINK",{rel:!0,href:!0}),r=S(t,"LINK",{rel:!0,type:!0,href:!0}),o=S(t,"LINK",{rel:!0,type:!0,href:!0}),U&&U.l(t),a=$(),M&&M.l(t),l=$(),D&&D.l(t),u=$(),z&&z.l(t),g=$(),B&&B.l(t),b=$(),t.forEach(d),v=T(e),q&&q.l(e),w=T(e),ie(E.$$.fragment,e),P=T(e),I=S(e,"MAIN",{class:!0});var i=A(I);K&&K.l(i),i.forEach(d),x=T(e),L=S(e,"FOOTER",{class:!0});var c=A(L);N=S(c,"P",{}),A(N).forEach(d),c.forEach(d),this.h()},h(){_(s,"rel","stylesheet"),_(s,"href",`${ge.path}/global.css`),_(r,"rel","icon"),_(r,"type","image/svg"),_(r,"href",(ge["status-website"]||{}).faviconSvg||(ge["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),_(o,"rel","icon"),_(o,"type","image/png"),_(o,"href",(ge["status-website"]||{}).favicon||"/logo-192.png"),_(I,"class","container"),_(L,"class","svelte-jbr799")},m(e,t){j&&j.m(document.head,null),h(document.head,n),H.m(document.head,null),h(document.head,s),h(document.head,r),h(document.head,o),U&&U.m(document.head,null),h(document.head,a),M&&M.m(document.head,null),h(document.head,l),D&&D.m(document.head,null),h(document.head,u),z&&z.m(document.head,null),h(document.head,g),B&&B.m(document.head,null),h(document.head,b),p(e,v,t),q&&q.m(e,t),p(e,w,t),ce(E,e,t),p(e,P,t),p(e,I,t),K&&K.m(I,null),p(e,x,t),p(e,L,t),h(L,N),N.innerHTML=k,R=!0},p(e,[t]){(ge["status-website"]||{}).customHeadHtml&&j.p(e,t),H.p(e,t),(ge["status-website"]||{}).scripts&&U.p(e,t),(ge["status-website"]||{}).links&&M.p(e,t),(ge["status-website"]||{}).metaTags&&D.p(e,t),ge["status-website"].css&&z.p(e,t),ge["status-website"].js&&B.p(e,t),(ge["status-website"]||{}).customBodyHtml&&q.p(e,t);const n={};1&t&&(n.segment=e[0]),E.$set(n),K&&K.p&&2&t&&c(K,G,e,e[1],t,null,null)},i(e){R||(ne(E.$$.fragment,e),ne(K,e),R=!0)},o(e){se(E.$$.fragment,e),se(K,e),R=!1},d(e){j&&j.d(e),d(n),H.d(e),d(s),d(r),d(o),U&&U.d(e),d(a),M&&M.d(e),d(l),D&&D.d(e),d(u),z&&z.d(e),d(g),B&&B.d(e),d(b),e&&d(v),q&&q.d(e),e&&d(w),le(E,e),e&&d(P),e&&d(I),K&&K.d(e),e&&d(x),e&&d(L)}}}function je(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class He extends pe{constructor(e){super(),he(this,e,je,Ce,a,{segment:0})}}function Ue(e){let t,n,s=e[1].stack+"";return{c(){t=m("pre"),n=b(s)},l(e){t=S(e,"PRE",{});var r=A(t);n=P(r,s),r.forEach(d)},m(e,s){p(e,t,s),h(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&I(n,s)},d(e){e&&d(t)}}}function Me(t){let n,s,r,o,a,i,c,l,u,f=t[1].message+"";document.title=n=t[0];let g=t[2]&&t[1].stack&&Ue(t);return{c(){s=y(),r=m("h1"),o=b(t[0]),a=y(),i=m("p"),c=b(f),l=y(),g&&g.c(),u=$(),this.h()},l(e){O('[data-svelte="svelte-1moakz"]',document.head).forEach(d),s=T(e),r=S(e,"H1",{class:!0});var n=A(r);o=P(n,t[0]),n.forEach(d),a=T(e),i=S(e,"P",{class:!0});var h=A(i);c=P(h,f),h.forEach(d),l=T(e),g&&g.l(e),u=$(),this.h()},h(){_(r,"class","svelte-17w3omn"),_(i,"class","svelte-17w3omn")},m(e,t){p(e,s,t),p(e,r,t),h(r,o),p(e,a,t),p(e,i,t),h(i,c),p(e,l,t),g&&g.m(e,t),p(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&I(o,e[0]),2&t&&f!==(f=e[1].message+"")&&I(c,f),e[2]&&e[1].stack?g?g.p(e,t):(g=Ue(e),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:e,o:e,d(e){e&&d(s),e&&d(r),e&&d(a),e&&d(i),e&&d(l),g&&g.d(e),e&&d(u)}}}function De(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class ze extends pe{constructor(e){super(),he(this,e,De,Me,a,{status:0,error:1})}}function Be(e){let n,s,r;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ae(n.$$.fragment),s=$()},l(e){n&&ie(n.$$.fragment,e),s=$()},m(e,t){n&&ce(n,e,t),p(e,s,t),r=!0},p(e,t){const r=16&t?re(o,[oe(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){ee();const e=n;se(e.$$.fragment,1,0,(()=>{le(e,1)})),te()}a?(n=new a(i()),ae(n.$$.fragment),ne(n.$$.fragment,1),ce(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(e){r||(n&&ne(n.$$.fragment,e),r=!0)},o(e){n&&se(n.$$.fragment,e),r=!1},d(e){e&&d(s),n&&le(n,e)}}}function qe(e){let t,n;return t=new ze({props:{error:e[0],status:e[1]}}),{c(){ae(t.$$.fragment)},l(e){ie(t.$$.fragment,e)},m(e,s){ce(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){se(t.$$.fragment,e),n=!1},d(e){le(t,e)}}}function Ge(e){let t,n,s,r;const o=[qe,Be],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),s=$()},l(e){n.l(e),s=$()},m(e,n){a[t].m(e,n),p(e,s,n),r=!0},p(e,r){let c=t;t=i(e),t===c?a[t].p(e,r):(ee(),se(a[c],1,1,(()=>{a[c]=null})),te(),n=a[t],n?n.p(e,r):(n=a[t]=o[t](e),n.c()),ne(n,1),n.m(s.parentNode,s))},i(e){r||(ne(n),r=!0)},o(e){se(n),r=!1},d(e){a[t].d(e),e&&d(s)}}}function Ke(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[Ge]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new He({props:o}),{c(){ae(n.$$.fragment)},l(e){ie(n.$$.fragment,e)},m(e,t){ce(n,e,t),s=!0},p(e,[t]){const s=12&t?re(r,[4&t&&{segment:e[2][0]},8&t&&oe(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(ne(n.$$.fragment,e),s=!0)},o(e){se(n.$$.fragment,e),s=!1},d(e){le(n,e)}}}function Ye(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:c=null}=t,{notify:l}=t;var u,h;return M(l),u=me,h=s,H().$$.context.set(u,h),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,a,i,c,s,l]}class Je extends pe{constructor(e){super(),he(this,e,Ye,Ke,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ve=[],We=[{js:()=>Promise.all([import("./index.59e390ed.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.79651559.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].79f34a4a.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[number].0a600496.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-49f387e2.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.5c8e50b0.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],Fe=(Qe=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:Qe(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:Qe(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Qe;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Xe(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{c(s.next(e))}catch(e){o(e)}}function i(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((s=s.apply(e,t||[])).next())}))}function Ze(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let et,tt=1;const nt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},st={};let rt,ot;function at(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function it(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(rt))return null;let t=e.pathname.slice(rt.length);if(""===t&&(t="/"),!Ve.some((e=>e.test(t))))for(let n=0;n<Fe.length;n+=1){const s=Fe[n],r=s.pattern.exec(t);if(r){const n=at(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:i}}}}function ct(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Ze(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=it(r);if(o){ht(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),nt.pushState({id:et},"",r.href)}}function lt(){return{x:pageXOffset,y:pageYOffset}}function ut(e){if(st[et]=lt(),e.state){const t=it(new URL(location.href));t?ht(t,e.state.id):location.href=location.href}else!function(e){tt=e}(tt+1),function(e){et=e}(tt),nt.replaceState({id:et},"",location.href)}function ht(e,t,n,s){return Xe(this,void 0,void 0,(function*(){const r=!!t;if(r)et=t;else{const e=lt();st[et]=e,et=t=++tt,st[et]=n?e:{x:0,y:0}}if(yield ot(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=st[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),st[et]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function pt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let dt,ft=null;function mt(e){const t=Ze(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=it(new URL(e,pt(document)));if(t)ft&&e===ft.href||(ft={href:e,promise:Rt(t)}),ft.promise}(t.href)}function gt(e){clearTimeout(dt),dt=setTimeout((()=>{mt(e)}),20)}function bt(e,t={noscroll:!1,replaceState:!1}){const n=it(new URL(e,pt(document)));if(n){const s=ht(n,null,t.noscroll);return nt[t.replaceState?"replaceState":"pushState"]({id:et},"",e),s}return location.href=e,new Promise((()=>{}))}const yt="undefined"!=typeof __SAPPER__&&__SAPPER__;let $t,vt,wt,_t=!1,Et=[],At="{}";const St={page:function(e){const t=fe(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:fe(null),session:fe(yt&&yt.session)};let Pt,Tt,It;function xt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Lt(e){return Xe(this,void 0,void 0,(function*(){$t&&St.preloading.set(!0);const t=function(e){return ft&&ft.href===e.href?ft.promise:Rt(e)}(e),n=vt={},s=yield t,{redirect:r}=s;if(n===vt)if(r)yield bt(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Nt(n,t,xt(t,e.page))}}))}function Nt(e,t,n){return Xe(this,void 0,void 0,(function*(){St.page.set(n),St.preloading.set(!1),$t?$t.$set(t):(t.stores={page:{subscribe:St.page.subscribe},preloading:{subscribe:St.preloading.subscribe},session:St.session},t.level0={props:yield wt},t.notify=St.page.notify,$t=new Je({target:It,props:t,hydrate:!0})),Et=e,At=JSON.stringify(n.query),_t=!0,Tt=!1}))}function Rt(e){return Xe(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!wt){const e=()=>({});wt=yt.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Pt)}let i,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>Xe(this,void 0,void 0,(function*(){const h=s[i];if(function(e,t,n,s){if(s!==At)return!0;const r=Et[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,h,l,r)&&(u=!0),o.segments[c]=s[i+1],!t)return{segment:h};const p=c++;let d;if(Tt||u||!Et[i]||Et[i].part!==t.i){u=!1;const{default:s,preload:r}=yield We[t.i].js();let o;o=_t||!yt.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Pt):{}:yt.preloaded[i+1],d={component:s,props:o,segment:h,match:l,part:t.i}}else d=Et[i];return o[`level${p}`]=d})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var kt,Ot,Ct;St.session.subscribe((e=>Xe(void 0,void 0,void 0,(function*(){if(Pt=e,!_t)return;Tt=!0;const t=it(new URL(location.href)),n=vt={},{redirect:s,props:r,branch:o}=yield Rt(t);n===vt&&(s?yield bt(s.location,{replaceState:!0}):yield Nt(o,r,xt(r,t.page)))})))),kt={target:document.querySelector("#sapper")},Ot=kt.target,It=Ot,Ct=yt.baseUrl,rt=Ct,ot=Lt,"scrollRestoration"in nt&&(nt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{nt.scrollRestoration="auto"})),addEventListener("load",(()=>{nt.scrollRestoration="manual"})),addEventListener("click",ct),addEventListener("popstate",ut),addEventListener("touchstart",mt),addEventListener("mousemove",gt),yt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:a}=yt;wt||(wt=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:wt},level1:{props:{status:o,error:a},component:ze},segments:r},c=at(n);Nt([],i,{host:e,path:t,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;nt.replaceState({id:tt},"",t);const n=it(new URL(location.href));if(n)return ht(n,tt,!0,e)}));export{le as A,v as B,r as C,B as D,u as E,O as F,Pe as G,C as H,g as I,bt as J,x as K,w as L,t as M,E as N,re as O,M as P,D as Q,l as R,pe as S,oe as T,J as U,k as V,A as a,P as b,S as c,d,m as e,_ as f,p as g,h,he as i,y as j,T as k,ee as l,se as m,e as n,te as o,ne as p,U as q,ge as r,a as s,b as t,I as u,$ as v,f as w,ae as x,ie as y,ce as z};

import __inject_styles from './inject_styles.5607aec6.js';