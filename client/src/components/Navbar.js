/**
 * Created by AndreaMerten on 3/5/18.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'react-fa'
import Radium from 'radium'
import Menu, { MenuItem } from 'material-ui/Menu';
import Fade from 'material-ui/transitions/Fade';

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
  // {link:"/productList/makeUp", label:'MAKE UP'},
  // {link:"/productList/bathbody", label:'BATH & BODY'},
  // {link:"/productList/family", label:'FAMILY'},
  // {link:"/productList/new", label:'NEW'},
  // {link:"/productList/theNeverList", label:'THE NEVER LIST'},
  // {link:"/productList/ourStory", label:'OUR STORY'},
  // {link:"/productList/blog", label: 'THE ASTERISK BLOG'},

]

class Navbar extends Component{

  state={
    menuOpen:false,
    anchorEl: null,
  }

  openMenu=(e)=>{
    this.setState({menuOpen:true, anchorEl: e.currentTarget})
  }

  closeMenu=()=>{
    this.setState({menuOpen:false, anchorEl: null})

  }

  handleMenuClick=(i)=>{

  }

  linkTo=()=>{

  }

  render(){
    console.log('open?', this.state.menuOpen)
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
          {links.map((l,i)=>{
            return(
              <div key={l.label}>
                <button
                  style={styles.bottomButton}
                  key={l.label}
                  //onClick={this.linkTo}
                  onMouseEnter={(e)=>this.openMenu(e)}
                  //onMouseLeave={()=>this.closeMenu()}
                >
                  {l.label}
                </button>
                <Menu
                  id="fade-menu"
                  anchorEl={this.state.anchorEl}
                  open={this.state.menuOpen}
                  onClose={()=>this.closeMenu()}
                  transition={Fade}
                >
                  <MenuItem>
                    <Link
                      to={{ pathname: '/productList/all', state: { type: 'all'} }}
                      onClick={()=>this.closeMenu()}
                    >
                      {l.label}
                    </Link>
                  </MenuItem>
                  {l.menuItems.map((m,i)=>{
                    return(
                      <MenuItem
                        onClick={(i)=>this.handleMenuClick(i)}
                        key={m}
                      >
                        {m}
                      </MenuItem>
                    )})}

                </Menu>
              </div>
            )
          })}

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
  }
}