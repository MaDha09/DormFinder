import React from "react";
import bhouse from '../../../assets/images/bh1.jpg';
import location from '../../../assets/images/pin.png';
import bed from '../../../assets/images/bed.png';
import bath from '../../../assets/images/bath.png';
import chat from '../../../assets/images/chat.png';

function List () {
    return(
        <>       
            <div className="listbody">

                <div className="header">
                    <h3 className="my">My List</h3>
                    <button className="create me-4"> Create Post </button>
                </div>

                <div className="post mt-4">
                    <div className="imgbh">
                        <img src={bhouse} alt="" />
                    </div>

                    <div className="detail">
                        <h5 className="bhName mt-3 ms-1">Berden's Boardinghouse</h5>

                        <a href="#" className="btn btn-warning mt-5 mb-5 ms-3">₱ 1,500.00</a>

                        <p className="loc ms-3 mt-5"><img src={location} className="pin" /> Ampayon, Butuan City</p>

                        <div className="icons">
                            <p className="bedicon col-3">
                                <img src={bed}/> 1 bedroom
                            </p>
                            <p className="cr col-3">
                                <img src={bath}/> 1 bathroom
                            </p>
                            <p className="status col-3">

                            </p>

                            <p className="chat col-3">
                                <img src={chat} className="me-3"/>
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default List;