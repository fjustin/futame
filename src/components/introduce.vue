<template>
  <div id="introduce">
    <div class="panel">
      <div class="panel-head">
          <h3 class="panel-title" style="margin-left: 4.8rem;">About Me</h3>
      </div>

      <div class="panel-body">
        <p>{{ message }}<br>{{ message2 }}<br><br>{{ message3 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'はじめまして:) 二見と申します。大手決済サービスでデータ分析をしています。',
      message2: 'プロダクト内の仮説検証やUXリサーチについて模索しています',
      message3: '気軽にDMください！是非情報交換しましょう！'
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
  font-weight: normal;
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
