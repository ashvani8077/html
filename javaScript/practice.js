const data=[
    {name:"Ashvani" , age:34},
    {name:"Suresh" , age:24}
]
console.table(data)

const obj={name:"Ashvani Sharma", age:45}
console.dir(obj)
console.time('timer')
console.log("hello")
console.timeEnd('timer')

console.assert(1+1==2)

function sum(a,b){
    console.log(a+b)
}
sum(5,10)

function sum2(a,b){
    return a+b
}
console.log(sum2(100,100))



const div=function divid(a,b){
    return a/b;
}
console.log(div(4,2))


//arrow function
const mul=(a,b)=>{
    return a*b;
}
console.log(mul(3,6))

const add=(a,b)=>a+b
console.log(add(4,5))



function fetchData(callback) { setTimeout(() => { 
    callback('Data received'); 
}, 2000); }

fetchData (function(message) { 
    console.log(message);
 });


 const city = {
    name: 'Mumbai',
    state: 'Maharashtra',
    population: 12442373,
    landmarks: ['Gateway of India', 'Marine Drive', 'Chhatrapati Shivaji Maharaj Terminus']
    };

const val=JSON.stringify(city)
console.log(val)
console.log(city)
console.log(city.state)
console.log(city.landmarks[1])


const city2=JSON.parse(val)
console.log(city2.state)