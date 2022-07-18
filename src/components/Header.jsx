import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header class="header-area">
                <div class="navbar-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <nav class="navbar navbar-expand-lg">
                                    <Link class="navbar-brand" to="/">
                                        <img src="assets/images/logo.png" alt="Logo" />
                                    </Link>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="toggler-icon"></span>
                                        <span class="toggler-icon"></span>
                                        <span class="toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" class="navbar-nav ml-auto">
                                            <li class="nav-item active">
                                                <a class="page-scroll" href="#home">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="page-scroll" href="#why">Why</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="page-scroll" href="#features">Features</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="page-scroll" href="#screenshots">Screenshots</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="page-scroll" href="#pricing">Contents</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="page-scroll" href="#download">Download</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
