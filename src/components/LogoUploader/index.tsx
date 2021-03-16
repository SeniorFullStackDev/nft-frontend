import { Typography } from '@material-ui/core';
import { uploadFile } from 'api/api';
import { filterAssetLink } from 'helpers/utils';
import React, { useState } from 'react';
import { useStyle } from './style';

interface Props {
  onChangeFile?: (imgLink:string) => void;
}

const LogoUploader = ({ onChangeFile }:Props) => {
  const classes = useStyle();
  const [logoImage, setLogoImage] = useState<string>();
  const handleChange = (selectorFiles: FileList) => {
    uploadFile(selectorFiles[0]).then((res:any) => {
      try {
        const logo = filterAssetLink(res.body.data.link);
        setLogoImage(logo);
        if (onChangeFile) onChangeFile(res.body.data.link);
      } catch (e) {
        console.log('ERROR --->', e.message);
      }
    });
  };
  return (
    <div className={classes.root}>
      <Typography>Logo</Typography>
      <Typography>(350 X 350 recommended)</Typography>
      <Typography className={classes.logoInputWrapper} component="div">
        <Typography className={classes.imageReactContainer} component="div">
          {logoImage && <img src={logoImage} alt="LOGO" />}
          <Typography className={classes.imageInputWrapper} style={{ opacity: (logoImage) ? 0 : 1 }} component="div">
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
