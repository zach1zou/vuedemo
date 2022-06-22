<template>
  <div>
    <el-button type="info" @click="loginout">退出 </el-button>
  </div>
</template>
<script>
export default {
  props: [],
  components: {
  },
  data () {
    return {
    }
  },
    methods: {
        loginout() { 
            window.sessionStorage.clear()
            this.$router.push('/login')
        }
  },
  created () {
  },
  mounted () {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>

</style>
