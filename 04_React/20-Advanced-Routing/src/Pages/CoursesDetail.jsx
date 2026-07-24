// This is example of Dynamic Routing --  isme tm courses page ke aage / lga kr kuch bhi likhte ho to ye page khulega

import React from 'react'
import {useParams} from 'react-router-dom'

const CoursesDetail = () => {
    const params = useParams()  // ye hook h jo tmhare url ke parameters ko access krta h , jaise courses/:id me id ko access krne ke liye useParams hook ka use krte h
  return (
    <div>
        <h1> {params.id} Courses Detail Page</h1>
    </div>
  )
}

export default CoursesDetail