(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5],{201:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var l,r={all:l=l||new Map,on:function(e,t){var i=l.get(e);i&&i.push(t)||l.set(e,[t])},off:function(e,t){var i=l.get(e);i&&i.splice(i.indexOf(t)>>>0,1)},emit:function(e,t){(l.get(e)||[]).slice().map((function(e){e(t)})),(l.get("*")||[]).slice().map((function(n){n(e,t)}))}}},202:function(e,t,n){"use strict";n.r(t);var l=n(19),component=Object(l.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sidebar",attrs:{"aria-label":"profil et compétences",id:"sidebar"}},[e._m(0),e._v(" "),e._t("default",[n("h2",[e._v("Points forts")]),e._v(" "),e._m(1),e._v(" "),n("h2",[e._v("Compétences")]),e._v(" "),n("NuxtLink",{attrs:{to:"/webdev"}},[n("ul",[n("li",[n("i",{staticClass:"fas fa-code"}),e._v("VS Code, Git, GitHub")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-code"}),e._v("HTML, CSS, SASS")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-code"}),e._v("JAVASCRIPT")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-code"}),e._v("VueJS, Nuxt, NodeJS")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-code"}),e._v("MongoDB, Sequelize, MySql")])])]),e._v(" "),n("NuxtLink",{attrs:{to:"/veto"}},[n("ul",[n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Médecine vétérinaire")]),n("li"),n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Chirurgie vétérinaire")]),n("li"),n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Acupuncture, Phytothérapie")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Analyses")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Radiographie, Echographie")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Comportement canin et félin")])])]),e._v(" "),n("NuxtLink",{attrs:{to:"/elevage"}},[n("ul",[n("li",[n("i",{staticClass:"fas fa-paw"}),e._v("Zootechnie, élevage")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-paw"}),e._v("Génétique et sélection")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-paw"}),e._v("Education canine")])])]),e._v(" "),n("NuxtLink",{attrs:{to:"/competitions"}},[n("ul",[n("li",[n("i",{staticClass:"fas fa-trophy"}),e._v("Sports canins")])])]),e._v(" "),n("NuxtLink",{attrs:{to:"/loisirs"}},[n("ul",[n("li",[n("i",{staticClass:"fas fa-camera"}),e._v("Photoshop, Gimp")])])]),e._v(" "),n("h2",[e._v("Langues")]),e._v(" "),e._m(2)])],2)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profil"},[n("h2",[e._v("Profil")]),e._v(" "),n("p",[n("strong",[e._v("Développeur web")]),e._v(", je suis à la recherche d'un poste front-end ou full-stack. "),n("br"),e._v("\n        Assidue, rigoureuse, appliquée, autonome, j'apprends vite et je pourrais rapidement m'intégrer à une équipe. \n        Créative et polyvalente, je suis habituée aux challenges et à trouver des solutions à différentes problématiques ."),n("br"),e._v(" \n        Disponible immédiatement, CDI ou CDD."),n("br"),e._v("\n        Télétravail et temps partiel possible.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("i",{staticClass:"far fa-star"}),e._v("Facilités d'apprentissage")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Organisation et rigueur")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Ténacité")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Assiduité")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Autonomie")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Esprit d'équipe")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Dépassement de soi, challenge")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Ponctualité")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Créativité")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("i",{staticClass:"far fa-comment"}),e._v("Anglais courant ")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-comment"}),e._v("Espagnol: niveau scolaire")])])}],!1,null,null,null);t.default=component.exports},203:function(e,t,n){"use strict";n.r(t);var l=n(19),component=Object(l.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"triangle"},[n("div",{staticClass:"triangle--text"},[e._v("\n    Voir profil et compétences\n    ")])])}],!1,null,null,null);t.default=component.exports},204:function(e,t,n){"use strict";n.r(t);var l=n(201),r={props:["expe"],data:function(){return{modaleOpened:!1,imageToOpen:""}},methods:{openModale:function(e){this.modaleOpened=!0,this.imageToOpen=e}},mounted:function(){var e=this;l.a.on("modaleToClose",(function(){e.modaleOpened=!1,e.imageToOpen=""}))}},o=n(19),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"expe__item"},[e.expe.img?n("img",{staticClass:"expe--img",attrs:{src:e.expe.img,alt:e.expe.title,tabindex:"0"},on:{click:function(t){return e.openModale(e.expe.img)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.openModale(e.expe.img)}}}):e._e(),e._v(" "),n("p",{staticClass:"expe--title"},[e._v(" "+e._s(e.expe.title))]),e._v(" "),e._l(e.expe.paragraphes,(function(t,l){return n("p",{key:l,staticClass:"expe--para"},[e._v(" "+e._s(t))])})),e._v(" "),e.expe.perfs?n("ul",{staticClass:"expe--perfs"},e._l(e.expe.perfs,(function(t,l){return n("li",{key:l},[n("i",{staticClass:"fas fa-medal"}),e._v(e._s(t)+"\n        ")])})),0):e._e(),e._v(" "),e.expe.icones?n("div",e._l(e.expe.icones,(function(e,t){return n("img",{key:t,staticClass:"dev-icone",attrs:{src:e,alt:""}})})),0):e._e(),e._v(" "),e.expe.lien?n("a",{staticClass:"expe--link",attrs:{target:"blank",href:e.expe.link}},[e._v(e._s(e.expe.lien))]):e._e(),e._v(" "),e.modaleOpened?n("imagemodale",{attrs:{image:e.imageToOpen}}):e._e()],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Imagemodale:n(205).default})},205:function(e,t,n){"use strict";n.r(t);var l=n(201),r={props:["image"],data:function(){return{}},methods:{closeModale:function(){l.a.emit("modaleToClose")}}},o=n(19),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal--overlay",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closeModale(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closeModale(t)}}},[n("div",{staticClass:"modal"},[n("button",{staticClass:"close-modale",on:{click:e.closeModale}},[n("i",{staticClass:"fas fa-times"}),e._v(" "),n("p",[e._v("FERMER")])]),e._v(" "),n("img",{attrs:{src:e.image,alt:""}})])])}),[],!1,null,null,null);t.default=component.exports},207:function(e,t,n){"use strict";n.r(t);var l=n(202),r=n(204),o=n(203),c={components:{sidebar:l.default,expeitem:r.default,triangle:o.default},data:function(){return{pointsforts:["Adaptabilité","Polyvalence","Rigueur","Patience","Exigence","Projection à long terme","Anticipation","Vulgarisation","Pédagogie","Sens de l'observation","Intuition","Ecoute et empathie"],competences:["Bien-être animal","Connaissances zootechniques","Etudes de lignées","Génétique et sélection","Planification","Socialisation poussée","Observation et détection des caractères","Construction d'habitats adaptés","Communication (internet et réseaux)","Création de logo","Relation client","Gestion des urgences"],chiens:{img:"/chiots.jpg",title:"Elevage canin professionnel des Cimes de Pyrène",paragraphes:["Depuis 2005 : ","- Elevage, sélection et utilisation de bergers australiens ","- Membre du club de race international (ASCA)","- Etude approfondie et minutieuse des lignées","- Saillies à l'international, import de semence et inséminations congelées","- Import et export de chiens à l'étranger","- Utilisation de lignées travail","- Eveil, socialisation, pré-éducation des chiots","- Plusieurs chiots placés en Ecole de chiens guides d'aveugles","- Détection des familles adaptées","- Rédaction livre informatif pour les adoptants (60 pages)","- Construction lieux de vie et matériel","- Concours dans plusieurs disciplines","- Création de logo et site internet et blogs, travail sur expérience utilisateur"],icones:["/cdp.jpg"]},brebis:{img:"/brebis.jpg",title:"Elevage de brebis allaitantes",paragraphes:["Depuis 2009 : ","- Elevage sélectif de brebis allaitantes ","- 50 brebis-mères environ","- Races basco-béarnaises, Black-Face, Suffolk","- Sélection pour amélioration de la rusticité, resistance à l'humidité, autonomie en élevage extensif","- Création d'une race","- Elevage extensif sur environ 30ha","- Transhumance","- Construction, rénovation et entretien de leurs lieux de vie adaptés (bergeries, pâturages)","- Suivi sanitaire du troupeau"]},chevres:{img:"/chevres.jpg",title:"Elevage de chèvres de race Pyrénéenne",paragraphes:["Depuis 2010 : ","- Elevage sélectif d'une race à faible effectif, avec programme de sauvegarde ","- Plusieurs fois membre de l'association de sauvegarde de la chèvre des Pyrénées","- Construction, rénovation et entretien d'habitats adaptés"]},volailles:{img:"/coureurs.jpg",title:"Elevage de volailles d'ornement",paragraphes:["Depuis 2018 : ","- Elevage sélectif de poules de race Gasconne, Faverolles, Marans, Sussex, Orpington","- Elevage sélectif de canards coureurs indiens","- Poules pondeuses et oies","- Echange d'oeufs au niveau national","- Construction, rénovation et entretien d'habitats adaptés"]}}}},v=n(19),component=Object(v.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("section",{staticClass:"contenu",attrs:{"aria-label":"Expériences et formations"}},[e._m(0),e._v(" "),n("a",{attrs:{href:"#sidebar"}},[n("triangle")],1),e._v(" "),n("div",{staticClass:"contenu-item"},[n("h2",[e._v("Expériences")]),e._v(" "),n("div",{staticClass:"expe__list expe--elevage"},[n("expeitem",{attrs:{expe:e.chiens}}),e._v(" "),n("expeitem",{attrs:{expe:e.brebis}}),e._v(" "),n("expeitem",{staticClass:"chevres",attrs:{expe:e.chevres}}),e._v(" "),n("expeitem",{staticClass:"coureurs",attrs:{expe:e.volailles}})],1)]),e._v(" "),e._m(1)]),e._v(" "),n("sidebar",[n("h2",[e._v("Points forts spécifiques")]),e._v(" "),n("ul",e._l(e.pointsforts,(function(t,l){return n("li",{key:l},[n("i",{staticClass:"far fa-star"}),e._v(e._s(t))])})),0),e._v(" "),n("h2",[e._v("Compétences spécifiques")]),e._v(" "),n("ul",e._l(e.competences,(function(t,l){return n("li",{key:l,staticClass:"comp-item"},[n("i",{staticClass:"fas fa-star"}),e._v(e._s(t)+"\n            ")])})),0)])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"entete entete--elevage"},[n("h1",[e._v("Eleveuse professionnelle")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contenu-item"},[n("h2",[e._v("Certifications")]),e._v(" "),n("ul",{staticClass:"formations"},[n("li",{staticClass:"form__item"},[n("span",[e._v("Depuis 2010 : "),n("span",{staticClass:"bold"},[e._v("Membre de l'ASCA ")]),e._v("(Australian Shepherd Club of America), Club de race international")]),n("br")]),e._v(" "),n("li",{staticClass:"form__item"},[n("span",[n("span",{staticClass:"bold"},[e._v("Certificat de capacité")]),e._v(", pour élevage canin")])])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Triangle:n(203).default,Expeitem:n(204).default,Sidebar:n(202).default})}}]);