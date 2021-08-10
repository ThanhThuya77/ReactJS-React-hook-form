import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

export default function Form() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: { test: [{ firstName: "Nguyen", lastName: "Thuy" }] }, //you can populate the fields by this attribute
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id} style={{ listStyle: "none" }}>
            <input
              {...register(`test.${index}.firstName`)}
              defaultValue={item.firstName} // make sure to set up defaultValue
            />
            <Controller
              render={({ field }) => <input {...field} />}
              name={`test.${index}.lastName`}
              control={control}
              defaultValue={item.lastName} // make sure to set up defaultValue
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append({ firstName: "", lastName: "" })}
      >
        append
      </button>
      <input type="submit" />
    </form>
  );
}
