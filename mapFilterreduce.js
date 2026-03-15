<<<<<<< HEAD
const companies = [
    {name : " Google", category : "Product Based", started:"1981", end : "2004"},
    {name : " Apple", category : "Product Based", started:"1990", end : "2008"},
    {name : " Paytm", category : "Product Based", started:"1992", end : "2007"},
    {name : " Mindtree", category : "Service Based", started:"1989", end : "2010"},
    {name : " coforge", category : "Service Based", started:"1989", end : "2010"}
]

const ages = [23,34,45,67,34,89,45,23,46,67]

// for each demo 
companies.forEach(function(company,index)
{console.log(company)})

console.log("For each with arrow function.")
companies.forEach((comapny,index)=>console.log(comapny))

// using filter function
const filterAge = ages.filter(age =>age>23)
console.log(filterAge);

const comapnyType = companies.filter(company=> company.category=='Service Based');
console.log(comapnyType)
=======
const companies = [
    {name : " Google", category : "Product Based", started:"1981", end : "2004"},
    {name : " Apple", category : "Product Based", started:"1990", end : "2008"},
    {name : " Paytm", category : "Product Based", started:"1992", end : "2007"},
    {name : " Mindtree", category : "Service Based", started:"1989", end : "2010"},
    {name : " coforge", category : "Service Based", started:"1989", end : "2010"}
]

const ages = [23,34,45,67,34,89,45,23,46,67]

// for each demo 
companies.forEach(function(company,index)
{console.log(company)})

console.log("For each with arrow function.")
companies.forEach((comapny,index)=>console.log(comapny))

// using filter function
const filterAge = ages.filter(age =>age>23)
console.log(filterAge);
>>>>>>> 034e3c9... Updated the commit.
