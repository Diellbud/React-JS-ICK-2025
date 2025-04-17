import { useContext, useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "./Context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const { setFeedback, feedback } = useContext(FeedbackContext);
  const [rating, setRating] = useState(7);

  const handleOnChange = (e) => {
    setText(e.target.value);
    if (e.target.value === "") {
      setDisabled(true);
      setErrorMessage(null);
    } else if (e.target.value.trim().length < 10) {
      setDisabled(true);
      setErrorMessage("Feedback must be more than 10 characters");
    } else {
      setDisabled(false);
      setErrorMessage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        id: Math.random().toString(),
        text: text,
        rating: rating,
      };
      setFeedback([newFeedback, ...feedback]);
      setText("");
      setDisabled(true);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold">Give us Feedback</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Feedback"
            onChange={handleOnChange}
            value={text}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <Button type="submit" version="primary" isDisabled={disabled}>
            Send
          </Button>
        </div>
        {errorMessage && (
          <div className="text-sm text-red-500 font-medium">{errorMessage}</div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
