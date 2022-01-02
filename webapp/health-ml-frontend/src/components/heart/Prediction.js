import React from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../hooks/useFetch';

export const Prediction = ({ endpoint, values, requested }) => {
    const { data, loading } = useFetch(endpoint, values);

    return (
        <div>
            <h2 className="d-flex justify-content-center">Prediction:</h2><br/>
            {
                (!loading && requested) && 
                    <p className="d-flex justify-content-center">
                        { (data.prediction * 100).toFixed(2) }% of having a heart disease
                    </p>
            }
        </div>
    )
}

Prediction.propTypes = {
    endpoint: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired,
    requested: PropTypes.bool.isRequired
};
