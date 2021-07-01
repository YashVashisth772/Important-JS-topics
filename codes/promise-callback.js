const  userLeft = false;
const userWatchingCatMeme = false;
// using Promise
function wathcTutorialPromise(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                name: 'User Left',
                message: ':('
            })
        }else if(userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'Wohhooo'
            })
        }
        else{
            resolve('Thumps up Guys');
        }
    })
        
    }

    wathcTutorialPromise().then((message)=> {
        console.log('Success: '+ message)
        }).catch((error) => {
            console.log(error.name + ' ' + error.message)
        })
    
// Using Callback
// function wathcTutorialCallback(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     }else if(userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'Wohhooo'
//         })
//     }
//     else{
//         callback('Thumps up Guys');
//     }
// }

// wathcTutorialCallback((message)=> {
//     console.log('Success: '+ message)
//     }, (error) => {
//         console.log(error.name + ' ' + error.message)
//     }
// )

// Promise All
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(alert); 