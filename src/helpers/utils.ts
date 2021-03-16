import config from 'api/config';

export const filterAssetLink = (link:string) => {
  if (link) {
    if (!link.includes(config.host)) {
      link = config.host + link;
    }
  }
  return link;
};
