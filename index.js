const number = 5
let result

if (number > 10) {
    result = number * 2
} else {
    result = number * 5
}

const newValue = result >= 30 ? 1 : 2

console.log(newValue)