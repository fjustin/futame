<template>
  <div id="name">
    <h2># Name</h2>
      <p>{{ myname }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myname: '二見 大揮 (Futami Daiki)'
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Quicksand);
h1 {
  font-weight: normal;
}
h2 {
  font-weight:bold;
  color: black;
  font-family: 'Quicksand', sans-serif;
}
h3 {
  font-weight: bold;
  font-size:15px;
}
</style>
