import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback,deleteFeedback}) {
    return(
        <>
            {feedback.map((item)=>{
                return(
                    <FeedbackItem feedback={item} key={item.id} deleteFeedback={deleteFeedback}/> 
                )
            })}
        </>
    )
}
export default FeedbackList;