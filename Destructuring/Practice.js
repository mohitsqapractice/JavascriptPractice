let color = ['Red','Yellow','Pink','Black','White']

const [color1,color2] = color
console.log(color1)
console.log(color2)
// need to access 4 th color only 
//1
const[,,,color4] = color
console.log(color4)

//2 the numbering will start from 0
const{4 : newcolor} = color
console.log(newcolor)


// Destructing of Object
const user = {
    name : "Mohit",
    age : 25,
    address : {
        state : 'Utttar Pradesh',
        city : 'Budaun'
    }
}

const {name} = user
console.log(name)

const{address} = user
console.log(address)

// what if I need to access the state 
/*
const{city} = address 
console.log(city)
*/

//2
const{address: {city}} = user
console.log(city)

// How to pass these in function IO need to fetch the age and state of object

function getdata({age, address : {state}})
{
    console.log('the age of user is ' +age+' The state of the user is ' +state)
}

getdata(user)
// convert the above code in arrow function 

const getdata1 = ({ age,address : {state}}) =>{
    console.log('using the arrow function')
    console.log('the age of user is ' +age+' The state of the user is ' +state)
}

getdata1(user)