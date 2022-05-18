<template>
    <header class='topbar'>
        <NuxtLink to='/' class="logo">
            <img src="../assets/img/photoCV.JPG" alt="Photo Sandy AMBLARD"  @click='closeMenu'>
            <p @click='closeMenu'> Sandy <br> AMBLARD </p>
        </NuxtLink>
        <div v-if="!menuOpen" class="mobonly" @click="openMenu" @keyup.enter="openMenu" role="button" tabindex=0 >
            MENU<br><i class="fas fa-bars"></i>
        </div>
        <button v-if="menuOpen" @click="closeMenu" class="closemenumob"><i class="fas fa-times"></i><br>FERMER</button>
        <nav class="nav" @click='closeMenu' role='menu'>
            <NuxtLink to='/webdev' role='menuitem'><i class="fas fa-code"></i><p>Développeuse,</p></NuxtLink>
            <NuxtLink to='/creative'  role='menuitem'><i class="fas fa-camera"></i><p>Créative,</p></NuxtLink>
            <!--NuxtLink to='/veto'  role='menuitem'><i class="fas fa-stethoscope"></i><p>Vétérinaire</p></NuxtLink-->
            <!--NuxtLink to='/elevage'  role='menuitem'><i class="fas fa-paw"></i><p>Eleveuse</p></NuxtLink-->
            <NuxtLink to='/competitions' role='menuitem'><i class="fas fa-trophy"></i><p>Compétitrice,</p></NuxtLink>
            <NuxtLink to='/animaux' role='menuitem'><i class="fas fa-paw"></i><p>Et plus !</p></NuxtLink>
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
          document.querySelector('.topbar').style.display = 'block';
          document.querySelector('.topbar').style.paddingBottom = '0.5em';

        document.querySelector('.topbar').style.height = 'auto';
        document.querySelector('.topbar img').style.marginTop = '0';
         document.querySelector('.nav').style.display = 'block';
      },
      closeMenu : function(){
            if(this.menuOpen){
                this.menuOpen = false;
                document.querySelector('.topbar').style.display = 'flex';
                document.querySelector('.topbar').style.height = 'auto';
                document.querySelector('.nav').style.display = 'none';
                document.querySelector('.topbar img').style.marginTop = '1em';
                document.querySelector('.topbar').style.paddingBottom = '0em';
            }
      }
  }
}
</script>
