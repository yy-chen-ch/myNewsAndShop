<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" :value="count" @change="countchange" ref="numberbox" readonly/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js"
export default {
    mounted(){
        mui(".mui-numbox").numbox();
    },
    methods: {
        countchange(){
            this.$store.commit("updategoodsinfo",{
                id: this.goodsid,
                count: this.$refs.numberbox.value
            })
        }
    },
    props: ["count","goodsid"]
}
</script>  
<style scoped>

</style>