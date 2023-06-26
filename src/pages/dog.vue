<script>
export default {
  data() {
    return {
      wannwann: {}
    }
  },
  methods: {
    async dog() {
      const res = await fetch('https://dog.ceo/api/breeds/image/random', (res) => res.data())
      this.wannwann = await res.json()
    }
  }
}
</script>

<template>
  <div>home</div>
  <button @click="dog()">DOG!</button>
  {{ wannwann.status }}
  <img :src="wannwann.message" />
</template>
