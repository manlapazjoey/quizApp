import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

function AuthLayout({ user }) {
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="antialiased flex justify-center items-center h-full bg-gray-100">
      <Outlet />
    </section>
  );
}

AuthLayout.propTypes = {
  user: PropTypes.shape({}),
};

AuthLayout.defaultProps = {
  user: null,
};

export default AuthLayout;
