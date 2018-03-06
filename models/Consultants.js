/**
 * Created by AndreaMerten on 3/5/18.
 */

const mongoose = require('mongoose')
const {Schema} = mongoose // mongoose.Schema

const consultantSchema = new Schema ({
  _user: {type:Schema.Types.ObjectId, ref: 'User'},
  id: Number,
  name:{
    first:String,
    last: String,
  },
  address:{
    street:String,
    city:String,
    state:String,
    zip:Number
  },
  email:String
})

//tell mongoose to create a new collection called users
mongoose.model('consultants', consultantSchema)

