
//require this file into index.js

const mongoose = require('mongoose')
const {Schema} = mongoose // mongoose.Schema

const imageSchema = new Schema({
  img: {data: Buffer, contentType: String}
})

// const inventorySchema = new Schema({
//   prodId: String,
//   price: Number,
//   size: String,
//   color: String
// })

//add product here
const productSchema = new Schema ({
  title: String, //Charcoal Cleansing Bar
  category:String, //Skin Care
  subtype:String, //Cleaners
  headline: String, //BEST SELLER
  //itemNumber: Number, //3027
  price: Number,
  description: String,
  partOfPackage:String, //Flawless in Five
  newLabel:String, //NEW SHADE
  addedDate: Date,
  size:String,
  options: [{
    id:Number, //7232
    color:{name:String, color:String}, // Plum #fff000  linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 56%)
    image:String //"https://cdn.beautycounter.com/media/catalog/product/cache/1/small_image/312x390/799896e5c6c37e11608b9f8e1d047d15/c/h/charcoal-cleansing-bar_600_2.png"
  }],
  instructions:String,
  ingredients:[String],
  packaging:String,
  reviews:[{
    name:String,
    stars:Number,
    headline:String,
    review:String,
    date:String,
    helpfulYes:Number,
    notHelpful:Number
  }],
  inventoryCount: Number

})

//tell mongoose to create a new collection called users
mongoose.model('products', productSchema)

//fill the database
