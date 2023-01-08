import React from "react";
import './app.css';
import {Navbar,Head,Product, Feature,Client} from './components/export';
import { BrowserRouter,Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Head />} />
          <Route path="client" element={<Client />} />
          <Route path="features" element={<Feature />} />
          <Route path="product" element={<Product />} />
          {/* <Route index element={} /> */}
        </Route>
      </Routes>
      {/* <div className="app ">
        <Navbar />
      </div> */}
    </BrowserRouter>
  );
}
