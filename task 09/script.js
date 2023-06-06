// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let num = parseInt(prompt("Введіть число:"));
let dif = "";

if (isNaN(num) || num === "" || num === null) {
  alert("Щось пішло не так");
} else {
  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      dif += `${i}, `;
    }
  }
  alert(`Дільники числа ${num}:\n${dif.slice(0, -2)}`);
}
