import {Errors} from './validateForm'

export default function isValid (formErrors: Errors) {

    let error: String | undefined;
    let errorsCounter: number = 0;

    

    for (error in formErrors) {
        console.log(formErrors[error]);
        if(formErrors[error]) {
            console.log('entedered')
            errorsCounter++;
        }
    }
    
    return (errorsCounter === 0 ? true : false);
}