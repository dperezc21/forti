import {environment} from '../../../environments/environment';

export const FORTI_URL_BASE: string = `${environment.FORTI_URL}`;

export const AUTH_LOGIN: string = `${FORTI_URL_BASE}/auth/login`;
export const REGISTER_USER: string = `${FORTI_URL_BASE}/auth/register`;
