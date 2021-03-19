import React, { useState } from 'react';
import { Grid, Card, CardContent, Button, Typography, CardActions, CardMedia } from '@material-ui/core';
import CustomButton from 'components/Buttons/CustomButton';
import CreateNFTDialog from 'components/CreateCollectionDialog';
import { CollectionType } from 'helpers/types';
import history from 'redux/history';
import { PATHS } from 'constants/routes';
import { useStyle } from './style';

interface Props {
  data: CollectionType
}
const CollectionCard = ({ data }:Props) => {
  const classes = useStyle();
  const { _id, collection_logo, collection_name, collection_description } = data;
  const onClickCard = () => {
    history.push(`${PATHS.COLLECTIONS}/${_id}`);
  };
  return (
    <Card className={classes.root} onClick={onClickCard}>
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

export default CollectionCard;
