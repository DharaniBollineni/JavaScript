// console.log(5)
// const x=5
// console.log(x+2)


const express = require('express');
const app= express();
app.listen(3000,()=> console.log('listening at 3000'));
app.use(express.static('public'));