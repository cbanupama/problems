// let Acount = 0;
// let Bcount = 0;
let string = 'program';
let characters = ['a', 'a', 'b', 'c', 'A'];
let count = {};



for(let i=0; i < characters.length; i++) {
    if(characters[i] in count){
        count[characters[i]] += 1;
    } else {
        count[characters[i]] = 1;
    }
}

console.log(count);
