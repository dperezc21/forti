import {environment} from '../../../environments/environment';

export const FORTI_URL: string = `${environment.FORTI_BASE_URL}/api`;

export const AUTH_LOGIN: string = `${FORTI_URL}/Auth/Login`;
export const REGISTER_USER: string = `${FORTI_URL}/auth/register`;
