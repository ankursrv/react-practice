import React from 'react'
import { Link } from 'react-router-dom'
const Introduction = () => {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-5xl font-bold mb-5">Material UI - Overview</h1>
                <p className="text-lg">Material UI is an open-source React component library that implements Google's Material Design <br />(material ek component Based library hai jise google ne bnaya hai.)</p>
                <Link to="https://mui.com/material-ui" className="text-pinkPrimary underline font-semibold">Material UI</Link>
            </div>
        </>
    )
}

export default Introduction
