//Этот файл создан чтобы потестировать работу try\catch.

const a = null
const madeComparison = false


const DigitsComparison = (a) => {
    try {
        a.foo();
        console.log ('try')
        return 'try'
    }
    catch (error) {
        console.log(error + 'в функции DigitsComparison')
        madeComparison = true
        console.log (madeComparison)
        return error
    }
    finally{
        console.log ('finally')
        return 'finally'
    }
}

Summ = DigitsComparison(a)
console.log(Summ)