<template>
  <div id="contact">
    <h2>#コンタクト</h2>
      <p v-for="contact in contacts" v-bind:key="contact">
      <a v-bind:href="contact.src">{{ contact.name }}</a><br>
      <p>nimi0370@gmail.com</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [
        {src: 'https://twitter.com/Justin0370', name: 'Twitter'},
        {src: 'https://www.facebook.com/daiki.futami', name: 'Facebook'},
        {src: 'https://github.com/fjustin', name: 'GitHub'}
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
}
h3 {
  font-weight: bold;
  font-size:15px;
}
a {
  color: #42b983;
}
</style>
