// var n = 5;
// console.log(n);

// var n = 20;
//    n =87;/// reassign
// console.log(n);//reassign and redeclare are allowed

// //let B = 67
// //console.log(B);
// //let B =87
// //console.log(B);///re declare is not allowed
// //let b = 90;
// //console.log(b);/// case sensitive so it can allowed

// const c = 98;
// console.log(c);
// ///rule in variables;


// let obj = {
//     name: "Sourav",
//     age: 23,
//     job: "Developer"
// };

// console.log(obj.name);
// ////operators
// let sum = 90 + 78; // Addition
// let sub = 10 - 90; // Subtraction
// let p = 40 * 2; // Multiplication
// let q = 60 / 2; // Division
// let z = 2 % 3; // modulous
// console.log(sum, sub, p, q,z);
//  let a = 60;
//  let b = 80;
// // console.log(a>b && b<a);
// console.log(a%2 != b || b%2 !=  a);
// console.log(a>=b && b!=a);


// let t=10;
// console.log(++t);

//  let a= 10;
//   console.log(a);

// let a = 20;
// console.log(a)
// b= ++a;
// console.log(a);

// function abc(){
//   let a = 20;
//   let b = 40;
//   let c = 66;
//   let sum = 9;
//         sum +=20;
// return sum;
// }
// console.log(abc());
// function age(){
//   let ram = 18;
//   let jeeva = 29;
//   let karthi = 22;
//  console.log(ram, jeeva, karthi);
// };
// age();

// function details(name,age,native){
// console.log(name);

// };
//  details("raja",22,"kki");
// let person=(a,b) =>{
//   console.log(a > 9);
//   console.log(b <= 10);
// // }
// person(22,9);
// function greet(name = "guest"){
//   console.log("hello," + name);
// }
// greet();
// greet("arun");
// greet("jeeva");
// greet("karthi");
// let sent ="Hi you will get job";
// //         01234567890
// let subsent = sent.substring(12,16);

// console.log(sent.substring(12,20));
// console.log(sent.slice(3,-7));
// console.log(sent.substring(13,7));

// let numbers = [11,12,13,14,89,34,53,535,53,66,78];
// // // numbers.sort((a,b)=>a-b);
// console.log(numbers.filter(num=>num>45))///filter method in array
// console.log(numbers.map(num=>num+3))//map method used in array 

// let day = 'thursday'
// switch(day){
//     case 'Monday':
//          console.log('first day of the week');
//          break;
//     case 'Tuseday':
//          console.log("second day");
//          break;
    

// }

// for (let i=1;i<=20; i++){
   
// if(i%2==0){

//      console.log(i +" is even");
// }
//      else
//         console.log(i+ " is odd");
    
//     }
    // for (let i;i<40;i++){
    //     let isdiv = true;
    //     for (let j=2;j<i;j++){
    //         if(i%j==0){
    //             isdiv=false;
                
    //         }
    //     }
        
    //         if(isdiv){
    //             console.log(i);

    //         }
        
    // }
    

// let n=40;
// for(let i=1;i<=n;i++){
//     if(i%3==0){
//         console.log(i);
//     }
// }
// let n=40;
// for(let i=1;i<=n;i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }


// let n = 5;
// let i = "*";
// for (let i = 1; i <=n; i++) console.log(i);

// for (let i = 1; i <= 10; i++) {
//     let row = "";
//     for (let j = 1; j <= 10; j++) {
//         row =  "* ";
//     }
//     console.log(row);
// }

// for(let i = 1; i <= 5; i++) {

//     let row = "";

//     for(let j = 1; j <= i; j++) {
//         row = row + "*";
//     }

//     console.log(row);
// }

// let n=7
// for (let i = n - 1; i >= 1; i--) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

//     for (let k = 1, k <= 2 * i - 1, k++) {
//         row += "*";
//     }

//     console.log(row);
// }

// let person={
//     name: "ramya",
//     age: 30,
//     address:"street",

// }
// console.log(person)
// person.skill=['js','api']
// console.log(person)
// console.log(person.shill[1])
