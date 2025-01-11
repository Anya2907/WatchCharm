(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const a="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-close'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fbfbfb'%20style='stroke:%20var(--color1,%20%23fbfbfb)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.3529'%20d='M24%208l-16%2016'%3e%3c/path%3e%3cpath%20fill='none'%20stroke='%23fbfbfb'%20style='stroke:%20var(--color1,%20%23fbfbfb)'%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.3529'%20d='M8%208l16%2016'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-facebook'%20viewBox='0%200%2032%2032'%3e%3cpath%20opacity='0.8'%20d='M19.52%204.64c0.24%200%200.48%200%200.96%200v3.6c-0.24%200-0.72%200-1.2%200s-0.96%200-1.2%200.24c-0.24%200.24-0.24%200.48-0.24%201.040%200%200.48%200%200.8%200%201.28h2.64v3.040h-2.64v13.2h-4.080v-13.28h-2.16v-3.040h2.16v-1.040c0-1.76%200.24-3.040%200.72-3.6%200.72-1.040%202.16-1.52%204.32-1.52%200.24%200.080%200.48%200.080%200.72%200.080z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-instagram'%20viewBox='0%200%2032%2032'%3e%3cpath%20opacity='0.8'%20d='M28.718%2010.756c-0.016-1.074-0.215-2.14-0.596-3.145-0.667-1.716-2.024-3.073-3.743-3.737-0.994-0.373-2.044-0.573-3.108-0.596-1.367-0.061-1.801-0.078-5.273-0.078s-3.916%200-5.274%200.078c-1.062%200.023-2.112%200.223-3.106%200.596-1.719%200.664-3.078%202.021-3.743%203.737-0.374%200.992-0.576%202.041-0.596%203.101-0.061%201.367-0.080%201.8-0.080%205.265s0%203.909%200.080%205.265c0.021%201.061%200.222%202.109%200.596%203.104%200.667%201.715%202.024%203.071%203.744%203.735%200.989%200.386%202.040%200.604%203.106%200.639%201.369%200.061%201.803%200.079%205.274%200.079s3.917%200%205.274-0.079c1.062-0.021%202.113-0.221%203.108-0.595%201.719-0.666%203.076-2.022%203.743-3.737%200.374-0.993%200.574-2.041%200.596-3.104%200.061-1.365%200.079-1.798%200.079-5.265-0.003-3.466-0.003-3.906-0.082-5.264zM15.99%2022.531c-3.631%200-6.572-2.936-6.572-6.561s2.941-6.561%206.572-6.561c3.628%200%206.572%202.936%206.572%206.561s-2.944%206.561-6.572%206.561zM22.824%2010.696c-0.849%200-1.532-0.684-1.532-1.53s0.684-1.53%201.532-1.53c0.846%200%201.531%200.684%201.531%201.53s-0.685%201.53-1.531%201.53z'%3e%3c/path%3e%3cpath%20opacity='0.8'%20d='M15.992%2019.976c2.211%200%204.004-1.793%204.004-4.004s-1.793-4.004-4.004-4.004c-2.211%200-4.004%201.793-4.004%204.004s1.793%204.004%204.004%204.004z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-menu-burger'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linejoin='round'%20stroke-linecap='round'%20stroke-miterlimit='4'%20stroke-width='2.3529'%20d='M4%2011.333h24M4%2020.667h24'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-youtube'%20viewBox='0%200%2032%2032'%3e%3cpath%20opacity='0.8'%20d='M24.24%206c-1.36-0.080-4.16-0.16-8.4-0.16h-0.56c-4.080%200-6.8%200.080-8.16%200.24-1.84%200.16-3.12%200.64-3.84%201.28-0.64%200.56-1.12%201.6-1.28%202.96-0.080%200.88-0.16%202.72-0.16%205.52v0.4c0%202.64%200.080%204.48%200.24%205.36%200.24%201.28%200.64%202.24%201.44%202.8%200.8%200.64%202.16%201.040%204.080%201.2%201.36%200.080%204.16%200.16%208.4%200.16h0.56c4.080%200%206.8-0.080%208.16-0.24%201.84-0.16%203.12-0.64%203.84-1.28%200.64-0.56%201.12-1.6%201.28-2.96%200.080-0.88%200.16-2.72%200.16-5.52v-0.4c0-2.64-0.080-4.48-0.24-5.36-0.24-1.28-0.64-2.24-1.44-2.8-0.8-0.64-2.16-1.040-4.080-1.2zM21.12%2015.84l-8.8%205.28v-10.56l8.8%205.28z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",v=document.querySelector(".headerIconFacebook");function C(){return`<a class="list-link-icons menu-list-link-icons" href="">
            <svg class="list-item-icon" width="20" height="20">
              <use href="${a}#icon-facebook"></use>
            </svg>
          </a>`}v.innerHTML=C();const y=document.querySelector(".headerIconInstagram");function T(){return`<a class="list-link-icons menu-list-link-icons" href="">
            <svg class="list-item-icon" width="20" height="20">
              <use href="${a}#icon-instagram"></use>
            </svg>
          </a>`}y.innerHTML=T();const D=document.querySelector(".headerIconYoutube");function I(){return`<a class="list-link-icons menu-list-link-icons" href="">
            <svg class="list-item-icon" width="20" height="20">
              <use href="${a}#icon-youtube"></use>
            </svg>
          </a>`}D.innerHTML=I();const B=document.querySelector(".headerBurger");function S(){return`<svg class="menu-burger-icon" width="34" height="34">
          <use href="${a}#icon-menu-burger"></use>
        </svg>`}B.innerHTML=S();const E=document.querySelector(".footerIconFacebook");function L(){return`<a class="list-link-icons footer-list-link-icons" href="">
                  <svg class="list-item-icon" width="18" height="18">
                    <use
                      href="${a}#icon-facebook"
                    ></use>
                  </svg>
                </a>`}E.innerHTML=L();const R=document.querySelector(".footerIconInstagram");function V(){return`<a class="list-link-icons footer-list-link-icons" href="">
                  <svg class="list-item-icon" width="18" height="18">
                    <use
                      href="${a}#icon-instagram"
                    ></use>
                  </svg>
                </a>`}R.innerHTML=V();const G=document.querySelector(".footerIconYoutube");function Z(){return`<a class="list-link-icons footer-list-link-icons" href="">
                  <svg class="list-item-icon" width="18" height="18">
                    <use
                      href="${a}#icon-youtube"
                    ></use>
                  </svg>
                </a>`}G.innerHTML=Z();const Q=document.querySelector(".mobileMenuCloseIcon");function H(){return`<svg class="mobile-menu-close-icon" width="34" height="34">
        <use href="${a}#icon-close"></use>
      </svg>`}Q.innerHTML=H();const z=document.querySelector(".mobileMenuIconFacebook");function P(){return`<a class="mobile-menu-list-link-icons" href="">
          <svg class="mobile-list-item-icon" width="18" height="18">
            <use href="${a}#icon-facebook"></use>
          </svg>
        </a>`}z.innerHTML=P();const q=document.querySelector(".mobileMenuIconInstagram");function K(){return`<a class="mobile-menu-list-link-icons" href="">
          <svg class="mobile-list-item-icon" width="18" height="18">
            <use href="${a}#icon-instagram"></use>
          </svg>
        </a>`}q.innerHTML=K();const U=document.querySelector(".mobileMenuIconYoutube");function j(){return`<a class="mobile-menu-list-link-icons" href="">
          <svg class="mobile-list-item-icon" width="18" height="18">
            <use href="${a}#icon-youtube"></use>
          </svg>
        </a>`}U.innerHTML=j();const J="/WatchCharm/assets/photo-desktop-DZgTKgeg.png",Y="/WatchCharm/assets/photo-desktop@2x-DFzG8mW0.png",X="/WatchCharm/assets/photo-tablet-BmO2Vl-6.png",F="/WatchCharm/assets/photo-tablet@2x-EcloSsxX.png",i="data:image/png;base64,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",N="/WatchCharm/assets/photo-mobile@2x-CYpZwyro.png",O=document.querySelector(".hero-photo");function $(){return`<source
            srcset="
              ${J} 1x,
              ${Y} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${X} 1x,
              ${F} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${i} 1x,
              ${N} 2x
            "
            media="(min-width: 375px)"
          />
          <img src="${i}" alt="" />`}O.innerHTML=$();const _="/WatchCharm/assets/watch-desktop-BoveKM56.jpg",tt="/WatchCharm/assets/watch-desktop@2x-CN_DlGJv.jpg",et="/WatchCharm/assets/watch-tablet-DzWGp1S_.jpg",at="/WatchCharm/assets/watch-tablet@2x-h8tUE2WX.jpg",h="/WatchCharm/assets/watch-mobile-gUDyuoK7.jpg",st="/WatchCharm/assets/watch-mobile@2x-DC3-hsv0.jpg",ct=document.querySelector(".about-us-watch");function ot(){return` <source
        srcset="
          ${_} 1x,
          ${tt} 2x
        "
        media="(min-width: 1280px)"
      />
      <source
        srcset="
          ${et} 1x,
          ${at} 2x
        "
        media="(min-width: 768px)"
      />
      <source
        srcset="
        ${h} 1x,
        ${st} 2x"
        media="(min-width: 375px)"
      />
      <img src="${h}" alt="" />`}ct.innerHTML=ot();const nt="/WatchCharm/assets/garmin-fenix-7X-BGyNroPE.png",rt="/WatchCharm/assets/garmin-fenix-7X@2x-CLNKzvYI.png",it="/WatchCharm/assets/garmin-fenix-7X-BYzg8P9N.png",ht="/WatchCharm/assets/garmin-fenix-7X@2x-DgvqIYlC.png",m="/WatchCharm/assets/garmin-fenix-BtUZFNqa.png",mt="/WatchCharm/assets/garmin-fenix@2x-DgAmOKLa.png",lt="/WatchCharm/assets/garmin-marq-D7Zoid31.png",At="/WatchCharm/assets/garmin-marq@2x-D2WqiF2K.png",ut="/WatchCharm/assets/garmin-marq-_WDLzsmf.png",gt="/WatchCharm/assets/garmin-marq@2x-BazMqD_o.png",l="/WatchCharm/assets/garmin-marq-S2plHlxp.png",pt="/WatchCharm/assets/garmin-marq@2x-CgjFqqcK.png",xt="/WatchCharm/assets/garmin-descent-CatdJNn4.png",W="/WatchCharm/assets/garmin-D2@2x-CTMGRPFG.png",dt="/WatchCharm/assets/garmin-descent-RgCLEepd.png",bt="/WatchCharm/assets/garmin-descent@2x-DJlmk73G.png",A="/WatchCharm/assets/garmin-descent-D058-41F.png",wt="/WatchCharm/assets/garmin-descent@2x-DSrl5rur.png",kt="/WatchCharm/assets/garmin-D2-BPYVYLKf.png",Mt="/WatchCharm/assets/garmin-D2-CdkTsl9X.png",ft="/WatchCharm/assets/garmin-D2@2x-uwK-wnBs.png",u="/WatchCharm/assets/garmin-D2-B_lN0l0e.png",Wt="/WatchCharm/assets/garmin-D2@2x-D4h7HLtv.png",vt="/WatchCharm/assets/garmin-fenix-6-_fQUo3lG.png",Ct="/WatchCharm/assets/garmin-fenix-6@2x-Du5HDKBW.png",g="/WatchCharm/assets/garmin-fenix-6-D5xVD_H4.png",yt="/WatchCharm/assets/garmin-fenix-6@2x-DmzbNT7X.png",Tt="/WatchCharm/assets/tube-watch-S42-ba4c6ajU.png",Dt="/WatchCharm/assets/tube-watch-S42@2x-CaBP822J.png",p="/WatchCharm/assets/tube-watch-S42-CK21dafh.png",It="/WatchCharm/assets/tube-watch-S42@2x-DFR-76cY.png",Bt=document.querySelector(".catalogGarminFenix7X");function St(){return`<source
            srcset="
              ${nt} 1x,
              ${rt} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${it} 1x,
              ${ht} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${m} 1x,
              ${mt} 2x
            "
            media="(min-width: 375px)"
          />
          <img
            class="catalog-picture"
            src="${m}"
            alt=""
          />`}Bt.innerHTML=St();const Et=document.querySelector(".catalogGarminMarq");function Lt(){return`<source
            srcset="
              ${lt} 1x,
              ${At} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${ut} 1x,
              ${gt} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${l} 1x,
              ${pt} 2x
            "
            media="(min-width: 375px)"
          />
          <img
            class="catalog-picture"
            src="${l}"
            alt=""
          />`}Et.innerHTML=Lt();const Rt=document.querySelector(".catalogGarminDescent");function Vt(){return`<source
            srcset="
              ${xt} 1x,
              ${W} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${dt} 1x,
              ${bt} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${A} 1x,
              ${wt} 2x
            "
            media="(min-width: 375px)"
          />
          <img
            class="catalog-picture"
            src="${A}"
            alt=""
          />`}Rt.innerHTML=Vt();const Gt=document.querySelector(".catalogGarminD2");function Zt(){return`<source
            srcset="
              ${kt} 1x,
              ${W} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${Mt} 1x,
              ${ft} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${u} 1x,
              ${Wt} 2x
            "
            media="(min-width: 375px)"
          />
          <img
            class="catalog-picture"
            src="${u}"
            alt=""
          />`}Gt.innerHTML=Zt();const Qt=document.querySelector(".catalogGarminFenix6");function Ht(){return`<source
            srcset="
              ${vt} 1x,
              ${Ct} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${g} 1x,
              ${yt} 2x
            "
            media="(min-width: 768px)"
          />
          <img
            class="catalog-picture"
            src="${g}"
            alt=""
          />`}Qt.innerHTML=Ht();const zt=document.querySelector(".catalogTubeWatchS42");function Pt(){return`<source
            srcset="
              ${Tt} 1x,
              ${Dt} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${p}  1x,
              ${It} 2x
            "
            media="(min-width: 768px)"
          />
          <img
            class="catalog-picture"
            src="${p}"
            alt=""
          />`}zt.innerHTML=Pt();const qt="/WatchCharm/assets/photo-watch01-tablet-BHd6lBFh.png",Kt="/WatchCharm/assets/photo-watch01-tablet@2x-Cnigrlj3.png",Ut="/WatchCharm/assets/photo-watch01-tablet-BHd6lBFh.png",jt="/WatchCharm/assets/photo-watch01-tablet@2x-Cnigrlj3.png",x="data:image/png;base64,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",Jt="/WatchCharm/assets/photo-watch01-mobile@2x-CMkT6Cb-.png",Yt="/WatchCharm/assets/photo-watch02-tablet-BAzifCN5.png",Xt="/WatchCharm/assets/photo-watch02-tablet@2x-BZL2kT1j.png",Ft="/WatchCharm/assets/photo-watch02-tablet-BAzifCN5.png",Nt="/WatchCharm/assets/photo-watch02-tablet@2x-BZL2kT1j.png",d="data:image/png;base64,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",Ot="/WatchCharm/assets/photo-watch02-mobile@2x-BS2zyQn7.png",$t="/WatchCharm/assets/photo-watch03-tablet-CDjQ6Uub.png",_t="/WatchCharm/assets/photo-watch03-tablet@2x-0kyItJ9t.png",te="/WatchCharm/assets/photo-watch03-tablet-CDjQ6Uub.png",ee="/WatchCharm/assets/photo-watch03-tablet@2x-0kyItJ9t.png",b="data:image/png;base64,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",ae="/WatchCharm/assets/photo-watch03-mobile@2x-DGmTBPWB.png",se="/WatchCharm/assets/photo-watch04-tablet-C8VRCFn8.png",ce="/WatchCharm/assets/photo-watch04-tablet@2x-r5rlsjyl.png",oe="/WatchCharm/assets/photo-watch04-tablet-C8VRCFn8.png",ne="/WatchCharm/assets/photo-watch04-tablet@2x-r5rlsjyl.png",w="data:image/png;base64,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",re="/WatchCharm/assets/photo-watch04-mobile@2x-hm4ppRAL.png",ie="/WatchCharm/assets/photo-big-watch-tablet-BDDM0Dcc.png",he="/WatchCharm/assets/photo-big-watch-tablet@2x-Cmt4Ihsp.png",me="/WatchCharm/assets/photo-big-watch-tablet-BDDM0Dcc.png",le="/WatchCharm/assets/photo-big-watch-tablet@2x-Cmt4Ihsp.png",k="/WatchCharm/assets/photo-big-watch-mobile-CHvM7Ojo.png",Ae="/WatchCharm/assets/photo-big-watch-mobile.png@2x-Ckojk9-h.png",ue=document.querySelector(".saleWatch01");function ge(){return`<source
                srcset="
                  ${qt} 1x,
                  ${Kt} 2x
                "
                media="(min-width: 1280px)"
              />
              <source
                srcset="
                  ${Ut} 1x,
                  ${jt} 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                  ${x} 1x,
                  ${Jt} 2x
                "
                media="(min-width: 375px)"
              />
              <img src="${x}" alt="" />`}ue.innerHTML=ge();const pe=document.querySelector(".saleWatch02");function xe(){return`<source
                srcset="
                  ${Yt} 1x,
                  ${Xt} 2x
                "
                media="(min-width: 1280px)"
              />
              <source
                srcset="
                  ${Ft} 1x,
                  ${Nt} 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                  ${d} 1x,
                  ${Ot} 2x
                "
                media="(min-width: 375px)"
              />
              <img src="${d}" alt="" />`}pe.innerHTML=xe();const de=document.querySelector(".saleWatch03");function be(){return`<source
                srcset="
                  ${$t} 1x,
                  ${_t} 2x
                "
                media="(min-width: 1280px)"
              />
              <source
                srcset="
                  ${te} 1x,
                  ${ee} 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                  ${b} 1x,
                  ${ae} 2x
                "
                media="(min-width: 375px)"
              />
              <img src="${b}" alt="" />`}de.innerHTML=be();const we=document.querySelector(".saleWatch04");function ke(){return` <source
                srcset="
                  ${se} 1x,
                  ${ce} 2x
                "
                media="(min-width: 1280px)"
              />
              <source
                srcset="
                  ${oe} 1x,
                  ${ne} 2x
                "
                media="(min-width: 768px)"
              />
              <source
                srcset="
                  ${w} 1x,
                  ${re} 2x
                "
                media="(min-width: 375px)"
              />
              <img src="${w}" alt="" />`}we.innerHTML=ke();const Me=document.querySelector(".saleBigWatch");function fe(){return`<source
              srcset="
                ${ie} 1x,
                ${he} 2x
              "
              media="(min-width: 1280px)"
            />
            <source
              srcset="
                ${me} 1x,
                ${le} 2x
              "
              media="(min-width: 768px)"
            />
            <source
              srcset="
                ${k} 1x,
                ${Ae} 2x
              "
              media="(min-width: 375px)"
            />
            <img src="${k}" alt="" />`}Me.innerHTML=fe();const M="data:image/png;base64,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",We="/WatchCharm/assets/john-wax@2x-SBpjfyTe.png",ve="data:image/png;base64,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",Ce="/WatchCharm/assets/victoria-romashenko@2x-C2CY2F_l.png",ye="data:image/png;base64,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",Te="/WatchCharm/assets/anastasia-trachuk@2x-D7g_BFBX.png",De=document.querySelector(".reviewsJohnWax");function Ie(){return`<img
          class="reviews-avatar"
          srcset="
            ${M} 1x,
            ${We} 2x
          "
          src="${M}"
          alt=""
        />
        <h3 class="reviews-title-name-avatar">John Wax</h3>
        <p class="reviews-text">
          Buying a watch from was the best choice for me. The design is
          perfectly combined with high quality materials. The strap fits nicely
          on the hand, and the mechanism works flawlessly.
        </p>`}De.innerHTML=Ie();const Be=document.querySelector(".reviewsVictoriaRomashenko");function Se(){return`<img
          class="reviews-avatar"
          srcset="
            ${ve} 1x,
            ${Ce} 2x
          "
          src="../img/reviews/victoria-romashenko.png"
          alt=""
        />
        <h3 class="reviews-title-name-avatar">Victoria Romashenko</h3>
        <p class="reviews-text">
          Can't take my eyes off my watch from. Every time I put it on, it is
          admired by those around me. The build quality and attention to detail
          make it a real gem among my accessories.
        </p>`}Be.innerHTML=Se();const Ee=document.querySelector(".reviewsAnastasiaTrachuk");function Le(){return`<img
          class="reviews-avatar"
          srcset="
            ${ye} 1x,
            ${Te} 2x
          "
          src="../img/reviews/anastasia-trachuk.png"
          alt=""
        />
        <h3 class="reviews-title-name-avatar">Anastasia Trachuk</h3>
        <p class="reviews-text">
          My watch from is a real masterpiece. Every detail impresses with the
          high quality of execution. Special features like [specify features]
          make it an indispensable companion in my daily life.
        </p>`}Ee.innerHTML=Le();const Re="/WatchCharm/assets/photo-watch-desktop-DDmQbKlm.jpg",Ve="/WatchCharm/assets/photo-watch-desktop@2x-D32LJr8P.jpg",Ge="/WatchCharm/assets/photo-watch-tablet-CuaPopDZ.jpg",Ze="/WatchCharm/assets/photo-watch-tablet@2x-CCm7oC6U.jpg",f="/WatchCharm/assets/photo-watch-mobile-DqB8AVQE.jpg",Qe="/WatchCharm/assets/photo-watch-mobile@2x-C4EWnBiJ.jpg",He=document.querySelector(".contactPhotoWatch");function ze(){return`<source
          srcset="
            ${Re} 1x,
            ${Ve} 2x
          "
          media="(min-width: 1280px)"
        />
        <source
          srcset="
            ${Ge} 1x,
            ${Ze} 2x
          "
          media="(min-width: 768px)"
        />
        <source
          srcset="
            ${f} 1x,
            ${Qe} 2x
          "
          media="(min-width: 375px)"
        />
        <img
          class="contact-us-picture"
          src="${f}"
          alt=""
        />`}He.innerHTML=ze();(()=>{const o=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),c=()=>{const t=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const e=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[e](document.body)};s.addEventListener("click",c),n.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=index.js.map
