import { Grid, TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";
import NumberFormat from "react-number-format";

export default function ControlledNumberTextField(props) {
  const {
    control,
    name,
    size,
    decimalSeparator = ".",
    fixedDecimalScale = true,
    ...other
  } = props;

  // convert
  // formatCurrencyToNumber utils ->> Number("4,345,354.30".replace(/[^0-9.-]+/g, "")) --> 4345354.3

  return (
    <Grid item xs={size}>
      <Controller
        render={({ field }) => {
          return (
            <NumberFormat
              isAllowed={(values) => {
                const { formattedValue, floatValue } = values;
                if (floatValue == null) {
                  return formattedValue === "";
                } else {
                  return floatValue > 0;
                }
              }}
              decimalScale={decimalSeparator ? 2 : 0}
              decimalSeparator={decimalSeparator}
              allowNegative={false}
              allowEmptyFormatting={false}
              control={control}
              fixedDecimalScale={fixedDecimalScale}
              thousandSeparator={true}
              fullWidth
              InputLabelProps={{
                shrink: true,
                style: {
                  marginBottom: ".5rem",
                },
              }}
              InputProps={{ disableUnderline: true }}
              {...field}
              {...other}
              customInput={TextField}
            />
          );
        }}
        name={name}
        control={control}
      />
    </Grid>
  );
}
