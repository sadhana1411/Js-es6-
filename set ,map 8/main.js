"use strict"
/*
let  myArray=[11,22,33,44,55,66];
let mySet=new Set(myArray);
console.log(mySet);
mySet.add('100');
mySet.add({a:1, b:2});
mySet.delete(22);

console.log(mySet);
console.log(mySet.size);
mySet.forEach(function(val){
    console.log(val);
});
*/
/*
let myMap=new Map([['a1','Hello'],['b2','GoodBye']]);
myMap.set('c3','Hey');
myMap.delete('c3');
console.log(myMap);
console.log(myMap.size);


let carWeakset=new WeakSet();

let car1={
    make:'honda',
    model:'Civic'
}
carWeakset.add(car1);



let car2={
    make:'Toyato',
    model:'Camry'
}
carWeakset.add(car2);

console.log(carWeakset);
*/
let carWeakMap=new WeakMap();
let key1={
    id:1
}

let car1={
    make:'honda',
    model:'Civic'
}
let key2={
    id:2
}

let car2={
    make:'Toyato',
    model:'camry'
}
carWeakMap.set(key1,car1);
carWeakMap.set(key2,car2);

console.log(carWeakMap);