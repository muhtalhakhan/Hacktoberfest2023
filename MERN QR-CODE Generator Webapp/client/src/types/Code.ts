export interface ICode {
  link: string;
  shortLink?: string;
  style: ICodeItemStyle;
  logo: ICodeLogo;
}

export interface ICodeLogo {
  src: string;
}

export interface ICodeItemStyle {
  bgColor: string;
  patternColor: string;
  type: string;
}
