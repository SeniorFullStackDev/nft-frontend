import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Button, Typography, CardActions } from '@material-ui/core';
import CustomButton from 'components/Buttons/CustomButton';
import CreateCollectionDialog from 'components/CreateCollectionDialog';
import CollectionCard from 'components/CollectionCard';
import EditIcon from '@material-ui/icons/Edit';
import CustomIconButton from 'components/Buttons/CustomIconButton';
import IconButton from '@material-ui/core/IconButton';
import useWallet from 'redux/wallet/wallet.hook';
import { useParams } from 'react-router-dom';
import { getCollectionDetail } from 'api/api';
import { CollectionType } from 'helpers/types';
import { useStyle } from './style';

const BannerEditButton = () => {
  const classes = useStyle();
  const handleChange = (selectorFiles: FileList) => {
    console.log('-- handleChange --');
  };
  return (
    <Typography className={classes.bannerEdit} component="span">
      <div className={classes.bannerEditImageInput}>
        <input type="file" accept="image/*" className={classes.imageInput} onChange={(e:any) => handleChange(e.target.files)} />
      </div>
      <span className={classes.bannerEditBtn}><EditIcon /></span>
    </Typography>
  );
};

const CollectionManagerBanner = ({ collectionData }: { collectionData?:CollectionType }) => {
  const classes = useStyle();
  return (
    <Typography className={classes.collectionManagerBanner}>
      <div className={classes.mainView}>
        <BannerEditButton />
      </div>
      <Typography component="div" className={classes.bannerRect}>
        <Typography component="div" className={classes.imageRect}>
          <img src={collectionData?.collection_logo} alt="" />
        </Typography>
      </Typography>
    </Typography>
  );
};

const CollectionMangerViewHeader = ({ collectionData }: { collectionData?:CollectionType }) => {
  const classes = useStyle();

  return (
    <div className={classes.collectionMangerViewHeaderContainer}>
      <div className={classes.collectionImage}>
        <img src={collectionData?.collection_logo} alt="" />
      </div>
      <div className={classes.collectionCategory}>
        <div className={classes.collectionName}>{collectionData?.collection_name}</div>
        <div className={classes.collectionAddress} />
        <div className={classes.collectionDescription}>{collectionData?.collection_description}</div>
        <div className={classes.collectionAction}>
          <span>
            <Button variant="outlined">
              <div className={classes.collectoinHeaderActionBtn}>
                <EditIcon />
                <span>Edit</span>
              </div>
            </Button>
          </span>
          <span>
            <Button variant="outlined">
              <div className={classes.collectoinHeaderActionBtn}>
                <EditIcon />
                <span>Payouts</span>
              </div>
            </Button>
          </span>
          <span>
            <Button variant="outlined">
              <div className={classes.collectoinHeaderActionBtn}>
                <EditIcon />
                <span>Visit</span>
              </div>
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

const CollectionDetail = () => {
  const classes = useStyle();
  const { wallet } = useWallet();
  const { collectonId }:any = useParams();
  const [collectionData, setCollectionData] = useState<CollectionType>();
  useEffect(() => {
    if (collectonId) {
      getCollectionDetail(collectonId)
        .then((res:any) => {
          setCollectionData(res.body);
        }).catch((error) => {
          console.log('error -->', error.message);
        });
    }
  }, [collectonId]);
  return (
    <Grid>
      <h1>Collection Detail Page</h1>
      <Grid className={classes.root} spacing={2} container>
        <Typography component="div" className={classes.collectionManangerContainer}>
          <CollectionManagerBanner collectionData={collectionData} />
          <div className={classes.collectionManagerMain}>
            <CollectionMangerViewHeader collectionData={collectionData} />
          </div>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CollectionDetail;
