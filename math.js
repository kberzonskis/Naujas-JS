/* Math - matmatika - objektas*/ 

Math.E 
console.log(Math.E)

console.log(Math.PI)
console.log(Math.SQRT2)  

/* meetodai */ 

console.log(Math.abs (5)) - /* Absoliutine verte*/
console.log(Math.abs (-5)) 
console.log('\nabs');  

/* kubine saknis*/ 
console.log(Math.cbrt(8))
console.log(Math.cbrt(27))


/*Apvalinimas i virsu */ 

console.log(Math.ceil(8))
console.log(Math.ceil(8.9))
console.log(Math.ceil(8.1))


/*Apvalinimas i virsu */ 
console.log(Math.floor(8.1))
console.log(Math.floor(8.6))


/*Apvalinti */  
console.log(Math.round(8.1))
console.log(Math.round(8.5))
console.log(Math.round(8.6))

// trunc nutrina desimtaine dali

console.log(Math.trunc(8.1))
console.log(Math.trunc(4,5))
console.log(Math.trunc(8))
console.log(Math.trunc(8.1999))


// parenka didziausia skaiciu 
console.log(Math.max(8, 6, 10 ))
console.log(Math.max[8, 6, 10 ])



// parenka maziausia skaiciu 
console.log(Math.min(8, 6, 10 ))
console.log(Math.min[8, 6, 10 ])

// POV 

// prenka 2 pakelta laipsniu  (2**0, 2**1)
console.log(Math.pow(2,0))
console.log(Math.pow(2,1))
console.log(Math.pow(2,2))
console.log(Math.pow(2,3))
console.log(Math.pow(2,4))
console.log(Math.pow(2,5))




// sign 
console.log (Math.sign(8))
console.log (Math.sign(-8))
console.log (Math.sign(-Infinity))
console.log (Math.sign(0))



// sqrt kvadratine saknis


console.log(Math.sqrt(4))  // (4**0.5)
console.log(Math.sqrt(9))  // (9**0.5)


// random Grazina tarp nulio ir 1  // [0...1)  

console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())
console.log(Math.random())

// random skaicis nuo nulio iki 10 [0...9], 
// random skaicis nuo nuli iki 1 [0...1], 


console.log(Math.random())

for (let i=0; i<15; i++) {console.log(Math.random())}; 


// [13...149]

// Norimas skaicius is intervalo


function randomNumber(min,max) 
 { return Math.floor(Math.random() * (max - min +1) +min); }
    
 console.log(randomNumber(1,10))
 console.log(randomNumber(1,10))
 console.log(randomNumber(1,10))



const counts = [0,0,0,0,0,0,0,0,0,]
 for (let i=0; i<100000; i++) {console.log(Math.random(0,9))}; 
const index = randomNumber(0,9)
counts[index]++
console.log(counts)