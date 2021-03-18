import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Button, Typography, CardActions } from '@material-ui/core';
import CustomButton from 'components/Buttons/CustomButton';
import CreateNFTDialog from 'components/CreateNFTDialog';
import NFTCard from 'components/NFTCard';
import useWallet from 'redux/wallet/wallet.hook';
import { useStyle } from './style';

const CollectionPage = () => {
  const classes = useStyle();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { wallet } = useWallet();

  return (
    <Grid>
      <h1>Collection Page</h1>
      <Grid className={classes.cardList} spacing={2} container>
        <Grid item>
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
        </Grid>
        {
        wallet.nftList.map((item, index) => <Grid item><NFTCard data={item} /></Grid>)
      }

        <CreateNFTDialog open={openDialog} onClose={() => { setOpenDialog(false); }} />
      </Grid>
    </Grid>
  );
};

export default CollectionPage;
