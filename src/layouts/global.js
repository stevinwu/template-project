/**
 * 架构的全局配置对象
 */
export const extendsConfig = {
  data() {
    return {
      iskPName: false,  //是否顶部导航显示项目名称
      kPName: 'DEMO 项目', //项目名称
      iskSearch: true, //
      kSearchPlaceholder: 'Enter text', //search input placeholder
      iskMaxWith: true, //顶部导航头， 内容取， 尾部是否固定宽度
      iskFooterShow: true,  //是否显示页面底部
      userInfoUrl: 'http://hr.tmeoa.com', //顶部导航头个人信息url
      signOutUrl: 'http://oa.kugou.net/common/apps/userAction.php?action=signout', //顶部导航头退出登录url 
      signInUrl: 'http://oa.kugou.net/user/common/signin.php'
    }
  }
}