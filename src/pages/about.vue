<script>
import TheWelcome from '@/components/TheWelcome.vue'

export default {
  components: {
    TheWelcome
  }
}
</script>

<template>
  <div>about</div>
  <the-welcome></the-welcome>
  <router-link to="/">Homeへ</router-link>
  <router-link to="/develop">Developへ</router-link>
</template>
