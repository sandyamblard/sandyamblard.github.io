<template>
    <div class="modal--overlay" @click.stop.prevent='closeModale' @keyup.esc='closeModale'>
        <div class='modal'>
            <button class='close-modale' @click='closeModale'>
                <i class="fas fa-times"></i>
                <p>FERMER</p>
           </button>
            <img :src="image" alt="">
        </div>

    </div>
</template>

<script>

import { emitter } from '../nuxt.config';

export default {
    props:['image'], 
     data(){
      return{ }
    }, 
    methods: {
        closeModale: function(){
            emitter.emit('modaleToClose');
        }
    }
}
</script>