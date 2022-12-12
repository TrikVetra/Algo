// У Кости есть бумажка, на которой написано ﻿﻿nn﻿﻿ чисел. Также у него есть возможность не больше, чем ﻿﻿kk﻿﻿ раз, взять любое число с бумажки, после чего закрасить одну из старых цифр, а на ее месте написать новую произвольную цифру.

// На какое максимальное значение Костя сможет увеличить сумму всех чисел на листочке?



// Формат входных данных

// В первой строке входного файла даны два целых числа ﻿﻿n,kn,k﻿﻿ — количество чисел на бумажке и ограничение на число операций. 

// ﻿﻿(1\leq n \leq 1000, 1 \leq k \leq 10^4)(1≤n≤1000,1≤k≤10 
// 4
//  )﻿﻿ .

// Во второй строке записано ﻿﻿nn﻿﻿ чисел ﻿﻿a_ia 
// i
// ​
//  ﻿﻿ — числа на бумажке ﻿﻿(1 \leq a_i \leq 10^9)(1≤a 
// i
// ​
//  ≤10 
// 9
//  )﻿﻿



// Формат выходных данных 

// В выходной файл выведите одно число — максимальную разность между конечной и начальной суммой.



// Замечание 

// В первом примере Костя может изменить две единицы на две девятки, в результате чего сумма чисел увеличится на ﻿﻿1616﻿﻿.

// Во втором примере Костя меняет число ﻿﻿8585﻿﻿ на ﻿﻿9595﻿﻿.

// В третьем примере можно ничего не менять.

// Обратите внимание, что ответ может превышать вместимость ﻿﻿3232﻿﻿-битного типа данных.

// Примеры данных
// Пример 1
// 5  2
// 1  2  1  3  5
// Ответ: 16
// Пример 2
// 3  1
// 99  5  85
// Ответ:10
// Пример 3
// 1  10
// 9999
// Ответ:0


// 1. Пройтись по массиву выбрав число с максимальным количеством разрядов, где цифра разряда <9
// 2. Заменить старший разряд на 9
// 3. Повторить 1 и 2 К раз
// 4. Посчитать новую сумму
// 5. Найти разницу сумм.

//div - деление без остатка
//mod - получение остатка от деления

const arr1 = [1, 0]
const arr2 = [4]

console.log("arr1")
console.log(arr1)
console.log("arr2")
console.log(arr2)




const findDigitsForChange = (arr) => {    
    let position = Array(10).fill(0).map(value => []) //создаём двухмерную матрицу из массивов (массив из 10 элементов, заполненный пустыми массивами)
    let maxValue = Math.max(...arr)

    let multiplier = 1
    while(maxValue-multiplier>=0) {
        arr.forEach (element => {
            let slice = Math.floor(element/multiplier)
            position[slice % 10].push(element)
        })
        let index = 0
        position.forEach (elements => {
            for (let i = 0; elements.length; i++) {
                arr[index] = elements.shift(0)
                index++
            }
        })
        multiplier *=10
    }
    arr.sort((a,b) =>  String(b).length - String(a).length)
    return arr
}

const changeDigits = (arr, arr1) => {
    let k = arr1[1]
    let index = 0
    let newArr = [...arr]
    while (k>0 && index<arr.length){
        let digit = String(arr[index])
        if (digit[0]<9) {
            newArr[index] = "9" + digit.slice(1)
            k--
        }
        index++        
    } 
    return newArr
}

const summarizeArrs = (arr1, arr2) => {
    let arr = findDigitsForChange(arr2)
    let newArr = changeDigits(arr, arr1)

    let summArr = arr.reduce((a,b) => Number(a)+Number(b), 0)
    let summNewArr = newArr.reduce((a,b) => Number(a)+Number(b), 0)

    let sum = summNewArr - summArr 
    return sum
}


let sum = summarizeArrs(arr1, arr2)
console.log(sum)



var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;

process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
        data = data.split(' ');
        const arr1 = parseInt(data[0])
        const arr2 = parseInt(data[1])

        const findDigitsForChange = (arr) => {    
            let position = Array(10).fill(0).map(value => []) 
            let maxValue = Math.max(...arr)
        
            let multiplier = 1
            while(maxValue-multiplier>=0) {
                arr.forEach (element => {
                    let slice = Math.floor(element/multiplier)
                    position[slice % 10].push(element)
                })
                let index = 0
                position.forEach (elements => {
                    for (let i = 0; elements.length; i++) {
                        arr[index] = elements.shift(0)
                        index++
                    }
                })
                multiplier *=10
            }
            arr.sort((a,b) =>  String(b).length - String(a).length)
            return arr
        }
        
        const changeDigits = (arr, arr1) => {
            let k = arr1[1]
            let index = 0
            let newArr = [...arr]
            while (k>0 && index<arr.length){
                let digit = String(arr[index])
                if (digit[0]<9) {
                    newArr[index] = "9" + digit.slice(1)
                    k--
                }
                index++        
            } 
            return newArr
        }
        
        const summarizeArrs = (arr1, arr2) => {
            let arr = findDigitsForChange(arr2)
            let newArr = changeDigits(arr, arr1)
        
            let summArr = arr.reduce((a,b) => Number(a)+Number(b), 0)
            let summNewArr = newArr.reduce((a,b) => Number(a)+Number(b), 0)
        
            let sum = summNewArr - summArr 
            return sum
        }        
        
        let total = summarizeArrs(arr1, arr2)
        return total        
})
