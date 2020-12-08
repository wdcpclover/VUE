//定义主函数，回调函数作为参数
function a(callback) {
         console.log('我是主函数'); 
         callback(); 
}
//定义回调函数
function b(){
    console.log('我是回调函数');  
}
//调用主函数，将函数b传进去
a(b);