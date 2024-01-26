export interface Errors {
    name: String;
    email: String;
    referalCode: String;
    country: String;
    city: String;
    switch: boolean | String;
    carType: String;
};   

export default function validate (formData: any) {

    const errors: Errors= {};   
    
    const noun_pattern =  /^[a-zA-z\s]+$/;

    //Name validation
        if (formData.name.current.value === '') {
            errors.name = 'Invalid name';
        }
        else {
            //Pasting constraint
            if (!noun_pattern.test(formData.name.current.value)) {
                errors.name = 'Invalid name';
            }
            else if(formData.name.current.value.length <= 3) {
                errors.name = 'Minimum number of characters: 4';
            }
            else {
                errors.name = '';
            }
        }

    //Email validation
        if (formData.email.current.value === '') {
            errors.email = 'Invalid email';
        }
        else {
            if (!noun_pattern.test(formData.email.current.value.value)) {
                errors.email = 'Invalid email';
            }
            else if(formData.email.current.value.length <= 3) {
                errors.email = 'Minimum number of characters: 4';
            }
            else {
                errors.email = '';
            }
        }

    //Referal code validation
        if (formData.referalCode.current.value === '') {
            errors.referalCode = 'Invalid code';
        }
        else {
            if (!noun_pattern.test(formData.referalCode.current.value)) {
                errors.referalCode = 'Invalid code';
            }
            else if(formData.referalCode.current.value.length <= 3) {
                errors.referalCode = 'Minimum number of characters: 4';
            }
            else {
                errors.referalCode = '';
            }
        }

    //Country validation
        if (formData.country.current.value === '') {
            errors.country = 'Invalid country';
        }
        else {
            errors.country = '';
        }


    //City validation
        if (formData.city.current.value === '') {
            errors.city = 'Invalid city';
        }
        else {
            errors.country = '';
        }
        
     //Switch and input validation   
        if (formData.switch.current.checked) {
            if (formData.carType === undefined) {
                errors.carType = 'Select a vehicle type';
            } else {
                errors.switch = '';
                errors.carType = '';
            }
        } else {
            errors.switch = '';
            errors.carType = '';
        }

    return errors;
}