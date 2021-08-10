import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";

interface DataType {
  fullName: string;
  select1: string;
  select2: string;
}

const useStyles = makeStyles(() => ({
  container: {
    background: "white",
    flexDirection: "column",
    "& .MuiGrid-item": {
      margin: "16px auto"
    },
    "& .MuiSelect-select": {
      width: 160
    }
  },
  button: {
    marginTop: 16,
  },
}));

export default function Demo2() {
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<DataType>({ mode: "onBlur", defaultValues: { fullName: "",select1: "", select2: "" } });

  const watchSelect1 = watch("select1", "");
  console.log("watchSelect1", watchSelect1);
  

  const handleSave = (data: DataType) => {
    console.log("data", data);
    // save data and call API here
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6}>
        <Controller
          name="fullName"
          control={control}
          rules={{ required: "Full name is required" }}
          render={(
            { field } // field: { onChange, onBlur, value, name, ref }
          ) => (
            <TextField // @material-ui
              label="Full name"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          name="select1"
          control={control}
          rules={{ required: "Select is required" }}
          render={(
            { field } // field: { onChange, onBlur, value, name, ref }
          ) => (
            <TextField // @material-ui
              label="Select 1"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              placeholder="please select one"
              select
              error={!!errors.select1}
              helperText={errors.select1?.message}
              {...field}
            >
              {["1", "2", "3"].map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>
      {watchSelect1 ? (
        <Grid item xs={6}>
          <Controller
            name="select2"
            control={control}
            rules={{ required: "Select2 is required" }}
            render={(
              { field } // field: { onChange, onBlur, value, name, ref }
            ) => (
              <TextField // @material-ui
                label="Select 1"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                select
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
                {...field}
              >
                {["4", "5", "6"].map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
      ) : null}
      <Grid item xs={6}>
        <Button
          onClick={handleSubmit(handleSave)}
          disabled={!isDirty || !isValid}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}
