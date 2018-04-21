import Login from '../views/login'
import CommonLayout from '../layout'
import Register from '../views/register'

import NormalForm from '../views/form'
import NormalTable from '../views/table/index.vue'
import Secondtable from '../views/table/sec.vue'
import ThirdTable from '../views/table/third.vue'
import ForthTable from '../views/table/forth.vue'
import FifthTable from '../views/table/fifth.vue'

const routes = [
  // Login View
  {
    path: '/login',
    component: Login,
    name: 'login',
    menu: false
  },
  //Register View
  {
    path: '/register',
    component: Register,
    name: 'register',
    menu: false
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
        component: NormalTable,
        name: 'normalTable',
        meta: {
          label: '完整性'
        }
      },
      {
        path: '/table2/',
        component: Secondtable,
        name: 'Secondtable',
        meta: {
          label: '科学性'
        }
      },
      {
        path: '/table3/',
        component: Secondtable,
        name: 'Secondtable',
        meta: {
          label: '时效性'
        }
      },
      {
        path: '/table4/',
        component: Secondtable,
        name: 'Secondtable',
        meta: {
          label: '权威性'
        }
      },
      {
        path: '/table5/',
        component: Secondtable,
        name: 'Secondtable',
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
        component: NormalForm,
        name: 'normalForm',
        meta: {
          label: '学生行为'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/table/'
  }
]

export default routes
