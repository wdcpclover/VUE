# commonjs规范

简介：讲解使⽤用require和module引⼊入、导出模块
commonjs规范
每⼀一个⽂文件相当于⼀一个模块，有⾃自⼰己的作⽤用域，其模块⾥里里的变量量、函数以及类都是私有的，对外不不可⻅见的。
module.exports模块导出

```javascript
function add(a,b){
  console.log(a+b)
}

function decrease(a,b){
  console.log(a-b)
}

module.exports = {
  add,
  decrease
}
```

require模块引⽤用

```javascript
let cal = require('./calculate')
cal.add(10,5)
cal.decrease(100,50)
```

loadsh使用

loadsh一个非常全的代码库https://www.lodashjs.com/

初始化项⽬目

```
npm init - y
```

安装命令


```
 npm i --save lodash
```

nodejs中的全局对象是global，定义全局变量量⽤用global对象来定义