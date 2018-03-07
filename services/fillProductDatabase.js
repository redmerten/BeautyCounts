
const mongoose = require('mongoose')
//const fs = require('fs')

//one arg here means fetch from db; 2 would mean save to
const Product = mongoose.model('products')

module.exports = () => {
  new Product({
    title: 'Charcoal Cleansing Bar', //Charcoal Cleansing Bar
    category:'Skin Care', //Skin Care
    subtype:'Cleansers', //Cleaners
    headline: 'BEST SELLER', //BEST SELLER
    //itemNumber: Number, //3027
    price: 25,
    image:"https://cdn.beautycounter.com/media/catalog/product/cache/1/image/380x645/0dc2d03fe217f8c83829496872af24a0/p/d/pdp_charcoalcleansingbar_selling-shot_528_613.jpg",
    id:3027,
    description: 'Our Charcoal Cleansing Bar detoxifies and absorbs impurities in your skin without drying it out, resulting in a smoother, brighter complexion. Made with antioxidant-rich, organic green tea and hydrating organic coconut oil, the gentle formula can be used daily on your face and body.',
    partOfPackage:'', //Flawless in Five
    newLabel:'', //NEW SHADE
    addedDate: new Date(),
    size:'85 g',
    options: [{
      id:3027, //7232
      color:{name:'', color:''}, // Plum #fff000  linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 56%)
      image:"https://cdn.beautycounter.com/media/catalog/product/cache/1/image/380x645/0dc2d03fe217f8c83829496872af24a0/p/d/pdp_charcoalcleansingbar_selling-shot_528_613.jpg"
    }],
    instructions:String,
    ingredients: ['Sodium Rapeseedate', 'Sodium Cocoate', 'Aqua/Water/Eau', 'Glycerin', 'Charcoal Powder', 'Sodium Citrate', 'Hamamelis Virginiana (Witch Hazel) Water*', 'Carthamus Tinctorius (Safflower) Seed Oil*', 'Cocos Nucifera (Coconut) Oil', 'Alcohol*', 'Camellia Sinensis (Green Tea) Leaf Extract*', 'Tocopherol (Vitamin E)'],
    packaging:'Materials: Wrapper made of tissue paper. Please recycle.',
    reviews:[
      {
      name:'Katie M.',
      stars:5,
      headline:'Charcoal bar',
      review:'I love it! Use it almost everyday!',
      date:'03/06/18',
      helpfulYes:0,
      notHelpful:0
      },
      {
        name:'Tami R.',
        stars:5,
        headline:'Love it!',
        review:`I have only been using this bar for a couple of weeks. After reading the reviews I was expecting to break out, at least a little due to my acne prone skin but that hasn't happened. My skin looks and feels super clean and my pores seem to be closed. It is a bit expensive and messy but definitely worth it.`,
        date:'03/05/18',
        helpfulYes:0,
        notHelpful:0
      },
    ],
    inventoryCount: 350
  }).save()




}