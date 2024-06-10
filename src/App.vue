<script setup>
import InfoPerso from './components/InfoPerso.vue'
import HeaderMenu from "./components/HeaderMenu.vue";
import InfoVideo from "@/components/InfoVideo.vue";
</script>

<template>
  <header>
  <HeaderMenu> </HeaderMenu>
  </header>
  <main>
    <InfoPerso />
    <InfoVideo/>
  </main>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  main {
    display: flex;
    flex-wrap: wrap;
    padding-top: 5rem;
    gap: var(--section-gap);
  }
}
</style>