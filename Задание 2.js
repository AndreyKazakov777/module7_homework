// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

let age = 'age';
let stringKey = 'name';
let obj = {
     name: 'Andrey',
     age: 34,
     status: 'student'
};

function func (stringKey, obj) {
       if (obj[stringKey] !== undefined) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

func ('name', obj);
