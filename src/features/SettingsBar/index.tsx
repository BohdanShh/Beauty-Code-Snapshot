'use client';

import { FC } from 'react';
import { cn } from 'src/lib/utils';
import { Switch } from 'src/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';
import { Input } from 'src/components/ui/input';

import { useSettingsBar } from 'src/features/SettingsBar/useSettingsBar';
import { FONTS, LANGUAGES } from 'src/features/SettingsBar/constants';
import { FontClasses, LanguagesClasses, ThemeClasses } from 'src/types';

import styles from 'src/features/SettingsBar/styles.module.css';
import { FONT_CLASSES, LANGUAGE_CLASSES, THEMES } from 'src/constants';

const SettingsBar: FC = () => {
  const {
    paddingButtons,
    userPreferences,
    isActiveButton,
    handleLanguageChange,
    handleThemeChange,
    handleFontChange,
    handleDarkModeChange,
    handleBackgroundChange,
    handleFontSizeChange,
  } = useSettingsBar();

  return (
    <div className="fixed left-8 top-8 flex flex-col gap-5 max-w-[300px] w-full border-[1px] border-[#464646] p-7 rounded-lg bg-[#191919]">
      <div className={styles.flexItem}>
        <div className={styles.label}>Theme</div>
        <Select onValueChange={handleThemeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder={
                <div className={styles.menuItem}>
                  <div
                    className={cn(
                      'w-4 h-4 rounded-full',
                      THEMES[userPreferences.theme as keyof ThemeClasses].background
                    )}
                  />
                  <div>{THEMES[userPreferences.theme as keyof ThemeClasses].text}</div>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Object.entries(THEMES).map(([key, { text, background }]) => (
                <SelectItem value={key} key={text}>
                  <div className={styles.menuItem}>
                    <div className={cn('w-4 h-4 rounded-full', background)} />
                    <div>{text}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Background</div>
        <Switch
          defaultChecked
          checked={userPreferences.background}
          onCheckedChange={handleBackgroundChange}
        />
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Dark mode</div>
        <Switch
          defaultChecked
          checked={userPreferences.darkMode}
          onCheckedChange={handleDarkModeChange}
        />
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Padding</div>
        <div className="flex items-center gap-3 text-sm">
          {paddingButtons.map(({ classNames, id, value, onClick }) => (
            <button
              className={cn(classNames, isActiveButton(value) ? styles.active : '')}
              onClick={() => onClick(value)}
              key={id}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Language</div>
        <Select onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue
              placeholder={LANGUAGE_CLASSES[userPreferences.language as keyof LanguagesClasses]}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {LANGUAGES.map(({ value, id, text }) => (
                <SelectItem value={value} key={id}>
                  {text}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Font</div>
        <Select onValueChange={handleFontChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={FONT_CLASSES[userPreferences.font as keyof FontClasses]} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {FONTS.map(({ value, id, text }) => (
                <SelectItem value={value} key={id}>
                  {text}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={styles.flexItem}>
        <div className={styles.label}>Font size</div>
        <Input
          className="w-[180px]"
          type="number"
          min={12}
          max={24}
          value={userPreferences.fontSize}
          onChange={handleFontSizeChange}
        />
      </div>
      <div className={styles.flexItem}>
        <button className="h-full rounded-lg text-[#ee5e5e] p-1 bg-[#ee5e5e2d] transition-all duration-200 hover:bg-[#ee5e5e54]">
          Export
        </button>
      </div>
    </div>
  );
};

export default SettingsBar;
