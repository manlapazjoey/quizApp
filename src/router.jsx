import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthLayout from './layouts/authLayout';
import BaseLayout from './layouts/baseLayout';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/mainLayout';
import LandingPage from './pages/LandingPage';
import Exam from './pages/Exam';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="dashboard" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="exam" element={<Exam />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
