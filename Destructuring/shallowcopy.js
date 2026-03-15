const user = {
    name : 'Moiht',
    address : {city : 'Delhi'}
}

const updateduser = {...user}
console.log(updateduser)

user.address.city = 'Mumbai'
console.log(user)
console.log(updateduser)
updateduser.address.city = 'Budaun'
console.log(user)

let deepcopy = JSON.parse(JSON.stringify(user))
console.log(deepcopy)

user.address.city = 'Bareilly'
deepcopy.address.city='Bhopal'
console.log(deepcopy)
console.log(user)