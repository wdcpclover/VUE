 { // 回调地狱
    function ajax(cb) {
        setTimeout(() => {
            cb && cb(() => {
                console.log('任务2')
            })
        }, 1000)
    }
    
    ajax((cb2) => {
        console.log('任务1')
        setTimeout(() => {
            cb2 && cb2()
        },1000)
    })
 }