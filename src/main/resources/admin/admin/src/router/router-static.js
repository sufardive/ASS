import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import cart from '@/views/modules/cart/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import news from '@/views/modules/news/list'
    import nonghu from '@/views/modules/nonghu/list'
    import shangpin from '@/views/modules/shangpin/list'
    import shangpinBangfushenqing from '@/views/modules/shangpinBangfushenqing/list'
    import shangpinChat from '@/views/modules/shangpinChat/list'
    import shangpinCollection from '@/views/modules/shangpinCollection/list'
    import shangpinCommentback from '@/views/modules/shangpinCommentback/list'
    import shangpinOrder from '@/views/modules/shangpinOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryBangfu from '@/views/modules/dictionaryBangfu/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryHuiyuandengji from '@/views/modules/dictionaryHuiyuandengji/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryJinyong from '@/views/modules/dictionaryJinyong/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangpin from '@/views/modules/dictionaryShangpin/list'
    import dictionaryShangpinBangfushenqing from '@/views/modules/dictionaryShangpinBangfushenqing/list'
    import dictionaryShangpinBangfushenqingYesno from '@/views/modules/dictionaryShangpinBangfushenqingYesno/list'
    import dictionaryShangpinChat from '@/views/modules/dictionaryShangpinChat/list'
    import dictionaryShangpinCollection from '@/views/modules/dictionaryShangpinCollection/list'
    import dictionaryShangpinErji from '@/views/modules/dictionaryShangpinErji/list'
        import dictionaryShangpinErjiAddOrUpdate from '@/views/modules/dictionaryShangpinErji/add-or-update'//二级
    import dictionaryShangpinOrder from '@/views/modules/dictionaryShangpinOrder/list'
    import dictionaryShangpinOrderPayment from '@/views/modules/dictionaryShangpinOrderPayment/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBangfu',
        name: '帮扶产品',
        component: dictionaryBangfu
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryHuiyuandengji',
        name: '会员等级类型',
        component: dictionaryHuiyuandengji
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryJinyong',
        name: '账户状态',
        component: dictionaryJinyong
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangpin',
        name: '商品类型',
        component: dictionaryShangpin
    }
    ,{
        path: '/dictionaryShangpinBangfushenqing',
        name: '帮扶申请类型',
        component: dictionaryShangpinBangfushenqing
    }
    ,{
        path: '/dictionaryShangpinBangfushenqingYesno',
        name: '申请状态',
        component: dictionaryShangpinBangfushenqingYesno
    }
    ,{
        path: '/dictionaryShangpinChat',
        name: '数据类型',
        component: dictionaryShangpinChat
    }
    ,{
        path: '/dictionaryShangpinCollection',
        name: '收藏表类型',
        component: dictionaryShangpinCollection
    }
    ,{
        path: '/dictionaryShangpinErji',
        name: '二级类型',
        component: dictionaryShangpinErji
    }
    ,{
        path: '/dictionaryShangpinErjiAddOrUpdate',
        name: '二级类型的新增修改页面',
        component: dictionaryShangpinErjiAddOrUpdate
    }
    ,{
        path: '/dictionaryShangpinOrder',
        name: '订单类型',
        component: dictionaryShangpinOrder
    }
    ,{
        path: '/dictionaryShangpinOrderPayment',
        name: '订单支付类型',
        component: dictionaryShangpinOrderPayment
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/news',
        name: '新闻信息',
        component: news
      }
    ,{
        path: '/nonghu',
        name: '农户',
        component: nonghu
      }
    ,{
        path: '/shangpin',
        name: '商品',
        component: shangpin
      }
    ,{
        path: '/shangpinBangfushenqing',
        name: '帮扶申请',
        component: shangpinBangfushenqing
      }
    ,{
        path: '/shangpinChat',
        name: '用户咨询',
        component: shangpinChat
      }
    ,{
        path: '/shangpinCollection',
        name: '商品收藏',
        component: shangpinCollection
      }
    ,{
        path: '/shangpinCommentback',
        name: '商品评价',
        component: shangpinCommentback
      }
    ,{
        path: '/shangpinOrder',
        name: '商品订单',
        component: shangpinOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
