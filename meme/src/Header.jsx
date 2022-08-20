import React from "react";

function Header() {
    return (
        <header className="header">
            <img 
            className="header--image" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3l1rcNIV8ByiRpHFplsCypLfDaP89Ri8jSA&usqp=CAU" 
            alt="meme" 
            />
            <p className="header--title">Meme Generator</p>
        </header>
    )
}

export default Header