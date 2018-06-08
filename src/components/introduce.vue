<template>
  <div id="introduce">
    <h2># Introduce myself</h2>
    <p>{{ message }}<br>{{ message2 }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '麻布十番のグルメサービス会社でデータ分析をしています。デザイン以外は何でもやっていきます。',
      message2: 'ブロックチェーンやdappsに興味があり、ethereum周りの技術を勉強中です。'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.link{
  font-size: 8px;
  color: #666666;
}
h1 {
  font-weight: normal;
}
h2 {
  font-weight: bold;
}
h3 {
  font-weight: bold;
  font-size:15px;
}
img{
  width: auto;
  height:200px;
}

p {
  font-size: 14px;
}
.kek{
  margin-top: 30px;
}

@media screen and ( max-width:479px ){
  img{
    width:100%;
    height:200px;
  }
}
</style>
