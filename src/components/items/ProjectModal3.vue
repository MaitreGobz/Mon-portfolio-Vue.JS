<template>
    <section v-if="revele3" id="project">
        <div  class="bloc-modal">
            <div v-on:click="toggleModale3" class="overlay">
            </div>
            <div class="modal">
                <button v-on:click="toggleModale3" class="close-modal">
                    X
                </button>              
                <div class="img-details">
                        <a href="/src\assets\Images\Commentaire1.png" target="_blank">
                        <img src="/src\assets\Images\Commentaire1.png" class="img-details" alt="CV1">
                        </a>
                        <a href="/src\assets\Images\Commentaire2.png" target="_blank">
                            <img src="/src\assets\Images\Commentaire2.png" class="img-details" alt="CV2">
                        </a>
                        <a href="/src\assets\Images\Commentaire3.png" target="_blank">
                            <img src="/src\assets\Images\Commentaire3.png" class="img-details" alt="CV3">
                        </a>
                </div>
                <div class="projec-details">
                    <h1 class="project">Dynamiser un espace commentaire</h1>
                    <p class="project">
                        <strong>Date de création :</strong>
                        4 Novembre 2024
                    </p>
                    <p class="project">
                        <strong>Technologies utilisées :</strong>
                        JavaScript, GitHub
                    </p>
                    <div class="modal-link">
                        <router-link to="/Error">
                            <a href="https://github.com/MaitreGobz/Dynamiser-un-espace-de-commentaires" target="_blank" class="modalLink">
                                Lien vers le repository GitHub
                            </a>
                        </router-link>
                    </div>
                    <p class="project">
                        <strong>Description :</strong>
                        Ce projet a été réalisé dans le cadre de ma formation de
                        développeur Web, c'est un exercice de dynamisation d'un espace commentaire
                        déjà existant grace au language JavaScript par le biais de VSCode.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { defineProps } from 'vue';

defineProps({
  revele3: Boolean,
  toggleModale3: Function
});

</script>

<style scoped>

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
    justify-items: inline;
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
    background: var(--red2);
    color: var(--wht);
}
</style>