import React, { useState, useContext, useEffect } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'
import { useHistory } from 'react-router-dom'
const EditUser = (props) => {
  
  const { users,editUser } = useContext(GlobalContext)
  const history = useHistory()
  const currentUserId=props.match.params.id
  const [selectedUserValue,setSelectedUserValue] = useState({
    id:'',
    fullname: '',
    birthdate: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
    address: '',
    gender: '',
    college: [],
    hobbies: []
  })
  const current = new Date().toISOString().split("T")[0]
  useEffect(()=>{
    const userid=currentUserId
    const selectedUser=users.find((user)=>user.id===userid)
    setSelectedUserValue(selectedUser)
  },[currentUserId,users])

  const handleSubmit = () => {
    editUser(selectedUserValue)
    history.push('/userslist')
  }

  const handleChange = e => {
    setSelectedUserValue({
      ...selectedUserValue, [e.target.name]: e.target.value
    })
  }


  const handleCheckboxChange = event => {
    let newArray = [...selectedUserValue.hobbies, event.target.id];
    if (selectedUserValue.hobbies.includes(event.target.id)) {
      newArray = newArray.filter(hobby => hobby !== event.target.id);
    }
    setSelectedUserValue({
      hobbies: newArray
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Enter Name'
          value={selectedUserValue.fullname}
          onChange={handleChange}
          name='fullname'
          autoComplete='off'
        />
      </FormGroup>
      <FormGroup>
        <Label>BirthDate</Label>
        <Input type='date'
          placeholder='Enter BirthDate'
          value={selectedUserValue.birthdate} onChange={handleChange}
          name='birthdate'
          max={current}
        />
      </FormGroup>
      <FormGroup>
        <Label>Address</Label>
        <Input type='textarea'
          placeholder='Enter Address'
          value={selectedUserValue.address} onChange={handleChange}
          name='address' />
      </FormGroup>
      {/*<FormGroup row>
        <Label for="exampleSelect" sm={2}>Select College Name</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect" onChange={handleChange}>
            <option value='' disabled hidden>College List</option>
            {selectedUserValue.college &&
              selectedUserValue.college.map((col, index) => {
                return <option value={col.name} key={index + 1}>{col.name}</option>
              })
            }
          </Input>
        </Col>
      </FormGroup>*/}
      <FormGroup tag="fieldset">
        <Label>Please Select Gender</Label>
        <FormGroup>
          <Label>
            <Input type='radio' name='gender'
              onChange={handleChange}
              value='Male'
              checked={selectedUserValue.gender === "Male"}
            />
            Male
          </Label>
        </FormGroup>
        <FormGroup>
          <Label >
            <Input type='radio' name='gender'
              onChange={handleChange}
              value='Female'
              checked={selectedUserValue.gender === "Female"} />
            Female
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Input type='radio' name='gender'
              onChange={handleChange}
              value='Other'
              checked={selectedUserValue.gender === 'Other'} />
          Other
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <FormGroup>
          <Input type="checkbox" name="travelling" value='travelling' id="travelling" onChange={handleCheckboxChange} />
          <Label for="travelling">Travelling</Label>
        </FormGroup>
        <FormGroup>
          <Input type="checkbox" name="reading" value='reading' id="reading" onChange={handleCheckboxChange} />
          <Label for="reading">Reading</Label>
        </FormGroup>
        <FormGroup>
          <Input type="checkbox" name="gaming" value='gaming' id="gaming" onChange={handleCheckboxChange} />
          <Label for="gaming">Gaming</Label>
        </FormGroup>
      </FormGroup>
      {selectedUserValue.hobbies && selectedUserValue.hobbies.map((hobby, index) => {
        return <p key={index}>{hobby.name}</p>
      })}
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default EditUser
