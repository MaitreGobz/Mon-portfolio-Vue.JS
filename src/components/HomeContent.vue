<template>
    <section class="home" id="home">
        <div class="homeContent" >
          <section id="presentation">
           <h3 >Bonjour, je suis</h3>
           <h1>Lucas NAYET</h1>
           <h3>et je suis <span class="text"></span></h3>
           <p class="presentation">Développeur web en formation au Centre Européen de Formation,
              passionné par les jeux vidéo et les technologies. 
              Doté d’un esprit logique, j’aime relever des défis techniques et 
              apprendre de nouvelles compétences pour concevoir des solutions web 
              odernes et efficaces. Je suis motivé par l’envie de créer des expériences 
              interactives et de contribuer à des projets innovants. 
            </p>
          </section>
        </div>
        <div class="homeImg">
            <picture>
                <img src="/src/assets/Images/Lucas.png" alt="Photo Lucas Nayet">
            </picture>
        </div>
      </section>
</template>

<script setup>

import { onMounted } from 'vue';

// Function for loop input effect
function textTypingEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = ""; // Reset the content to start over
  }

  element.textContent += text[i];

  if (i < text.length - 1) {
    // Continue typing the characters one by one
    setTimeout(() => textTypingEffect(element, text, i + 1), 100);
  } else {
    // Wait before retyping
    setTimeout(() => textTypingEffect(element, text, 0), 1000);
  }
}

// Using `onMounted` to run the animation on mount
onMounted(() => {
  const span = document.querySelector('.text');
  const text = 'Développeur Web / Web mobile';

  if (span) {
    textTypingEffect(span, text);
  } else {
    console.error("Element with class 'text' not found.");
  }
});

</script>


<style scoped>

/* Home content style */
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--wht);
    margin-bottom: 0;
    padding-top: 15rem;
}

.home img {
    float: right;
    width: 100vw;
    max-width: 100%;
    min-width: 150px;
    position: relative;
    z-index: 0;
    border-radius: 60%;
    animation: animImg 4s ease-in-out infinite;
}

span.text {
    font-family: 'Inter', serif;
    color: var(--red);
}

p.presentation {
  display: block;
  max-width: 90%;
    color: var(--wht) ;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: justify;
}

.homeContent h3 {
    font-size: 2.2rem;
    font-weight: 700;
    text-shadow: black 3px 3px 3px;
}

.homeContent h3:nth-of-type(2) {
    margin-bottom: 2rem;  
}

.homeContent h1 {
    font-family: "Inter", serif;
    font-size: 3.8rem;
    font-weight: 700;
    line-height: 1.3;
    text-shadow: black 3px 3px 3px;
}

/* Animation photo home */
@keyframes animImg {
    0% {
        transform: translateY(0%);
    }
    50% {
        transform: translateY(-0.8rem);
    }    
    100% {
        transform: translateY(0%);
    }   
}


</style>