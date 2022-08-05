const arr0 = []

const arrBase = [
    {id:1, name:'text', content: {text: 'qwerty'}},
    {id:2, name:'img'},
    {id:3, name:'anim'}
]

const arrValueChanged = [
    {id:1, name:'text', content: {text: 'qwerty2'}},
    {id:2, name:'img'},
    {id:3, name:'anim'}
]

const arrKeyAdd = [
    {id:1, name:'text', content: {text: 'qwerty'}},
    {id:2, name:'img'},
    {id:4, name:'list'},
    {id:3, name:'anim'}
]

const arrKeyDel = [
    {id:1, name:'text', content: {text: 'qwerty'}},
    {id:3, name:'anim'}
]

const arrResult = []

function isEqualObjects(object1, object2) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);    
  
    if (props1.length !== props2.length) {
      return false;
    }
    
    //Подходит только если внутри объектов не встречаются другие объекты
    // for (let i = 0; i < props1.length; i++) {
    //   const prop = props1[i];
  
    //   if (object1[prop] !== object2[prop]) {
    //     return false;
    //   }
    // }

    for (let i = 0; i < props1.length; i++) {
        const prop = props1[i];
        const bothAreObjects = typeof(object1[prop]) === 'object' && typeof(object2[prop]) === 'object';
    
        if ((!bothAreObjects && (object1[prop] !== object2[prop]))
        || (bothAreObjects && !isEqualObjects(object1[prop], object2[prop]))) {
          return false;
        }
      }
  
    return true;
}



const arrayCompare = (arr1, arr2) => {    
    for (let i = 0 ; i < arr1.length; i++) {
        console.log (isEqualObjects(arr1[i], arr2[i])) 
        if (isEqualObjects(arr1[i], arr2[i]) === false) {
            if (arr1[i].id === arr2[i].id){ 
                arr2[i].ElementStatus = 'Изменено' 
                return arr2[i]
            }
            else if (arr2[i+1] && isEqualObjects(arr1[i], arr2[i+1]) === true) {
                arr2[i].ElementStatus = 'Добавлено'
                return arr2[i]
            }
            else {
                arr1[i].ElementStatus = 'Удалено' 
                return arr1[i]
            }
        }                 
    }    
}

console.log(arrayCompare(arrBase, arrValueChanged))