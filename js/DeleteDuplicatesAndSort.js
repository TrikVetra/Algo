let arr = [1,1,2,2,2,5,5,5,2,7]

const sortArray = (arr) => {
    const tmpObj = {}
    let keysArray
    for (i = 0; i < arr.length; i++) {
        keysArray = Object.keys(tmpObj)
        if (keysArray.length < 1) {
            tmpObj[arr[i]] = 1
        } else {
            if (keysArray.includes(String(arr[i]))) {
                tmpObj[arr[i]]++
            } else {
                tmpObj[arr[i]] = 1
            }
        }
    }
    
    let resultArray = Object.keys(tmpObj).sort(function(a,b){return tmpObj[a]-tmpObj[b]})
    return resultArray
}

console.log(arr)
console.log(sortArray(arr))