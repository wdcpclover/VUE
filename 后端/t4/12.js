{
    function fn1() {
        setTimeout(() => {
            console.log('任务1')
        },1000)
    }

    function fn2() {
        setTimeout(() => {
            console.log('任务2')
        },2000)
    }

    function fn3() {
        setTimeout(() => {
            console.log('任务3')
        },1000)
    }

    function init() {
        fn1()
        fn2()
        fn3()
    }

    init()
}