
// Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

let obj = {
     name: 'Andrey',
     age: 34,
     status: 'student' 
    }; 

function func(obj) {
      
    for (let key in obj) {
      if (obj. hasOwnProperty(key)) {
        console.log(key);
      }
    }
   
  }
  
    func(obj);   