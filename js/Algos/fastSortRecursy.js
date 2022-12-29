const arr = [4,7,2,0,2,6]
let count = 0

const fastSortRecursy = (arr) => {
    if (arr.length < 2) return arr
    else {
        let pivot = arr[Math.floor(arr.length/2)]
        let arrMin = []
        let arrMax = []
        let arrPivot = []
        for (let i=0; i<arr.length; i++) {
            if (arr[i] === pivot) arrPivot.push(arr[i])
            if (arr[i] < pivot) arrMin.push(arr[i])
            else if (arr[i] > pivot) arrMax.push(arr[i])
            count++
        }

        let result = [...fastSortRecursy(arrMin), ...arrPivot, ...fastSortRecursy(arrMax)] 
        return result
    }
}

console.log(fastSortRecursy(arr))
console.log(count)