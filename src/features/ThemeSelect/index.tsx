'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';

import { THEMES } from 'src/constants';
import { cn } from 'src/lib/utils';
import { ThemeClasses } from 'src/types';
import { useThemeSelect } from 'src/features/ThemeSelect/useThemeSelect';

import styles from 'src/features/SettingsBar/styles.module.css';

const ThemeSelect = () => {
  const { theme, handleThemeChange } = useThemeSelect();

  return (
    <Select onValueChange={handleThemeChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={
            <div className={styles.menuItem}>
              <div
                className={cn(
                  'w-4 h-4 rounded-full',
                  THEMES[theme as keyof ThemeClasses].background
                )}
              />
              <div>{THEMES[theme as keyof ThemeClasses].text}</div>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(THEMES).map(([key, { text, background }]) => (
            <SelectItem
              value={key}
              key={text}
            >
              <div className={styles.menuItem}>
                <div className={cn('w-4 h-4 rounded-full', background)} />
                <div>{text}</div>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ThemeSelect;
