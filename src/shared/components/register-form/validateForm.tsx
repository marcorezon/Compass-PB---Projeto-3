export interface Errors {
    name: String | undefined;
    email: String | undefined;
    referralCode: String | undefined;
    country: String | undefined;
    city: String | undefined;
    switch: boolean | undefined;
    carType: String | undefined;
};   

export default function validate (formData: any) {

    const errors: Errors = {} as Errors;   
    
    const name_pattern =  /^[a-zA-z\s]+$/;
    const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const referal_pattern = /^[A-Z]{3}-[0-9]{3}$/;


    //Name validation
        if (formData.name.current.value === '') {
            errors.name = 'Invalid name';
        }
        else {
            //Pasting constraint
            if (!name_pattern.test(formData.name.current.value)) {
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
            if (!email_pattern.test(formData.email.current.value)) {
                errors.email = 'Invalid email';
            }
            else {
                errors.email = undefined;
            }
        }

    //Referal code validation
        if (formData.referralCode.current.value === '') {
            errors.referralCode = 'Invalid code';
        }
        else {
            if (!referal_pattern.test(formData.referralCode.current.value)) {
                errors.referralCode = 'Invalid code';
            }
            else {
                errors.referralCode = undefined;
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
        
     //Switch and car type validation   
        if (formData.switch.current.checked === true) {
            console.log(formData.switch.current.checked);
            console.log(formData.cartType);
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