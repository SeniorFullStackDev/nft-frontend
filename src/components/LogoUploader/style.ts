import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyle = makeStyles(() =>
  createStyles({
    root: {

    },
    logoInputWrapper: {
      borderRadius: 5,
      border: '3px dashed rgb(204, 204, 204)',
      cursor: 'pointer',
      height: 160,
      marginBottom: 20,
      marginTop: 6,
      padding: 4,
      width: 160,
    },
    imageReactContainer: {
      width: '100%',
      height: '100%',
      position: 'relative',
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
    imageInputWrapper: {
      '-webkit-box-align': 'center',
      alignItems: 'center',
      display: 'flex',
      height: '100%',
      width: '100%',
      top: 0,
      '-webkit-box-pack': 'center',
      justifyContent: 'center',
      position: 'absolute',
      '& span': {
        fontSize: 64,
        color: '#ccc',
      },
    },
    imageInput: {
      cursor: 'pointer',
      height: '100%',
      opacity: 0,
      position: 'absolute',
      width: '100%',

    },
  }),
);
