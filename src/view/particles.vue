<template>
  <div>
    <vue-particles
      color="#6495ED"
      :particleOpacity="0.8"
      :particlesNumber="70"
      shapeType="circle"
      :particleSize="4"
      linesColor="#6495ED"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.6"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <Index/>
  </div>
</template>
<script>
import Index from '../components/bg/index.vue'
export default {
  name: '',
  data () {
    return {}
  },
  methods: {},
  components: {
    Index
  }
}
</script>
<style lang="less">
div{
  #particles-js {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
  }
}
</style>
