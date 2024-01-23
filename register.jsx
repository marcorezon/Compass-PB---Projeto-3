import { useState, useRef } from 'react'
import Media from 'react-media';
import classes from './register.module.css';
import registerImage from '../../../public/registerImage.png';
import validate from './validate';
import isValid from './isValid';
import ModalConfirmRegister from '../../components/ModalRegister/modalRegister';
import FormErrorAlert from '../../components/Alert/formAlert';
import formatFormContent from './formatFormContent';
export default function Register() {

    const [formContent, setFormContent] = useState(
        {
            name: '', 
            subtitle: '',
            type: '', 
            price: '', 
            discount: '', 
            features: '', 
            description: '' 
        }
    )
    const [formValidationErrors, setFormValidationErrors] = useState({name: undefined});
    const [displayModal, setDisplayModal] = useState(false);
    

    function handleInputChange (event) {
        setFormValidationErrors({...formValidationErrors, ...validate(event.target)});

        //Helper Object is being used to prevent delay
        const helperObj = {...formContent, [event.target.name]: event.target.value};
        setFormContent(helperObj);
    }

    function handleSubmit (event) {
        event.preventDefault();
        setFormValidationErrors({...formValidationErrors, ...validate('submit', formContent)});
        if(isValid(formValidationErrors)) {
            setFormContent({...formContent, ...formatFormContent(formContent)});
            setDisplayModal(true);
        }
    }

    function handleModalButtons (command) {
        if(command === 'edit') {
            setDisplayModal(false);
        }
    }

    const rightContainer = (
        <figure className={classes.rightContainer}>
            <img src={registerImage} alt='plant' />
        </figure>
    );


    return (
        <div className={classes.generalContainer}>
            <div className={classes.leftContainer}>
                <p className={classes.formTitle}>Plant registration</p>
                <hr />


                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Plant name
                            <input className={classes.inputField} name="name"  type="text"  placeholder="Echinocereus Cactus" onChange={handleInputChange} maxLength={50}/>
                        </label>            
                        {formValidationErrors.name && <FormErrorAlert style={classes.alert} content={formValidationErrors.name}/>}
                    </div>

                    <div>
                        <label>
                            Plant subtitle
                            <input className={classes.inputField} name="subtitle"  type="text" placeholder="A majestic addition to your plant collection" onChange={handleInputChange} maxLength={70}/>
                        </label>
                        {formValidationErrors.subtitle && <FormErrorAlert style={classes.alert} content={formValidationErrors.subtitle}/>}
                    </div>

                    <div>
                        <label>
                            Plant type
                            <input className={classes.inputField} name="type"  type="text" placeholder="Cactus" onChange={handleInputChange}/>
                        </label>
                        {formValidationErrors.type && <FormErrorAlert style={classes.alert} content={formValidationErrors.type}/>}
                    </div>

                    <div className={classes.inputShorterFieldContainer}>
                        <div>
                            <label>
                                Price
                                <input className={classes.inputShorterField} name="price" type='text' placeholder="$139.99" onChange={handleInputChange}/>
                            </label>
                            {formValidationErrors.price && <FormErrorAlert style={classes.alert} content={formValidationErrors.price}/>}
                        </div>

                        <div>
                            <label>
                                Discount percentage
                                <input className={classes.inputShorterField} name="discount" type='text' placeholder="20%" onChange={handleInputChange}/>
                            </label>
                            {formValidationErrors.discount && <FormErrorAlert style={classes.alert} content={formValidationErrors.discount}/>}
                        </div>
                    </div>

                    <fieldset className={classes.radioFieldset}>
                        <legend>Label:</legend>
                        <label className={classes.radioLabel}>
                            <input type="radio" name="label" className={classes.inputRadio} required />
                            Indoor
                        </label>

                        <label className={classes.radioLabel}>
                            <input type="radio" name="label" className={classes.inputRadio} required />
                            Outdoor
                        </label>
                    </fieldset>

                    <div className={classes.textAreaContainer}>
                        <div>
                            <label>
                                Features
                                <textarea className={classes.inputTextArea} name="features"  placeholder="Species: Echinocereus..." onChange={handleInputChange} maxLength={350}></textarea>
                            </label>
                            {formValidationErrors.features && <FormErrorAlert style={classes.alert} content={formValidationErrors.features}/>}
                        </div>

                        <div>
                            <label>
                                Description
                                <textarea className={classes.inputTextArea} name="description"  placeholder="Ladyfinger cactus..." onChange={handleInputChange} maxLength={350}></textarea>
                            </label>
                            {formValidationErrors.description && <FormErrorAlert style={classes.alert} content={formValidationErrors.description}/>}
                        </div>
                    </div>
                    
                    <button className={classes.registerButton} type="submit">Register</button>
                </form>
            
            </div>

            <Media query="(max-width: 768px)">
                {matches => {
                    return (matches ? undefined : rightContainer);
                }}
            </Media>

            {displayModal &&
                <ModalConfirmRegister
                    formContent={formContent} 
                    handleModalButtons={handleModalButtons} 
                /> 
            }

        </div>

    );
}