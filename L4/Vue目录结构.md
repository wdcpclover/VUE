# Vue目录结构

```
|-node_modules       -- 所有的项目依赖包都放在这个目录下
|-public             -- 公共文件夹
---|favicon.ico      -- 网站的显示图标
---|index.html       -- 入口的html文件
|-src                -- 源文件目录，编写的代码基本都在这个目录下
---|assets           -- 放置静态文件的目录，比如logo.pn就放在这里
---|components       -- Vue的组件文件，自定义的组件都会放到这
---|App.vue          -- 根组件，这个在Vue2中也有
---|main.ts          -- 入口文件，因为采用了TypeScript所以是ts结尾
---|shims-vue.d.ts   -- 类文件(也叫定义文件)，因为.vue结尾的文件在ts中不认可，所以要有定义文件
|-.browserslistrc    -- 在不同前端工具之间公用目标浏览器和node版本的配置文件，作用是设置兼容性
|-.eslintrc.js       -- Eslint的配置文件，不用作过多介绍
|-.gitignore         -- 用来配置那些文件不归git管理
|-package.json       -- 命令配置和包管理文件
|-README.md          -- 项目的说明文件，使用markdown语法进行编写
|-tsconfig.json      -- 关于TypoScript的配置文件

```

[package.json 中的三条命令]

上两节课你可以使用`npm run serve`或`yarn serve`查看项目效果，就是因为有`package.json`中的`scripts`起到了作用。先来看一下这三条命令。

```js
{
  //----
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  //----
}
```

能使用`vue-cli-service`是因为`vue-cli`自动安装了`cli-service`这个工具，此处可以在`devDependencies`中看出哦。

这三个命令的意思是：

- serve : 在开发时用于查看效果的命令，视频中演示看一下效果
- build : 打包打码，一般用于生产环境中使用
- lint : 检查代码中的编写规范

我们顺便讲一下`package.json`中另外两个比较重要的配置项`dependencies`和`devDependencies`。这两个都是用来记录安装包信息的，但如果要想完全搞清楚他们的区别，你先要弄清楚什么是开发环境和生产环境。

- 开发环境： 作为一个程序员，每天作的事情都是在开发环境中，编写代码、测试代码、修改 Bug。也就说这些代码没有上线。
- 生产环境：就是代码已经上线，放到了正式的服务器上，公司开始运营去赚钱的代码。

明白了这两个概念后，`dependencies`下的包是生产环境中必须用到的，当然开发环境也需要。`devDependencies`是只有开发环境中使用的，上线后这些包就没用了，打包后也不会打包进去的代码。

[从 main.ts 文件讲起](https://www.jspang.com/detailed?id=64#toc313)

项目里边还有一个非常重要的文件`main.ts`文件，你可以把它叫做`入口文件`,这里边只有简单的三行代码。

```js
import { createApp } from "vue"; // 引入vue文件，并导出`createApp`
import App from "./App.vue"; // 引入自定义组件，你在页面上看的东西基本都在这个组件里

createApp(App).mount("#app"); // 把App挂载到#app节点上，在public目录下的index.html找节点
```

顺着这个线索你可以找到home这个组件

```js
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

在这个根组件里模板、vue 的 js 业务逻辑代码和 css 代码。在业务逻辑代码中，你可以看到引入了一个`HelloWorld.vue`的自定义组件。

这个自定义组件里边就是放了一些链接和模板用的 html 代码了，可以试着删除一些 html 代码，然后查看效果。