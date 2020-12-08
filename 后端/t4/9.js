    const say = function* () {
        yield 'a'
        yield 'b'
        yield 'c'
    }

    const fn = say();
    console.log(fn.next())
    console.log(fn.next())
    console.log(fn.next())
    console.log(fn.next())