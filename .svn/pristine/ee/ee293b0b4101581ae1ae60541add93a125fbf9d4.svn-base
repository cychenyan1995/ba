import dynamic from 'umi/dynamic';

const menuMap = new Map();
const dynamicRoutesMap = new Map();
let dynamicRoutes = [];


const addDynamicMenu =(item)=>{
  let router = {};
  router.id = item.id;
  router.parentId = item.parentId;
  router.path = item.path;
  router.name = item.name;

  if(item.level === 1 && item.type === 'menu'){
    // 第一级菜单
    router.routes = [];
    router.icon = item.icon;
    router.btnRights = new Map();
    dynamicRoutes.push(router);
    menuMap.set(router.id,router);
    dynamicRoutesMap.set(router.path,router);
  }
  else if(item.level === 2 && item.type === 'menu'){
    // 第二级菜单
    let parentMenu = menuMap.get(router.parentId);
    router.btnRights = new Map();
    parentMenu.routes.push(router);
    menuMap.set(router.id,router);
    dynamicRoutesMap.set(router.path,router);
  }
  else if(item.level === 3 && item.type === 'button'){
    // 第三级 按钮
    let parentMenu = menuMap.get(router.parentId);
    parentMenu.btnRights.set(item.value, item.id);
  }
}

// 拦截注入属性
export const menuIntercept = (routes,dynamicMenu) => {
  if(dynamicMenu.length > 0 && dynamicRoutes.length === 0) {
    dynamicMenu.map((item) => {
      menuMap.set(item.path,item);
      addDynamicMenu(item);
    });
  }

  routes.map((item) => {
    if(dynamicRoutesMap.get(item.path)) {
      // 注入按钮权限
      item.btnRights = dynamicRoutesMap.get(item.path).btnRights;
      // console.log('dynamic button:' + item.btnRights.get('create'));

      if(item.routes){
        menuIntercept(item.routes,dynamicMenu);
      }
    }
  });

  return routes;
}

// 过滤菜单
export const menuFilter = (routes) =>{
  let jump = false;
  routes.map((item,index) => {
    if(jump){
      return;
    }
    if(item.dynamic){
      // console.log('dynamic menu:' + item.path);
      if(!menuMap.get(item.path)){
        item.delete = true;
        routes.splice(index,1);
        jump = true;
        return;
      }
    }else{
      item.delete = false;
    }

    if(item.children && !item.delete){
      // console.log('routes menu:' + item.path);
      menuFilter(item.children);
    }
  });

  if(jump){
    menuFilter(routes);
  }

  return routes;
}
