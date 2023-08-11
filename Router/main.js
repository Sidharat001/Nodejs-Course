import express from 'express'
import Teacher from './Routes/Teacher.js'
import Student from './Routes/Students.js'

// Excute express function
const app = express()

// get port number
const port = process.env.Port || 3000

// Create Root Route
app.get('/', (req,res) => {
    res.send(`This is Root Routes`)
    console.log(Teacher)
})

// Load Router 
app.use('/teacher', Teacher)
app.use('/students', Student)


// create server for nodejs run on browser
app.listen(port, () => {
    console.log(`Server run on ${port} Port`)
})