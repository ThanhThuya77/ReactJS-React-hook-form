import { Box, Grid } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import ControlledAutocomplete from "../component/ControlledAutocomplete";

// declare module "@material-ui/core/styles" {
//   interface Theme {
//     custom: {
//       colors: {
//         default: string;
//       };
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       colors: {
//         default: string;
//       };
//     };
//   }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
  custom: {
    colors: {
      default: "#fff",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        // making consistent padding
        padding: "16px",
        backgroundColor: "#fff",
        borderRadius: "4px",
    }
    }
  }
});

export default function Form() {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fruit: "",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box margin="48px">
        <Grid container>
          <ControlledAutocomplete
            size={4}
            name="fruit"
            label="Fruit"
            control={control}
            options={[{ id: 1, name: "Apple" }, { id: 2, name: "Banana" }, { id: 3, name: "strawberry" }]}
            getOptionSelected={(option, value) => option.id === value.id}
            getOptionLabel={(i) => i.name || ""}
            // handleChange={() => {}}
            error={!!errors.fruit}
            helperText={errors.fruit?.message}
          />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
