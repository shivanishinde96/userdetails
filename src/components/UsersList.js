import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Table
} from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'

const UsersList = () => {
    const { users, removeUser } = useContext(GlobalContext)
    console.log(users)
    return (

        <Table dark >
            {users.length > 0 ? <>
                {users.map((user) => (<>
      <thead>
        <tr key={user.id}>
          <th>#</th>
          <th> Name</th>
          <th>BirthDate</th>
          <th>Address</th>
          <th>Gender</th>
          <th>College</th>
          <th>Update Action</th>
          <th>Delete Action</th>
        </tr>
      </thead>
      <tbody key={user.id} >
        <tr>
          <th scope="row">{user.id}</th>
          <td>{user.fullname}</td>
          <td>{user.birthdate}</td>
          <td>{user.address}</td>
          <td>{user.gender}</td>
          <td>{}</td>
          <td><Link className='btn btn-warning mr-1' to={`/edituser/${user.id}`}>Edit</Link></td>
          <td><Button color='danger' onClick={()=>removeUser(user.id)}>Delete</Button></td>
        </tr>
      </tbody></>))}
            </> : <p>No Users Found</p>}
        </Table>
    )
}

export default UsersList


