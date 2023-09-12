<script>
import TheHeader from '@/pages/TheHeader.vue'
import Counter from '@/components/Counter.vue'
import SharedCount from '@/components/SharedCounter.vue'

export default {
  components: {
    TheHeader,
    Counter,
    SharedCount
  },
  data() {
    return {
      count: 1,
      isShow: true,
      number: 5,
      arr: [1, 5, 10, 12, 34, 50, 76],
      tmpMessage: 'sample',
      message: '',
      messages: ['test', 'TestHoge'],
      sharedCount: 0
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
  <section>
    <v-card
      title="アンコリーノとは"
      text="アンコリーノは小麦粉で練った記事にアンコをハサミ鉄板で焼き上げたお菓子です。かのアウグストゥス・カエサルも好んで食べたと言われるお菓子の一つです"
    >
      <v-card-actions><v-btn>さぁ、アンコリーノを楽しもう</v-btn></v-card-actions>
    </v-card>
    <v-expansion-panels>
      <v-expansion-panel
        title="アンコリーノの歴史"
        text="アンコリーノは紀元前1万年前に生まれた食べ物です。大判焼きや今川焼きの祖先でありローマ共和国やエジプト古代王朝でも親しまれたお菓子となります。"
      >
      </v-expansion-panel>
    </v-expansion-panels>

    <v-divider :thickness="10" color="success"></v-divider>

    <div v-if="isShow">
      <h2>アンコリーノ工場</h2>
    </div>
    {{ count }}個のアンコリーノ

    <v-list lines="one">
      <v-list-item v-for="(item, index) in arr" :key="index"
        ><v-btn @click="add(item)">{{ item }}個のアンコリーノを増やす</v-btn></v-list-item
      >
    </v-list>

    <Counter />
    <Counter />
    <Counter />

    <SharedCount :count="count" :increment="increment" />
    <SharedCount :count="count" :increment="increment" />
    <SharedCount :count="count" :increment="increment" />
    <!-- @はこの後はイベントハンドラという宣言する構文
       その後のclickはクリックイベント-->
    <!-- <v-btn @click="division">/2</v-btn>
    <v-btn @click="decrement">-1</v-btn>
    <v-btn @click="add(1)">+1</v-btn>
    <v-btn @click="add(2)">+2</v-btn>
    <v-btn @click="add(3)">+3</v-btn> -->
    <!-- @click="count +2" は何も代入していないので結果虚無に消えている。ｼｮｯｷﾞｮﾑｯｼﾞｮ -->
    <!-- <v-btn @click="count = count + 2">+2</v-btn>
    <v-btn @click="double">*2</v-btn>
    <v-btn @mouseover="double">ふふふ</v-btn>
    <v-btn @click="isShow = false">消えろ！アンコリーノ！</v-btn>
    <v-btn @click="sample($event)">あんこリーノとは</v-btn>
    <ul>
      <li v-for="(index, key) in number" :key="key">
        <v-btn @click="add(index)">今川焼きを{{ index }}個増やす</v-btn>
      </li>
    </ul>
    <ul>
      <li v-for="(number, key) in arr" :key="key">
        <v-btn @click="add(number)">大判焼きを{{ number }}個増やす</v-btn>
      </li>
    </ul> -->

    <!-- {{ message }}
    <input v-model="tmpMessage" />
    <v-btn @click="addMessage()">はーーーーー！</v-btn>
    <v-btn @click="delMessage()">きえろ！！</v-btn>
    {{ messages }}

    <ul>
      <li v-for="(index, key) in messages" :key="key">{{ index }}</li>
    </ul>

    <v-btn>ボタン！</v-btn> -->
  </section>
  <the-header></the-header>
</template>
