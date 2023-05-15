<h1 align="center"><code>random-item-from.js</code></h1>

<p align="center">Get random item from strings, arrays, dictionaries and maps</p>

## ⚙️ Installation

```js
npm i random-item-from
```

**CDN Links:**
- https://cdn.jsdelivr.net/npm/random-item-from@1.0.0/random-item-from.js
- https://www.unpkg.com/random-item-from@1.0.0/random-item-from.js

## 📖 Usage

#### ● Import

```js
// ES6
import randomItemFrom from "random-item-from";

// commonjs
const randomItemFrom = require("random-item-from");
```

#### ● Random item from map

```js
const colors = new Map([
    ['red', '#FF0000'],
    ['green', '#00FF00'],
    ['blue', '#0000FF']
]);

const randomColor = randomItemFrom(colors);

console.log(randomColor); // output: "#0000FF"
```

#### ● Random item from array

```js
const fruits = ['apple', 'banana', 'orange', 'pear'];

const randomFruit = randomItemFrom(fruits);

console.log(randomFruit); // output: "pear"
```

#### ● Random item from string

```js
const digits = '0123456789';

const randomDigit = randomItemFrom(digits);

console.log(randomDigit); // output: "6"
```

#### ● Random item from dictionary

```js
const pets = {
    cat: 'fluffy',
    dog: 'rover',
    bird: 'tweety',
    fish: 'goldie'
};

const randomPet = randomItemFrom(pets);

console.log(randomPet); // output: "tweety"
```

---

[Support me on Patreon](https://www.patreon.com/axorax) — 
[Check out my socials](https://github.com/axorax/socials)