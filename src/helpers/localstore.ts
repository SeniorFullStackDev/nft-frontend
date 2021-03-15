import storage from 'store';

const localStore = Object.freeze({
  set: (type, value) => storage.set(type, value),
  get: (type) => storage.get(type),
  remove: (type) => storage.remove(type),
  clear: () => {
    storage.clearAll();
  },
  setToken: (token) => storage.set('auth_token', token),
  getToken: () => storage.get('auth_token'),
  removeToken: () => storage.remove('auth_token'),
});

export default localStore;
