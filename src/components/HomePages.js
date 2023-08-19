import React from 'react';
import Course from './Course';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to GUVI Courses</h2>
      <Course title="Full Stack Development" description="Learn the art of full stack development." />
      {/* Add more Course components */}
    </div>
  );
};

export default HomePage;
