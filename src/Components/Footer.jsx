import React from "react";

function Footer(){
  return(
      <div className="footer">
      {/*dynamic year*/}
        <p>
          &copy; copyright {new Date().getFullYear()}
        </p>
      </div>
  )
};

export default Footer;
