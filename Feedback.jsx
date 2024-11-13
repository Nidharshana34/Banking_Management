import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeedbackSurvey.css";

const FeedbackSurvey = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => { 
    
    axios.get("http://localhost:3000/feedbacks") 
      .then((response) => {
        setFeedbacks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching feedback:", error);
      });
  }, []);

  const handleDelete = (index, id) => {
    axios.delete(`http://localhost:3000/feedbacks/${id}`) 
      .then(() => {
        const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
        setFeedbacks(updatedFeedbacks);
      })
      .catch((error) => {
        console.error("Error deleting feedback:", error);
      });
  };

  return (
    <div className="feedback-container">
      <h1>Feedback and Survey Management</h1>
      <div className="feedback-count">
        <h2>Total Feedback: {feedbacks.length}</h2>
      </div>
      <div className="feedback-list">
        <h2>Feedback Received</h2>
        {feedbacks.length === 0 ? (
          <p>No feedback received yet.</p>
        ) : (
          <ul>
            {feedbacks.map((item, index) => (
              <li key={item.id}>
                <strong>Account Number:</strong> {item.accountNumber} <br />
                <strong>{item.customerName}:</strong> {item.feedback} <br />
                <strong>Date:</strong> {item.date} <br />
                <strong>Rating:</strong> {item.rating} ⭐
                <button onClick={() => handleDelete(index, item.id)} className="delete-button">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FeedbackSurvey;
