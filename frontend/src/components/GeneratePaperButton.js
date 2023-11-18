import React from 'react';

const GeneratePaperButton = ({ onGeneratePaper }) => {
  return (
    <div>
      <button onClick={onGeneratePaper}>Generate Question Paper</button>
    </div>
  );
};

export default GeneratePaperButton;
