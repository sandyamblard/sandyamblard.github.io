<template>
    <main>
        <section class='contenu'>
            <div class='entete entete--competition'> <h1>Compétitrice</h1></div>
            <div class='contenu-item'>
                <h2>Expériences</h2>
                <div class='expe__list expe--elevage'>
                    <!--expeitem :expe='chiens'></expeitem>
                    <expeitem :expe='brebis'></expeitem>
                    <expeitem :expe='chevres' class='chevres'></expeitem>
                    <expeitem :expe='volailles' class='coureurs'></expeitem-->
                </div>
            </div>  
            <div class='contenu-item'>
                <h2>Formations et stages</h2>
                <ul class='formations'> 
                    <li class="form__item"><span>Depuis 2010 : <span class="bold">Membre de l'ASCA </span>(Australian Shepherd Club of America), Club de race international</span><br>
                    </li>
                    <li class="form__item"><span><span class="bold">Certificat de capacité</span>, pour élevage canin</span>
                    </li>
                </ul>
            </div> 
        </section>
        <sidebar>
            <h2>Points forts spécifiques</h2>
            <ul>
                <li v-for='(pointfort, index) in pointsforts' :key=index><i class="far fa-star"></i>{{ pointfort }}</li>
        </ul>
            <h2>Compétences spécifiques</h2>
            <ul>
                <li class='comp-item' v-for='(comp, index) in competences' :key=index>
                    <i class="fas fa-star"></i>{{ comp }}
                </li>
            </ul>
            
        </sidebar>
    </main>
</template>