import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo2.png'; // Add your logo image in this path

type NavbarProps = {
  userRole: string;
};

const Navbar: React.FC<NavbarProps> = ({ userRole }) => {
  userRole = JSON.parse(localStorage.getItem("evidwan-role") || "null");
  const handleLogout = () => {
    localStorage.removeItem("evidwan-current-user");
    window.location.href = "/";
  };

  const handleCourseCatalog = () => {
    window.location.href = `${userRole === 'Instructor' ? '/instructor/course' : '/student/course'}`;
  }
  const handleAssessment = () => {
    window.location.href = `${userRole === 'Instructor' ? '/instructor/assessment' : '/student/assessment'}`;
  }
  const handleCommunication = () => {
    window.location.href = `${userRole === 'Instructor' ? '/instructor/communication' : '/student/communication'}`;
  }
  const handlePerformance = () => {
    window.location.href = `${userRole === 'Instructor' ? '/instructor/report' : '/student/report'}`;
  }
  const handleClick = () => {
    window.location.href = `${userRole === 'Instructor' ? '/instructor/home' : '/student/home'}`;
  }
  const handleProfile = () => {
    window.location.href = `${userRole === 'Instructor' ? '/instructor/profile' : '/student/profile'}`;
  }
  const handleChat = () => {
    window.location.href = `${userRole === 'Instructor' ? '/instructor/chat' : '/student/chat'}`;
  }
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="e-vidwan logo" className="logo home" onClick={handleClick}/>
      </div>

      <ul className="nav-links">
        <li onClick={handleCourseCatalog}>Course Catalog</li>
        <li onClick={handleAssessment}>Assessment</li>
        <li onClick={handleCommunication}>Notification</li>
        <li onClick={handleChat}>Chat</li>
        <li onClick={handlePerformance}>Performance & Analytics</li>
        <li onClick={handleProfile}>Profile</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </nav>
  );
};

export default Navbar;
