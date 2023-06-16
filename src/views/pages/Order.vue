<template>
    <div>
        订单列表
        <el-table
            :data="orderforms.data"
            height="550"
            border
             style="width: 100%">
                <el-table-column
                    prop="orderFormId"
                    label="订单编号"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="userId"
                    label="用户ID"
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="commodityId"
                    label="商品编号"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="isPayoff"
                    label="是否支付"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="submitTime"
                    label="订单提交时间"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="paymentTime"
                    label="支付时间"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="consignmentTime"
                    label="发货时间"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="totalPrice"
                    label="总金额"
                    width="150">
                </el-table-column>
        </el-table>
    </div>
    <div style="text-align: center;">
        <el-form :inline="true" :model="searchmod" class="demo-form-inline">
        <el-form-item>
            <el-input v-model="deleteId" placeholder="请输入订单ID"></el-input>
        </el-form-item>
        <el-from-item>
            <el-button type="danger" @click="open">删除订单</el-button>
        </el-from-item>
        </el-form>
    </div>
        
</template>

<script>
import axios from 'axios';
export default{
    name:'order',
    data(){
        return{
            myuserItem:JSON.parse(localStorage.getItem('loginData')),
            orderforms:[],
            deleteId:null

           
        }
    },
    created(){
        var that = this;
        axios.get("/orderForm/listOrderForms?pageNum=1&pageSize=50").then(function(resp){
            that.orderforms=resp.data;
            console.log('获取的数据为'+JSON.stringify(resp.data))
        })
    },
    methods: {
      open() {
            console.log(this.deleteId);
            axios.delete("/orderForm/deleteOrderFormById",{params:{id:this.deleteId}}).then(function(resp){
                if (resp.data.code==1){
                    alert("删除成功")
                }else{
                    alert("订单不存在")
                }
            })
            
        }
    }
}

   
</script>
