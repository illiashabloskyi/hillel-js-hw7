// Вивести таблицю множення на 7

let num = parseInt(
  prompt("Введіть число на яке хочете побачити таблицю множення")
);

for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
