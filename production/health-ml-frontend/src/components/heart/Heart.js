import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { HeartForm } from './HeartForm';
import { Prediction } from './Prediction';


export const Heart = () => {
    const [values, handleInputChange, handleFloatChange, reset] = useForm({
        heartAge: "",
        heartSex: "M",
        heartPain: "ASY",
        heartBloodPreassure: "",
        heartCholesterol: "",
        heartBloodSugar: "0",
        heartRestingEcg: "Normal",
        heartMaxHr: "",
        heartAngina: "N",
        heartOldPeak: "",
        heartSlope: "Flat",
    })

    const [submitValues, setSubmitValues] = useState({
        heartAge: 0,
        heartSex: "M",
        heartPain: "ASY",
        heartBloodPreassure: 0,
        heartCholesterol: 0,
        heartBloodSugar: 0,
        heartRestingEcg: "Normal",
        heartMaxHr: 0,
        heartAngina: "N",
        heartOldPeak: 0,
        heartSlope: "Flat",
    });
    const [requested, setRequested] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setSubmitValues({...values});
        setRequested(true);
    };

    return (
        <div className='container p-2'>
            <div className='row'>
                <div className='col-6 p-1'>
                    <HeartForm 
                        values={ values }
                        handleInputChange={ handleInputChange }
                        handleOnSubmit={ handleOnSubmit }
                        handleFloatChange={ handleFloatChange }
                        reset={ reset }
                    />
                </div>
                <div className='col-4 p-2'>
                    <Prediction
                        endpoint={ 'api/heart/predict' }
                        values={ submitValues }
                        requested={ requested }
                    />
                </div>
            </div>
        </div>
    )
}
