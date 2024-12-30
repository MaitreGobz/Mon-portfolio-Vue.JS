<template>

  <header>
    <div class="header">
      <div class="menuNav">
        <nav>
          <menu>
            <a v-bind:class="{active: activeSection === 'home'}" href="/#home" class="headerLinks">Accueil</a>
            <a v-bind:class="{active: activeSection === 'presentation'}" href="/#presentation" class="headerLinks">Présentation</a>
            <a v-bind:class="{active: activeSection === 'projectDiv'}" href="/#projectDiv" class="headerLinks">Projets</a>
          </menu>
        </nav>     
      </div>
      <div class="logo">
        <a href="/#home">
          <img alt="Lucas Nayet's logo" id="logoLN" src="/src/assets/Images/Logo 2.png" width="50" height="66" >
        </a> 
      </div>
      <div class="contactLink">
        <nav>
        <a v-bind:class="{active: activeSection === 'contact-form'}" href="/#contact-form" class="headerLinks">Contact</a>
        </nav>
      </div>
    </div>
  </header>
  
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

// Reference to store the active section ID
const activeSection = ref('home');

// Function to update the active section based on scroll
function updateActiveSection() {
  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      activeSection.value = id;
    }
  });
}

// Add and remove event listener on scroll
onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
});

</script>

<style scoped>

/* NavBar's and menu's style */
header {
  position: fixed;
  z-index: 100;
  width: 100%;
  text-shadow: black 3px 3px 3px;
  background-color: black;
  opacity: 90%;
}

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--wht);
  }
  
  menu {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-basis: content;
  }
  
  div.menuNav {
    width: 400px;
  }
  
  div.logo {
    margin-right: 350px;
  }

  a.headerLinks {
    text-shadow: none;
  }
  
  a.headerLinks:hover {
    font-size: 1.4rem;
    transition: text-decoration 0.3s;    
  }

  a.active {
    font-size: 1.4rem;
    text-decoration: underline;
  }

</style>