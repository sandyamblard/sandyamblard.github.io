<template>
    <main>
        <section class='contenu'>
            <div class='entete entete--code'> <h1>Développeur web</h1></div>
          <div class="centre">
            <img src="/friseicones.png" alt="" class="friseicones">
          </div>

          <a href="#sidebar"><triangle></triangle></a>
            <div class='contenu-item'>

                <h2>Réalisations</h2>

                <div class='expe__list'>
                  <expeitem :expe='extranetPnp'></expeitem>
                    <expeitem :expe='sitesWordPress'></expeitem>
                    <expeitem :expe='siteCDP'></expeitem>
                    <expeitem :expe='projetSix'></expeitem>
                    <expeitem :expe='projetQuatre'></expeitem>
                    <expeitem :expe='projetCinq'></expeitem>
                    <expeitem :expe='projetTrois'></expeitem>
                    <expeitem :expe='projetDeux'></expeitem>
                    <expeitem :expe='projetUn'></expeitem>
                </div>
            </div>
            <div class='contenu-item'>
                <h2>Formations</h2>
              <ul class='formations'>
                <li class="form__item"><span>Depuis mai 2021:  <span class="bold">Formation continue</span>, cours et tutoriels en ligne :</span>
                  <ul class='list-bis'>
                    <li>Drupalize.Me : tutoriels sur Drupal et Twig</li>
                    <li>OpenClassRooms : formation "Concevez votre site web avec PHP et MySQL"</li>
                    <li>Udemy : formation "Créez un site web avec Drupal 9"</li>
                    <li>Udemy : formation "WordPress de débutant à expert redoutable de A à Z (en 2021)"</li>
                    <li>OpenClassRooms : formation "Créez un site moderne et professionnel avec WordPress 5"</li>
                    <li>Vue Mastery : formations sur Vue.js et Nuxt.js</li>
                    <li>Udemy : formation "Vue.js de A à Z"</li>
                    <li>Graphikart.fr : nombreux tutoriels, tous sujets</li>
                  </ul>
                </li>
              </ul>
                <ul class='formations'>
                    <li class="form__item"><span>Décembre 2020 - Avril 2021 : <span class="bold">DEVELOPPEUR WEB, titre RNCP de niveau 5</span>, OpenClassRooms :</span>
                    <ul class='list-bis'>
                        <li>Réalisation de 6 projets concrets, en Front-end, Back-end, SEO, Performances, Accessibilité, Sécurité,</li>
                        <li>Utilisation des technologies HTML5, CSS3, SASS, Javascript, VueJS, NodeJS, Express, MongoDB, MySQL, Sequelize,</li>
                        <li>Utilisation des outils VS Code, Git et GitHub,</li>
                        <li>Respect des standards W3C, WCAG, OWASP,</li>
                        <li>Tous les projets validés en 20 semaines,</li>
                        <li> Diplôme validé par le jury le 1er juin 2021</li>
                    </ul>
                    <a href="https://github.com/sandyamblard" class="expe--link">Voir sur GitHub</a>

                    </li>
                </ul>
              <div class="centre">
                <img src="/friseicones.png" alt="" class="friseicones">
              </div>
            </div>
        </section>
        <sidebar>
            <h2>Points forts spécifiques</h2>
            <ul>
                <li v-for='(pointfort, index) in pointsforts' :key=index class='appeardelayed'><i class="far fa-star"></i>{{ pointfort }}</li>
        </ul>
            <h2>Compétences spécifiques</h2>
            <ul>
                <li class='comp-item' v-for='(comp, index) in competences' :key=index>
                    <i class="fas fa-star"></i>{{ comp }}
                </li>
            </ul>

        </sidebar>
    </main>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Expeitem from '../components/Expeitem.vue';
import Triangle from '../components/Triangle.vue';

