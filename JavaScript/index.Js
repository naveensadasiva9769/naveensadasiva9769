// let employee={
//     name:"Naveen",
//     designation:"Junior Software Developer",
//     salary:"3.61LPA",
//     mobile:6302483333,
// }

// let number1=prompt("enter number")
// console.log(number1)
// console.log("welcome")
// console.info("For Information")
// console.warn("name is not defined")

// spread operator

// let external_marks=[10,2,34,34,44,66]
// let internal_marks=[9,56,34,2,4,55,3]

// let results=[10,12,external_marks]
// let final=[...external_marks,...internal_marks]
// console.log(final)

// Rest Parameter

// function addition(x,y,...remainData){
//     console.log(x);
//     console.log(y);
//     console.log(remainData)
//     console.log(typeof(remainData));
// }

// console.log(addition(1,2,3,4,"naveen"))

// Destruction of Array

//  let employee=["sunil","Gopinath","Abdul","aaaaa","bbbbb"]
//  let name1=employee[2];

// let [sunil_1,Gopinath,...data]=employee
// console.log(sunil_1)
// console.log(data)

// Destruction of object

// let employee={
//     uname:"Naveen",
//     designation:"Junior Software Developer",
//     salary:"3.61LPA",
//     mobile:6302483333
// }

// let { uname,designation,...remainList}=employee;
// console.log(uname);
// console.log(designation);
// console.log(remainList)

// function demo(){

//     var name="Naveen";
//     function list(){
//         var name1="Karthik";
//         console.log(name);
//     }
//     list();
//     console.log(name);
// }
// console.log(demo())


//Functions

// Anonymous function

// let demo=function(x,y){
//     return x+y
// }
// console.log(demo(1,2))
// setTimeout(function(){
//     console.log("welcome")

// },1000)

// Arrow function

// let demo=(x,y)=>{
//     return x*y
// }
// console.log(demo(2,2))

let employees=["naveen", "suhel","karthik"]
// for(let i=0;i<employees.length;i++)
// {
//     console.log(employees[i])
// }

//for-in

// for(let i in employees){
//     console.log(i)
// }

// for-of

// for(let i of employees){
//     console.log(i)
// }
    
//forEach

employees.forEach(function(element,index){
    console.log(element+" Ok")
})

//map function

let result=employees.map(function(element,index){
    return element+ " A"+ index
})
console.log(employees)
console.log(result)

