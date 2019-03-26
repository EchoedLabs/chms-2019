---
title: "23rd March 2019"
author: "Syafiq Hanafee"
cover: "/images/cover.jpg"
date: 2019-03-23T01:07:38+08:00
draft: false
tags: ['Post Class Overview']
---

Updated with post class overview!

<!--more-->

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTmS5s1gmcqqm9-80ngPsUGvoUYM5cP7BtdOx-QztA09r-14ddXS5S9KPhsvUDSSk2gnZdTeNYdKYtm/embed?start=false&loop=true&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

# Resources
1. <a target="_blank" href="https://drive.google.com/open?id=1ba1grwOlGlXX7DvuWfZ95ZWfDbe0BVBkIgBSSkkgU44">Slides</a>
2. <a target="_blank" href='https://drive.google.com/open?id=1LY8Xpd7hKMmBhNRp8CmbnpwB6Fl0PlOo'>JS Code Along Base Project</a>

# Post Class Overview
*Here is a link to the finished [Code Along project](/code-along/js2).*
## What we covered

### document.getElementById
`document.getElementById` returns the **HTML element** and not the value that it is having. 

```html
<input type='number' id='firstNumber' placeholder='First number' />
```

```javascript
const element = document.getElementById("firstNumber");
const firstNumberAsAString = element.value; // firstNumberAsAString is currently a string.
const firstNumber = parseInt(firstNumberAsAString); // firstNumber is now an number. We can do math!
```

