import{j as ve}from"./jsx-runtime-CKrituN3.js";import{r as N}from"./index-CBqU2yxZ.js";import"./index-DQxsDPTp.js";import{_ as $e,u as Ne}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DZp7yd2Y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./chunk-JWY6Y6NU-CcZm9pmn.js";import"./react-18-Bym-zv4b.js";function xe(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Me=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ie=xe(function(e){return Me.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Le(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Fe(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var ze=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Fe(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Le(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),S="-ms-",K="-moz-",f="-webkit-",we="comm",ie="rule",se="decl",De="@import",ke="@keyframes",We="@layer",He=Math.abs,J=String.fromCharCode,qe=Object.assign;function je(e,r){return w(e,0)^45?(((r<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function Se(e){return e.trim()}function Ue(e,r){return(e=r.exec(e))?e[0]:e}function l(e,r,t){return e.replace(r,t)}function te(e,r){return e.indexOf(r)}function w(e,r){return e.charCodeAt(r)|0}function W(e,r,t){return e.slice(r,t)}function R(e){return e.length}function oe(e){return e.length}function G(e,r){return r.push(e),e}function Ve(e,r){return e.map(r).join("")}var Q=1,L=1,Ce=0,C=0,v=0,F="";function ee(e,r,t,n,a,i,s){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:Q,column:L,length:s,return:""}}function z(e,r){return qe(ee("",null,null,"",null,null,0),e,{length:-e.length},r)}function Ge(){return v}function Be(){return v=C>0?w(F,--C):0,L--,v===10&&(L=1,Q--),v}function T(){return v=C<Ce?w(F,C++):0,L++,v===10&&(L=1,Q++),v}function $(){return w(F,C)}function B(){return C}function j(e,r){return W(F,e,r)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pe(e){return Q=L=1,Ce=R(F=e),C=0,[]}function Ae(e){return F="",e}function X(e){return Se(j(C-1,ne(e===91?e+2:e===40?e+1:e)))}function Xe(e){for(;(v=$())&&v<33;)T();return H(e)>2||H(v)>3?"":" "}function Ye(e,r){for(;--r&&T()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return j(e,B()+(r<6&&$()==32&&T()==32))}function ne(e){for(;T();)switch(v){case e:return C;case 34:case 39:e!==34&&e!==39&&ne(v);break;case 40:e===41&&ne(e);break;case 92:T();break}return C}function Ke(e,r){for(;T()&&e+v!==57;)if(e+v===84&&$()===47)break;return"/*"+j(r,C-1)+"*"+J(e===47?e:T())}function Ze(e){for(;!H($());)T();return j(e,C)}function Je(e){return Ae(Y("",null,null,null,[""],e=Pe(e),0,[0],e))}function Y(e,r,t,n,a,i,s,o,m){for(var x=0,d=0,h=s,O=0,P=0,p=0,c=1,g=1,y=1,b=0,k="",M=a,E=i,A=n,u=k;g;)switch(p=b,b=T()){case 40:if(p!=108&&w(u,h-1)==58){te(u+=l(X(b),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:u+=X(b);break;case 9:case 10:case 13:case 32:u+=Xe(p);break;case 92:u+=Ye(B()-1,7);continue;case 47:switch($()){case 42:case 47:G(Qe(Ke(T(),B()),r,t),m);break;default:u+="/"}break;case 123*c:o[x++]=R(u)*y;case 125*c:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+d:y==-1&&(u=l(u,/\f/g,"")),P>0&&R(u)-h&&G(P>32?fe(u+";",n,t,h-1):fe(l(u," ","")+";",n,t,h-2),m);break;case 59:u+=";";default:if(G(A=ce(u,r,t,x,d,a,o,k,M=[],E=[],h),i),b===123)if(d===0)Y(u,r,A,A,M,i,h,o,E);else switch(O===99&&w(u,3)===110?100:O){case 100:case 108:case 109:case 115:Y(e,A,A,n&&G(ce(e,A,A,0,0,a,o,k,a,M=[],h),E),a,E,h,o,n?M:E);break;default:Y(u,A,A,A,[""],E,0,o,E)}}x=d=P=0,c=y=1,k=u="",h=s;break;case 58:h=1+R(u),P=p;default:if(c<1){if(b==123)--c;else if(b==125&&c++==0&&Be()==125)continue}switch(u+=J(b),b*c){case 38:y=d>0?1:(u+="\f",-1);break;case 44:o[x++]=(R(u)-1)*y,y=1;break;case 64:$()===45&&(u+=X(T())),O=$(),d=h=R(k=u+=Ze(B())),b++;break;case 45:p===45&&R(u)==2&&(c=0)}}return i}function ce(e,r,t,n,a,i,s,o,m,x,d){for(var h=a-1,O=a===0?i:[""],P=oe(O),p=0,c=0,g=0;p<n;++p)for(var y=0,b=W(e,h+1,h=He(c=s[p])),k=e;y<P;++y)(k=Se(c>0?O[y]+" "+b:l(b,/&\f/g,O[y])))&&(m[g++]=k);return ee(e,r,t,a===0?ie:o,m,x,d)}function Qe(e,r,t){return ee(e,r,t,we,J(Ge()),W(e,2,-2),0)}function fe(e,r,t,n){return ee(e,r,t,se,W(e,0,n),W(e,n+1,-1),n)}function I(e,r){for(var t="",n=oe(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function er(e,r,t,n){switch(e.type){case We:if(e.children.length)break;case De:case se:return e.return=e.return||e.value;case we:return"";case ke:return e.return=e.value+"{"+I(e.children,n)+"}";case ie:e.value=e.props.join(",")}return R(t=I(e.children,n))?e.return=e.value+"{"+t+"}":""}function rr(e){var r=oe(e);return function(t,n,a,i){for(var s="",o=0;o<r;o++)s+=e[o](t,n,a,i)||"";return s}}function tr(e){return function(r){r.root||(r=r.return)&&e(r)}}var nr=function(r,t,n){for(var a=0,i=0;a=i,i=$(),a===38&&i===12&&(t[n]=1),!H(i);)T();return j(r,C)},ar=function(r,t){var n=-1,a=44;do switch(H(a)){case 0:a===38&&$()===12&&(t[n]=1),r[n]+=nr(C-1,t,n);break;case 2:r[n]+=X(a);break;case 4:if(a===44){r[++n]=$()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=J(a)}while(a=T());return r},ir=function(r,t){return Ae(ar(Pe(r),t))},le=new WeakMap,sr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!le.get(n))&&!a){le.set(r,!0);for(var i=[],s=ir(t,i),o=n.props,m=0,x=0;m<s.length;m++)for(var d=0;d<o.length;d++,x++)r.props[x]=i[m]?s[m].replace(/&\f/g,o[d]):o[d]+" "+s[m]}}},or=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Te(e,r){switch(je(e,r)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+K+e+S+e+e;case 6828:case 4268:return f+e+S+e+e;case 6165:return f+e+S+"flex-"+e+e;case 5187:return f+e+l(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+S+"flex-$1$2")+e;case 5443:return f+e+S+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return f+e+S+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return f+e+S+l(e,"shrink","negative")+e;case 5292:return f+e+S+l(e,"basis","preferred-size")+e;case 6060:return f+"box-"+l(e,"-grow","")+f+e+S+l(e,"grow","positive")+e;case 4554:return f+l(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+S+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-r>6)switch(w(e,r+1)){case 109:if(w(e,r+4)!==45)break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+K+(w(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~te(e,"stretch")?Te(l(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(w(e,r+1)!==115)break;case 6444:switch(w(e,R(e)-3-(~te(e,"!important")&&10))){case 107:return l(e,":",":"+f)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+f+(w(e,14)===45?"inline-":"")+"box$3$1"+f+"$2$3$1"+S+"$2box$3")+e}break;case 5936:switch(w(e,r+11)){case 114:return f+e+S+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+S+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+S+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return f+e+S+e+e}return e}var cr=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case se:r.return=Te(r.value,r.length);break;case ke:return I([z(r,{value:l(r.value,"@","@"+f)})],a);case ie:if(r.length)return Ve(r.props,function(i){switch(Ue(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return I([z(r,{props:[l(i,/:(read-\w+)/,":"+K+"$1")]})],a);case"::placeholder":return I([z(r,{props:[l(i,/:(plac\w+)/,":"+f+"input-$1")]}),z(r,{props:[l(i,/:(plac\w+)/,":"+K+"$1")]}),z(r,{props:[l(i,/:(plac\w+)/,S+"input-$1")]})],a)}return""})}},fr=[cr],lr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(c){var g=c.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(c),c.setAttribute("data-s",""))})}var a=r.stylisPlugins||fr,i={},s,o=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(c){for(var g=c.getAttribute("data-emotion").split(" "),y=1;y<g.length;y++)i[g[y]]=!0;o.push(c)});var m,x=[sr,or];{var d,h=[er,tr(function(c){d.insert(c)})],O=rr(x.concat(a,h)),P=function(g){return I(Je(g),O)};m=function(g,y,b,k){d=b,P(g?g+"{"+y.styles+"}":y.styles),k&&(p.inserted[y.name]=!0)}}var p={key:t,sheet:new ze({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:m};return p.sheet.hydrate(o),p},ur=!0;function dr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Ee=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||ur===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},hr=function(r,t,n){Ee(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function pr(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var mr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gr=/[A-Z]|^ms/g,yr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Oe=function(r){return r.charCodeAt(1)===45},ue=function(r){return r!=null&&typeof r!="boolean"},re=xe(function(e){return Oe(e)?e:e.replace(gr,"-$&").toLowerCase()}),de=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(yr,function(n,a,i){return _={name:a,styles:i,next:_},a})}return mr[r]!==1&&!Oe(r)&&typeof t=="number"&&t!==0?t+"px":t};function q(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return _={name:t.name,styles:t.styles,next:_},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)_={name:n.name,styles:n.styles,next:_},n=n.next;var a=t.styles+";";return a}return br(e,r,t)}case"function":{if(e!==void 0){var i=_,s=t(e);return _=i,q(e,r,s)}break}}if(r==null)return t;var o=r[t];return o!==void 0?o:t}function br(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=q(e,r,t[a])+";";else for(var i in t){var s=t[i];if(typeof s!="object")r!=null&&r[s]!==void 0?n+=i+"{"+r[s]+"}":ue(s)&&(n+=re(i)+":"+de(i,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(r==null||r[s[0]]===void 0))for(var o=0;o<s.length;o++)ue(s[o])&&(n+=re(i)+":"+de(i,s[o])+";");else{var m=q(e,r,s);switch(i){case"animation":case"animationName":{n+=re(i)+":"+m+";";break}default:n+=i+"{"+m+"}"}}}return n}var he=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_,vr=function(r,t,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,i="";_=void 0;var s=r[0];s==null||s.raw===void 0?(a=!1,i+=q(n,t,s)):i+=s[0];for(var o=1;o<r.length;o++)i+=q(n,t,r[o]),a&&(i+=s[o]);he.lastIndex=0;for(var m="",x;(x=he.exec(i))!==null;)m+="-"+x[1];var d=pr(i)+m;return{name:d,styles:i,next:_}},Re=N.createContext(typeof HTMLElement<"u"?lr({key:"css"}):null);Re.Provider;var xr=function(r){return N.forwardRef(function(t,n){var a=N.useContext(Re);return r(t,a,n)})},wr=N.createContext({}),kr=Ie,Sr=function(r){return r!=="theme"},pe=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?kr:Sr},me=function(r,t,n){var a;if(t){var i=t.shouldForwardProp;a=r.__emotion_forwardProp&&i?function(s){return r.__emotion_forwardProp(s)&&i(s)}:i}return typeof a!="function"&&n&&(a=r.__emotion_forwardProp),a},Cr=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Ee(t,n,a),Ne(function(){return hr(t,n,a)}),null},Pr=function e(r,t){var n=r.__emotion_real===r,a=n&&r.__emotion_base||r,i,s;t!==void 0&&(i=t.label,s=t.target);var o=me(r,t,n),m=o||pe(a),x=!m("as");return function(){var d=arguments,h=n&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(i!==void 0&&h.push("label:"+i+";"),d[0]==null||d[0].raw===void 0)h.push.apply(h,d);else{h.push(d[0][0]);for(var O=d.length,P=1;P<O;P++)h.push(d[P],d[0][P])}var p=xr(function(c,g,y){var b=x&&c.as||a,k="",M=[],E=c;if(c.theme==null){E={};for(var A in c)E[A]=c[A];E.theme=N.useContext(wr)}typeof c.className=="string"?k=dr(g.registered,M,c.className):c.className!=null&&(k=c.className+" ");var u=vr(h.concat(M),g.registered,E);k+=g.key+"-"+u.name,s!==void 0&&(k+=" "+s);var _e=x&&o===void 0?pe(b):m,U={};for(var V in c)x&&V==="as"||_e(V)&&(U[V]=c[V]);return U.className=k,U.ref=y,N.createElement(N.Fragment,null,N.createElement(Cr,{cache:g,serialized:u,isStringTag:typeof b=="string"}),N.createElement(b,U))});return p.displayName=i!==void 0?i:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",p.defaultProps=r.defaultProps,p.__emotion_real=p,p.__emotion_base=a,p.__emotion_styles=h,p.__emotion_forwardProp=o,Object.defineProperty(p,"toString",{value:function(){return"."+s}}),p.withComponent=function(c,g){return e(c,$e({},t,g,{shouldForwardProp:me(p,g,!0)})).apply(void 0,h)},p}},Ar=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ae=Pr.bind();Ar.forEach(function(e){ae[e]=ae(e)});const Tr={s:"10px",m:"16px",l:"24px"},Z=({text:e,className:r=""})=>ve.jsx(Er,{className:r,children:e}),Er=ae.p`
  font-size: ${Tr.m};
`;try{Z.displayName="Text",Z.__docgenInfo={description:"",displayName:"Text",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Fr={title:"Text/Text",component:Z},Or=e=>ve.jsx(Z,{...e}),D=Or.bind({});D.args={text:"hello, world"};var ge,ye,be;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:"args => <Text {...args} />",...(be=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};const zr=["Default"];export{D as Default,zr as __namedExportsOrder,Fr as default};
