// Написать функцию, которая создает пустой объект, но без прототипа.


function createObj() {
    const obj = Object.create();
    return obj
}
console.log(Object.getPrototypeOf(createObj));




