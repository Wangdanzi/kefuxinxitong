import Vue from 'vue'
import Router from 'vue-router'
// 公共
import Layout from '../components/common/Layout.vue'
import AllRecord from '../components/common/AllRecord/AllRecord'
// 找房源
import home from '../components/findHouse/home.vue'
import followUp from '../components/findHouse/followUp.vue'
import appointment from '../components/findHouse/appointment.vue'
import resolved from '../components/findHouse/resolved.vue'
import createWork from '../components/findHouse/createWork.vue'
import followBanner from '../components/findHouse/followBanner.vue'
// 找房源 王
import index from '../components/findHouse/index.vue'
import Users from '../components/findHouse/Users.vue'
import Tenement from '../components/tenement/Tenement.vue'
import Lease from '../components/tenement/lease/Lease.vue'

// import cishi from '../components/tenement/cishi/cishi.vue'
Vue.use(Router)
export default new Router({
  routes: [
    // 公共部分
    {
      path: '/', //地址栏显示的路径
      name: 'layout',
      component: Layout, // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
      children: [{
          path: '/home',
          name: 'home',
          component: home,
          children: [{
              path: 'followUp',
              name: 'followUp',
              component: followUp
            },
            {
              path: 'appointment',
              name: 'appointment',
              component: appointment
            },
            {
              path: 'resolved',
              name: 'resolved',
              component: resolved
            }
          ]
        },
        // 租房
        {
          path: '/tenement',
          component: Tenement
        },
        {
          path: '/index',
          name: 'index',
          component: index,
          children: [{
            path: '/Users',
            name: 'Users',
            component: Users
          }]
        },

      ]
    },
    {
      path: '/allrecord',
      // name: 'AllRecord',
      component: AllRecord
    },
    {
      path: '/createWork',
      name: 'createWork',
      component: createWork
    },
    {
      path: '/followBanner',
      name: 'followBanner',
      component: followBanner
    },
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: index,
    //   children: [{
    //     path: '/Users',
    //     name: 'Users',
    //     component: Users
    //   }]
    // },

    { // 租约5
      path: '/lease',
      component: Lease
    }
  ]
})
