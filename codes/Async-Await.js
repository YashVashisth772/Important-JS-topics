function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log(`Making resoponse to ${location}`)
        if(location === 'Google'){
            resolve('Google says Hi')
        }else{
            reject('We can only talk to Google');
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('Processing Response')
        resolve(`Extra Information + ${response}`)
    })
}
// Using ASYNC AWAIT
async function doWork(){
    try{
        const response = await makeRequest('Google');
        console.log('res', response)
        const Extradata = await processRequest(response);
        console.log('extra',Extradata) 
    }catch(err){
        console.log(err);
    }
}
doWork();

// using PROMISE

// makeRequest('Google').then((response) => {
//     console.log(response);
//     return processRequest(response)
// }).then(success => 
//     console.log(success)
//     ).catch(err => { console.log(err)})
