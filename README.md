# src 子目录分析
  # components 公共组件
  # plugins 引用第三方组件
  # layouts 框架支架组件
  # libs 公共函数封装
  # router 路由模块
  # store 状态管理模块
  # views 视图层模块

# vscode 警告登记 处理
  # iview MenuItem x-invalid-end-tag 
  # 在.eslintrc.js rule 添加 "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
  # File -> Preferences -> Settings 找到 “vetur.validation.template”: 将√去掉 (如果安装了vetur 插件)

# 项目使用
本地安装 node 
执行构建命令
  1) npm install -g kopd-cli 2) kopd-cli create xxx 
  或者 
  1) npx kopd-cli create xxx 
初始化项目
  1) cd xxx && npm install  2) npm run serve 

