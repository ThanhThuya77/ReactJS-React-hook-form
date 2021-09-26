import React from "react";
import { Grid, GridSize, TextField, Theme, makeStyles } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Controller } from "react-hook-form";

export interface IProps {
    size: GridSize;
    name: string;
    label: string;
    options: any;
    control: any;
    getOptionSelected: (option: any, value: any) => boolean;
    getOptionLabel: (options: any) => string;
    handleChange?: (data: any) => void;
    error?: boolean;
    helperText?: string;
    classes?: any;
}

const useStyles = makeStyles((theme: Theme) => ({
    autoInputRoot: {
        padding: "0 !important",
    },
    autoInput: {
        padding: `${theme.spacing(2)}px !important`,
    },
}));

/** Material UI Autocomplete that is wrapped with React Hook Form's Controller. The controller glues MUI Autocomplete to React Hook Form.*/
export default function ControlledAutocomplete({
    size,
    name,
    label,
    control,
    options,
    getOptionSelected,
    getOptionLabel,
    handleChange,
    error,
    helperText,
}: IProps) {
    const classes = useStyles();

    return (
        <Grid item xs={size}>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, ...restFields } }) => {
                    return (
                      <Autocomplete
                        classes={{
                          inputRoot: classes.autoInputRoot,
                          input: classes.autoInput,
                        }}
                        options={options}
                        getOptionSelected={getOptionSelected}
                        getOptionLabel={getOptionLabel}
                        renderInput={(params) => (
                          <TextField
                            variant="outlined"
                            label={label}
                            {...params}
                            InputLabelProps={{
                              shrink: true,
                              style: {
                                marginBottom: ".5rem",
                              },
                            }}
                            error={error}
                            helperText={helperText}
                          />
                        )}
                        onChange={(e, data) => {
                          onChange(data);
                          if (handleChange) {
                            handleChange(data);
                          }
                        }}
                        {...restFields}
                      />
                    );
                }}
            />
        </Grid>
    );
}
