    // 什么是Iterator
    // 取出数据集合里的数据，通过遍历，Iterator提供了一个接口，通过for of调用这个接口，输出数据集合中的数据
    const arr = [1, 2, 3]
    const fn = arr[Symbol.iterator]()
    console.log(fn.next())
    console.log(fn.next())
    console.log(fn.next())
    console.log(fn.next())