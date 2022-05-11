import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        top: "auto",
        bottom: "0%",
        width: "100%",
        margin: "20px 0px 0px 0px"
    }
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
            <p className='text-center'>
                By IIT Ropar for IIT Ropar
                <br />
                Copyright &copy; Group - 1
            </p>
        </footer>
    )
}