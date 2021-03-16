import { NFTType } from 'helpers/types';
import { createReducer } from 'redux-act';
import * as actions from './wallet.action';

const initialState = {
  account: undefined,
  nftList: [],
};

const reducer:any = {
  [actions.setAccount]: (state: any, data: { account: string }) => {
    const { account } = data;
    return { ...state, account };
  },
  [actions.setNFTList]: (state: any, data: { list: NFTType[] }) => {
    const { list } = data;
    return { ...state, nftList: list };
  },
};

export default createReducer(reducer, initialState);
