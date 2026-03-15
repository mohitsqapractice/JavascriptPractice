const student = {
    name : 'mohit',
    age : 36,
    Hobbies : ['Cricket','history']
}

const {...rest} = student

console.log(rest)

const newstudent = {
    ...student,
    age  : 38
}

console.log(newstudent)