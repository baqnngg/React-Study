import { configureStore,createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name : 'user',
  initialState : {name: 'kim', age: 20},
  reducers : {
    changeName(state, action){
      state.name = action.payload
    },
    addAge(state, action){
      state.age += action.payload
    }
  }
})


let stock = createSlice({
  name : 'stock',
  initialState : [10,11,12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'white and black', count : 0, defaultCount : 0},
    {id : 1, name : 'red wine', count : 0, defaultCount : 0},
    {id : 2, name : 'Grey Yordan', count : 0, defaultCount : 0}
  ],
  reducers :{
    addCount(state,action){
      state[action.payload].count++
    },
    decreaseCount(state,action){
      if(state[action.payload].count > state[action.payload].defaultCount){
        state[action.payload].count--
      }
    }
  }
})

export default configureStore({
  reducer : { 
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
})

export let {changeName,addAge} = user.actions
export let {addCount,decreaseCount} = cart.actions