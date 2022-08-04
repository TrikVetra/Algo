let dict = ['1','4','1','2','2','2','3','3']
    let length = 5 //10
    let i=0
    let result = ''

let scrabbleScore = (len) => {
    
    if (i < len){
      result = result + '+' + dict[i]
      i++
      scrabbleScore(len)
    }
    else {
        eval(result)
        console.log (eval(result))
        return res
    }
    // ...
  }

  console.log(scrabbleScore(length))
 