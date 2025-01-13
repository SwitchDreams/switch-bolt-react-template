import React from "react";
import { Route, Routes } from "react-router";

import Index from "../pages/Index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default AppRoutes;
