const express = require('express');
const multer = require('multer');
const path = require('path');

// load application
const app = express();
const port = process.env.PORT || 8080;

// set view engine
app.set('view engine', 'ejs');

// load static assets
app.use(express.static(path.join(process.cwd(), 'public')));

// get form data 
app.use(express.urlencoded({ extended: false }));

// sotre upload in upload folder with unique filename
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        return cb(null, './uploads');
    },
    filename : (req, file, cb) => {
        // ganrate unique filename 
        const uniqueFilename = Date.now() + '-' + Math.round(Math.random() * 1E9);  
        return cb(null, file.fieldname + '-' + uniqueFilename + '-' + file.originalname)
    }
})

// set default file for uploaded files
const upload = multer({ storage })

// load routes
app.get('/', (req, res) =>{
    res.render('index')
})

// load uploaded files routes
app.post('/uploads', upload.single('myImage') , (req, res) =>{
    return res.redirect('/');
})

// server listening on port 8080
app.listen(port, () =>{
    console.log('server listening on port 8080');
});