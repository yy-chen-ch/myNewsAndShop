<template>
    <div class="goodsinfo-container">
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>
        <!-- 商品轮播 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotulist="goodsInfo.img_url" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
				<div class="mui-card-header">{{ goodsInfo.title }}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价：<del>￥{{ goodsInfo.old }}</del>&nbsp;&nbsp;
                            销售价：<span class="now">￥{{ goodsInfo.now }}</span>
                        </p>
                        <p>购买数量</p>  
                        <numberbox @getcount="getselectnumber" @tocar="ballmove" :max="goodsInfo.rest"></numberbox>  
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="ballmove">加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号: {{ goodsInfo.item }}</p>
                        <p>库存情况：{{ goodsInfo.rest }}件</p>
                        <p>上架时间：2015.06.30</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large">图文介绍</mt-button>
                    <mt-button type="danger" size="large">商品评论</mt-button>
                </div>
			</div>
    </div>
</template>
<script>
import swiper from '../subcomponent/swiper.vue'
import numberbox from '../subcomponent/goodinfo_number.vue'
import $ from 'jquery/dist/jquery.min.js'
export default {
    data() {
        return {
            id: this.$route.params.id,
            goodsInfo: [],
            ballflag: false,
            selectnumber: 1
        }
    },
    methods: {
        getlunbotu(){
            var $vm = this;
            $.ajax({
                url: 'data/shop/shopInfo.json',
                type: "get",
                dataType: "json",
                async: false,
                success: function(data){
                    $vm.goodsInfo = data.message[$vm.id]
                }
            })
        },
        ballmove(){
            this.ballflag = true
            var goodsinfo = {
                id: this.id,
                title: this.goodsInfo.title,
                count: this.selectnumber,
                price: this.goodsInfo.now,
                img_url: this.goodsInfo.img_url[0],
                selected: true
            }
            this.$store.commit('addToCar',goodsinfo)
        },
        beforeEnter(el){
            el.style.transform = "translate(0px, 0px)"
        },
        enter(el,done){

            el.offsetWidth;

            const ballposition = this.$refs.ball.getBoundingClientRect();
            const badgeposition = document.getElementById("badge").getBoundingClientRect();

            const xdist = badgeposition.left - ballposition.left;
            const ydist = badgeposition.top - ballposition.top;
            el.style.transform = `translate(${xdist}px, ${ydist}px)`;
            el.style.transition = "all 0.5s ease";
            done();
        },
        afterEnter(el){
            this.ballflag = false;
        },
        getselectnumber(number){
            this.selectnumber = number;
        }
    },
    created() {
        this.getlunbotu()
    },
    components: {
        swiper,
        numberbox
    }
}
</script>
<style scoped>
.goodsinfo-container{
    background-color: #eee;
}
.now{
    color: red;
    font-size: 16px;
    font-weight: bold;
}
.mui-card-footer{
    display: block;
}
.mui-card-footer button{
    margin: 15px 0px;
}
.ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 74px;
    top: 420px;
    z-index: 999;
}
</style>