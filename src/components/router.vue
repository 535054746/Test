<template>
    <div>
        <table>
            <tr>
                <th>品牌</th>
                <th>价格</th>
                <th>数量</th>
            </tr>
            <tr v-for="(item, index) in list" :key = index>
                <td>{{item.title}}</td>
                <td>{{item.price}}</td>
                <td>
                    {{item.num}} --
                    <div @click="add(index)">+1</div>
                </td>
            </tr>
        </table>
        <div>{{shopPrice}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {title: '苹果' , price: '120' , num: '1'},
                {title: '小米' , price: '100' , num: '4'},
                {title: '华为' , price: '110' , num: '3'},
                {title: '三星' , price: '150' , num: '5'}
            ]
        }
    },
    mounted() {
       console.log(this.$route.query); //获取路由传的值
       console.log(this.$route.params); //获取路由传的值
    },
    methods: {
        add(index) {
            this.list[index].num++
        }
    },
    computed: {
        shopPrice() {
            var price = 0;
            this.list.forEach(item => {
                price+=item.price*item.num
            })
            return price  
        }
    }
}
</script>