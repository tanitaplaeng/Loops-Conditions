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

// let name1 = Daisy; 
// let name2 = Forrest; 
// let name3 = Wolf;

// Loops Exercise 1
// for Loop

for (let i = 1; i < 11; i++) {
    console.log('Up to 10');
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

while (a> 0) { 
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
for (let number of numbers) {
    console.log(number);
}
