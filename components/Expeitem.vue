<template>
    <div class="expe__item">
        <img v-if='expe.img' class="expe--img" :src="expe.img" :alt="expe.title">
        <p class="expe--title"> {{ expe.title }}</p>
        <p class="expe--para" v-for='(onepara, index) in expe.paragraphes' :key=index> {{ onepara }}</p>
        
        <div v-if='expe.icones'>
            <img v-for='(oneicone, index) in expe.icones' :key=index class='dev-icone' :src="oneicone" alt=''>
        </div>
        <a v-if='expe.lien' :href="expe.link">{{ expe.lien }}</a>
    </div>
</template>

<script>
export default {
    props: ['expe'],
}
</script>