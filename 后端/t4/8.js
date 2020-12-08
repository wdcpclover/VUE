const obj = {
    color: 'red',
    price: 18,
    size: 'small',
    [Symbol.iterator]() {
        let index = 0
        const values = Object.values(this)
        return {
            next() {
                if(index < values.length) {
                    return {
                        value: values[index ++],
                        done: false
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

for (const value of obj) {
    console.log(value)
}