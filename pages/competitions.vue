<template>
    <main>
        <section class='contenu' aria-label='Expériences et formations'>
            <div class='entete entete--competition'> <h1>Compétitrice</h1></div>
            <a href="#sidebar"><triangle></triangle></a>
            <div class='contenu-item'>
                <h2>Expériences</h2>
                <div class='expe__list'>
                    <expeitem :expe='sportscanins' class='itemsolo'></expeitem>
                    <expeitem :expe='escalade' class='itemescalade'></expeitem>
                    <expeitem :expe='gym' class='itemgym' ></expeitem>
                </div>
            </div>  
            <div class='contenu-item'>
                <h2>Formations et stages</h2>
                <ul class='formations'> 
                    <li class="form__item"><span>Depuis 2008 : <span class="bold">Nombreux stages de sports canins </span>, toutes disciplines (agility, dogdancing, troupeau, caniVTT, cavage)</span>, avec intervenants spécialistes, français et étrangers (USA, Hollande, Belgique...)<br>
                    </li>
                    <!--li class="form__item"><span><span class="bold">Certificat de capacité</span>, pour élevage canin</span>
                    </li-->
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
import Triangle from '../components/Triangle.vue';
//import ImageModale from '../components/Imagemodale';

export default {
     components: {
    'sidebar': Sidebar,
    'expeitem': Expeitem, 
    'triangle' : Triangle, 
    //'imagemodale' : ImageModale,
    },
    data(){
        return{

            pointsforts: ['Ténacité', 'Rigueur', 'Méthodologie, organisation', 'Persévérance', 'Dépassement de soi', "Esprit d'équipe", 'Sens du travail', 'Goût pour le challenge', 'Créativité'], 
            competences:['Gestion des émotions', "Optimisation de l'entrainement", 'Clicker-training', 'Agility', 'Troupeau', 'Dogdancing', 'CaniVTT', 'Cavage', 'Escalade', "Gymnastique", 'Sports-études', 'Endurance']
        ,sportscanins:{   img:'/sportscanins.jpg' ,
                    title: "Sports canins : agility (grade 3), dogdancing (catégorie avancé), caniVTT, cavage", 
                    paragraphes: ['Depuis 2008 :',
                        '- Nombreux concours avec plusieurs chiens (8)', '- Niveau local, régional, national et international'],
                    perfs:['Equipe de France de Dogdancing 2019', 'Participation aux championnats du monde de Dogdancing 2019 en HTM et Freestyle, classée 15ème en HTM', "Championne régionale d'agility", "3 fois Vice-Championne régionale d'agility", "Vainqueur de la coupe régionale d'agility", "Plusieurs sélections pour le Grand Prix de France en agility, Dogdancing et CaniVTT", "Sélections pour le championnat de France d'agility", "Vainqueur du Grand Prix de France de Dogdancing, catégorie HTM novice", "2ème Grand Prix de France de Dogdancing, catégorie HTM intermédiaire", "2ème Grand Prix de France de Dogdancing, catégorie HTM avancé", "2ème Grand Prix de France de Dogdancing, catégorie Freestyle intermédiaire", "4ème au classement annuel du challenge régional du caniVTT, catégorie Senior Femme", "Nombreux podiums en concours locaux"],  
            }, escalade:{   img:'/escalade.jpg' ,
                    title: "Escalade", 
                    paragraphes: ['1998-2001 :',
                        '- Compétitions au niveau départemental, régional et national', '- Catégorie cadette puis junior', "- Membre de l'équipe compétition jeune et de l'équipe loisirs adulte", "- 20h d'entrainement hebdomadaire"],
                    perfs:["Membre de l'équipe départementale jeune pendant 2ans", 'Participation aux championnats de France de difficulté', 'Participation à des opens internationaux', 'Plusieurs podiums sur concours départementaux et régionaux'],  
            }, gym:{   img:'gym.jpg' ,
                    title: "Gymnastique", 
                    paragraphes: ['1989-1997 :',
                        '- Compétitions au niveau départemental, régional et national',"- 20h d'entrainement hebdomadaire",    '- Compétitions en individuel ou par équipe',  ],
                    perfs:['Scolarité en horaires aménagés (sports-études)', "Participation aux championnats régionaux", 'Participation aux championnats de France', 'Plusieurs podiums sur concours départementaux et régionaux'],  
            }
        }
    }
}
</script>