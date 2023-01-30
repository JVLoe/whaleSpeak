const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

/*
The first for loop will go through each individual letter of the input string
*/
for (let i = 0; i < input.length; i++) {
    // console.log(i);

    // the two if statements will add an extra letter (e and u) to resultArray each time it comes across it in the input string
    if(input[i] === 'e'){
        resultArray.push(input[i]);
    }
    if(input[i] === 'u'){
        resultArray.push(input[i]);
    }

    // the nested for loop will go through the vowels array
    for (let j = 0; j < vowels.length; j++) {
        // console.log(j);

        // this if statement will compare both string and array variables and identify matching strings
        if (input[i] === vowels[j]){
            // console.log(input[i]);

            // this will push the identified matches into the resultArray
            resultArray.push(input[i]);
        }
    }
}

// console.log(resultArray);
// creating a new variable to put the string into, which will join the result array (with no spaces) and convert it to uppercase in the process
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);