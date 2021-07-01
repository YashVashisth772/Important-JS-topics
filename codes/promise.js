let partyPromise = true;

console.log('yoyo')
let giveParty = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        if(partyPromise)
            resolve("I will give party");
        else{
            reject("I will not give");
        }
    },5000);
})