(()=>{"use strict";var t={p:""};t.p;const e=t.p+"assets/american_express23a3dfa76c9c691ff89c.png",s=t.p+"assets/discoverdde5b0a44a37a5ef0adb.png",i=t.p+"assets/jcbea12dadf329b6c152c29.png",a=t.p+"assets/mastercard5ca1f088ecdd58e47981.png",n=t.p+"assets/mir87c821f861055ab568f1.png",r=t.p+"assets/visa545145c60c726b397f61.png";const c=[{paymentSystem:"МИР",regex:"^220\\d*",ln:16,image:"mir"},{paymentSystem:"Visa",regex:"^4[0-9]{12}(?:[0-9]{3})(?:[0-9]{3})?$",ln:[13,16,19],image:"visa"},{paymentSystem:"MasterCard",regex:"^((2720[0-9]{2})|(27[0-1][0-9]{3})|(2[3-6][0-9]{4})|(22[3-9][0-9]{3})|(222[1-9][0-9]{2})|(5[1-5]))\\d*",ln:16,image:"mastercard"},{paymentSystem:"American Express",regex:"^3[47][0-9]{13}",ln:15,image:"american-express"},{paymentSystem:"Discover",regex:"^((62292[0-5])|(6229[0-1][0-9]{1})|(622[2-8][0-9]{2})|(6221[3-9][0-9]{1})|(62212[6-9])|(64[4-9])|(6011)|(65))\\d*",ln:[16,19],image:"discover"},{paymentSystem:"JCB",regex:"^((35[3-8][0-9]{1})|(352[8-9]))\\d*",ln:[16,19],image:"jcb"}];class d{constructor(t){this.cards=t}checkLength(t){return"object"==typeof t?t.includes(this.input.length):this.input.length===t}check(t){this.input=t;const e=[];return this.cards.forEach((s=>{const i=new RegExp(s.regex),a=s.ln;i.exec(t)&&this.input.length>12&&this.checkLength(a)&&e.push(s)})),e}}class l{constructor(){this.sum=0,this.nDigits=0,this.parity=0}check(t){this.nDigits=t.length,this.sum=parseInt(t[this.nDigits-1],10),this.parity=this.nDigits%2;for(let e=0;e<=this.nDigits-2;e+=1){let s=parseInt(t[e],10);e%2===this.parity&&(s*=2),s>9&&(s-=9),this.sum+=s}return this.sum%10==0&&0!==t?"pass":"fail"}}const o=new class{constructor(t){this.cards=t,this.container=null,this.images={mir:n,visa:r,mastercard:a,"american-express":e,discover:s,jcb:i}}bindToDOM(t){if(!(t instanceof HTMLElement))throw new Error('Контейнер не является элементом "HTMLElement"');this.container=t}drawUi(){const t=document.createElement("form");t.setAttribute("data-widget","creditCard-form-widget"),this.container.append(t);const e=document.createElement("div");e.classList.add("form-logo"),t.append(e),this.cards.forEach((t=>{if(!this.container.querySelector(`${t.image}`)){const s=document.createElement("img");s.id=t.image,s.classList.add("logo");const i=this.images[t.image];s.src=i,s.alt=t.paymentSystem,e.append(s)}}));const s=document.createElement("div");s.classList.add("form-container"),t.append(s);const i=document.createElement("div");i.classList.add("form-control"),s.append(i);const a=document.createElement("label");a.setAttribute("for","creditCard-input"),i.append(a);const n=document.createElement("input");n.id="creditCard-input",n.setAttribute("data-id","creditCard-input"),n.setAttribute("type","text"),i.append(n);const r=document.createElement("div");r.classList.add("form-button"),s.append(r);const c=document.createElement("button");c.setAttribute("data-id","creditCard-submit"),c.textContent="Проверить карту",r.append(c);const d=document.createElement("div");d.classList.add("form-message"),t.append(d),this.formEl=this.container.querySelector('[data-widget="creditCard-form-widget"]'),this.inputEl=this.container.querySelector('[data-id="creditCard-input"]'),this.btnEl=this.container.querySelector('[data-id="creditCard-submit"]'),this.messageEl=this.container.querySelector(".form-message"),this.logoColection=this.container.querySelectorAll(".logo")}showStatus(t,e){this.messageEl.classList.add(e),this.inputEl.classList.add(t)}clearStatus(){const t=this.messageEl.classList,e=Array.from(t).filter((t=>"messageValid"===t||"messageInvalid"===t));e.length&&this.messageEl.classList.remove(e);const s=this.inputEl.classList,i=Array.from(s).filter((t=>"valid"===t||"invalid"===t));i.length&&this.inputEl.classList.remove(i)}}(c);o.bindToDOM(document.querySelector("#card-container"));const m=new class{constructor(t){this.cardUi=t,this.paymentSystem=new d(this.cardUi.cards),this.validator=new l,this.match=[]}init(){this.cardUi.drawUi(),this.cardUi.formEl.addEventListener("submit",(()=>!1)),this.cardUi.inputEl.setAttribute("maxlength",19),this.cardUi.inputEl.addEventListener("input",(()=>{this.match=this.paymentSystem.check(this.cardUi.inputEl.value),this.cardUi.cards.forEach((t=>{const e=document.getElementById(`${t.image}`);e.classList.remove("bright"),this.match.includes(t)&&e.classList.add("bright")}))})),this.cardUi.btnEl.addEventListener("click",(t=>{t.preventDefault();const e=this.cardUi.messageEl.querySelectorAll(".cardTitle");let s,i,a;e.length&&Array.from(e).forEach((t=>{t.remove()})),this.cardUi.clearStatus();let n=this.validator.check(this.cardUi.inputEl.value);"pass"===n&&0===this.match.length&&(n="fail"),"pass"===n?(s="valid",i="messageValid",a="действителен."):(s="invalid",i="messageInvalid",a="не действующий!"),this.cardUi.showStatus(s,i);const r=document.createElement("div");r.className="cardTitle",this.match.length?this.match.forEach((t=>{r.innerHTML=`Платежная система: ${t.paymentSystem}  - Номер кредитной карты: ${a}`})):r.innerHTML="ВНИМАНИЕ! Не могу определить платежную систему",this.cardUi.messageEl.append(r)}))}}(o);m.init()})();