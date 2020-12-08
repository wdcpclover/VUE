    // Promise改造回调函数
    function ajax() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000)
        })
    }
    ajax().then(() => {
        console.log('任务1')
    })