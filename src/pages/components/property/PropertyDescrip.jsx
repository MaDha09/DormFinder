import React from "react";
import pin from '../../../assets/images/pin.png';

function PropertyDescrip (){
    return(
        <>

            <div className="descon">

                <h3 className="proptitle mt-3 ms-3">Berden's Boardinghouse</h3>
                <p className="btn btn-warning ms-3 mt-5">₱ 1,500.00</p>
                <p className="ms-3 mt-3"><img src={pin}/> Ampayon, Butuan City</p>
                <p className="ms-3 me-3">This is just a testing for House Owner listing. This is just a testing for House Owner listing. This is just a testing for House Owner listing. This is just a testing for House Owner listing. This is just a testing for House Owner listing. This is just a testing for House Owner listing.</p>
            </div>

        </>
    )
}

export default PropertyDescrip;