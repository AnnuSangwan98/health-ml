import { useState } from 'react';
import PropTypes from 'prop-types';

export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    };

    const reset = () => {
        setValues(initialState);
    }

    return [values, handleInputChange, reset];
}

useForm.propTypes = {
    initialState: PropTypes.object
};
