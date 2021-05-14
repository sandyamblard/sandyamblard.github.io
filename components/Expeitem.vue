<template>
    <div class="expe__item">
        <img v-if='expe.img' class="expe--img" :src="expe.img" :alt="expe.title" @click='openModale(expe.img)' @keyup.enter='openModale(expe.img)' tabindex="0">
        <p class="expe--title"> {{ expe.title }}</p>
        <p class="expe--para" v-for='(onepara, index) in expe.paragraphes' :key=index> {{ onepara }}</p>
        <ul v-if="expe.perfs" class="expe--perfs">
            <li v-for='(perf, index) in expe.perfs' :key=index >
                <i class="fas fa-medal"></i>{{ perf }}
            </li>
        </ul>
        <div v-if='expe.icones'>
            <img v-for='(oneicone, index) in expe.icones' :key=index class='dev-icone' :src="oneicone" alt=''>
        </div >
        <a class='expe--link' target='blank' v-if='expe.lien' :href="expe.link">{{ expe.lien }}</a>
        <imagemodale v-if="modaleOpened" :image='imageToOpen'></imagemodale>
    </div>
</template>

<script>
//import ImageModale from '../components/Imagemodale';
import { emitter } from '../nuxt.config';

export default {
   /* components: {
        'imagemodale' : ImageModale,
    },*/

    props: ['expe'],

    data(){
        return{
            modaleOpened: false,
            imageToOpen: '',
        }
    },
    methods: {
        openModale : function(url){
            this.modaleOpened = true;
            this.imageToOpen= url;
        }
    }, 
    mounted() {
        emitter.on('modaleToClose', ()=> {
            this.modaleOpened = false;
            this.imageToOpen= '';
        })

    }
}
</script>