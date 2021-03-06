const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')

//let mongoose know about schema. User must be listed before passport below
require('./models/User')
require('./models/Product')
require('./models/Cart')

require('./services/passport')

mongoose.set('debug',true) //allow to see fails in dev
mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI)


//this creates a new express app.  There can be many apps in a project.
//but most only use one.
//app sets up config to listen for routing requests
const app = express()


//wireup middleware
//cookieSession grabs cookie data; passport pulls id from cookie data
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,//how long cookie can exist inside browser in ms
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

//app object is the running express server
//app.get creates a route handler
//watch for a request from root route (localhost:5000/)
//req comes from the visit to '/'
//then response is sent

require('./routes/authRoutes')(app)
require('./routes/productRoutes')(app)
require('./routes/cartRoutes')(app)
require('./routes/imageRoutes')(app)

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


//heroku will pass runtime variables, if dev use 5000
const PORT = process.env.PORT || 5000
//express tells node to listen on port 5000
app.listen(PORT)


//comment out after first load
//require('./services/fillProductDatabase')()

