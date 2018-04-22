import CommonLayout from '../layout'

const routes = [
  // Login View
  {
    path: '/login',
    component: resolve => require(['../views/login'], resolve),
    name: 'login',
    menu: false
  },
  //Register View
  {
    path: '/register',
    component: resolve => require(['../views/register'], resolve),
    name: 'register',
    menu: false
  },
  {
    path: '/',
    redirect: '/table/'
  },
  // Normal View
  {
    path: '/test',
    // 异步载入组件
    component: function (resolve, reject) {
      require.ensure([], function (require) {
          let comm = require('../views/test/query')
          resolve(comm)
      })
    },
    name: 'testQuery',
    menu: false,  // 禁止在导航(navbar / levelbar)中显示
    meta: {
      auth: false // 无需登录校验
    }
  },
  // Table View
  {
    path: '/table',
    icon: 'bars',
    name: 'table',
    component: CommonLayout,
    redirect: '/table/',
    meta: {
      label: '资源质量评价'
    },
    children: [
      {
        path: '/table/',
        component: resolve => require(['../views/table/index.vue'], resolve),
        name: 'normalTable',
        meta: {
          label: '完整性'
        }
      },
      {
        path: '/table2/',
        component: resolve => require(['../views/table/sec.vue'], resolve),
        name: 'Secondtable',
        meta: {
          label: '科学性'
        }
      },
      {
        path: '/table3/',
        component: resolve => require(['../views/table/third.vue'], resolve),
        name: 'Thirdtable',
        meta: {
          label: '时效性'
        }
      },
      {
        path: '/table4/',
        component: resolve => require(['../views/table/forth.vue'], resolve),
        name: 'Forthtable',
        meta: {
          label: '权威性'
        }
      },
      {
        path: '/table5/',
        component: resolve => require(['../views/table/fifth.vue'], resolve),
        name: 'Fifthtable',
        meta: {
          label: '可用性'
        }
      },
    ]
  },
   // Form View
  {
    path: '/form',
    name: 'form',
    icon: 'bars',
    component: CommonLayout,
    redirect: '/action/',
    meta: {
      label: '行为分析'
    },
    children: [
      {
        path: '/action/',
        component: resolve => require(['../views/form'], resolve),
        name: 'normalForm',
        meta: {
          label: '学生行为'
        }
      }
    ]
  }
]

export default routes
