(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80],{3563:function(t,e,n){Promise.resolve().then(n.bind(n,2853))},2853:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var a,r=n(7437),i=n(2265),o=n(6648);async function s(){try{let t=new URLSearchParams({email:"a.galiev@innopolis.university"}),e=await fetch("".concat("https://fwd.innopolis.university/api/hw2","?").concat(t.toString()));if(!e.ok)throw Error("Network isn't ok!");let n=await e.json();return console.log("Api response:",n),n}catch(t){console.error("Error fetching id",t),alert("Look to console");return}}async function u(t){try{let e=await fetch("".concat("https://fwd.innopolis.university/api/comic","?id=").concat(t));if(!e.ok)throw Error("Network isn't ok!");let n=await e.json();return console.log("Comic Data:",n),n}catch(t){console.error("Error fetching data",t),alert("Look to console");return}}function l(t){let e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):new Date("number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?t:NaN)}function c(t,e){let n=l(t),a=l(e),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}let d={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function h(t){return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}let m={date:h({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:h({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:h({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(t){return(e,n)=>{let a;if("formatting"===((null==n?void 0:n.context)?String(n.context):"standalone")&&t.formattingValues){let e=t.defaultFormattingWidth||t.defaultWidth,r=(null==n?void 0:n.width)?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{let e=t.defaultWidth,r=(null==n?void 0:n.width)?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function y(t){return function(e){let n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;let s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(u)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}(u,t=>t.test(s)):function(t,e){for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}(u,t=>t.test(s));return n=t.valueCallback?t.valueCallback(l):l,{value:n=a.valueCallback?a.valueCallback(n):n,rest:e.slice(s.length)}}}let b={code:"en-US",formatDistance:(t,e,n)=>{let a;let r=d[t];return(a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null==n?void 0:n.addSuffix)?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:m,formatRelative:(t,e,n,a)=>f[t],localize:{ordinalNumber:(t,e)=>{let n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(a={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(a.matchPattern);if(!n)return null;let r=n[0],i=t.match(a.parsePattern);if(!i)return null;let o=a.valueCallback?a.valueCallback(i[0]):i[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},w={};function v(t){let e=l(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}var p=n(356),M=n(6098),D=n.n(M),x=()=>{let[t,e]=(0,i.useState)(null);(0,i.useEffect)(()=>{(async()=>{let t=await s();if(t){let n=await u(t);n&&e(n)}})()},[]);let n=t=>{let e;let n=/(\{{2}[^}]+\}{2})|(\[{2}[^]]+\]{2})|(\n)|([^{[]+)/g,a=[];for(;null!==(e=n.exec(t));)e[1]?a.push((0,r.jsx)("em",{children:e[1].slice(2,-2)})):e[2]?a.push((0,r.jsx)("strong",{children:e[2].slice(2,-2)})):e[3]?a.push((0,r.jsx)("br",{})):e[4]&&a.push(e[4]);return a};return(0,r.jsxs)("main",{className:D().comics,children:[(0,r.jsx)("article",{className:"comics_content",children:t?(t=>{var e,a,i;let s=new Date(parseInt(t.year),parseInt(t.month)-1,parseInt(t.day));return(0,r.jsxs)("div",{className:D().comic,children:[(0,r.jsx)("h2",{children:t.safe_title}),(0,r.jsx)(o.default,{src:t.img,alt:t.alt,width:"500",height:"500"}),(0,r.jsx)("time",{dateTime:s.toISOString(),children:(a={addSuffix:!0},function(t,e,n){var a,r,i,o,s,u;let d,h,m;let f=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:w.locale)&&void 0!==r?r:b,g=c(t,e);if(isNaN(g))throw RangeError("Invalid time value");let y=Object.assign({},n,{addSuffix:null==n?void 0:n.addSuffix,comparison:g});g>0?(d=l(e),h=l(t)):(d=l(t),h=l(e));let p=(i=h,o=d,(u=null==void 0?void 0:(void 0).roundingMethod,t=>{let e=(u?Math[u]:Math.trunc)(t);return 0===e?0:e})((+l(i)-+l(o))/1e3)),M=Math.round((p-(v(h)-v(d))/1e3)/60);if(M<2){if(null==n?void 0:n.includeSeconds){if(p<5)return f.formatDistance("lessThanXSeconds",5,y);if(p<10)return f.formatDistance("lessThanXSeconds",10,y);if(p<20)return f.formatDistance("lessThanXSeconds",20,y);if(p<40)return f.formatDistance("halfAMinute",0,y);else if(p<60)return f.formatDistance("lessThanXMinutes",1,y);else return f.formatDistance("xMinutes",1,y)}return 0===M?f.formatDistance("lessThanXMinutes",1,y):f.formatDistance("xMinutes",M,y)}if(M<45)return f.formatDistance("xMinutes",M,y);if(M<90)return f.formatDistance("aboutXHours",1,y);if(M<1440)return f.formatDistance("aboutXHours",Math.round(M/60),y);if(M<2520)return f.formatDistance("xDays",1,y);if(M<43200)return f.formatDistance("xDays",Math.round(M/1440),y);if(M<86400)return m=Math.round(M/43200),f.formatDistance("aboutXMonths",m,y);if((m=function(t,e){let n;let a=l(t),r=l(e),i=c(a,r),o=Math.abs(function(t,e){let n=l(t),a=l(e);return 12*(n.getFullYear()-a.getFullYear())+(n.getMonth()-a.getMonth())}(a,r));if(o<1)n=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-i*o);let e=c(a,r)===-i;(function(t){let e=l(t);return+function(t){let e=l(t);return e.setHours(23,59,59,999),e}(e)==+function(t){let e=l(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}(e)})(l(t))&&1===o&&1===c(t,r)&&(e=!1),n=i*(o-Number(e))}return 0===n?0:n}(h,d))<12)return f.formatDistance("xMonths",Math.round(M/43200),y);{let t=m%12,e=Math.trunc(m/12);return t<3?f.formatDistance("aboutXYears",e,y):t<9?f.formatDistance("overXYears",e,y):f.formatDistance("almostXYears",e+1,y)}}(e=s,(i=Date.now(),e instanceof Date?new e.constructor(i):new Date(i)),a))}),(0,r.jsx)("p",{children:n(t.transcript)})]})})(t):(0,r.jsx)("p",{children:"Loading..."})}),(0,r.jsx)(p.Z,{page_text:"Main",page_link:"/"})]})}},356:function(t,e,n){"use strict";var a=n(7437),r=n(1713),i=n.n(r),o=n(7138);e.Z=function(t){let{page_link:e,page_text:n}=t;return(0,a.jsx)("button",{className:i().switch_comics,onClick:()=>window.location.href="".concat(e),children:(0,a.jsx)(o.default,{href:e,children:n})})}},6098:function(t){t.exports={comics:"page_comics__6dTPS",comics_content:"page_comics_content__3xgJE",comic:"page_comic__CDH7I"}},1713:function(t){t.exports={switch_comics:"style_switch_comics__Z7B5n"}}},function(t){t.O(0,[275,173,974,971,23,744],function(){return t(t.s=3563)}),_N_E=t.O()}]);