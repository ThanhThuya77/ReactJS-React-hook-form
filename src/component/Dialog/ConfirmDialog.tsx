import React from "react";
import Typography from "@material-ui/core/Typography";
import { Theme, makeStyles } from "@material-ui/core/styles";
import {IButtonColor} from '../Button/ButtonStyles'
import { Dialog } from '@material-ui/core';

interface ButtonProps {
  text: string;
  children?: React.ReactNode;
  color: IButtonColor;
  onClick(): void;
  [x: string]: any;
}

export interface Props {
  title: string;
  message: string;
  size: string;
  open: boolean;
  buttons: ButtonProps[];
  onClose(): void;
}

const useStyles = makeStyles((theme: Theme) => ({
  deleteContent: {
    padding: `${theme.spacing(10)}px 60px`,
  },
}));

export default function ConfirmDialog(props: Props) {
  const classes = useStyles();
  const { size, title, buttons, open, onClose, message } = props;

  return (
    <Dialog
      title={title}
      open={open}
      onClose={onClose}
    >
      <Typography className={classes.deleteContent} variant="body1">
        {message}
      </Typography>
    </Dialog>
  );
}
