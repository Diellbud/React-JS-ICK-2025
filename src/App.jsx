import React, { useContext } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import Contact from './pages/Contact';
import Header from './components/Header';
import Posts from './components/Posts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackProvider, { FeedbackContext } from './components/Context/FeedbackContext';
import './style.css';

function AppContent() {
  const { feedback, setFeedback } = useContext(FeedbackContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <FeedbackForm/>
              <FeedbackList feedback={feedback}/>
            </div>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/:id/:slug" element={<Posts />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <FeedbackProvider>
      <AppContent />
    </FeedbackProvider>
  );
}

export default App;