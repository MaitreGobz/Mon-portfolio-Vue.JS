<template>
  <div class="error">
    <picture class="imageError">
      <img src="/src/assets/Images/Error404(1).png" alt="image erreur">
    </picture>
  </div>
  <div class="error404">
      <h1>404</h1>
      <router-link to="/" class="retrunHome"><a href="#" class="returnHome">Accueil</a></router-link>
  </div>
</template>

<style scoped>

div.error404 {
  text-align: center;
  color: var(--wht);
  font-size:2.2rem;
}

picture {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.imageError img {
  width: 35% ;
  height: 35%;
}

a.returnHome:hover {
  font-size: 2.5rem;
  text-decoration: underline;
}

</style>
