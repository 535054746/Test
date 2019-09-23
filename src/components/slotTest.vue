<template>
    <div>
        <div class="slot1">
            <div class="cl"  @click="clear">clear</div>
            <slot name="s2" class="s2"></slot>
        </div>
    </div>
</template>
<style scoped>
.slot1{
    width: 300px;
    height: 200px;
    /* border: 1px solid; */
    border-radius: 5px;
    background: rgba(225, 225, 225, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto ;
    /* position: relative; */
}
.s2 {
    position: absolute;
    top: 10px
}
</style>
<script>
export default {
    data() {
        return{
            tools: ''
        }
    },
    created() {
        this.tools = this.$parent.tools
    },
    methods: {
        clear() {
          // console.log(11);
          var r =  this.tools? false : true
          console.log(r); 
          this.$emit('parasChange',r)
        }
    }
}
</script>