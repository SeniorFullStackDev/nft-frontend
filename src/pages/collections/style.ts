import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyle = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 250,
      height: 300,
      textAlign: 'center',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: 'rgb(0 0 0 / 14%) 0px 4px 2px 0px, rgb(0 0 0 / 12%) 0px 3px 5px 0px, rgb(0 0 0 / 20%) 0px 5px 1px -2px',
      },
    },
    title: {
      marginBottom: '12px',
    },
    createBtn: {
      padding: '8px 36px',
    },
    createNFTContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%',
    },
  }),
);
