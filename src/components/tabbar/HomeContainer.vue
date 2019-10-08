<template>
    <div>
        <!-- 轮播图区域 -->
        <swiper :lunbotulist="lunbotulist" :isfull="true"></swiper>
        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/六宫格小图标/menu1.png" alt="menu1.png" srcset="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
             </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="home/photolist">
                    <img src="../../images/六宫格小图标/menu2.png" alt="menu2.png" srcset="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/六宫格小图标/menu3.png" alt="menu3.png" srcset="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/六宫格小图标/menu4.png" alt="menu4.png" srcset="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/六宫格小图标/menu5.png" alt="menu5.png" srcset="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/六宫格小图标/menu6.png" alt="menu6.png" srcset="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>

<script>

import { Toast } from "mint-ui"
import swiper from '../subcomponent/swiper.vue'
import $ from "../../../node_modules/jquery/dist/jquery.min.js"
export default {
    data() {
        return {
            lunbotulist: []
        }
    },
    created() {
        this.getLunbotu();
    },
    methods: {
        getLunbotu() {
            var $vm = this;
            $.ajax({
                type: "get",
                url: 'data/lunbotu/lunbotu_index.json',
                data: {},
                dataType:"json",
                async: false,
                success: function(data){
                    $vm.lunbotulist = data.message;
                }
            })
        }
    },
    components: {
        swiper
    }
}
</script>

<style scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe-item:nth-child(1){
    background-color: red;
}
.mint-swipe-item:nth-child(2){
    background-color: green;
}
.mint-swipe-item:nth-child(3){
    background-color: yellow;
}


.mui-grid-view,.mui-grid-9{
    background-color: #fff;
    border: none;
}
.mui-grid-view,.mui-grid-9,.mui-table-view-cell{
    border: 0;
}
.mui-table-view-cell img{
    width: 60px;
}
</style>