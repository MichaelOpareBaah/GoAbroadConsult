import React from 'react';
import NearMeIcon from '@mui/icons-material/NearMe';
import { useFormik } from 'formik';
import { Typography, Box, Container, Grid } from '@mui/material';

const initialValues = {
  email: '',
};
const onSubmit = (values) => {
  console.log('Form data', values);
};
const validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }

  return errors;
};

const Subscribe = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  //console.log('Form values', formik.values);

  return (
    <>
      <Typography variant="h3" align="center" sx={{ paddingBottom: '2rem' }}>
        Subscribe For Update
      </Typography>
      <form action="#" onSubmit={formik.handleSubmit} className="subscribeForm">
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="emailField"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit" className="subscribeBtn">
          <NearMeIcon />
        </button>
        {formik.errors.email ? (
          <div className="errorsMsg">{formik.errors.email}</div>
        ) : null}
      </form>
    </>
  );
};

export default Subscribe;
