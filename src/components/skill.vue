<template>
  <ul class="skill">
    <h2>Skills</h2>
      <li v-for="skill in skills" v-bind:key="skill">
        <button class="button-primary-outlined">{{skill.name}}</button>
      </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      skills: [
        {name: 'データ分析'},
        {name: 'プロダクトグロース'},
        {name: '効果検証設計'},
        {name: 'UXリサーチ'},
        {name: 'SQL'},
        {name: 'BigQuery'},
        {name: 'jupyter'},
        {name: '統計学'},
        {name: 'Python'}
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
/*
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
*/
h1 {
  font-weight: normal;
}
h2 {
  font-weight: normal;
  color: #424242;
  font-size: 28px;
}
h3 {
  font-weight: bold;
  font-size:15px;
}
</style>
