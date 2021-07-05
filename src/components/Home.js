import React from 'react';
import { Link } from 'react-router-dom'; 

import Patient from './patient.jpg';

function Page() {
    return (
        <div className="h-bg">
            <div className="wrapper">
                <header>
                    <div className="flex-container">
                        <div class="flex-left">
                            <h1>Doctors Revue</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nobis accusantium ducimus eius quae fugiat ab nisi voluptas odit nam assumenda quia dolor, quidem modi magnam vel, ipsam tenetur rerum?</p>
                            <Link to="/calculator"><button>Visit Calculator</button></Link>
                        </div>
                        <div class="flex-right">
                            <div className="image-wrapper">
                                <img src={Patient} alt="Image of a model patient made from plastic" />
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </div>
    )
}

export default Page
