<template>
  <div id="blogs">
    <h2>Blog</h2>
      <p v-for="link in links" v-bind:key="link">
        <a v-bind:href="link.url">{{ link.name }}</a>
      </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
a {
  color: #42b983;
}
</style>
