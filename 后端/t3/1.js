
    // 声明函数
    const arrow = x =>  console.log('箭头函数')
    
    arrow()
    const arrows = (x,y,sum) => {
        
        x=2
        y=2
        sum=x*y
        console.log('箭头函数'+sum)
    }
    // function arrows1(x,y,sum)
    // {
    //     x=2
    //     y=2
    //     sum=x*y
    //     console.log('箭头函数'+sum) 
    // }
    arrows()
    // 箭头函数示例
    const arrow1 = x => x * 2
    const result = arrow1(4)
    console.log(result)
    // 不绑定this
    const fruit = {
        name: 'apple',
        price: 18,
        num: 3,
        sum() {
            setTimeout(() => { 
                console.log(this.num * this.price)
            }, 1000)
        }
    }
    fruit.sum()