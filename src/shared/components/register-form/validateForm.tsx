export interface Errors {
    name: String | undefined;
    email: String | undefined;
    referalCode: String | undefined;
    country: String | undefined;
    city: String | undefined;
    switch: boolean | String;
    carType: String | undefined;
};   

export default function validate (formData: any) {

    const errors: Errors = {} as Errors;   
    
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
                errors.name = undefined;
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
                errors.email = undefined;
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
                errors.referalCode = undefined;
            }
        }

    //Country validation
        if (formData.country.current.value === '') {
            errors.country = 'Invalid country';
        }
        else {
            errors.country = undefined;
        }


    //City validation
        if (formData.city.current.value === '') {
            errors.city = 'Invalid city';
        }
        else {
            errors.country = undefined;
        }
        
     //Switch and input validation   
        if (formData.switch.current.checked) {
            if (formData.carType === undefined) {
                errors.carType = 'Select a vehicle type';
            } else {
                errors.switch = undefined;
                errors.carType = undefined;
            }
        } else {
            errors.switch = undefined;
            errors.carType = undefined;
        }

    return errors;
}