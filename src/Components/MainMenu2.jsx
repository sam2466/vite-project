import React from 'react'
import Mylink2 from "./MyLink2"

function MainMenu2() {
  return (
    <header>
        <div className="px-3 py-2 text-bg-dark">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <i className="bi bi-bootstrap-fill fs-3"></i>
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                
                <Mylink2 
                    to = "/" 
                    color = "white" 
                    text = "Home" 
                    icon = "house"
                />

                <Mylink2 
                    to = "/about" 
                    color = "white" 
                    text = "Dashboard" 
                    icon = "speedometer2"
                />

                <Mylink2 
                    to = "/todo" 
                    color = "white" 
                    text = "todo" 
                    icon = "list-task"
                />

                <Mylink2 
                    to = "/products" 
                    color = "white" 
                    text = "Products" 
                    icon = "grid"
                />
                
                <Mylink2 
                    to = "/users" 
                    color = "white" 
                    text = "User" 
                    icon = "person-circle"
                />
            </ul>
            </div>
        </div>
        </div>
        <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
            <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>

            <div className="text-end">
                <button type="button" className="btn btn-outline-secondary text-dark me-2">Login</button>
                <button type="button" className="btn btn-outline-primary">Sign-up</button>
            </div>
        </div>
        </div>
    </header>
  )
}

export default MainMenu2