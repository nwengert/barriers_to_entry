const expect = require('expect');

// function counter(state, action) {
//     if (typeof state === 'undefined') {
//         return 0;
//     }
//     if (action.type === 'INCREMENT') {                    this is ugly, with no alibi
//         return state + 1;
//     } else if (action.type === 'DECREMENT') {
//         return state - 1;
//     } else {
//         return state;
//     }
// }

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
    }
}

expect(
  counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
  counter(1, { type: 'INCREMENT' })
).toEqual(2);

expect(
  counter(2, { type: 'DECREMENT' })
).toEqual(1);

expect(
  counter(1, { type: 'DECREMENT' })
).toEqual(0);

//this test requires that there be an else clause in the above function
expect( 
    counter(1, { type: 'SOMETHING_ELSE' })
).toEqual(1);

//While reducer is in control of the application's state, it doesn't specify the initial state
//so if the reducer receives 'undefined' it must return what it considers the initial state, or zero. 
expect(
    counter(undefined, {})
).toEqual(0);

console.log('    Tests were successful');