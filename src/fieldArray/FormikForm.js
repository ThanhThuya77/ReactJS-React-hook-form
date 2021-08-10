import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
export default function FriendList() {
  return (
    <div>
      <h1>Friend List</h1>
      <Formik
        initialValues={{ friends: [{ firstName: "Nguyen", lastName: "Thuy" }] }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
        }}
        render={({ values }) => {
          return (
            <Form>
              <FieldArray
                name="friends"
                render={(arrayHelpers) => (
                  <div>
                    {values.friends && values.friends.length > 0 ? (
                      values.friends.map((friend, index) => (
                        <div key={index}>
                          <Field name={`friends.${index}.firstName`} />
                          <Field name={`friends.${index}.lastName`} />

                          <button
                            type="button"
                            onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                          >
                            Add
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            Delete
                          </button>
                        </div>
                      ))
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            firstName: "Nguyen",
                            lastName: "Thuy",
                          })
                        }
                      >
                        {/* show this when user has removed all friends from the list */}
                        Add a friend
                      </button>
                    )}
                    <div>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                )}
              />
            </Form>
          );
        }}
      />
    </div>
  );
}
