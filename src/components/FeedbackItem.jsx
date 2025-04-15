import React from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import CardTitle from "./shared/CardTitle";
import CardImage from "./shared/CardImage";

function FeedbackItem({feedback,deleteFeedback }) {
    return(
        <>
            <Card>
                <div>{feedback.rating}</div>
                <CardTitle feedback={feedback}/>
                <button onClick={()=>{deleteFeedback(feedback.id)}}></button>
                <FaTimes color="purple"/>
                <CardImage src={feedback.image}/>
                <div>{feedback.text}</div>
            </Card>
        </>
    )
}
export default FeedbackItem;