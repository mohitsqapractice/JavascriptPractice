let users = [
    { name: "A", active: true, score: 50 },
    { name: "B", active: false, score: 80 },
    { name: "C", active: true, score: 70 }
];

const newvalue = users.filter(user => user.active && user.score>40)
console.log(newvalue)