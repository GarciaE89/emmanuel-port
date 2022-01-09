import React from 'react';

function Nav(props) {
    function clickHandler(page) {
        props.pageSel(page);
    }
    return (
        <div className="navbar-main">
        <header className='flex-row'
            onClick={() => {
                clickHandler("home");
            }}
        >
            <h1>

                <span role="img" aria-label="male technologiest">👨🏽‍💻</span> Emmanuel Garcia

            </h1>
            </header>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2"
                    style={{
                        color: props.pageSel === "about" ? "#b7b7a4" : "grayish yellow",
                      }}
                        onClick={() => {
                            clickHandler("about");
                        }}
                    >
                         <span>About Me</span>
                    </li>
                    <li className="mx-2"
                    style={{
                        color: props.pageSel === "contact" ? "#b7b7a4" : "grayish yellow",
                      }}
                     onClick={() => {
                        clickHandler("Contact");
                    }}
                    >
                        <span>Contact</span>
                    </li>
                    <li className="mx-2"
                    style={{
                        color: props.pageSel === "portfolio" ? "#b7b7a4" : "grayish yellow",
                      }}
                     onClick={() => {
                        clickHandler("portfolio");
                    }}>
                        <span>Portfolio</span>
                    </li>
                    <li className="mx-2"
                    style={{
                        color: props.pageSel === "resume" ? "#b7b7a4" : "grayish yellow",
                      }}
                     onClick={() => {
                        clickHandler("resume");
                    }}
                    >
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
            </div>
        
    );
}


export default Nav;