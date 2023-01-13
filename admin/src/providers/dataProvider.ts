import postgrestRestProvider from '@promitheus/ra-data-postgrest';
import { fetchUtils } from 'react-admin';

export const dataprovider = postgrestRestProvider('http://localhost:8000/rest/v1', (url: string, options: fetchUtils.Options | undefined) => {
    options?.headers?.set('apikey', '');
    options?.headers?.set('authorization', 'Bearer ');
    return fetchUtils.fetchJson(url, options);
  })