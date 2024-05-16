import React from 'react'
import './success.css'
import logo from '../../Assets/mile1-assets/logo.svg'

function Success() {

    return (
        <>
            <div id="success">
                <img src={logo} />
                <div id="successText">
                    TEBRİKLER!
                    <br />
                    SİPARİŞİNİZ ALINDI!
                </div>
            </div>

        </>
    )
}

export default Success