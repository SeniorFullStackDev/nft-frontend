import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyle = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 15,
    },
    wrapper: {
      textAlign: 'center',
      fontSize: '1.8rem',
    },
    metaMaskWalletLogo: {
      width: 150,
      height: 150,
    },
    walletConnectBtnWrapper: {
      padding: '55px 20px 15px',
    },
  }),
);
