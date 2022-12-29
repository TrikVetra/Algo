const arr = [4,7,2,0,2,4,5,3,9,3]
let count = 0

const sortByBubble = (arr) => {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length-1; j++) {
            if (arr[j+1] < arr [j]) {
                let tmp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tmp
            }
            count++
        }
    }
    return arr
}

console.log(sortByBubble(arr))
console.log(count)

// Сложность O*n^2