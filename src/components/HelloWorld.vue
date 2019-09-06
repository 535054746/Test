<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="btn">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div>{{listArr}}</div>
    <div>{{arr}}</div>
    <zcom :text = text style="margin-bottom: 50px; margin-top: 50px"/>
    <router-link to="/list?a=1">列表</router-link>
    <div style="margin-top: 20px">
      <router-link to="/echarts">echarts图表</router-link>
    </div>
  </div>
</template>
<script>
import zcom from '@/components/zcom'
export default {
  components: {
    zcom
  },
  data() {
    return {
      dialogVisible: false,
      text: '父组件的值',
      arr: [
        {
          a: 1,
          b: 2
        },
        {
          a: 2,
          b: 1
        }, 
        {
          a: 4,
          b: 4
        },
        {
          a: 6,
          b: 5
        },
        {
          a: 3,
          b: 5
        }
      ],
      listArr: ''
    }
  },
  mounted() {
    this.listArr= [...this.arr.filter(item => item.a===4),...this.arr.filter(item => item.a===2)]
    // console.log(localStorage)
  },
  methods: {
    btn() {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(()=> {
          done();
        }).catch(()=> {});
    }
  }
}
</script>
<style scoped>
 .box-card{
   width: 400px
 }
</style>
