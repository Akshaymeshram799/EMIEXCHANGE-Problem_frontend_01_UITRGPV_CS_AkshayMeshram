import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';


const LordIcons = () => {
    defineElement(lottie.loadAnimation);
    return (
        <>


            <h2 style={{ margin: "3rem 0", textAlign: "center", fontSize: "2.4rem" }}>Information</h2>
            <div className='wrapper' style={{ height: "60vh" }}>

                <div>
                    <lord-icon
                        src="https://cdn.lordicon.com/msoeawqm.json"
                        trigger="loop"
                        style={{ width: "250px", height: "250px" }}>
                    </lord-icon>
                    <p style={{ textAlign: "center", fontSize: "2.3rem", fontWeight: "bolder", fontFamily: 'cursive' }}>
                        Search
                    </p>
                </div>

                <div>
                    <lord-icon
                        src="https://cdn.lordicon.com/gqzfzudq.json"
                        trigger="loop"
                        style={{ width: "250px", height: "250px" }}>
                    </lord-icon>
                    <p style={{ textAlign: "center", fontSize: "2.3rem", fontWeight: "bolder", fontFamily: 'cursive' }}>
                        Find
                    </p>
                </div>

                <div>
                    <lord-icon
                        src="https://cdn.lordicon.com/slkvcfos.json"
                        trigger="loop"
                        style={{ width: "250px", height: "250px" }}>
                    </lord-icon>
                    <p style={{ textAlign: "center", fontSize: "2.3rem", fontWeight: "bolder", fontFamily: 'cursive' }}>
                        Shop
                    </p>
                </div>

                <div>
                    <lord-icon
                        src="https://cdn.lordicon.com/gqdnbnwt.json"
                        trigger="loop"
                        style={{ width: "250px", height: "250px" }}>
                    </lord-icon>
                    <p style={{ textAlign: "center", fontSize: "2.3rem", fontWeight: "bolder", fontFamily: 'cursive' }}>
                        Grow
                    </p>
                </div>




            </div>
        </>
    )
}

export default LordIcons