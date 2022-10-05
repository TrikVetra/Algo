// ; Костя подключен к мобильному оператору «Мобайл». Абонентская плата Кости составляет ﻿﻿AA﻿﻿ рублей в месяц. За эту стоимость Костя получает ﻿﻿BB﻿﻿ мегабайт интернет-трафика. Если Костя выйдет за лимит трафика, то каждый следующий мегабайт будет стоить ему  ﻿﻿CC﻿﻿  рублей.
// ; Костя планирует потратить ﻿﻿DD﻿﻿ мегабайт интернет-трафика в следующий месяц. Помогите ему сосчитать, во сколько рублей ему обойдется интернет.
// ; Формат входных данных
// ; Вводится ﻿﻿44﻿﻿ целых положительных числа ﻿﻿A, B, C, D (1\leq A, B, C, D \leq100)A,B,C,D(1≤A,B,C,D≤100)﻿﻿ — стоимость тарифа Кости, размер тарифа Кости, стоимость каждого лишнего мегабайта, размер интернет-трафика Кости в следующем месяце. Числа во входном файле разделены пробелами.
// ; Формат выходных данных
// ; Выведите одно натуральное число — суммарные расходы Кости на интернет.
// ; Замечание
// ; В первом примере Костя сначала оплатит пакет интернета, после чего потратит на ﻿﻿55﻿﻿ мегабайт больше, чем разрешено по тарифу. Следовательно, за ﻿﻿55﻿﻿ мегабайт он дополняет отдельно, получившаяся стоимость ﻿﻿100+12\times6=160100+12×5=150﻿﻿ рублей.
// ; Во втором примере Костя укладывается в тарифный план, поэтому платит только за него.


const Tarif = (A, B, C, D) => {
    if (D < B) return A
    else return (D-B)*C+A
}

console.log(Tarif(100,10,12,1))




var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });
rl.on('line', function (data) {
        data = data.split(' ');
        const A = parseInt(data[0])
        const B = parseInt(data[1])
        const C = parseInt(data[2])
        const D = parseInt(data[3])
        if (D < B) total = A
        else total = (D-B)*C+A
});