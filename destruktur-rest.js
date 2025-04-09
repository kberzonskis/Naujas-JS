
const a5 = [5,55,555]
const a7 = [7,77,777]
const a8 = [8,88,888]

const a1 = a5.concat(a5)
console.log(a1);

const a2 = [...a1,...a7]
console.log(a2);

const a3 = [...a8,...a5,...a7]
console.log(a3);


const a4 = [...a3,...a2,]
console.log(a4);


// [12,10,555]
const b1 = [12,10,555,...a7]
console.log(b1);


const obj1 = {name: 'Shapira'}
const obj2= {age: 55 }
const obj3 = {isMarried: true} 

const obj = {...obj1,...obj2,...obj3}
console.log(obj);

const raktai = {c: 2}
const raktai1 = {c1: 3}
const raktai2 = {c2: 4}

const raktai12 = {...raktai,...raktai1,...raktai2 }
console.log(raktai12);


console.log('--------');


const raktaia = {c: 2}
const raktaia1 = {c1: 6}
const raktaia2 = {c2: 4, a:5}

const raktaia12 = {...raktaia,...raktaia1,...raktaia2 }
console.log(raktaia12);

const rak = {f: 6,...raktai12,c1:5, }
console.log(rak);


console.log('---Nauja diena-----'); 

const mat = [7,5,8,10,12]