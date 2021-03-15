import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyle } from './style';

const LogoUploader = () => {
  const classes = useStyle();
  const handleChange = (selectorFiles: FileList) => {
    console.log(selectorFiles);
  };
  return (
    <div className={classes.root}>
      <Typography>Logo</Typography>
      <Typography>(350 X 350 recommended)</Typography>
      <Typography className={classes.logoInputWrapper}>
        <Typography className={classes.imageReactContainer}>
          {/* <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" alt="LOGO" /> */}
          <Typography className={classes.imageInputWrapper}>
            <input type="file" accept="image/*" className={classes.imageInput} onChange={(e:any) => handleChange(e.target.files)} />
            <span className="material-icons">
              insert_photo
            </span>
          </Typography>
        </Typography>
      </Typography>
    </div>
  );
};

export default LogoUploader;
