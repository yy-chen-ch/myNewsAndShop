<template>
    <div>
        <h3>标题</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击： 0词</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
        <!-- 图片内容区域 -->
        <div class="content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            photoinfo: []
        };
    },
    methods: {
        getPhotoInfo () {
            var $vm = this
            $.ajax({
                type: "get",
                url: 'data/photoinfo.json',
                data: {},
                dataType:"json",
                async: false,
                success: function(data){
                    $vm.photoinfo = data.message;
                }
            })
        }
    },
    created (){
        this.getPhotoInfo()
    }
}
</script>