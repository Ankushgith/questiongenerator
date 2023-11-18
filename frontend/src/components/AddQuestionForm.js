import React, { useState } from 'react';

const AddQuestionForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [marks, setMarks] = useState('');

  const handleAddQuestion = () => {
    const newQuestion = { question, difficulty, marks: parseInt(marks, 10) };
    onAddQuestion(newQuestion);
    setQuestion('');
    setDifficulty('Easy');
    setMarks('');
  };

  return (
    <div>
      <h2>Add Question</h2>
      <label>
        Question:
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </label>
      <br />
      <label>
        Difficulty:
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </label>
      <br />
      <label>
        Marks:
        <input type="text" value={marks} onChange={(e) => setMarks(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAddQuestion}>Add Question</button>
    </div>
  );
};

export default AddQuestionForm;
