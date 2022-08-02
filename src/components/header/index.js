import React from "react"

import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Products from "../../pages/products/Products";
import Product from "../../pages/products/Product";

import Navigation from "../navigation";
class Header extends React.Component {
    render() {
        return (
            <div className="">
                <div>
                    <Navigation />
                </div>

                <div className=" py-5 min-h-max">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route exact path="/product/:id" element={<Product />} />
                        <Route exact path="/campaign" element={<Products />} />
                        <Route exact path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
              
            </div>
        );
    }
}

export default Header