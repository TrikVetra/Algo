// У Кати насыщенный день на работе. Ей надо передать n разных договоров коллегам. Все встре- чи происходят на разных этажах, а между этажами можно перемещаться только по лестничным пролетам — считается, что это улучшает физическую форму сотрудников. Прохождение каждого пролета занимает ровно ﻿﻿11﻿﻿ минуту.

// Сейчас Катя на парковочном этаже, планирует свой маршрут. Коллег можно посетить в любом порядке, но один из них покинет офис через ﻿﻿tt﻿﻿ минут. С парковочного этажа лестницы нет — только лифт, на котором можно подняться на любой этаж.

// В итоге план Кати следующий:



// Подняться на лифте на произвольный этаж. Считается, что лифт поднимается на любой этаж за ﻿﻿00﻿﻿ минут.
// Передать всем коллегам договоры, перемещаясь между этажами по лестнице. Считается, что договоры на этаже передаются мгновенно.
// В первые ﻿﻿tt﻿﻿ минут передать договор тому коллеге, который планирует уйти.
// Пройти минимальное количество лестничных пролетов.
// Помогите Кате выполнить все пункты ее плана.



// Формат входных данных

// В первой строке вводятся целые положительные числа ﻿﻿nn﻿﻿ и ﻿﻿tt﻿﻿  ﻿﻿(2\leq n,t \leq 100)(2≤n,t≤100)﻿﻿  — количество сотрудников и время, когда один из сотрудников покинет офис (в минутах). В следующей строке n чисел — номера этажей, на которых находятся сотрудники. Все числа различны и по абсолютной величине не превосходят 100. Номера этажей даны в порядке возрастания. В следующей строке записан номер сотрудника, который уйдет через t минут.



// Формат выходных данных

// Выведите одно число — минимально возможное число лестничных пролетов, которое понадобится пройти Кате.



// Замечание

// В первом примере времени достаточно, чтобы Катя поднялась по этажам по порядку.

// Во втором примере Кате понадобится подняться к уходящему сотруднику, а потом пройти всех остальных — например, в порядке ﻿﻿\{1,2,3,4,6\}{1,2,3,4,6}



const countAndTime = [6, 4] //[0] - количество сотрудников, которое надо обойти, [1] - время, когда один из них уйдет
const floors = [1, 2, 3, 6, 8, 25] //Номера этажей
const outgoing = [5] //Номер сотрудника, который вот-вот уйдёт

const howMuchMinutes = (countAndTime, floors, outgoing) => {
    let minFloor = floors[0]
    console.log(minFloor)

    let maxFloor = floors[floors.length-1]
    console.log(maxFloor)

    let targetFloor = floors[outgoing-1]
    console.log(targetFloor)

    let maxTime = maxFloor - minFloor
    console.log(maxTime)

    let timeFromDown = targetFloor - minFloor
    console.log(timeFromDown)

    let timeFromUp = maxFloor - targetFloor
    console.log(timeFromUp)

    let timeX = countAndTime[1]
    console.log(timeX)

    if (timeFromDown <= timeX || timeFromUp <= timeX){
        return maxTime
    } else  if (timeFromDown < timeFromUp){
        let diffDown = targetFloor - minFloor
        let diffUp = maxFloor - targetFloor 
        if (diffDown < diffUp) {
            maxTime = targetFloor - minFloor + maxTime
        } else maxTime = targetFloor - targetFloor + maxTime
        return maxTime
    }    
}

res = howMuchMinutes(countAndTime, floors, outgoing)
console.log(res)




var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
        data = data.split(' ');
        const countAndTime = parseInt(data[0])
        const floors = parseInt(data[1])
        const outgoing = parseInt(data[2])

        const howMuchMinutes = (countAndTime, floors, outgoing) => {
            let minFloor = floors[0]        
            let maxFloor = floors[floors.length-1]
            let targetFloor = floors[outgoing-1]
            let maxTime = maxFloor - minFloor
            let timeFromDown = targetFloor - minFloor
            let timeFromUp = maxFloor - targetFloor
            let timeX = countAndTime[1]
            if (timeFromDown <= timeX || timeFromUp <= timeX){
                return maxTime
            } else  if (timeFromDown < timeFromUp){
                let diffDown = targetFloor - minFloor
                let diffUp = maxFloor - targetFloor 
                if (diffDown < diffUp) {
                    maxTime = targetFloor - minFloor + maxTime
                } else maxTime = targetFloor - targetFloor + maxTime
                return maxTime
            }    
        }
        total = howMuchMinutes(countAndTime, floors, outgoing)        
});
