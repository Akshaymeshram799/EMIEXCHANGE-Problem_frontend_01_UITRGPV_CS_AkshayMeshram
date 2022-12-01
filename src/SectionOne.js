import slide from './assets/slide1.jpg'
import './sectionOneMain.css';
import lottie from './assets/slide1animation.json'

const SectionOne = () => {






    return (
        <>
            <div className='sectionOne'>
                <div className='firstOneFrage'>
                 <h3 class="animate-charcter">AnimatedImage</h3>
                </div>
                <div style={{ padding: "1rem" }}>
                    <img src={slide} className='img' />
                </div>
            </div>
        </>
    )
}



export default SectionOne;