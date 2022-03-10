const express = require('express')
const app = express()
const port = 8081;


app.get('/welcome', (req, res) => {
  res.send('Welcome to Dominos!')
})

app.get('/contact',(req,res)=>{
    res.json({
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
      })
})



app.listen(port, () => console.log(`${port}!`))