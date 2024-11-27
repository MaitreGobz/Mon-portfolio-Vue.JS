<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <!-- Permanent header navbar -->

  <header>
    <div class="menuNav">
      <nav>
        <menu>
          <li type="none" id="liHome"><router-link to="/" >Acceuil</router-link></li>
          <li type="none" id="liPres"><a href="#presentationDiv">Présentation</a></li>
          <li type="none" id="liProject"><a href="#projectDiv">Mes projets</a></li>
        </menu>
      </nav>     
    </div>
    <div class="logo">
      <router-link to="/" >
        <img alt="Lucas Nayet's logo" id="logoLN" src="/src/assets/Images/Logo 2.png" width="50" height="66" />
      </router-link> 
    </div>
    <div class="contactLink">
      <a href="#contactDiv" class="contactLink">Contact</a>
    </div>
  </header>



  <RouterView />
</template>

<style scoped>

/* NavBar's and menu's style */

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--wht);
  position: sticky;
}

menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-basis: content;
}

#liPres,
#liHome {
  margin-right: 10%;
}

#liProject {
  display: flex;
  flex-basis: content;
}

div.menuNav {
  width: 400px;
}

div.logo {
  margin-right: 350px;
}

#logoLN {
  position: sticky;
}

nav a.router-link-exact-active {
  text-decoration: underline;
}

nav a:hover,
a.contactLink:hover {
  font-size: 1.4rem;
}

</style>
