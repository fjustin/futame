<template>
  <div id="app">
    <profile-img></profile-img>
    <introduce></introduce>
    <name></name>
    <birthday></birthday>
    <history></history>
    <school></school>
    <skill></skill>
    <blog></blog>
    <academy></academy>
    <works></works>
    <contact></contact>
  </div>
</template>

<script>
import Profile from '../components/profile.vue'
import Birthday from './birthday.vue'
import Name from './name.vue'
import School from './school.vue'
import History from './history.vue'
import Skill from './skill.vue'
import Blog from './blog.vue'
import Academy from './academy.vue'
import Contact from './contact.vue'
import Works from './works.vue'
import Introduce from './introduce.vue'

export default {
  name: 'HelloWorld',
  components: {
    'profile-img': Profile,
    'birthday': Birthday,
    'name': Name,
    'school': School,
    'history': History,
    'skill': Skill,
    'blog': Blog,
    'academy': Academy,
    'contact': Contact,
    'works': Works,
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
</style>
