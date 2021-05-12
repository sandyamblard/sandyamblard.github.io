<template>
    <main>
        <section class='contenu'>
            <div class='entete entete--loisirs'> <h1>Loisirs</h1></div>
            <div class='contenu-item'>
                <h2>Centre d'intérêts</h2>
                <div class='expe__list'>
                    <expeitem :expe='renovation' class='maison'></expeitem>
                    <expeitem :expe='fourgon' ></expeitem>
                    <expeitem :expe='diy'></expeitem>
                    <expeitem :expe='photo' class='maison' ></expeitem>
                    <expeitem :expe='randos'  class='randos'></expeitem>
                    <expeitem :expe='education' class='randos'></expeitem>
                </div>
            </div>  
            <div class='contenu-item'>
                <h2>Formations et stages</h2>
                <ul class='formations'> 
                    <li class="form__item">
                        <span>Avril 2012 : <span class="bold">Gestion de projet en médiation animale</span></span>, institut AGATEA à Colmar <br>
                    </li>
                    <li class="form__item">
                        <span>2003-2007 : <span class="bold">Déléguée de l'association HANDI-CHIENS</span></span> : éducation de chiens d'assistance pour personnes handicapées moteur : <br>
                        - Famille d'accueil pour 2 futurs chiens d'assistance de 2 à 20mois <br>
                        - Participation à un stage de passation<br>
                        - Formation complémentaire de déléguée ed l'association
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
     components: {
    'sidebar': Sidebar,
    'expeitem': Expeitem
    },
    data(){
        return{
             pointsforts: ['Créativité', 'Adaptabilité', 'Polyvalence', 'Optimisation'], 
            competences:['Photographie', 'Photoshop, Gimp', 'Bricolage', 'Travaux : de la conception à la décoration', "Travaux : Planification",  "Architecture",  'Loisirs créatifs', "Décoration d'intérieur","Education canine, comportement canin"]
        ,renovation:{   img:'/maison.jpg' ,
                    title: "Bricolage : rénovation d'une ferme", 
                    paragraphes: ['Depuis 2009 :',
                        '- Rénovation habitation (second-oeuvre, décoration, de la conception à la réalisation', '- Habitats pour élevage : conception, création, gros-oeuvre, second-oeuvre', "- Constructions et aménagement de dépendances", "Travaux extérieurs (jardin, clôtures...)", "- Construction de meubles sur-mesure"],  
            },fourgon:{   img:'/fourgon.jpg' ,
                    title: "Bricolage : aménagement de fourgons (type camping-car)", 
                    paragraphes: ['2010 et 2018  :',
                        "Aménagement sur mesure de 2 fourgons pour transports sécurisés des chiens et hébergement lors de déplacements", "- Création du mobilier, électricité, isolation", "- Optimisation de l'espace"],  
            },diy:{   img:'/diy.jpg' ,
                    title: "DIY : création et relooking d'objets et meubles", 
                    paragraphes: ['- Création sur-mesure ou upcycling','- Peinture décorative', '- Participation des ateliers déco'],  
            },photo:{   img:'/photo.jpg' ,
                    title: "Photographie", 
                    paragraphes: ['- Prises de vue', '- Edition avec photoshop ou Gimp', '- Création de montages'],  
            },randos:{   img:'/voyages.jpg' ,
                    title: "Randonnées et voyages", 
                    paragraphes: ['- Randonnées en montagne, bivouac', '- Voyages, 3 semaines en Ecosse en 2019'],  
            },education:{   img:'/education.jpg' ,
                    title: "Education canine", 
                    paragraphes: ['- Education de base, méthode positive et bienveillante', "- Clicker training", "- Médical training", "- Education spécifique aux sports canins", "- Education spécifique pour chiens d'assistance"],  
            },
        }
    }
}
</script>