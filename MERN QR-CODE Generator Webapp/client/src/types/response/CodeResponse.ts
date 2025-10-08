import { ICode } from '../Code';

export interface CodeResponse extends ICode {
  name?: string;
  transitions: number;
  user: string;
}
