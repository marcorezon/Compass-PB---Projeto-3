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
    
    console.log(errorsCounter);
    console.log(errorsCounter !=0 ? true : false);
    return (errorsCounter !=0 ? true : false);
}