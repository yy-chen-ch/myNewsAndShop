<template>
    <div class="newsinfo-container">
        <!-- 标题 -->
        <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time | dateFormat}}</span>
            <span>点击： {{ newsinfo.click_count }}次</span>
        </p>
        <hr>
        <!-- 内容 -->
        <div class="content">{{ newsinfo.content }}</div>
        <!-- 评论 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>
<script>
import comment from '../subcomponent/comment.vue'
import $ from '../../../node_modules/jquery/dist/jquery.min.js'
export default {
    data() {
        return {
            id: this.$route.params.id,
            newsinfo: []
        }
    },
    created () {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo(){
            var $vm = this;
            $(document).ready(function(){
                $.ajax({
                    url: "../../../data/newslist.json",
                    async: false,
                    success: function(data){
                        $vm.newsinfo = data.message[$vm.id - 1]
                    }

                })
            })
        }
    },
    components: {
        'comment-box': comment
    }
}

</script> 
<style scoped>
/* .newsinfo-contains .contente{
    width: 100%;
    内容里图片有问题删除scoped
} */
.newsinfo-contains{
    padding: 0 4px;
}
.title{
    font-size: 16px;
    color: red;
    text-align: center;
    margin: 15px 0px;
}
.subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
}

</style>

