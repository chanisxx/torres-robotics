import React from 'react';
import {Link} from 'react-router-dom'

function Navigation() {

    return(

        <div className="nav">

            <div className="button">
                <Link className="a" to="/Introduction" href="#intro">Introduction</Link>
                <div className="box"/>
            </div>

            <div className="button">
                <Link className="a" to="/Oct30">October 30th</Link>
                <div className="box"/>
            </div>

            <div className="button">
                <Link className="a" to="/Nov6">November 6th</Link>
                <div className="box"/>
            </div>

            <div className="wrapper">
                <Link className="a" to="/Nov13">November 13th</Link>
                <div className="box"/>
            </div>
          
            <div className="wrapper">
                <Link className="a" to="/Nov20">November 20th</Link>
                <div className="box"/>
            </div>

            <div className="wrapper">
                <Link className="a" to="/Acknowledgement">Acknowledgement</Link>
                <div className="box"/>
            </div>
          
        </div>

    )
};

export default Navigation;