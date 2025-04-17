import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
function FeedbackForm({onAdd}) {
const [text, setText]= useState("")
const [disabled, setDisabled]= useState(true)
const [errorMessage, setErrorMessage]= useState(true)
const [rating, setRating]= useState(7)
    const handleOnChange = (e) =>{
        console.log(e.target.value);
        setText(e.target.value)
        if (text === "") {
            setDisabled(true);
            setErrorMessage(null)
        }else if(text!=="" && text.trim().length<10){
            setDisabled(true);
            setErrorMessage("Feedback must be more than 10 characters")
        }else{
            setDisabled(false);
            setErrorMessage(null)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e.target.value);
        if (text.trim().length>11) {
            const newFeedback={
                id:Math.random().toString(),
                text: text,
                rating: rating,
            }
            onAdd(newFeedback)
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Give us Feedback</h2>
                <RatingSelect select={(rating)=>setRating(rating)} />
                <div className="input-group">
                    <input type="text" placeholder="Feedback" onChange={handleOnChange} value={text}/>
                    <Button type="submit" version="primary" isDisabled={disabled}>Send</Button>
                </div>
                {errorMessage && <div className="message">{errorMessage}</div>}
            </form>
        </Card>
    )
}
export default FeedbackForm