import React from 'react'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <i className="fas fa-heartbeat me-2"></i>
                    Heart Disease Risk Assessment
                </a>
            </div>
        </nav>
    )
}
