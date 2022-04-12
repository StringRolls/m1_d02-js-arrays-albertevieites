// Practice JS Arrays

//Given the array
const favorites = ["javascript", "html", "css"];

// iterate over it and console.log each element
// ... your code here
for (const element of favorites) {
    console.log(element);
}
// remove first element
favorites.shift();
// ... your code here
console.log(favorites); // => [ 'html', 'css' ]

// remove last element
favorites.pop();
// ... your code here
console.log(favorites); // => [ 'html' ]

// add 'react' on the first place
favorites.unshift('react');
// ... your code here
console.log(favorites); // => [ 'react', 'html' ]

// add 'node' to the last place
favorites.push('node');
// ... your code here
console.log(favorites); // => [ 'react', 'html', 'node' ]

// remove element in the position 2 and add 'express'
favorites.splice(2, 1, 'express');
// ... your code here
console.log(favorites); // => [ 'react', 'express', 'node' ]

// remove elements in the positions 2 and 3 and add 'mongodb'
// ... your code here
favorites.unshift('javascript');
favorites.splice(2, 2, 'mongodb')
console.log(favorites); // => [ 'javascript' 'react', 'mongodb' ]