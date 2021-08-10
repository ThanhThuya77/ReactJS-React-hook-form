import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import '../demo/styles.scss'

const ControlInput = ({ label, messageErrors, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" {...rest} />
      {messageErrors && <span className="error">{messageErrors}</span>}
    </div>
  );
};

let render = 1;

export default function Form() {

  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    age: yup.string().required("Age is required").matches(/^\d+$/, {
      message: "Age must be a number",
      excludeEmptyString: true,
    }),
    phoneNumber: yup.string().required("Mobile number is required").matches(/^\d+$/, {
      message: "Age must be a number",
      excludeEmptyString: true,
    }).min(8, 'Must be at least 8 digits')
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      phoneNumber: "",
      title: "",
      hobby: "",
      developer: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: schema
  });

  console.log("render", render++);

  return (
    <div className="demo1">
      <div className="center">
        <ControlInput
          label="Full name"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          messageErrors={formik.errors.fullName}
        />
        <ControlInput
          label="Age"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
          messageErrors={formik.errors.age}
        />
        <ControlInput
          label="Mobile number"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          messageErrors={formik.errors.phoneNumber}
        />
        <button
          className="submit"
          onClick={formik.handleSubmit}
          disabled={!formik.isValid}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
