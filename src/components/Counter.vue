<script>
export default {
  data() {
    return {
      value: 0
    }
  }
}
</script>

<template>
  <div>
    <span>{{ value }}</span> <br />
    <v-btn @click="value++">カウンター</v-btn>
  </div>
</template>
