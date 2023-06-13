<script>
import TheHeader from '@/pages/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      count: 1,
      isShow: true,
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
      //関数の呼び出しは、単体では動かない。必ず()をつけよう
      this.increment()
    },
    division() {
      this.count = this.count / 2
    },
    add(num) {
      this.count = this.count + num
    },
    sample(hoge) {
      console.log(hoge)
    }
  }
}
</script>

<template>
  <div>Develop</div>
  <div v-if="isShow">
    <h2>アンコリーノ工場</h2>
  </div>
  {{ count }}個のアンコリーノ
  <!-- @はこの後はイベントハンドラという宣言する構文
       その後のclickはクリックイベント-->
  <button @click="division">/2</button>
  <button @click="decrement">-1</button>
  <button @click="add(1)">+1</button>
  <button @click="add(2)">+2</button>
  <button @click="add(3)">+3</button>
  <!-- @click="count +2" は何も代入していないので結果虚無に消えている。ｼｮｯｷﾞｮﾑｯｼﾞｮ -->
  <button @click="count = count + 2">+2</button>
  <button @click="double">*2</button>
  <button @mouseover="double">ふふふ</button>
  <button @click="isShow = false">消えろ！アンコリーノ！</button>
  <button @click="sample($event)">あんこリーノとは</button>
  <the-header></the-header>
</template>
