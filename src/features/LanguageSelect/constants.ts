import { LANGUAGE_CLASSES } from 'src/constants';
import { Language } from 'src/types';

export const LANGUAGES = (Object.keys(LANGUAGE_CLASSES) as Language[]).map((value, index) => ({
  value,
  text: LANGUAGE_CLASSES[value],
  id: String(index + 1),
}));
