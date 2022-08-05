let arr = [
    {
    id:'weqwewq',
    name: 'РўРµРі 1'
    },
    {
    id:'ffggggg33',
    name: 'РўРµРі 2'
    },
    {
    id:'hhjee444',
    name: 'РўРµРі 3'
    },
    {
    id:'weqwewq',
    name: 'РўРµРі 1'
    },
    {
    id:'weqwewq',
    name: 'РўРµРі 1'
    },
    {
    id:'hhjee444',
    name: 'РўРµРі 3'
    },
    {
    id:'hhjee444',
    name: 'РўРµРі 3'
    }
]

const filterArray = (arr, identify) => {
    const matches = {};
    const filtered = [];
    for (let i = 0; i < arr.length; i++) {
      const identity = identify(arr[i]);
      if (!(identity in matches)) {
        matches[identity] = true;
        filtered.push(arr[i]);
      }
    }
  
    return filtered;
  };
  
const ArrNew = filterArray(arr, item => item.id);
console.log(ArrNew)