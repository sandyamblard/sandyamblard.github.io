<template>
    <section class=sidebar aria-label="profil et compétences" id="sidebar">
        <div class="profil">
            <h2>Profil</h2>
            <p> <strong>Développeur web</strong>, à la recherche d'un poste front-end ou full-stack. <br>
            Assidue, rigoureuse, appliquée, autonome, j'apprends vite et je pourrais rapidement m'intégrer à une équipe.<br>  
            Disponible immédiatement, CDI ou CDD. Télétravail et temps partiel possible.</p>
        </div>
        <slot>
        <h2>Points forts</h2>
        <ul>
            <li><i class="far fa-star"></i>Facilités d'apprentissage</li>
            <li><i class="far fa-star"></i>Organisation et rigueur</li>
            <li><i class="far fa-star"></i>Ténacité</li>
            <li><i class="far fa-star"></i>Assiduité</li>
            <li><i class="far fa-star"></i>Autonomie</li>
            <li><i class="far fa-star"></i>Esprit d'équipe</li>
            <li><i class="far fa-star"></i>Dépassement de soi, challenge</li>
            <li><i class="far fa-star"></i>Ponctualité</li>
            <li><i class="far fa-star"></i>Créativité</li>
        </ul>
        <h2>Compétences</h2>
        <NuxtLink to='/webdev'>
            <ul>
                <li><i class="fas fa-code"></i>VS Code, Git, GitHub</li>
                <li><i class="fas fa-code"></i>HTML, CSS, SASS</li>
                <li><i class="fas fa-code"></i>JAVASCRIPT</li>
                <li><i class="fas fa-code"></i>VueJS, Nuxt, NodeJS</li>
                <li><i class="fas fa-code"></i>MongoDB, Sequelize, MySql</li>
            </ul>
        </NuxtLink>
        <NuxtLink to='/veto'>
            <ul>
                <li><i class="fas fa-stethoscope"></i>Médecine vétérinaire<li>
                <li><i class="fas fa-stethoscope"></i>Chirurgie vétérinaire<li>
                <li><i class="fas fa-stethoscope"></i>Acupuncture, Phytothérapie</li>
                <li><i class="fas fa-stethoscope"></i>Analyses</li>
                <li><i class="fas fa-stethoscope"></i>Radiographie, Echographie</li>
                <li><i class="fas fa-stethoscope"></i>Comportement canin et félin</li>
            </ul>
        </NuxtLink>
        <NuxtLink to='/elevage'>
            <ul>
                <li><i class="fas fa-paw"></i>Zootechnie, élevage</li>
                <li><i class="fas fa-paw"></i>Génétique et sélection</li>
                <li><i class="fas fa-paw"></i>Education canine</li>
            </ul>
        </NuxtLink>
        <NuxtLink to='/competitions'>
            <ul>
                <li><i class="fas fa-trophy"></i>Sports canins</li>
            </ul>
            </NuxtLink>
        <NuxtLink to='/loisirs'>
            <ul>
                <li><i class="fas fa-camera"></i>Photoshop, Gimp</li>
            </ul>
        </NuxtLink>
        <h2>Langues</h2>
        <ul>
            <li><i class="far fa-comment"></i>Anglais courant </li>
            <li><i class="far fa-comment"></i>Espagnol: niveau scolaire</li>
        </ul>
        </slot>
    </section>
</template>