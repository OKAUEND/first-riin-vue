<script>
import TheHeader from '@/pages/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    double() {
      this.count = this.count * 2
    },
    decrement() {
      this.count--
    },
    division() {
      this.count = this.count / 2
    }
  }
}
</script>

<template>
  <div>Develop</div>

  <h2>アンコリーノ工場</h2>
  {{ count }}個のアンコリーノ
  <button @click="division">/2</button>
  <button @click="decrement">-1</button>
  <button @click="increment">+1</button>
  <button @click="double">*2</button>
  <the-header></the-header>
</template>
