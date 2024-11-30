<!-- Permanent header navbar -->

<template>
  <header>
    <div class="header">
      <div class="menuNav">
        <nav>
          <menu>
            <li type="none" id="liHome"><router-link to="/" >Accueil</router-link></li>
            <li type="none" id="liPres"><router-link to="/Error">Présentation</router-link></li>
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
</template>

