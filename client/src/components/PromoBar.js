/**
 * Created by AndreaMerten on 3/4/18.
 */
import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog';
import Radium from 'radium'

import {Icon } from 'react-fa'

class PromoBar extends Component{
  state={
    open:false,
    promoIndex:0,
    content:0
  }

  componentDidMount(){
    setInterval(()=>{
      let i=this.state.promoIndex
      i===promos.length-1 ? i=0 : i++
      this.setState({promoIndex:i})
    }, 4000)
  }

  showOverlay=(e,i)=>{
    e.preventDefault()
    this.setState({open:true, content:i})
  }

  handleOpen = (i) => {
    this.setState({open: true, content:i});
  };

  handleClose = () => {
    //e.preventDefault()
    this.setState({open: false});
  };

  render(){
    return (
      <div style = {styles.div}>
        <button
          style = {styles.button}
          key = {this.state.promoIndex}
          onClick={(e)=>this.showOverlay(e,this.state.promoIndex)}
        >
          <p style = {styles.p}>
            {promos[this.state.promoIndex].promo}
          </p>
        </button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={styles.dialogDiv}>

            <div>
              <p style={styles.dialogP}>
                {promos[this.state.content].popup}
              </p>
            </div>
            <button
              style={styles.modalCloseButton}
              onClick={()=>{this.handleClose()}}
            >
              X
            </button>
          </div>
        </Dialog>


      </div>
    )
  }
}

export default Radium(PromoBar)

const styles={
  div:{
    backgroundColor:'#142D53',
    height:'50px',
    width:'100%',
    position: 'fixed',
    top: '0px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'

  },
  button:{
    backgroundColor:'#142d53',
    height:'50px',
    borderColor:'Black',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    ':hover': {
      cursor: 'pointer'
    }
  },
  dialogDiv:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  modalCloseButton:{
    color:'#142d53',
    height:'50px',
    margin:'2%',
    fontSize:'200%',
    border:'none',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    ':hover': {
      cursor: 'pointer'
    }
  },
  p:{
    color:'white',
    fontFamily:'Helvetica,Arial,sans-serif',
    fontSize:'125%',
    textDecoration: 'none',
    textTransform: 'uppercase',
    height:'50px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    //animationName: 'example',
    //opacity:0,

  },
  dialogP:{
    fontSize:'120%',
    margin:'2%',
    lineHeight:1.2,
  }
}

const promos= [
    {
      promo: `MAKE THE CLEAN SWAP! FREE DELUXE SAMPLE WITH PURCHASE OF CLEAN SWAP PRODUCT, LIMITED TIME ONLY`,
      popup: `*Purchase two (2) Beautycounter Red Color Intense Lipsticks (less applicable taxes, shipping and handling, and Member enrollment fees), and receive $10 off. Offer available to Clients and Band of Beauty Members in the US and Canada only. Purchase minimum is applicable toward qualifying sales to increase host rewards. Offer valid from 12:01 AM PST on February 20, 2018, until sold out. Offer available on Beautycounter.com and Consultant Personal Websites only. Not available Behind The Counter. Offer not transferable or interchangeable. We reserve the right to modify or replace any part of these terms and conditions without notice. Offer subject to change in Beautycounter’s sole discretion.`
    },
    {
    promo: `BUY 2 BEAUTYCOUNTER RED LIPSTICKS AND SAVE $10`,
    popup:`Receive your choice of 1 “deluxe sample” free with the purchase of any qualifying “Clean Swap” full sized item identified on beautycounter.com/clean-swap. Gift with purchase limit: maximum 3 “deluxe samples” each per person. “Deluxe sample” options are as follows: 50ml Volume & Shape Conditioner, 50ml Smooth & Control Conditioner, 59ml Body Wash, 7ml Adaptive Moisture Lotion, 5ml No. 2 Plumping Facial Oil. “Clean Swap”. Offer available to Customers and Band of Beauty Members in the US and Canada only. Offer valid from 12:01 AM PST on February 22, 2018, until 11:59 PM PST on March 7, 2018, while supplies last. Offer available on Beautycounter.com and Consultant Personal Websites only. Quantities are limited. Offer not valid on previous purchases. Offer cannot be combined with Consultant enrollment orders. Offer not transferable or interchangeable. Offer cannot be combined with other promotions. This offer is subject to change, alternation or termination by Beautycounter at its sole discretion at any time.`
  },
  {
    promo: `EXCITING NEWS! FREE RETURNS ON ALL ORDERS* DETAILS`,
    popup:`*US orders only. Product is eligible for a refund received 60 days from the ship date. We refund the purchase price (excluding the original shipping and handling fees) of the returned item(s) to the original form of payment.
        For our Return Policy and the new Return Authorization Form go to Beautycounter.com/returns.`
  }
]
