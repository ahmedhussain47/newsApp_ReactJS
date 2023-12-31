import React, { Component } from 'react'
export class Navbar extends Component {


    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
                    <div className="container">
                        <a className="navbar-brand" href="/">Insightify</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"> About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
                                </li>


                            </ul>
                            {/* <div className={`form-check form-switch text-${props.moded === 'light' ? 'dark' : 'light'}`}> */}
                            <div className={`form-check form-switch text-light`}>

                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Hola</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar