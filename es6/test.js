function* gen() {
    yield 'hello';
    yield* ['a', 'b', 'c'];
    return 'world';
}
let g = gen();
// for (let i = 0; i < 5; i++) {
//     console.log(g.next());
// }
let done = false;
do {
    let obj = g.next();
    console.log(obj);
    done = obj.done;
}
while (!done);