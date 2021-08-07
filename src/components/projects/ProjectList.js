import React from 'react'
import { Link } from 'react-router-dom'
import ProjectSummary from './ProjectSummary'

function ProjectList({ projects }) {
  return (
    <div className='project-list section' >
      {projects && projects.map(project => (
        <Link to={'/project/' + project.id} style={{ textDecoration: "none", color: "inherit" }} >
          <ProjectSummary key={project.id} project={project} />
        </Link>
      ))
      }
    </div >
  )
}

export default ProjectList
