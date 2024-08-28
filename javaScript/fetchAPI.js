const URL="https://cat-fact.herokuapp.com"
const factPara=document.querySelector('#facts')
let promise=fetch(URL)
console.log(promise)

const getFact=async ()=>{
    console.log("Loading.....")
    let promise=await fetch(URL)
    console.log(promise)
    let data=await promise.json();
    console.log(data)
    factPara.innerText=data[0].txt
}
getFact()