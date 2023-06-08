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
      count: 0,
      isDisabled: true
    }
  },
  methods: {
    //関数はメソッドエリア？で作る
    increment() {
      this.count++
    }
  },
  //computedはdataが変わったら反応して、戻値が動的に計算し直す
  computed: {
    double() {
      return this.count * 2
    },
    superMessage() {
      return `われわれは${this.hoge}だ。${this.double}個分のアンコリーノを差し出せ`
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div v-if="isShow">
      <!-- 属性を指定し、変数を指定することで、値の切り替えに反応できる -->
      <input v-model="hoge" :disabled="isDisabled" />

      {{ hoge }}
    </div>

    {{ superMessage }}

    {{ arr[1] }}

    {{ car.name }}

    <!-- 動的にクラスを紐付ける 
    dataの変数へ:classでアクセスして、hogeを呼び出す
    -->
    <div :class="hoge">うひょおおおおお</div>

    <!-- イベントで変数へ値を代入する
    この場合は、!で変数の反対にしてるので、trueとfalseを入れ替える -->
    <button @click="isDisabled = !isDisabled">とぐる！！</button>

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

.uhyooooooooooo {
  background-color: red;
}
</style>
