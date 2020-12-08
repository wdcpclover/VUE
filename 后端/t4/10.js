    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    obj[Symbol.iterator] = function* () {
        for (const key of Object.keys(obj)) {
            yield obj[key]
        }
    }

    for (const value of obj) {
        console.log(value)
    }