'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';
import SettingItem from 'src/features/SettingItem';

import { FONT_CLASSES } from 'src/constants';
import { FontClasses } from 'src/types';
import { FONTS } from 'src/features/FontSelect/constants';
import { useFontSelect } from 'src/features/FontSelect/useFontSelect';

const FontSelect = () => {
  const { font, handleFontChange } = useFontSelect();

  return (
    <Select onValueChange={handleFontChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={FONT_CLASSES[font as keyof FontClasses]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {FONTS.map(({ value, id, text }) => (
            <SelectItem
              value={value}
              key={id}
            >
              {text}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FontSelect;
