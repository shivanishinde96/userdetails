import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Table
} from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'
import './UsersList.css'

const UsersList = () => {
    const { users, removeUser } = useContext(GlobalContext)
    console.log(users)
    return (
<>
{/*{users.length >0 ? <>
          {users.map((user)=>(<>
            <div class="mdc-data-table">
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label="User details">
      <thead>
        <tr class="mdc-data-table__header-row" key={user.id}>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">#</th>
          <th class="mdc-data-table__header-cell " role="columnheader" scope="col">Name</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">BirthDate</th>
          <th class="mdc-data-table__header-cell " role="columnheader" scope="col">Address</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Gender</th>
          <th class="mdc-data-table__header-cell " role="columnheader" scope="col">College</th>
          <th class="mdc-data-table__header-cell " role="columnheader" scope="col">Hobbies</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Update Action</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Delete Action</th>
        </tr>
      </thead>
      <tbody class="mdc-data-table__content" key={user.id}>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell" scope="row">{user.id}</th>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{user.fullname}</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">{user.birthdate}</td>
          <td class="mdc-data-table__cell">{user.address}</td>
          <td class="mdc-data-table__cell">{user.gender}</td>
          <td class="mdc-data-table__cell">{}</td>
          <td class="mdc-data-table__cell">{user.hobbies.map((hobby)=>hobby+',')}</td>
          <td class="mdc-data-table__cell"><Link className='btn btn-warning mr-1' to={`/edituser/${user.id}`}>Edit</Link></td>
          <td class="mdc-data-table__cell"><Button color='danger' onClick={()=>removeUser(user.id)}>Delete</Button></td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </>))}</>:<p>No Users Found</p>

}*/}

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
          <th>Hobbies</th>
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
          <td>{user.hobbies.map((hobby)=>hobby+',')}</td>
          <td><Link className='btn btn-warning mr-1' to={`/edituser/${user.id}`}>Edit</Link></td>
          <td><Button color='danger' onClick={()=>removeUser(user.id)}>Delete</Button></td>
        </tr>
      </tbody></>))}
            </> : <>No Users Found</>}
        </Table></>)
}

export default UsersList


