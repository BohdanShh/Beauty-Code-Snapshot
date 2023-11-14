import { ReactNode } from 'react';

export type ReactChildren = {
  children?: ReactNode;
};

export type UserPreferencesDefaultValues = {
  width?: number;
  padding?: number;
  background?: boolean;
  theme?: string;
  font?: string;
  language?: string;
  title?: string;
};

export type ThemeClasses = {
  hyper: string;
  oceanic: string;
  cottonCandy: string;
  gotham: string;
};
