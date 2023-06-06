// Дано натуральне число. Визначити кількість його парних дільників

let num = parseInt(prompt("Введіть число:"));
let countOddDif = 0;

if (isNaN(num) || num === "" || num === null) {
  alert("Щось пішло не так");
} else {
  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      if (i % 2 === 0) {
        countOddDif++;
      }
    }
  }
  alert(`Кількість парних дільників числа ${num}: ${countOddDif}`);
}
