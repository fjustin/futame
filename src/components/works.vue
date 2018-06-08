<template>
  <div id="works">
    <a v-on:click="toggle"><h2>Click for portfolios▼</h2></a>
    <div class="momiji" v-show="showText">
      <a :href="momia"><img :src="momiji"></a>
      <div class="link">画像クリックでサイトへ</div>
      <p>{{ text }}</p>
    </div>

    <div class="kek" v-show="showText">
      <img :src="kek">
      <p>{{ des }}</p>
    </div>

    <div class="drone-site" v-show="showText">
      <a :href="sitedrone"><img :src="shinz" style="width: auto;height: 400px;"></a>
      <p>{{ sitedes }}</p>
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
      momia: 'http://momiji.work',
      shinz: require('../assets/site.png'),
      sitedes: '大学の研究室用にドローンの飛ばし方ガイドサイトを作成しました。vue.jsを使ったモダンなサイトになっています。',
      sitedrone: 'https://fjustin.github.io/drone-repo/#/',
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
.link{
  font-size: 8px;
  color: #666666;
}
h1 {
  font-weight: normal;
}
h2 {
  font-weight: bold;
  color: black;
  cursor: pointer;
  text-decoration: underline;
  font-size: 28px;
}
h3 {
  font-weight: bold;
  font-size:15px;
}
img{
  width: auto;
  height:200px;
}

.kek{
  margin-top: 30px;
}

@media screen and ( max-width:479px ){
  img{
    width:100%;
    height:200px;
  }
}
</style>
