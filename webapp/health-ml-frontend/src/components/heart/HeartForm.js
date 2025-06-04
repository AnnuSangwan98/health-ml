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
        <div className="card border-0">
            <div className="card-body">
                <h4 className="card-title mb-4">
                    <i className="fas fa-user-md me-2"></i>
                    Patient Information
                </h4>
                <form onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-birthday-cake me-2"></i>
                                Age
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="heartAge"
                                name="heartAge"
                                placeholder="Enter patient's age"
                                value={values.heartAge}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-venus-mars me-2"></i>
                                Sex
                            </label>
                            <select 
                                className="form-select"
                                id="heartSex"
                                name="heartSex"
                                defaultValue={values.heartSex}
                                onChange={handleInputChange}
                            >
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-heartbeat me-2"></i>
                                Chest Pain Type
                            </label>
                            <select 
                                className="form-select"
                                id="heartPain"
                                name="heartPain"
                                defaultValue={values.heartPain}
                                onChange={handleInputChange}
                            >
                                <option value="ASY">Asymptomatic</option>
                                <option value="NAP">Non-Anginal Pain</option>
                                <option value="ATA">Atypical Angina</option>
                                <option value="TA">Typical Angina</option>
                            </select>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-tachometer-alt me-2"></i>
                                Resting Blood Pressure
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="heartBloodPreassure"
                                name="heartBloodPreassure"
                                placeholder="Enter blood pressure (mm Hg)"
                                value={values.heartBloodPreassure}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-vial me-2"></i>
                                Cholesterol
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="heartCholesterol"
                                name="heartCholesterol"
                                placeholder="Enter cholesterol (mg/dl)"
                                value={values.heartCholesterol}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-sugar me-2"></i>
                                Fasting Blood Sugar
                            </label>
                            <select 
                                className="form-select"
                                id="heartBloodSugar"
                                name="heartBloodSugar"
                                defaultValue={values.heartBloodSugar}
                                onChange={handleInputChange}
                            >
                                <option value={0}>Normal</option>
                                <option value={1}>Elevated</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-heartbeat me-2"></i>
                                Resting ECG
                            </label>
                            <select 
                                className="form-select"
                                id="heartRestingEcg"
                                name="heartRestingEcg"
                                defaultValue={values.heartRestingEcg}
                                onChange={handleInputChange}
                            >
                                <option value="Normal">Normal</option>
                                <option value="LVH">Left Ventricular Hypertrophy</option>
                                <option value="ST">ST-T Wave Abnormality</option>
                            </select>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-heart me-2"></i>
                                Max Heart Rate
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="heartMaxHr"
                                name="heartMaxHr"
                                placeholder="Enter max heart rate"
                                value={values.heartMaxHr}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-running me-2"></i>
                                Exercise Angina
                            </label>
                            <select 
                                className="form-select"
                                id="heartAngina"
                                name="heartAngina"
                                defaultValue={values.heartAngina}
                                onChange={handleInputChange}
                            >
                                <option value="N">No</option>
                                <option value="Y">Yes</option>
                            </select>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-chart-line me-2"></i>
                                Old Peak
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                className="form-control"
                                id="heartOldPeak"
                                name="heartOldPeak"
                                placeholder="Enter ST depression"
                                value={values.heartOldPeak}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                <i className="fas fa-chart-line me-2"></i>
                                ST Slope
                            </label>
                            <select 
                                className="form-select"
                                id="heartSlope"
                                name="heartSlope"
                                defaultValue={values.heartSlope}
                                onChange={handleInputChange}
                            >
                                <option value="Flat">Flat</option>
                                <option value="Up">Upsloping</option>
                                <option value="Down">Downsloping</option>
                            </select>
                        </div>
                    </div>

                    <div className="d-flex gap-2 mt-4">
                        <button
                            type='submit'
                            className='btn btn-primary'
                            disabled={submitDisable()}
                        >
                            <i className="fas fa-calculator me-2"></i>
                            Calculate Risk
                        </button>
                        <button
                            type='button'
                            className='btn btn-outline-secondary'
                            onClick={reset}
                        >
                            <i className="fas fa-redo me-2"></i>
                            Reset Form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
