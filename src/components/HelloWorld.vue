<template>
  <div id="app">
    <introduce></introduce>
    <contact></contact>
    <name></name>
    <birthday></birthday>
    <history></history>
    <school></school>
    <skill></skill>
    <blog></blog>
    <div class="footer">
      <div class="credit" style="color: gray; font-size: 10px; font-weight: bold; position: absolute; bottom: 0; right: 0; margin-right: 10px;">
        © 2018 Daiki Futami(fjustin).
      </div>
    </div>
  </div>
</template>

<script>
import Birthday from './birthday.vue'
import Name from './name.vue'
import School from './school.vue'
import History from './history.vue'
import Skill from './skill.vue'
import Blog from './blog.vue'
import Contact from './contact.vue'
import Introduce from './introduce.vue'

export default {
  name: 'HelloWorld',
  components: {
    'birthday': Birthday,
    'name': Name,
    'school': School,
    'history': History,
    'skill': Skill,
    'blog': Blog,
    'contact': Contact,
    'introduce': Introduce
  },
  props: ['image_src'],
  data () {
    return {
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer{
  position: relative;
  width: auto;
  height: 100px;
  background-color: #FFC108;
  margin-top: 50px;
}
</style>
