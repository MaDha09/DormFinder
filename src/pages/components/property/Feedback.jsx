import React, { useState } from "react";

function Feedback () {

    const [rating, setRating] = useState(0);

    const handleStarClick = (starIndex) => {
        setRating(starIndex);
    };

        return(
            <>
                <div className="feedback">

                    <h3 className="feedbackTitle ms-3">RATE & COMMENT</h3>

                    <h5 className="rating ms-3">Rate this post:</h5>

                    <div className="stars ms-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    onClick={() => handleStarClick(star)}
                                    style={{
                                        cursor: "pointer",
                                        color: star <= rating ? "#FFD700" : "#ccc", // Highlight selected stars
                                        fontSize: "24px",
                                    }}
                                >
                                    ★
                                </span>
                            ))}
                    </div>

                    <div className="inputtxt">
                        <input
                        className="inputcom mb-3"
                        type="text"
                        name=""
                        id=""
                        placeholder="Write a comment..."
                        />
                    </div>

                    <button className="btn btn-primary">Submit</button>

                </div>
            </>
        ) 
}

export default Feedback;