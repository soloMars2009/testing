import React from "react";
import Blog from "./components/Blog";
import Eas from "./components/Eas";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Latest from "./components/Latest";
import MyNavbar from "./components/MyNavbar";
import "./style.css"



function App() {
    return (
        <>
        <MyNavbar />
        <Eas />
        <Blog />
        <Latest />
        <Email />
        <Footer />
        </>
    )
}

export default App;