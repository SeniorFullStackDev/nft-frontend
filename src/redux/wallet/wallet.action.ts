import { CollectionType } from 'helpers/types';
import { createAction } from 'redux-act';

export const connectWalletSaga: any = createAction('connectWalletSaga');
export const signInRequestSaga: any = createAction('signInRequestSaga');
export const getCollectionsSaga: any = createAction('getCollectionsSaga');

export const setAccount: any = createAction('setAccount', (account:string) => ({ account }));
export const setCollections: any = createAction('setCollections', (collections:CollectionType[]) => ({ collections }));
