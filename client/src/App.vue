<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav id="navbar">
      <div class="logo wraper">
        <RouterLink to="/"><img src="@/assets/images/logo.png" alt="TL (Logo)" id="website-logo" title="Page d'accueil"></RouterLink> 
      </div>
      <div class="nav-items wraper">
        <ul class="nav-items-container">
          <li class="nav-item"><a href="#">Acceuil</a></li>
          <li class="nav-item"><a href="#a-propos">À propos</a></li>
          <li class="nav-item"><a href="#projets">Mes projets</a></li>
          <li class="nav-item btn-like"><a href="#contacter-moi">Me contacter</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <RouterView />
  <footer>
    <div class="wraper">
      <p>© Théo Lesage -</p>
      <RouterLink to="/conditions-generales-d-utilisation">Conditions générales d'utilisation</RouterLink>
    </div>
  </footer>
</template>

<style scoped>
header{
  position: relative;
}
#navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  inset: 0 0 auto 0;
  background-color: var(--color-background-accent);
  height: 95px;
  padding-inline: 60px;
  box-shadow: 0 2px 50px #13074a18;
}
#website-logo{
  height: 45px;
}
.nav-items-container{
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
}
.nav-item{
  padding: 16px 24px;
  border-bottom: 1px solid transparent;
  font-weight: 300;
  font-size: 19px;
  cursor: pointer;
  user-select:none;
  transition: border-color .5s ease-in-out;
}

.nav-item.btn-like{
  border-radius: 50rem;
  border: 1px solid var(--color-text);
  padding: 5px 40px;
  background-image: radial-gradient(circle, transparent 1%, rgba(53,53,53,1) 1%);
  background-position: center;
  background-size: 10000%;
  transition: 
    background-size .5s ease-in-out,
    background-color .5s ease-in-out .07s,
    color .5s ease-in-out;
}

.nav-item.btn-like:hover{
  background-size: 0%;
  background-color: #353535;
  color: var(--color-background-accent);
}

.nav-item.btn-like a{
  transition: color .5s ease-in-out .05s;
}

.nav-item.btn-like:hover a{
  color: var(--color-background-accent);
}

.nav-item:hover{
  border-bottom: 1px solid var(--color-text);
}
footer{
  display: grid;
  place-items: center;
  min-width: 100%;
  background-color: var(--color-text);
}
footer .wraper{
  height: 120px;
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  gap: 5px;
}

footer p, footer a{
  text-decoration: none;
  font-weight: 300;
  font-size: 18px;
  color: var(--color-background);
}
</style>
