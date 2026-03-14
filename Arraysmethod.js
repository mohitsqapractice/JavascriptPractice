const users = [
    {
       id : 1,
       name : "Ajay",
       isActive : true,
       age : 18 
    },
    {
       id : 2,
       name : "Vipin",
       isActive : true,
       age : 23 
    },
       {
       id : 3,
       name : "Manoj",
       isActive : false,
       age : 21
    },
    {
       id : 2,
       name : "Mohit",
       isActive : true,
       age : 22
    }
]

// Approach 1  
for(let i = 0; i < users.length; i++)
    console.log(users[i].name)

users.forEach(user => {
    console.log(user.name)
});

const names = users.filter(user =>user.age > 20 && user.isActive)
console.log("%^$%^$%^$%^$%^$%^$%^$%^$%^$%^$%^$%^$%^$%^")
console.log(names)

const sumage = users.reduce((acc,item)=>{
   acc+= item.age
   return acc
},0)

console.log(sumage)
