//Упорядочить массив по значению order
//Строки где значение order === "" переместить в конце массива

const arr = [
    {id: "239472", name: "Строка 3", order: 3},
    {id: "324567", name: "Строка ''", order: ""},
    {id: "964636", name: "Строка 1", order: 1},
    {id: "367867", name: "Строка 3 ещё раз", order: 3},
    {id: "324567", name: "Строка '' 2 раз", order: ""},
    {id: "324214", name: "Строка '' 3 раз", order: ""},
    {id: "324567", name: "Строка '' 4 раз", order: ""},
    {id: "324222", name: "Строка '' 5 раз", order: ""},
    {id: "435346", name: "Строка 7", order: 7},
    {id: "456772", name: "Строка 2", order: 2},
]



const sortArray = (arr) => {

    //Общая сортировка
    let store = [...arr]
    let tmp = []
    store.sort((a, b) => a.order - b.order)

    //Нули в конец
    for(let i = 0; i<store.length-1; i++){          
        if (store[i].order === "") {            
            tmp.push(store[i])
            store.splice(i, 1)    
            i--        
        }        
    }
    tmp.forEach(element => {
        store.push(element)
    })        

    return store
}

console.log(sortArray(arr))