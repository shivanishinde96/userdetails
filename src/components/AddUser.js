import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col
} from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuid } from 'uuid'
import useForm from '../useForm'
import validateError from '../validateError'
import '../error.css'

const AddUser = () => {
  const { handleChange, values, handleSubmit, handleCheckboxChange, errors } = useForm(submit, validateError)
  const { addUser } = useContext(GlobalContext)
  const history = useHistory()
  function submit() {
    console.log('submitted successfully')
    const newUser = {
      id: uuid(),
      fullname: values.fullname,
      birthdate: values.birthdate,
      address: values.address,
      college: values.college,
      gender: values.gender,
      hobbies: values.hobbies
    }
    addUser(newUser)
    history.push('/userslist')
  }
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Enter Name'
          value={values.fullname} onChange={handleChange}
          name='fullname'
          className={`${errors.fullname && 'inputError'}`} />
        {errors.fullname && <p className='error'>{errors.fullname}</p>}
      </FormGroup>
      <FormGroup>
        <Label>BirthDate</Label>
        <Input type='date' name='birthdate'
          placeholder='Enter BirthDate'
          value={values.birthdate} onChange={handleChange}
          name='birthdate'
          className={`${errors.birthdate && 'inputError'}`}
        />
        {errors.birthdate && <p className='error'>{errors.birthdate}</p>
          && <span role='alert' className='error'>BirthDate is required</span>}
      </FormGroup>
      <FormGroup>
        <Label>Address</Label>
        <Input type='textarea' name='address'
          placeholder='Enter Address'
          value={values.address} onChange={handleChange}
          name='address'
          className={`${errors.address && 'inputError'}`} />
        {errors.address && <p className='error'>{errors.address}</p>}
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Select College Name</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect" onChange={handleChange}>
          
          <option value='' disabled hidden>College List</option>
          {values.college &&
            values.college.map((col, index) => {
              return <option value={col.name} key={index + 1}>{col.name}</option>
            })
          }
        
          </Input>
        </Col>
        {errors.college && <p className='error'>{errors.college}</p>}
      </FormGroup>
      <FormGroup tag="fieldset">
        <Label>Please Select Gender</Label>
        <FormGroup>
          <Label>
            <Input type='radio' name='gender'
              onChange={handleChange}
              value='Male'
              checked={values.gender === "Male"}
            />
            Male
          </Label>
        </FormGroup>
        <FormGroup>
          <Label >
            <Input type='radio' name='gender'
              onChange={handleChange}
              value='Female'
              checked={values.gender === "Female"} />
            Female
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Input type='radio' name='gender'
              onChange={handleChange}
              value='Other'
              checked={values.gender === 'Other'} />
          Other
          </Label>
        </FormGroup>
        {errors.gender && <p className='error'>{errors.gender}</p>}
      </FormGroup>
      <FormGroup>
        <FormGroup>
        <Input type="checkbox" name="travelling" value='travelling' id="exampleCheck" onChange={handleCheckboxChange}/>
        <Label for="exampleCheck">Travelling</Label>
      </FormGroup>
      <FormGroup>
        <Input type="checkbox" name="raeding" value='raeding' id="exampleCheck" onChange={handleCheckboxChange}/>
        <Label for="exampleCheck">Reading</Label>
      </FormGroup>
      <FormGroup>
        <Input type="checkbox" name="gaming" value='gaming' id="exampleCheck" onChange={handleCheckboxChange}/>
        <Label for="exampleCheck">Gaming</Label>
      </FormGroup>
      {errors.hobbies && <p className='error'>{errors.hobbies}</p>}
      </FormGroup>
      {values.hobbies && values.hobbies.map((hobby, index) => {
        return <p key={index}>{hobby}</p>
      })}
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default AddUser

