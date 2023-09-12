<script>
export default {
  props: {
    increment: {
      type: Function
    },
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<template>
  <div>
    <span>親の値にゃ！{{ count }}</span>
    <v-btn @click="increment">増やすにゃ</v-btn>
  </div>
</template>
