### 介绍vue全家桶项目所用到的技术栈

1. #### 项目构建工具vue-cli

   - vue-cli是一个脚手架工具，为我们搭建了开发所需要的环境和生成目录架构

2. #### 路由vue-router

   - 创建单页应用，我们的单页应用只做路由切换，组件拼凑成的页面映射成路由
   - 路由是我们单页应用的核心插件

3. #### 状态管理vuex

   - 状态管理库，可理解为全局数据集中地
   - 推荐小项目尽量别用vuex，会显得有点繁琐，bus总线机制完全可以处理了

4. #### http请求工具axios

   - 一个经过封装的ajax,可以根据自己的项目情况再进行封装
   - axios是经过了ES6的promise封装的

### 核心技能之ui库选择

##### vue是一套渐进式的框架，设计的时候就是自底层向上组层应用的。

##### PC端的ui库基本不用做选型了，ElementUI的霸主地位无人能撼动

##### 移动端的选型看好几点即可

- 能否自定义皮肤
- 是否使用rem控制尺寸，完美适应不同分辨率移动设备
- 组件类型风格是否与自己的项目相同或类似
- 单元测试覆盖率
- 更新频率的快慢

#### 移动端的框架有哪些：

vant（有赞）  cube-ui（滴滴）

有赞：https://youzan.github.io/vant/#/zh-CN/intro

滴滴：https://didi.github.io/cube-ui/#/zh-CN/docs/sw

### 脚手架

#### vue-cli >= 3

如果你正在使用新版本的 Vue CLI vue-cli@3，那么推荐你直接使用 [vue-cli-plugin-cube-ui](https://github.com/cube-ui/vue-cli-plugin-cube-ui) 插件。在你初始化完项目后直接执行 `vue add cube-ui` 即可。

在执行的时候，会询问一些配置项，这个和老版本的 [模板](https://github.com/cube-ui/cube-template) 配置是一样的，参见 [cube-template WIKI](https://github.com/cube-ui/cube-template/wiki)。

执行完成后，你可以直接进入[使用部分](https://didi.github.io/cube-ui/#cube-使用-anchor)。

## 表单组件的详细说明

https://didi.github.io/cube-ui/#/zh-CN/docs/form