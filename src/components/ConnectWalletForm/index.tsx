import React, { ReactElement, useEffect, useState } from 'react';
import CustomButton from 'components/Buttons/CustomButton';

import MetaMaskLogo from 'assets/image/metamask.png';
import useWallet from 'redux/wallet/wallet.hook';
import history from 'redux/history';

import { PATHS } from 'constants/routes';
import { useStyle } from './style';

function ConnectWalletForm() {
  const classes = useStyle();
  const { wallet, connectWallet, requestSign } = useWallet();
  const { account } = wallet;

  useEffect(() => {
    console.log('wallet account ---->', account);
    if (account) {
      history.push(PATHS.COLLECTIONS);
    }
  }, [account]);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <p>Sign in to your wallet.</p>
        <img className={classes.metaMaskWalletLogo} src={MetaMaskLogo} alt="" />
        <div className={classes.walletConnectBtnWrapper}>
          <CustomButton variant="contained" color="primary" onClick={connectWallet}>Sign in</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default ConnectWalletForm;
