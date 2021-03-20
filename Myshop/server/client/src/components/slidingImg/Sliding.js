import React from 'react'
import slide1 from '../img/slides/slide1.jpeg'
import slide2 from '../img/slides/slide2.jpeg'
import slide3 from '../img/slides/slide3.jpeg'
import slide4 from '../img/slides/slide4.jpeg'
import slide5 from '../img/slides/slide5.jpg'


 const SlidingPage =()=> {
    
        return (
            <div className="slideMainCont">
            <div className="slidingContainer">
                
                
                <img className="slidingImg" src={slide1}/>
                <img className="slidingImg" src={slide2}/>
                <img className="slidingImg" src={slide3}/>
                <img className="slidingImg" src={slide4}/>
                <img className="slidingImg" src={slide5}/>
               
               
               
                <div className="sliding-opacity"></div>
            </div>
            
            </div>
        )
    }


export default SlidingPage;
