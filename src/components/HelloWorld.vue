<template>
  <div id="app">
    <profile-img></profile-img>
    <name></name>
    <birthday></birthday>
    <school></school>
    <history></history>
    <skill></skill>
    <blog></blog>
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
import Name from './name.vue'
import School from './school.vue'
import History from './history.vue'
import Skill from './skill.vue'
import Blog from './blog.vue'

export default {
  name: 'HelloWorld',
  components: {
    'profile-img': Profile,
    'birthday': Birthday,
    'name': Name,
    'school': School,
    'history': History,
    'skill': Skill,
    'blog': Blog
  },
  props: ['image_src'],
  data () {
    return {
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
</style>
