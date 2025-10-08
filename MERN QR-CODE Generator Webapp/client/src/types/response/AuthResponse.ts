import { IToken } from '../Token';
import { IUser } from '../User';

export interface AuthResponse {
  user: IUser;
  accessToken: IToken;
  refreshToken: string;
}
