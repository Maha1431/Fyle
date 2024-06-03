import React from 'react'
import "./navbar.css";
import img from "../assests/image.png"

function Best()
{
  return(
    <div className='bestcontainer'>
        <h6 className='heading2'>Our project</h6>
        <h1>WHY WE ARE BEST</h1>
        <div className='best'>
            <img src={img} alt='altImage' className="image1" />
            <div className='sidediv'>
                <h6>Genderless Kei – Japan’s Hot</h6>
               <p> Set to launch on the manufacturer’s
                <br/> new A330neo aircraft in 2017, <br/>
                it’s offering lots of
                </p> 
                <div className='second'> 
                <h6>Better Strategy & Quality</h6>
                <p>Set to launch on the manufacturer’s <br/> new A330neo aircraft in 2017, <br />it’s offering lots of</p>
                </div>  
                <h6>Genderless Kei – Japan’s Hot</h6>
               <p> Set to launch on the manufacturer’s
                <br/> new A330neo aircraft in 2017, <br/>
                it’s offering lots of
                </p>          
                </div>
        </div>
    </div>
  )
}
export default Best;