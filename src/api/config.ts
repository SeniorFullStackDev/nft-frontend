const settings = {
  protocol: (process.env.NODE_ENV == 'development') ? 'http://' : 'https://',
  host: (process.env.NODE_ENV == 'development') ? 'localhost:8080' : 'api.creatifdevelopment.xyz',
};

export default Object.freeze({
  host: `${settings.protocol}${settings.host}`,
  baseURL: `${settings.protocol}${settings.host}/api`,
});
