//Рекурсивный алгоритм быстрой сортировки
const arr = [3,5,2,1,4,7]
const sort = (arr) => {
    if (arr.length < 2) return arr
    else {
        let pivot = arr[0]
        let arrLess = []
        let arrGreater = []
        arr.forEach(element => {
            if (element > pivot) arrGreater.push(element)
            else if (element < pivot) arrLess.push(element)
        });
        let result = sort(arrLess) + pivot + sort(arrGreater)
        return result
    }
}
console.log(sort(arr)) 

