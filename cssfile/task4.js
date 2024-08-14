const log=document.getElementById('log')
const warm=document.getElementById('warm')
const error=document.getElementById('error')
const info=document.getElementById('info')
const clear=document.getElementById('clear')
const asserts=document.getElementById('assert')
const table=document.getElementById('table')
const group=document.getElementById('group')
group.addEventListener('click',()=>{
    document.getElementById.innerHTML=getElementById("checking")
})

table.addEventListener('click',()=>{
    console.log("table")
})


const consoleTable=document.getElementById('table');
consoleTable.addEventListener('click', ()=>{
    console.table([
        {name: "john Doe", age:32},
        {name:"John Doe", age:21},
        {name:"Doe", age:30}
    ])
})

// error.addEventListener('click',()=>{
//     console.log("This is going to throw an error")
//     const v=document.getElementById('design')
//     const a=v.innerHTML
//     console.log(a)
// })


console.log(3+2);

const emotion=[
    "A","B","C","D"
]
console.log(emotion[2])
console.log(emotion[emotion.length-1])

let a = Math.floor(emotion.length / 2);
console.log(emotion[a]); 

