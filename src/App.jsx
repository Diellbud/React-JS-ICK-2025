import React from 'react';
import { useState } from 'react';
import feedbackData from './data/feedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';

function App(){
    const[feedback,setFeedback] = useState(feedbackData);

    function onAdd(newFeedback) {
        setFeedback([newFeedback,...feedback])
    }

    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id));
    }
    return(
        <>
            <FeedbackForm onAdd={onAdd} />
            <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
        </>
    )
}
export default App;