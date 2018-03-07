/**
 * Created by AndreaMerten on 3/7/18.
 */

import React, {Component} from 'react'

const SkinCare = ({state}) =>{
  console.log('skin care', state)//(props.location.state)
  return(
    <div>
      <img
        src="https://cdn.beautycounter.com/media/wysiwyg/SeasonalPromotions/20180113_Skincare_CatHeader_Desktop_US.jpg"
        alt="Skin"
      />
    </div>
  )
}

export default SkinCare