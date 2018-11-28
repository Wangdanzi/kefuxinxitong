import Vue from 'vue'
import Router from 'vue-router'
import layouVue from '../components/common/layouVue.vue'
import home from '../components/findHouse/home.vue'
import followUp from '../components/findHouse/followUp.vue'
import appointment from '../components/findHouse/appointment.vue'
import resolved from '../components/findHouse/resolved.vue'
import createWork from '../components/findHouse/createWork.vue'
import followBanner from '../components/findHouse/followBanner.vue'
// 找房源 王
import index from '../components/findHouse/index.vue'
import Users from '../components/findHouse/Users.vue'
import indexVue from '../components/tenement/index.vue'
import Lease from '../components/tenement/lease/Lease.vue'
import Layout from '../components/Layout.vue'
// import cishi from '../components/tenement/cishi/cishi.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home', //地址栏显示的路径
      name: 'home',
      component: home,
      children: [
        {
          path: 'followUp', //地址栏显示的路径
          name: 'followUp',
          component: followUp
        },
        {
          path: 'appointment', //地址栏显示的路径
          name: 'appointment',
          component: appointment
        },
        {
          path: 'resolved', //地址栏显示的路径
          name: 'resolved',
          component: resolved
        }
      ]
    },
    {
      path: '/', //地址栏显示的路径
      name: 'layouVue',
      component: layouVue // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
      path: '/createWork', //地址栏显示的路径
      name: 'createWork',
      component: createWork // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
      path: '/followBanner', //地址栏显示的路径
      name: 'followBanner',
      component: followBanner // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    },
    {
      path: '/index', //地址栏显示的路径
      name: 'index',
      component: index, // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
      children: [
        {
          path: '/Users', //地址栏显示的路径
          name: 'Users',
          component: Users // layout是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
        }
      ]
    },
    {
      path: '/layoutw',
      component: Layout
    },
    {
      path: '/indexVue', //地址栏显示的路径
      component: indexVue
    },
    // {
    //   path: '/flowPath',
    //   component: flowPath

    // },
    // {
    //   path: '/retreat',
    //   component: retreat

    // },

    // {
    //   // 全部记录详情
    //   path: '/allrecord',
    //   component: AllRecord
    // },
    {
      // 租约
      path: '/lease',
      component: Lease
    }
  ]
})
