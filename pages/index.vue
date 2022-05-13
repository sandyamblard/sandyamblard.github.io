<template>
  <main class="main--index">
    <section class='contenu contenu-item' aria-label='Présentation et liens'>
      <h1 class="titre--intro">Une développeuse web pas comme les autres !</h1>

      <div class="intro">
        Après avoir exercé en tant que <NuxtLink to='/veto'>Docteur vétérinaire</NuxtLink>, tout en étant <NuxtLink to='/elevage'>éleveuse</NuxtLink> et <NuxtLink to='/competitions'>compétitrice</NuxtLink>, <NuxtLink to='/loisirs'>(et plus encore !)</NuxtLink>, je m'oriente vers le métier passionnant et positif de <NuxtLink to='/webdev'>développeur Web</NuxtLink>.
        <br>Une activité qui me ressemble car elle allie plusieurs de mes valeurs :
        <ul>
            <li>à la fois créativité et technique,</li>
            <li>adaptabilité et rigueur, </li>
            <li>esprit d'équipe et autonomie,</li>
            <li>le tout avec une touche de dépassement de soi.</li>
    </ul>
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

         <NuxtLink to='/veto' class=' expe__item expe__item--index'>
           <h2 class="bann-title"><i class="fas fa-stethoscope"></i>Vétérinaire</h2>
           <div class="bann bann--veto"> </div>
           <div class='bann-caption'>
             <p>En savoir plus...</p>
           </div>
         </NuxtLink>

         <NuxtLink to='/elevage' class=' expe__item expe__item--index'>
           <h2 class="bann-title"><i class="fas fa-paw"></i>Eleveuse</h2>
           <div class="bann bann--elevage"> </div>
           <div class='bann-caption'>
             <p>En savoir plus...</p>
           </div>

         </NuxtLink>

         <NuxtLink to='/competitions' class=' expe__item expe__item--index'>
           <h2 class="bann-title"><i class="fas fa-trophy"></i>Compétitions</h2>
           <div class="bann bann--compet"> </div>
           <div class='bann-caption'>
             <p>En savoir plus...</p>
           </div>
         </NuxtLink>

         <NuxtLink to='/loisirs' class=' expe__item expe__item--index'>
           <h2 class="bann-title"><i class="fas fa-camera"></i>Et plus encore !</h2>
           <div class="bann bann--loisirs"> </div>
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
