const connection = require('./models/connection')
const express  = require("express");
const app = express();
const path = require('path')
const expressHandlerbars = require("express-handlebars")
const bodyparser = require("body-parser");
const CourseController = require('./controllers/courses')

app.set('view engine', 'hbs')
app.set ('views', path.join(__dirname, '/views/'))
app.engine('hbs', expressHandlerbars({
    extname : 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts'
}))


app.use(bodyparser.urlencoded({
    extended: true
}))


app.get('/welcome', (req,res) =>{
    // res.send('<h1> Hello world</h1>')
    res.render("index", {})
})
app.use('/', CourseController)
app.use('/course', CourseController)
app.listen(3030, () => {
    console.log("Server started");
})