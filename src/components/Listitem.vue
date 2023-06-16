<template>
  <div>{{ msg }} <button>btn</button></div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'Hi'
    }
  }
}
</script>
