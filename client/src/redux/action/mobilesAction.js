import axios from 'axios';

export function getMobiles(){
  return function(dispatch){
    axios.get("http://localhost:3001/mobiles")
      .then(function(response){
        dispatch({type:"GET_MOBILES", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"GET_MOBILES_REJECTED", payload:err})
      })
  }
}

export function postMobiles(mobile){
  return function(dispatch){
    axios.post("/mobiles", mobile)
      .then(function(response){
        dispatch({type:"POST_MOBILE", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"POST_MOBILE_REJECTED", payload:"there was an error while posting a new phone"})
      })
  }
}

//delete phone
export function deleteMobiles(_id){
  return function(dispatch){
     console.log("Logging ID here ");
     console.log(_id);
    axios.delete("/mobiles/" + _id)
      .then(function(response){
        dispatch({type:"DELETE_MOBILE", payload:_id})
      })
      .catch(function(err){
        dispatch({type:"DELETE_MOBILE_REJECTED", payload:err})
      })
  }
}

// export const deleteMobile = _id => dispatch =>{
//   dispatch({})
// }

//update phome
export function updateMobile(mobile){
  return {
          type:"UPDATE_MOBILE",
          payload: mobile
        }
}
// RESET FORM BUTTON
export function resetButton(){
  return {
          type:"RESET_BUTTON"
        }
}
