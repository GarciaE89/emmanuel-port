import React from 'react';

function Nav(props) {
    function clickHandler(page) {
        props.pageSel(page);
    }
    return (
        <header className='flex-row px-1'
            onClick={() => {
                clickHandler("home");
            }}
        >
            <h1>

                <span role="img" aria-label="male technologiest">👨🏽‍💻</span> Emmanuel Garcia

            </h1>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2"
                    style={{
                        color: props.pageSel === "about" ? "#7da4e3" : "blue",
                      }}
                        onClick={() => {
                            clickHandler("about");
                        }}
                    >
                         <span>About Me</span>
                    </li>
                    <li className="mx-2"
                    style={{
                        color: props.pageSel === "contact" ? "#7da4e3" : "blue",
                      }}
                     onClick={() => {
                        clickHandler("Contact");
                    }}
                    >
                        <span>Contact</span>
                    </li>
                    <li className="mx-2"
                    style={{
                        color: props.pageSel === "portfolio" ? "#7da4e3" : "blue",
                      }}
                     onClick={() => {
                        clickHandler("portfolio");
                    }}>
                        <span>Portfolio</span>
                    </li>
                    <li className="mx-2"
                    style={{
                        color: props.pageSel === "resume" ? "#7da4e3" : "blue",
                      }}
                     onClick={() => {
                        clickHandler("resume");
                    }}
                    >
                        <span>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default Nav;