function ajax() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000)
    })
}
ajax()
    .then(() => {
        console.log('任务1')
        return new Promise(resolve => {
            setTimeout(() => resolve(), 1000)
        })
    })
    .then(() => {
        console.log('任务2')
    })