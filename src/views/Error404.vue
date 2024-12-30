<template>

  <section id="error">
    <div class="error">
      <picture class="imageError">
        <img src="/src/assets/Images/Error404.png" alt="image erreur" class="imageError">
      </picture>
    </div>
    <div class="error404">
        <h1>404</h1>
        <router-link to="/" class="retrunHome"><p class="returnHome">Accueil</p></router-link>
    </div>
  </section>

</template>

<style scoped>

/* Error page style */
section#error {
  background-image: url(/src/assets/Images/blue-wavy-background.jpg);
  background-size:auto;
  width: auto;
  height: 100vh;
  padding: 5rem;
}

div.error404 {
  text-align: center;
  color: var(--wht);
  font-size:2.2rem;
  font-family: "Inter", serif;
  text-shadow: black 3px 3px 3px;
}

picture {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.imageError img {
  width: auto;
  max-width: 50vw;
  height: auto;
  max-height: 70vh;
}

p.returnHome:hover {
  font-size: 2.5rem;
  text-decoration: underline;
  transition: 0.4s;
}

</style>
