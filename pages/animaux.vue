<template>
    <main>
<section class='contenu'>
            <div class='entete entete--veto'> <h1>Docteur Vétérinaire - Eleveuse professionnelle</h1></div>
            <!--p class="subtitle">- LYON 2005, 12 ans de pratique -</p-->
            <a href="#sidebar"><triangle></triangle></a>



            <div class="contenu-item">

              <p class="subtitle">
                Mes expériences de vétérinaire et éleveuse m'ont habitué à travailler en partenariat avec des clients, écouter et décrypter leurs besoins et m'y adapter.
                <br>De plus, la sélection en élevage, l'éducation canine ainsi que les sports canins, demandent rigueur, adaptation, patience, projection à long terme, tout en conservant une bonne dose d'adaptabilité.
              </p>

                <h2>Expériences professionnelles vétérinaires</h2>
                <div class='expe__list'>
                    <expeitem :expe="expeUn">  </expeitem>
                    <expeitem :expe="expeDeux">  </expeitem>
                    <expeitem :expe="expeTrois">  </expeitem>
                    <expeitem :expe="expeQuatre">  </expeitem>
                </div>
            </div>
            <div class='contenu-item'>
              <h2>Elevages et éducation</h2>
              <div class='expe__list expe--elevage'>
                <expeitem :expe='chiens' ></expeitem>
                <expeitem :expe='education' class='randos'></expeitem>
                <expeitem :expe='volailles' class='coureurs'></expeitem>
                <expeitem :expe='brebis'></expeitem>
                <expeitem :expe='chevres' class='chevres'></expeitem>
              </div>
            </div>
            <div class="contenu-item">
                <h2>Formations vétérinaires</h2>
                <ul class='formations'>
                    <li class="form__item"><span>Septembre 2005 - Octobre 2006 : <span class="bold">THESE DE DOCTORAT</span>, ENVL + Faculté de médecine de Lyon :</span><br>
                        T1 pro : projet personnel spécialisé en médecines alternatives,<br>
                        Thèse : Traitement de l'arthrose par les médecines alternatives chez le chien, <br> Mention Très Honorable<br>
                        <!--a href="">Voir la thèse</a-->
                    </li>
                    <li class="form__item"><span>Septembre 2001 - Juin 2005 : <span class="bold">DIPLOME d'ETUDES FONDAMENTALES VETERINAIRES</span>, Ecole Nationale Vétérinaire de Lyon</span><br>
                    </li>
                    <li class="form__item"><span>Septembre 2000 - Juin 2001 : <span class="bold">CLASSE PREPARATOIRE "VETO"</span> </span>, Lycée Thiers, Marseille :<br>
                        Passage du concours d'entrée aux Ecoles Nationales Vétérinaires, obtenu la première année<br>
                    </li>
                    <li class="form__item"><span>Juillet 2000 : <span class="bold">BAC Scientifique, option maths</span></span>, Lycée Daumier, Marseille :<br>
                        Mention Très Bien
                    </li>
                </ul>
            </div>
            <div class='contenu-item'>
              <h2>Certifications et stages</h2>
              <ul class='formations'>
                <li class="form__item"><span>Depuis 2010 : <span class="bold">Membre de l'ASCA </span>(Australian Shepherd Club of America), Club de race international</span><br>
                </li>
                <li class="form__item"><span><span class="bold">Certificat de capacité</span>, pour élevage canin</span>
                </li>
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
            pointsforts: ['Ecoute et empathie', 'Sang-froid', 'Gestion de l\'urgence', 'Travail de nuit', 'Adaptabilité', 'Polyvalence'],
            competences:['Médecine et chirurgie canines','Acupuncture et phytothérapie', 'Analyses', 'Radiographie et Echographie', 'Relation client', 'Relations humaines, psychologie', 'Gardes nuits et week-end' ,"Education canine, toutes races", "Education de chiens d'assistance"]
            , expeUn: {
                    title: "Clinique Vétérinaire de l'Aiguille (Tarbes, 65)",
                    paragraphes:['De juin 2008 à juin 2019 : ', '- Clientèle canine, consultations et chirurgies courantes', '- Acupuncture, Phytothérapie', "- Analyses, Radiographies, Echographies", '- Gardes de nuits et week-end, Urgences'],
                    icones: ["/caduceevet.jpg"]
            }, expeDeux: {
                    title: "Clinique Vétérinaire du Piémont (Nay, 64)",
                    paragraphes:['De 2008 à 2010 : ', '- Sessions de prophylaxie ovine et bovine', '- Vaccination FCO (ovins et bovins)'],
                    icones: ["/caduceevet.jpg"]
            }, expeTrois: {
                    title: "Clinique Vétérinaire du Marcadieu (Tarbes, 65)",
                    paragraphes:['2007 : ', '- Clientèle canine, consultations et chirurgies courantes', "- Analyses, Radiographies", '- Gardes de nuits et week-end, Urgences'],
                    icones: ["/caduceevet.jpg"]
            }, expeQuatre: {
                    title: "Clinique Vétérinaire de St-Hilaire de Riez (85)",
                    paragraphes:["Octobre - Novembre 2006 : ", '- Remplacement en clientèle canine', '- Consultations et chirurgies courantes', "- Analyses, Radiographies", '- Gardes de nuits et week-end, Urgences'],
                    icones: ["/caduceevet.jpg"]
            },

          chiens:{   img:'/chiots.jpg' ,
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
          education:{   img:'/education.jpg' ,
            title: "Education canine",
            paragraphes: ['Depuis 2002 :','- Education de base, méthode positive et bienveillante', '- Toutes races', "- Education de 10 chiens, de 4 races différentes, dont chiens d'assistance et chiens de concours ", "- Eveil, socialisation et pré-éducation de 12 portées de bergers australiens" , '- Grandes connaissances en comportement canin', "- Clicker training", "- Médical training", "- Education spécifique aux sports canins y compris en concours", "- Education spécifique pour chiens d'assistance, déléguée de l'association Handi-Chiens", "- Rédaction d'un livret sur l'éducation canine illustré de vidéos tutorielles"],
          },
        }
    },
  components: {
    'sidebar': Sidebar,
    'expeitem': Expeitem,
    'triangle' : Triangle
    }
}
</script>
