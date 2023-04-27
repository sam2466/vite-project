import React from "react";
import Mylink from "./Mylink";

function MainMenu() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">NUU-TestHome</a>
                    
                    <button className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" 
                            aria-controls="navbarNav" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <Mylink to="/" text="Home" />
                            <Mylink to="/about" text="About" />
                            <Mylink to="/users" text="Users" />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MainMenu