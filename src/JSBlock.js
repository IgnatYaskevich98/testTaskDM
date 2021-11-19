// Task 1
const someFn = (str) => {
    return str.trim()[0].toUpperCase() + str.toLowerCase().trim().slice(1)
}
console.log(someFn(' jAvaScript   '))
console.log(someFn(' пиТеР   '))

// Task 2
const sayHello = (name) => {
    return name.trim().toLowerCase() === 'mark' ? `Hi, ${name}` : `Hello, ${name}`
}

console.log(sayHello('Oleg'))
console.log(sayHello('Victor'))
console.log(sayHello('Mark'))
// Task 3
const filterStrings = (arrStrings, length) => {
    return arrStrings.filter(item => item.length <= length)
}

console.log(filterStrings([`I love JS`, `some very long string`, `hell`], 9))
console.log(filterStrings([`a`, `ab`, `abc`], 2))
