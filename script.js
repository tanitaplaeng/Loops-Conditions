// Conditions Exercise 1

let actualTemp = 58;
let desiredTemp = 76; 

if (actualTemp < desiredTemp) { 
    console.log('Run heat')
} else if (desiredTemp > actualTemp) { 
    console.log('Run A/C')
} else { 
    console.log('Stand by')
}

// Conditions Exercise 2

let name1 = 'Daisy'; 
let name2 = 'Forrest'; 
let name3 = 'Jack';

if (name1.length < name2.length && name2.length > name3.length) {
    console.log(name2 + ' is the longest name')
}   else if (name3.length < name1.length && name2.length < name1.length) {
    console.log(name1 + ' is the longest name') 
}   else if (name1.length < name2.length && name2.length < name3.length) { 
    console.log(name3 + ' is the longest name') 
}   else if (name1.length === name2.length && name2.length > name3.length) {
    console.log(`${name1} and ${name2} are tied for the longest name`)
}   else if (name2.length === name3.length && name3.length > name1.length) {
    console.log(`${name2} ${name3} are tied for the longest name`)
}   else if (name1.length === name3.length && name1.length > name2.length) {
    console.log(`${name1} and ${name3} are tie for the longest name`)
}   else { 
    console.log(`${name1}, ${name2}, and ${name3} are all the same length`)
}

// const name = ['Tom', 'Claire', 'David', 'JJ', 'June']

// function findLongestName(array) {
//     let longestName = array[0];
//     for (let name of array) { 
//         if (name.length > longestName.length) {
//             longestName = name;
//         } else {
//             longestName;
//         }
//     }
//     return longestName;
// }

console.log(findLongestName(name))

// Loops Exercise 1
// for Loop

for (let i = 1; i < 11; i++) {
    console.log(i);
}

for (let i = 10; i > 0; i--) { 
    console.log(i);
}

// while Loop

let x = 1;  

while (x < 11) { 
    console.log(x);
    x++;
}

let a = 10; 

while (a > 0) { 
    console.log(a);
    a--;
}

// do while Loop

let y = 1;
do {
    console.log(y);
    y++;
} while (y < 11); 

let m = 10;
do {
    console.log(m);
    m--;
} while (m > 0); 

// for of Loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers) {
    console.log(number); 
}

// Extended Loop Exercise

const initialStringValue = 'four';
while(initialStringValue.length < 10) {
    initialStringValue = ' ' + initialStringValue;
}
