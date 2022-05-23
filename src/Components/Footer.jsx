import React from "react";
// react functional components
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
// export a single valeu
export default Footer;
