import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layout/MainLayout';
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
]);

export default Routes;