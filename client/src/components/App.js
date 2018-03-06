import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {StyleRoot} from 'radium';

import * as actions from '../actions'
//import '@blueprintjs/core/lib/css/blueprint.css'
import 'normalize.css'


import PromoBar from './PromoBar'
import Navbar from './Navbar'

import Header from './Header'
import Landing from './Landing'
import ProductDetail from './ProductDetail'
import Footer from './Footer'
import Cart from './Cart'
import CleanSwap from './CleanSwap'
import ProductList from './ProductList'

//const Cart = () => <h2 style={{'textAlign': 'center', "padding":"100px"}}>Cart</h2>
//const OrderHistory = () => <h2 style={{'textAlign': 'center', "padding":"50px"}}>Order History</h2>

class  App extends Component {
  //fetch current user
  componentDidMount(){
    this.props.fetchUser()
  }



  //header will be different depending on whether user is logged in
  //should be in header?
  //"/" = urbannest.com/  or home
    render () {
      return (
        <StyleRoot>
          <div>
            <BrowserRouter>
              <div>
                <PromoBar/>
                <Navbar/>
                {/*<Header/>*/}
                <Route path="/cart" component={Cart}></Route>
                <Route exact path="/" component={Landing}></Route>
                <Route path="/detail/:prodid" component={ProductDetail}/>
                <Route path="/cleanSwap" component={CleanSwap}></Route>
                <Route path="/productList/:type" component={ProductList}></Route>

                <Footer/>
              </div>
            </BrowserRouter>
          </div>
        </StyleRoot>

      )
    }
}

//this is imported by main index.js

export default connect(null, actions)(App)
