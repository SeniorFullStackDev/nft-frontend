import { postRequest } from './api-requests';

export const uploadFile = (file:any, onUploadProgress) => {
  const formData = new FormData();
  formData.append('file', file);
  return postRequest('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  });
};
