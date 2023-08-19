import React from 'react';

const Course = ({ title, description }) => {
  return (
    <div className="course">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Course;
