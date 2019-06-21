"use strict"
//MobileS REDUCERS
export default function mobilesReducers(state={
  mobiles:[]
}, action){
  switch(action.type){
    case "GET_MOBILES":
    // let mobiles = state.mobiles.concat(action.payload);
    // return {mobiles};
    return {...state, mobiles:[...action.payload]}
    break;
    case "POST_MOBILE":
    return {...state, mobiles:[...state.mobiles, ...action.payload], msg:'Saved! Click to continue'}
    break;
    case "POST_MOBILE_REJECTED":
    return {...state, msg:'Please, try again'}
    break;
    case "RESET_BUTTON":
    return {...state, msg:null}
    break;
    case "DELETE_MOBILE":
    // Create a copy of the current array of mobiles
    const currentMobileToDelete = [...state.mobiles]
    // Determine at which index in mobiles array is the mobile to be deleted
    const indexToDelete = currentMobileToDelete.findIndex(
      function(mobile){
        return mobile._id == action.payload;
      }
    )
    //use slice to remove the mobile at the specified index
    return {mobiles: [...currentMobileToDelete.slice(0, indexToDelete), ...currentMobileToDelete.slice(indexToDelete + 1)]}
    break;

    case "UPDATE_MOBILE":
    // Create a copy of the current array of mobiles
    const currentMobileToUpdate = [...state.mobiles]
    // Determine at which index in mobiles array is the mobile to be deleted
    const indexToUpdate = currentMobileToUpdate.findIndex(
      function(mobile){
        return mobile._id ==  action.payload;
      }
    )
    // Create a new mobile object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methos too
    const newMobileToUpdate = {
      ...currentMobileToUpdate[indexToUpdate],
      model: action.payload.model
    }
    // This Log has the purpose to show you how newMobileToUpdate looks like
    console.log("what is it newMobileToUpdate", newMobileToUpdate);
    //use slice to remove the mobile at the specified index, replace with the new object and concatenate witht he rest of items in the array
    return {mobiles: [...currentMobileToUpdate.slice(0, indexToUpdate), newMobileToUpdate, ...currentMobileToUpdate.slice(indexToUpdate + 1)]}
    break;
  }
  return state
}
