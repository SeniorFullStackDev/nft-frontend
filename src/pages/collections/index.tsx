import React, { useState } from 'react';
import { Grid, Card, CardContent, Button, Typography, CardActions } from '@material-ui/core';
import CustomButton from 'components/Buttons/CustomButton';
import CreateNFTDialog from 'components/CreateNFTDialog';
import { useStyle } from './style';

const CollectionPage = () => {
  const classes = useStyle();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <Grid>
      <h1>Collection Page</h1>
      <Card className={classes.root}>
        <Typography className={classes.createNFTContent} component="div">
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.title}>
              Create new collection
            </Typography>
            <CustomButton className={classes.createBtn} onClick={() => { setOpenDialog(true); }}>Create</CustomButton>
          </CardContent>
        </Typography>
      </Card>
      <CreateNFTDialog open={openDialog} onClose={() => { setOpenDialog(false); }} />
    </Grid>
  );
};

export default CollectionPage;
