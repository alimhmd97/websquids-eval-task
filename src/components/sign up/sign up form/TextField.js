import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='mb-2'>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete='off'
      />
      <ErrorMessage
        component='div'
        name={field.name}
        className='bg-danger text-light p-2'
      />
    </div>
  );
};
