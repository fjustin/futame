<template>
  <div id="wrapper">
    <div class="profile-img">
      <img :src="image_src" alt="profile image">
    </div>
    <div class="name">
      <h2>#名前</h2>
        <p>二見 大揮</p>
    </div>
    <div class="birthday">
      <h2>#生年月日</h2>
        <p>1997/01/15</p>
    </div>
    <div class="description">
        {{msg}}
    </div>
    <div class="history">
      <h2>#学歴</h2>
        <p>横浜市立葛野小学校</p>
        <p>千葉市立幕張本郷中学校</p>
        <p>横浜創英高等学校</p>
        <p>東京都市大学環境学部環境創生学科</p>
        <p>Edith Cowan University</p>
    </div>
    <div class="history2">
      <h2>#これまで</h2>
        <p>ex GameTrade.inc SEO/Media/Marketing</p>
        <p>SPUR.inc Engineer</p>
        <p>ex CyberAgent.inc Marketing</p>
        <p>Retty.inc Data Analyst</p>
    </div>
    <ul class="skill">
      <h2>#スキル</h2>
        <li><a href="#">SEO</a></li>
        <li><a href="#">コンテンツマーケティング</a></li>
        <li><a href="#">データ分析</a></li>
        <li><a href="#">SQL</a></li>
        <li><a href="#">BigQuery</a></li>
        <li><a href="#">jupyter</a></li>
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">jQuery</a></li>
        <li><a href="#">Vuejs</a></li>
        <li><a href="#">Ruby</a></li>
        <li><a href="#">Ruby on Rails</a></li>
        <li><a href="#">Python</a></li>
    </ul>
    <div id="blogs">
      <h2>#ブログ</h2>
        <p v-for="link in links">
          <a v-bind:href="link.url">{{ link.name }}</a>
        </p>
    </div>
    <div class="academy">
      <h2>#研究</h2>
        <h3>事例研究</h3>
          <p>ドローンによる低コスト農業の提案とそのコスト計算</p><br>
          <a href="https://docs.google.com/document/d/1Nl_DkXMyToXKNQ25NGhuBs7zlY1aTVLkz1uenrEWCV0/edit?usp=sharing">論文リンク</a>
        <h3>卒業研究</h3>
          <p>Coming soon</p><br>
          <a href="">論文リンク</a>
    </div>
    <div class="contact">
      <h2>#コンタクト</h2>
        <a href="https://twitter.com/Justin0370">Twitter</a><br>
        <a href="https://www.facebook.com/daiki.futami">Facebook</a><br>
        <a href="https://github.com/fjustin">GitHub</a><br>
        <p>nimi0370@gmail.com</p>
        <p>daiki-futami@retty.me</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      image_src: require("../assets/mypage.jpg"),
      links: [
          {name: 'はてなブログ', url: 'http://nimi0370376.hatenablog.com/'},
          {name: 'note', url: 'https://note.mu/fjustin'},
          {name: 'Qiita', url: 'https://qiita.com/daiki-futami'}
      ]
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul li {
  display: inline-block;
  margin: 0 .3em .3em 0;
  padding: 0;
}
ul li a {
  display: inline-block;
  max-width: 100px;
  height: 28px;
  line-height: 28px;
  padding: 0 1em;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 3px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #333;
  font-size: 13px;
  text-decoration: none;
  -webkit-transition: .2s;
  transition: .2s;
}
ul li a:hover {
  background-color: #42b983;
  border: 1px solid #42b983;
  color: #fff;
}
h1 {
  font-weight: normal;
}
h2 {
  font-weight: bold;
  color: black;
}
h3 {
  font-weight: bold;
  font-size:15px;
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
img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
</style>
