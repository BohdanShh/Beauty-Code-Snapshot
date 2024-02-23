import { ReactNode } from 'react';

import { FONT_CLASSES, LANGUAGE_CLASSES, THEMES } from 'src/constants';

export type ReactChildren = {
  children?: ReactNode;
};

export type Theme = keyof typeof THEMES;

export type Language = keyof typeof LANGUAGE_CLASSES;

export type Font = keyof typeof FONT_CLASSES;
