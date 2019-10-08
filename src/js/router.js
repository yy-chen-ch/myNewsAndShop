import VueRouter from 'vue-router'

import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import NewList from '../components/news/NewList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'
import photolist from '../components/photos/photolist.vue'
import photoinfo from '../components/photos/photoinfo.vue'
import goodslist from '../components/goods/goodslist.vue'
import goodsinfo from '../components/goods/goodsinfo.vue'
var router = new VueRouter({
    routes: [
        { path: '/', rdirect: '/home'},
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/search', component: SearchContainer },
        { path: '/shopcar', component: ShopcarContainer },

        { path: '/home/newslist', component: NewList },
        { path: '/home/newsInfo/:id', component: NewsInfo },

        { path: '/home/photolist', component: photolist },
        { path: '/home/photoinfo/:id', component: photoinfo },

        { path: '/home/goodslist', component: goodslist},
        { path: '/home/goodsinfo/:id', component: goodsinfo}
    ],
    linkActiveClass: 'mui-active'

})

export default router