<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comment" :key="item.add_time">
                <div class="cmt-title">
                    第{{ i + 1 }}楼 用户: {{ item. user_name }} 发表时间： {{ item.add_time | dateFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content ? item.content : "此用户很懒，什么都没有留下"}}
                </div>
            </div>
        </div>
        <mt-button type="primary" size="large" plain @click="postComment">加载更多</mt-button>
    </div>
</template>
<script>
import $ from 'jquery/dist/jquery.min.js'
import { Toast } from "mint-ui"
export default {
    data(){
        return {
            comment: [],
            msg: ""
        }
    },
    created(){
        this.getComments()
    },
    methods: {
        getComments(){
            // this.$http
            // .get("http://localhost:5501/data/comment.json")
            // .then(result => {
            //     if(result.body.status === 0){
            //         this.comment = result.body.message;
            //     } else {
            //         Toast("获取评论失败")
            //     }
            // })
            var $vm = this
            $.ajax({
                url: '../../../data/comment.json',
                async: false,
                success: function(data){
                    $vm.comment = data.message;
                }
            })
        },
        postComment(){
            // this.$http
            // .post("http://localhost:5501/data/comment.json", {
            //     content: this.msg.trim()
            // })
            // .then(function(result){
            //     if(result.body.status === 0) {
            //         var da = {
            //             user_name: "匿名用户",
            //             add_time: Date.now(),
            //             content: this.msg.trim()
            //         };
            //         this.comments.unshift(da);
            //         this.msg = "";
            //     }
            // })
            var $vm = this
            $.ajax({
                url: '../../../data/comment.json',
                type: "POST",
                datatype: "JSON",
                async: false,
                data: {
                    user_name: "匿名用户",
                    add_time: Date.now(),
                    content: this.msg.trim()
                },
                success: function(data,obj){
                    // $vm.comment = data.message;
                    console.log(data)
                    console.log(obj)
                }
            })
        }
    },
    props: ["id"]
}
</script>
<style scoped>
.cmt-container h3{
    font-size: 16px;
}
.cmt-container textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
}
.cmt-list{
    margin: 5px 0;
}
.cmt-item{
    font-size: 13px;
}
.cmt-title{
    line-height: 30px;
    background-color: #ccc;
}
.cmt-body{
    line-height: 35px;
    text-indent: 2em;
}
</style>