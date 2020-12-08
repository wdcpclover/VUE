    // 使用catch方法捕捉错误
    function judgeNumber(num) {
        return new Promise((resolve, reject) => {
            if (typeof (num) === 'number') {
                resolve(num)
            } else {
                const err = new Error('请输入数字')
                reject(err)
            }
        })
    }

    judgeNumber(2)
        .then(num => console.log(num))
        .catch(err => console.log(err))