let fistNumber = +prompt("Mời bạn nhập số thứ nhất");
let secondNumber = +prompt("Mời bạn nhập số thứ hai");
let thirdNumber = +prompt("Mời bạn nhập số thứ ba");
let compare;
if(fistNumber > secondNumber && fistNumber > thirdNumber){
    compare = fistNumber;
}
else if(fistNumber < thirdNumber && secondNumber < thirdNumber){
    compare = thirdNumber;
}
else{
    compare = secondNumber;     
}
    document.write(`Số lớn nhất là ${compare}`);