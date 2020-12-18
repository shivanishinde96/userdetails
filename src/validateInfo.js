const validateInfo=(values)=>{
    let errors={}
    if(!values.fullname){
        errors.fullname='Fullname is required'
    }
    else if(!/^[a-zA-Z]{3,}$/.test(values.fullname)){
        errors.fullname='Minimum 3 characters are required'
    }

    if(!values.address){
        errors.address='Address is required'
    }

    else if(!/^[a-zA-Z]{50,200}$/.test(values.address)){
       errors.address='Address must contain minimum 50 characters'
    }

    if(!values.birthdate){
        errors.birthdate='Birthdate is required'
    }

    if(!values.gender){
        errors.gender='Gender is required'
    }
    if(!values.college){
        errors.college='Please select a college'
    }
    if(!values.hobbies){
        errors.hobbies='Please select your hobbies'
    }
    return errors
}

export default validateInfo