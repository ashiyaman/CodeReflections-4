//ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

const getMaxElement = (arr) => {
    let maxNum = arr[0]
    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i]
        }
    }
    return maxNum
}

let array = [4,78,8,3,6,0,12,34]
console.log(getMaxElement(array)) // 78

//ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage = (arr) => {
    let avg = 0
    for(let i = 0; i <= arr.length - 1; i++){
        avg += arr[i]
    }
    return avg / arr.length
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3

// ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

const convertEvenToOdd = (arr) => {
    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i] % 2 === 0){
            arr[i] += 1
        }
    }
    return arr
}

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]

//ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

const filterWords = (arr) => {
    const wordsWithMoreLength = []
    for(let i = 0; i <= arr.length - 1; i++){
        if(arr[i].length > 5){
            wordsWithMoreLength.push(arr[i])
        }
    }
    return wordsWithMoreLength
}

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)) // ["repeat", "community"]

//ES6 function that takes an array of strings and returns a new array with each string capitalized.

const capitalizeWords = (arr) => {
    const capitalizedArr = []
    for(let i = 0; i <= arr.length - 1; i++){
        capitalizedArr.push(arr[i].toUpperCase())
    }
    return capitalizedArr
}

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// ["EAT", "SLEEP", "CODE", "REPEAT"]

//ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

const getValues = (arr, propName) => {
    const names = []
    for(let i = 0; i <= arr.length - 1; i++){
        names.push(arr[i].name)
    }
    return names
}

console.log(
    getValues(
      [
        { name: "John", age: 21 },
        { name: "Mary", age: 22 },
        { name: "Peter", age: 23 },
      ],
      "name"
    )
  ); // ["John", "Mary", "Peter"]

// ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

const podAndTeamAllocation = (user) => {
    user.teamId = 667543; // Add the teamId property to the new object
    return user;
  };

const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))
// {firstName: 'John', lastName: 'Dee', teamId: 667543}

//ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods.

const checkForTeam = (student) => {
    if(!student.team){
        student.team = 'A'
    }
    return student
}

console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
// {firstName: 'Penn', lastName: 'Ma', team: 'A'}

console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: 'B'}))
// {firstName: 'John', lastName: 'Dee', team: 'B'}

console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))
// {firstName: 'Priya', lastName: 'Raj', team: 'A'}

//Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = { 
    title: 'JavaScript: The Definitive Guide',  
    authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
    publisher: {name: "O'Reilly Media", location: 'CA'}
}

const title = book.title
const author1 = book.authors[0].name
const author2 = book.authors[1].name
const publisherName = book.publisher.name

console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan 
console.log(author2); // Yukihiro Matsumoto
console.log(publisherName); // O'Reilly Media

//ES6 function that takes an array of objects and returns the sum of all ages.

const sumOfAges = (arr) => {
    let sumOfAge = 0
    for(let i = 0; i <= arr.length - 1; i++){
        sumOfAge += arr[i].age
    }
    return sumOfAge
}

var array1 = [
    {
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
];

console.log(sumOfAges(array1)); // 121