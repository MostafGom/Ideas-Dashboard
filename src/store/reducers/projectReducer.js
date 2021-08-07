const initialState = {
  projects: [
    { id: "1", title: "Lorem loremd wpo", content: 'm,nsdkjaiuewphfuwep' },
    { id: "2", title: "twpwtwptpw Lorem loremd wpo", content: 'qytwetiuqiodoqwhpui' },
    { id: "3", title: "threhthreerLorem loremd wpo", content: 'p[./,k[up[23uewphfuwep' }
  ]
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("project is being created");
      return state
    case "CREATE_PROJECT_ERROR":
      console.log("can't create project");
      return state
    default:
      return state
  }
}


export default projectReducer