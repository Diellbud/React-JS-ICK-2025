import React from 'react';
import { useState } from 'react';
import feedbackData from './data/feedbackData';
import FeedbackList from './components/FeedbackList';

function App(){
    const[feedback,setFeedback] = useState(feedbackData);

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id));
    }
    return(
        <>
            <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
        </>
    )
}
export default App;