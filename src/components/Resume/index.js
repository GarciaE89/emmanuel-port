import React from "react";
import resume from "../../assets/resume/Emmanuel Resume 08-2021.docx"
function Resume() {
    return (
        <div>
            <div>
                <h1 className="resume-title">
                    Click{""}
                    <span>
                        <a href={resume} download> Here</a>
                    </span>{""}
                    to download a Emmanuel's resume.

                </h1>
            </div>
        </div>
    )
}

export default Resume;