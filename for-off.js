const marks = [5,7,2,8,10]
let sum = 0; 

for (let i=0; i<marks.length; i++){ const mark = marks[i]; 
    sum +=mark 
} console.log(sum);


let sum2 = 0; 

for(const mark of marks) { sum2 += mark} console.log(sum2);




const names = ['Tiesa', 'Sviesa', 'Geris'
]; 
const nameSizes = []
for (const name of names) { console.log(name);
}

for (const name of names){nameSizes.push(name.length);} 

console.log(nameSizes);

