<template>
  <div>
    vue lerna monorepo test
    <alert/>
  </div>
</template>

<script>
import alert from '@mc.gl/alert'
import testTs from '@mc.gl/testts'
export default {
  name: 'Home',
  components: {
    alert
  },
  data() {
    return {
    }
  },
  created() {
    // console.log('init vue')
    // console.log(alert)
    console.log(testTs(1))
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
