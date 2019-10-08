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
            lunbotulist: [
                // {
                //     "title": "穿越",
                //     "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570167440137&di=66ec68298883c1f7ae9590c6e702ac88&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa3e592c653ea46adfe1809e35cd7bc58508a6cb94307-aaO54C_fw658"
                // },
                // {
                //     "title": "致青春",
                //     "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570167440136&di=97735c7f4ef66e6baa1a5137da16ce88&imgtype=0&src=http%3A%2F%2Fpic112.nipic.com%2Ffile%2F20161014%2F23192188_134555221032_2.jpg"
                // },
                // {
                //     "title": "奇幻冰雪天地",
                //     "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570167440136&di=154bef01ab1dae805d8f9b7fbe581f1f&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F02dcc6b868a63398b9555e4bb43c6c1996a50c8c50ca-Alkyvy_fw658"
                // },
                // {
                //     "title": "简约生活",
                //     "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570167440135&di=51fe9a6085f44db926f844b917384e96&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F69edf5e7cb3e93b5eaee672e88b79f9c3ea3ab0d1d330-tjRVpS_fw658"
                // },
                // {
                //     "title": "品味随行",
                //     "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570167440135&di=2c524037646bd0836c538f03fd4e85d7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ac3458a169fda801219c77382f89.jpg%40900w_1l_2o_100sh.jpg"
                // }
            ]
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
                url: 'data/lubotu.json',
                data: {},
                dataType:"json",
                async: false,
                success: function(data){
                    console.log(data)
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