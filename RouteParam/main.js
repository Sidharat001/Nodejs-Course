import express from "express";

const app = express()
const port = process.env.Port || 3000

app.get('/', function (req,res){
    res.send('Welcome To Root Page With Route Parameter Topic')
})

// create dynamic routing
app.get('/product/:id', (req,res) => {
    // get routing parameter in object
    const routingObjects = req.params
    res.send(`ProductId ${routingObjects.id} is Deleted`)
})

// Create dynamic routes with regular expresion
app.get('/getId/:id([0-9]{2})', (req,res) => {
    // Destructuring Objects
    const {id} = req.params 
    res.send(`Regular expresion Is Successfully Run ID id ${id}`)
})

// This is Validation Routes That allow only vikash name routes or suraj name routes 
app.get('/:type(suraj|vikash)/:id', (req,res) => {
    res.send(`This is Allow Suraj Routes or Vikash Routes`)
})

app.listen(port, () => {
    console.log(`Serer Run On ${port} Port`)
})