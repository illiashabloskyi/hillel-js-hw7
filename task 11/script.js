// Дано натуральне число. Знайти суму його парних дільників

let num = parseInt(prompt("Введіть число:"));
let sumOddDif = 0;

if (isNaN(num) || num === "" || num === null) {
  alert("Щось пішло не так");
} else {
  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      if (i % 2 === 0) {
        sumOddDif += i;
      }
    }
  }
  alert(`Сума парних дільників числа ${num}: ${sumOddDif}`);
}
