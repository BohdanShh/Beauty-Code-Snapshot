import { THEME_CLASSES, LANGUAGE_CLASSES, THEME_VALUES } from 'src/constants';
import { LanguagesClasses } from 'src/types';

export const THEMES = Object.keys(THEME_CLASSES).map((value, index) => ({
  value,
  text: value
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
  classNames: THEME_VALUES[value as keyof typeof THEME_CLASSES],
  id: String(index + 1),
}));

export const LANGUAGES = Object.keys(LANGUAGE_CLASSES).map((value, index) => ({
  value,
  text: LANGUAGE_CLASSES[value as keyof LanguagesClasses],
  id: String(index + 1),
}));

export const FONTS = [];
