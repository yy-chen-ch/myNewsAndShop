<template>
    <div>
        <ul class="mui-table-view">
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
            $.ajax({
                type: "get",
                url: 'data/news/news_lists.json',
                data: {},
                dataType:"json",
                async: false,
                success: function(data){
                    $vm.newsList = data.message;
                }
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