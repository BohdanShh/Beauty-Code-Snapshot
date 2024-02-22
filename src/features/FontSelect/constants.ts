import { FONT_CLASSES } from 'src/constants';
import { FontClasses } from 'src/types';

export const FONTS = Object.keys(FONT_CLASSES).map((value, index) => ({
  value,
  text: FONT_CLASSES[value as keyof FontClasses],
  id: String(index + 1),
}));
