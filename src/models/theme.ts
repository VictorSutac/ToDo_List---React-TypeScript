export interface Theme {
  name: string;
  colors: {
    backgroundPrimary: string;
    backgroundSecondary: string;

    text: string;
    primary: string;
    card: string;
    border: string;
  };
}

export interface Themes{
  [key: string]: Theme;   
}