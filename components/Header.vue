<template>
    <header class='topbar'>
        <NuxtLink to='/' class="logo">
            <img src="../assets/img/photoCV.JPG" alt="Photo Sandy AMBLARD">
            <p>Sandy <br> AMBLARD</p>   
        </NuxtLink>
        <div v-if="!menuOpen" class="mobonly" @click="openMenu" @keyup.enter="openMenu" role="button" tabindex=0>
            MENU<br><i class="fas fa-bars"></i>
        </div>
        <button v-if="menuOpen" @click="closeMenu" class="closemenumob"><i class="fas fa-times"></i><br>FERMER</button>
        <nav class="nav">
            <NuxtLink to='/webdev'><i class="fas fa-code"></i><p>Développeuse</p></NuxtLink>
            <NuxtLink to='/veto'><i class="fas fa-stethoscope"></i><p>Vétérinaire</p></NuxtLink>
            <NuxtLink to='/elevage'><i class="fas fa-paw"></i><p>Eleveuse</p></NuxtLink>
            <NuxtLink to='/competitions'><i class="fas fa-trophy"></i><p>Compétitrice</p></NuxtLink>
            <NuxtLink to='/loisirs'><i class="fas fa-camera"></i><p>Et plus !</p></NuxtLink>
        </nav>    
    </header>        
</template>

<script>
export default {
  data(){
      return{
          menuOpen: false,

      }
  }, 
  methods:{
      openMenu : function(){
          this.menuOpen = true;
      //mettre ds animation keyframes pour transition
        document.querySelector('.nav').classList.add('menuappear'); //
        document.querySelector('.topbar').style.height = 'auto';
    //document.querySelector('.topbar').classList.add('expandtopbar'); //
    //setTimeout( ()=>document.querySelector('.topbar').style.height = 'auto', 300)
        document.querySelector('.topbar').style.display = 'block';
        document.querySelector('.topbar img').style.marginTop = '0';
         document.querySelector('.nav').style.display = 'block';
      }, 
      closeMenu : function(){
        this.menuOpen = false;
       
        document.querySelector('.topbar').style.height = '35vw';
        document.querySelector('.topbar').style.display = 'flex';
        document.querySelector('.nav').style.display = 'none';
        document.querySelector('.topbar img').style.marginTop = '1em';
    document.querySelector('.nav').classList.remove('menuappear'); //
    //document.querySelector('.topbar').classList.remove('expandtopbar'); // Voir pour ajouter div .nav .menumob avec v-if et transition.....
      }
  }
}
</script>