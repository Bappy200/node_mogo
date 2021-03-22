const express = require('express')
const app = express();

app.get('/',(request, responce)=> responce.send('Thank you for callme..'))

app.listen(3000, ()=> console.log('Listen port is create..'))
