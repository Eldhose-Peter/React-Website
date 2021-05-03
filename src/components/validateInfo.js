export default function validateInfo(values){
    let errors= {}

    if(!values.username.trim()){
        errors.username = 'Username required'
    }

    if(!values.email){
        errors.email = 'Email required'
    }else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
        errors.email= 'Email address is Invalid'
    }

    if(!values.password){
        errors.password='Password is Required'
    }else if(values.password.length<6){
        errors.password='Passwords needs to be more than 6 characters'
    }

    if(!values.password2){
        errors.password2='Password is Required';
    }else if(values.password2!==values.password){
        errors.password2='Passwords do not match';
    }

    return errors;


}