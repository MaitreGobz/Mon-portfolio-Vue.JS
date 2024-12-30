<template>

    <section class="skillSection" id="skillSection">
        <h1 class="skills">Compétences</h1>
        <div class="skillSection">
            <div class="logoSkill">
                <img src="/src/assets/Images/Html 5.png" alt="logo HTML5" class="logoSkill">
                <p class="logoSkill orange">HTML5</p>
                <p class="skillLevel orange">Intermédiaire</p>
            </div>
            <div class="logoSkill">
                <img src="/src/assets/Images/CSS3.png" alt="logo CSS3" class="logoSkill">
                <p class="logoSkill blue">CSS3</p>
                <p class="skillLevel blue">Intermédiaire</p>
            </div>
            <div class="logoSkill">
                <img src="/src/assets/Images/JavaScript.png" alt="logo JS" class="logoSkill">
                <p class="logoSkill yellow">JavaScript</p>
                <p class="skillLevel yellow">Débutant</p>
            </div>
            <div class="logoSkill">
                <img src="/src/assets/Images/Vuejs.png" alt="logo VueJS" class="logoSkill">
                <p class="logoSkill green">VueJS</p>
                <p class="skillLevel green">Débutant</p>
            </div>
        </div>
    </section>
    
</template>


<style scoped>

/* Skill section style */
section.skillSection {
    display: block;
    height: min-content;
    padding-top: 0;
}

div.skillSection {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

}

h1.skills {
    display: block;
    text-align: center;
    font-size: 3rem;
    color: var(--wht);
    padding-bottom: 3.5vw;
    font-family: "Inter", serif;
}

div.logoSkill {
    color: var(--wht);
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
}

p.skillLevel {
    color: var(--wht);
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
}

div.logoSkill {
    text-align: center;
}

p.orange {
    color: var(--red2);
    font-weight: 700;
}

p.blue {
    color: var(--ble);
    font-weight: 700;
}

p.yellow {
    color: var(--ylw);
    font-weight: 700;
}

p.green {
    color: var(--grn);
    font-weight: 700;
}
</style>