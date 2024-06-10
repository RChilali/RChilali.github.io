<script>
export default {
  name: "header",
  methods: {
    changeLang(newLocale) {
      this.$i18n.locale = newLocale;
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />

    <div id="langue">
      <button @click="changeLang('fr_FR')">FR</button>
      <button @click="changeLang('en_US')">EN</button>
      <button @click="changeLang('bg_BG')">BG</button>
    </div>

  </header>
</template>

<style scoped>

</style>