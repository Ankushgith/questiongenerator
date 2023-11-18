import React, { useState } from 'react';
import QuestionList from '../components/QuestionList';
import AddQuestionForm from '../components/AddQuestionForm';
import GeneratePaperButton from '../components/GeneratePaperButton';

const Home = () => {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);

  };

  const handleGeneratePaper = () => {
  };

  return (
    <div>
      <h1>Question Paper Generator</h1>
      <AddQuestionForm onAddQuestion={handleAddQuestion} />
      <GeneratePaperButton onGeneratePaper={handleGeneratePaper} />
      <QuestionList questions={questions} />
    </div>
  );
};

export default Home;
