import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'
import useForm from '../useForm'
import validateError from '../validateError'
import '../error.css'

const EditUser = (props) => {
const {values,handleSubmit,errors}=useForm(submit,validateError)
const {users,editUser}=useContext(GlobalContext)
    const history=useHistory()
    const currentUserId=props.match.params.id

    useEffect(() => {
        const userId=currentUserId
        const selectedUser=users.find(user=>user.id===Number(userId))
        setUserEdit(selectedUser)
    },[currentUserId,users])

  function submit(){
    console.log('submitted successfully')
    editUser(useredit)
    history.push('/userslist')
  }
    const [useredit,setUserEdit]=useState({
        id:'',
        fullname:'',
        birthdate:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
        address:'',
        gender:'',
        hobbies:[]
    })
  const onEditChange=(e)=>{
    setUserEdit({...values.useredit,[e.target.name]:e.target.value})
}


const onEditHandleCheckboxChange = event => {
    let newArray = [...values.hobbies, event.target.id];
    if (values.hobbies.includes(event.target.id)) {
      console.log('event',event.target.id)
      newArray = newArray.filter(hobby => hobby !== event.target.id);
    }
    setUserEdit({
      hobbies: newArray
    })
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Enter Name'
          value={values.fullname} onChange={onEditChange} 
          name='fullname'
          className={`${errors.fullname && 'inputError'}`}/>
          {errors.fullname && <p className='error'>{errors.fullname}</p>}
      </FormGroup>
      <FormGroup>
        <Label>BirthDate</Label>
        <Input type='date' name='birthdate'
        placeholder='Enter BirthDate'
          value={values.birthdate} onChange={onEditChange} 
          name='birthdate'
          className={`${errors.birthdate && 'inputError'}`}
           />
           {errors.birthdate && <p className='error'>{errors.birthdate}</p>
           &&<span role='alert'>BirthDate is required</span>}
      </FormGroup>
      <FormGroup>
        <Label>Address</Label>
        <Input type='textarea' name='address'
        placeholder='Enter Address'
          value={values.address} onChange={onEditChange} 
          name='address'
          className={`${errors.address && 'inputError'}`} />
          {errors.address && <p className='error'>{errors.address}</p>}
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select"
        onChange={onEditChange} >
      
        </Input>
      </FormGroup>
      <FormGroup tag="fieldset">
        <Label>Please Select Gender</Label>
        <FormGroup>
          <Label>
            <Input type='radio' name='gender'
            onChange={onEditChange} 
              value='Male' 
              checked={values.gender === "Male"}
              />
            Male
          </Label>
        </FormGroup>
        <FormGroup>
          <Label >
            <Input type='radio' name='gender'
            onChange={onEditChange} 
              value='Female' 
              checked={values.gender === "Female"}/>
            Female
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Input type='radio' name='gender'
            onChange={onEditChange} 
              value='Other' 
              checked={values.gender === 'Other'}/>
          Other
          </Label>
        </FormGroup>
        {errors.gender && <p className='error'>{errors.gender}</p>}
      </FormGroup>
      <FormGroup>
          <Label>
          <Input type='checkbox' 
          name='reading'
          id='reading'
          value='reading'
          onChange={ onEditHandleCheckboxChange}/>
          Reading
        </Label>
      
        </FormGroup> 
        <FormGroup>
      <Label>
      <Input type='checkbox'
      name='travelling'
      id='travelling'
      value='travelling'
      onChange={ onEditHandleCheckboxChange}/>
      Travelling
    </Label>
  
    </FormGroup>
    <FormGroup>
      
      <Label>
      <Input type='checkbox' 
      name='gaming'
      value='gaming'
      id='gaming'
       onChange={onEditHandleCheckboxChange}/>
      Gaming
    </Label>
  
    </FormGroup>
    <FormGroup>
      
      <Label>
      <Input type="checkbox" 
      name='drawing'
      value='drawing'
      id='drawing'
       onChange={onEditHandleCheckboxChange}/>
      Drawing
    </Label>

    {errors.hobbies && <p className='error'>{errors.hobbies}</p>}
    </FormGroup>
    {values.hobbies.map((hobby,index)=>{
          return <p key={index}>{hobby}</p>
        })}  
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default EditUser



