export default function postUserRegister (formRefs) {

    console.log(formRefs);
    
    const valuesObject = {
        name: formRefs.name.current.value,
        email: formRefs.email.current.value,
        country: formRefs.country.current.value,
        city: formRefs.city.current.value,
        referralCode: formRefs.referralCode.current.value,
        driveOwnCar: formRefs.switch.current.checked,
        carType: ((formRefs.switch.current.checked) ? formRefs.carType : '')
    }

    console.log(valuesObject)

    fetch('http://localhost:3000/userData', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(valuesObject)
    }).then()

    return true;
}