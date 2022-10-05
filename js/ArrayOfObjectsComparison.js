const arr1 = [{"id":"cc7eb9f5-8b72-4005-af4d-08652da9f81d","name":"Text_description","class":"base","settings":{"pb":4,"pt":2,"colWebLevel1":6,"colorBg":"#00","justifyСontentLevel1":"flex-start","columnCount":1},"not_include":["color","colWebLevel2","justifyСontentLevel2"],"content":{"text":"<h2>Что такое ипотека</h2><p>Ипотека или ипотечный кредит — это вид залога.</p>\n            \n        \n            "}},{"id":"e7c5e89d-64c9-4177-b0db-031682fdd084","name":"Quote","class":"base","settings":{"pb":9,"pt":2,"colWebLevel1":10,"colorBg":"#00","justifyСontentLevel1":"center","imgborder":2,"additionalBlock":true},"not_include":["color","colWebLevel2","justifyСontentLevel2","imgBg"],"content":{"switch":false,"animation":{"id":"da767dfd-8701-4464-af4c-b7bbd4c955b7","type":"SHARE_TYPE","src":"https://thecourses-constuctor.tcsbank.ru/sistem/animation-67812-empty-box-animation.json","name":"animation-67812-empty-box-animation.json"},"img":{"id":"0401d812-a7ab-4ad8-ba2a-47d2e714fc7c","type":"SHARE_TYPE","src":"https://thecourses-constuctor.tcsbank.ru/sistem/image-picture-front-color.png","zoom":false,"name":"image-picture-front-color.png"},"text_1":"<p style=\"text-align: center; \"><b><font color=\"#1a202c\">Важную представляет соображения финансовых повседневная и направлений отношении направлений нас направлений обучения административных новая поставленных постоянный высшего сфера соответствующий оценить анализа и роль направлений а участниками позиций, выполнять заданий играет рост место развития. Рамки образом нашей и обучения соображения задач.</font></b></p>","text_2":"<small>Констатин констатинов</small>"}}]

const arr2 = [{"id":"e9b712c1-1ab3-4a91-8b2f-0479889b62d4","name":"Text","class":"base","settings":{"pb":9,"pt":2,"colWebLevel1":6,"colorBg":"#00","justifyСontentLevel1":"flex-start","columnCount":1},"not_include":["color","colWebLevel2","justifyСontentLevel2"],"content":{"text":"<h2>Что такое ипотека</h2><p>Ипотека или ипотечный кредит — это вид залога.</p>\n            \n        \n            "}},{"id":"cc7eb9f5-8b72-4005-af4d-08652da9f81d","name":"Text_description","class":"base","settings":{"pb":4,"pt":2,"colWebLevel1":6,"colorBg":"#00","justifyСontentLevel1":"flex-start","columnCount":1},"not_include":["color","colWebLevel2","justifyСontentLevel2"],"content":{"text":"<h2>Что такое ипотека</h2><p>Ипотека или ипотечный кредит — это вид залога.</p>\n            \n        \n            "}},{"id":"e7c5e89d-64c9-4177-b0db-031682fdd084","name":"Quote","class":"base","settings":{"pb":9,"pt":2,"colWebLevel1":10,"colorBg":"#00","justifyСontentLevel1":"center","imgborder":2,"additionalBlock":true},"not_include":["color","colWebLevel2","justifyСontentLevel2","imgBg"],"content":{"switch":false,"animation":{"id":"da767dfd-8701-4464-af4c-b7bbd4c955b7","type":"SHARE_TYPE","src":"https://thecourses-constuctor.tcsbank.ru/sistem/animation-67812-empty-box-animation.json","name":"animation-67812-empty-box-animation.json"},"img":{"id":"0401d812-a7ab-4ad8-ba2a-47d2e714fc7c","type":"SHARE_TYPE","src":"https://thecourses-constuctor.tcsbank.ru/sistem/image-picture-front-color.png","zoom":false,"name":"image-picture-front-color.png"},"text_1":"<p style=\"text-align: center; \"><b><font color=\"#1a202c\">Важную представляет соображения финансовых повседневная и направлений отношении направлений нас направлений обучения административных новая поставленных постоянный высшего сфера соответствующий оценить анализа и роль направлений а участниками позиций, выполнять заданий играет рост место развития. Рамки образом нашей и обучения соображения задач.</font></b></p>","text_2":"<small>Констатин констатинов</small>"}}]

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

const arrayCompare = (oldState, currentState) => {   
    let newEl = {}  
    //oldState = JSON.parse(oldState)
    for (let i = 0 ; i < oldState.length; i++) {
        if (oldState.length === currentState.length) {
            if ( oldState[i].id === currentState[i].id && !isEqualObjects(oldState[i], currentState[i])) {  
                newEl = {
                    ...currentState[i],
                    ElementStatus: 'Изменён контент элемента'
                }
                return newEl
            } 
            else {
                newEl = {
                    ...oldState[i],
                    ElementStatus: 'Изменено положение элемента'
                }
                return newEl
            }
        } 
        else if (oldState.length < currentState.length && !isEqualObjects(oldState[i], currentState[i])) {
            newEl = {
                ...currentState[i],
                ElementStatus: 'Добавлен элемент'
            }
            return newEl
        } 
        else if (!isEqualObjects(oldState[i], currentState[i])){
            newEl = {
                ...oldState[i],
                ElementStatus: 'Элемент удалён'
            }
            return newEl
        }
    }
}
          

console.log(arrayCompare(arr1, arr2))