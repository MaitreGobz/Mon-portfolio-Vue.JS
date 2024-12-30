<template>

    <section v-if="revele" id="project">
        <div  class="bloc-modal">
            <div v-on:click="toggleModale" class="overlay">
            </div>
            <div class="modal">
                <button v-on:click="toggleModale" class="close-modal">
                    X
                </button>              
                <div class="img-details">
                    <a v-for="(image,index) in project.images" :key="index" :href="image" target="_blank">
                        <img :src="image" :alt="`Image ${index + 1} de ${project.title}`" class="img-details" >
                    </a>              
                </div>
                <div class="projec-details">
                    <h1 class="project">{{ project.title }}</h1>
                    <p class="project">
                        <strong>Date de création :</strong>
                        {{project.creationDate}}
                    </p>
                    <p class="project">
                        <strong>Technologies utilisées :</strong>
                        {{ project.technoUsed}}
                    </p>
                    <div class="modal-link">
                        <a :href="project.projectLink" target="_blank" class="modalLink">
                            Lien GitHub / Télécharger
                        </a>
                    </div>
                    <p class="project">
                        <strong>Description :</strong>
                        {{project.description}}
                    </p>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>

// import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
    project: {
        type: Object,
        
    },
    revele: {
        type: Boolean,
        required: true,
    },
    toggleModale: {
        type: Function,
        required: true,
    }
});

</script>

<style scoped>

/* Modal window style */
section#project {
    background-color: var(--gry4);
}

div.project { 
    border-radius: 20%;
    text-align: center;
    font-size: 1.8rem;
    text-shadow: none;
}

div.img-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 70rem;
}

div.project-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

div.modal-link a {
    color: var(--blk);
    text-shadow: none;
    font-size: 1.2rem;
    text-decoration: underline;
    font-weight: 600;
}

.img-details {
    max-width: 8rem;
    max-height: 8rem;
    border-radius: 20%;
}

img.img-details {
    width: 10rem;
    height: 10rem;
    margin: 0.1rem;
}

h1.project {
    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    text-shadow: none;
    margin-bottom: 1rem;
}

p.project {
    text-shadow: none;
    font-size: 1.2rem;
    line-height: 1.4;
    text-align: justify;
}

.bloc-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.modal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 95%;
    max-width: 50rem;
    min-width: 30rem;
    padding: 3rem;
    background-color: var(--gry);
    border-radius: 0.5rem;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0rem 0rem 1rem 0.3rem var(--blk) ;
}

.close-modal {
    padding: 0.3rem 0.8rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.8rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    background: var(--red);
    color: var(--wht);
}

.close-modal:hover {
  background: var(--red2);
}
</style>