import React from "react";
import { useForm, useController } from "react-hook-form";
// import "./Demo1.scss";

const hobbyData = [
  { name: "Soccer", value: "soccer" },
  { name: "Game", value: "game" },
  { name: "Listen to music", value: "Music" },
  { name: "Reading book", value: "book" },
];

const radioData = [{ value: "Yes" }, { value: "No" }];

const ControlInput = ({ label, control, messageErrors }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" {...control} />
      {messageErrors && <span className="error">{messageErrors.message}</span>}
    </div>
  );
};

function InputUseController({ label, control, name, rules, defaultValue }) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <div>
      <label>{label}</label>
      <input type="text" {...field} />
      {error && <span className="error">{error.message}</span>}
    </div>
  );
}

let render = 1;

export default function Demo1() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isValid, isDirty, errors },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset({
      fullName: "",
      age: "",
      phoneNumber: "",
      title: "",
      hobby: "",
      developer: ""
    });
  };

  console.log("render", render++);

  return (
    <div className="demo1">
      <div className="center">
        <ControlInput
          label="Full name"
          control={register("fullName", {
            required: "Full name is required",
            maxLength: 80,
          })}
          messageErrors={errors.fullName}
        />
        <InputUseController
          label="Age"
          name="age"
          rules={{
            required: "Age is required",
            pattern: {
              value: /^\d+$/,
              message: "Age is a number",
            },
          }}
          defaultValue=""
          control={control}
        />
        {/* <ControlInput
        label="Age"
        control={register("age", {
          required: "Age is required",
          pattern: {
            value: /^\d+$/,
            message: "Age is a number",
          },
        })}
        messageErrors={errors.age}
      /> */}
        <ControlInput
          label="Mobile number"
          control={register("phoneNumber", {
            required: "Mobile number is required",
            maxLength: 11,
            minLength: 8,
          })}
          messageErrors={errors.phoneNumber}
        />
        <label>Title</label>
        <select
          name="Title"
          {...register("title", {
            required: "Title is required",
          })}
        >
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        {errors.title && <span className="error">{errors.title?.message}</span>}

        <label>Hobby</label>
        <ul className="hobbyCheckbox">
          {hobbyData.map((item, key) => (
            <li key={key} className="item">
              <input
                {...register("hobby", {
                  required: "Hobby is required",
                })}
                type="checkbox"
                value={item.value}
                id={item.value}
              />
              <label htmlFor={item.value}>{item.name}</label>
            </li>
          ))}
          {errors.hobby && (
            <span className="error">{errors.hobby?.message}</span>
          )}
        </ul>

        <div className="radio">
          <div className="label inline">Are you a developer?</div>
          {radioData.map((item, key) => (
            <div key={key} className="item inline">
              <input
                type="radio"
                value={item.value}
                id={item.value}
                {...register("developer", {
                  required: "This field is required",
                })}
              />
              <label htmlFor={item.value}>{item.value}</label>
            </div>
          ))}
        </div>
        {errors.developer && (
          <span className="error">{errors.developer?.message}</span>
        )}

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
