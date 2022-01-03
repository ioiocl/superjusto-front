import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes, BrowserRouter
} from "react-router-dom";
import Index from "./index";
import Home from './home';
import User from './user';
const Webpages = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="home" element={<Home />} />
                <Route path ="/user/:id"  component = {User} />
            </Routes>
        </BrowserRouter>
    );
};

export default Webpages;
