var app = require('express')();
app.get('/',(request,response)=>{
    response.send('bonjour le monde')
})

//install dotenv before using this code
//const dotenv = require('dotenv').config()
//const PORT = process.env.PORT || 3000
app.listen(3000,()=>{
    console.log('server start at ', 3000)
})