function multiply(a,b)
{if (typeof a !== 'number'){return 'pirmasis parametras turi buti skaicius.';} 
} 

console.log(typeof 5)
console.log(typeof -5)
console.log(typeof 3.14)
console.log(typeof 'aaa')
console.log(typeof true)
console.log(typeof [1])
console.log(typeof[1 , 2 ,3 ])
console.log(typeof [true, false])
console.log(typeof null)
console.log(typeof {})

console.log(multiply(2, 'labas'));
console.log(multiply(-2, 'labas'));
console.log(multiply('labas', 3));
console.log(multiply('labas', -3));

/*
TYPEOF - duomenu tipo nustatymo operatorius
*/

function sum(a, b) {
    return a + b;
}

console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.141592654);
console.log(typeof 'asd');
console.log(typeof '');
console.log(typeof true);
console.log(typeof false);
console.log(typeof sum);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ['a', 'b', 'c']);
console.log(typeof [true, false]);
console.log(typeof null);
console.log(typeof {});

const a = null;
if (a === null) {
    console.log('NULL');
}

const b = [];
if (Array.isArray(b)) {
    console.log('ARRAY');
}

const c = 5;
if (Array.isArray(c)) {
    console.log('ARRAY');
} else {
    console.log('ne arejus')}




        