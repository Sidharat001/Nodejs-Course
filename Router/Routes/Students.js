import express from 'express'
const Router = express.Router()

// Create Rouer For Student
Router.get('/create', (req,res) => {
    res.send('Student Created SuccesFully')
})

Router.post('/login', (req,res) => {
    res.send('Teacher Login is Sucessfull')
})

Router.put('/updated', function (req,res) {
    res.send('Student Upadated SuccesFully')
})

Router.delete('/delete', (req,res) => {
    res.send('Student Delete Successfully')
})

export default Router
// Node Js Export way
// module.exports = Router