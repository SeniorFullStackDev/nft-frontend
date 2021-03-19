import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyle = makeStyles(() =>
  createStyles({
    root: {
    },
    collectionManangerContainer: {
      width: '100%',
      position: 'relative',
    },
    collectionManagerHeader: {

    },
    collectionManagerBanner: {

    },
    mainView: {
      position: 'absolute',
      zIndex: 1,
      right: 10,
      top: 10,
    },
    bannerRect: {
      height: 300,
      minHeight: 120,
      overflow: 'hidden',
    },
    imageRect: {
      height: 600,
      width: '100%',
      webkitBoxAlign: 'center',
      alignItems: 'center',
      display: 'flex',
      '-webkit-box-pack': 'center',
      justifyContent: 'center',
      maxHeight: '100%',
      maxWidth: '100%',
      overflow: 'hidden',
      position: 'relative',
      '& img': {
        objectFit: 'cover',
        height: '100%',
        transition: 'opacity 400ms ease 0s',
        width: '100%',
      },
    },
    bannerEdit: {
      height: 48,
      width: 48,
      border: 'solid 1px #ccc',
      display: 'block',
      position: 'relative',
      backgroundColor: '#FFF',
      borderRadius: 4,
    },
    bannerEditImageInput: {
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
    bannerEditBtn: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    imageInput: {
      cursor: 'pointer',
      height: '100%',
      opacity: 0,
      position: 'absolute',
      width: '100%',
    },

    // collection manager main
    collectionManagerMain: {
      margin: '32px 54px',
    },

    // collection manager header
    collectionMangerViewHeaderContainer: {
      display: 'flex',
    },
    collectionImage: {
      '& img': {
        width: 180,
        height: 180,
      },
    },
    collectionCategory: {
      display: 'flex',
      flexDirection: 'column',
      '-webkit-box-pack': 'justify',
      justifyContent: 'space-between',
      marginLeft: 24,

    },
    collectionName: {
      fontSize: 40,
    },
    collectionDescription: {
      fontSize: 14,
    },
    collectionAddress: {},
    collectionAction: {
      '& > span': {
        marginRight: 10,
      },
    },
    collectoinHeaderActionBtn: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: 10,
      width: 35,
    },
  }),
);
