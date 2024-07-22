//Activity 1
const book={
    title:"Harry Potter",
    author:"J.K Rowling",
    year:2000
}

console.log(book)

console.log(book["title"],book.author)

//Activity 2
function details(book){
    return `The Title of book is ${book.title} and the Author is ${book.author}`
}

console.log(details(book))

function update(year){
    book.year=2020
    console.log(book.year)
}

update(book)

//Activity 3
const Library={
    name:"MyLibrary",
    books:[
        {
            title:"Harry Potter",
            author:"J.K Rowling",
            year:2000
        },
        {
            title:"Lord of the Rings",
            author:"J.R.R. Tolkien",
            year:2000
        }
    ]

}

console.log(Library)

function LibraryDetails(Library){
    console.log("Library Name:",Library.name)
    console.log("Book Titles:")
    Library.books.forEach(book => {
        console.log(book.title)
    });
}

LibraryDetails(Library)

//Activity 4
console.log()
function print(book){
    return  `The Book Title is ${this.title} and year is ${this.year}`

}

console.log(print.call(book))  //if call not write then undefined will comes at output
console.log()
console.log("The Libaray Books Details:")
Library.books.forEach(book=>{
    console.log(print.call(book))
})

//Activity 5
console.log()
Library.books.forEach(book=>{
    console.log("Book Details:")
    for(const property in book){
        if(book.hasOwnProperty(property)){
            console.log(`${property} : ${book[property]}`)
        }
    }
})

console.log()
console.log("The Libarary Keys and Values")
console.log(Object.keys(Library.books))
console.log(Object.values(Library.books))

console.log("/n Book keys and values")
console.log(Object.keys(book))
console.log(Object.values(book))
