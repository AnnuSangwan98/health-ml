import React from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../hooks/useFetch';

export const Prediction = ({ endpoint, values, requested }) => {
    const { data, loading } = useFetch(endpoint, values);

    const getRiskLevel = (prediction) => {
        if (prediction < 0.3) return { level: 'Low', color: 'success' };
        if (prediction < 0.6) return { level: 'Moderate', color: 'warning' };
        return { level: 'High', color: 'danger' };
    };

    return (
        <div className="card border-0 h-100">
            <div className="card-body">
                <h4 className="card-title mb-4">
                    <i className="fas fa-chart-pie me-2"></i>
                    Risk Assessment
                </h4>
                
                {loading && requested && (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2 text-muted">Analyzing patient data...</p>
                    </div>
                )}

                {!loading && requested && data && (
                    <div className="text-center">
                        <div className={`alert alert-${getRiskLevel(data.prediction).color} mb-4`}>
                            <h5 className="mb-2">Risk Level: {getRiskLevel(data.prediction).level}</h5>
                            <h2 className="display-4 mb-0">
                                {(data.prediction * 100).toFixed(1)}%
                            </h2>
                            <small className="text-muted">Probability of Heart Disease</small>
                        </div>

                        <div className="card bg-light">
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">Recommendations:</h6>
                                <ul className="list-unstyled text-start">
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-success me-2"></i>
                                        Regular medical check-ups
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-success me-2"></i>
                                        Maintain healthy lifestyle
                                    </li>
                                    <li className="mb-2">
                                        <i className="fas fa-check-circle text-success me-2"></i>
                                        Monitor blood pressure
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle text-success me-2"></i>
                                        Regular exercise
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {!requested && (
                    <div className="text-center py-5">
                        <i className="fas fa-clipboard-list fa-3x text-muted mb-3"></i>
                        <p className="text-muted">
                            Fill out the form and click "Calculate Risk" to see the prediction
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

Prediction.propTypes = {
    endpoint: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired,
    requested: PropTypes.bool.isRequired
};
