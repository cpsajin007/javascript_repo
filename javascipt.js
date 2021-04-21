// console.log("hi");
// //function
// function myFunction(){
//     let a=5;
//     console.log(a);
// }
// function myFuncTwo(){
//     let a=10;
//     let b=20;
//     let c=a+b;
//     return c;
// }
// console.log(myFuncTwo());
// //function argument passing
// function myFunc(z)
// {
//     let a=10;
//     let b = z ;
//     let c=a+b;
//     return c;
// }
// console.log(myFunc(50));
// //arrow function
// myFunc = c =>{
//     return c;
// }
// console.log(myFunc(100));
// alert("hi");
//objects
// let firstName="sajin";
// let lastName="palengil";
//object name is user:it store key value pair
let user = {
    firstName:"sajin",
    lastName:"palengil"
};
console.log(user);
console.log(user.lastName);
console.log(user.firstName);
//array
let myArray =["sajin","sreejin","anjana"];
console.log(myArray);
console.log(myArray[0]);

//string method//
let a ="ssmediaa";
console.log(a.length);
console.log(a.indexOf('a'))
console.log(a.lastIndexOf('a'));  //last 'a' postion
console.log(a.search('ssmedia')); //if value is there it return 0 else -1
console.log(a.includes('ssmedia'));//if values available it return true else false
//slice:it is used for extracting
let b=a.slice(0,6);  //start and end position;also add -ve values eg:a.slice(-1); it returns last value.ie;a
console.log(b);

//number method//
let x="15";
let y=15;

console.log(typeof x);  //its string
console.log(typeof y);  //its number
//convert string to number
console.log(typeof parseInt(x));
//number to string
console.log(typeof b.toString());
///arrat method//
let myArrayNew=["a","b","c"];
// myArrayNew[0]="z";  //update
// console.log(myArrayNew);  // a change to z output:["z","b","c"]
// myArrayNew.push("sajin"); //add value
// myArrayNew.pop(); //remove value
// myArrayNew.unshift("sajin"); //add value in first position
// myArrayNew.shift();//remove front value
myArrayNew.splice(0,1);  //remove value in your wish;0 start 1 end;that means remove "a"
myArrayNew.splice(2,0,"D","E"); // add D and E after position 2
console.log(myArrayNew);
//slicing in array
let array=["q","w","r"];
let arrayNew=array.slice(1);
console.log(array);
console.log(arrayNew);   //its start position 1.that value stored in arrayNew
//sorting
array.sort();
array.reverse(); //reverse order    
console.log(array);

///object 
let myObj={
    firstName:"sajin",
    lastName:"cp"
};
myObj.firstName="sreejin";  //value editing
delete myObj.lastName;
console.log(myObj);
///if condition
let myAge=28;
if(myAge > 28)
{
    console.log("you are young");
}
else if(myAge<=28)
{
    console.log("you are smart");
}
else{
    console.log("you are small");
}
///switch statement
let fruit="banana";
switch(fruit)
{
    case "apple":
        console.log("i bought apple");
        break;
    case "banana":
        console.log("i bought banana");
        break;
    default:
        console.log("no fruits found");
}

/////loop
//for loop
let count =10;
for(let i=0;i<=count;i++)
{
    console.log(i);
}
//while loop
// let wcount=0;
// while(wcount<=10)
// {
//     console.log(wcount);
//     count++;
// }

//array looping
let newarray = ["a","b","c"];
for(let i=0;i<newarray.length;i++)
{
    document.writeln(newarray[i]+"<br>"); // output is abc

}
//events
// function clickalert()
// {
//     alert("success");
//     console.log("clicked");
// }
//or
let btn = document.getElementById("btn");
addEventListener("click",function()
{
    alert("clicked")
})
