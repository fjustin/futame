<template>
  <div id="history">
    <h2># Work History</h2>
      <p v-for="job in jobs" v-bind:key="job">{{ job.name }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jobs: [
        {name: 'ex GameTrade.inc SEO/Media/Marketing'},
        {name: 'SPUR.inc Engineer'},
        {name: 'ex CyberAgent.inc Marketing'},
        {name: 'Retty.inc Data Analyst'}
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
</style>
