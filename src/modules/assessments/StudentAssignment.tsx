import React, { useState, ChangeEvent } from 'react';
import './StudentAssignment.css';
import Navbar from "../home/Navbar.tsx";

const StudentAssignment: React.FC = () => {
  const assignmentQuestion = "Explain the lifecycle methods in React with examples.";
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = () => {
    if (!uploadedFile) {
      alert("Please upload a file before submitting.");
      return;
    }

    const assignments = JSON.parse(localStorage.getItem('studentAssignments') || '[]');
    assignments.push({
      question: assignmentQuestion,
      fileName: uploadedFile.name,
      uploadedAt: new Date().toISOString(),
    });
    localStorage.setItem('studentAssignments', JSON.stringify(assignments));
    setSubmitted(true);
  };

  return (
    <>
    <Navbar role="student" />
    <div className="take-assignment-page first-color">
      <div className="assignment-container second-color">
        {submitted ? (
          <div className="result-container">
            <h2>Assignment Submitted!</h2>
            <p>Your file "<strong>{uploadedFile?.name}</strong>" has been successfully uploaded.</p>
          </div>
        ) : (
          <>
            <h2 className="assignment-title">Assignment</h2>
            <div className="question-container">
              <h3 className="question-text">{assignmentQuestion}</h3>
            </div>
            <div className="file-upload-container">
              <label className="file fourth-color">
                Upload File
                <input type="file" name="file" onChange={handleFileUpload} />
              </label>
              {uploadedFile && <p className="file-name">Selected File: {uploadedFile.name}</p>}
            </div>
            <button onClick={handleSubmit} className="submit-button third-color">
              Submit Assignment
            </button>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default StudentAssignment;
