<template>
  <div id="academy">
    <h2>Research at Univ</h2>
        <div class="stepper">
          <div class="step">
            <p class="step-number">1</p>
            <p class="step-title">事例研究</p>
            <p>ドローンによる低コスト農業の提案とそのコスト計算</p>
            <a href="https://docs.google.com/document/d/1Nl_DkXMyToXKNQ25NGhuBs7zlY1aTVLkz1uenrEWCV0/edit?usp=sharing">論文リンク</a>
          </div>
          <div class="step">
            <p class="step-number">2</p>
            <p class="step-title">卒業研究</p>
            <p>機械学習に夜植物の病気の自動判別システムの開発</p>
            <a href="https://docs.google.com/document/d/1Z0WumC9_zPDVZVioFss_hq08rdkxNuyUQD54Upry0gI/edit?usp=sharing">論文リンク</a>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.stepper{
  margin-left: 30px;
}

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
  font-size:18px;
}
a {
  color: #42b983;
}
</style>
