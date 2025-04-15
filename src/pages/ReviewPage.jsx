import React from "react";
import Feedback from "../components/Feedback";
import Review from "../components/Review";
import FeedbackList from "../components/FeedbackList";

function ReviewPage() {
    return(
        <>
            <Feedback/> 
            <Review/>
            <FeedbackList/>
        </>
    )
}
export default ReviewPage;