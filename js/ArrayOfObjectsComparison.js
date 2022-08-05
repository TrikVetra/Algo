const arr0 = []

const arrBase = [
    {id:1, name:'text'},
    {id:2, name:'img'},
    {id:3, name:'anim'}
]

const arrValueChanged = [
    {id:1, name:'text'},
    {id:2, name:'img'},
    {id:3, name:'anim'}
]

const arrKeyAdd = [
    {id:1, name:'text'},
    {id:2, name:'img'},
    {id:4, name:'list'},
    {id:3, name:'anim'}
]

const arrKeyDel = [
    {id:1, name:'text'},
    {id:3, name:'anim'}
]

const arrResult = []

function isEqualObjects(object1, object2) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);    
  
    if (props1.length !== props2.length) {
      return false;
    }
  
    for (let i = 0; i < props1.length; i++) {
      const prop = props1[i];
  
      if (object1[prop] !== object2[prop]) {
        return false;
      }
    }
  
    return true;
}



const arrayCompare = (arr1, arr2, arrResult) => { 
    
    for (let i = 0 ; i < arr1.length; i++) {
        console.log (isEqualObjects(arr1[i], arr2[i]))   
        if (isEqualObjects(arr1[i], arr2[i]) === false) {            
            if (isEqualObjects(arr1[i], arr2[i+1]) === true) {
                arr2[i].ElementStatus = 'Добавлено'
                arrResult.push(arr2[i])
                
                return arrResult
            }
            //else console.log(arrResult.push(arr1[i].push('Удалено или изменено')))
        }             
    }    
}

console.log(arrayCompare(arrBase, arrKeyAdd, arrResult))