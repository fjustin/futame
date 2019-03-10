<template>
  <div id="history">
    <h2>Work History</h2>
      <p class="step-title" v-for="job in jobs" v-bind:key="job">{{ job.name }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jobs: [
        {name: 'Retty.inc Data Analyst'},
        {name: 'ex CyberAgent.inc Marketing'},
        {name: 'ex SPUR.inc Engineer'},
        {name: 'ex GameTrade.inc SEO/GrowthHack'}
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
</style>
