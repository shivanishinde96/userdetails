import { useState, useEffect, useContext } from 'react'
import { GlobalContext } from './context/GlobalState'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import axios from 'axios'

const useForm = (validate) => {
  const { addUser } = useContext(GlobalContext)
  const history = useHistory()
  const [values, setValues] = useState({
    fullname: '',
    birthdate: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
    address: '',
    gender: '',
    college: [],
    hobbies: []
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    async function fetchData(name) {
      const response = await axios.get(`http://universities.hipolabs.com/search`, {
        params: { name }
      }
      )
      console.log(response.data)
      setValues({ ...values, college: response.data })
    }
    fetchData('Middle')
  }, [])
  const handleCheckboxChange = event => {
    let newArray = [...values.hobbies, event.target.id];
    console.log(newArray)
    if (values.hobbies.includes(event.target.id)) {
      newArray = newArray.filter(hobby => hobby !== event.target.id);
    }
    setValues({
      hobbies: newArray
    })
  }
  const handleChange = e => {
    setValues({
      ...values, [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    //const err=validate()
    //if(!err){

    if (Object.keys(errors).length !== 0) {
      newUser()

    }
    else {
      setErrors(validate(values))
    }
    //}
  }

  const newUser = () => {
    const newwUser = {
      id: uuid(),
      fullname: values.fullname,
      birthdate: values.birthdate,
      address: values.address,
      college: values.college,
      gender: values.gender,
      hobbies: values.hobbies
    }
    addUser(newwUser)
    history.push('/userslist')
  }
  return { handleChange, values, handleSubmit, errors,handleCheckboxChange}
}

export default useForm
