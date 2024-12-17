<!-- Permanent header navbar -->

<template>
  <header>
    <div class="header">
      <div class="menuNav">
        <nav>
          <menu>
            <a href="/#home" class="headerLinks">Accueil</a>
            <a href="/#presentation" class="headerLinks">Présentation</a>
            <a href="/#projectDiv" class="headerLinks">Projets</a>
          </menu>
        </nav>     
      </div>
      <div class="logo">
        <a href="/#home">
          <img alt="Lucas Nayet's logo" id="logoLN" src="/src/assets/Images/Logo 2.png" width="50" height="66" />
        </a> 
      </div>
      <div class="contactLink">
        <nav>
        <a href="/#contact-form" class="headerLinks">Contact</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// Function to manage link activation on scroll
function scrollActive() {
  const sections = document.querySelectorAll('section');
  const linksNav = document.querySelectorAll ('nav a');

  sections.forEach(function (section) {
    let top = window.scrollY;
    let offset = section.offsetTop ;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if(top >= offset && top < offset + height) {
      linksNav.forEach((link) => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(`nav a[href*=${id}]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};

// Adding and removing the scroll event
onMounted(() => {
  window.addEventListener('scroll', scrollActive);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollActive);
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


  
  a.headerLinks:hover {
    font-size: 1.4rem;
    
  }

  a.active {
    font-size: 1.4rem;
    text-decoration: underline;
  }

</style>