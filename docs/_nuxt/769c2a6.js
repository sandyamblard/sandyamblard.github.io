(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{menuOpen:!1}},methods:{openMenu:function(){this.menuOpen=!0,document.querySelector(".topbar").style.display="block",document.querySelector(".topbar").style.paddingBottom="0.5em",document.querySelector(".topbar").style.height="auto",document.querySelector(".topbar img").style.marginTop="0",document.querySelector(".nav").style.display="block"},closeMenu:function(){this.menuOpen&&(this.menuOpen=!1,document.querySelector(".topbar").style.display="flex",document.querySelector(".topbar").style.height="auto",document.querySelector(".nav").style.display="none",document.querySelector(".topbar img").style.marginTop="1em",document.querySelector(".topbar").style.paddingBottom="0em")}}},r=o(19),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"topbar"},[n("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:o(200),alt:"Photo Sandy AMBLARD"},on:{click:e.closeMenu}}),e._v(" "),n("p",{on:{click:e.closeMenu}},[e._v(" Sandy "),n("br"),e._v(" AMBLARD ")])]),e._v(" "),e.menuOpen?e._e():n("div",{staticClass:"mobonly",attrs:{role:"button",tabindex:"0"},on:{click:e.openMenu,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.openMenu(t)}}},[e._v("\n        MENU"),n("br"),n("i",{staticClass:"fas fa-bars"})]),e._v(" "),e.menuOpen?n("button",{staticClass:"closemenumob",on:{click:e.closeMenu}},[n("i",{staticClass:"fas fa-times"}),n("br"),e._v("FERMER")]):e._e(),e._v(" "),n("nav",{staticClass:"nav",attrs:{role:"menu"},on:{click:e.closeMenu}},[n("NuxtLink",{attrs:{to:"/webdev",role:"menuitem"}},[n("i",{staticClass:"fas fa-code"}),n("p",[e._v("Développeuse")])]),e._v(" "),n("NuxtLink",{attrs:{to:"/veto",role:"menuitem"}},[n("i",{staticClass:"fas fa-stethoscope"}),n("p",[e._v("Vétérinaire")])]),e._v(" "),n("NuxtLink",{attrs:{to:"/elevage",role:"menuitem"}},[n("i",{staticClass:"fas fa-paw"}),n("p",[e._v("Eleveuse")])]),e._v(" "),n("NuxtLink",{attrs:{to:"/competitions",role:"menuitem"}},[n("i",{staticClass:"fas fa-trophy"}),n("p",[e._v("Compétitrice")])]),e._v(" "),n("NuxtLink",{attrs:{to:"/loisirs",role:"menuitem"}},[n("i",{staticClass:"fas fa-camera"}),n("p",[e._v("Et plus !")])])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:o(107).default})},108:function(e,t,o){"use strict";o.r(t);var n=o(19),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"bottom"},[o("p",[o("a",{attrs:{href:"mailto:sandyamblard@gmail.com"}},[o("i",{staticClass:"fas fa-at"}),e._v(" sandyamblard@gmail.com")])]),o("p",[o("i",{staticClass:"fas fa-phone-volume"}),e._v("06 03 31 49 75 \n    ")]),e._v(" "),o("p",[o("i",{staticClass:"fab fa-linkedin"}),o("a",{attrs:{href:"https://www.linkedin.com/in/sandy-amblard-846283208/",target:"blank"}},[e._v(" Profil LinkedIn")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:o(108).default})},155:function(e,t,o){"use strict";var n=o(107),r=o(108),m={components:{topbar:n.default,bottom:r.default}},d=o(19),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("topbar"),e._v(" "),o("Nuxt"),e._v(" "),o("bottom")],1)}),[],!1,null,null,null);t.a=component.exports},156:function(e,t,o){o(157),e.exports=o(158)},198:function(e,t,o){var content=o(199);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(106).default)("4c8464f6",content,!0,{sourceMap:!1})},199:function(e,t,o){var n=o(105)(!1);n.push([e.i,'*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:"Poppins",sans-serif}main{background-color:#f8f6f6;min-height:100vh}@media (min-width:767px) and (max-width:1023px){main{padding-top:20vw;padding-bottom:2.5em}}@media (min-width:1023px){main{padding-top:92px;display:flex;flex-direction:row-reverse;padding-bottom:2.5em}}button{background-color:inherit;border-color:transparent;font-family:inherit}h1{color:#43651c;margin-top:0;padding-top:1em;font-size:1.9em;text-align:center}.contenu-item{margin-right:1em;margin-left:1em;margin-bottom:3vw}@media (min-width:1400px){.contenu-item{margin-right:7.5vw;margin-left:7.5vw}}:focus{border-radius:5px;border:2px #43651c}.bann{display:block;width:95%;height:45vw;margin-left:2.5%;text-decoration:none;background-repeat:no-repeat;background-size:cover;background-position-y:55%;box-shadow:2px 2px 5px grey;border-bottom:3px solid #000}@media (min-width:767px) and (max-width:1023px){.bann{height:25vw;margin-left:10%;width:80%}}@media (min-width:1023px){.bann{margin-left:12.25%;width:75%;height:25vw}}.bann:focus,.bann:hover{transform:scale(1.03);box-shadow:2px 2px 15px grey;transition:.3s}.bann-caption{height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.bann p{color:#e7f4d8}.bann p:nth-child(2){text-transform:uppercase;font-weight:600;font-size:1.2em;background-color:rgba(53,8,16,.7);border-radius:10px;box-shadow:3px 3px 8px #ffedf4;padding:.4em;font-style:italic}@media (min-width:767px){.bann p:nth-child(2){font-size:1.4em}}@media (max-width:767px){.bann p:nth-child(2){margin-bottom:0}}.bann p:nth-child(3){width:100%;padding-top:.5em;padding-bottom:.5em;text-align:center;background-color:rgba(0,0,0,.6);margin-bottom:0}@media (min-width:767px){.bann p:nth-child(3){padding-top:.8em;padding-bottom:.8em}}.bann--dev{background-image:url(/code-mob.jpg);height:68vw;border-radius:10px 10px 0 0}@media (min-width:767px){.bann--dev{background-image:url(/code.jpg)}}@media (min-width:767px) and (max-width:1023px){.bann--dev{height:32vw}}@media (min-width:1400px){.bann--dev{height:20vw}}.bann--veto{background-image:url(/vet-mob.jpg)}@media (min-width:767px) and (max-width:1023px){.bann--veto{background-image:url(/vet-tab.jpg)}}@media (min-width:1023px){.bann--veto{background-image:url(/vet.jpg)}}@media (min-width:1400px){.bann--veto{height:14vw;background-position-y:35%}}.bann--compet{background-image:url(/banncompet-mob.jpg);background-position-y:19%}@media (min-width:767px) and (max-width:1023px){.bann--compet{background-image:url(/banncompet-tab.jpg)}}@media (min-width:1023px){.bann--compet{background-image:url(/banncompet.jpg)}}@media (min-width:1400px){.bann--compet{height:14vw;background-position-y:10%}}.bann--elevage{background-image:url(/bannchiots-mob.jpg);background-position-y:50%}@media (min-width:767px) and (max-width:1023px){.bann--elevage{background-image:url(/bannchiots-tab.jpg)}}@media (min-width:1023px){.bann--elevage{background-image:url(/bannchiots.jpg)}}@media (min-width:1400px){.bann--elevage{height:14vw}}.bann--loisirs{background-image:url(/bannloisirs-mob.jpg);border-radius:0 0 10px 10px;background-position-y:75%}@media (min-width:767px) and (max-width:1023px){.bann--loisirs{background-image:url(/bannloisirs-tab.jpg)}}@media (min-width:1023px){.bann--loisirs{background-image:url(/bannloisirs.jpg)}}@media (min-width:1400px){.bann--loisirs{height:14vw}}.bann--loisirs p:last-child{border-radius:0 0 10px 10px}.intro{margin-bottom:2vw;text-align:justify}.intro a{text-decoration:none;color:inherit;font-weight:600}.intro a:hover{text-decoration:underline}.entete{background-position:50%;background-size:cover;width:100%;height:10em;display:flex;justify-content:center;align-items:flex-end;margin-top:-2px}.entete h1{background-color:#f8f6f6;margin-bottom:0;padding:.5em .8em .1em;border-radius:100px 100px 0 0;box-shadow:0 0 15px #f8f6f6}.contenu h2{color:#43651c;font-size:1.7em}.contenu h2:after{content:"";display:block;width:12em;height:.15em;background:linear-gradient(90deg,#43651c,#f8f6f6);margin-top:.5em}@media (max-width:370px){.contenu h2:after{width:9em}}.entete--code{background-image:url(/code-mob.jpg)}@media (min-width:767px){.entete--code{background-image:url(/code.jpg)}}.entete--veto{background-image:url(/vet-mob.jpg);background-position:center 27%}@media (min-width:767px) and (max-width:1023px){.entete--veto{background-image:url(/vet-tab.jpg)}}@media (min-width:1023px){.entete--veto{background-image:url(/vet.jpg)}}.entete--elevage{background-image:url(/bannchiots-mob.jpg)}@media (min-width:767px) and (max-width:1023px){.entete--elevage{background-image:url(/bannchiots-tab.jpg)}}@media (min-width:1023px){.entete--elevage{background-image:url(/bannchiots.jpg)}}.entete--competition{background-image:url(/banncompet-mob.jpg);background-position:center 6%}@media (min-width:767px) and (max-width:1023px){.entete--competition{background-image:url(/banncompet-tab.jpg)}}@media (min-width:1023px){.entete--competition{background-image:url(/banncompet.jpg)}}.entete--loisirs{background-image:url(/bannloisirs-mob.jpg);background-position:center 57%}@media (min-width:767px) and (max-width:1023px){.entete--loisirs{background-image:url(/bannloisirs-tab.jpg)}}@media (min-width:1023px){.entete--loisirs{background-image:url(/bannloisirs.jpg)}}.subtitle{color:#43651c;text-align:center;margin-top:.5em;font-size:1.3em}.form__item{font-size:1.1em;margin-bottom:1em}.form__item span{font-weight:700}.form__item a{color:inherit;font-style:italic;color:#444}.form__item a:hover{font-weight:600}.form__item .bold{text-decoration:underline}.topbar{z-index:10;margin-top:0;background-color:#c2e49c;height:auto;width:100%;box-shadow:0 0 8px grey;padding:1em;display:flex;justify-content:space-between;align-items:center;position:relative}@media (min-width:767px) and (max-width:1023px){.topbar{padding-top:.5em;height:20vw;position:fixed;top:0;display:block}}@media (min-width:1023px){.topbar{height:90px;position:fixed;top:0}}@media (min-width:1400px){.topbar{padding-left:2vw;padding-right:2vw}}@media (max-width:767px){.topbar{padding-top:0;padding-bottom:0}}.topbar a{text-decoration:none;color:inherit}.topbar .fa-bars{font-size:2.2em;margin-top:.2em}.topbar a:first-child p{font-size:1.2em}.topbar .mobonly{font-size:.8em;text-align:center}@media (min-width:767px){.topbar .mobonly{display:none}}.topbar img{max-height:23vw;width:auto;border-radius:50%;box-shadow:1px 1px 5px grey;border:2px ridge #c2e49c;margin-top:.5em}@media (min-width:767px) and (max-width:1023px){.topbar img{max-height:13vw;margin-top:0}}@media (min-width:1023px){.topbar img{max-height:80px;margin-top:1em}}.topbar img:hover{transform:scale(1.4);transition:.3s}.logo{display:flex;align-items:center;margin:0 0 .5em}@media (min-width:767px) and (max-width:1023px){.logo{margin-bottom:.6em}}@media (min-width:1023px){.logo{margin-bottom:1.2em}}.logo p{font-family:"Merienda One",cursive;font-weight:600;font-size:1.4em;margin-left:.5em;margin-top:0;margin-bottom:0}@media (min-width:1023px){.logo p{margin-top:1em;font-size:1.3em}}.nav{display:none}@media (min-width:767px) and (max-width:1023px){.nav{display:flex;justify-content:space-around}}.nav .fas{font-size:1.5em;margin-bottom:0;margin-right:.5em}@media (min-width:767px) and (max-width:1023px){.nav .fas{margin-right:.2em}}.nav a{text-transform:uppercase;color:inherit;text-decoration:none;font-size:.9em;font-weight:600;color:#000;display:flex;margin-bottom:.9em}@media (min-width:767px){.nav a{margin-bottom:0}}@media (min-width:1023px){.nav a{margin-left:1.6em;opacity:.7;flex-direction:column;justify-content:center;align-items:center}}.nav a:hover{opacity:1;transition:.3s}.nav p{margin-top:.4em;margin-bottom:.1em}@media (min-width:767px){.nav p:hover{border-bottom:3px solid #363636;transition:all .3s}}@media (min-width:1023px){.nav{display:flex}}@media (min-width:767px){.nav .nuxt-link-active{border-bottom:3px solid #363636}}.nav .nuxt-link-active:hover{border-color:transparent}.fa-times{transform:scale(2)}.closemenumob{font-weight:800;position:absolute;right:1vw;top:11vw}@media (max-width:767px){.nav{-webkit-animation:appearmenu .4s ease-in-out both;animation:appearmenu .4s ease-in-out both}.nav a{background-color:#dbefc4;border-radius:5px;margin:0 0 6px;padding:.5em;box-shadow:2px 2px 6px grey}.nav a:first-child{margin-top:1.6em}.nav .nuxt-link-active{background-color:#91ce4c;box-shadow:2px 2px 8px #3a3a3a;transform:scaleX(1.05)}}@-webkit-keyframes appearmenu{0%{transform:scaleY(0);transform-origin:top;opacity:0}to{transform-origin:top;transform:scaleY(1);opacity:1}}@keyframes appearmenu{0%{transform:scaleY(0);transform-origin:top;opacity:0}to{transform-origin:top;transform:scaleY(1);opacity:1}}.expandtopbar{-webkit-animation:expand .2s ease-in-out both;animation:expand .2s ease-in-out both}@-webkit-keyframes expand{0%{height:35vw}to{height:auto}}@keyframes expand{0%{height:35vw}to{height:auto}}.bottom{background-color:#c2e49c;box-shadow:0 0 8px grey;width:100%;height:8em;display:flex;flex-direction:column;justify-content:space-around;padding:.5em}@media (min-width:767px){.bottom{position:fixed;bottom:0;flex-direction:row;justify-content:space-between;align-items:center;height:2.5em}}.bottom a{text-decoration:none;color:inherit;font-weight:600;opacity:.7}.bottom a:hover{border-bottom:3px solid #000;opacity:1;transition:all .4s}.bottom p{margin:.5em 1em}.bottom .fab,.bottom .fas{font-size:1.3em;margin-right:.3em}.bottom .fab:hover,.bottom .fas:hover{transform:scale(1.5);transition:.3s}.contenu{padding:0 0 1em;flex:70%;background-color:#f8f6f6}@media (min-width:1400px){.contenu{flex:75%}}.sidebar{background-color:#ffedf4;padding:1em;flex:30%;margin-top:-6px;box-shadow:0 0 6px #e4536b}@media (min-width:767px) and (max-width:1023px){.sidebar{padding-right:15%;padding-left:15%}}@media (min-width:1400px){.sidebar{flex:25%;padding-left:2.4vw;padding-right:2.4vw}}.sidebar li{list-style:none}.sidebar ul{padding-left:.5em;margin-bottom:1.5em}.sidebar .far.fa-comment,.sidebar .far.fa-star{color:#c61f3b;font-size:1.2em;font-weight:700;margin-right:.4em;margin-bottom:.4em}.sidebar .fa-camera,.sidebar .fa-code,.sidebar .fa-paw,.sidebar .fa-stethoscope,.sidebar .fa-trophy{background-color:#c61f3b;border-radius:50%;font-size:1.1em;padding:.4em;margin-right:.4em;margin-bottom:.2em;color:#fff;box-shadow:2px 2px 4px grey}.sidebar a{text-decoration:none;color:inherit}.sidebar a:hover{text-decoration:underline}.sidebar h2{color:#b91d37;font-size:1.2em;text-transform:uppercase;margin-top:2em}.sidebar h2:first-child{margin-top:.7em}.sidebar h2:after{content:"";display:block;width:8em;height:.15em;background:linear-gradient(90deg,#b91d37,#ffedf4);margin-top:.5em;border-radius:5px}.profil{background-color:#f3faec;border-radius:10px;border:2px solid #9dd460;box-shadow:3px 3px 8px #b91d37;padding-left:.5em;padding-right:.5em;text-align:justify}@media (min-width:1023px){.profil{margin:.5em}}@media (min-width:1400px){.profil{margin-left:0;margin-right:0}}.comp-item{border-radius:20px;border:2px solid #ec8395;box-shadow:2px 2px 6px grey;background-color:#fff;list-style:none;padding-left:.5em;padding-top:.3em;padding-bottom:.3em;margin-bottom:1em}.comp-item .fa-star{color:#b91d37;font-size:1.2em;margin-right:.5em}@media (min-width:767px){.expe__list{display:flex;flex-wrap:wrap;justify-content:space-around}}.expe__item{padding:.5em;border-radius:5px;background-color:#fff;box-shadow:0 0 3px #77b632;display:flex;flex-direction:column;align-items:center;justify-content:space-between;margin-bottom:1.5em;margin-top:.8em}@media (min-width:767px){.expe__item{width:45%}}.expe__item a{text-decoration:none;color:#444;font-style:italic;font-size:.9em;margin-top:.4em;margin-bottom:0}.expe__item a:hover{text-decoration:underline}.expe__item p{margin-top:.4em;margin-bottom:0;text-align:center}.expe--title{font-weight:700;font-size:1.1em}.expe--img{width:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center 10%;object-position:center 10%;height:35vw}@media (min-width:767px) and (max-width:1023px){.expe--img{height:18vw}}@media (min-width:1023px){.expe--img{height:10vw}}.dev-icone{height:40px;width:auto;margin-top:.4em}.expe--link:before{content:"";display:inline-block;width:0;height:0;border-left:7px solid #000;border-top:7px solid transparent;border-bottom:7px solid transparent;margin-right:5px;vertical-align:middle}.expe--perfs{padding-left:0}.expe--perfs li{list-style:none}.expe--perfs li .fa-medal{margin-right:.5em;margin-top:.25em;font-size:1.3em;color:#507921}.itemsolo{width:100%}@media (min-width:1023px){.itemsolo{width:95%}}.expe--elevage .expe--img{-o-object-position:center 73%;object-position:center 73%}.expe--elevage .dev-icone{height:70px;width:auto}.chevres .expe--img{-o-object-position:center 35%;object-position:center 35%}.coureurs .expe--img{-o-object-position:center 58%;object-position:center 58%}.itemsolo .expe--img{-o-object-position:center 90%;object-position:center 90%}.maison .expe--img{-o-object-position:center 75%;object-position:center 75%}.randos .expe--img{-o-object-position:center 45%;object-position:center 45%}.triangle--text{background-color:#b91d37;box-shadow:2px 2px 5px grey;color:#fff;text-decoration:none;display:block;width:70vw;padding:.5em;margin-bottom:0;cursor:pointer;text-align:center}@media (min-width:767px) and (max-width:1023px){.triangle--text{width:40vw}}.triangle{margin-left:15vw;margin-top:2.2em;margin-bottom:2em}@media (min-width:767px) and (max-width:1023px){.triangle{margin-left:30vw}}@media (min-width:1023px){.triangle{display:none}}.triangle-index{margin-left:calc(15vw - 1em)}@media (min-width:767px) and (max-width:1023px){.triangle-index{margin-left:calc(30vw - 1em)}}.triangle:after{content:"";display:block;width:0;height:0;margin-top:0;border-top:5vw solid #b91d37;border-left:35vw solid transparent;border-right:35vw solid transparent;cursor:pointer}@media (min-width:767px) and (max-width:1023px){.triangle:after{border-top:3vw solid #b91d37;border-left:20vw solid transparent;border-right:20vw solid transparent}}.contenu a{text-decoration:none}.modal--overlay{width:100vw;height:100vh;background-color:rgba(190,184,184,.7);display:flex;justify-content:center;align-items:center;position:absolute;top:0;right:0;left:0;bottom:0;position:fixed;z-index:15}.modal{background-color:#fff;border:1px solid #a5a4a4;box-shadow:2px 2px 8px #5c5b5b;border-radius:9px;overflow:hidden;position:relative}.modal img{max-width:85vw;max-height:75vh;display:block;border-radius:9px;margin:calc(5vw + 3em) 5vw 5vw}.close-modale{position:absolute;top:.7em;right:.7em;cursor:pointer}@media (min-width:1023px){.close-modale{top:1em;right:1em}}.close-modale .fa-times{background-color:#c03030;box-shadow:1px 1px 4px #494949;color:#fff;font-size:.9em;border-radius:2px;margin:.3em;padding:.2em}@media (min-width:1023px){.close-modale .fa-times{font-size:1.2em;margin:.5em}}.close-modale p{margin-top:.8em;font-size:.9em;font-weight:700}@media (min-width:767px){.close-modale p{font-size:1.1em}}',""]),e.exports=n},200:function(e,t,o){e.exports=o.p+"img/photoCV.d396733.JPG"}},[[156,12,1,13]]]);