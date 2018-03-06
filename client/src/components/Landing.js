/**
 * Created by AndreaMerten on 10/1/17.
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import {connect} from 'react-redux'
//import {fetchProducts} from '../actions/index'
//import axios from 'axios'
//import {Icon} from 'react-fa'
import ProductList from './ProductList'
import CleanSwapImage from '../images/CleanSwapPromo.png'

class Landing extends Component {

  render(){
    //console.log('landing props', this.state.props)
    return (
      <div style={styles.maindiv}>
      <Link to="/cleanSwap">
        <img
          src={CleanSwapImage}
          alt="Clean Swap"
          style={styles.image}
        />
      </Link>
        {/*<ProductList/>*/}
      </div>
    )}
}

export default Landing

const styles={
  maindiv:{
    //textAlign: 'center',
    //paddingTop:"125px",
    margin:'275px 2% 2% 2%',
    //width:'90%',
    height: '600px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    border: '.5px solid #142d53',
    zIndex:1,

  },
  image:{
    maxWidth:'100%',
    maxHeight:'90%',
    //margin:'2%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  }
}