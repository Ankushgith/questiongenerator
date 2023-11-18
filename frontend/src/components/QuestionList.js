import React from 'react';

const QuestionList = ({ questions }) => {
  return (
    <div>
      <h2>Question List</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.question} - {question.difficulty} - {question.marks} marks
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
