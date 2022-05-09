<template>
    <section class=sidebar aria-label="profil et compétences" id="sidebar">
        <div class="profil">
            <h2>Profil</h2>
            <p> <strong>Développeur web</strong>, je suis à la recherche d'un poste front-end ou full-stack. <br>
            Assidue, rigoureuse, appliquée, autonome, <span class="strong">j'apprends vite</span> et je pourrais rapidement m'intégrer à une équipe.<br>
              Mes expériences de vétérinaire et d'éleveuse m'ont donné l'habitude de <span class="strong">travailler en partenariat avec des clients</span>, d'écouter et décrypter leurs habitudes et besoins et de m'y adapter en leur proposant des solutions sur-mesure.<br>
              <span class="strong">Créative et polyvalente</span>, je suis habituée aux challenges et à trouver des <span class="strong">solutions inovantes</span> à diverses problématiques .<br>
            <br>Disponible immédiatement, CDI ou CDD, ou missions freelance.<br>
            Télétravail et temps partiel possible.</p>
        </div>
        <slot>
        <h2>Points forts</h2>
        <ul>
            <li class='appeardelayed'><i class="far fa-star"></i>Facilités d'apprentissage</li>
            <li class='appeardelayed'><i class="far fa-star"></i>Organisation et rigueur</li>
            <li class='appeardelayed'><i class="far fa-star"></i>Ténacité</li>
            <li class='appeardelayed'><i class="far fa-star"></i>Assiduité</li>
            <li class='appeardelayed'><i class="far fa-star"></i>Autonomie</li>
            <li class='appeardelayed'><i class="far fa-star"></i>Esprit d'équipe</li>
            <li class='appeardelayed'><i class="far fa-star"></i>Dépassement de soi, challenge</li>
            <li class='appeardelayed'><i class="far fa-star"></i>Ponctualité</li>
            <li class='appeardelayed'><i class="far fa-star"></i>Créativité</li>
        </ul>
        <h2>Compétences</h2>
        <NuxtLink to='/webdev'>
            <ul>
                <li class='appeardelayed'><i class="fas fa-code"></i>VS Code, PHP Storm</li>
              <li class='appeardelayed'><i class="fas fa-code"></i>Git, GitHub, GitLab</li>
              <li class='appeardelayed'><i class="fas fa-code"></i>HTML, CSS, SASS</li>
                <li class='appeardelayed'><i class="fas fa-code"></i>JAVASCRIPT</li>
                <li class='appeardelayed'><i class="fas fa-code"></i>VueJS, Nuxt, NodeJS</li>
              <li class='appeardelayed'><i class="fas fa-code"></i>PHP, Twig</li>
              <li class='appeardelayed'><i class="fas fa-code"></i>MongoDB, Sequelize, MySql</li>
              <li class='appeardelayed'><i class="fas fa-code"></i>Drupal, Wordpress</li>
            </ul>
        </NuxtLink>
        <NuxtLink to='/veto'>
            <ul>
                <li class='appeardelayed'><i class="fas fa-stethoscope"></i>Médecine vétérinaire<li>
                <li class='appeardelayed'><i class="fas fa-stethoscope"></i>Chirurgie vétérinaire<li>
                <li class='appeardelayed'><i class="fas fa-stethoscope"></i>Acupuncture, Phytothérapie</li>
                <li class='appeardelayed'><i class="fas fa-stethoscope"></i>Analyses</li>
                <li class='appeardelayed'><i class="fas fa-stethoscope"></i>Radiographie, Echographie</li>
                <li class='appeardelayed'><i class="fas fa-stethoscope"></i>Comportement canin et félin</li>
            </ul>
        </NuxtLink>
        <NuxtLink to='/elevage'>
            <ul>
                <li class='appeardelayed'><i class="fas fa-paw"></i>Zootechnie, élevage</li>
                <li class='appeardelayed'><i class="fas fa-paw"></i>Génétique et sélection</li>
                <li class='appeardelayed'><i class="fas fa-paw"></i>Education canine</li>
            </ul>
        </NuxtLink>
        <NuxtLink to='/competitions'>
            <ul>
                <li class='appeardelayed'><i class="fas fa-trophy"></i>Sports canins</li>
            </ul>
            </NuxtLink>
        <NuxtLink to='/loisirs'>
            <ul>
                <li class='appeardelayed'><i class="fas fa-camera"></i>Photoshop, Gimp</li>
            </ul>
        </NuxtLink>
        <h2>Langues</h2>
        <ul>
            <li class='appeardelayed'><i class="far fa-comment"></i>Anglais courant </li>
            <li class='appeardelayed'><i class="far fa-comment"></i>Espagnol: niveau scolaire</li>
        </ul>
        </slot>
    </section>
</template>
