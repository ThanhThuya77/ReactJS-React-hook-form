import { CircularProgress, Backdrop } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

interface IProps {
  loading: boolean;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
  })
);

export default function Overlay({ loading }: IProps) {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress />
    </Backdrop>
  );
}
