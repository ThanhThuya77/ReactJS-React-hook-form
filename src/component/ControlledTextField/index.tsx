import { Grid, TextField, GridSize } from "@material-ui/core";
import { Controller } from "react-hook-form";

export interface Props {
  control: any;
  name: string;
  size: GridSize;
  other: any;
}

/**
 * A Material UI Text Field that is wrapped with React Hook Form's Controller; in short this glues MUI TextField to React Hook Form.
 * This component must be used with react-hook-form. Text field can be used as a textarea/multiline or dropdown/select.
 * Textarea/multiline requires multiline attribute, rows attribute to indicate number of lines in your textarea.
 * Dropdown requires a select attribute and menu items as the children.
 * @param control Object contains methods for registering components into React Hook Form.
 * @param name Input's name being registerd with React Hook Form.
 * @param size The width of the text field where the number can range from 1 to 12, if size isn't provided, then text fields will be full width.
 * @param other props that gets forwarded into the material ui Text Field component
 */
export default function ControlledTextField(props: Props) {
  const { control, name, size, ...other } = props;
  return (
    <Grid item xs={size}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            variant="outlined"
            InputLabelProps={{
              shrink: true,
              style: {
                marginBottom: ".5rem",
              },
            }}
            {...field}
            {...other}
          />
        )}
      />
    </Grid>
  );
}
