import { createReducer } from 'redux-act';
import * as actions from './wallet.action';

const initialState = {
  account: undefined,
};

const reducer:any = {
  [actions.setAccount]: (state: any, data: { account: string }) => {
    const { account } = data;
    return { account };
  },
};

export default createReducer(reducer, initialState);
