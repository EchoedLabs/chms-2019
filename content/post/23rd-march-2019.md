---
title: "23rd March 2019"
author: "Syafiq Hanafee"
cover: "/images/cover.jpg"
date: 2019-03-23T01:07:38+08:00
draft: false
tags: ['Post Class Overview']
description: "It is all about 23rd March 2019"

---

Updated with post class overview!

<!--more-->

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTmS5s1gmcqqm9-80ngPsUGvoUYM5cP7BtdOx-QztA09r-14ddXS5S9KPhsvUDSSk2gnZdTeNYdKYtm/embed?start=false&loop=true&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

# Resources
1. <a target="_blank" href="https://drive.google.com/open?id=1ba1grwOlGlXX7DvuWfZ95ZWfDbe0BVBkIgBSSkkgU44">Slides</a>
2. <a target="_blank" href='https://drive.google.com/open?id=1LY8Xpd7hKMmBhNRp8CmbnpwB6Fl0PlOo'>JS Code Along Base Project</a>

*Here is a link to the finished [Code Along project](/code-along/js2).*
# What we covered

## console.log
In our words, it is an easy way to see the value of a variable. For more information - [visit this link](https://www.w3schools.com/jsref/met_console_log.asp)

## document.getElementById
`document.getElementById` returns the **HTML element** and not the value that it is having. 

```html
<input type='number' id='firstNumber' placeholder='First number' />
```

```js
const element = document.getElementById("firstNumber");
const firstNumberAsAString = element.value; // firstNumberAsAString is currently a string.
const firstNumber = parseInt(firstNumberAsAString); // firstNumber is now an number. We can do math!
```

## Quick introduction to functions
*For a breakdown of how a function is made of, view slide 5*

**Declaring a function**
```js
function addTwoNumbers(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}
```

**Invoking the new function that we just made**
```js
const sum = addTwoNumber(5023, 1230);
console.log(sum) // it will print 6253.
```

