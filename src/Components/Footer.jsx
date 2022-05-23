import React from "react";

function Footer(){
    let fullDate = new Date();
    let fullYear = fullDate.getFullYear();

    return(
       <div className="footer">
        <p>
          copyright{fullYear}
        </p>
       </div>
    )
};

export default Footer;
