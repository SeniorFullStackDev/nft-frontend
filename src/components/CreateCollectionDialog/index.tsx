import React, { useState } from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
  FilledInput,
  Paper,
  Link,
  Grid,
  CssBaseline,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import CustomButton from 'components/Buttons/CustomButton';
import LogoUploader from 'components/LogoUploader';
import useWallet from 'redux/wallet/wallet.hook';

import { createCollection } from 'api/api';
import { useStyle } from './style';

const Transition = React.forwardRef((
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) => <Grow in ref={ref} {...props} />);

interface Props {
  open: boolean;
  onClose: ()=>void;
}

export default function CreateCollectionDialog({ open, onClose }:Props) {
  const classes = useStyle();
  const { getCollections } = useWallet();
  const [collectionLogo, setCollectionLogo] = useState('');

  const handleClose = () => {
    onClose();
  };

  const onSubmit = async (values) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(300);
    createCollection({ collection_logo: collectionLogo, ...values })
      .then((res:any) => {
        getCollections();
        onClose();
      })
      .catch((e) => { console.log(e.message); });
  };
  const validate = (values) => {
    const errors:any = {};
    if (!values.collection_name) {
      errors.collection_name = 'Required';
    }
    return errors;
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      // aria-labelledby="alert-dialog-slide-title"
      // aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className={classes.dialogTitle}>
        Create Your collection
        <Typography>
          You can change these values later, along with configuring external URLs, payment options, and trading fees.
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.formContent}>
        <Form
          onSubmit={onSubmit}
          initialValues={{ collection_name: '', collection_description: '' }}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }:any) => (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <LogoUploader onChangeFile={(logo) => setCollectionLogo(logo)} />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="collection_name"
                    component={TextField}
                    type="text"
                    label="Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="collection_description"
                    component={TextField}
                    multiline
                    label="Description"
                  />
                </Grid>
                <Grid item xs={12} style={{ marginTop: 16, textAlign: 'center' }}>
                  <CustomButton
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.createBtn}
                    disabled={submitting}
                  >
                    Create
                  </CustomButton>
                </Grid>
              </Grid>
            </form>
          )}
        />
      </DialogContent>
    </Dialog>
  );
}
