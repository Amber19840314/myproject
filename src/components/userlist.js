import React from 'react'
import User from './user'

const UserList = (props) => {
    console.log(props.users)
    let user1 = []
   return(
       <ul>
           {user1.map((user)=> <User key={user._id} onClick={()=>props.editUser(user._id)} updated={user.updated} text={user.text}/>)}
       </ul>
   )

}

export default UserList
