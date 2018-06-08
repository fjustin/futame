<template>
  <div id="introduce">
    <div class="panel">
      <div class="panel-head">
          <h3 class="panel-title">Introduce myself</h3>
      </div>

      <div class="panel-body">
          <p>{{ message }}<br>{{ message2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '初めまして！二見と申します。普段は麻布十番のグルメサービス会社でデータ分析をしています。デザイン以外は何でもやっていきます。',
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

.panel{
  width: auto;
}

.panel-head{
  padding-left: 50px;
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
