import React from "react";
import FooterIcon from "./FooterIcon";
import LinkedIn from "../../assets/projects-pics/linkedin.png"

function Footer() {
return (
<ul className="logos">
<FooterIcon iconImage={LinkedIn}
url="https://www.linkedin.com/in/emmanuel-garcia-02b288193/"
> 

</FooterIcon>
</ul>
)
}

export default Footer;