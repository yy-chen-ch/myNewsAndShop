<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']"
                     v-for="item in cates" :key="item.id" @click="getPhotoList(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div> 
        </div>
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link tag="li" v-for="item in list" :key="item.id" :to="'photoinfo/'+item.id">
                <img v-lazy="item.img">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.abstract }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
import $ from 'jquery/dist/jquery.min.js'

export default {
    data(){
        return {
            cates: [],
            list: []
        }
    },
    methods: {
        getCatesGory(){
            var $vm = this;
            $.ajax({
                url: 'data/photoSharing/catesgory.json',
                type: "get",
                dataType: "json",
                async: false,
                success: function(data){
                    $vm.cates = data.message;
                }
            })
        },
        getPhotoList(cateId){
            var $vm = this;
            $.ajax({
                url: 'data/photoSharing/'+cateId+'.json',
                type: "get",
                dataType: "json",
                async: false,
                success: function(data){
                    $vm.list = data.message;
                }
            })
        }
    },
    created(){
        this.getCatesGory()
        this.getPhotoList("all")
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0008
        })
    }
}
</script>
<style scoped>
*{ 
    touch-action: pan-y; 
}
.photo-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0px;
}
.photo-list li{
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 10px #999; 
    position: relative;
}
.photo-list li img{
    width: 100%;
    vertical-align: middle;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.info{
    color: white;
    text-align: left;
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
    max-height: 84px;
    overflow: scroll;
}
.info-title{
    font-size: 14px;
}
.info-body{
    font-size: 13px;
}


</style>