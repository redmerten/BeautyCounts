/**
 * Created by AndreaMerten on 3/6/18.
 */
import React from 'react'

const ProductCard = ({product}) =>{
  console.log('in card', product)
  return(
    <div style={styles.cardDiv}>
      <div style = {styles.imgDiv}>
        <img src={product.image} alt="" style={styles.img}/>
      </div>
      <p style={styles.pHeadline}>{product.headline}</p>
      <p style={styles.pTitle}> {product.title}</p>
      <p style={styles.pPrice}>${product.price}</p>
    </div>
  )
}

export default ProductCard

const styles={
  cardDiv:{
    width: '350px',
    //width:'33%',
    height: '500px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  imgDiv:{
    height:'450px',
    maxWidth:'100%',
    marginBottom: '10%'
  },
  img:{
    //overflow: 'hidden',
    //height:'450px',
    maxWidth:'100%'
  },
  pHeadline:{
    fontSize:'150%',
    fontFamily: 'Arial',
    color:'#fd423c',
    textTransform:'uppercase',
    margin:'1%'
  },
  pTitle:{
    fontSize:'250%',
    fontFamily: 'times',
    margin:'1%'
  },
  pPrice:{
    fontSize:'150%',
    //fontFamily: 'times',
    margin:'1%'
  }
}