(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="/WatchCharm/assets/photo-desktop-DZgTKgeg.png",p="/WatchCharm/assets/photo-desktop@2x-DFzG8mW0.png",h="/WatchCharm/assets/photo-tablet-BmO2Vl-6.png",m="/WatchCharm/assets/photo-tablet@2x-EcloSsxX.png",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAAAsCAMAAAC34K2TAAADAFBMVEUAAAD7+/v8/Pz7+/v7+/v7+/v6+vr6+vr////6+vr7+/v7+/v8/Pz7+/v////39/f6+vr8/Pz8/Pzz8/P7+/v39/f19fUHDA0KDg8iJjAlKTEmFQzx8PAOERLr6ejZo4JTNibt0rnAimpxVEBhRTTt7e3VsJe7l398X0t/VT5pQy4pJB8fGRTh3NfotZjqrpacb1o5MCksGQ/HvrfyxazmxqvxwKfiu6LtuqLit57ir5HFmoDSl39GOTAxKSRWMRw7JBnl4d3NysbHxcPrx63iwaPetp3dr5fWqpHUn3+qiHGxiW6fg2yGa1R1YVRvTDc+Kh/g39/JqZDfq4vRoYjMoIbPm3uqg2y1gWubfWVnUkVrTj1kSjopLjlePi5JMCIfHRxHKhocDgfm5eTyy7PYtZ3Jm4WwjnaiiXate2SYdV14UT0GCgvVzcbfxa/cwKrnwKjovKLprZDhpYzUpYvDnoW8nITKknK+hWOfeWBoXlZxWUqVZUl4XEczOUeKXENeTEJ2TTUnHRUyHhPS0M/10Ln7z7e8urbrzrL5ybG9tq/Kt6a/saaknZW0nYzPpovbnoS/mH+2knq6k3nAknnNl3d0dne2f1+od12Rcl2NZlKAY06MYkxWRz48PDt8Sy5ZOyodISlEMyhhOSEYFBDc19D72cOtrazpuZrEoY2hlIuwlIHJkXvElHSNe3HGjmule2V/al2VaFJYUU1iPCdrPiROLx3Z2NeyrKSSkY/ao4yLiIebiYGBgYDXnHyTgXSRdmdWWmCweVilcVKcalGHVztVQjNyQyw0Ixk7IBDw6ubc0cjOx7/xtZ7js5eqo5fPqpSsmo7ap4iNhH/DjHS5i3OVfmqLblqSbVc+Qk4uMz9JQTv17efw3NO/wL/py7rgyrnYu6bctJfImHqqjXZjZWh8b2eTemJvZ2JLS0qTWjbx49ri1c7p0cK3trO6qJmdnJmOkZmbe2yMcGKaYUGgoqGopp+qo5xma3i9dGZOUlzt28nsoYuyZVeYUUPclpMvOfJRAAAAE3RSTlMA71C/z6+QcBDfgH/fQCAgYF9P+RjdAgAAC2FJREFUWMOtmGVYG0kYgA9o79rzuw0QkjRGCAlOcHd3d3coVty9OBR3KRyluGtpcau7u9vVz3WSRjbl7l+//Mq+s/PO983MPrP7yQexg/fT7Tt5EAiebXyf8u6AgY/D4fEVH2gHi+28H5XDg3cn4PzHBzOvJSe7zpfo8IO/X373IecXsOk+3NqaPKOH/R8+VXpuev5hLj/7/q3xDR+9ade8+9qahoQGvj3N/BQkAC5t+xrOIcimVkNWU9xb3FuzNf8/OPZlGj4H7WvthR7Lhd3PHZ+BAghAXRZu7iTSmuxIyhpJ2OUMRG/O8xmHQ9hDdJW4uKY3CPGZLbxkNMOK5KPt66vt4yuhC7sfHl8wRo1doFCEKcLCa5nBKe5pFn06EASBYnzB4tDUmKxmh3vmmoamuITEDxLi+dxc5IxVWBjVql2bpj2egfeV9WPev8UlAEDJpUcWDRbmjyieZeYUC/O+EgyzNZP7jcm2plTb98u4d+RkZwPbKy6OnW/3tAqjhomtr757926ZSjsEwW3cLp2Lj1wakoJsbYNk4m2DXOJtX0pC9EAg3nPohbhmY8yemH1H1J1lMqhh1hK1XHwe79UuRsrKSE2sSyQSiXWrNF0mh9k+QyAYF0suuoS6ONkGBMQG2kaePt0TGSEHMccGMeKVZmbMnj3Atk/9PNG5vlH8CQbGp318vPBenanLAwm4IzUJCcT69seAMyaOPW/f8LwfN3TmkUvosGhAwF0j4/IIBaUA8q1iRmMEk0Pdsk7S0tKM1PrPO4fIuMpiYdxd28da24tKrLbD2eFMHGuI9VnWU8zR8rDW5DbG3IMqBluEJpn1kO8aGhqWkwlRBuSAO1hGU8AZcaglELiATF1dvR/IFkBmbJ67qZ2zoT1eN6BidNLorIkjyIyKL4WYNr73rm9ZRToebOHiVGVrbKgCfmoBClFkcqQkowgQMx6+tQeZqcbMqoM4HyITOobh8N6cHFpOTlbdPX0lFWPHgSFi3QpV7BwA75PnZch2sopUbH7J3FRUDchUoqLIomRDpYDI55wigjgXbBzoZD5CsXACVUwKlWl4DCvyGo1GQ2+mOhoGJIV5ijXXh6Rm4X0GIVZqXzIeMuyBv7xobn7fosnptJKSYZW5KZmsZBh5DJ4YVNpXphHc94Yi7Orq7qWpqWF5jpMYJgdNQ/u23xsOndyc6NTyaVvRyqHRUvTYqX0FZNvZAy8zv29qZuZkWkGOVjIKrIg1UlG6EwHxA86KkjJR09Om7njPBfyGRgee1DKWy+aSaDTad/PpqJnjJD6t3WfCM8dnk0ZLztfo5szaDvbARYLvmzpROjpcL8fJKyW5t7hW2981iDgKS+xG8YJ9UKCLqxuVou6mrSmrkXIYC7G4Hg3I8Ct2jkNWVGv8JHXYytMXjdaYkWXmhuDZAarIWmrYsmDTJJJri6twpb9SqKVlWVC0PRnIAGeG9IlAqdnhQGdn5+qYRk9PUrvlz5AAi+eDzLTb78mXRzvVjVLDQmTindDam4NQL3vWvv/kU05nxQ1mF5yGk0JDK/X1y9VijaILle0VIJjsT0UHZWVlMxmZaukYZ7xVGGXkTTh7X0yj0VpWWWf9T+epLBOJAyYUQpSwllYKJMeWffoJH2dKwhvj1ewdAtWq1PTz/KOVFQv3Fu67BZ+yE9KBUorK0vvUpZVn6xubR0cbGp6zeRF6sy01Fado7K9SUz9ETK3IiwrBj3fqTr3HoATbwY5m99V1OU7NITbWwcxB3l9evnDv3r3ye57xczh0408HY2XlEzFH+puHJ8VkZEYvN0qyuZxv1tOlxASp2OiTdqoJS0tRCcS2Sa1JXfbdYPHzcDrD9sSLqtnHVpuVyytKKQNZoWIhfH1A10/YxxlJndjXH+Lmbj0+KnP5UjCGzX9BWw3hjiTuMTl4UlXVpI5Y1/ZUS0xMGOLIeD6Bd1YcJFrhEHthVMb+gspJeeCSj/oHzqG82aAeI+lGT+GwDPwGqbmxSQ5i81I02kxZdWjPvYNSqqq4GtVoxwwgewuTIbhkx/pERdXK1aocovzzFOULFVVV7U5wya4fM30TN+sZFvLX3+s+NBIlRYcjs7FGWxs4JkqdBbKzOJyqfs1S27jYGbgMXkboeXg8SC2uwt5IP09eUblmVlnqNpcMevbmUmVgyL7+Feq6mBeJ9BALcfgvvhlezUMH7Q5K2eFwNQOrE1qT42JyXGXcCesMI1csKho3nPH3X7+dN5ZKSHSMVcyDuGQ3gi3fOlWrO5M2JrPESB26EEzml73q65OoepAuMyEu16+sao2LSQLAWo3bGE8rTuiA1MxWfvtNXUXqbN3Avei9e69z8RtGma4pw/1qzaQwqqf1GH37sLnIhpWb1xBOygTIakxMEt+trotdgmAyPsamhkVxZWVVVbWa8UnVeudqpbxbWH4ufkPR9FqLm7CbtZcXXpt+3IFg/KG2WzPxCA7neNbEBIdLXF7NEnvJAOxNzcst8+sLqlKzV4k+GZh6gRw1q6T/jIv/qGi0oNFhnS0hIZEtfogxYA63aaF5JR6xSxhyNMHZ2eHOr2Sl2TAA+3G1A6wQeBQ9Mq2MMzZSaw4xVnFQ8T9wAIGAy5SlY5vAsQqEBHDRA8anZEtuKxzELS0vEWtMHJdSqZIQfDGCoz8fd2qPXS5ZXA69TG28YGyk5H+AHPmczUUgDAL6sSfEPRuoJDToh0LuOmKSsRjM0VsJy23rbRmpSfd1WID5tAIvA1xDx7RaNjSlCVsJh1aVR/vLO4+cKWLzXxdvYrFYHbmyt3hta/wIqxcWlxx0z8QIQBisZA91orMzhcnZiX0PPxZgpvR++qkWKdtgQQEy00pbQ3lFUMZkGybvvpJ+RQ/rp9N1XO6UpafbIIbdDYMfz9AaXzh6VACDtQk/46al1cvlEgBPRta5wO/F4VZvpOBu5C4kkmLRJGzVFCQaZyyfd+CAQvIiY+i5v6anp19N19PRkTxeVDTd2/uLH1dq4esT6xMLj5PP5WJtdEt6XX10P0iM+TrDh+jeRQ/B3buRSORuWQtQR5eg+B6y/4G5a9aCyJsI7OvFdA+Pq1c9PK68kJTskps+VVr6swgEcWZNhDTxtDPLlkAYkZ3TCy+am7OcoiNOk22cQ2rte5mgoCBS8Ac3Shrlvmi87Z1bxeCiIBIlgnidnu6xfz/KQwiVPtN1LLwIyKZvwoYtUNL2tLPTjEAgXLM0uFgqNz841+sHLyLP17Dj9xOQE1Mm2CGc5lJZEUeOICTvQoIryBkE4terHigUygMlJIQ6LNl1fPrUqZ9b/TjjRpi2TWglFRAI8+KnFQzMz82NDA726sBGA3tt+hwh0ooUZMWGW1OlqGjPndsEcSBDIp+IIBAiv3vQU6MHsEkekyvq9lgUYU8aAiPT2QxcfdnBBfoKBsGZlpaWKQ8hNv8cSGA2RC0jKxC7s0my5nHxtpERfbvoslrQFvBDKKH9+4VQKCGU0KGucDm5omv7f89l9QV4mUIBoVj8IqGgQMEgoKElMzMzH0CdcI4LbvsJxZRJiCO9RwIiI+5oAJf3DGjL4N1XhISATQhUckY3XFfvxQOPK8DGz+LXCREtrgWEAn19A6XyNM0Wugtje+EYnW99zbV5wHCB9Q82wNjtSEuwEWpFOK+xNrVCdB3d1q2rq3fzldDVRREEh/PLaUbqK+iDMhqWVzV1jD1OvpY9J8Dk3PHNNgTQoRh7DciQmhc3vA+Dvvi+hvHaKyhGbun5wJb/5PUHXOQPAwMFBQODuw5mSWYDAxUREJNvjW/pnxZuHl4E2xvpjVp8pUf/tMD7Add7/eD3q0JCD3Il/TD/xa//8WOBwl2HIJey28/gfGvwbkfAg4fvq4/Lt34O4tvGA9rt3A4+B31k/i+a3V+ivMMPzQAAAABJRU5ErkJggg==",d="/WatchCharm/assets/photo-mobile@2x-CYpZwyro.png",u=document.querySelector(".hero-photo");function A(){return`<source
            srcset="
              ${l} 1x,
              ${p} 2x
            "
            media="(min-width: 1280px)"
          />
          <source
            srcset="
              ${h} 1x,
              ${m} 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${n} 1x,
              ${d} 2x
            "
            media="(min-width: 375px)"
          />
          <img src="${n}" alt="" />`}u.innerHTML=A();const x="/WatchCharm/assets/watch-desktop-BoveKM56.jpg",b="/WatchCharm/assets/watch-desktop@2x-CN_DlGJv.jpg",v="/WatchCharm/assets/watch-tablet-DzWGp1S_.jpg",y="/WatchCharm/assets/watch-tablet@2x-h8tUE2WX.jpg",i="/WatchCharm/assets/watch-mobile-gUDyuoK7.jpg",g="/WatchCharm/assets/watch-mobile@2x-DC3-hsv0.jpg",f=document.querySelector(".about-us-watch");function W(){return` <source
        srcset="
          ${x} 1x,
          ${b} 2x
        "
        media="(min-width: 1280px)"
      />
      <source
        srcset="
          ${v} 1x,
          ${y} 2x
        "
        media="(min-width: 768px)"
      />
      <source
        srcset="
        ${i} 1x,
        ${g} 2x"
        media="(min-width: 375px)"
      />
      <img src="${i}" alt="" />`}f.innerHTML=W();(()=>{const s=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),c=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),s.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",c),r.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(s.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=index.js.map
