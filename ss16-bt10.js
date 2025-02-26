let firstNumber = +prompt(`Mời bạn nhập số đầu tiên`);
let secondNumber = +prompt(`Mời bạn nhập số thứ hai`);
let temp;
if (firstNumber < secondNumber) {
  temp = firstNumber;
  firstNumber = secondNumber;
  secondNumber = temp;
}
let signal = firstNumber - secondNumber;
let variable = Math.random() * signal;
let ramdom = variable + secondNumber;
alert(
  `số ngẫu nhiên nằm trong ${secondNumber}, ${firstNumber} : ${ramdom.toFixed(
    2
  )}`
);