export default {
    data(){
        return{
            pointsforts: ['Rigueur', 'Concentration', 'Méthodologie', 'Autonomie', 'Ténacité', 'Goût pour le challenge', 'Sens du détail'],
            competences:['VS Code, PHP Sorm', 'Git, GitHub, GitLab', 'HTML5 et CSS3', 'Bootstrap 5', 'Javascript, Vue.JS, Nuxt.JS', 'Node.JS', 'PHP, Twig', 'MongoDB', 'MySQL', 'Sequelize', 'Drupal, Wordpress','Responsive design']
            , projetUn:{ img:'/reservia.jpg' ,
                        title: "Maquette du site de Reservia",
                        paragraphes: ['- Transformation de la maquette en site web via HTML5 et CSS3 ', '- Responsive design'],
                        icones: ['/minicsshtml.png', '/minigit.png', '/minivscode.png'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-2-21122020'},

            projetDeux:{ img:'/ohmyfood.jpg' ,
                        title: "MVP de l'application OhMyFood",
                        paragraphes: ['- Transformation de la maquette en site web via HTML5 et CSS3 ','- Animations CSS', '- HTML, CSS, pré-processeur Sass', '- Responsive design'],
                        icones: ['/minicsshtml.png','/minisass.png'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-3-13012021'},

            projetTrois:{ img:'/orinoco.jpg' ,
                        title: "Front-end d'une application e-commerce",
                        paragraphes: ['- Javascript sans framework', '- HTML, CSS, Sass (Design libre)', '- Responsive design'],
                        icones: ['/minijs.png'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-5-04022021'},

           projetQuatre:{ img:'/piquante.jpg' ,
                        title: "Back-end d'une application d'avis gastronomique",
                        paragraphes: ["- Création d'une API REST sécurisée", '- Utilisation de NodeJS, Express et MongoDB', "- Stockage de données sécurisé (OWASP)"],
                        icones: ['/mininode.png', '/minimongo.jpg'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-6-25022021'},

           projetCinq:{ img:'/chouetteagence.jpg' ,
                        title: "Optimisation du site de la Chouette Agence",
                        paragraphes: ['- Travail sur SEO, performances et accessibilité', '- Responsive design'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-4-12032021'},

           projetSix:{ img:'/groupomania.jpg' ,
                        title: "Création d'un réseau social d'enteprise (Fullstack)",
                        paragraphes: ['- Frontend avec VueJS (Design libre)', '- Back-end avec NodeJS, Express, MySQL et Sequelize', "- Stockage de données sécurisé (OWASP)" , '- Responsive design'],
                        icones: ['/minivue.png', '/mininode.png', '/minimysql.png', '/minisequelize.jpg'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-7-30032021'},

           siteCDP:{ img:'/sitecdp.jpg' ,
                        title: "Refonte du site de l'élevage des Cimes de Pyrène",
                        paragraphes: [ '- Utilisation de Nuxt.JS pour générer un site statique', '- Responsive design et accessibilité', "- SEO, Suivi d'audience", '- Création du contenu : textes, photos, logo', "- Optimisation d'images"],
                        icones: ['/mininuxt.jpg','/minisass.png', '/googleanalytics.jpg'],
                        lien: 'Voir le site des Cimes de Pyrène', link: 'https://www.cimesdepyrene.fr'},

            sitesWordPress:{ img:'/fermebonair.jpg' ,
                        title: "Création de sites web avec WordPress",
                        paragraphes: [ "Depuis juillet 2021 :", '- Utilisation du CMS WordPress pour pages statiques et blog', '- Constructeur de pages : Elementor',  '- Sécurité (WordFence)',"- SEO (YoastSEO)", "- Intégration d'éléments interactifs (google maps, fil facebook)"],
                        icones: ['/wordpressicone.jpg'],
                        lien: 'Voir le site de la ferme du Bon\'Air', link: 'http://www.lafermedubonair.fr'},

         extranetPnp:{ img:'/extranetpnp.jpg' ,
            title: "Création d'un thème Drupal personnalisé pour un site extranet",
            paragraphes: [ '- CMS Drupal : création d\'un thème personnalisé pour une application dédiée aux dirigeants et adhérents du Parc National des Pyrénées',  '- Travail avec le moteur de template Twig ', '- Framework CSS : Bootstrap 5', '- Responsive design',"- GitLab",  '-IDE : PHP Storm', '- Travail en équipe avec agence E-Nuksuk et Kevin Gautreau'],
            icones: ['/drupal.png', '/twig.png', '/bootstrap.png', '/gitlab.png', '/phpstorm.png'],
            lien: '', link: ''},
        }
    },
  components: {
    'sidebar': Sidebar,
    'expeitem': Expeitem,
    'triangle' : Triangle
    }
}
</script>
