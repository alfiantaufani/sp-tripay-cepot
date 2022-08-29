(function framework7ComponentLoader(e,a){void 0===a&&(a=!0);var t=e.$,r=e.utils,n=(e.getDevice,e.getSupport),l=e.Class,i=(e.Modal,e.ConstructorMethods),s=(e.ModalMethods,r.extend),o=r.nextTick,u=r.deleteProps;function c(e){this.wrapped=e}function v(e){var a,t;function r(a,t){try{var l=e[a](t),i=l.value,s=i instanceof c;Promise.resolve(s?i.wrapped:i).then((function(e){s?r("return"===a?"return":"next",e):n(l.done?"return":"normal",e)}),(function(e){r("throw",e)}))}catch(e){n("throw",e)}}function n(e,n){switch(e){case"return":a.resolve({value:n,done:!0});break;case"throw":a.reject(n);break;default:a.resolve({value:n,done:!1})}(a=a.next)?r(a.key,a.arg):t=null}this._invoke=function(e,n){return new Promise((function(l,i){var s={key:e,arg:n,resolve:l,reject:i,next:null};t?t=t.next=s:(a=t=s,r(e,n))}))},"function"!=typeof e.return&&(this.return=void 0)}function d(e,a){return(d=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}v.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},v.prototype.next=function(e){return this._invoke("next",e)},v.prototype.throw=function(e){return this._invoke("throw",e)},v.prototype.return=function(e){return this._invoke("return",e)};var f=function(e){var a,r;function l(a,r){var l,i=p(l=e.call(this,r,[a])||this),u=n(),c={el:null,inputEl:null,dual:!1,step:1,label:!1,min:0,max:100,value:0,draggableBar:!0,vertical:!1,verticalReversed:!1,formatLabel:null,scale:!1,scaleSteps:5,scaleSubSteps:0,formatScaleLabel:null,limitKnobPosition:"ios"===a.theme};i.useModulesParams(c),i.params=s(c,r);var v=i.params.el;if(!v)return i||p(l);var d=t(v);if(0===d.length)return i||p(l);if(d[0].f7Range)return d[0].f7Range||p(l);var f,g=d.dataset();"step min max value scaleSteps scaleSubSteps".split(" ").forEach((function(e){void 0===r[e]&&void 0!==g[e]&&(i.params[e]=parseFloat(g[e]))})),"dual label vertical verticalReversed scale".split(" ").forEach((function(e){void 0===r[e]&&void 0!==g[e]&&(i.params[e]=g[e])})),i.params.value||(void 0!==g.value&&(i.params.value=g.value),void 0!==g.valueLeft&&void 0!==g.valueRight&&(i.params.value=[parseFloat(g.valueLeft),parseFloat(g.valueRight)])),i.params.dual||(i.params.inputEl?f=t(i.params.inputEl):d.find('input[type="range"]').length&&(f=d.find('input[type="range"]').eq(0)));var h=i.params,m=h.dual,b=h.step,y=h.label,S=h.min,$=h.max,E=h.value,x=h.vertical,k=h.verticalReversed,R=h.scale,w=h.scaleSteps,M=h.scaleSubSteps,C=h.limitKnobPosition;s(i,{app:a,$el:d,el:d[0],$inputEl:f,inputEl:f?f[0]:void 0,dual:m,step:b,label:y,min:S,max:$,value:E,previousValue:E,vertical:x,verticalReversed:k,scale:R,scaleSteps:w,scaleSubSteps:M,limitKnobPosition:C}),f&&("step min max".split(" ").forEach((function(e){!r[e]&&f.attr(e)&&(i.params[e]=parseFloat(f.attr(e)),i[e]=parseFloat(f.attr(e)))})),void 0!==f.val()&&(i.params.value=parseFloat(f.val()),i.value=parseFloat(f.val()))),i.dual&&d.addClass("range-slider-dual"),i.label&&d.addClass("range-slider-label"),i.vertical?(d.addClass("range-slider-vertical"),i.verticalReversed&&d.addClass("range-slider-vertical-reversed")):d.addClass("range-slider-horizontal");var L=t('<div class="range-bar"></div>'),V=t('<div class="range-bar-active"></div>');L.append(V);var W='\n      <div class="range-knob-wrap">\n        <div class="range-knob"></div>\n        '+(i.label?'<div class="range-knob-label"></div>':"")+"\n      </div>\n    ",P=[t(W)];i.dual&&P.push(t(W)),d.append(L),P.forEach((function(e){d.append(e)}));var T,z,H=[];i.label&&(H.push(P[0].find(".range-knob-label")),i.dual&&H.push(P[1].find(".range-knob-label"))),i.scale&&i.scaleSteps>=1&&(T=t('\n        <div class="range-scale">\n          '+i.renderScale()+"\n        </div>\n      "),d.append(T)),s(i,{knobs:P,labels:H,$barEl:L,$barActiveEl:V,$scaleEl:T}),d[0].f7Range=i;var _,F,A,B,O,j,D,K,X,Y,I,q={};function G(){D=!0}function J(e){if(!z&&(i.params.draggableBar||0!==t(e.target).closest(".range-knob").length)){var a;D=!1,q.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,q.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,"touchstart"===e.type&&(K=e.targetTouches[0].identifier),z=!0,_=void 0,F=d.offset(),A=F.left,B=F.top,i.vertical?(a=(q.y-B)/i.rangeHeight,i.verticalReversed||(a=1-a)):a=i.app.rtl?(A+i.rangeWidth-q.x)/i.rangeWidth:(q.x-A)/i.rangeWidth;var r=a*(i.max-i.min)+i.min;i.dual?Math.abs(i.value[0]-r)<Math.abs(i.value[1]-r)?(j=0,O=i.knobs[0],r=[r,i.value[1]]):(j=1,O=i.knobs[1],r=[i.value[0],r]):(O=i.knobs[0],r=a*(i.max-i.min)+i.min),o((function(){z&&O.addClass("range-knob-active-state")}),70),i.on("change",G),i.setValue(r,!0)}}function N(e){if(z){var a,t;if("touchmove"===e.type)for(var r=0;r<e.targetTouches.length;r+=1)e.targetTouches[r].identifier===K&&(a=e.targetTouches[r].pageX,t=e.targetTouches[r].pageY);else a=e.pageX,t=e.pageY;if(void 0!==a||void 0!==t)if(void 0!==_||i.vertical||(_=!!(_||Math.abs(t-q.y)>Math.abs(a-q.x))),_)z=!1;else{var n;e.preventDefault(),i.vertical?(n=(t-B)/i.rangeHeight,i.verticalReversed||(n=1-n)):n=i.app.rtl?(A+i.rangeWidth-a)/i.rangeWidth:(a-A)/i.rangeWidth;var l,s,o=n*(i.max-i.min)+i.min;if(i.dual)0===j?(l=o)>(s=i.value[1])&&(s=l):(s=o)<(l=i.value[0])&&(l=s),o=[l,s];i.setValue(o,!0)}}}function Q(e){if("touchend"===e.type){for(var a,t=0;t<e.changedTouches.length;t+=1)e.changedTouches[t].identifier===K&&(a=!0);if(!a)return}if(!z)return _&&O.removeClass("range-knob-active-state"),void(z=!1);i.off("change",G),z=!1,O.removeClass("range-knob-active-state"),D&&i.$inputEl&&!i.dual&&i.$inputEl.trigger("change"),D=!1,void 0!==i.previousValue&&(i.dual&&(i.previousValue[0]!==i.value[0]||i.previousValue[1]!==i.value[1])||!i.dual&&i.previousValue!==i.value)&&(i.$el.trigger("range:changed",i.value),i.emit("local::changed rangeChanged",i,i.value))}function U(){i.calcSize(),i.layout()}return i.attachEvents=function(){var e=!!u.passiveListener&&{passive:!0};i.$el.on(a.touchEvents.start,J,e),a.on("touchmove",N),a.on("touchend:passive",Q),a.on("tabShow",U),a.on("resize",U),(X=i.$el.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast")).on("modal:open",U),(Y=i.$el.parents(".panel")).on("panel:open panel:resize",U),(I=i.$el.parents(".page").eq(0)).on("page:reinit",U)},i.detachEvents=function(){var e=!!u.passiveListener&&{passive:!0};i.$el.off(a.touchEvents.start,J,e),a.off("touchmove",N),a.off("touchend:passive",Q),a.off("tabShow",U),a.off("resize",U),X&&X.off("modal:open",U),Y&&Y.off("panel:open panel:resize",U),I&&I.off("page:reinit",U),X=null,Y=null,I=null},i.useModules(),i.init(),i||p(l)}r=e,(a=l).prototype=Object.create(r.prototype),a.prototype.constructor=a,d(a,r);var i=l.prototype;return i.calcSize=function(){var e=this;if(e.vertical){var a=e.$el.outerHeight();if(0===a)return;e.rangeHeight=a,e.knobHeight=e.knobs[0].outerHeight()}else{var t=e.$el.outerWidth();if(0===t)return;e.rangeWidth=t,e.knobWidth=e.knobs[0].outerWidth()}},i.layout=function(){var e=this,a=e.app,t=e.knobWidth,r=e.knobHeight,n=e.rangeWidth,l=e.rangeHeight,i=e.min,s=e.max,o=e.knobs,u=e.$barActiveEl,c=e.value,v=e.label,d=e.labels,p=e.vertical,f=e.verticalReversed,g=e.limitKnobPosition,h=p?r:t,m=p?l:n,b=p?f?"top":"bottom":a.rtl?"right":"left";if(e.dual){var y,S=[(c[0]-i)/(s-i),(c[1]-i)/(s-i)];u.css(((y={})[b]=100*S[0]+"%",y[p?"height":"width"]=100*(S[1]-S[0])+"%",y)),o.forEach((function(a,t){var r=m*S[t];if(g){var n=m*S[t]-h/2;n<0&&(r=h/2),n+h>m&&(r=m-h/2)}a.css(b,r+"px"),v&&d[t].text(e.formatLabel(c[t],d[t][0]))}))}else{var $=(c-i)/(s-i);u.css(p?"height":"width",100*$+"%");var E=m*$;if(g){var x=m*$-h/2;x<0&&(E=h/2),x+h>m&&(E=m-h/2)}o[0].css(b,E+"px"),v&&d[0].text(e.formatLabel(c,d[0][0]))}e.dual&&c.indexOf(i)>=0||!e.dual&&c===i?e.$el.addClass("range-slider-min"):e.$el.removeClass("range-slider-min"),e.dual&&c.indexOf(s)>=0||!e.dual&&c===s?e.$el.addClass("range-slider-max"):e.$el.removeClass("range-slider-max")},i.setValue=function(e,a){var t,r,n=this,l=n.step,i=n.min,s=n.max;if(n.dual){r=[n.value[0],n.value[1]];var o=e;if(Array.isArray(o)||(o=[e,e]),e[0]>e[1]&&(o=[o[0],o[0]]),(o=o.map((function(e){return Math.max(Math.min(Math.round(e/l)*l,s),i)})))[0]===n.value[0]&&o[1]===n.value[1])return n;o.forEach((function(e,a){n.value[a]=e})),t=r[0]!==o[0]||r[1]!==o[1],n.layout()}else{r=n.value;var u=Math.max(Math.min(Math.round(e/l)*l,s),i);n.value=u,n.layout(),t=r!==u}return t&&(n.previousValue=r),t?(n.$el.trigger("range:change",n.value),n.$inputEl&&!n.dual&&(n.$inputEl.val(n.value),a?n.$inputEl.trigger("input"):n.$inputEl.trigger("input change")),a||(n.$el.trigger("range:changed",n.value),n.emit("local::changed rangeChanged",n,n.value)),n.emit("local::change rangeChange",n,n.value),n):n},i.getValue=function(){return this.value},i.formatLabel=function(e,a){var t=this;return t.params.formatLabel?t.params.formatLabel.call(t,e,a):e},i.formatScaleLabel=function(e){var a=this;return a.params.formatScaleLabel?a.params.formatScaleLabel.call(a,e):e},i.renderScale=function(){var e=this,a=e.app,t=e.verticalReversed,r=e.vertical?t?"top":"bottom":a.rtl?"right":"left",n="";return Array.from({length:e.scaleSteps+1}).forEach((function(a,t){var l=(e.max-e.min)/e.scaleSteps,i=e.min+l*t,s=(i-e.min)/(e.max-e.min);n+='<div class="range-scale-step" style="'+r+": "+100*s+'%">'+e.formatScaleLabel(i)+"</div>",e.scaleSubSteps&&e.scaleSubSteps>1&&t<e.scaleSteps&&Array.from({length:e.scaleSubSteps-1}).forEach((function(a,t){var s=l/e.scaleSubSteps,o=(i+s*(t+1)-e.min)/(e.max-e.min);n+='<div class="range-scale-step range-scale-substep" style="'+r+": "+100*o+'%"></div>'}))})),n},i.updateScale=function(){var e=this;if(!e.scale||e.scaleSteps<1)return e.$scaleEl&&e.$scaleEl.remove(),void delete e.$scaleEl;e.$scaleEl||(e.$scaleEl=t('<div class="range-scale"></div>'),e.$el.append(e.$scaleEl)),e.$scaleEl.html(e.renderScale())},i.init=function(){var e=this;return e.calcSize(),e.layout(),e.attachEvents(),e},i.destroy=function(){var e=this;e.$el.trigger("range:beforedestroy"),e.emit("local::beforeDestroy rangeBeforeDestroy",e),delete e.$el[0].f7Range,e.detachEvents(),u(e),e=null},l}(l),g={name:"range",create:function(){var e=this;e.range=s(i({defaultSelector:".range-slider",constructor:f,app:e,domProp:"f7Range"}),{getValue:function(a){void 0===a&&(a=".range-slider");var t=e.range.get(a);if(t)return t.getValue()},setValue:function(a,t){void 0===a&&(a=".range-slider");var r=e.range.get(a);if(r)return r.setValue(t)}})},static:{Range:f},on:{tabMounted:function(e){var a=this;t(e).find(".range-slider-init").each((function(e){return new f(a,{el:e})}))},tabBeforeRemove:function(e){t(e).find(".range-slider-init").each((function(e){e.f7Range&&e.f7Range.destroy()}))},pageInit:function(e){var a=this;e.$el.find(".range-slider-init").each((function(e){return new f(a,{el:e})}))},pageBeforeRemove:function(e){e.$el.find(".range-slider-init").each((function(e){e.f7Range&&e.f7Range.destroy()}))}},vnode:{"range-slider-init":{insert:function(e){var a=e.elm;this.range.create({el:a})},destroy:function(e){var a=e.elm;a.f7Range&&a.f7Range.destroy()}}}};if(a){if(e.prototype.modules&&e.prototype.modules[g.name])return;e.use(g),e.instance&&(e.instance.useModuleParams(g,e.instance.params),e.instance.useModule(g))}return g}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))