
export interface UserLoginModel {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  email: string,
  lastToken: string,
  "role": string | string[],
  "issuedAt": Date
}
