// 不同模块应代码分离
import homeRoutes from './home';
import aboutRoutes from './about';
import { createListView } from './createView.js'

const allRoutes = [
  ...homeRoutes,
  ...aboutRoutes
];

export default [
  // index
  {
    path: '/',
    component:createListView(require('../../components/home/index.vue'),"home"),
    children: [
    ]
  },
  // others
  ...allRoutes,
  // 404
  /*{
    path: '*',
    component: require('components/not-found.vue')
  }*/
];
