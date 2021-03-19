import React from 'react';
import {
  withStyles,
} from '@material-ui/core/styles';
import Button, { ButtonClassKey, ButtonProps } from '@material-ui/core/Button';

interface Styles extends Partial<Record<ButtonClassKey, string>> {
  backgroundColor?: string;
}

interface Props extends ButtonProps {
  classes: Styles;
}

const CustomIconButton = withStyles(({ custom }) =>
  ({
    root: {
      backgroundColor: custom.colors.button.primary.background,
      //   borderRadius: 12,
      textTransform: 'none',
      color: custom.colors.button.primary.text,
      padding: '8.5px',
      borderColor: custom.colors.button.primary.background,
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
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

export default CustomIconButton;
