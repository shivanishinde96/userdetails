import React from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col
} from 'reactstrap'
import useForm from '../useForm'
import validate from '../validateInfo'
import '../error1.css'

const AddUser = () => {
  const {handleChange,values,handleSubmit,errors,handleCheckboxChange}=useForm(validate)
  const current = new Date().toISOString().split("T")[0]
  console.log(current)
 
  return (
    <Form onSubmit={handleSubmit} >
      <FormGroup>
        <Label>Name</Label>
        <Input type='text' placeholder='Enter Name'
          value={values.fullname}
          onChange={handleChange}
          name='fullname' 
          autoComplete='off'
        />
        {errors.fullname && <p className='error'>{errors.fullname}</p>}
        
      </FormGroup>
      <FormGroup>
        <Label>BirthDate</Label>
        <Input type='date'
          placeholder='Enter BirthDate'
          value={values.birthdate} onChange={handleChange}
          name='birthdate'
          max={current}
        />
        {errors.birthdate && <p className='error'>{errors.birthdate}</p>}
      </FormGroup>
      <FormGroup>
        <Label>Address</Label>
        <Input type='textarea'
          placeholder='Enter Address'
          value={values.address} onChange={handleChange}
        
          name='address' />
          {errors.address && <p className='error'>{errors.address}</p>}
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Select College Name</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect" onChange={handleChange}>
            <option value='' disabled hidden>College List</option>
            {values.college &&
              values.college.map((col, index) => {
                return <option value={col.name} key={col.name}>{col.name}</option>
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
        <Label>Select Your Hobbies</Label>
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
        {values.hobbies && values.hobbies.map((hobby, index) => {
        return <p key={index}>{hobby.name}</p>
      })}
      </FormGroup>
      {errors.hobbies && <p className='error'>{errors.hobbies}</p>}
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default AddUser
