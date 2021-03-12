import React, { ReactElement } from 'react';
// import CustomButton from 'components/Buttons/CustomButton';
import Button from '@material-ui/core/Button';

import MetaMaskLogo from 'assets/image/metamask.png';
import useWallet from 'redux/wallet/wallet.hook';
import { useStyle } from './style';

function ConnectWalletForm() {
  const classes = useStyle();
  const { connectWallet, requestSign } = useWallet();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <p>Sign in to your wallet.</p>
        <img className={classes.metaMaskWalletLogo} src={MetaMaskLogo} alt="" />
        <div className={classes.walletConnectBtnWrapper}>
          <Button variant="contained" color="primary" onClick={connectWallet}>Sign in</Button>
        </div>
      </div>
    </div>
  );
}

export default ConnectWalletForm;
