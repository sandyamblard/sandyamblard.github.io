<template>
    <main>
        <section class='contenu' aria-label='Expériences et formations'>
            <div class='entete entete--elevage'> <h1>Eleveuse professionnelle</h1></div>
            <a href="#sidebar"><triangle></triangle></a>
            <div class='contenu-item'>
                <h2>Expériences</h2>
                <div class='expe__list expe--elevage'>
                    <expeitem :expe='chiens' ></expeitem>
                    <expeitem :expe='volailles' class='coureurs'></expeitem>
                    <expeitem :expe='brebis'></expeitem>
                    <expeitem :expe='chevres' class='chevres'></expeitem>
                </div>
            </div>
            <div class='contenu-item'>
                <h2>Certifications</h2>
                <ul class='formations'>
                    <li class="form__item"><span>Depuis 2010 : <span class="bold">Membre de l'ASCA </span>(Australian Shepherd Club of America), Club de race international</span><br>
                    </li>
                    <li class="form__item"><span><span class="bold">Certificat de capacité</span>, pour élevage canin</span>
                    </li>
                </ul>
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
     components: {
    'sidebar': Sidebar,
    'expeitem': Expeitem,
    'triangle' : Triangle
    },
    data(){
        return{
             pointsforts: ['Adaptabilité', 'Polyvalence', 'Rigueur', 'Patience',"Exigence", 'Projection à long terme','Anticipation', 'Vulgarisation', 'Pédagogie', "Sens de l'observation" ,  'Intuition', "Ecoute et empathie"],
            competences:['Bien-être animal','Connaissances zootechniques', 'Etudes de lignées', 'Génétique et sélection', "Planification",  "Socialisation poussée", "Observation et détection des caractères","Construction d'habitats adaptés",'Communication (internet et réseaux)', 'Création de logo',  'Relation client', 'Gestion des urgences']
        ,chiens:{   img:'/chiots.jpg' ,
                    title: "Elevage canin professionnel des Cimes de Pyrène",
                    paragraphes: ['Depuis 2005 : ', '- Elevage, sélection et utilisation de bergers australiens ','- Membre du club de race international (ASCA)', "- Etude approfondie et minutieuse des lignées", "- Saillies à l'international, import de semence et inséminations congelées", "- Import et export de chiens à l'étranger", "- Utilisation de lignées travail", "- Eveil, socialisation, pré-éducation des chiots", "- Plusieurs chiots placés en Ecole de chiens guides d'aveugles",  "- Détection des familles adaptées", "- Rédaction livre informatif pour les adoptants (60 pages)", "- Construction lieux de vie et matériel", '- Concours dans plusieurs disciplines', '- Photos, création de logo, création du site internet'],
                    icones: ['/cdpmini.jpg'],
                    lien: "Voir le site web de l'élevage", link: 'https://www.cimesdepyrene.fr'
        }, brebis:{   img:'/brebis.jpg' ,
                    title: "Elevage de brebis allaitantes",
                    paragraphes: ['Depuis 2009 : ', '- Elevage sélectif de brebis allaitantes ','- 50 brebis-mères environ','- Races basco-béarnaises, Black-Face, Suffolk', "- Sélection pour amélioration de la rusticité, resistance à l'humidité, autonomie en élevage extensif" , "- Création d'une race", '- Elevage extensif sur environ 30ha', '- Transhumance', "- Construction, rénovation et entretien de leurs lieux de vie adaptés (bergeries, pâturages)", '- Suivi sanitaire du troupeau'],
                        // lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-2-21122020'
        }, chevres:{   img:'/chevres.jpg' ,
                    title: "Elevage de chèvres de race Pyrénéenne",
                    paragraphes: ['Depuis 2010 : ', "- Elevage sélectif d'une race à faible effectif, avec programme de sauvegarde ", "- Plusieurs fois membre de l'association de sauvegarde de la chèvre des Pyrénées", "- Construction, rénovation et entretien d'habitats adaptés"],
                        // lien: 'Voir le GitHub du projet', link: 'https://github.com/sandyamblard/sandyamblard-2-21122020'
        },  volailles:{   img:'/coureurs.jpg' ,
                    title: "Elevage de volailles d'ornement",
                    paragraphes: ['Depuis 2018 : ', "- Elevage sélectif de canards coureurs indiens, toutes couleurs","- Elevage sélectif de poules de race Marans, Orpington, Faverolles",  "- Poules pondeuses et oies", "- Echange d'oeufs au niveau national", "- Construction, rénovation et entretien d'habitats adaptés. Protections anti-prédateurs", "- Enrichissements "],
                    icones: ['/logoplumes.png'],
                    lien: "Voir le site web de l'élevage", link: 'https://www.plumesdepyrene.fr'
        },
        }
    }
}
</script>
