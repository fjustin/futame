<template>
  <div id="wrapper">
    {{msg}}
    <div class="profile-img">
      <img :src="image_src">
    </div>
    <div class="name">
      #名前
      <p>二見 大揮</p>
    </div>
    <div class="birthday">
      #生年月日
      <p>1997/01/15</p>
    </div>
    <div class="history">
      #学歴
      <p>横浜市立葛野小学校</p>
      <p>千葉市立幕張本郷中学校</p>
      <p>横浜創英高等学校</p>
      <p>東京都市大学環境学部環境創生学科</p>
      <p>Edith Cowan University</p>
    </div>
    <div class="history2">
      #これまで
      <p>ex GameTrade.inc SEO/Media/Marketing</p>
      <p>SPUR.inc Engineer</p>
      <p>ex CyberAgent.inc Marketing</p>
      <p>Retty.inc Data Analyst</p>
    </div>
    <div class="skill">
      #スキル
      <p>SEO</p>
      <p>コンテンツマーケティング</p>
      <p>データ分析</p>
      <p>SQL</p>
      <p>BigQuery</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>jQuery</p>
      <p>Ruby</p>
      <p>Ruby on Rails</p>
      <p>Python</p>
      <p>OpenCV</p>
    </div>
    <div class="academy">
      #研究
      <p>ドローンによる低コスト農業の提案とそのコスト計算</p>
      <a href="">論文リンク</a>
      #卒業研究
      <p>Coming soon</p>
      <a href="">論文リンク</a>
    </div>
    <div class="contact">
      #コンタクト
      <a href="">Twitter</a>
      <a href="">Facebook</a>
      <a href="">GitHub</a>
      <p>nimi0370@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      image_src: require("../assets/mypage.jpg")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
