var Ee=Object.create;var X=Object.defineProperty;var De=Object.getOwnPropertyDescriptor;var Se=Object.getOwnPropertyNames;var Ne=Object.getPrototypeOf,Le=Object.prototype.hasOwnProperty;var T=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Me=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Se(t))!Le.call(e,s)&&s!==r&&X(e,s,{get:()=>t[s],enumerable:!(n=De(t,s))||n.enumerable});return e};var _e=(e,t,r)=>(r=e!=null?Ee(Ne(e)):{},Me(t||!e||!e.__esModule?X(r,"default",{value:e,enumerable:!0}):r,e));var le=T((ft,oe)=>{"use strict";oe.exports=function(e){return!e||e.length<3?!1:e[0]===73&&e[1]===68&&e[2]===51||e[0]===255&&(e[1]===251||e[1]===250)}});var ce=T((dt,ie)=>{"use strict";ie.exports=function(e){return!e||e.length<12?!1:e[0]===82&&e[1]===73&&e[2]===70&&e[3]===70&&e[8]===87&&e[9]===65&&e[10]===86&&e[11]===69}});var fe=T((ht,ue)=>{"use strict";ue.exports=function(e){return!e||e.length<4?!1:e[0]===79&&e[1]===103&&e[2]===103&&e[3]===83}});var he=T((pt,de)=>{"use strict";de.exports=function(e){return!e||e.length<4?!1:e[0]===102&&e[1]===76&&e[2]===97&&e[3]===67}});var me=T((mt,pe)=>{"use strict";pe.exports=function(e){return!e||e.length<8?!1:e[4]===102&&e[5]===116&&e[6]===121&&e[7]===112||e[0]===77&&e[1]===52&&e[2]===65&&e[3]===32}});var ye=T((gt,ge)=>{"use strict";ge.exports=function(e){return e?le()(e)?"mp3":ce()(e)?"wav":fe()(e)?"oga":he()(e)?"flac":me()(e)?"m4a":!1:!1}});var b,j=new Set,q,$=new WeakMap,M=new WeakMap,G=new WeakMap,L=Symbol("parent"),K={Array,Object,Number,String,Boolean,Date,console},Y={has(){return!0},get(e,t){if(typeof t=="symbol")return e[t];if(!(t in e))return e[L]?.[t];if(Array.isArray(e)&&t in Array.prototype)return e[t];let r=e[t];if(b){let n=$.get(e);n||$.set(e,n={}),n[t]?n[t].includes(b)||n[t].push(b):n[t]=[b]}if(r&&r.constructor===Object||Array.isArray(r)){let n=M.get(r);return n||M.set(r,n=new Proxy(r,Y)),n}return r},set(e,t,r){if(!(t in e)&&e[L]&&t in e[L])return e[L][t]=r;if(Array.isArray(e)&&t in Array.prototype)return e[t]=r;let n=e[t];if(Object.is(n,r))return!0;e[t]=r;let s=$.get(e)?.[t];if(s)for(let a of s)j.add(a);return Be(),!0},deleteProperty(e,t){return e[t]=void 0,delete e[t],!0}},E=(e,t)=>{if(M.has(e))return M.get(e);if(G.has(e))return e;let r=new Proxy(e,Y);return M.set(e,r),G.set(r,e),e[L]=t?E(t):K,r},J=e=>{let t=()=>{let r=b;b=t,e(),b=r};return t(),t},Be=()=>{q||(q=!0,queueMicrotask(()=>{for(let e of j)e.call();j.clear(),q=!1}))};function Q(e,t,r,n){let s=new Map,a=new Map,o,i;for(o=0;o<t.length;o++)s.set(t[o],o);for(o=0;o<r.length;o++)a.set(r[o],o);for(o=i=0;o!==t.length||i!==r.length;){var c=t[o],u=r[i];if(c===null)o++;else if(r.length<=i)e.removeChild(t[o]),o++;else if(t.length<=o)e.insertBefore(u,t[o]||n),i++;else if(c===u)o++,i++;else{var h=a.get(c),d=s.get(u);h===void 0?(e.removeChild(t[o]),o++):d===void 0?(e.insertBefore(u,t[o]||n),i++):(e.insertBefore(t[d],t[o]||n),t[d]=null,d>o+1&&o++,i++)}}return r}var ee=new WeakMap,Fe=e=>{let t=new WeakRef(e);return ee.set(e,t),t},Ie=e=>ee.get(e)||Fe(e),_=class extends Map{#e=new FinalizationRegistry(t=>super.delete(t));get size(){return[...this].length}constructor(t=[]){super();for(let[r,n]of t)this.set(r,n)}get(t){return super.get(t)?.deref()}set(t,r){let n=super.get(t);return n&&this.#e.unregister(n),n=Ie(r),this.#e.register(r,t,n),super.set(t,n)}};var D={},v={};D.if=(e,t)=>{let r=document.createTextNode(""),n=[g(e,t,":if")],s=[e],a=e;for(;(a=e.nextElementSibling)&&a.hasAttribute(":else");)a.removeAttribute(":else"),(t=a.getAttribute(":if"))?(a.removeAttribute(":if"),a.remove(),s.push(a),n.push(g(e,t,":else :if"))):(a.remove(),s.push(a),n.push(()=>1));return e.replaceWith(a=r),o=>{let i=n.findIndex(c=>c(o));s[i]!=a&&((a[re]||a).replaceWith(a=s[i]||r),x(a,o))}};D.with=(e,t,r)=>{let s=g(e,t,"with")(r),a=E(s,r);x(e,a)};var re=Symbol(":each");D.each=(e,t)=>{let r=Pe(t);if(!r)return I(new Error,e,t);let n=e[re]=document.createTextNode("");e.replaceWith(n);let s=g(e,r[2],":each"),a=e.getAttribute(":key"),o=a?g(null,a):null;e.removeAttribute(":key");let i=e.getAttribute(":ref"),c=new _,u=new _,h=[];return d=>{let f=s(d);f?typeof f=="number"?f=Array.from({length:f},(y,w)=>[w,w+1]):Array.isArray(f)?f=f.map((y,w)=>[w+1,y]):typeof f=="object"?f=Object.entries(f):I(Error("Bad list value"),e,t,":each",f):f=[];let A=[],S=[];for(let[y,w]of f){let F,N,O=o?.({[r[0]]:w,[r[1]]:y});O==null?F=e.cloneNode(!0):(F=u.get(O))||u.set(O,F=e.cloneNode(!0)),A.push(F),O==null||!(N=c.get(O))?(N=E({[r[0]]:w,[i||""]:null,[r[1]]:y},d),O!=null&&c.set(O,N)):N[r[0]]=w,S.push(N)}Q(n.parentNode,h,A,n),h=A;for(let y=0;y<A.length;y++)x(A[y],S[y])}};function Pe(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,r=/^\s*\(|\)\s*$/g,n=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,s=e.match(n);if(!s)return;let a=s[2].trim(),o=s[1].replace(r,"").trim(),i=o.match(t);return i?[o.replace(t,"").trim(),i[1].trim(),a]:[o,"",a]}v.ref=(e,t,r)=>{r[t]=e};v.id=(e,t)=>{let r=g(e,t,":id"),n=s=>e.id=s||s===0?s:"";return s=>n(r(s))};v.class=(e,t)=>{let r=g(e,t,":class"),n=e.className;return s=>{let a=r(s),o=typeof a=="string"?a:(Array.isArray(a)?a:Object.entries(a).map(([i,c])=>c?i:"")).filter(Boolean).join(" ");e.className=[n,o].filter(Boolean).join(" ")}};v.style=(e,t)=>{let r=g(e,t,":style"),n=e.getAttribute("style")||"";return n.endsWith(";")||(n+="; "),s=>{let a=r(s);if(typeof a=="string")e.setAttribute("style",n+a);else{e.setAttribute("style",n);for(let o in a)e.style.setProperty(o,a[o])}}};v.text=(e,t)=>{let r=g(e,t,":text");return n=>{let s=r(n);e.textContent=s??""}};v.data=(e,t)=>{let r=g(e,t,":data");return n=>{let s=r(n);for(let a in s)e.dataset[a]=s[a]}};v.aria=(e,t)=>{let r=g(e,t,":aria"),n=s=>{for(let a in s)P(e,"aria-"+se(a),s[a]==null?null:s[a]+"")};return s=>n(r(s))};v[""]=(e,t)=>{let r=g(e,t,":");if(r)return n=>{let s=r(n);for(let a in s)P(e,se(a),s[a])}};v.value=(e,t)=>{let r=g(e,t,":value"),n,s,a=e.type==="text"||e.type===""?o=>e.setAttribute("value",e.value=o??""):e.tagName==="TEXTAREA"||e.type==="text"||e.type===""?o=>(n=e.selectionStart,s=e.selectionEnd,e.setAttribute("value",e.value=o??""),n&&e.setSelectionRange(n,s)):e.type==="checkbox"?o=>(e.value=o?"on":"",P(e,"checked",o)):e.type==="select-one"?o=>{for(let i in e.options)i.removeAttribute("selected");e.value=o,e.selectedOptions[0]?.setAttribute("selected","")}:o=>e.value=o;return o=>a(r(o))};v.on=(e,t)=>{let r=g(e,t,":on");return n=>{let s=r(n),a=[];for(let o in s)a.push(ae(e,o,s[o]));return()=>{for(let o of a)o()}}};var ne=(e,t,r,n)=>{let s=n.startsWith("on")&&n.slice(2),a=g(e,t,":"+n);if(a)return s?o=>{let i=a(o)||(()=>{});return ae(e,s,i)}:o=>P(e,n,a(o))},ae=(e,t,r)=>{if(!r)return;let n=t.split("..").map(i=>{let c={evt:"",target:e,test:()=>!0};return c.evt=(i.startsWith("on")?i.slice(2):i).replace(/\.(\w+)?-?([-\w]+)?/g,(u,h,d="")=>(c.test=Ue[h]?.(c,...d.split("-"))||c.test,"")),c});if(n.length==1)return o(r,n[0]);let s=(i,c=0)=>{let u;return u=o(d=>{c&&u();let f=i.call(e,d);typeof f!="function"&&(f=()=>{}),c+1<n.length&&s(f,c?c+1:1)},n[c])},a=s(r);return()=>a();function o(i,{evt:c,target:u,test:h,defer:d,stop:f,prevent:A,...S}){d&&(i=d(i));let y=w=>h(w)&&(f&&w.stopPropagation(),A&&w.preventDefault(),i.call(u,w));return u.addEventListener(c,y,S),()=>u.removeEventListener(c,y,S)}},Ue={prevent(e){e.prevent=!0},stop(e){e.stop=!0},once(e){e.once=!0},passive(e){e.passive=!0},capture(e){e.capture=!0},window(e){e.target=window},document(e){e.target=document},toggle(e){e.defer=(t,r)=>n=>r?(r.call?.(e.target,n),r=null):r=t()},throttle(e,t){e.defer=r=>We(r,t?Number(t)||0:108)},debounce(e,t){e.defer=r=>qe(r,t?Number(t)||0:108)},outside:e=>t=>{let r=e.target;return!(r.contains(t.target)||t.target.isConnected===!1||r.offsetWidth<1&&r.offsetHeight<1)},self:e=>t=>t.target===e.target,ctrl:(e,...t)=>r=>p.ctrl(r)&&t.every(n=>p[n]?p[n](r):r.key===n),shift:(e,...t)=>r=>p.shift(r)&&t.every(n=>p[n]?p[n](r):r.key===n),alt:(e,...t)=>r=>p.alt(r)&&t.every(n=>p[n]?p[n](r):r.key===n),meta:(e,...t)=>r=>p.meta(r)&&t.every(n=>p[n]?p[n](r):r.key===n),arrow:e=>p.arrow,enter:e=>p.enter,escape:e=>p.escape,tab:e=>p.tab,space:e=>p.space,backspace:e=>p.backspace,delete:e=>p.delete,digit:e=>p.digit,letter:e=>p.letter,character:e=>p.character},p={ctrl:e=>e.ctrlKey||e.key==="Control"||e.key==="Ctrl",shift:e=>e.shiftKey||e.key==="Shift",alt:e=>e.altKey||e.key==="Alt",meta:e=>e.metaKey||e.key==="Meta"||e.key==="Command",arrow:e=>e.key.startsWith("Arrow"),enter:e=>e.key==="Enter",escape:e=>e.key.startsWith("Esc"),tab:e=>e.key==="Tab",space:e=>e.key==="\xA0"||e.key==="Space"||e.key===" ",backspace:e=>e.key==="Backspace",delete:e=>e.key==="Delete",digit:e=>/^\d$/.test(e.key),letter:e=>/^[a-zA-Z]$/.test(e.key),character:e=>/^\S$/.test(e.key)},We=(e,t)=>{let r,n,s=a=>{r=!0,setTimeout(()=>{if(r=!1,n)return n=!1,s(a),e(a)},t)};return a=>r?n=!0:(s(a),e(a))},qe=(e,t)=>{let r;return n=>{clearTimeout(r),r=setTimeout(()=>{r=null,e(n)},t)}},P=(e,t,r)=>{r==null||r===!1?e.removeAttribute(t):e.setAttribute(t,r===!0?"":typeof r=="number"||typeof r=="string"?r:"")},te={};function g(e,t,r){let n=te[t];if(!n){let s=/^[\n\s]*if.*\(.*\)/.test(t)||/\b(let|const)\s/.test(t)&&!r.startsWith(":on")?`(() => {${t}})()`:t;try{n=te[t]=new Function("__scope",`with (__scope) { return ${s.trim()} };`)}catch(a){return I(a,e,t,r)}}return s=>{let a;try{a=n.call(e,s)}catch(o){return I(o,e,t,r)}return a}}function I(e,t,r,n){Object.assign(e,{element:t,expression:r}),console.warn(`\u2234 ${e.message}

${n}=${r?`"${r}"

`:""}`,t),queueMicrotask(()=>{throw e},0)}function se(e){return e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,t=>"-"+t.toLowerCase())}x.globals=K;var B=new WeakMap;function x(e,t){if(!e.children)return;if(B.has(e))return Object.assign(B.get(e),t);let r=E(t||{}),n=[],s=(a,o=a.parentNode)=>{for(let i in D){let c=":"+i;if(a.hasAttribute?.(c)){let u=a.getAttribute(c);if(a.removeAttribute(c),n.push(D[i](a,u,r,i)),B.has(a)||a.parentNode!==o)return!1}}if(a.attributes)for(let i=0;i<a.attributes.length;){let c=a.attributes[i];if(c.name[0]!==":"){i++;continue}a.removeAttribute(c.name);let u=c.value,h=c.name.slice(1).split(":");for(let d of h){let f=v[d]||ne;if(n.push(f(a,u,r,d)),B.has(a)||a.parentNode!==o)return!1}}for(let i=0,c;c=a.children[i];i++)s(c,a)===!1&&i--};s(e);for(let a of n)if(a){let o;J(()=>{typeof o=="function"&&o(),o=a(r)})}return B.set(e,r),r}var z=x;var je=_e(ye());var V=e=>new Promise((t,r)=>{let n=new FileReader;n.addEventListener("loadend",s=>{t(s.target.result)}),n.addEventListener("error",r),n.readAsArrayBuffer(e)});function Z(e,t){if(!t)return e.play(),()=>e.pause();t.start||=0,e.currentTime=t.start;let r=()=>{if(e.readyState===0)return;let i=e.preload==="auto";i&&(e.preload="none"),e.currentTime<0&&(e.currentTime=0),e.currentTime>t.end&&(e.currentTime=t.end),i&&(e.preload="auto")},n,s=()=>{if(clearInterval(n),e.currentTime>=t.end){if(e.loop){e.currentTime=t.start;return}e.pause(),e.dispatchEvent(new Event("ended"));return}e.currentTime+.2>t.end&&(n=setInterval(s,10))},a=()=>{e.currentTime>=t.end&&(e.currentTime=t.start)};e.addEventListener("durationchange",r),e.addEventListener("seeking",r),e.addEventListener("timeupdate",s);let o=setInterval(s,50);return e.addEventListener("playing",a),e.play(),()=>{e.removeEventListener("durationchange",r),e.removeEventListener("seeking",r),e.removeEventListener("timeupdate",s),e.removeEventListener("playing",a),clearInterval(o),clearInterval(n),e.pause()}}history.scrollRestoration="manual";var R=document.querySelector(".wavearea"),C=R.querySelector(".w-editable"),Nt=R.querySelector(".w-played"),we=R.querySelector(".w-timecodes"),Ke=R.querySelector(".w-play"),ze=R.querySelector(".w-waveform"),Ae=R.querySelector(".w-caret-line"),m=new Audio,ve=new Worker("./dist/worker.js",{type:"module"}),Oe=new AudioContext;Object.assign(z.globals,{clearInterval:clearInterval.bind(window),setInterval:setInterval.bind(window),raf:window.requestAnimationFrame.bind(window)});var l=z(R,{isMouseDown:!1,loading:!1,recording:!1,playing:!1,selecting:!1,scrolling:!1,clipStart:0,loop:!1,clipEnd:null,_startTime:0,_startTimeOffset:0,volume:1,segments:[],total:0,duration:0,caretOffscreen:0,caretOffset:0,caretY:ze.getBoundingClientRect().top,caretX:0,cols:216,async handleCaret(){let e=k();!e||e.start===l.caretOffset&&e.collapsed||(l.caretOffset=e.start,l.updateCaretLine(e),l.clipStart=l.caretOffset,l.playing?(l._startTime=performance.now()*.001,l._startTimeOffset=l.caretOffset):(l.clipEnd=e.collapsed?l.total:e.end,l.loop=m.loop=!e.collapsed),m.currentTime=l.duration*l.caretOffset/l.total)},async handleBeforeInput(e){let t=Ve[e.inputType];t?t.call(this,e):(e.preventDefault(),e.stopPropagation(),e.data===". "&&k(l.caretOffset))},async handleDrop(e){let r=e.dataTransfer.files[0];if(!r.type.startsWith("audio"))return!1;l.loading=!0,l.segments=[];let n=await V(r),s=await decodeAudio(n),a=await encodeAudio(s),o=new Blob([a],{type:"audio/wav"}),i=URL.createObjectURL(o);return await applyOp(["src",i]),l.loading=!1,n},async handleFile(e){l.loading="Decoding";let t=e.target.files[0],r=await V(t),n=await Oe.decodeAudioData(r),s=Array.from({length:n.numberOfChannels},a=>n.getChannelData(a));await ke(["file",{name:t.name,numberOfChannels:n.numberOfChannels,sampleRate:n.sampleRate,length:n.length,channelData:s}]),l.loading=!1},scrollIntoCaret(){l.caretOffscreen&&!l.scrolling&&(Ae.scrollIntoView({behavior:"smooth",block:"center"}),l.scrolling=!0,setTimeout(()=>l.scrolling=!1,500))},play(e){l.playing=!0,C.focus(),l.caretOffset===l.total&&k(l.caretOffset=l.clipStart=0),l.scrollIntoCaret();let{clipStart:t,clipEnd:r,loop:n}=l,s=()=>Ke.click(),a;l._startTime,l._startTimeOffset=l.caretOffset;let o=()=>{l._startTime=performance.now()*.001,cancelAnimationFrame(a),i()},i=()=>{if(!l.selecting){let u=performance.now()*.001-l._startTime,h=Math.min(l._startTimeOffset+Math.round(l.total*u/l.duration),l.total);n&&(h=Math.min(h,r));let d=k(l.caretOffset=h);l.updateCaretLine(d),l.scrollIntoCaret()}a=requestAnimationFrame(i)};m.addEventListener("play",o),l.loop&&m.addEventListener("seeked",o);let c=Z(m,l.loop&&{start:l.duration*l.clipStart/l.total,end:l.duration*l.clipEnd/l.total});return m.addEventListener("ended",s,{once:!0}),()=>{m.removeEventListener("ended",s),m.removeEventListener("seeked",o),m.removeEventListener("play",o),cancelAnimationFrame(a),a=null,c(),l.playing=!1,l.loop?k(t,r):m.currentTime>=m.duration&&k(l.total),C.focus()}},async goto(e){try{await H(e)}catch{await Te()}k(l.caretOffset)},updateCaretLine(e){let t=e.range.getClientRects(),r=t[t.length-1];l.caretX=r.right,l.caretY=r.top},updateTimecodes(){if(we.replaceChildren(),!C.textContent)return;let e=0;for(let t of C.children){let r=new Range;r.selectNodeContents(C);let n=Math.round(r.getBoundingClientRect().height/r.getClientRects()[1].height);for(let s=0;s<n;s++){let a=document.createElement("a"),o=xe(s*(l.cols||0)+e);a.href=`#${o}`,a.textContent=o,we.appendChild(a)}e+=t.textContent.length}},timecode:xe}),Ve={insertFromDrop(e){console.log("insert from drop",e)},async deleteContentBackward(e){let t=e.getTargetRanges()[0],r=t.startContainer.parentNode.closest(".w-segment"),n=t.endContainer.parentNode.closest(".w-segment"),s=Number(r.dataset.id),a=Number(n.dataset.id),o=t.startOffset+l.segments.slice(0,s).reduce((u,h)=>u+h.length,0),i=t.endOffset+l.segments.slice(0,a).reduce((u,h)=>u+h.length,0);this._deleteTimeout?(clearTimeout(this._deleteTimeout),this._deleteOp[1]--):this._deleteOp=["del",o,i];let c=()=>{ke(this._deleteOp),this._deleteOp=this._deleteTimeout=null};this._deleteTimeout=setTimeout(c,280)}},k=(e,t)=>{let r=window.getSelection();if(e!=null){Array.isArray(e)&&(e=U(...e)),Array.isArray(t)&&(t=U(...t)),e=Math.max(0,e),t==null&&(t=e);let[i,c]=Ce(e),[u,h]=Ce(t),d=r.getRangeAt(0);if(!(d.startContainer===i.firstChild&&d.startOffset===c)&&!(d.endContainer===u.firstChild&&d.endOffset===h)){r.removeAllRanges();let f=new Range;f.setStart(i.firstChild,c),f.setEnd(u.firstChild,h),r.addRange(f)}return{start:e,startNode:i,end:t,endNode:u,startNodeOffset:c,endNodeOffset:h,collapsed:r.isCollapsed,range:r.getRangeAt(0)}}if(!r.anchorNode||!C.contains(r.anchorNode))return;e=U(r.anchorNode,r.anchorOffset),t=U(r.focusNode,r.focusOffset);let n=r.anchorNode.parentNode.closest(".w-segment"),s=r.anchorOffset,a=r.focusNode.parentNode.closest(".w-segment"),o=r.focusOffset;return e>t&&([t,a,o,e,n,s]=[e,n,s,t,a,o]),{start:e,startNode:n,startNodeOffset:s,end:t,endNode:a,endNodeOffset:o,collapsed:r.isCollapsed,range:r.getRangeAt(0)}};function U(e,t){let r=e.parentNode.closest(".w-segment"),n=W(r.textContent.slice(0,t)).length;for(;r=r.previousSibling;)n+=W(r.textContent).length;return n}function Ce(e){let t=C.firstChild,r;for(;e>(r=W(t.textContent).length);)e-=r,t=t.nextSibling;let n=0;for(let s=t.textContent,a=0;a<e;a++)for(;s[a+n]>="\u0300";)n++;return[t,e+n]}function xe(e,t=0){let r=e/l?.total*l?.duration||0;return`${Math.floor(r/60).toFixed(0)}:${(Math.floor(r)%60).toFixed(0).padStart(2,0)}${t?`.${(r%1).toFixed(t).slice(2).padStart(t)}`:""}`}var Ze=new IntersectionObserver(([e])=>{l.caretOffscreen=e.isIntersecting?0:e.intersectionRect.top<=e.rootBounds.top?1:e.intersectionRect.bottom>=e.rootBounds.bottom?-1:0},{threshold:.999,rootMargin:"0px"});Ze.observe(Ae);var He=new ResizeObserver(e=>{l.cols=be(),l.updateTimecodes()});He.observe(C);function be(){let e=new Range,t=C.firstChild.firstChild;if(!t?.textContent)return;let r=t.textContent;e.setStart(t,0),e.setEnd(t,1);let n=e.getClientRects()[0].y;for(var s=0,a=0;s<r.length;a++){let o=1;for(;r[s+o]>="\u0300";)o++;e.setStart(t,0),e.setEnd(t,s=s+o);let i=e.getClientRects();if(i[i.length-1].y>n)return a}return r.length}async function ke(...e){let t=new URL(location);for(let n of e){let[s,...a]=n;a[0].name?t.searchParams.set(s,a[0].name):t.searchParams.has(s)?t.searchParams.set(s,`${t.searchParams.get(s)}..${a.join("-")}`):t.searchParams.append(s,a.join("-"))}l.loading="Processing";let r=await Re(...e);return history.pushState(r,"",decodeURI(t)),l.loading=!1,C.textContent&&console.assert(r.segments.join("")===C.textContent,"Rendered waveform is different from UI"),H(r)}function Re(...e){return new Promise(t=>{ve.postMessage({id:history.state?.id||0,ops:e}),ve.addEventListener("message",r=>{t(r.data)},{once:!0})})}function W(e){return e.replace(/\u0300|\u0301/g,"")}function H({url:e,segments:t,duration:r,offsets:n}){return l.total=t.reduce((s,a)=>s+=W(a).length,0),l.duration=r,l.segments=t,l.cols||(l.cols=be()),l.updateTimecodes(),m.src=e,m.preload="metadata",new Promise((s,a)=>{m.addEventListener("error",a),m.addEventListener("loadedmetadata",()=>{m.currentTime=r*l.caretOffset/l.total||0},{once:!0})})}async function Te(e=new URL(location)){l.loading="Fetching";let t=[];for(let[n,s]of e.searchParams)t.push(...s.split("..").map(a=>[n,...n==="src"||n==="file"?[a]:a.split("-")]));if(t[0][0]==="src"){let[,n]=t.shift(),a=await(await fetch(n,{cache:"force-cache"})).arrayBuffer();l.loading="Decoding";let o=await Oe.decodeAudioData(a),i=Array.from({length:o.numberOfChannels},c=>o.getChannelData(c));t.push(["file",{name:n,numberOfChannels:o.numberOfChannels,sampleRate:o.sampleRate,length:o.length,channelData:i}])}let r=await Re(...t);history.replaceState(r,"",decodeURI(e)),H(r),l.loading=!1}location.search.length&&Te();
//# sourceMappingURL=wavearea.js.map
