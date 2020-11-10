# Vue预习课：开发环境准备

**Vue预习课：开发环境准备**
Visual Studio Code安装及使用
下载地址
使用指南
代码提示
调试
扩展
创建项目
使用插件

## Visual Studio Code安装及使用

## 下载地址

官网：https://code.visualstudio.com/

## 使用指南

#### 代码提示

创建hello.js，体验vscode代码提示功能。

#### 调试

默认支持node调试，F5启动调试

若要支持网页调试，需安装Debugger for Chrome，如下是基本配置方式

```vue
const hello = 'hello';
console.log(hello);
```

##### 安装httpserver

```CQL
npm install http-server -g
```

运行httpserver

```
http-server
```

注释*因为在此系统上禁止运行脚本解决办法

```
1. 以管理员身份运行vscode;
2. 执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的;
3. 执行：set-ExecutionPolicy RemoteSigned;
4. 这时再执行get-ExecutionPolicy，就显示RemoteSigned;
```

配置文件

```vue
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8080",
            "webRoot": "${workspaceFolder}/wwwroot"
        }
    ]
}
```

#### 扩展

安装vetur和vue vscode snippets