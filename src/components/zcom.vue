
<template>
  <div>
    {{text}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      ztext: '子组件的值',
      list: []
    }
  },
  created() {   
    this.$api.get('topics', null, r => {
    this.list = r.data
    // console.log(this.list)
   })
  },
  mounted() {
  },
  methods: {
  },
  props: ['text']
 }
</script>