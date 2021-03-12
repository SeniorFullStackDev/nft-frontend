import React from 'react';
import {
  createMuiTheme,
  createStyles,
  withStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Button, { ButtonClassKey, ButtonProps } from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';

interface Styles extends Partial<Record<ButtonClassKey, string>> {
  backgroundColor?: string;
}

interface Props extends ButtonProps {
  classes: Styles;
}

const CustomButton = withStyles(({ custom }) =>
  ({
    root: {
      backgroundColor: custom.colors.button.primary.background,
      //   borderRadius: 12,
      textTransform: 'none',
      color: custom.colors.button.primary.text,
      padding: '8.5px',
      borderColor: custom.colors.button.primary.background,
    },
  }),
)(({ classes, ...props }: Props) => (
  <Button
    classes={{
      root: classes.root,
    }}
    {...props}
  />
));

export default CustomButton;
