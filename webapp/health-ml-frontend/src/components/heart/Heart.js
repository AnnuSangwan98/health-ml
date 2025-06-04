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
        <div className='container-fluid py-4'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card shadow-lg border-0 rounded-lg'>
                        <div className='card-header bg-primary text-white'>
                            <h3 className='mb-0'>Heart Disease Risk Assessment</h3>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-7'>
                                    <HeartForm 
                                        values={values}
                                        handleInputChange={handleInputChange}
                                        handleOnSubmit={handleOnSubmit}
                                        handleFloatChange={handleFloatChange}
                                        reset={reset}
                                    />
                                </div>
                                <div className='col-lg-5'>
                                    <div className='sticky-top' style={{ top: '2rem' }}>
                                        <Prediction
                                            endpoint={'api/heart/predict'}
                                            values={submitValues}
                                            requested={requested}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
