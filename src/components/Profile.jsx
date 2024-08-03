import React from 'react'
import ProfileHeader  from './ProfileHeader' ;
import userImage from '../assets/1 (5).jpg' ;
import '../styles/profile.css';
import { BiBook } from 'react-icons/bi';

const courses = [
  {
    
    title: 'HTML CSS',
    duration: '5 hours ',
    icon: <BiBook/>,
  },
  {
    
    title: 'Java',
    duration: '2 hours ',
    icon: <BiBook/>,
  },
  {
    
    title: 'Python',
    duration: '2 hours',
    icon: <BiBook/>,
  },
];
const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader/>

      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt="" />
          <h3 className="username">Janie</h3>
          <span className="profession">Teacher</span>
        </div>

        <div className="user-courses">
        {courses.map((courses, index) => (
          <div className="courses" key={index}>
            <div className="courses-detail">
             <div className="courses-cover">{courses.icon}</div>
              <div className="courses-name">

                <h5 className="title">{ courses.title}</h5>
                <span className="duration">{courses.duration}</span>
              </div>
            </div>
            <div className="action">:</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Profile