<template>
  <main class="main--index">
    <section class='contenu contenu-item' aria-label='Présentation et liens'>
      <h1 class="titre--intro">Une développeuse web pas comme les autres !</h1>

      <div class="intro">
        <NuxtLink to='/webdev'>Développeuse web</NuxtLink>, je suis disponible pour la création et/ou optimisation de sites internet pour les petites entreprises ou pour rejoindre une équipe de développeurs afin intégrer des projets de plus grande envergure.
        <br>
        <br>Mes activités passées et connexes m'ont apportés de solides bagages variés. En effet, après avoir exercé en tant que <NuxtLink to='/animaux'>Docteur vétérinaire</NuxtLink>, <!--tout en étant <NuxtLink to='/elevage'>éleveuse</NuxtLink> et <NuxtLink to='/competitions'>compétitrice</NuxtLink>, <NuxtLink to='/loisirs'>(et plus encore !)</NuxtLink-->je me suis orienté vers le métier passionnant et positif de <NuxtLink to='/webdev'>développeur Web</NuxtLink>.
        Une activité qui me ressemble car elle allie plusieurs de mes valeurs :
        <ul>
            <li>à la fois créativité et technique,</li>
            <li>adaptabilité et rigueur, </li>
            <li>esprit d'équipe et autonomie,</li>
            <li>le tout avec une touche de dépassement de soi.</li>
    </ul>
        <br>En effet, en plus de mes travaux auprès des animaux et de la clientèle <NuxtLink to='/animaux'>(vétérinaire et éleveuse)</NuxtLink> et de mes <NuxtLink to='/creative'>activités créatives</NuxtLink>, je suis <NuxtLink to='/competitions'>compétitrice</NuxtLink> depuis le plus jeune âge et donc je suis habituée aux challenges.
        <br>
        <br>N'hésitez pas à parcourir ce site-CV pour en savoir plus sur mon parcours, mes formations, expériences et compétences !
      </div>
      <!--p class='intro'>De <NuxtLink to='/webdev'>développeur Web</NuxtLink> à <NuxtLink to='/veto'>Docteur vétérinaire</NuxtLink>, en passant par <NuxtLink to='/elevage'>éleveur</NuxtLink> et <NuxtLink to='/competitions'>compétitrice</NuxtLink>, venez découvrir mes différentes expériences et champs de compétences au travers de ce site web. </p-->

      <a href="#sidebar"><triangle class='triangle-index'></triangle></a>
       <div class='expe__list'>


         <NuxtLink to='/webdev' class=' expe__item expe__item--index itemsolo'>
           <h2 class="bann-title"><i class="fas fa-code"></i>Développement web</h2>
           <div class="bann bann--dev"> </div>
           <div class='bann-caption'>
             <p>En savoir plus...</p>
           </div>
         </NuxtLink>

         <NuxtLink to='/creative' class=' expe__item expe__item--index'>
           <h2 class="bann-title"><i class="fas fa-camera"></i>Créativité</h2>
           <div class="bann bann--loisirs"> </div>
           <div class='bann-caption'>
             <p>En savoir plus...</p>
           </div>
         </NuxtLink>



         <!--NuxtLink to='/elevage' class=' expe__item expe__item--index'>
           <h2 class="bann-title"><i class="fas fa-paw"></i>Eleveuse</h2>
           <div class="bann bann--elevage"> </div>
           <div class='bann-caption'>
             <p>En savoir plus...</p>
           </div>

         </NuxtLink-->

         <NuxtLink to='/competitions' class=' expe__item expe__item--index'>
           <h2 class="bann-title"><i class="fas fa-trophy"></i>Sports et compétitions</h2>
           <div class="bann bann--compet"> </div>
           <div class='bann-caption'>
             <p>En savoir plus...</p>
           </div>
         </NuxtLink>

         <NuxtLink to='/animaux' class=' expe__item expe__item--index'>
           <h2 class="bann-title"><i class="fas fa-paw"></i>Vétérinaire et élevages</h2>
           <div class="bann bann--veto"> </div>
           <div class='bann-caption'>
             <p>En savoir plus...</p>
           </div>
         </NuxtLink>


      </div>
    </section>
    <sidebar></sidebar>
 </main>

</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Triangle from '../components/Triangle.vue';

export default {
  components: {
    'sidebar': Sidebar, 'triangle' : Triangle
    }
}
</script>

<style>

</style>
