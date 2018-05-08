<template>
    <div id="profile-img">
      <img :src="image_src" alt="profile image">
    </div>
</template>

<script>
export default {
  data () {
    return {
      image_src: require('../assets/mypage.jpg')
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
</style>
