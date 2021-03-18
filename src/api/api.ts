import { CollectionType, User } from 'helpers/types';
import { getRequest, postRequest, putRequest, uploadRequest } from './api-requests';
import config from './config';

export const uploadFile = (file:any) => {
  const formData = new FormData();
  formData.append('file', file);
  return uploadRequest(formData);
};

export const createCollection = (collectionData: CollectionType) => postRequest(`${config.baseURL}/collections/create`, collectionData);
export const signInRequest = (account: User) => putRequest(`${config.baseURL}/auth/signIn`, account);
export const getCollections = () => getRequest(`${config.baseURL}/collections/all`);
export const getCollectionDetail = (payload) => getRequest(`${config.baseURL}/collections/detail?collection_id=${payload}`);
