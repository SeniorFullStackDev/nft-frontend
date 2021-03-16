import { uploadRequest } from './api-requests';

export const uploadFile = (file:any, onUploadProgress) => {
  const formData = new FormData();
  formData.append('file', file);
  return uploadRequest(formData);
};
