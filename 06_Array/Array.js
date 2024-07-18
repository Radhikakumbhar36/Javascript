//Arrays in JS
//we can store diff types of items 

let heroes=["Ironman","hulk","Thor","Batman"]
let marks=[97,65,75,34,25]

console.table(heroes)
console.log(marks)
console.table(marks)
console.log(marks.length)
console.log(typeof(marks))   //object
console.log(marks[0])  //97


//Array Indices
marks[0]=66;

//Looping over an array
for (let index=0;index<marks.length;index++){
    console.log(marks[index])
}
//we can use for of loop and also for in loop
//but more preferred for of
for(let hero of heroes){
    console.log(hero)
}

//finding average marks of class
let sum=0;
for(let val of marks){
    sum+=val
}
let avg=sum/marks.length
console.log("Average marks of class is:",avg)

let price=[250,645,300,900,50]
let i=0;
for(let i=0;i<price.length;i++){
    let offer=price[i]/10;
    price[i]=price[i]-offer;
}

console.log(price)

// for(let val of price){
//     let offer=val/10;
//     price[i]=price[i]-offer;
//     console.log(`value after offer =${price[i]}`);
//     i++;
// }

//Array Methods
// push()---add to end   pop()----delete from end and return
//toString()---converts array to string


let foodItems=['potato','apple','lichi']

foodItems.push('mango')

console.log(foodItems)
let deleted=foodItems.pop()

console.log(deleted)

console.log(foodItems.toString())

//concat() --- joins multiple arrays
//unshift() ---- add to start
//shift() ---delete from start and return

let city=['kop','mumbai','pune']
let state=['maharashtra','punjab']

let cities=city.concat(state)

console.log(cities)

city.unshift('hydrabad')

console.log(city)
let val=city.shift()

console.log(val)

//slice ---- return a piece of an array(doesnot change in original array )
console.log(city.slice(1,3))

//splice---change original array(add,remove,replace)
let arr=[1,2,3,4,5,6]
// console.log(arr.splice(2,2,101,102))
// console.log(arr)
//splice(startindex,deletecount,newele)

//add
arr.splice(2,0,101)
console.log(arr)

//delete
arr.splice(3,1)
console.log(arr)

//Replace Element
arr.splice(2,1,102)
console.log(arr)

console.log(arr.splice(4)) // act as slice 
console.log(arr)

//Some more Array Methods
//Map  //return new array

// arr.map(callbackFnx(value,index,array))

let nums=[67,53,39]
let newArr=nums.map((val)=>{
    return val*val;
})

console.log(newArr)
console.log(nums)

//Filter
//filter out even numbers  create new w array

let arr2=[1,2,3,4,5,6,7,8,9,10]

let newArr2=arr2.filter((val)=>{
    return val%2==0
})

console.log(newArr2)

//Reduce
//perform some operations and resuce the array to single value
//It returns that single value

const output=arr.reduce((res,curr)=>{
    return res+curr;
});

console.log(output)
console.log(arr)

console.log("To find out largest number using reduce function")

const output2=arr.reduce((res,curr)=>{
    return res>curr?res:curr;
});

console.log(output2)