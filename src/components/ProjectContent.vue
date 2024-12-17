<template>
    <section class="project" id="projectDiv">
        <h1 class="projectTitle">PROJETS</h1>
        <div class="projectModal">                          
            <div class="project">
                <img src="/src/assets/Images/CV1.png" alt="image cv" class="img-project">
                <h2 class="project">CV HTML/CSS</h2>           
                <button @click="toggleModale1" class="modal-btn">
                    Détails
                </button>
            </div>                                       
            <div class="project">                  
                <img src="/src\assets\Images\CdC1.png" alt="image cdc" class="img-project">
                <h2 class="project">CAHIER DES CHARGES</h2>                  
                <button @click="toggleModale2" class="modal-btn">
                    Détails
                </button>
            </div> 
            <div class="project">                  
                <img src="/src\assets\Images\Commentaire1.png" alt="image cdc" class="img-project">
                <h2 class="project">ESPACE COMMENTAIRE</h2>                  
                <button @click="toggleModale3" class="modal-btn">
                    Détails
                </button>
            </div>           
        </div>      
    </section>
    <ProjectModal1 :revele1="revele1" :toggleModale1="toggleModale1"/>
    <ProjectModal2 :revele2="revele2" :toggleModale2="toggleModale2"/>
    <ProjectModal3 :revele3="revele3" :toggleModale3="toggleModale3"/>
</template>

<script setup>
import { ref } from 'vue';
import ProjectModal1 from './items/ProjectModal1.vue';
import ProjectModal2 from './items/ProjectModal2.vue';
import ProjectModal3 from './items/ProjectModal3.vue';

// Declaring variables for the modal
const revele1 = ref(false);
const revele2 = ref(false);
const revele3 = ref(false);

// Functions to enable/disable the modal window
function toggleModale1() {
    revele1.value = !revele1.value;

};  

function toggleModale2() {
    revele2.value = !revele2.value;
};

function toggleModale3() {
    revele3.value = !revele3.value;
};

// const projects = [
//     {
//         id: 1,
//         title: 'CV HTML/CSS',
//         creationDate: '25 Septembre 2024',
//         technoUsed: ["HTML", "CSS", "GitHub"],
//         projectLink: 'https://github.com/MaitreGobz/Mon-CV-en-ligne',
//         description: `Ce projet a été réalisé dans le cadre de ma formation de
//                         développeur Web, c'est un CV intéractif conçut en HTLM et CCS
//                         par le biais de VSCode.`      
//     },
//     {
//         id: 2,
//         title: 'CAHIER DES CHARGES',
//         creationDate: '14 Octobre 2024',
//         technoUsed: ["Canva"],
//         projectLink: 'src\assets\documents\Cahier des Charges.pdf',
//         description: `Ce projet a été réalisé dans le cadre de ma formation de
//                         développeur Web, c'est un exercice de réalisation de cahier
//                         des charges dans le cadre de la création d'un site e-commerce
//                         pour l'entreprise fictive "La Socketterie".`
//     },
//     {
//         id: 3,
//         title: 'Dynamiser un espace commentaire',
//         creationDate: '4 Novembre 2024',
//         technoUsed: ["JavaScript", "GitHub"],
//         projectLink: 'https://github.com/MaitreGobz/Dynamiser-un-espace-de-commentaires',
//         description: `Ce projet a été réalisé dans le cadre de ma formation de
//                         développeur Web, c'est un exercice de dynamisation d'un espace commentaire
//                         déjà existant grace au language JavaScript par le biais de VSCode.`
//     }
// ]

</script>


<style scoped>

/* Project section style */
div.project { 
    width: 50%;
    border-radius: 20%;
    text-align: center;
    font-size: 1.8rem;
    text-shadow: none;
}

div.projectModal {
    padding-top: 3rem;
    background-image: url(/src/assets/Images/keyboard-5133717_1920.jpg) ;
    background-size: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

#projectDiv {
    padding: 0;
}

.img-project {
    padding: 0;
    max-width: 30rem;
    max-height: 25rem;
    border-radius: 20%;
    box-shadow: 0rem 0rem 1rem 0.3rem var(--blk);
    border: solid 0.3rem var(--blk)
}

h1.projectTitle {
    background-color: var(--wht);
    text-align: center;
    font-size: 4rem;
    padding-top: 5vw;
    padding-bottom: 5vw;
    font-family: "Inter", serif;
    text-shadow: black 1px 1px 1px;
}

h2.project {
    font-weight: 800;
    color: var(--red);
    text-shadow: black 1px 1px 1px;
}

.modal-btn {
    padding: 0.2rem 0.2rem;
    font-size: 1.2rem;
    margin: 1rem auto;
    display: block;
    min-width: 1.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    border-style: groove;
    font-family: "Inter", serif;
}

.modal-btn:hover {
    border-style: ridge;
}
</style>