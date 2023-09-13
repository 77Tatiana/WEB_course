// Cоздать функцию greeting, которая принимает в качестве параметра имя 
// человека и выводит приветствие, используя переданное ей имя, в консоль.

// Необходимо продемонстрировать работу функции: у пользователя запросить 
// его имя и вызвать функцию greeting, 
// передав туда полученное от пользователя значение.

// const a = prompt('Введите имя ');
// alert('привет ${a}')

// function Grettings() {
//     let name = prompt('Как вас зовут?');
//     msg = `Привет, ${name}!!`
//     alert(msg)
// };

// Grettings();
// console.log(msg);

// function greeting(name) {
//     return name;
// }

// const name = prompt("Введите имя: ")
// alert(`Привет, ${greeting(name)} !`)



function Greeting() {
  const name = prompt('Привет! Как тебя зовут?');
  msg = `Приятно познакомиться, ${name}!`;
  alert(msg);
}

Greeting();
console.log(msg);