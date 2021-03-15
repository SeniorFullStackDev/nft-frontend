import { createAction } from 'redux-act';

export const connectWalletSaga: any = createAction('connectWalletSaga');
export const signInRequestSaga: any = createAction('signInRequestSaga');

export const setAccount: any = createAction('setAccount', (account:string) => ({ account }));
