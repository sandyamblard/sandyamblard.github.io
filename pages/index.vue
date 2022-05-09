<template>
  <main>
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
       <div class='index-links'>
          <NuxtLink to='/webdev' class='bann bann--dev'>
            <div class='bann-caption'>
              <p></p>
                  <p>Développement web</p>
                  <p>Voir en détails</p>
            </div>
          </NuxtLink>

          <NuxtLink to='/veto' class='bann bann--veto'>
            <div class='bann-caption'>
              <p></p>
                  <p>Docteur Vétérinaire</p>
                  <p>Voir en détails</p>
            </div>
          </NuxtLink>
          <NuxtLink to='/elevage' class='bann bann--elevage'>
            <div class='bann-caption'>
              <p></p>
                  <p>Elevage</p>
                  <p>Voir en détails</p>
            </div>
          </NuxtLink>
          <NuxtLink to='/competitions' class='bann bann--compet'>
            <div class='bann-caption'>
              <p></p>
                  <p>Compétitions</p>
                  <p>Voir en détails</p>
            </div>
          </NuxtLink>
          <NuxtLink to='/loisirs' class='bann bann--loisirs'>
            <div class='bann-caption'>
              <p></p>
                  <p>Et plus encore !</p>
                  <p>Voir en détails</p>
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
