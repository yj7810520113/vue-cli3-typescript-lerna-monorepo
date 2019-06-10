<template>
  <div>
    vue lerna monorepo test
    <alert></alert>
  </div>
</template>

<script>
import alert from '@mc.gl/alert'
export default {
  name: 'home',
  components: {
    alert
  },
  created() {
    // console.log('init vue')
    // console.log(alert)
  },
  data() {
    return {
    }
  },

  methods: {

  }
}
</script>

<style  scoped>
.right {
  float: right !important;
}
.main-content {
  padding: 10px 40px;
}
</style>
