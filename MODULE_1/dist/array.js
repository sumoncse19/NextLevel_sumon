"use strict";
const names = ['abul', 'kabul', 'babul'];
const rollNumbers = [10, 1, 4, 34];
rollNumbers[8] = 87;
rollNumbers.map(roll => console.log(roll, 'single roll'));
names.forEach(name => console.log(name, 'here name'));
