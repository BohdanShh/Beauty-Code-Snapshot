import { FONT_CLASSES } from 'src/constants';
import { Font } from 'src/types';

export const FONTS = (Object.keys(FONT_CLASSES) as Font[]).map((value, index) => ({
  value,
  text: FONT_CLASSES[value],
  id: String(index + 1),
}));
