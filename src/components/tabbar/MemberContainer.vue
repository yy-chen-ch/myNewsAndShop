<template>
  <div class="member">
    <header class="header">
      <div class="header_left"></div>
      <div class="header_right">
          <p class="name">小云-003</p>
          <p class="content">您还不是VIP</p>
      </div>
      <ul>
          <li>
              <p class="number">0</p>
              <p class="text">我的资产</p>
          </li>
          <li>
              <p class="number">0</p>
              <p class="text">VIP+</p>
          </li>
          <li>
              <p class="number">0</p>
              <p class="text">优惠卷</p>
          </li>
          <li>
              <p class="number">0</p>
              <p class="text">钻石</p>
          </li>
          <li>
              <p class="number">0</p>
              <p class="text">积分</p>
          </li>
      </ul>
    </header>
    <div class="member-info">
        <div class="head">
            <span class="left" :class="{active: memberSwitch}" @click="memberchange(true)">普通会员</span>
            <span class="right" :class="{active: !memberSwitch}" @click="memberchange(false)">超级VIP</span>
        </div>
        <div class="by">
            <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item li" v-for="(item) in memberinfo" :key="item.price" @click="couponchange(item)">
                        <span class="limit" v-show="item.limit">{{item.limit}}</span>
                        <p class="title">{{item.title}}</p>
                        <p class="price">￥{{item.price}}</p>
                        <p class="content">{{item.content}}</p>
                    </a>
                </div>
            </div>
            <p class="coupon clearFix">
                <span class="left">优惠卷</span>
                <span class="right">{{coupon}}</span>
            </p>
            <button>立即以{{price}}开通</button>
            <p class="integel">得{{integral}}积分 + {{v}}V力值</p>
        </div>
    </div>
    <div class="help">
        <h1 class="clearFix">
            <span class="left">VIP帮助服务中心</span>
            <span class="right">更多 ></span></span>
        </h1>
        <div class="serve">
            <div>
                <img src="../../images/member/3-1.png" alt="">
                <p>管理续费</p>
            </div>
            <div>
                <img src="../../images/member/3-2.png" alt="">
                <p>CDK查询</p>
            </div>
            <div>
                <img src="../../images/member/3-3.png" alt="">
                <p>封号查询</p>
            </div>
        </div>
        <p class="title">如何移除其他观看腾讯视频的设备？</p>
        <p class="title">青少年守护模式介绍</p>
        <p class="title">会员解锁常见问题</p>
    </div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
import $ from '../../../node_modules/jquery/dist/jquery.min.js'
export default {
        data() {
            return {
                member: {},
                memberinfo: [],
                memberSwitch: true,  
                vipPrice: [],
                coupon: "",
                ordVipIndex: 0,
                superVipIndex: 0
            }
        },
        created() {
            this.getmember()
        },
        methods: {
            getmember(){
                var $vm = this;
                $.ajax({
                    type: "get",
                    url: 'data/member/memberBy.json',
                    data: {},
                    dataType:"json",
                    async: false,
                    success: function(data){
                        $vm.member = data.message;
                    }
                })
                this.memberinfo = this.member.vip;
                this.coupon = this.memberinfo[0].coupon; 
                this.integral = this.memberinfo[0].integral; 
                this.v = this.memberinfo[0].v; 
                this.price = this.memberinfo[0].price;
            },
            memberchange(a){
                this.memberSwitch = a ? true : false;
                this.memberinfo = a ? this.member.vip : this.member.superVip;
            },
            couponchange(item){
                this.coupon = item.coupon;
                this.v = item.v;
                this.integral = item.integral;
                this.price = item.price;
            }
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0008
            })
        }
    }
</script>

<style scoped>
.left{
    float: left;
}
.right{
    float: right;
}
.clearFix::after{
    content: ' ';
    display: inline-block;
    clear: both;

}
.active{
    color: #f2ca5b;
    font-size: 20px;
    border-bottom: 3px solid #f2ca5b;
}
p{
    margin: 0px;
    padding: 0px;
    font-size: 12px;
}
ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
}
.member{
    box-sizing: border-box;
    background-color: #fff;
}
.header {
  height: 120px;
  padding: 16px 16px 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100%;
  background: url(../../images/member/Vip.gif),linear-gradient(to right,red,blue);
}
.header_left {
  float: left;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: pink;
}
.header_right {
  margin-left: 68px;
}
.header_right .name{
    font-size: 14px;
    font-weight: bold;
    color: #fff;
}
.header_right .content{
    font-size: 10px;
    color: #ccc;
}
.header ul{
    display: flex;
}
.header ul li{
    flex: 1;
    align-items: center;
    text-align: center;
    touch-action: none;
}
.header ul li .number{
    font-weight: bold;
    color: yellow;
}
.header ul li .text{
    color: #fff;
    font-size: 10px;
}
#main{
    position: absolute;
    width: 100%;
    font-size: 12px;
}
.member-info .head{
    height: 40px;
    line-height: 40px;
    color: #979797;
    display: flex;
    font-size: 15px;    
}
.member-info .head span{
    justify-items: center;
    text-align: center;
    width: 50%;
    box-sizing: border-box;
}

.member-info .by .mui-scroll{
    display: flex;

}
.member-info .by .li{
    touch-action: none;
    position: relative;
    width: 110px;
    height: 120px;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    font-size: 10px;
    margin: 20px 5px;
    border: 1px solid #f0f0f0;
    background-color: #fff;
}
.member-info .by .li .title{
    font-size: 12px;
    color: #000;
}
.member-info .by .li .price{
    font-size: 20px;
    color: #f2ca5b;
    margin: 4px;
}
.member-info .by .li .limit{
    position: absolute;
    top: -10px;
    right: 0px;
    border-radius: 0px 5px 0px 5px;
    background: linear-gradient(to right top, #cf10ec, #6a16e6);
    color: #fff;
    height: 20px;
    line-height: 20px;
    padding: 0px 4px;
}
.member-info .by .li .content{
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
}
.member-info .by .coupon span{
    color: #979797;
    margin: 0px 35px;
}
.member-info .by button{
    width: 90%;
    border-radius: 18px;
    margin-top: 10px;
    margin-left: 5%;
    text-align: center;
    color: #724909;
    background-color: #fcd97c;
    outline: none;
}
.member-info .by .integel{
    text-align: center;
    margin-top: 5px;
}

.mui-scroll,.mui-scroll-wrapper{
    height: 150px;
}
.mui-segmented-control,.mui-control-item{
    overflow: visible;
}
.mui-segmented-control, .mui-control-item {
    line-height: normal;
}
.mui-active{
    background-color: #fbf2d9 !important;
    border: 1px solid #f2ca5b !important;
}

/* 帮助中心 */
.help h1{
    font-size: 14px;
    padding: 10px 10px;
}
.help h1 .right{
    color: #a3a3a3;
}
.help .serve{
    display: flex;
    justify-content: space-around;
    margin: 0px 0px 15px;
}
.help .serve img{
    width: 50px;
}
.help p{
    color: #000;
}
.help .title{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    border-top: 1px solid #efefef;
}
</style>