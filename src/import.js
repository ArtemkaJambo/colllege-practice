import { add, subtract, multiply } from './math.js';
import _ from 'lodash';

const num1 = _.random(1, 100);
const num2 = _.random(1, 100);

console.log("Числа:", num1, num2);
console.log("Додавання:", add(num1, num2));
console.log("Віднімання:", subtract(num1, num2));
console.log("Множення:", multiply(num1, num2));
