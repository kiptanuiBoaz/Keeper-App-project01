import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

// importing React components
function App(){
    return(
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  
}
// export to the Root(App)
export default App;