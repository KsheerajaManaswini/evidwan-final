import React, { useState } from 'react';
import './StudentQuiz.css';
import Navbar from "../home/Navbar.tsx";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const StudentQuiz: React.FC = () => {
  const questions: Question[] = [
    {
      question: "What is React?",
      options: ["A library for building user interfaces", "A database", "A programming language", "A web server"],
      correctAnswer: "A library for building user interfaces",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Facebook", "Microsoft", "Twitter"],
      correctAnswer: "Facebook",
    },
    {
      question: "What is JSX?",
      options: ["A syntax extension for JavaScript", "A type of database", "A CSS framework", "A programming language"],
      correctAnswer: "A syntax extension for JavaScript",
    },
    {
      question: "What is the virtual DOM?",
      options: ["A copy of the real DOM", "A database", "A programming language", "A server"],
      correctAnswer: "A copy of the real DOM",
    },
    {
      question: "What is a React component?",
      options: ["A reusable piece of UI", "A database", "A server", "A programming language"],
      correctAnswer: "A reusable piece of UI",
    },
    {
      question: "What is the use of useState in React?",
      options: ["To manage state in a functional component", "To fetch data", "To handle events", "To create a class component"],
      correctAnswer: "To manage state in a functional component",
    },
    {
      question: "What is the purpose of props in React?",
      options: ["To pass data to components", "To manage state", "To handle events", "To create a class component"],
      correctAnswer: "To pass data to components",
    },
    {
      question: "What is React Router used for?",
      options: ["To handle routing in a React application", "To manage state", "To fetch data", "To create animations"],
      correctAnswer: "To handle routing in a React application",
    },
    {
      question: "What is the use of useEffect in React?",
      options: ["To handle side effects in a functional component", "To manage state", "To fetch data", "To create a class component"],
      correctAnswer: "To handle side effects in a functional component",
    },
    {
      question: "What is the purpose of keys in React?",
      options: ["To identify elements in a list", "To manage state", "To handle events", "To create a class component"],
      correctAnswer: "To identify elements in a list",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionIndex: number, option: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = option;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setSubmitted(true);
  };

  return (
    <>
    <Navbar role="student" />
    <div className="take-quiz-page first-color">
      <div className="quiz-container second-color">
        {submitted ? (
          <div className="result-container">
            <h2>Quiz Submitted!</h2>
            <p>Your Score: <strong>{score}</strong> / {questions.length}</p>
          </div>
        ) : (
          <>
            <h2 className="quiz-title">React Quiz</h2>
            {questions.map((q, index) => (
              <div key={index} className="question-container">
                <h3 className="question-title">{index + 1}. {q.question}</h3>
                {q.options.map((option, optIndex) => (
                  <label key={optIndex} className="option-label">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={selectedAnswers[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <button onClick={handleSubmit} className="submit-button third-color">
              Submit Quiz
            </button>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default StudentQuiz;
