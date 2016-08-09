
function log(x, y = 'world') {
    console.log(x, y);
}
log('hello');

function m1({x = 0, y = 0} = {}) {
    console.log(x, y);
}

function m2({x, y} = {x: 0, y: 0}) {
    console.log(x, y);
}
m1();
m2();
m1({});
m2({});

function throwIfMissing() {
    throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}
// foo();

const sortNumbers = (...numbers) => numbers.sort();
console.log(sortNumbers(2,5,3,1));

console.log(Math.max(...[1, 20, 90, 60]));


function length(str) {
    return [...str].length;
}