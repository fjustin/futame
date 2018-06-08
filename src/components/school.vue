<template>
  <div id="school">
    <h2>School</h2>
      <p v-for="school in schools" v-bind:key="school">{{ school.name }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      schools: [
        {name: '横浜市立葛野小学校'},
        {name: '千葉市立幕張本郷中学校'},
        {name: '横浜創英高等学校'},
        {name: '東京都市大学環境学部環境創生学科'},
        {name: 'Edith Cowan University'}
      ]
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-weight: normal;
}
h2 {
  font-weight: bold;
  color: black;
  font-size: 28px;
}
h3 {
  font-weight: bold;
  font-size:15px;
}
</style>
