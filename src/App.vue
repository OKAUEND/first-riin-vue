<script>
import TheHeader from '@/pages/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<template>
  <!--
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />


    <div class="wrapper">
      <HelloWorld msg="Riin Vue道場！" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
-->
  <the-header></the-header>
  foooooooooooooooo cat
  <router-view></router-view>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
}

.uhyooooooooooo {
  background-color: red;
}
</style>
