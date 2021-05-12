<template>
    <main>
        <section class='contenu'>
            <div class='entete entete--code'> <h1>Développeur web</h1></div>
            
            <div class='contenu-item'>
                <h2>Réalisations</h2>
                <div class='expe__list'>
                    <expeitem :expe='projetSix'></expeitem>
                    <expeitem :expe='projetCinq'></expeitem>
                    <expeitem :expe='projetQuatre'></expeitem>
                    <expeitem :expe='projetTrois'></expeitem>
                    <expeitem :expe='projetDeux'></expeitem>
                    <expeitem :expe='projetUn'></expeitem>
                </div>
            </div>  
            <div class='contenu-item'>
                <h2>Formations</h2>
                <ul class='formations'> 
                    <li class="form__item"><span>Décembre 2020 - Avril 2021 : <span class="bold">DEVELOPPEUR WEB, titre RNCP de niveau 5</span>, OpenClassRooms :</span><br>
                    Réalisation de 6 projets concrets, en Front-end, Back-end, SEO et Performances, Accessibilité<br>
                    Titre en attente de validation par le jury<br>
                    <a href="https://github.com/sandyamblard">Voir sur GitHub</a>
                    
                    </li>
                </ul>
            </div> 
        </section>
        <sidebar>
            <h2>Points forts spécifiques</h2>
            <ul>
                <li v-for='(pointfort, index) in pointsforts' :key=index><i class="far fa-star"></i>{{ pointfort }}</li>
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

export default {
    data(){
        return{
            pointsforts: ['Rigueur', 'Concentration', 'Méthodologie', 'Autonomie', 'Tenacité', 'Goût pour le challenge'], 
            competences:['Visual Studio Code', 'Git et GitHub', 'HTML5 et CSS3', 'Javascript', 'Vue.JS, Nuxt.JS', 'Node.JS', 'MongoDB', 'MySQL', 'Sequelize', 'Responsive design']
            , projetUn:{ img:'/reservia.jpg' ,
                        title: "Maquette du site de Reservia", 
                        paragraphes: ['Transformation de la maquette en site web via HTML5 et CSS3 '],
                        icones: ['/minicsshtml.png', '/minigit.png', '/minivscode.png'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-2-21122020'},
            projetDeux:{ img:'/ohmyfood.jpg' ,
                        title: "MVP de l'application OhMyFood", 
                        paragraphes: ['Animations CSS', 'HTML, CSS, pré-processeur Sass'],
                        icones: ['/minisass.png'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-3-13012021'},
            projetTrois:{ img:'/orinoco.jpg' ,
                        title: "Front-end d'une application e-commerce", 
                        paragraphes: ['Javascript sans framework', 'HTML, CSS, Sass (Design libre)'],
                        icones: ['/minijs.png'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-5-04022021'}, 
            projetQuatre:{ img:'/piquante.jpg' ,
                        title: "Back-end d'une application d'avis gastronomique", 
                        paragraphes: ["Création d'une API REST", 'Utilisation de NodeJS, Express et MongoDB'],
                        icones: ['/mininode.png', '/minimongo.jpg'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-6-25022021'}, 
            projetCinq:{ img:'/chouetteagence.jpg' ,
                        title: "Optimisation du site de la Chouette Agence", 
                        paragraphes: ['Travail sur SEO, performances et accessibilité'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-4-12032021'}, 
            projetSix:{ img:'/groupomania.jpg' ,
                        title: "Création d'un réseau social d'enteprise (Fullstack)", 
                        paragraphes: ['Frontend avec VueJS (Design libre)', 'Back-end avec NodeJS, Express, MySql et Sequelize'],
                        icones: ['/minivue.png', '/mininode.png', '/minimysql.png', '/minisequelize.jpg'],
                        lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-7-30032021'},                                        }
    },
  components: {
    'sidebar': Sidebar,
    'expeitem': Expeitem
    }
}
</script>