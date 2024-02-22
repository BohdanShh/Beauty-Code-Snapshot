'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';

import { LANGUAGE_CLASSES } from 'src/constants';
import { LanguagesClasses } from 'src/types';
import { LANGUAGES } from 'src/features/LanguageSelect/constants';
import { useLanguageSelect } from 'src/features/LanguageSelect/useLanguageSelect';

const LanguageSelect = () => {
  const { language, handleLanguageChange } = useLanguageSelect();

  return (
    <Select onValueChange={handleLanguageChange}>
      <SelectTrigger>
        <SelectValue placeholder={LANGUAGE_CLASSES[language as keyof LanguagesClasses]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {LANGUAGES.map(({ value, id, text }) => (
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

export default LanguageSelect;
