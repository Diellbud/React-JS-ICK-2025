import React, { useContext} from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import CardTitle from "./shared/CardTitle";
import { FeedbackContext } from "./Context/FeedbackContext";
function FeedbackItem({feedback}) {
    const {deleteFeedback} = useContext(FeedbackContext)
    return(
        <>
            <Card>
                <div>{feedback.rating}</div>
                <CardTitle feedback={feedback.text}/>
                <FaTimes onClick={()=>{deleteFeedback(feedback.id)}} color="purple"/>
            </Card>
        </>
    )
}
export default FeedbackItem;