import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import { useDispatch } from 'react-redux'
import { addtocart } from './slice/cartslice'
import { BringOutCart } from './slice/cartslice'


const Productt = ({img,price,heading}) => {

    let dispatch = useDispatch()
    
    let handlecart =()=> {
        dispatch(BringOutCart(true)) // add to cart a click korar sathe sathe ber heye asve 
        dispatch(addtocart( {  // add to cart click korar sathe sathe select kora product ti cart a add hobe 
            title:heading,
            price:44,
            image:img,
            quantity:1
        }))
    }







  return (
    <div>
        <div  className='relative overflow-hidden group flex gap-x-[100px]'>
        <Image src={img} className="w-full"/> 
        
            <div className='bg-slate-500 absolute -bottom-32 left-0 w-full  p-6 group-hover:bottom-0 duration-500'>
                <p>Add to Wish List</p>
                <p>Compare</p>
               <div onClick={handlecart}>   {/* handelcart function ta impliment korlam , akhn add to cart a click korar sathe sathe dual kaj korbe . firstly: side cart open hobe secondly: select kora product cart a impliment hobe  */}
               <p className='text-bold cursor-pointer'>Add to Cart</p>
               </div>
            </div>
        </div>
        <Flex className="justify-between mt-3">
            
            <div className=''>{heading}</div>   {/* Product Heading ta akhene set korlam  */}
           <p className='font-dm text-base text-bold font-regular'>{price}</p>  {/*  Product Price set korlam   */}
         </Flex>
    </div>
   
  )
}

export default Productt