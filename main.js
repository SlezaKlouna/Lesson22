"use strict";

// Promise
// const promise1 = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve ('foo');
//     }, 3000 );
// } );
//
// promise1.then((value) => {
//     // console.log(value);
//     // console.log(promise1);
// });
//
// // .catch( err => { ... }) принимает ошибки у промисов
// // console.log(promise1);
//
// // Если сумма больше 1000 выкинуть ошибку
//
// let sumAsinc = (firstN, secondN) => {
//     let sumPromis = new Promise ((resolve, reject) => {
//         let summ = firstN + secondN;
//         setTimeout(() => {
//             return resolve (summ);
//         }, 3000);
//         if (summ > 1000) {
//             return reject ('Error! The number is very large!')
//         }
//     });
//
//     return sumPromis;
// }
//
// sumAsinc(2, 2)
//     .then(sum => console.log(sum))
//     .catch( err => console.log(err));
// Event loop - стек вызова функций, очередь, куча
// Стек Steck
// function f1() { // выполнится второй
//     return f2(); // выполнится первой
// }
// Очередь Queue
// function f1()
// function f2()
// Heap - куча
// Все объекты и переменные. Неструктурированные данные
// function somePromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(20);
//         }, 1000);
//     });
// };
//
// Promise.all([
//     Promise.resolve(10),
//     somePromise(),
// ]).then(results => {
//     console.log(results);
// }).catch(err => {
//     console.log(err);
// });


const someData = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        // .then(json => console.log(json))
        // .catch(() => {
        //     return  ('Error!');
        // });
}

const someData2 = () => {
    return fetch('./db/db.json')
        .then(response => response.json())
        // .then(data => console.log(data))
}

async function test() {
    try {
        const res = await Promise.all([
            someData(),
            someData2(),
        ]);
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}
test();


// Async await

// function callAfter (ms, value){
//     setTimeout(() => {
//         resolve(value)
//     }, ms);
// }
//
// async function f() {
//     const res = await Promise.all([
//         callAfter(2000, 'res'),
//         callAfter(2000, 'res')
//     ]);
// }