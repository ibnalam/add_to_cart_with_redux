import React, { useState } from 'react'
import {GiShoppingCart} from 'react-icons/gi'
import {RxCross1} from 'react-icons/rx'
import {ImCross} from 'react-icons/im'
import {useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Increment, BringOutCart, Decrement } from './slice/cartslice'
import { remove } from './slice/cartslice'
import Image from './Image'



const Searchbarr = () => {

    let dispatch = useDispatch()
    let [SubTotal , setSubTotal] = useState(0)
    let BringOutSideCart = useSelector(state=> state.cart.openCartItem)
    let cart =  useSelector((state)=> state.cart.cartItem)
    let handleremove = (item)=>{
      dispatch(remove(item)) 
    }

    let handleIncrement = (item)=> {
      dispatch(Increment(item))
    }
    let handleDecrement = (item)=> {
      dispatch(Decrement(item))
    }
    useEffect(()=>{
      let SubTotal  = 0
      cart.map(item=> {
        SubTotal += item.price * item.quantity
      })
      setSubTotal(SubTotal)
      },[cart])




  return (
    <section>
        <div className='text-white text-[45px] '>
            <GiShoppingCart onClick={()=> dispatch(BringOutCart(true))} className='ml-[1600px] cursor-pointer'/>
        </div>
        {BringOutSideCart && 
        <div className='w-2/5 bg-[#A8A8A8] text-white h-screen absolute top-0 right-0 z-10 '>
          <ImCross  onClick={()=> dispatch(BringOutCart(false))} className='cursor-pointer ml-[15px] mt-[15px] mb-[15px]'/>
                <ul className='flex gap-x-[165px] ml-[25px]'>
                    <li>name </li>
                    <li> price </li>
                    <li>quantity </li>
                    <li>total </li>
                </ul>

                {cart.length > 0 
                 ?
                 cart.map(item => (
                    <ul className='flex border-b border-solid border-white py-5'>
                           <li>
                               <button>
                                   <RxCross1  onClick={ ()=> handleremove(item)} className='ml-[10px] mt-[12px]'/>
                               </button>
                           </li>
                           <li>
                            <Image src={item.image} className="w-[40px] h-[50px] ml-[20px]"/>
                           </li>
                           <li className='ml-[10px] mt-[8px]'>{item.title} </li>
                           <li className='ml-[110px] mt-[12px]'>{item.price}</li>
                           <li className='border border-white border-solid ml-[170px] px-[10px] pt-[10px]'>
                               <button onClick={()=> handleDecrement(item)} className='mr-[20px]'>-</button>
                                   {item.quantity}
                               <button onClick={()=> handleIncrement(item)}  className='ml-[20px]'>+</button>
                           </li>
                           <li className='ml-[170px] mt-[12px]'>{item.price * item.quantity}</li>                
                    </ul>
                       ))
                :
                <h2 className='text-white text-center mt-[300px] text-red-800'>Cart Is Empty</h2>
                 }
                 <h3 className='text-white absolute bottom-0 mb-[20px] ml-[20px]'>Total :   
                    <span className='text-red-500 ml-[8px]'>{SubTotal}</span>
                 </h3>
                
        </div>
        }
       

    </section>
  )
}

export default Searchbarr