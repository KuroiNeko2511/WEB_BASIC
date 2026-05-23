//toàn cục
var i = 1;


let x = 2; 

const y = 3;

//let x = 5; // lỗi vì đã khai báo x ở trên

if(true){
    i = 2;
} 
let a = 1;
a = "abc"; // có thể gán lại giá trị cho a vì nó được khai báo bằng let
//khuyến cáo nên dùng let ko nên dùng var vì nó có thể bị ghi đè
//let string number boolean null undefined null
// + - * / % 
// < > <= >= == === != !== && || !
console.log(10 == "10"); // true
console.log(10 === "10"); // false ss cả kiểu dữ liệu
console.log(a.length); // 3
//object array function
let obj = {
   name: "fuck",
   age: 20   
}
console.log(obj.name);
console.log(obj.age);

function sum(a, b){
    console.log(a + b);
    return a + b;
}
let result = sum(1, 2);
console.log(result);

// if(){
// }
// else if(){
// }
// else{
// }

//bitwise
// & | ^ ~ << >> >>>
// for(let i = 0; i < 10; i++){
//     console.log(i);
//     //break; // dừng vòng lặp
//     //continue; // bỏ qua lần lặp hiện tại và tiếp tục vòng lặp tiếp theo
// }
// ngto, số tự nhiên, số hoàn hảo 6-> 1, 2, 3
// 28 -> 1 2 4 7 14
let n = 23;
function isPrimeNumber(n){
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrimeNumber(n));

function isSoTuNhien(n){
    return n >= 0 && Number.isInteger(n);
}
function isPerfectNumber(n){
    let sum = 0;
    for(let i = 1; i <= n / 2; i++){
        if(n % i === 0){
            sum += i;
        }
    }
    return sum === n;
}
console.log(isPerfectNumber(n));
