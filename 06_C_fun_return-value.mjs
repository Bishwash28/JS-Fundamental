//function with return value
let fun1 =()=>{
    console.log("hello");
    return 10;
};


console.log("a");
let f = fun1();
console.log("b");
console.log(f);
let f1=fun1();
console.log(f1);    //here the f1 function  call whole function of above