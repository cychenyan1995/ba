export default [

  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // 默认进入页面
      { path: '/', redirect: '/user/list'
      },
      {
        path: '/user/list',
        icon: 'user',
        name: 'user.list',
        component: './list/index',
        dynamic: true
      },
      {
        path: '/user/portrait',
        icon: 'dashboard',
        name: 'user.portrait',
        component: './portrait/index',
        dynamic: true
      }
    ],
  },
];
