import axios from 'axios';
// ADD TO CART
export function addToCart(cart){
    return function(dispatch){
      axios.post("http://localhost:3001/cart", cart)
        .then(function(response){
          dispatch({type:"ADD_TO_CART", payload:response.data})
        })
        .catch(function(err){
          dispatch({type:"ADD_TO_CART_REJECTED", msg: err})
        })
    }
  }

// DELETE FROM CART
export function deleteCartItem(cart){
    return function(dispatch){
      axios.post("http://localhost:3001/cart", cart)
        .then(function(response){
          dispatch({type:"DELETE_CART_ITEM", payload:response.data})
        })
        .catch(function(err){
          dispatch({type:"DELETE_CART_ITEM_REJECTED", msg: 'error when deleting an item from the cart'})
        })
    }
  }
// UPDATE CART
export function updateCart(_id, unit, cart){
    // Create a copy of the current array of mobile
    const currentMobileToUpdate = cart
    // Determine at which index in mobile array is the mobile to be deleted
    const indexToUpdate = currentMobileToUpdate.findIndex(
      function(mobile){
        return mobile._id === _id;
      }
    )
  
    const newMobileToUpdate = {
      ...currentMobileToUpdate[indexToUpdate],
      quantity: currentMobileToUpdate[indexToUpdate].quantity + unit
    }
  
    let cartUpdate = [...currentMobileToUpdate.slice(0, indexToUpdate), newMobileToUpdate, ...currentMobileToUpdate.slice(indexToUpdate + 1)]
  
    return function(dispatch){
      axios.post("http://localhost:3001/cart", cartUpdate)
        .then(function(response){
          dispatch({type:"UPDATE_CART", payload:response.data})
        })
        .catch(function(err){
          dispatch({type:"UPDATE_CART_REJECTED", msg: 'error when adding to the cart'})
        })
    }
  }
  export function getCart(){
    return function(dispatch){
      axios.get('http://localhost:3001/cart')
       .then(function(response){
         dispatch({type:"GET_CART", payload:response.data})
       })
       .catch(function(err){
         dispatch({type:"GET_CART_REJECTED", msg:"error when getting the cart from session"})
       })
    }
  }