import React, { useState, useEffect } from 'react'

function Calculator() {
    const [number1, setNumber1] = useState(75);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);

    useEffect(() => {
        setNumber3(number2 * 52);
    }, [number2]);

    useEffect(() => {
        setNumber4(number1 * number3);
    }, [number1, number3])


    return (
        <div className="wrapper">
            <div className="number-inputs">
                <div className="container fpp">
                    <p htmlFor="patients">Fee per patient:</p>
                    <span><input
                        type="number"
                        value={number1}
                        onChange={(e) => setNumber1(+e.target.value)}
                        min="75"
                    /></span>
                </div>
                <div className="container ppw">
                    <p className="b-text">Patients Per Week:</p>
                    <input
                        type="text"
                        value={number2}
                        onChange={(e) => setNumber2(+e.target.value)}
                        min="0"
                    />
                    <div className="btn-container">
                        <button onClick={()=>setNumber2(number2+1)}>
                            <svg width="27px" height="16px" viewBox="0 0 27 16" version="1.1">
                                <title>8FC3ED36-CD91-493D-97CD-77ADAB5F08C8@2x</title>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                    <g id="Artboard" transform="translate(-418.000000, -108.000000)" stroke="#539F8A" strokeWidth="6">
                                        <polyline id="Path" points="421 121 431.5 111 442 121"></polyline>
                                    </g>
                                </g>
                            </svg></button>
                        <button onClick={()=>{
                            if(number2 >= 1) {
                                setNumber2(number2-1);
                            }
                            }}>
                            <svg width="27px" height="16px" viewBox="0 0 27 16" version="1.1">
                            <title>A97B5024-D742-4A86-8C11-7BAE8F9D9D24@2x</title>
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                <g id="Artboard" transform="translate(-418.000000, -139.000000)" stroke="#003A6B" strokeWidth="6">
                                    <polyline id="Path-Copy" transform="translate(431.500000, 147.000000) rotate(-180.000000) translate(-431.500000, -147.000000) " points="421 152 431.5 142 442 152"></polyline>
                                </g>
                            </g>
                        </svg></button>
                    </div>
                </div>
                <div className="container ppy">
                    <p>Patients Per Year:</p>
                    <p className="currency-font"><span>{number3}</span></p>
                </div>
                <div className="container prpy">
                    <p className="b-text">Patients revenue per year:</p>
                        <p className="currency-font"><span>${number4.toLocaleString()}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Calculator
