import React, { useState } from 'react';
import { Grid, Card, CardContent, Button, Typography, CardActions, CardMedia } from '@material-ui/core';
import CustomButton from 'components/Buttons/CustomButton';
import CreateNFTDialog from 'components/CreateCollectionDialog';
import { CollectionType } from 'helpers/types';
import { useStyle } from './style';

interface Props {
  data: CollectionType
}
const CollectoinCard = ({ data }:Props) => {
  const classes = useStyle();
  const { collection_logo, collection_name, collection_description } = data;
  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia
          className={classes.media}
          image={collection_logo}
          title={collection_name}
        />
        {collection_name}
      </CardContent>
    </Card>
  );
};

export default CollectoinCard;
