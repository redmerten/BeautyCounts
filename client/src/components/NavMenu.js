/**
 * Created by AndreaMerten on 3/8/18.
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
//import Menu, { MenuItem } from 'material-ui/Menu';
//import Fade from 'material-ui/transitions/Fade';
//import ReactHoverObserver from 'react-hover-observer';
import {Nav, ButtonToolbar, NavDropdown, MenuItem, DropdownButton} from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.css'

class NavMenu extends Component{
  state={
    isOpen: false
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const item=this.props.navItem
    return (
        <ButtonToolbar>
        <DropdownButton
          style={styles.bottomButton}
          title={item.label}
          onMouseEnter = { this.handleOpen }
          onMouseLeave = { this.handleClose }
          open={ this.state.isOpen }
          noCaret
          id="dropdown-no-caret"  //id provides for accessibility
        >
          <MenuItem>Hello</MenuItem>
        </DropdownButton>
        </ButtonToolbar>

    )
  }

}

export default NavMenu

const styles={
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
  menuDiv:{
    zIndex:2000,
    backgroundColor:'#142D53',
    color:'white',
    width:'100px',
    height:'100px',
    position:'absolute',
    top:222,
    left:'2%'
  }
}
/*
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
 */

/*



  handleMenuHeaderHover=(e)=>{
    console.log(e.screenX, e.screenY)
    this.setState({
      //xPos:e.screenX,
      //yPos:e.screenY,
      display: 'block',
      menuOpen:true})
  }

  hoverChange=({isHovering})=>{
    console.log('hovering?', isHovering)
    if (!isHovering) {
      console.log('its not')
      this.setState({
        //xPos:0,
        //yPos:0,
        menuOpen: false,
        display: 'none'
      })
    }
  }


  openMenu=(e)=>{
    this.setState({menuOpen:true, anchorEl: e.currentTarget})
    console.log(e.currentTarget)
  }

  closeMenu=()=>{
    this.setState({menuOpen:false, anchorEl: null, mouseInMenu:false})

  }


  setMouseinMenu=()=>{
    console.log('mouse in')
    this.setState({mouseInMenu:true})
  }

  mouseOut=()=>{
    console.log('mouse out')
    this.closeMenu()
  }

  onHoverChange=({isHovering})=>{
    console.log('hovering?', isHovering)
    if (!isHovering )
      this.setState({menuOpen:false})
  }

  menu=()=>{

    //console.log(this.state.xPos, this.state.yPos)
    return(
      <div style = {{
        ...styles.menuDiv,
        'display':this.state.display
      }}>
        <p>
          Hello
        </p>
      </div>
    )
  }

  render(){
    console.log(this.state.display)
    const {navItem}=this.props
    //console.log('in navmenu', navItem)
    return(
      <div key={navItem.label}>
        <button
          style={styles.bottomButton}
          key={navItem.label}
          onMouseEnter={(e)=>this.handleMenuHeaderHover(e)}
        >
          {navItem.label}
        </button>
        <ReactHoverObserver
          onHoverChanged={(isHovering)=>this.hoverChange(isHovering)}
        >


          {this.menu()}

        </ReactHoverObserver>
      </div>
    )


  }
}

export default NavMenu



/*
 <Menu
 id="fade-menu"
 anchorEl={this.state.anchorEl}
 open={this.state.menuOpen}
 onClose={()=>this.closeMenu()}
 transition={Fade}
 //onMouseEnter={()=>this.setMouseinMenu()}
 onMouseLeave={()=>this.closeMenu()}

 >
 <MenuItem>
 <Link
 to={{ pathname: '/productList/all', state: { type: 'all'} }}
 onClick={()=>this.closeMenu()}
 >
 {navItem.label}
 </Link>
 </MenuItem>
 {navItem.menuItems.map((m,i)=>{
 //console.log('items',m)
 return(
 <MenuItem
 onClick={(i)=>this.handleMenuClick(i)}
 key={m}
 >
 {m}
 </MenuItem>
 )})}

 </Menu>

 */
