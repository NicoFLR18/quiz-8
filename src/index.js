/**
 * This quiz is to test your knowledge of for-of-Loop.
 *
 * 1. When you finish the quiz, create a PR on you repository
 * 2. Submit to your lead
 */

// Question 1: Loop through the array and print the names of the Apostles
const apostles = ["Peter", "James", "John", "Andrew", "Philip"];

for (const apostle of apostles) {
    console.log("[pregunta #1]: ", apostle);
}

// Answer should be: Peter, James, John, Andrew, Philip (each in a new line)

// Question 2: Calculate the sum of the ages of the Patriarchs
const patriarchAges = [930, 912, 905, 895];
let sumAges = 0;

for (const smAge of patriarchAges) {
    sumAges += smAge;
}
console.log("[pregunta #2]: ", sumAges);
// console.log(answer) // Answer should be: 3642

// Question 3: Print the plagues of Egypt
const plagues = ["Frogs", "Locusts", "Hail"];

for (const plague of plagues) {
    console.log("[pregunta #3]: ", plague);
}
// Answer should be: Frogs, Locusts, Hail (each in a new line)

// Question 4: Convert Bible books to uppercase
const books = ["Genesis", "Exodus", "Leviticus"];

for (const book of books) {
    const uppercaseBooks = book.toUpperCase();
    console.log("[pregunta #4]: ", uppercaseBooks);
}

// Answer should be: GENESIS, EXODUS, LEVITICUS (each in a new line)

// Question 5: Count the number of times 'apple' appears in the array
const fruitsInEden = ["apple", "pear", "apple", "grape"];
let fruitCount = 0;

for (const fruit of fruitsInEden) {
  if (fruit === "apple") {
    fruitCount++;
  }
}

console.log("[pregunta #5]: ", fruitCount);
// Answer should be: 2

// Question 6: Multiply all elements in the array by 2
const davidStones = [1, 2, 3];

for (const stone of davidStones) {
  davidStones[davidStones.indexOf(stone)] = stone * 2;
}

console.log("[pregunta #6]: ", davidStones);
// Answer should be: [2, 4, 6]

// Question 7: Reverse the string
const nameOfGod = "Yahweh";
let reverseName = "";

for (nameLetter of nameOfGod) {
  reverseName = nameLetter + reverseName;
}
console.log("[pregunta #7]: ", reverseName); 
// Answer should be: hewhaY

// Question 8: Create a sentence by adding spaces to words
const peaceBeUponYou = ["Peace", "be", "upon", "you"];
let words = "";

for (const word of peaceBeUponYou) {
    words += word + " ";
}

words = words.trim();

console.log("[pregunta #8]: ", words); 

// Answer should be: Peace be upon you

// Question 9: Print out every other element from the array
const daysOfCreation = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6"];
for (let i = 0; i < daysOfCreation.length; i += 2) {
    console.log("[pregunta #9]: ", daysOfCreation[i]);
}
// Answer should be: Day1, Day3, Day5 (each in a new line)

// Question 10: Concatenate all the strings in the array
const attributesOfGod = ["Omnipotent", "Omnipresent", "Omniscient"];
let concatenatedStr = "";

for (const attribute of attributesOfGod) {
  concatenatedStr += attribute;
}

console.log("[pregunta #10]: ", concatenatedStr);
// Answer should be: OmnipotentOmnipresentOmniscient

// Question 11: Create a new array with only the numbers greater than 3
const biblicalNumbers = [1, 3, 7, 12];
const numgreaterThan3 = [];
for (const number of biblicalNumbers) {
  if (number > 3) {
    numgreaterThan3.push(number);
  }
}
console.log("[pregunta #11]:", numgreaterThan3);


// Answer should be: [7, 12]

// Question 12: Calculate the product of all the elements in the array
const disciplesAges = [30, 25, 40, 50];
let product = 1;

for (const Ages of disciplesAges) {
    product *= Ages;
}

console.log("[pregunta #12]:", product);

// Answer should be: 1500000

// Question 13: Replace 'Goliath' with 'David' in the array
const combatants = ["Goliath", "Soldier1", "Soldier2"];
const updatedCombatants = [];

for (const combatant of combatants) {
  if (combatant === "Goliath") {
    updatedCombatants.push("David");
  } else {
    updatedCombatants.push(combatant);
  }
}
console.log("[pregunta #13]:", updatedCombatants);

// Answer should be: ["David", "Soldier1", "Soldier2"]

// Question 14: Print the square of each element in the array
const squaresOfNumbers = [1, 2, 3, 4];
for (const number of squaresOfNumbers) {
    const square = number * number;
    console.log("[pregunta #14]:", square);
  }
// Answer should be: 1, 4, 9, 16 (each in a new line)

// Question 15: Count the number of vowels in the string
const theWord = "Bible";
const countVowel = "aeiouAEIOU";

let counts = 0;

for (const string of theWord) {
  if (countVowel.includes(string)) {
    counts++;
  }
}
console.log("[pregunta #15]:", counts);


// Answer should be: 2

// Question 16: Print the elements that are divisible by 5
const numbersFromBible = [5, 10, 15, 20, 25];
for (const element of numbersFromBible) {
    if (element % 5 === 0) {
      console.log("[pregunta #16]:", element);
    }
  }
// Answer should be: 5, 10, 15, 20, 25 (each in a new line)

// Question 17: Create a new string where the first letter of each word is capitalized
const phrase = "in the beginning";
const words1 = phrase.split(" ");
let capitalizedPhrase = "";
for (const word of words1) {
  capitalizedPhrase += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}
capitalizedPhrase = capitalizedPhrase.trim();
console.log("[pregunta #17]:", capitalizedPhrase);

// Answer should be: In The Beginning

// Question 18: Create a new array where each element is double the original
const loavesAndFishes = [2, 5];
const doubledArray = [];
for (const value of loavesAndFishes) {
  doubledArray.push(value * 2);
}
console.log("[pregunta #18]:", doubledArray);

// Answer should be: [4, 10]

// Question 19: Count the number of elements that are equal to 'manna'
const foodInDesert = ["manna", "quail", "manna", "manna"];
let elements = 0;

for (const food of foodInDesert) {
  if (food === 'manna') {
    elements++;
  }
}

console.log("[pregunta #19]:", elements);
// Answer should be: 3

// Question 20: Create a new array by picking every 3rd element from the original array
const theCommandments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const everyThirdElement = [];
let index = 2;

for (const commandment of theCommandments) {
    if (index < theCommandments.length) {
      everyThirdElement.push(theCommandments[index]);
      index += 3;
    }
}

console.log("[pregunta #20]:", everyThirdElement);
// Answer should be: [3, 6, 9