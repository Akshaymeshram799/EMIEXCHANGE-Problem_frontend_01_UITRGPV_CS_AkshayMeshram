import imgOne from './assets/slide1.jpg'
import imgTwo from './assets/slide2.jpg'
import imgThree from './assets/slide3.jpg'
import './sectionTwo.css'

const SectionTwo = ()=>{
    return(
        <>
              <h2 style={{margin:"3rem 0",textAlign:"center",fontSize:"2.4rem"}}>Banner</h2>
           <div className='wrapper'>
            <div>
                <img className='imgSrc' src={imgOne} alt="" />
            </div>
            <div>
                <img className='imgSrc' src={imgTwo} alt="" />
            </div>
            <div>
                <img className='imgSrc' src={imgThree} alt="" />
            </div>
           </div>
        </>
    )
}

export default SectionTwo