import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

const Nav = () => {
    return(
        <div className="sidebar">
        <Link to="/"> <i className="fa fa-fw fa-home"></i> Home</Link>
        <Link to="/portindex"> <i className="fa fa-fw fa-wrench"></i>Portofolio</Link>
        <Link to="/form"> <i className="fa fa-fw fa-user"></i>Form</Link>
        <Link to="/todolist"> <i className="fa fa-fw fa-envelope"></i>To do list</Link>
    </div>
    )
}

export default Nav;