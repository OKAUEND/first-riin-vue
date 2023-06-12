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
  <router-link to="/">home</router-link>
  <router-link to="/about">about</router-link>
  <router-link to="/develop">develop</router-link>
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
