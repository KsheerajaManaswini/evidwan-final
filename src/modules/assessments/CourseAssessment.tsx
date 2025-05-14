
import React from 'react';
import './CourseAssessment.css';
import Navbar from '../home/Navbar.tsx';

interface Course {
  courseID: string;
  title: string;
  description: string;
  instructorID: string;
  instructorName: string;
  category: string;
  imageUrl: string;
}

const enrolledCourses: Course[] = [
  {
    courseID: 'C002',
    title: 'Mastering Next.js: Full Stack Development',
    description: 'Build scalable full-stack apps using Next.js.',
    instructorID: 'I101',
    instructorName: 'Patel MemStack',
    category: 'Web Development',
    imageUrl: 'https://cdn.filestackcontent.com/8MbtJ4hTAaOk3KPcptqZ'
  },
  {
    courseID: 'C007',
    title: 'Python for Data Science',
    description: 'Explore data science concepts using Python libraries.',
    instructorID: 'I105',
    instructorName: 'Dr. Meera B.',
    category: 'Data Science',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.adyId6xev41Zm0pO6B1zZQHaDt?w=337&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7'
  },
  {
    courseID: 'C012',
    title: 'UI/UX Design Fundamentals',
    description: 'Design engaging and user-friendly interfaces.',
    instructorID: 'I107',
    instructorName: 'Sneha Desai',
    category: 'Design',
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.9Gmoyz-plh976-yepyrPigHaEW&rs=1&pid=ImgDetMain'
  }
];

const handleAssignment = () => {
  window.location.href = `${role === 'Student' ? '/student/assignment' : '/instructor/assignment'}`;
};

const handleQuiz = () => {
  window.location.href = `${role === 'Student' ? '/student/quiz' : '/instructor/quiz'}`;
}
const role = JSON.parse(localStorage.getItem("evidwan-role") || "null");

const CourseAssessment: React.FC = () => {
  return (
    <>
      <Navbar role={role} />
      <div className="course-assessment-page">
        <h2 className="heading">Assessments for Your Courses</h2>
        <div className="course-container">
          {enrolledCourses.length === 0 ? (
            <p style={{ textAlign: 'center', width: '100%' }}>No enrolled courses</p>
          ) : (
            enrolledCourses.map((course) => (
              <div key={course.courseID} className="course-card">
                <img src={course.imageUrl} alt={course.title} className="course-image" />
                <div className="course-details">
                  <h3>{course.title}</h3>
                  <p><strong>Description:</strong> {course.description}</p>
                  <p><strong>Instructor:</strong> {course.instructorName}</p>
                  <p><strong>Category:</strong> {course.category}</p>
                  <div className="assessment-buttons">
                    <button className="assessment-button" onClick={handleAssignment}>
                      {role === 'Student' ? 'View Assignment' : 'Add Assignment'}
                    </button>
                    <button className="assessment-button" onClick={handleQuiz}>
                      {role === 'Student' ? 'Take Quiz' : 'Add Quiz'}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CourseAssessment;
