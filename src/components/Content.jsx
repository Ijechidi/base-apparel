import React from 'react' ;
import ContentHeader from './ContentHeader' ;
import Card from './Card' ;
import "../styles/content.css" ;


import TeacherList from './TeacherList';
const Content = () => {
  return (
    <div className='content'>
        <ContentHeader/>
        <Card/>
        <TeacherList/>
    </div>
  )
}

export default Content