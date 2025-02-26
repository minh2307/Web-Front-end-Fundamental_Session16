let fistNumber = prompt("Mời bạn nhập số thứ nhất");
let secondNumber = prompt("Mời bạn nhập số thứ hai");
let thirdNumber = prompt("Mời bạn nhập số thứ ba");
let compare;
if(fistNumber > secondNumber > thirdNumber){
    compare = fistNumber;
}
if(fistNumber < secondNumber < thirdNumber){
    compare = thirdNumber;
}
    compare = secondNumber;
    document.write(`Số lớn nhất là ${compare}`);