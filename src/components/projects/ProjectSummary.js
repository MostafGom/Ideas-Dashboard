import React from 'react'
import moment from 'moment'
function ProjectSummary({ project }) {
  return (

    <div className="card z-depth-0 project-summary">
      <div className="card-content gray-text text-darken-3">
        <span className="card-title pink-text">{project.title}</span>
        <p>Posted by : {project.authorFirstName} {project.authorLastName}</p>
        <p className="gray-text">{project.createdAt && moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
