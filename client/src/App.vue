<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data(){
    return {
      menuToggle: "close"
    }
  },
  methods: {
    toggleMenu(){
      this.menuToggle = this.menuToggle == "close" ? "open" : "close"
    }
  }
}



</script>

<template>
  <nav id="app-navigation">
    <div class="logo-container">
      >_ theolesage
    </div>
    <div id="navitems-container" @click="toggleMenu" :class="menuToggle">
      <div id="menu-toggle">
        <span>Menu</span>
        <span class="circle"></span>
      </div>
      <div class="menu-wraper">
        <a href="/" class="navitem">Home</a>
        <a href="/about" class="navitem">About</a>
        <a href="/work" class="navitem">Work</a>
        <a href="/contact" class="navitem">Contact</a>
      </div>
    </div>
  </nav>
  <div id="app-content">
    <RouterView />
  </div>
  <footer id="app-footer">
    <p>Théo Lesage. All rights reserved.</p>
  </footer>
</template>

<style scoped>
#app-navigation{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 var(--page-side-padding);
  overflow-x: hidden;
}

#navitems-container{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

#menu-toggle{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border: 2px solid transparent;
  padding: .5rem;
  transition: border-color .2s ease;
  background-color: #fff;
  z-index: 1;
}
#menu-toggle:hover{
  border: 2px solid black;
}

#menu-toggle .circle{
  --size: 25px;
  display: block;
  height: var(--size);
  aspect-ratio: 1;
  border: calc(var(--size) / 5) solid black;
  border-radius: var(--page-side-padding);
  transition: background-color .2s ease;
}
#menu-toggle:hover .circle{
  background-color: black;
}

#navitems-container .menu-wraper{
  display: flex;
  gap: 2rem;
  transform: translateX(120%);
  opacity: 0;
  pointer-events: none;
  user-select: none;

  transition: transform .5s ease, opacity .5s ease;
}

#navitems-container.open .menu-wraper{
  
  transform: translateX(0%);
  opacity: 1;
  pointer-events: all;
  user-select: all;

  transition: transform .5s ease, opacity .2s ease;
}

</style>
