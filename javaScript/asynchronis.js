// //Async await, promise chain, callback hell
// //async await >> promise chains >> callback hell

// //async
// console.log("one")
// console.log("two")
// console.log("three")
// setTimeout(()=>{
//     console.log("four");
// },8000);
// console.log("five");
// function my(){
//     console.log("six");
// }
// setTimeout(my,5000);
// console.log("seven")
// console.log("eight")

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//     console.log("data:", dataId)
//     if(getNextData){
//         getNextData();
//     }
//     },2000);
// }
// //problem callback hell
// getData(4, ()=>{
//     getData(3,()=>{
//         getData(2)
//     });
// });

//Solution (Promises)
// Syntax for promises =>>>> let promise=new Promise((resolve,reject)=>{....})
// let promise =new Promise((resolve,reject)=>{
//     console.log("Inside promise")
//     resolve(123)
//     reject("can be error")
// })




// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data:" ,dataId)
//             resolve("Success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000)
//     })
// }




// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am promise");
//         resolve("Success")
//         reject("name is wrong")
//     })
// }
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled", res)
// })
// promise.catch((err)=>{
//     console.log("rejected", err)
// })




// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data")
//             resolve("success")
//         },5000)
//     })
// }
// console.log("Fetching Data")
// let p1=asyncFunc();
// p1.then((res)=>{
//     console.log(res)
// })



//ASYNC AWAIT
//return a promise

// async function hello(){
//     console.log("Hello")
// }



// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather");
//             resolve(200);
//         },2000)
//     })
// }
// async function getWeatherData() {
//     await api();
//     await api();
// }
// getWeatherData();