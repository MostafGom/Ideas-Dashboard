import React, { useEffect, useState } from 'react'
import moment from 'moment'

// import { db } from '../../firebase'

function Notifications(props) {
  // const [notifications, setNotifications] = useState([])

  // useEffect(() => {
  //   db.collection('projects')
  //     .orderBy('createdAt', 'desc')
  //     .onSnapshot(snapshot => {
  //       setNotifications(snapshot.docs.map(doc => (
  //         {
  //           id: doc.id,
  //           data: doc.data()
  //         }
  //       )))
  //     })
  // }, [])

  // console.log(notifications);

  const { notifications } = props
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications && notifications.map(item => (
              <li key={item.id} >
                <span className="pink-text" style={{ fontSize: "18px" }} >{item.user} </span>
                <span> {item.content}</span>
                <div className="grey-text note-date">
                  {item.createdAt ? moment(item.createdAt.toDate()).fromNow() : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
