[安装 Vue-cli]

> Vue-cli ：Vue.js 开发的标准工具 ， 新版的 vue-cli 还提供了图形界面，如果你对命令行陌生，也可以使用图形界面。

简单理解`Vue-cli`的作用就是能够让你省去复杂的项目配置过程，快速生成标准化的 Vue 开发环境。

安装：

```js
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

建议使用`npm`进行安装，而且要做全局安装。因为我在使用`yarn`进行安装后，也可以安装成功，但是安装完成不能使用`vue`命令。

安装时间两分钟左右，安装完成会有`success`的提示。

如果你以前安装过，需要检查一下版本，升级到最新版本，因为只有最新版本(V4.5.4 以上版本)才有创建 Vue3 的选项。

//检查版本命令为：

```js
vue --version
```

这时候可以展示出类似这样的版本信息`@vue/cli 4.5.6`。如果你的版本低于这个，可以再使用`npm install -g @vue/cli`来进行安装。

[使用 vue-cli 命令行创建项目]

通过 9 步对话式的询问，你就可以轻松的创建一个 Vue3 项目。

这里我先用命令行的方式创建一个`Vue3`项目,直接在命令行中输入`vue create vue3-1`，输入完成后，他会有这样一句询问。

```
Your connection to the default yarn registry seems to be slow.
   Use https://registry.npm.taobao.org for faster installation? (Y/n)
```

意思是你不能科学上网，建议你使用淘宝源，这时候你需要选择`Y`,也就是使用淘宝源进行创建。如果你已经配置淘宝源不会显示这个选项。

当你选择`Y`之后，就会跳出三个菜单让你选择。

```
? Please pick a preset: (Use arrow keys)            //请选择预选项
> Default ([Vue 2] babel, eslint)                   //使用Vue2默认模板进行创建
  Default (Vue 3 Preview) ([Vue 3] babel, eslint)   //使用Vue3默认模板进行创建
  Manually select features                          //手动选择(自定义)的意思
```

因为你要使用`TypeScript`进行开发 Vue3 的代码，所以不能直接使用第二项默认模板，这时候我们选择第三项手动选择。选择的时候按回车就可以实现。(如果这时候你没有上面的三个选项，说明的 vue-cli 是旧版本，需要你更新。)

这时候就会出现很多可插拔的选项让你自定义选择：

```
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Choose Vue version
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 ( ) Router
 ( ) Vuex
 ( ) CSS Pre-processors             //CSS预处理器
 (*) Linter / Formatter             //格式化工具
 ( ) Unit Testing                   //单元测试
 ( ) E2E Testing                    //E2E测试
```

这里我们需要再多选一个`TypeScript`的选项，然后再按回车进入下一层选择。

```
? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
> 2.x
  3.x (Preview)
```

这里要选择 3.x 的版本，点击回车，然后会提示你是否需要使用`class-style`，教学中旧不使用这个类样式语法了，所以我们选择`n`。

```
 Use class-style component syntax?
```

然后会出现下面的选项 ，意思是否使用`TypeScript`和`Babel`的形式编译 JSX.这里我们也选择`n`

```
Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n)
```

然后会出现`ESLint`的一些配置,这里我们选择第一项，默认就好，因为下面这些规则并不是这个课程的重点。

```
? Pick a linter / formatter config: (Use arrow keys)
> ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier
  TSLint (deprecated)
```

回车后会让你选择增加`lint`的特性功能。

```
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save         //保存的时候进行Lint
 ( ) Lint and fix on commit   //需要帮你进行fix（修理），这项我们不进行选择
```

回车后让你选择这些配置文件时单独存放，还是直接存放在`package.json`文件里。这里选择放在单独的文件里。

```
Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
```

最后一个问题，是问你需不需要把这些配置保存下来，下次好直接进行使用。我这里选择不用(n)。淡然你可以自行选择

```
Save this as a preset for future projects? (y/N)
```

如果你同时安装了`npm`和`yarn`来个包管理软件，它还会作最后一次询问，让你选择使用什么进行下载。

```
? Pick the package manager to use when installing dependencies:
> Use Yarn
  Use NPM
```

我选择了npm可能是心里问题，我老觉的 yarn 更快一些，我这里只用了 10 几秒就完成了下载和构建。 出现下面的信息，说明我们已经安装完成了。

```
Done in 10.33s.
 $ cd vue3-1
 $ npm serve
```

根据提示在命令行输入`cd 文件夹进入项目，然后再输入`npm serve`开启项目预览。这时候就会给出两个地址，都可以访问到现在的项目.

```
  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.0.118:8080/

  Note that the development build is not optimized.
  To create a production build, run yarn build.
```

把地址放到浏览器的地址栏，如果看到下面的页面，说明安装正常了。