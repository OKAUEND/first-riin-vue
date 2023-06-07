<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

export default {
  components: {
    HelloWorld,
    TheWelcome
  },
  data() {
    return {
      hoge: 'fooooooooooo cat',
      isShow: true,
      arr: [1, 3, 5, 7],
      car: {
        name: 'kuruma',
        speede: 'hayai',
        price: 'takai'
      },
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div v-if="isShow">
      <input v-model="hoge" />
      {{ hoge }}
    </div>

    <div>{{ count }}</div>

    countの2倍!!{{ double }}

    <button @click="increment">+1</button>

    <ul>
      <li v-for="(item, key) in car" :key="key">{{ key }} - {{ item }}</li>
    </ul>

    <ul>
      <li v-for="item in arr" :key="item"><TheWelcome /></li>
    </ul>

    <button @click="isShow = !isShow">toggle</button>

    <div class="wrapper">
      <HelloWorld msg="Riin Vue道場！" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
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
</style>
