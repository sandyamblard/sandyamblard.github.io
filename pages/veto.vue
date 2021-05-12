<template>
    <main>
<section class='contenu'>
            <div class='entete entete--veto'> <h1>Docteur Vétérinaire</h1></div>
            <p class="subtitle">- LYON 2005, 12 ans de pratique -</p>
            <div class="contenu-item">
                <h2>Expériences professionnelles</h2>
                <div class='expe__list'>
                    <expeitem :expe="expeUn">  </expeitem>
                    <expeitem :expe="expeDeux">  </expeitem>  
                    <expeitem :expe="expeTrois">  </expeitem> 
                    <expeitem :expe="expeQuatre">  </expeitem> 
                </div>
            </div>  
            <div class="contenu-item">
                <h2>Formations</h2>
                <ul class='formations'> 
                    <li class="form__item"><span>Septembre 2005 - Octobre 2006 : <span class="bold">THESE DE DOCTORAT</span>, ENVL + Faculté de médecine de Lyon :</span><br>
                        T1 pro : projet personnel spécialisé en médecines alternatives,<br>
                        Thèse : Traitement de l'arthrose par les médecines alternatives chez le chien, <br> Mention Très Honorable<br>
                        <a href="">Voir la thèse</a>
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
            pointsforts: ['Ecoute et empathie', 'Sang-froid', 'Gestion de l\'urgence', 'Travail de nuit', 'Adaptabilité', 'Polyvalence'], 
            competences:['Médecine et chirurgie canines','Acupuncture et phytothérapie', 'Analyses', 'Radiographie et Echographie', 'Relation client', 'Gardes nuits et week-end']
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
                    paragraphes:['De janvier 2007 à juin 207 : ', '- Clientèle canine, consultations et chirurgies courantes', "- Analyses, Radiographies", '- Gardes de nuits et week-end, Urgences'],
                    icones: ["/caduceevet.jpg"]
            }, expeQuatre: {
                    title: "Clinique Vétérinaire de St-Hilaire de Riez (85)",
                    paragraphes:["Octobre - Novembre 2006 : ", '- Remplacement en clientèle canine', '- Consultations et chirurgies courantes', "- Analyses, Radiographies", '- Gardes de nuits et week-end, Urgences'],
                    icones: ["/caduceevet.jpg"]
            }
        }
    },
  components: {
    'sidebar': Sidebar, 
    'expeitem': Expeitem
    }
}
</script>