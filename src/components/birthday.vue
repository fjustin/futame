<template>
  <div id="birthday">
    <h2>#生年月日</h2>
      <p>{{ birthday }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      birthday: '1997/01/15'
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
}
h3 {
  font-weight: bold;
  font-size:15px;
}
</style>
