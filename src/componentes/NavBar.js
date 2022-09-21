import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/' >Rick & Morty</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to='/' >Home</Link>
                    <Link className="nav-link" to='/about' >About</Link>
                    <Link className="nav-link" to='/favorites' >Favorites</Link>
                    {/* <Link className="nav-link" to='/location' >Location</Link>
                    <Link className="nav-link" to='/episode' >Episode</Link> */}
                </div>
            </div>
        </div>
    </nav>
    // <nav class="navbar navbar-dark bg-dark">
    //     <Link to='/'>Home</Link>
    //     <Link to='/about'>About</Link>
    //     <Link to='/favorites'>Favorites</Link>

    // </nav>
  )
}

export default NavBar