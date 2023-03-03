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
  <div class="bg">

    <header>

      <AppHeader />

    </header>

    <main>

      <AppMain />

    </main>
  </div>
</template>

<style lang="scss" scoped>
@use './style/generals.scss';
@use './style/partials/reset' as *;


.bg {
  background-image: url(/images/mainbg.jpg);
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
