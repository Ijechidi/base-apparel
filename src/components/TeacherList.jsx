import React from 'react';
import "../styles/teacherList.css";
import Image1 from '../assets/image.jpg';
import Image2 from '../assets/1 (2).jpg';
import Image3 from '../assets/1 (3).jpg';
import Image4 from '../assets/1 (4).jpg';

const teachers = [
  {
    image: Image1,
    name: 'Jenifer Adam',
    duration: '20 hours lesson',
    cost: '100',
  },
  {
    image: Image2,
    name: 'John Doe',
    duration: '15 hours lesson',
    cost: '80',
  },
  {
    image: Image3,
    name: 'Jane Smith',
    duration: '10 hours lesson',
    cost: '60',
  },
  {
    image: Image4,
    name: 'Emily Johnson',
    duration: '25 hours lesson',
    cost: '120',
  },
];

const TeacherList = () => {
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Teachers</h2>
        <select>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>
      <div className="list--container">
        {teachers.map((teacher, index) => (
          <div className="list" key={index}>
            <div className="teacher--detail">
              <img className="teach" src={teacher.image} alt={teacher.name} /> 
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>{teacher.cost}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
