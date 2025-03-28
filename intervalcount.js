

function intervalCount(start, end, divider) 
{

if (typeof start !== 'number') {
    return 'Intervalo pradzia turi buti skaicius.';
}
if (typeof end !== 'number') {
    return 'Intervalo pabaiga turi buti skaicius.';
}
if (typeof divider !== 'number') {
    return 'Daliklis turi buti skaicius.';
}

if (start % 1 !== 0) {
    return 'Intervalo pradzia turi buti sveikasis skaicius.';
}
if (end % 1 !== 0) {
    return 'Intervalo pabaiga turi buti sveikasis skaicius.';
}
if (divider % 1 !== 0) {
    return 'Daliklis turi buti sveikasis skaicius.';
}

if (start > end) {
    return 'Intervalo pradzia negali buti didesne nei intervalo pabaiga.';
}

let count = 0;

// 1) naivi versija, kai einame per kiekviena skaiciu
{ 
    for (let i= start; i <= end; i++)  if (i%divider ===0) {count++; }}   

return `skaiciu intervale tarp "NUO" ir "IKI", besidalijanciu be liekanos is ${start} ir ${end}, besidalijanciu be liekanos is ${divider} yra kiekis vienetai yra ${count} vienetai `;}  


console.log (intervalCount(0,11,3)); 
console.log (intervalCount(0,11,5)); 
console.log (intervalCount(0,11,7)); 

console.log (intervalCount('asd',11,7)); 
console.log (intervalCount(0,'asd',7));
console.log (intervalCount(0,11,'asd')); 

console.log(intervalCount(undefined, 11, 7));
console.log(intervalCount(1, undefined, 7));
console.log(intervalCount(1, 11, undefined));


console.log(intervalCount(true, 11, 7));
console.log(intervalCount(1, true, 7));
console.log(intervalCount(1, 11, true));

console.log(intervalCount(null, 11, 7));
console.log(intervalCount(1, null, 7));
console.log(intervalCount(1, 11, null));
console.log(intervalCount([], 11, 7));
console.log(intervalCount(1, [], 7));
console.log(intervalCount(1, 11, []));
console.log(intervalCount({}, 11, 7));
console.log(intervalCount(1, {}, 7));
console.log(intervalCount(1, 11, {}));
console.log(intervalCount(intervalCount, 11, 7));
console.log(intervalCount(1, intervalCount, 7));
console.log(intervalCount(1, 11, intervalCount));

console.log(intervalCount(0.1, 11, 3));
console.log(intervalCount(0, 11.1, 3));
console.log(intervalCount(0, 11, 3.1));
console.log(intervalCount(0.1, 11.1, 3));
console.log(intervalCount(0.1, 11, 3.1));
console.log(intervalCount(0, 11.1, 3.1));
console.log(intervalCount(0.1, 11.1, 3.1));

console.log (intervalCount(NaN,11,7)); 
console.log (intervalCount(0,NaN,7));
console.log (intervalCount(0,11,NaN)); 

console.log (intervalCount(Infinity,11,7)); 
console.log (intervalCount(0, Infinity,7));
console.log (intervalCount(0,11,Infinity)); 

console.log(intervalCount(-Infinity, 11, 7));
console.log(intervalCount(0, -Infinity, 7));
console.log(intervalCount(0, 11, -Infinity));




