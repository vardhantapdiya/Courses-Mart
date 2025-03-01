import React, { useState } from 'react'
import Card from './Card'
const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      //values isliye kara kyuki key joki business, dev etc hai, usse mujhe farak nahi padta
      // mujhe to values se mtlb hai
      Object.values(courses).forEach(courseCategory => {
        courseCategory.forEach(course => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }
    else{
      //mai sirf specific category ka data array pass karunga
      return courses[category];
    }

    //getCourses function saare courses ka data ek single value mai daal kar deta hai.
  }

  return (
    <div className='flex flex-wrap justify-center gap-4
    mb-4'>
      {
        getCourses().map((course) => {
          return (
            <Card key={course.id} course={course}
              likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
          )
        })
      }
    </div>
  )
}

export default Cards
