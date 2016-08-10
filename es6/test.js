let clock = function* (_) {
    while (true) {
        yield _;
        console.log('tick!');
        yield _;
        console.log('tock!');
    }
}

let g = clock('a');
g.next();
console.log(111);
g.next();
g.next();
g.next();