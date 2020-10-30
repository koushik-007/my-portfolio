import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-md fixed-top nav nav-fix navbar-light container mt-2">
        <a class="navbar-brand text-white" href="/about">
           KK
        </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto" style={{color: '#474747'}}>

            <li class="nav-item active">
                <a class="nav-link text-white mr-5" href="/">Home <span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link text-white mr-5" href="#project">Projects</a>
            </li>

            <li class="nav-item">
                <a class="nav-link text-white mr-5" href="/blogs">Blogs</a>
            </li>

            <li class="nav-item">
                <a class="nav-link text-white mr-5" href="/about">About me</a>
            </li>

            <li class="nav-item">
                <a class="nav-link text-white mr-5" href="/contact">Contact</a>
            </li>

            <li class="nav-item">
                <a class="nav-link text-white mr-5 btn-style" href="#">Resume</a>
            </li>

        </ul>
    </div>
</nav>
    );
};

export default Navbar;