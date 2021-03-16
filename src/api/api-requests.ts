import superAgent from 'superagent';
import superAgentIntercept from 'superagent-intercept';
import localStore from 'helpers/localstore';
import config from './config';

const ErrorIntercept = superAgentIntercept((err) => {
  if (err) {
    if (err.status === 401 || err.status === 403) {
      localStore.removeToken();
    }
  }
});

export const getRequest = (route) => {
  console.log('getRequest ===>', route);
  return new Promise((resolve, reject) =>
    superAgent
      .get(route)
      .use(ErrorIntercept)
      .set({
        'Content-Type': 'application/json',
        Authorization: `Bear ${localStore.getToken()}`,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error)),
  );
};

export const postRequest = (route, details) =>
  new Promise((resolve, reject) =>
    superAgent
      .post(route)
      .use(ErrorIntercept)
      .set({
        'Content-Type': 'application/json',
        Authorization: `Bear ${localStore.getToken()}`,
      })
      .send(details)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      }),
  );

export const putRequest = (route, details) =>
  new Promise((resolve, reject) =>
    superAgent
      .put(route)
      .use(ErrorIntercept)
      .set({
        'Content-Type': 'application/json',
        Authorization: `Bear ${localStore.getToken()}`,
      })
      .send(details)
      .then((response) => resolve(response))
      .catch((error) => reject(error)),
  );

export const patchRequest = (route, details) =>
  new Promise((resolve, reject) =>
    superAgent
      .patch(route)
      .use(ErrorIntercept)
      .set({
        'Content-Type': 'application/json',
        Authorization: `Bear ${localStore.getToken()}`,
      })
      .send(details)
      .then((response) => resolve(response))
      .catch((error) => reject(error)),
  );

export const deleteRequest = (route) =>
  new Promise((resolve, reject) =>
    superAgent
      .delete(route)
      .use(ErrorIntercept)
      .set({
        'Content-Type': 'application/json',
        Authorization: `Bear ${localStore.getToken()}`,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error)),
  );

export const uploadRequest = (formData:FormData) =>

  new Promise((resolve, reject) =>
    superAgent
      .post(`${config.baseURL}/upload/file`)
      .send(formData)
      .use(ErrorIntercept)
      .set({
        Authorization: `Bear ${localStore.getToken()}`,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error)));
