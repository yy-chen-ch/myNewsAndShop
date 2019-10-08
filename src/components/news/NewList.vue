<template>
    <div>
        <ul class="mui-table-view">
            <!-- <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://t12.baidu.com/it/u=1358914331,4257796547&fm=76">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>
                            <span>发表时间：2019-10-1 </span>
                            <span>点击： 0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://t12.baidu.com/it/u=1358914331,4257796547&fm=76">
                    <div class="mui-media-body">
                        木屋
                        <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://t12.baidu.com/it/u=1358914331,4257796547&fm=76">
                    <div class="mui-media-body">
                        CBD
                        <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                    </div>
                </a>
            </li> -->
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img">
                    <div class="mui-media-body">
                        <h3>{{ item.title }}</h3>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.add_time | dateFormat }} </span>
                            <span>点击： {{ item.click_count }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import $ from "../../../node_modules/jquery/dist/jquery.min.js"
export default {
    data() {
        return {
            newsList: []
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            var $vm = this;
            // this.$http.get("http://vue.studyit.io/api/getLunbo").then(result => {
            //     console.log(result.body);
            //     if (result.body.status === 0) {
            //         this.getnewsList = result.body.message;
            //         alert('获取新闻列表成功');
            //     } else {
            //         alert("获取新闻列表失败");
            //     }       
            // })
            $.ajax({
                url: '../../../data/newslist.json',
                async: false,
                success: function(data){
                    $vm.newsList = data.message
                },
            })  
        }
    }
}
</script>
<style scoped>
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
}
</style>