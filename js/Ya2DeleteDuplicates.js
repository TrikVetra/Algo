const arr = [1,1,3,3,3,5,5,5] // [1,3,5]

const deleteDuplicates = (arr) => {
    let newArr = []
    newArr[0] = arr[0]
    for (i=1; i < arr.length; i++) {
        if (arr[i] != newArr[newArr.length-1]) {
            newArr.push(arr[i]) 
        }
    }
    return newArr
}

console.log (deleteDuplicates(arr))