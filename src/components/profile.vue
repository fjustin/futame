<template>
    <div id="profile-img">
      <img :src="image_src" alt="profile image">
    </div>
</template>

<script>
export default {
  data () {
    return {
      image_src: require('../assets/pro.jpg')
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
img {
  width: 150px;
  height: 150px;
  border-radius: 75px;
}
</style>
