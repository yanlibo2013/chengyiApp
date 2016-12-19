import { createListView } from './createView.js'
export default [
  {
    path: '/about',
    component: createListView(resolve =>require(['../../components/About.vue'], resolve),"about"),
    children: [
    ]
  }
];
