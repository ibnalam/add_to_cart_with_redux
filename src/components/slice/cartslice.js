import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'cartslice',
  initialState: {
    cartItem : [],
    openCartItem : false //
  },
  reducers: {
    addtocart : (state , action)=> { // kono product a click korar sathe sathe jathe cart a add hoe tar jonno ata 
        if (state.cartItem.length > 0){ // cartitem er length jodi 0 theke boro hae thahole nicher kaj ti korbe 
            let arr = []  // akta faka array nilam 
            state.cartItem.map((item) => { 
                if(item.title == action.payload.title){
                    item.quantity = item.quantity + 1
                    arr.push(item.title);
                }
            })
            if (arr.indexOf(action.payload.title) == -1) {
                state.cartItem.push(action.payload);
              }
        }else {
            state.cartItem.push(action.payload);
        }
    },

    
    BringOutCart: (state,action)=>{   // add to cart a click korar sathe sathe jathe side theke cart ti ber hoe ase tar jonno BringOutCart reducer 
        state.openCartItem = action.payload
    },

    remove: (state,action)=>{  // amra cart add hoa product item er sathe cross button set korlam otathe click kore jathe product ti cart theke bad pore tar jonno remove reducer 
      state.cartItem.map((item,index) =>{
        if(action.payload.title == item.title){
          state.cartItem.splice(index,1)
        }
      })
    },


    Increment : (state, action)=> { // plas button a click korle jathe product er quantity ek ek kore bare tar jonno Increment reducer 
      // console.log(state.cartItem.length)
      state.cartItem.map((item) => { 
        if (item.title == action.payload.title) {
            item.quantity = item.quantity + 1
        }
    });
    },

    Decrement : (state, action)=> { // minus button a click korle jathe quantity komthe thake and value 0 hole oi product ti jathe cart theke chole jae sa jonno  Decrement reducer 

      // console.log(state.cartItem.length)
      state.cartItem.map((item,index) => { 
        if (item.title == action.payload.title) {
         
          if(item.quantity > 1){
            item.quantity--
          }else{
            state.cartItem.splice(index,1)
          }
        }

        if(item.quantity == 0){
          // console.log(index)
          state.cartItem.splice(index,1)
        }
        
    });
    },












  }
})

// Action creators are generated for each case reducer function
export const { addtocart,BringOutCart,remove,Increment,Decrement} = counterSlice.actions

export default counterSlice.reducer