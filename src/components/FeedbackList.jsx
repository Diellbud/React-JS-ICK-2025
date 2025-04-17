import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({feedback}) {
    
    return(
        <>
            {feedback.map((item)=>{
                return(
                    <FeedbackItem feedback={item} key={item.id}/> 
                )
            })}
        </>
    )
}
export default FeedbackList;