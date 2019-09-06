<template>
  <div>
   <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
   <div id="myChart1" :style="{width: '300px', height: '300px'}"></div>
   <div id="echerts" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      data: [5, 20, 36, 10, 10, 20]
    }
  },
  mounted() {
    this.drawList()
    this.drawList1()
  },
  methods: {
    drawList() {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.data
        }]
      })
    },
    drawList1() {
      let myChart = this.$echarts.init(document.getElementById('myChart1'))
      myChart.setOption({
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data:[
            {value:235, name:'视频广告'},
            {value:274, name:'联盟广告'},
            {value:310, name:'邮件营销'},
            {value:335, name:'直接访问'},
            {value:400, name:'搜索引擎'}
          ]
        }
      ]
    })
    },
    draweCharts() {
      let myChart = this.$echarts.init(document.getElementById('echerts'))
    }
  }
}
</script>