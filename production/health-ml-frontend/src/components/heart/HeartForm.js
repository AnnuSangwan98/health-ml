import React from 'react'

export const HeartForm = ({ values, handleInputChange, handleOnSubmit, reset }) => {
    const submitDisable = () => {
        let disable = false;

        for(let key in values) {
            if (values[key] === "") {
                disable = true;
            }
        }

        return disable;
    }

    return (
        <>
            <h2>
                Patient data
            </h2>
            <form onSubmit={ handleOnSubmit }>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        id="heartAge"
                        name="heartAge"
                        placeholder="Age of the patient"
                        value={ values.heartAge }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Sex</label>
                    <select 
                        className="form-select"
                        aria-label="Default select example"
                        id="heartSex"
                        name="heartSex"
                        defaultValue={ values.heartSex }
                        onChange={ handleInputChange }
                    >
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Chess pain type</label>
                    <select 
                        className="form-select"
                        aria-label="Default select example"
                        id="heartPain"
                        name="heartPain"
                        defaultValue={ values.heartPain }
                        onChange={ handleInputChange }
                    >
                        <option value="ASY">ASY</option>
                        <option value="NAP">NAP</option>
                        <option value="ATA">ATA</option>
                        <option value="TA">TA</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Resting blood preassure</label>
                    <input
                        type="number"
                        className="form-control"
                        id="heartBloodPreassure"
                        name="heartBloodPreassure"
                        placeholder="Resting blood preassure"
                        value={ values.heartBloodPreassure }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cholesterol</label>
                    <input
                        type="number"
                        className="form-control"
                        id="heartCholesterol"
                        name="heartCholesterol"
                        placeholder="Cholesterol"
                        value={ values.heartCholesterol }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Fasting blood sugar</label>
                    <select 
                        className="form-select"
                        aria-label="Default select example"
                        id="heartBloodSugar"
                        name="heartBloodSugar"
                        defaultValue={ values.heartBloodSugar }
                        onChange={ handleInputChange }
                    >
                        <option value={ 0 }>No</option>
                        <option value={ 1 }>Yes</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Resting ECG</label>
                    <select 
                        className="form-select"
                        aria-label="Default select example"
                        id="heartRestingEcg"
                        name="heartRestingEcg"
                        defaultValue={ values.heartRestingEcg }
                        onChange={ handleInputChange }
                    >
                        <option value={ "Normal" }>Normal</option>
                        <option value={ "LVH" }>LVH</option>
                        <option value={ "ST" }>ST</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Max heart rate</label>
                    <input
                        type="number"
                        className="form-control"
                        id="heartMaxHr"
                        name="heartMaxHr"
                        placeholder="Max heart rate"
                        value={ values.heartMaxHr }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Excersise angina</label>
                    <select 
                        className="form-select"
                        aria-label="Default select example"
                        id="heartAngina"
                        name="heartAngina"
                        defaultValue={ values.heartAngina }
                        onChange={ handleInputChange }
                    >
                        <option value="N">No</option>
                        <option value="Y">Yes</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Old peak</label>
                    <input
                        type="text"
                        className="form-control"
                        id="heartOldPeak"
                        name="heartOldPeak"
                        placeholder="Old peak"
                        value={ values.heartOldPeak }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Excersise angina</label>
                    <select 
                        className="form-select"
                        aria-label="Default select example"
                        id="heartSlope"
                        name="heartSlope"
                        defaultValue={ values.heartSlope }
                        onChange={ handleInputChange }
                    >
                        <option value="Flat">Flat</option>
                        <option value="Up">Up</option>
                        <option value="Down">Down</option>
                    </select>
                </div>

                <button
                    type='submit'
                    className='btn btn-primary m-1'
                    disabled={ submitDisable() }
                >
                    Predict
                </button>
                <button
                    type='button'
                    className='btn btn-danger m-1'
                    onClick={ reset }
                >
                    Reset
                </button>
            </form>
        </>
    )
}
