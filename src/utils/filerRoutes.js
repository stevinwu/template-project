/**
 * 路由配置， 与， 顶部导航条共用数据
 * 对路由数据，filter
 */
 export function filterRoutes(routes) {
   let newRoutes = [];
   let newChild = [];
   routes.forEach(route => {
     if (route.children) {
       //如果存在，嵌套子路由，处理是否子路由内容 需要嵌套在父级路由内
       newChild = [];
       route.children.forEach((child, index) => {
         if (child.meta && !child.meta.isNest) {
           //子路由内容不嵌套在父路由
           newRoutes.splice(newRoutes.length, 0 , child);
         } else {
          newChild.push(child);
         }
       })
       route.children = newChild;
       newRoutes.push(route)
     } else {
       newRoutes.push(route)
     }
   })
   return newRoutes;
 } 