let student = {
    name : 'Salem',
    age : 25,
    gender : false
}

let {name, ...others} = student
console.log(name, others);