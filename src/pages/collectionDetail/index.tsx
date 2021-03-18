import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Button, Typography, CardActions } from '@material-ui/core';
import CustomButton from 'components/Buttons/CustomButton';
import CreateCollectionDialog from 'components/CreateCollectionDialog';
import CollectoinCard from 'components/CollectoinCard';
import useWallet from 'redux/wallet/wallet.hook';
import { useParams } from 'react-router-dom';
import { getCollectionDetail } from 'api/api';
import { useStyle } from './style';

const CollectionDetail = () => {
  const classes = useStyle();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { wallet } = useWallet();
  const { collectonId }:any = useParams();
  useEffect(() => {
    if (collectonId) {
      getCollectionDetail(collectonId)
        .then((res:any) => {
          console.log(res.body);
        }).catch((error) => {
          console.log('error -->', error.message);
        });
    }
  }, [collectonId]);
  return (
    <Grid>
      <h1>Collection Detail Page</h1>
      <Grid className={classes.root} spacing={2} container>
        <h1>Collecton Detail page --- {collectonId}</h1>
        <Typography component="div" />
      </Grid>
    </Grid>
  );
};

export default CollectionDetail;
