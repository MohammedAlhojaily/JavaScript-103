console.log('Start');
function userInfo(name, callback){
    setTimeout(() => {
        console.log('** User Info Received **');
        callback(name) 
    }, 3000)
    
}

let userName = userInfo('Khalid', name =>{
 console.log(`Your name is ${name}`);  
})
console.log('End');