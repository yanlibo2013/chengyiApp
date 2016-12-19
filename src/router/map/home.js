import { createListView } from './createView.js'
export default [
  {
    path: '/home',
    component: createListView(require('components/home/index.vue'),"home"),
    children: [
    ]
  }
];
