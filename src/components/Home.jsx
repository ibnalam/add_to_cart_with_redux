import React from 'react'
import Productt from './Productt'
import spfFour from '../assets/spfFour.webp'
import spfThree from '../assets/spfThree.webp'
import spfTwo from '../assets/spfTwo.webp'
import spfOne from '../assets/spfOne.webp'
import Searchbarr from './Searchbarr'

const Home = () => {
  return (
    <section>
        <div>
            <Searchbarr/>
        </div>
         <div className='flex gap-x-[100px]'>
            <Productt img={spfFour} heading="four"/>
            <Productt img={spfThree} heading="three"/>
            <Productt img={spfTwo}  heading="two"/>
            <Productt img={spfOne}  heading="one"/> 
        </div>
    </section>
  )
}

export default Home