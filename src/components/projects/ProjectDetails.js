import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'



function ProjectDetails(props) {
  const { auth, project } = props
  if (!auth.uid) return <Redirect to="/signIn" />

  // const { project } = props

  if (project) {

    return (
      <div className="container section project-dtails">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action green lighten-5 pink-text">
            <div>Posted by : {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project.....</p>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null

  return {
    project: project,
    auth: state.firebase.auth

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
