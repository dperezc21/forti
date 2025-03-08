
export interface UserLoginModel {
  email: string;
  password: string;
}

export interface AuthUserResponse {
  email: string,
  lastToken: string,
  role: string | string[],
  issuedAt: Date
}
