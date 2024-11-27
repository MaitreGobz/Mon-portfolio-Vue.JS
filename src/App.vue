<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <!-- Permanent header navbar -->

  <header>
    <div class="header">
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
    </div>
  </header>
  <footer>
    <div id="footer">
      <div class="rsLink">
        <a href="https://github.com/MaitreGobz" target="_blank">
          <img src="./assets/images/github.png" class="rsLink" alt="Lien vers profil GitHub">
        </a>
      </div>
      <div class="rsLink">
        <a href=" https://x.com/maitregobz" target="_blank">
          <img src="./assets/images/twitter.png" class="rsLink" alt="Lien vers profil X">
        </a>
      </div>
    </div>
    <div id="small">
        <p><small>Dernière mise à jour le 17/09/2024</small></p>
    </div>
  </footer>

  <RouterView />
</template>

<style scoped>

/* NavBar's and menu's style */

.header {
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

nav a.router-link-exact-active {
  text-decoration: underline;
}

nav a:hover,
a.contactLink:hover {
  font-size: 1.4rem;
}
#footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 5px;
}

img.rsLink {
    width: 50px;
    height: 50px;
    margin-right: 5px;
}

#small {
  text-align: center;
  font-size: 0.7rem;
}

img.rsLink:hover {
  width: 60px;
  height: 60px;
  transition: 0.8s;
  opacity: 0.50;
}

</style>
