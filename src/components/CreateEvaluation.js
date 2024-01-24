// frontend/src/components/CreateEvaluation.js
import React, { useState } from 'react';
import { createEvaluation } from '../services/evaluationService';

const CreateEvaluation = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ text: '', options: [''], correctAnswer: '' }]);
  const [createdEvaluation, setCreatedEvaluation] = useState(null);

  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', options: [''], correctAnswer: '' }]);
  };

  const handleCreateEvaluation = async () => {
    try {
      const response = await createEvaluation({ title, questions });
      setCreatedEvaluation(response.data); // Almacenar la evaluación creada
      // Puedes restablecer el estado para permitir la creación de nuevas evaluaciones si es necesario
      // setTitle('');
      // setQuestions([{ text: '', options: [''], correctAnswer: '' }]);
    } catch (error) {
      console.error(error);
      // Mostrar el error al usuario o tomar medidas adecuadas
    }
  };

  const handleAddOption = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options.push('');
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (questionIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].correctAnswer = value;
    setQuestions(newQuestions);
  };

  


return (
  <div className="container">
    <h2>Create Evaluation</h2>
    <label>Title:</label>
    <input className="input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

    {questions.map((question, questionIndex) => (
      <div key={questionIndex} className="question-container">
        <label>{`Question ${questionIndex + 1}:`}</label>
        <input
          className="input"
          type="text"
          value={question.text}
          onChange={(e) => {
            const newQuestions = [...questions];
            newQuestions[questionIndex].text = e.target.value;
            setQuestions(newQuestions);
          }}
        />

        <label>Options:</label>
        {question.options.map((option, optionIndex) => (
          <div key={optionIndex}>
            <input
              className="input"
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
            />
          </div>
        ))}
        <button className="button" onClick={() => handleAddOption(questionIndex)}>
          Add Option
        </button>

        <label>Correct Answer:</label>
        <input
          className="input"
          type="text"
          value={question.correctAnswer}
          onChange={(e) => handleCorrectAnswerChange(questionIndex, e.target.value)}
        />
      </div>
    ))}

    <button className="button" onClick={handleAddQuestion}>
      Add Question
    </button>
    <button className="button" onClick={handleCreateEvaluation}>
      Create Evaluation
    </button>

    {createdEvaluation && (
      <div>
        <h2>Created Evaluation</h2>
        <pre>{JSON.stringify(createdEvaluation, null, 2)}</pre>
      </div>
    )}
  </div>
);
};

export default CreateEvaluation;