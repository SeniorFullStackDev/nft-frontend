import React, { useState } from 'react';
import { Grid, Card, CardContent, Button, Typography, CardActions, CardMedia } from '@material-ui/core';
import CustomButton from 'components/Buttons/CustomButton';
import CreateNFTDialog from 'components/CreateNFTDialog';
import { NFTType } from 'helpers/types';
import { useStyle } from './style';

interface Props {
  data: NFTType
}
const NFTCard = ({ data }:Props) => {
  const classes = useStyle();
  const { token_logo, token_name, token_description } = data;
  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia
          className={classes.media}
          image={token_logo}
          title={token_name}
        />
        {token_name}
      </CardContent>
    </Card>
  );
};

export default NFTCard;
