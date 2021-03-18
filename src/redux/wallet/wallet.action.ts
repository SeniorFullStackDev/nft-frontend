import { NFTType } from 'helpers/types';
import { createAction } from 'redux-act';

export const connectWalletSaga: any = createAction('connectWalletSaga');
export const signInRequestSaga: any = createAction('signInRequestSaga');
export const getNFTListSaga: any = createAction('getNFTListSaga');

export const setAccount: any = createAction('setAccount', (account:string) => ({ account }));
export const setNFTList: any = createAction('setNFTList', (list:NFTType[]) => ({ list }));
