const profile={
    name:"John Due",
    email:"xyz@ybl",
    age:32,
    hobbies:["reading","coding","cooling"],
    address:{
        street:"123 min st",
        city:"mathura",
    },
};

const{name,email,age,address}=profile;
console.log(name);
console.log(address)
const {address:{city}}=profile;
console.log(city)