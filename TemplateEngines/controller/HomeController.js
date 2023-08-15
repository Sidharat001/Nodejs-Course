class HomeController {
    rootFunction (req,res) {
        res.render('index', { title: 'Home', message: 'Hello there!' })
    }
}

module.exports = HomeController