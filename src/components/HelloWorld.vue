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
  
    <zcom :text = text style="margin-bottom: 50px; margin-top: 50px">
      <div slot="s1">1111</div>
    </zcom>

    <router-link to="/list?a=1">登录</router-link>
    <div style="margin-top: 20px">
      <router-link to="/echarts">echarts图表</router-link>
    </div>
    <br>
    <div>
      <div class="f_flex">
        <div class="flex">{{count}} -- {{list}}</div>
        <div class="flex">{{$store.state.count}}</div>
      </div>
      <div @click="countAdd" class="add">点击</div>
    </div>
    <div>
      <button @click="Jsrouter">跳转</button>
    </div>

        <!-- slot用法 -->
    <slotTest class="slotTest" v-if= 'tools' v-on:parasChange='getSub'>
        <div slot="s2" class="slot">是否删除</div>
    </slotTest>
    <div @click="showTools">显示slotTools</div>
  </div>
</template>
<script>
import zcom from '@/components/zcom'
import slotTest from '@/components/slotTest'
export default {
  components: {
    zcom,
    slotTest
  },
  data() {
    return {
      tools: true,
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
      listArr: '',
      // myparam: ''
    }
  },
  mounted() {
    this.listArr= [...this.arr.filter(item => item.a===4),...this.arr.filter(item => item.a===2)]
    // console.log(localStorage)
  },
  methods: {
    getSub(r) {
      this.tools = r;
      // console.log(this.myparam)
    },
    showTools(r) {
      this.tools = r
    },
    Jsrouter() {
      this.$router.push('/router?a=10')
    },
    countAdd() {
     this.$store.commit('countAdd')
    },
    btn() {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(()=> {
          done();
        }).catch(()=> {});
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    list() {
      return this.$store.getters.list
    }
  }
}
</script>
<style scoped>
.add{
  width:80px;
  height: 30px;
  border: 1px solid;
  border-radius: 5px;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  margin: auto;
}
 .box-card{
   width: 400px
 }
 .f_flex{
   display: flex;
   width: 1000px;
   height: 300px;
   border: 1px solid;
   border-radius: 4px;
   justify-content: center;
   align-items: center;
   /* align-content: space-between */
 }
 .flex{ 
   border: 1px solid;
   width: 100px;
   height: 100px;
   flex-grow: 1;
   margin: 10px;
 }
 .slotTest{
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   position: fixed;
   z-index: 999;
   background: rgba(0, 0, 0, .3)
 }
</style>
