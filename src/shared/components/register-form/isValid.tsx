import {Errors} from './validateForm'

export default function isValid (formErrors: Errors) {
    let error: String;
    for (error in formErrors) {
        if(formErrors[error] != undefined) {
            return false;
        }
    }
    return true;

    
}