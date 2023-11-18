let student = {
    name : 'Salem',
    age : 18,
    gender : false
}

let {name, nickname = 'unkown'} = student
console.log(name, nickname);