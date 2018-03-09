/**
 * Created by AndreaMerten on 3/5/18.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'react-fa'
import Radium from 'radium'
import ReactHoverObserver from 'react-hover-observer';

import NavMenu from './NavMenu'
//import Menu, { MenuItem } from 'material-ui/Menu';
//import Fade from 'material-ui/transitions/Fade';


//import {Menu, MenuItem, Popover  } from "@blueprintjs/core"
//import @blueprintjs/core/lib/css/blueprint.css


const links=[
  {link:"/productList/skinCare", label:'SKIN CARE',
    menuItems:
      ['Cleansers',
      'Toners & Mists',
      'Masks',
      'Moisturizers',
      'Face Oils & Serums',
      'Eye & Lip Care',
      'Sun Protection',
      'Sets & Collection']
  },
  {link:"/productList/makeUp", label:'MAKE UP',menuItems:['Face', 'Eyes','Lips']},
  {link:"/productList/bathbody", label:'BATH & BODY',menuItems:[]},
  {link:"/productList/family", label:'FAMILY',menuItems:[]},
  {link:"/productList/new", label:'NEW',menuItems:[]},
]
const theNeverList= {link:"/productList/theNeverList", label:'THE NEVER LIST'}
const theAsteriskBlog=  {link:"/productList/blog", label: 'THE ASTERISK BLOG'}
const ourStory=  {link:"/productList/ourStory", label:'OUR STORY',menuItems:[]}




class Navbar extends Component{

  state={
    menuOpen:false,
    anchorEl: null,
    xPos:0,
    yPos:0
  }



  openMenu=(e)=>{
    this.setState({menuOpen:true, anchorEl: e.currentTarget})
    //console.log(e.currentTarget)
  }

  closeMenu=()=>{
    this.setState({menuOpen:false, anchorEl: null})

  }

  checkClick=(e)=>{
    console.log(e.screenX, e.screenY)
    this.setState({xPos:e.screenX,yPos:e.screenY, menuOpen:true})

  }

  menu=()=>{
    if (this.state.yPos !==0) {
      console.log(this.state.xPos, this.state.yPos)
      console.log('style', this.menuDiv.top)
      return(
        <div style = {{...this.menuDiv, 'top':this.state.yPos, 'left':this.state.xPos}}>
          <p>
            Hello
          </p>
        </div>
      )
    }
    else return(
     <div/>
    )
  }

  render(){
    //console.log('open?', this.state.menuOpen)

    return(
      <div style={styles.mainDiv}>
        <div style={styles.topDiv}>
          <div style={styles.topLeftDiv}>
            <button style={styles.button} key="1">
              Find a Consultant
            </button>
            <button style={styles.button} key="2">
              Become a Consultant
            </button>
          </div>
          <Link to={`/` } style={styles.link}>
            <p style={styles.B}>B</p>
            <p style={styles.brandName}>BEAUTYCOUNTER</p>
          </Link>
          <div style={styles.topRightDiv}>
            <button style={styles.button} key="4">
              Sign In
            </button>
            <button style={styles.button} key="5">
              <Icon name="shopping-cart" />
            </button>
          </div>
        </div>

        <div style={styles.bottomDiv}>
           <NavMenu
             navItem={links[0]}
          />
          <button
            style={styles.bottomButton}
            key={7}
            onClick={(e)=>this.checkClick(e)}
          >
            <Link to="/">
              {theNeverList.label}
            </Link>
          </button>

          <button
            style={styles.bottomButton}
            key={8}
          >
            <Link to="/">
            {theAsteriskBlog.label}
            </Link>
          </button>

        </div>
      </div>
    )
  }
}

export default Radium(Navbar)

const styles={
  mainDiv:{
    display:'flex',
    flexDirection:'column',
    //height:'20%',
    //paddingTop:'30px',
    position: 'fixed',
    top: '30px',
    width:'100%',
    zIndex: 999,
    backgroundColor:'white',
    marginTop:'1%'
  },
  topDiv:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start',
    margin:'2% 2% 0% 2%',

  },
  topLeftDiv:{
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    width: '35%'
  },
  topRightDiv:{
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    width: '35%'

  },
  button:{
    border:'none',
    borderRadius:'5%',
    height:'30px',
    fontSize:'125%',
    color:'#142D53',
    margin:'0% 2%',
    ':hover': {
      //backgroundColor: '#cdd6d9',
      cursor: 'pointer'
    }
  //   a:hover {
  // cursor:pointer;

  },
  link:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width: '15%',
    textDecoration:'none'
  },
  B:{
    fontSize:'400%',
    color:'#142D53'
  },
  brandName:{
    fontSize:'200%',
    color:'#142D53'

  },
  bottomDiv:{
    height:'55px',
    borderTop:'0.5px solid #cdd6d9',
    borderBottom:'0.5px solid #cdd6d9',

    margin:'0% 2%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },
  bottomButton:{
    border:'none',
    borderRadius:'5%',
    height:'30px',
    fontSize:'125%',
    color:'#142D53',
    margin:'0% 0%',
    ':hover': {
      backgroundColor: '#cdd6d9',
      cursor: 'pointer'
    }
    //   a:hover {
    // cursor:pointer;
  },
  bottomLinks:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
  },

}