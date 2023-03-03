<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain
  }
};

</script>

<template>
  <header>

    <AppHeader />

  </header>

  <main>

    <AppMain />

  </main>
</template>

<style lang="scss" scoped>
@use './style/generals.scss';
</style>
