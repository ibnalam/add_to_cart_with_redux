import { configureStore } from '@reduxjs/toolkit'
import cartslice from './components/slice/cartslice'

export default configureStore({
  reducer: {
    cart: cartslice
  }
})