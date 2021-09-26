import { Controller } from "react-hook-form";
import { FormControlLabel, Grid, Switch } from "@material-ui/core";

export default function ControlledSwitch({
  size,
  control,
  name,
  label,
  classNameControlLabel,
  labelPlacement,
  handleChange,
  className,
}) {
  return (
    <Grid item xs={size} className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...restFields } }) => (
          <FormControlLabel
            className={classNameControlLabel}
            control={
              <Switch
                color="primary"
                checked={value}
                {...restFields}
                onChange={(e, data) => {
                  onChange(data);
                  if (handleChange) {
                    handleChange(name, data);
                  }
                }}
              />
            }
            label={label}
            labelPlacement={labelPlacement}
          />
        )}
      />
    </Grid>
  );
}
