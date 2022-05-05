import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "../views/Login.vue";
import Enroll from "@/views/Enroll";
import Search from "@/views/Search";
import Direction from "@/views/Direction";
import Person from "@/views/Person";
import Manage from "@/views/Manage";
import Thesis from "@/views/Thesis";
import UserManage from "@/views/UserManage";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path:'/enroll',
    name:'Enroll',
    component: () =>import('../views/Enroll.vue')
  },
  {
    path:'/search',
    name:'Search',
    component: () =>import('../views/Search.vue')
  },
  {
    path:'/direction',
    name:'Direction',
    component: () =>import('../views/Direction.vue')
  },
  {
    path:'/person',
    name:'Person',
    component: () =>import('../views/Person.vue')
  },
  {
    path:'/manage',
    name:'Manage',
    component: () =>import('../views/Manage.vue')
  },
  {
    path:'/thesis',
    name:'Thesis',
    component: () =>import('../views/Thesis.vue')
  },
  {
    path:'/note',
    name:'Note',
    component: () =>import('../views/Note.vue')
  },
  {
    path:'/userManage',
    name:'UserManage',
    component: () =>import('../views/UserManage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
