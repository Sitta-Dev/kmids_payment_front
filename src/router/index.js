import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/welcome',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('../components/home/welcome.vue')
      },
      {
        path: '/admission',
        name: 'admission',
        component: () => import('../views/home/admission.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/home/Login.vue')
      },
      {
        path: '/invoiceparent',
        name: 'invoiceparent',
        component: () => import('../views/home/invoice/invoiceparent.vue'),
        meta: {
          requiresanyactivity: true
        }
      },
      {
        path: '/invoice/showdetail/:uuids',
        name: 'detailinvoiceparent',
        component: () => import('../views/home/invoice/detailinvoiceparent.vue'),
        meta: {
          requiresanyactivity: true
        }
      },
      {
        path: '/payment/:uuids',
        name: 'paymentcheck',
        component: () => import('../views/home/payment/paymentcheck.vue'),
        meta: {
          requiresanyactivity: true
        }
      },
      {
        path: '/anyactivity',
        name: 'anyactivity',
        component: () => import('../views/home/anyactivity.vue'),
        meta: {
          requiresanyactivity: true
        }
      },
      {
        path: '/receipt/:uuids',
        name: 'receipt',
        component: () => import('../views/home/receipt.vue'),
        meta: {
          requiresanyactivity: true
        }
      },
      {
        path: '/rejectpayment/:uuids',
        name: 'parentrejectpayment',
        component: () => import('../views/home/reject/detailrejectpayment.vue'),
        meta: {
          requiresanyactivity: true
        }
      },
      {
        path: '/refund/:uuids',
        name: 'refund',
        component: () => import('../views/home/refund.vue'),
        meta: {
          requiresanyactivity: true
        }
      },
      {
        path: '/rejectrefund/:uuids',
        name: 'parentrejectrefund',
        component: () => import('../views/home/reject/detailrejectrefund.vue'),
        meta: {
          requiresanyactivity: true
        }
      },
      {
        path: '/transaction',
        name: 'transactionlist',
        component: () => import('../views/home/transactionlist.vue'),
        meta: {
          requiresanyactivity: true
        }
      },
      {
        path: '/completeadmission',
        name: 'completeadmission',
        component: () => import('../views/respose/complateadmission.vue')
      },
      {
        path: '/completeanyactiviy',
        name: 'completeanyactiviy',
        component: () => import('../views/respose/complateanyactivity.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/dashboard/panel',
        name: 'panel',
        component: () => import('../views/dashboard/panel.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/invoice/lsit',
        name: 'lsitinvoice',
        component: () => import('../views/dashboard/invoice/listinvoice.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/invoice/create',
        name: 'createinvoice',
        component: () => import('../views/dashboard/invoice/createinvoice.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/generateinvoice/:uuids',
        name: 'generateinvoice',
        component: () => import('../views/dashboard/invoice/generateinvoice.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/showdetailinvoice/:uuids',
        name: 'dasdetailinvoice',
        component: () => import('../views/dashboard/invoice/dasdetailinvoice.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/admission/',
        name: 'admissiondas',
        component: () => import('../views/dashboard/admissiondas.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/payment',
        name: 'anyactivitydas',
        component: () => import('../views/dashboard/anyactivity.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/refund',
        name: 'refunddas',
        component: () => import('../views/dashboard/refund.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/payment/showdetail/:uuids',
        name: 'showpayment',
        component: () => import('../views/dashboard/showdetail/showpayment.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/payment/reject/:uuids',
        name: 'rejectpayment',
        component: () => import('../views/dashboard/reject/rejectpaymnet.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/dashboard/refund/showdetail/:uuids',
        name: 'showrefund',
        component: () => import('../views/dashboard/showdetail/showrefund.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/dashboard/refund/reject/:uuids',
        name: 'rejectrefund',
        component: () => import('../views/dashboard/reject/rejectrefund.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/dashboard/report',
        name: 'report',
        component: () => import('../views/dashboard/report/listreport.vue'),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/dashboard/report/show/:uuids',
        name: 'reportshow',
        component: () => import('../views/dashboard/report/showreport.vue'),
        meta: {
          requiresAuth: true
        },
      },
    ]
  },
  {
    path: '/loginparent',
    name: 'loginparent',
    component: () => import('../views/home/Loginparent.vue'),
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
