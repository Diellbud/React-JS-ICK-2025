import { createContext, useState } from "react";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
      {
        id: 1,
        text: "use Context",
        rating: 4,
      },
    ]);
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id));
      };
  
    return (
        <FeedbackContext.Provider value={{ feedback, setFeedback, deleteFeedback}}>
          {children}
        </FeedbackContext.Provider>
      );
    };
    export default FeedbackProvider;