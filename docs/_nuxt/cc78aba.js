(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4],{201:function(e,t,n){"use strict";n.r(t);var r=n(19),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sidebar",attrs:{"aria-label":"profil et compétences",id:"sidebar"}},[e._m(0),e._v(" "),e._t("default",[n("h2",[e._v("Points forts")]),e._v(" "),e._m(1),e._v(" "),n("h2",[e._v("Compétences")]),e._v(" "),n("NuxtLink",{attrs:{to:"/webdev"}},[n("ul",[n("li",[n("i",{staticClass:"fas fa-code"}),e._v("VS Code, Git, GitHub")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-code"}),e._v("HTML, CSS, SASS")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-code"}),e._v("JAVASCRIPT")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-code"}),e._v("VueJS, Nuxt, NodeJS")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-code"}),e._v("MongoDB, Sequelize, MySql")])])]),e._v(" "),n("NuxtLink",{attrs:{to:"/veto"}},[n("ul",[n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Médecine vétérinaire")]),n("li"),n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Chirurgie vétérinaire")]),n("li"),n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Acupuncture, Phytothérapie")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Analyses")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Radiographie, Echographie")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-stethoscope"}),e._v("Comportement canin et félin")])])]),e._v(" "),n("NuxtLink",{attrs:{to:"/elevage"}},[n("ul",[n("li",[n("i",{staticClass:"fas fa-paw"}),e._v("Zootechnie, élevage")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-paw"}),e._v("Génétique et sélection")]),e._v(" "),n("li",[n("i",{staticClass:"fas fa-paw"}),e._v("Education canine")])])]),e._v(" "),n("NuxtLink",{attrs:{to:"/competitions"}},[n("ul",[n("li",[n("i",{staticClass:"fas fa-trophy"}),e._v("Sports canins")])])]),e._v(" "),n("NuxtLink",{attrs:{to:"/loisirs"}},[n("ul",[n("li",[n("i",{staticClass:"fas fa-camera"}),e._v("Photoshop, Gimp")])])]),e._v(" "),n("h2",[e._v("Langues")]),e._v(" "),e._m(2)])],2)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profil"},[n("h2",[e._v("Profil")]),e._v(" "),n("p",[n("strong",[e._v("Développeur web")]),e._v(", je suis à la recherche d'un poste front-end ou full-stack. "),n("br"),e._v("\n        Assidue, rigoureuse, appliquée, autonome, j'apprends vite et je pourrais rapidement m'intégrer à une équipe."),n("br"),e._v("  \n        Disponible immédiatement, CDI ou CDD. Télétravail et temps partiel possible.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("i",{staticClass:"far fa-star"}),e._v("Facilités d'apprentissage")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Organisation et rigueur")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Ténacité")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Assiduité")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Autonomie")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Esprit d'équipe")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Dépassement de soi, challenge")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Ponctualité")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-star"}),e._v("Créativité")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("i",{staticClass:"far fa-comment"}),e._v("Anglais courant ")]),e._v(" "),n("li",[n("i",{staticClass:"far fa-comment"}),e._v("Espagnol: niveau scolaire")])])}],!1,null,null,null);t.default=component.exports},202:function(e,t,n){"use strict";n.r(t);var r=n(19),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"triangle"},[n("div",{staticClass:"triangle--text"},[e._v("\n    Voir profil et compétences\n    ")])])}],!1,null,null,null);t.default=component.exports},203:function(e,t,n){"use strict";n.r(t);var r={props:["expe"]},l=n(19),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"expe__item"},[e.expe.img?n("img",{staticClass:"expe--img",attrs:{src:e.expe.img,alt:e.expe.title}}):e._e(),e._v(" "),n("p",{staticClass:"expe--title"},[e._v(" "+e._s(e.expe.title))]),e._v(" "),e._l(e.expe.paragraphes,(function(t,r){return n("p",{key:r,staticClass:"expe--para"},[e._v(" "+e._s(t))])})),e._v(" "),e.expe.perfs?n("ul",{staticClass:"expe--perfs"},e._l(e.expe.perfs,(function(t,r){return n("li",{key:r},[n("i",{staticClass:"fas fa-medal"}),e._v(e._s(t)+"\n        ")])})),0):e._e(),e._v(" "),e.expe.icones?n("div",e._l(e.expe.icones,(function(e,t){return n("img",{key:t,staticClass:"dev-icone",attrs:{src:e,alt:""}})})),0):e._e(),e._v(" "),e.expe.lien?n("a",{staticClass:"expe--link",attrs:{target:"blank",href:e.expe.link}},[e._v(e._s(e.expe.lien))]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},207:function(e,t,n){"use strict";n.r(t);var r=n(201),l=n(203),c=n(202),o={data:function(){return{pointsforts:["Ecoute et empathie","Sang-froid","Gestion de l'urgence","Travail de nuit","Adaptabilité","Polyvalence"],competences:["Médecine et chirurgie canines","Acupuncture et phytothérapie","Analyses","Radiographie et Echographie","Relation client","Relations humaines, psychologie","Gardes nuits et week-end"],expeUn:{title:"Clinique Vétérinaire de l'Aiguille (Tarbes, 65)",paragraphes:["De juin 2008 à juin 2019 : ","- Clientèle canine, consultations et chirurgies courantes","- Acupuncture, Phytothérapie","- Analyses, Radiographies, Echographies","- Gardes de nuits et week-end, Urgences"],icones:["/caduceevet.jpg"]},expeDeux:{title:"Clinique Vétérinaire du Piémont (Nay, 64)",paragraphes:["De 2008 à 2010 : ","- Sessions de prophylaxie ovine et bovine","- Vaccination FCO (ovins et bovins)"],icones:["/caduceevet.jpg"]},expeTrois:{title:"Clinique Vétérinaire du Marcadieu (Tarbes, 65)",paragraphes:["2007 : ","- Clientèle canine, consultations et chirurgies courantes","- Analyses, Radiographies","- Gardes de nuits et week-end, Urgences"],icones:["/caduceevet.jpg"]},expeQuatre:{title:"Clinique Vétérinaire de St-Hilaire de Riez (85)",paragraphes:["Octobre - Novembre 2006 : ","- Remplacement en clientèle canine","- Consultations et chirurgies courantes","- Analyses, Radiographies","- Gardes de nuits et week-end, Urgences"],icones:["/caduceevet.jpg"]}}},components:{sidebar:r.default,expeitem:l.default,triangle:c.default}},_=n(19),component=Object(_.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("section",{staticClass:"contenu"},[e._m(0),e._v(" "),n("p",{staticClass:"subtitle"},[e._v("- LYON 2005, 12 ans de pratique -")]),e._v(" "),n("a",{attrs:{href:"#sidebar"}},[n("triangle")],1),e._v(" "),n("div",{staticClass:"contenu-item"},[n("h2",[e._v("Expériences professionnelles")]),e._v(" "),n("div",{staticClass:"expe__list"},[n("expeitem",{attrs:{expe:e.expeUn}}),e._v(" "),n("expeitem",{attrs:{expe:e.expeDeux}}),e._v(" "),n("expeitem",{attrs:{expe:e.expeTrois}}),e._v(" "),n("expeitem",{attrs:{expe:e.expeQuatre}})],1)]),e._v(" "),e._m(1)]),e._v(" "),n("sidebar",[n("h2",[e._v("Points forts spécifiques")]),e._v(" "),n("ul",e._l(e.pointsforts,(function(t,r){return n("li",{key:r},[n("i",{staticClass:"far fa-star"}),e._v(e._s(t))])})),0),e._v(" "),n("h2",[e._v("Compétences spécifiques")]),e._v(" "),n("ul",e._l(e.competences,(function(t,r){return n("li",{key:r,staticClass:"comp-item"},[n("i",{staticClass:"fas fa-star"}),e._v(e._s(t)+"\n            ")])})),0)])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"entete entete--veto"},[n("h1",[e._v("Docteur Vétérinaire")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contenu-item"},[n("h2",[e._v("Formations")]),e._v(" "),n("ul",{staticClass:"formations"},[n("li",{staticClass:"form__item"},[n("span",[e._v("Septembre 2005 - Octobre 2006 : "),n("span",{staticClass:"bold"},[e._v("THESE DE DOCTORAT")]),e._v(", ENVL + Faculté de médecine de Lyon :")]),n("br"),e._v("\n                        T1 pro : projet personnel spécialisé en médecines alternatives,"),n("br"),e._v("\n                        Thèse : Traitement de l'arthrose par les médecines alternatives chez le chien, "),n("br"),e._v(" Mention Très Honorable"),n("br"),e._v(" "),n("a",{attrs:{href:""}},[e._v("Voir la thèse")])]),e._v(" "),n("li",{staticClass:"form__item"},[n("span",[e._v("Septembre 2001 - Juin 2005 : "),n("span",{staticClass:"bold"},[e._v("DIPLOME d'ETUDES FONDAMENTALES VETERINAIRES")]),e._v(", Ecole Nationale Vétérinaire de Lyon")]),n("br")]),e._v(" "),n("li",{staticClass:"form__item"},[n("span",[e._v("Septembre 2000 - Juin 2001 : "),n("span",{staticClass:"bold"},[e._v('CLASSE PREPARATOIRE "VETO"')])]),e._v(", Lycée Thiers, Marseille :"),n("br"),e._v("\n                        Passage du concours d'entrée aux Ecoles Nationales Vétérinaires, obtenu la première année"),n("br")]),e._v(" "),n("li",{staticClass:"form__item"},[n("span",[e._v("Juillet 2000 : "),n("span",{staticClass:"bold"},[e._v("BAC Scientifique, option maths")])]),e._v(", Lycée Daumier, Marseille :"),n("br"),e._v("\n                        Mention Très Bien\n                    ")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Triangle:n(202).default,Expeitem:n(203).default,Sidebar:n(201).default})}}]);