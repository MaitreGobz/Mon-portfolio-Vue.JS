<template>
    <footer>
        <div id="footer">
            <div class="rs-link">
                    <a href="https://github.com/MaitreGobz" target="_blank">
                    <img src="/src/assets/images/github.png" class="rs-link" alt="Lien vers profil GitHub">
                    </a>
            </div>
            <div class="rs-link">
                    <a href=" https://x.com/maitregobz" target="_blank">
                    <img src="/src/assets/Images/twitter.png" class="rs-link" alt="Lien vers profil X">
                    </a>               
            </div>
        </div>
        <div id="small">
            <p><small>Dernière mise à jour le 16/12/2024</small></p>
        </div>
    </footer>   
</template>

<style scoped>

 /* Footer's style */
 #footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 5px;
}

img.rs-link {
    width: 50px;
    height: 50px;
    margin-right: 5px;
}

#small {
  text-align: center;
  font-size: 0.9rem;
  font-weight: 700;
  text-shadow: none;
}

img.rs-link:hover {
  width: 60px;
  height: 60px;
  transition: 0.8s;
  opacity: 0.50;
}
</style>
