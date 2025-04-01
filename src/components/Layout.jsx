import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import LoginForm from "./LoginForm";

function Layout() {
  return (
    <>
      <BrowserRouter>
        <div>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/dashboard" element={<Dashboard/>} />
           
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Layout;