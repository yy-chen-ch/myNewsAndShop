<template>
    <div class="feedBack">
        <div class="diamond" v-for="(item, index) in text" :key="item.title">
            <h1 class="title">
                <span class="left">
                    <img :src='"../../images/feedBack/4-"+ (index+1) +".png"' alt="">
                    {{item.title}}
                </span>
                <span class="right">更多 ></span></span>
            </h1>
            <p v-for="(i, index) in item.content" :key="index">{{i}}</p>
        </div>
    </div>
</template>
<script>
import $ from "../../../node_modules/jquery/dist/jquery.min.js"
export default {
    data() {
        return {
            text: []
        }
    },
    created(){
        this.getext()
    },
    methods: {
        getext() {
            var $vm = this;
            $.ajax({
                type: "get",
                url: 'data/feedBack/feedBack.json',
                data: {},
                dataType:"json",
                async: false,
                success: function(data){
                    $vm.text = data.message;
                }
            })
        }
    }
}
</script>   
<style scoped>
p,h1{
    margin: 0px;
}
.diamond h1{
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 10px;
    background-color: #f7f9fb;
}
.diamond h1 span{
    font-size: 16px;
    height: 20px;
    line-height: 20px;
    color: #808080;
}
.diamond h1 span img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.diamond p{
    height: 30px;
    line-height: 30px;
    color: #000;
    background-color: #fff;
    padding: 0px 0px 0px 20px;
    border-bottom: 1px solid #efeff1;
}
.diamond p:last-child{
    border-bottom: none;
}
</style>