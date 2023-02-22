import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/Header';

function MainLayout({ user }) {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div data-testid="main-wrapper">
      <Header />
      <section className="antialiased h-full bg-gray-200">
        <Outlet />
      </section>
    </div>
  );
}

MainLayout.propTypes = {
  user: PropTypes.shape({}),
};

MainLayout.defaultProps = {
  user: null,
};

export default MainLayout;
