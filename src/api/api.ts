import { NFTType, User } from 'helpers/types';
import { getRequest, postRequest, putRequest, uploadRequest } from './api-requests';
import config from './config';

export const uploadFile = (file:any) => {
  const formData = new FormData();
  formData.append('file', file);
  return uploadRequest(formData);
};

export const createNFT = (tokenData: NFTType) => postRequest(`${config.baseURL}/nft/create`, tokenData);
export const signInRequest = (account: User) => putRequest(`${config.baseURL}/auth/signIn`, account);
export const getNFTList = () => getRequest(`${config.baseURL}/nft/list`);
