<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="countchange" ref="numberbox"/>
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
            this.$emit('getcount', parseInt(this.$refs.numberbox.value))
            this.$emit('tocar')
        }
    },
    props: ["max"],
    watch: {
        "max": function(now,old){
            mui(".mui-numbox").numbox().setOption("max", now);
        }
    }
}
</script>  
<style scoped>

</style>