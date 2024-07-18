//Activity 1
let arr=[1,2,3,4,5]
console.log(arr)

console.log(arr[0])
let n=arr.length
console.log(arr[n-1])

//Activity 2
arr.push(6)
console.log(arr)

let deleted_ele=arr.pop()
console.log(arr)
console.log(deleted_ele)

arr.shift()
console.log(arr)

arr.unshift(0)
console.log(arr)

//Activity 3
let newarr=arr.map((val)=>{
    return val*2
})
console.log(newarr)

let even=arr.filter((val)=>{
    return val%2==0
})
console.log(even)

let sum=arr.reduce((prev,curr)=>{
    return prev+curr
})
console.log(sum)

//Activity 4
for(let i=0;i<arr.length;i++){
    console.log(i)
}

arr.forEach((val)=>{
    console.log(val)
})


//activity 5
let arr2=[[1,2,3],[4,5,6],[7,8,9]]
console.log("\n Two dimensional Array element is")

for(let i=0;i<arr2.length;i++){
    for(let j=0;j<arr2[i].length;j++){
        console.log(arr2[i][j])
    }
}
console.log("Accessing second row third column element")

console.log(arr2[1][2])
