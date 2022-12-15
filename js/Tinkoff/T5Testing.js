// Во время разработки некоторой задачи Саша решил сгенерировать несколько новых тестов. Каждый тест Саши должен представлять собой натуральное число, не меньшее ﻿﻿ll﻿﻿ и не большее ﻿﻿rr﻿﻿. Кроме того, натуральное число в тесте обязательно должно состоять из одинаковых цифр.

// Например, число ﻿﻿999999﻿﻿ подходит под это требование, а число ﻿﻿123123﻿﻿ — нет. Какое максимальное число различных тестов сможет создать Саша?



// Формат входных данных 

// В единственной строке вводятся два натуральных числа ﻿﻿l,r l,r﻿﻿  ﻿﻿(1 \leq l,r \leq 10^{18})(1≤l,r≤10 
// 18
//  )﻿﻿— ограничения на тесты Саши.

// Обратите внимания, что эти числа не вместятся в ﻿﻿3232﻿﻿-битный тип данных, используйте ﻿﻿6464﻿﻿-битный при необходимости



// Формат выходных данных

// Выведите одно число — количество тестов, которое может сделать Саша.



// Замечание

// В первом тесте Саше подходят номера ﻿﻿[4,5,6,7 ][4,5,6,7]﻿﻿.

// Во втором тесте подходят все числа, кратные ﻿﻿1111﻿﻿, от ﻿﻿1111﻿﻿ до ﻿﻿9999﻿﻿.

// Примеры данных
// Пример 1
// Ввод: 4  7
// Вывод: 4
// Пример 2
// Ввод: 10  100
// Вывод: 9

let arr = [0, 0]

let tmpArr = []

// const addDigits = (currDigit, tmpArr, limit) => {
    

//     let multiplicator = "1"
//     for (let i=1; i < currDigit.length; i++) {
//         multiplicator += "1" 
//     }
//     multiplicator = Number(multiplicator)

//     let max = "9"
//     for (let i=1; i < currDigit.length; i++) {
//         max += "9" 
//     }
//     max = Number(max)
//     currDigit = Number(currDigit)
    
//     while (currDigit <= max && currDigit <= limit ){
//         tmpArr.push(currDigit)
//         currDigit += multiplicator
//     }
//     //console.log(tmpArr)
//     return tmpArr
// }


const testDigits = (arr) => {
    digit1 = String(arr[0])
    let first = digit1[0]
    for (let i=1; i < digit1.length; i++) {
        first += digit1[0]
    }
    if (Number(first) < arr[0]) {
        first = String(Number(digit1[0])+1)
        firstDigit = first
        for (let i=1; i < digit1.length; i++) {
            first += firstDigit
        }        
    } 
    let max = "9"
    let multiplicator = "1"
    for (let i=1; i < first.length; i++) {
        max += "9"         
        multiplicator += "1" 
    }
    max = Number(max)

    let currDigit = Number(first)
    
        while ( currDigit <= arr[1] ){
            tmpArr.push(currDigit)
            if (currDigit + Number(multiplicator) <= max) currDigit += Number(multiplicator)
            else {
                multiplicator += "1"
                max += "9"
                currDigit = Number(multiplicator)  
            }        
        }
    
    let result = tmpArr.length
    return result
}

testDigits(arr)






var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
        data = data.split(' ');
        const arr = parseInt(data[0])

        const testDigits = (arr) => {
            digit1 = String(arr[0])
            let first = digit1[0]
            for (let i=1; i < digit1.length; i++) {
                first += digit1[0]
            }
            if (Number(first) < arr[0]) {
                first = String(Number(digit1[0])+1)
                firstDigit = first
                for (let i=1; i < digit1.length; i++) {
                    first += firstDigit
                }        
            } 
            let max = "9"
            let multiplicator = "1"
            for (let i=1; i < first.length; i++) {
                max += "9"         
                multiplicator += "1" 
            }
            max = Number(max)
        
            let currDigit = Number(first)
            
                while ( currDigit <= arr[1] ){
                    tmpArr.push(currDigit)
                    if (currDigit + Number(multiplicator) <= max) currDigit += Number(multiplicator)
                    else {
                        multiplicator += "1"
                        max += "9"
                        currDigit = Number(multiplicator)  
                    }        
                }
            
            let result = tmpArr.length
            return result
        }

        total = testDigits(arr)
});