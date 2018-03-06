/**
 * Created by AndreaMerten on 3/5/18.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'react-fa'
import Radium from 'radium'

const links=[
  {link:"/productList/skinCare", label:'SKIN CARE'},
  {link:"/productList/makeUp", label:'MAKE UP'},
  {link:"/productList/bathbody", label:'BATH & BODY'},
  {link:"/productList/family", label:'FAMILY'},
  {link:"/productList/new", label:'NEW'},
  {link:"/productList/theNeverList", label:'THE NEVER LIST'},
  {link:"/productList/ourStory", label:'OUR STORY'},
  {link:"/productList/blog", label: 'THE ASTERISK BLOG'},

]

class Navbar extends Component{
  render(){
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
          {links.map((e,i)=>{
            return(
              <Link to={e.link} style={styles.bottomlinks}>
                <button style={styles.bottomButton} key={e.label}>
                  {e.label}
                </button>
              </Link>
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
    top: '50px',
    width:'100%',
    zIndex: 999,
    backgroundColor:'white',
    marginTop:'1%'
  },
  topDiv:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start',
    margin:'0% 2%',

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
    fontSize:'150%',
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
    fontSize:'150%',
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