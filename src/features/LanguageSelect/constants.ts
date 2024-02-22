import { LANGUAGE_CLASSES } from 'src/constants';
import { LanguagesClasses } from 'src/types';

export const LANGUAGES = Object.keys(LANGUAGE_CLASSES).map((value, index) => ({
  value,
  text: LANGUAGE_CLASSES[value as keyof LanguagesClasses],
  id: String(index + 1),
}));
