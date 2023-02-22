import React from 'react';
import PropTypes from 'prop-types';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../components/CustomForm';

function Register({ register }) {
  return (
    <div className="flex flex-col items-center justify-center md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Register a new account
          </h1>
          <CustomForm
            initialValues={registerInitialValues}
            onSubmit={register}
            fields={registerFields}
            btnText="Register"
          />
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
