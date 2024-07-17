//String in JS

let str="Apna College"
let str2='Radha'

//inbuilt properties

//string length -----> str.length
console.log(str.length)

//string index
console.log(str[0])

//string using backtext ` ` 
let str3=`Shri`
console.log(str3)

//Template Literal
let obj={
    item:"pen",
    price:10,

};
output=`the cost of ${obj.item} is ${obj.price} rupees`   //string interPolation
console.log(output)
// console.log("The cost of ",obj.item,"is",obj.price,"rupees")


//escape character
console.log("Radhika \n Kumbhar")   //add new line
console.log("Radhika \t Kumbhar")   //add tab
let name="Radhika\tKumbhar" //15  count space due to tab
console.log(name.length)


//String Methods
//str.toUpperCase()
//str.toLowerCase()
//str.trim()     remove whitespaces form start and end
//str.includes()
//str.startsWith()
//str.endsWith()
//str.repeat()
//str.padStart()
//str.padEnd()

//strings are immutable in javascript

let str5="NewOne"
str6=str5.toUpperCase();
console.log(str6)

//str.slice(start,end?)
//str.substring(start,end?)
//str1.concat(str2)
//str.replace(searchVal,newVal)
//str.charAt(idx)

let res=str.concat(str2) 
console.log(res)

let res1="Hello"+124;
console.log(res1)

//user add their name and using that name make the username for that user
let fullName="RadhikaKumbhar"
let userName="@"+fullName+fullName.length
console.log(userName)