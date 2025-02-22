// Create an array called ages
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// subtract the value of the first element in the array from the value in the last element
let minusAge = ages[ages.length -1] - ages[0];
console.log("minusAge", minusAge);

// Add a new age to your array
ages.push(7);
console.log("Ages after pushing #7:", ages);

// repeat the step above to ensure it is dynamic
let newMinusAge = ages[ages.length -1] - ages[0];
console.log("minusAge", newMinusAge);

// Use a loop to iterate through the array and calculate the average age
let sumOfAge = 0;

for (let i = 0; i < ages.length; i++) {
    sumOfAge += ages[i];
    console.log("index:", i, "sum:", sumOfAge);
}
console.log("Total sum", sumOfAge);
let average = sumOfAge / ages.length;
console.log("Average:", average);



// Create an array called names
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let sumOfNames = 0;

// Use a loop to iterate through the array
for (let i = 0; i < names.length; i++) {
    sumOfNames += names[i].length;
    console.log("index", i, "names:", names[i], "totalCharacters:", sumOfNames);
}

// calculate the average number of letters per name.
let averageName = sumOfNames / names.length;
console.log("Average", averageName);

// Use a loop to iterate through the array again and concatenate all the names together
let allNames = "";
for (let i = 0; i < names.length; i++) {
    allNames = allNames.concat(names[i] + ", ");
    console.log("Concat names: ", allNames);
}


// How do you access the last element of any array?
console.log("Last element of an array:", ages[ages.length -1]);

//How do you access the first element of any array?
console.log("First element of an array:", ages[0]);


// Create a new array called nameLengths
let nameLengths = [];

// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    console.log("list of names: ", nameLengths);
}

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sumOfArray = 0;

for(let i = 0; i < nameLengths.length; i++) {
    sumOfArray += nameLengths[i];
    console.log("Sum of: ", sumOfArray);
}

// Write a function that takes two parameters, word and n, as arguments
function words(word, n) {
    let concat = word.repeat(n)
    console.log(concat);
}

words("Hola", 5);


// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log(fullName);
}

fullName("Jose", "Morales");


// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbersLow = [10, 50, 2, 5, 6];
let numbersHigh = [100, 50, 200];

function numbersOver(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
        console.log("total", total);
    }

    if(total > 100) {
        console.log("Total", total, true)
        return true
    } else {
        console.log("Total", total, false);
        return false
    }
}

numbersOver(numbersLow);


// Write a function that takes an array of numbers and returns the average of all the elements in the array

let newArray = [2, 8, 6, 90, 100];
let averageNum = 0;

function averageNumbers(newArray) {
    for(let i = 0; i < newArray.length; i++){
        averageNum += newArray[i];
    }

    let averageTotal = averageNum / newArray.length;
    console.log("Average numbers:", averageTotal); 
    return averageTotal;
}

averageNumbers(newArray);


// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let set1 = [2, 5, 10, 55, 9];
let set2 = [4, 5, 67, 32, 29];

function averageOfTwoArrays(array1, array2) {
    console.log("Parameters: ", array1, array2);
    let total1 = 0;
    let total2 = 0;

    for(const number of array1){
        total1 += number;
        console.log("Current number loop1: ", number, "Total1: ", total1);
    }

    for (const number of array2) {
        total2 += number;
        console.log("Current number loop2: ", number, "Total2: ", total2);
    }
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;

    console.log("Averages: ", average1, average2);

    if (average1 > average2){
        console.log(true);
        return true
    } else if(average1 < average2){
        console.log(false);
        return false
    }
    else {
        console.log("numbers are equal")
    }
}

averageOfTwoArrays(set1, set2);


// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("Buy a drink?", buyDrink);
    return buyDrink;
}

willBuyDrink(false, 11);


// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// Reverse a string: This function would take a string as an argument and return the reversed string.
function reverseWord(word){
    return word.split('').reverse().join('');
}
console.log(reverseWord('noon')); //Word reads the same forward and backwards, lol
console.log(reverseWord('dad')); //Word reads the same forward and backwards, lol
console.log(reverseWord('civic')); //Word reads the same forward and backwards, lol
