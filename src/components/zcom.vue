
<template>
  <div>
    {{text}}
    <div>
      <div>提示</div>
      <slot name="s1"></slot>
      <div>确定</div>
    </div>
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