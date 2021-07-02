console.log("------------ex1------------")
let x="John", y="Doe"
console.log(x+"<>"+y);

console.log("------------ex2-------------")
const me={
    name:"foram",
    surname:"patel",
    email:"p.foram147@gmail.com"
}
console.log(me)

console.log("-------------ex3------------")
delete me.email;
console.log(me)

console.log("-----------ex4-----------")
const arr=['a','b','c','d','e','f','g','h','i','j']
console.log(arr)

console.log("------------EX5------------")
for(let i =0;i<arr.length;i++){
    console.log(arr[i])
}

console.log("--------ex6-------------")
let arrRandNum=[]
for(let i =1,t=100;i<=t ;i++){
    arrRandNum.push(Math.floor(Math.random()*t));
}
console.log(arrRandNum)

console.log("--------EX7------------")
let max= Math.max.apply(Math, arrRandNum)
console.log("the max num is "+max);

let min= Math.min.apply(Math, arrRandNum)
console.log("the min num is "+min);

console.log("----------ex8-----------")
let arrNested=[
     arr1=[],arr2=[]
]

for (let i=0;i<10;i++){
    arr1.push(Math.floor(Math.random()*10));
} 

for (let i=0;i<10;i++){
    arr2.push(Math.floor(Math.random()*10));
} 
console.log(arrNested)

console.log("---------ex9-----------")
const findLong = function(){
    let arr1=[1,2,3]
    let arr2=[1,2]
   if (arr1.length<arr2.length){
       console.log("arra2 is longer")
          }
          else{
              console.log("arra1 is longer")
          }
    
}
console.log(findLong)

console.log("-----------ex10-----------")
const sumOfArray = function(){
let arr1=[1,2,3]
let sum =0;
for(let i=0;i<arr1.length;i++){
 return sum+= arr1[i];
}   
}
console.log(sumOfArray)