/**
 * Created by AndreaMerten on 10/18/17.
 */

import React, {Component} from 'react'
//needs data from redux so use connect
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchBDProducts} from '../actions' //no need to say index cuz it knows
//import '@blueprintjs/core/lib/css/blueprint.css'
import ProductCard from './ProductCard'


class ProductList extends Component {
  componentDidMount(){
    this.props.fetchBDProducts('Cleansers')
  }

  render(){
    console.log('in product list')
    if (Array.isArray(this.props.bcProducts) ){
      console.log(this.props.bcProducts)
      return(
        <div style={styles.mainDiv}>
          <ProductCard
            product = {this.props.bcProducts[0]}
          />
        </div>
      )
    }
    else {
      console.log('not yet')
      return(
        <div/>
      )
    }
  }
}

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, {fetchBDProducts})(ProductList)


const styles={
  mainDiv:{
    margin:'200px 2% 2% 2%',

  }
}

