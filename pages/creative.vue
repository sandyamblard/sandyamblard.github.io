<template>
    <main>
        <section class='contenu' aria-label='Expériences et formations'>
            <div class='entete entete--loisirs'> <h1>Activités créatives</h1></div>
            <a href="#sidebar"><triangle></triangle></a>

            <div class='contenu-item'>
              <p class="subtitle">
                La créativité à une place importante dans ma vie, depuis la photographie, jusqu'au bricolage, en passant par la rédaction d'articles.
              </p>

                <!--h2>Activités créatives</h2-->
                <div class='expe__list'>
                  <expeitem :expe='vulgarisation' ></expeitem>
                  <expeitem :expe='photo' class='maison' ></expeitem>
                  <expeitem :expe='renovation' class='maison'></expeitem>
                  <expeitem :expe='fourgon' ></expeitem>
                  <expeitem :expe='diy'></expeitem>
                  <!--expeitem :expe='education' class='randos'></expeitem-->
                  <!--expeitem :expe='randos'  class='randos'></expeitem-->
                </div>
            </div>
            <!--div class='contenu-item'>
                <h2>Formations et stages</h2>
                <ul class='formations'>
                    <li class="form__item">
                        <span>Avril 2012 : <span class="bold">Gestion de projet en médiation animale</span></span>, institut AGATEA à Colmar <br>
                    </li>
                    <li class="form__item">
                        <span>2003-2007 : <span class="bold">Déléguée de l'association HANDI-CHIENS</span></span> : éducation de chiens d'assistance pour personnes handicapées moteur : <br>
                        - Famille d'accueil pour 2 futurs chiens d'assistance de 2 à 20mois <br>
                        - Participation à un stage de passation<br>
                        - Formation complémentaire de déléguée de l'association
                    </li>
                </ul>
            </div-->
        </section>
        <sidebar>
            <h2>Points forts spécifiques</h2>
            <ul>
                <li v-for='(pointfort, index) in pointsforts' :key=index class='appeardelayed'><i class="far fa-star"></i>{{ pointfort }}</li>
        </ul>
            <h2>Compétences spécifiques</h2>
            <ul>
                <li class='comp-item appeardelayed' v-for='(comp, index) in competences' :key=index>
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
     components: {
    'sidebar': Sidebar,
    'expeitem': Expeitem, 'triangle' : Triangle
    },
    data(){
        return{
             pointsforts: ['Créativité', 'Adaptabilité', 'Polyvalence', 'Optimisation'],
            competences:["Rédaction",'Photographie', 'Photoshop, Gimp', 'Bricolage et travaux',  "Organisation et optimisation d'espaces", 'Do It Yourself, Upcycling' ,  'Loisirs créatifs', "Décoration d'intérieur"]
        ,renovation:{   img:'/maison.jpg' ,
                    title: "Bricolage : rénovation d'une ferme",
                    paragraphes: ['Depuis 2009 :',
                        '- Rénovation habitation (second-oeuvre, décoration, de la conception à la réalisation', '- Habitats pour élevage : conception, création, gros-oeuvre, second-oeuvre', "- Constructions et aménagement de dépendances", "- Travaux extérieurs (jardin, clôtures...)", "- Construction de meubles sur-mesure"],
            },fourgon:{   img:'/fourgon.jpg' ,
                    title: "Bricolage : aménagement de fourgons (type camping-car)",
                    paragraphes: ['2010 et 2018  :',
                        "Aménagement sur mesure de 2 fourgons pour transports sécurisés des chiens et hébergement lors de déplacements", "- Création du mobilier, électricité, isolation", "- Optimisation de l'espace"],
            },diy:{   img:'/diy.jpg' ,
                    title: "DIY : création et relooking d'objets et meubles",
                    paragraphes: ['- Création sur-mesure ou upcycling','- Peinture décorative', '- Participation à des ateliers déco'],
            },photo:{   img:'/photo.jpg' ,
                    title: "Photographie",
                    paragraphes: ['- Prises de vue lors de voyages et randonnées, mise en valeur des animaux de mes élevages ', '- Optimisation des images avec photoshop ou Gimp', '- Création de montages'],
            },randos:{   img:'/voyages.jpg' ,
                    title: "Randonnées et voyages",
                    paragraphes: ['- Randonnées en montagne (Alpes, Pyrénées), bivouacs', '- Voyages (France, Europe, USA) : ', 'Nombreux voyages en France,', 'Road-Trip de 3 semaines en Ecosse en 2019,', "5 jours chez l'habitant à Seattle (USA)"],
            },education:{   img:'/education.jpg' ,
                    title: "Education canine",
                    paragraphes: ['- Education de base, méthode positive et bienveillante', '- Toutes races', "- Education de 10 chiens, de 4 races différentes, dont chiens d'assistance et chiens de concours ", '- Grandes connaissances en comportement canin', "- Clicker training", "- Médical training", "- Education spécifique aux sports canins", "- Education spécifique pour chiens d'assistance"],
            },
          vulgarisation:{   img:'/livrets.jpg' ,
            title: "Redaction d'articles informatifs",
            paragraphes: ["- Vulgarisation scientifique : rédaction d'articles en ligne sur les chiens, les volailles et l'élevage canin et avicole", '- Rédaction d\'un livret informatif sur l\'éducation, l\'alimentation et l\'entretien du chien à destination des familles adoptantes de mon élevage (60 pages illustrées)', '- Réalisations de vidéos tutorielles sur l\'éducation canine'],
            lien: "Voir mes articles canins", link: 'https://www.cimesdepyrene.fr/conseils'
          },
        }
    }
}
</script>
