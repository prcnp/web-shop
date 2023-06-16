<template>
    <div style="text-align: center;">
    <el-form :inline="true" :model="good" class="demo-form-inline">
        <el-form-item>
            <el-input v-model="good.name" placeholder="请输入商品名字"></el-input>
        </el-form-item>
         
        <el-form-item>
             <el-button type="primary" @click="searchById">查询</el-button>
        </el-form-item>
        <el-form-item>
             <el-button type="primary" @click="update">添加商品</el-button>
        </el-form-item>
    </el-form>
    </div>

    <div>
    <el-table
            :data="commodities.data"
            height="550"
            @row-click="test"
            border
             style="width: 100%">
                <el-table-column
                    prop="commodityId"
                    label="商品编号"
                    width="100">
                </el-table-column>
                <el-table-column
                    label="图片"
                    width="100">
                    <img src="../../assets/shop.png" width="60" weight="60"/>
                </el-table-column>
                <el-table-column
                    prop="commodityName"
                    label="商品名称"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="commodityDepict"
                    label="商品描述"
                    width="250">
                </el-table-column>
                <el-table-column
                    prop="commodityAmount"
                    label="总数量"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="commodityLeaveNum"
                    label="剩余数量"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="commodityPrice"
                    label="商品价格"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="webPrice"
                    label="订货价格"
                    width="120">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="150">
                        <el-button type="danger" size="small" @click="del">删除</el-button>
                </el-table-column>
        </el-table>   
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
export default{
    name:'goods',
    data(){
        return{
            commodities:[],
            good:{
                name:"",
            },
            commodity:[],
            my:[],
        }
    },
    created(){
        var that = this;
        axios.get("/commodities/getAllCommodities?pageNum=1&pageSize=50").then(function(resp){
            that.commodities=resp.data;
            console.log('获取的数据为'+JSON.stringify(resp.data))
        })
    },
    methods:{
        searchById(){
            var that = this;
            axios.get("/commodities/findCommodityByName",{params:{name:that.good.name}}).then(function(resp){
                that.commodities=resp.data
                console.log('获取的数据为'+JSON.stringify(resp.data))

            })
        },
        test(row){
            console.log('被点击了')
            this.commodity=row
            console.log(this.commodity)
            this.my = JSON.parse(localStorage.getItem('loginData'))
            console.log("我的用户名是"+this.my.username)
            console.log(this.my)
            console.log(this.commodity.commodityId)
        },
        del(){
            axios.delete("/commodities/deleteCommodityById",{params:{id:this.commodity.commodityId}}).then(function(resp){
                if(resp.data.code==1)
                {
                    alert("删除成功!")
                }else{
                    alert("商品不存在!")
                }
            })
        },
        update:()=>{
            router.push({
                path:"/add"
            })
        }

        
    }
}
</script>
<style>
    li{
        list-style: none;
    }
</style>