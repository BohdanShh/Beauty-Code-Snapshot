import { LANGUAGE_CLASSES, FONT_CLASSES } from 'src/constants';
import { FontClasses, LanguagesClasses } from 'src/types';

export const LANGUAGES = Object.keys(LANGUAGE_CLASSES).map((value, index) => ({
  value,
  text: LANGUAGE_CLASSES[value as keyof LanguagesClasses],
  id: String(index + 1),
}));

export const FONTS = Object.keys(FONT_CLASSES).map((value, index) => ({
  value,
  text: FONT_CLASSES[value as keyof FontClasses],
  id: String(index + 1),
}));
