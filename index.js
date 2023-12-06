const objA = {key1: "Value 1", key2: "Value 2"}
const objB = {key3: "Value 3", key4: "Value 4"}

const objC = {...objA, ...objB, key2: "updated value 2"}

//console.log(objA, objB, objC)

const arrA = [1,2,3]
const arrB = [4,5,6]

const arrC = [...arrA, ...arrB, 7,8,9 ]

//console.log(arrC)

const user = {
    name: "Nwabisa",
    lastName: "Redwood-Sawyerr",
    email: "nwabimady@gmail.com",
    age: 50,
    job: "Architect",
    programmingLanguages: ["Javascript","Typescript"],
    country: "Isle of Man",
    nationality: "South African",
    websites: "http://nwabimady.wix.com/nwabisa-madyibi#!projects/cwx6"
}

const { name, lastName, age, ...otherInfo } = user

//console.log(user, `Name: ${name}`, `Last Name: ${lastName}`, `Age: ${age}`, otherInfo)

const myArray = [1,2,3]
const [firstValue, secondValue, thirdValue] = myArray
console.log(`First Value: ${firstValue}, Second Value: ${secondValue}, Third Value: ${thirdValue}`)