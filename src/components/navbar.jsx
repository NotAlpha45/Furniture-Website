import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href=""> <i className="bi bi-shop"></i> Hatir Furniture</NavLink>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-5 mb-lg-5">

                        </ul>
                        <form className="d-flex">
                            <button type="button" className="btn btn-success">Log in</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
