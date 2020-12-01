export default function validateError(values){
    let errors={}
    if(!values.fullname){
        errors.fullname='Name is required'
    }
    else if(!/^[a-zA-Z]{3,}$/.test(values.fullname)){
        errors.fullname='Minimum 3 characters are required'
    }
    if(!values.birthdate){
        errors.birthdate='BirthDate is required'
    }
    if(!values.address){
        errors.address='Address is required'
    }
    else if(!/^[a-zA-Z]{50,200}$/.test(values.address)){
        errors.fullname='Address must contain minimum 50 characters'
    }
    if(!values.college){
        errors.college='College Name is required'
    }
    if(!values.gender){
        errors.gender='This field is required'
    }
    if(!values.hobbies){
        errors.hobbies='This field is required'
    }
    return errors
}

