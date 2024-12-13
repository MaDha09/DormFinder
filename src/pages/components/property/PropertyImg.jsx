import React from "react";
import bhimg from '../../../assets/images/bh2.jpg'

function PropertyImg () {
        return(
            <>
                <div className="pimg mt-5">
                    <div className="thumbnail">
                        <img src={bhimg}/>
                    </div>
                    <div className="otherimg">

                        <div className="supimg mt-3"><img src={bhimg}/></div>
                        <div className="supimg"><img src={bhimg}/></div>
                        <div className="supimg mb-3"><img src={bhimg}/></div>

                    </div>
                </div>
            </>
        )
}

export default PropertyImg;