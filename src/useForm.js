import {useState,useContext,useEffect} from 'react'
import axios from 'axios'
const useForm=(callback,validateError)=>{
    const [values,setValues]=useState({
        fullname:'',
        birthdate:new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
        address:'',
        college:[],
        gender:'',
        hobbies:[]
      })
      //new state for errors
      const [errors,setErrors]=useState({})
      
      const [isSubmitting,setIsSubmitting]=useState(false)
  
  const handleChange=e=>{
    setValues({
      ...values,[e.target.name]:e.target.value
    })
  }
 
  const handleCheckboxChange = event => {
    let newArray = [...values.hobbies, event.target.id];
    if (values.hobbies.includes(event.target.id)) {
      newArray = newArray.filter(hobby => hobby !== event.target.id);
    }
    setValues({
      hobbies: newArray
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateError(values))
    setIsSubmitting(true)
}
    
useEffect(async (name='Middle') => {
    const response = await axios.get(`http://universities.hipolabs.com/search`,{
        params:{name}
      }
    )
   console.log(response.data)
setValues({ college: response.data })   
  }, [])
  
  useEffect(() => {
    //check to see if there are no errors
    //call our callback
    if(Object.keys(errors).length===0 && isSubmitting){
        callback()
    }  
  }, [errors])
  return {
      handleChange,
      handleCheckboxChange,
      handleSubmit,
      values,errors
  }
}

export default useForm