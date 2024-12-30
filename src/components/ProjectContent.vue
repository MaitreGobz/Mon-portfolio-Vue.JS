<template>

    <section class="project" id="projectDiv">
        <h1 class="projectTitle">PROJETS</h1>
        <div class="projectModal">         
            <div v-for="project in projects" :key="project.id" class="project">
                <div class="shadow">
                    <img :src= "project.mainImage" :alt="`Image du projet ${project.title}`" class="img-project" >
                    <h2 class="project-title">{{ project.title }}</h2>
                    <button @click="openModal(project)" class="modal-btn">
                         Détails
                    </button>
                </div>
            </div>       
        </div>
        <ProjectModal :revele="revele" :project="selectedProject" :toggleModale="toggleModale"/>
    </section>

</template>

<script setup>

import { ref } from 'vue';
import ProjectModal from './items/ProjectModal.vue';

// Modal's state
const revele = ref(false);

// Selected project
const selectedProject = ref(null);

// Functions to enable/disable the modal window
function toggleModale() {
    revele.value = !revele.value;
};

// Function to open the modal with a project
function openModal(project) {
    selectedProject.value = project;
    toggleModale();
}

// Porject's data
const projects = ref ([
    {
        id: 1,
        title: 'CV intéractif en HTML/CSS',
        creationDate: '25 Septembre 2024',
        technoUsed: "HTML, CSS, GitHub",
        projectLink: 'https://github.com/MaitreGobz/Mon-CV-en-ligne',
        description: `Ce projet a été réalisé dans le cadre de ma formation de
                        développeur Web, c'est un CV intéractif conçut en HTLM et CCS
                        par le biais de VSCode.`,
        mainImage: "/src/assets/Images/CV1.png",
        images: [
            "/src/assets/Images/CV1.png",
            "/src/assets/Images/CV2.png",
            "/src/assets/Images/CV3.png",
            "/src/assets/Images/CV4.png",
        ]   
    },
    {
        id: 2,
        title: 'Cahier des charges',
        creationDate: '14 Octobre 2024',
        technoUsed: "Canva",
        projectLink: '/src/assets/documents/Cahier des Charges.pdf',
        description: `Ce projet a été réalisé dans le cadre de ma formation de
                        développeur Web, c'est un exercice de réalisation de cahier
                        des charges dans le cadre de la création d'un site e-commerce
                        pour l'entreprise fictive "La Socketterie".`,
        mainImage: "/src/assets/Images/CdC1.png",
        images: [
        "/src/assets/Images/CdC1.png",
        "/src/assets/Images/CdC2.png",
        "/src/assets/Images/CdC3.png",
        "/src/assets/Images/CdC4.png",
        ]
    },
    {
        id: 3,
        title: 'Dynamiser un espace commentaire',
        creationDate: '4 Novembre 2024',
        technoUsed: "JavaScript, GitHub",
        projectLink: 'https://github.com/MaitreGobz/Dynamiser-un-espace-de-commentaires',
        description: `Ce projet a été réalisé dans le cadre de ma formation de
                        développeur Web, c'est un exercice de dynamisation d'un espace commentaire
                        déjà existant grace au language JavaScript par le biais de VSCode.`,
        mainImage: "/src/assets/Images/Commentaire1.png",
        images: [
        "/src/assets/Images/Commentaire1.png",
        "/src/assets/Images/Commentaire2.png",
        "/src/assets/Images/Commentaire3.png",
        ]
    }
]);

</script>


<style scoped>

/* Project section style */
div.project { 
    width: 50%;
    margin-top: 4rem;
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
    border: solid 0.3rem var(--blk);
    transition: box-shadow 0.3s ease-in-out;
}

.shadow:hover .img-project {
    box-shadow: 1rem 1rem 1rem var(--blk);
    transition: box-shadow 0.3s ease-in-out; 
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

h2.project-title {
    font-family: 'Inter', serif;
    font-weight: 700;
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