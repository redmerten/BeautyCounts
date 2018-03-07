/**
 * Created by AndreaMerten on 3/6/18.
 */
import {FETCH_BC_PRODUCTS} from '../actions/types'


//imported by reducers/index
//action is sent to this reducer which will return new state causing rerender
//
export default function (state = {}, action) {
  //console.log('action from PRODUCT REDUCER', action)
  switch (action.type) {
    case FETCH_BC_PRODUCTS:
      return action.payload
    default:
      return state
  }
}
