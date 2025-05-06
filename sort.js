/* Sort nuo didziuju ir abeceles raidziu) */ 


const text = ['geris', 'Tiesa', 'Sviesa', 'siluma']
console.log(text);

text.sort()
console.log(text);

console.log('------------------');



// raides pasivercia i skaiciu
const sptext = ['d', 'b', 'ca', 'bf', 'ba', 'cc',]
sptext.sort()
console.log(sptext);


console.log('------------------');

const numb = [2,15,16,21]
console.log(numb);

const numb1 = [2,15,16,21].sort()
console.log(numb1);

const numb2 = [2,15,16,21,10,1].sort()
console.log(numb2);


const numb3 = [2,15,16,21,10,1].sort((a, b) => a - b)
console.log(numb3);

const numb4 = [2,15,16,21,10,1].sort((a, b) => b - a)
console.log(numb4);

const numb5 = [2,15,16,21,10,1,12].sort((a, b) => a + b)
console.log(numb5);

const numb6 = [2,15,16,21,10,1].sort((a, b) => b + a)
console.log(numb6);


const pep = [  {name: 'Saulius', age: 55 },
   {name: 'Mirjam', age: 51 },
   {name: 'Chananijas', age: 25},
 {name: 'Justas', age: 35 }]

pep.sort()
console.log(pep);




const peps = [  {name: 'Saulius', age: 55 },
    {name: 'Mirjam', age: 51 },
    {name: 'Chananijas', age: 25},
  {name: 'Justas', age: 35 }]
 
 peps.sort((a,b) => a.age - b.age)
 console.log(peps);


const pepsi = [  {name: 'Saulius', age: 55 },
    {name: 'Mirjam', age: 51 },
    {name: 'Chananijas', age: 25},
  {name: 'Justas', age: 35 }]
 
 pepsi.sort((a,b) => a.name.length - b.name.length)
 console.log(pepsi);

const pepsis = [  {name: 'Saulius', age: 55 },
    {name: 'Mirjam', age: 51 },
    {name: 'Chananijas', age: 25},
  {name: 'Justas', age: 35 }]
 
 pepsis.sort((a,b) => a.name >  b.name? 1: a.name === b.name? 0: -1)
 console.log(pepsis);



 const pepsiss = [  {name: 'Saulius', age: 55, isMarried: true},
    {name: 'Mirjam', age: 51, isMarried: true} ,
    {name: 'Chananijas', age: 25, isMarried: false},
  {name: 'Justas', age: 35, isMarried: true} ]
 
 pepsiss.sort((a,b) => a.isMarried <  b.isMarried? 1: a.isMarried === b.isMarried? 0: -1)
 console.log(pepsiss);
 









