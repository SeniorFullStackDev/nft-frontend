import { CollectionType } from 'helpers/types';
import { createReducer } from 'redux-act';
import * as actions from './wallet.action';

const initialState = {
  account: undefined,
  collections: [],
};

const reducer:any = {
  [actions.setAccount]: (state: any, data: { account: string }) => {
    const { account } = data;
    return { ...state, account };
  },
  [actions.setCollections]: (state: any, data: { collections: CollectionType[] }) => {
    const { collections } = data;
    return { ...state, collections };
  },
};

export default createReducer(reducer, initialState);
