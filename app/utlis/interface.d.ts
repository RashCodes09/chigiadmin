interface iHeader {
  logo: string;
  links: string;
  call: string;
  btn: string;
}
export interface iHeaderData extends iHeader, Document {}

interface iHero {
  title: string;
  desc: string;
  started: string;
  titlecolor: string;
  desccolor: string;
  startedcolor: string;
  startedsize: string;
  titlesize: string;
  descsize: string;
}
export interface iHeroData extends iHero, Document {}
