<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <!-- 商品列表 -->
            <div class="mui-card" v-for="(item, index) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="item.selected" @change="selectedchanged(item.id, item.selected)"></mt-switch> 
                        <img src="http://i1.fuimg.com/692913/f7365e0fbfebc1de.png" alt="">
                        <div class="info">
                            <h1>小米6</h1>
                            <p>
                                <span class="price">￥{{ item.price }}</span>
                                <numbox :count="item.count" :goodsid="item.id"></numbox>
                                <a href="#" @click.prevent="remove(item.id, index)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
            <!-- 结算区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner account">
                        <div class="lef">
                            <p>总计（不含运费）</p>
                            <p>已选商品
                                <span class="red">{{ $store.getters.getcountandtotal.count }}</span>
                                件，总价￥
                                <span class="red">{{ $store.getters.getcountandtotal.total }}</span>
                             </p>
                        </div>	
                        <mt-button type="danger">去结算</mt-button>					
					</div>
				</div>
			</div>
        </div>
    </div>
</template>


<script>
import numbox from "../subcomponent/shopcar_number.vue";
export default {
    data() {
        return {
            goodslist: []
        }
    },
    methods: {
        getgoodslist(){
            this.goodslist = JSON.parse(localStorage.getItem("car"))
        },
        remove(id, index){
            this.goodslist.splice(index, 1)
            this.$store.commit("removecar", id)
        },
        selectedchanged(id, val){
            this.$store.commit("updategoodsselected", { id: id, selected: val })
        }
    },
    created(){
        this.getgoodslist()
    },
    components: {
        numbox
    }
}
</script>

<style scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
}
.mui-card-content-inner{
    display: flex;
    align-items: center;
}
.goods-list img{
    width: 60px;
    height: 60px;
}
.goods-list h1{
    font-size: 13px;
}
.goods-list .info .price{ 
    color: red;
    font-weight: bold;
}
.goods-list .info p{
    display: flex;
}

.account{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.red{
    color: red;
    font-size: 16px;
    font-weight: bold;
}
</style>