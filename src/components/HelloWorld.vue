<template>
  <div id="app">
    <profile-img></profile-img>
    <div class="name">
      <h2>#名前</h2>
        <p>{{ myname }}</p>
    </div>
    <birthday></birthday>
    <div class="history">
      <h2>#学歴</h2>
        <p v-for="school in schools">{{ school.name }}</p>
    </div>
    <div class="history2">
      <h2>#これまで</h2>
        <p v-for="job in jobs">{{ job.name }}</p>
    </div>
    <ul class="skill">
      <h2>#スキル</h2>
        <li v-for="skill in skills">
          <button v-on:click="counter += 1">{{skill.name}} {{counter}}</button>
        </li>
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
    </div>
  </div>
</template>

<script>
import Profile from '../components/profile.vue'
import Birthday from './birthday.vue'

export default {
  name: 'HelloWorld',
  components: {
    'profile-img': Profile,
    'birthday': Birthday
  },
  props: ['image_src'],
  data () {
    return {
      schools: [
        {name: '横浜市立葛野小学校'},
        {name: '千葉市立幕張本郷中学校'},
        {name: '横浜創英高等学校'},
        {name: '東京都市大学環境学部環境創生学科'},
        {name: 'Edith Cowan University'}
      ],
      jobs: [
        {name: 'ex GameTrade.inc SEO/Media/Marketing'},
        {name: 'SPUR.inc Engineer'},
        {name: 'ex CyberAgent.inc Marketing'},
        {name: 'Retty.inc Data Analyst'}
      ],
      links: [
        {name: 'はてなブログ', url: 'http://nimi0370376.hatenablog.com/'},
        {name: 'note', url: 'https://note.mu/fjustin'},
        {name: 'Qiita', url: 'https://qiita.com/daiki-futami'}
      ],
      skills: [
        {name: 'SEO'},
        {name: 'コンテンツマーケティング'},
        {name: 'データ分析'},
        {name: 'SQL'},
        {name: 'BigQuery'},
        {name: 'jupyter notebook'},
        {name: 'HTML5'},
        {name: 'CSS3'},
        {name: 'jQuery'},
        {name: 'Vuejs'},
        {name: 'Ruby'},
        {name: 'Ruby on Rails'},
        {name: 'Python'}
      ],
      counter: 0,
      myname: '二見 大揮',
      lists: [
        { image_src: require('../assets/mypage.jpg') },
        { image_src: require('../assets/mypage2.png') },
        { image_src: require('../assets/mypage3.png') }
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
ul li button {
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
ul li button:hover {
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
</style>
