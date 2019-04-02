// problem 1
//  Write a JavaScript program to list the properties of a JavaScript object

var user = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// expected output: name, sclass, rollno

console.log(Object.keys(user));

// problem 2
// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property. 

console.log(user);

console.log(delete user.rollno);

console.log(user);


// Write a JavaScript program to get the length of an JavaScript object

console.log(Object.keys(user).length);

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

for(let i = 0 ; i < library.length; i++ ) {
    var bookName = library[i].title;
    var author = library[i].author;
    console.log("BOOK NAME:" + bookName);
console.log("AUTHOR :" + author);
}

//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes

// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.




//Write a Bubble Sort algorithm in JavaScript.

// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

let num = [6,4,0, 3,-2,1];
let temp;
for(let i = num.length-1; i >= 0; i--) {
    for(let j = 1; j <= i; j++) {
        if(num[j-1] > num[j]) {
        temp = num[j-1];
        num[j-1] = num[j];
        num[j] = temp;
        }
    console.log(num);
    }
}
