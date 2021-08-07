export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    const firebase = getFirebase()
    firestore.collection("projects").add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
      // createdAt: new Date()
    }).then(() => {
      firestore.collection('notifications')
        .add({
          content: "Added new Idea",
          user: `${profile.firstName} ${profile.lastName}`,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
          // createdAt: new Date()
        })
    }).then(() => {

      dispatch({ type: "CREATE_PROJECT_SUCCESS" })
    }).catch((error) => {

      dispatch({ type: "CREATE_PROJECT_ERROR", error })
    })
  }
}


