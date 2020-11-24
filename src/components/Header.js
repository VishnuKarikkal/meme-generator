import React from 'react'
import  '../App.css';

export default function Header() {
    return (
        <div className="container-fluid">
            <div className="row header">
                <div className="col-md-2 col-sm-3">
                <img src="https://i.pinimg.com/736x/d4/2a/9b/d42a9bd7d283e658e75f0cb03413fbd8.jpg" alt="header-img" width="50%" height="80px" />
                </div>
                <div className="col-md-9 col-sm-5">
                <h1>The Meme Generator !</h1>
                </div>
            </div>
        </div>
    )
}
