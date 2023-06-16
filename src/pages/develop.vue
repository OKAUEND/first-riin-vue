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
      number: 5,
      arr: [1, 5, 10, 12, 34, 50, 76],
      tmpMessage: 'sample',
      message: '',
      messages: ['test', 'TestHoge']
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
    },
    addMessage() {
      if (this.tmpMessage.length < 2) return
      this.messages.push(this.tmpMessage)
      this.tmpMessage = ''
    },
    delMessage() {
      this.messages.pop()
    }
  },
  //mountedで、コンポーネントが最初に表示した時だけ処理をしてくれるよ
  mounted() {
    console.log('ねこはいいぞ')
    this.message = 'ねこはいます。よろしくおねがいします'
    this.tmpMessage = 'ねこはどこにでもいます'
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
  <ul>
    <li v-for="(index, key) in number" :key="key">
      <button @click="add(index)">今川焼きを{{ index }}個増やす</button>
    </li>
  </ul>
  <ul>
    <li v-for="(number, key) in arr" :key="key">
      <button @click="add(number)">大判焼きを{{ number }}個増やす</button>
    </li>
  </ul>

  {{ message }}
  <input v-model="tmpMessage" />
  <button @click="addMessage()">はーーーーー！</button>
  <button @click="delMessage()">きえろ！！</button>
  {{ messages }}

  <ul>
    <li v-for="(index, key) in messages" :key="key">{{ index }}</li>
  </ul>
  <the-header></the-header>
</template>
