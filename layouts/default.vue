<template>
  
  <div>
    <topbar></topbar>
    <Nuxt />
    <bottom></bottom>
  </div>
</template>


<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';


export default {
  components: {
    'topbar' : Header,
    'bottom': Footer
    }
}
</script>

<style>


</style>
