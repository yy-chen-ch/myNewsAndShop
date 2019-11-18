<template>
    <div class="shareVideo">
        <div id="refreshContainer" class="mui-content mui-scroll-wrapper">
            <div class="mui-scroll">
                <!--数据列表-->
                <ul class="mui-table-view mui-table-view-chevron">
                    <li class="videoItem" v-for="index in num" :key="index">
                        <img :src='"../../images/video/dy ("+index+").jpg"' alt="">
                        <div id="mask"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
import $ from '../../../node_modules/jquery/dist/jquery.min.js'
export default {
    data(){
        return {
            num: 10,
            maxNum: 0
        }
    },
    created(){
        this.getVideo()
        let $vm = this;
        mui.init({
            pullRefresh: {
                container:'#refreshContainer',//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
                up: {
                    style:'circle',//必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
                    color:'#2BD009', //可选，默认“#2BD009” 下拉刷新控件颜色
                    height:'50px',//可选,默认50px.下拉刷新控件的高度,
                    range:'100px', //可选 默认100px,控件可下拉拖拽的范围
                    offset:'0px', //可选 默认0px,下拉刷新控件的起始位置
                    auto: true,//可选,默认false.首次加载自动上拉刷新一次
                    callback: $vm.pullDown
                },
                down: {
                    style:'circle',//必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
                    callback: $vm.pullRefresh
                }
            }
        });
    },
    mounted() {
        
    },
    methods: {
        getVideo (){
            var $vm = this;
            $.ajax({
                url: 'data/video/video.json',
                type: "get",
                dataType: "json",
                async: false,
                success: function(data){
                    $vm.maxNum = data.message
                }
            })
        },
        pullDown() {
            setTimeout(function(){
                if(this.num == this.maxNum){
                    mui("#refreshContainer").pullRefresh().endPullupToRefresh(true);
                } else{
                    this.num += 10;
                    this.num = this.num >= this.maxNum ? this.maxNum : this.num;
                    mui("#refreshContainer").pullRefresh().endPullupToRefresh(false);
                }
            }.bind(this),1000)
        },
        pullRefresh() {
            mui("#refreshContainer").pullRefresh().endPullupToRefresh(false);
        }
    }
}
document.body.addEventListener('touchstart', function () {});
</script>
<style scoped>
.mui-table-view{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    touch-action: none; 
}
.mui-table-view .videoItem{
    width: 50%;
    padding: 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
}
.mui-table-view .videoItem img{
    width: 100%;
}
.mui-table-view .videoItem:active .mask{
    opacity: 0.8;
}
.mask{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background: url(http://vs6.bdstatic.com/browse_static/v3/videoChannelCommon/img/icon/play_821ce903.png) no-repeat 50% 50%;
    background-size: contain;
    opacity: 0;
    z-index: 1;
}

</style>