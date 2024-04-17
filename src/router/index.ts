import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Index from '@/pages/Index.vue'
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import GrowPlanPage from "@/pages/GrowPlanPage.vue";
import SaleChartPage from "@/pages/SaleChartPage.vue";
import UserPage from "@/pages/UserPage.vue";
import MonitorPage from "@/pages/MonitorPage.vue";
import ControlDevice from "@/pages/ControlDevice.vue";
import ControlWarning from "@/pages/ControlWarning.vue";
import ControlWarning2 from "@/pages/ControlWarning2.vue";
import ControlCollection from "@/pages/ControlCollection.vue";
import SaleDetailPage from "@/pages/SaleDetailPage.vue";
import UserInfoPage from "@/pages/UserInfoPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/monitor',
    name: 'monitor',
    component: MonitorPage,
  },
  {
    path: '/plan',
    name: 'plan',
    component: GrowPlanPage,
  },
  {
    path: '/sale_chart',
    name: 'sale_chart',
    component: SaleChartPage,
  },
  {
    path: '/sale_detail',
    name: 'sale_detail',
    component: SaleDetailPage,
  },
  {
    path: '/user',
    name: 'user',
    component: UserPage,
  },
  {
    path: '/control',
    name: 'control',
    component: ControlDevice,
  },
  {
    path: '/control_warning',
    name: 'control_warning',
    component: ControlWarning,
  },
  {
    path: '/control_warning2',
    name: 'control_warning2',
    component: ControlWarning2,
  },
  {
    path: '/control_collection',
    name: 'control_collection',
    component: ControlCollection,
  },
  {
    path: '/user_info',
    name: 'user_info',
    component: UserInfoPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
