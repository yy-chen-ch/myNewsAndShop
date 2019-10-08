import Vue from 'vue'    
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    addToCar(state, goodsinfo){
      var flag = false
      state.car.some(item => {
        if(item.id == goodsinfo.id){
          item.count = parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if(!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updategoodsinfo(state, goodsinfo) {
      state.car.some(item => {
        if( item.id == goodsinfo.id){
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updategoodsselected(state, info){
      state.car.some(item => {
        if (item.id == info.id){
          item.selected = info.selected
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removecar(state, id){
      state.car.some((item, index) => {
        if(item.id == id){
          state.car.splice(index, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getcount(state) {
      var c = 0;
      state.car.forEach( item => {
        c += item.count
      })
      return c;
    },
    getcountandtotal(state){
      var o = {
        count: 0,
        total: 0
      }
      state.car.forEach(item => {
        if (item.selected){
          o.count += item.count;
          o.total += item.price * item.count
        }
      })
      return o
    }
  }
})

import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.min.css'

import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

import app from '../app.vue'
import router from './router.js'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})  