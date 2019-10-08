<template>
    <div class="goods-list">
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="godetail(item.id)">
            <img :src="item.img_url[0]" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.now }}</span>
                    <span class="old">￥{{ item.old }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.rest }}件</span>
                </p>
            </div>
        </div>
        <mt-button type="primary" size="large" plain @click="getmore()">加载更多</mt-button>
    </div>
</template>
<script>
import $ from 'jquery/dist/jquery.min.js'
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            goodslist: []
        }
    },
    methods: {
        getgoodslist (){
            var $vm = this;
            $.ajax({
                url: 'data/shop/shopInfo.json',
                type: "get",
                dataType: "json",
                async: false,
                success: function(data){
                    $vm.goodslist = data.message
                }
            })
        },
        getmore (){
            this.getgoodslist()
        },
        godetail(id){
            this.$router.push("/home/goodsinfo/"+ id)
        }
    },
    created(){
        this.getgoodslist()
    }
}
</script>
<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
}
.goods-list .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
}
.goods-item img{
    width: 100%;
}
.goods-item .title{
    font-size: 14px;
}
.goods-item .info{
    background-color: #eee;
}
.goods-item .info p{
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 5px;
}
.price .now{
    color: red;
    font-weight: bold;
    font-size: 14px;
}
.price .old{
    text-decoration: line-through;
}
</style>

