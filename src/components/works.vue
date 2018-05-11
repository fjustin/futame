<template>
  <div id="works">
    <a v-on:click="toggle"><h2># Click for Works▼</h2></a>
    <div class="momiji" v-show="showText">
      <img :src="momiji">
      <p>{{ text }}</p>
    </div>

    <div class="kek" v-show="showText">
      <img :src="kek">
      <p>{{ des }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'MOMIJIは、和菓子専門のメディアです。Ruby on Rails、Bootstrapを利用しています。',
      des: 'Python3とOpenCV3を用いたドローン画像の解析を行いました。',
      momiji: require('../assets/momiji.png'),
      kek: require('../assets/research.png'),
      showText: false
    }
  },
  methods: {
    toggle: function () {
      this.showText = !this.showText
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-weight: normal;
}
h2 {
  font-weight: bold;
  color: black;
  cursor: pointer;
  text-decoration: underline;
}
h3 {
  font-weight: bold;
  font-size:15px;
}
img{
  width:auto;
  height:200px;
}
.kek{
  margin-top: 30px;
}
</style>
