<template>
  <div id="birthday">
    <h2>Birthday</h2>
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
  font-weight: normal;
  color: #424242;
  font-size: 28px;
}
h3 {
  font-weight: bold;
  font-size:15px;
}
</style>
