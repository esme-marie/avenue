import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <nav class="navbar navbar-expand-lg navbar-danger bg-danger">
            <Logo />
            <h1 className="text-white">Avenue</h1>
            <button className="btn btn-danger text-white" onClick={props.newbtn}>New</button>
            <button className="btn btn-danger text-white" onClick={props.logoutbtn}>Log out</button>
        </nav>
    </header>
);

export default toolbar;