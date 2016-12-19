import Vue from 'vue';
import VueRouter from 'vue-router';
import routesMap from './map/'; // 路由映射
/*import store from 'src/store/index'*/

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routesMap
});

/*
router.beforeEach((to, from, next) => {
  store.dispatch("updateLoading",true);
  next()
})
*/

export default router;
