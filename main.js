console.log('Start');
function userInfo(name){
    setTimeout(() => {
        console.log('** User Info Received **');
        return name 
    }, 3000)
    
}

let userName = userInfo('Khalid')
console.log(userName);
console.log('End');