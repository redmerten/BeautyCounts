/**
 * Created by CameronMerten on 10/11/17.
 */

//require this file into index.js

const mongoose = require('mongoose')
const {Schema} = mongoose // mongoose.Schema
//_user is just the norm
const cartSchema = new Schema ({
  _user: {type:Schema.Types.ObjectId, ref: 'User'},
  items: [{
    title: String,
    id: Number,
    color: String,
    size: String,
    quantity: Number,
    price: Number
  }]
})

//tell mongoose to create a new collection called users
mongoose.model('carts', cartSchema)