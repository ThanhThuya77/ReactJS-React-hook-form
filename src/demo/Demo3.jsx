import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ControlInput = ({ label, control, messageErrors }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" {...control} />
      {messageErrors && <span className="error">{messageErrors.message}</span>}
    </div>
  );
};

let render = 1;

export default function Demo1() {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full name is required")
      .min(80, "maxlength 80"),
    age: yup.string().required("Age is required").matches(/^\d+$/, {
      message: "Age must be a number",
      excludeEmptyString: true,
    }),
    phoneNumber: yup
      .string()
      .required("Mobile number is required")
      .min(8, "Must be at least 8 digits"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isDirty, errors },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset({
      fullName: "",
      age: "",
      phoneNumber: "",
      title: "",
      hobby: "",
      developer: "",
    });
  };

  console.log("render", render++);

  return (
    <div className="demo1">
      <div className="center">
        <ControlInput
          label="Full name"
          control={register("fullName")}
          messageErrors={errors.fullName}
        />
        <ControlInput
          label="Age"
          control={register("age")}
          messageErrors={errors.age}
        />
        <ControlInput
          label="Mobile number"
          control={register("phoneNumber")}
          messageErrors={errors.phoneNumber}
        />

        <button
          className="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid || !isDirty}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
