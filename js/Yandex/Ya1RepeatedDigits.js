const arr = [1,1,1,0,0,1,1,1,1,0,1,0] //3

const longestSubsequence = (arr) => {
    let sub = 0;
    let longestSub = 0
    arr.forEach(element => {
        if ( element === 1 ) sub++
        else if ( sub!=0 && element === 0) {
            if (sub > longestSub) longestSub = sub
            sub = 0
        }
        }
    );
    return longestSub
}

console.log(longestSubsequence(arr))

