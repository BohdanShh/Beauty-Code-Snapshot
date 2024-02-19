'use client';

import { FC, ForwardedRef, RefObject, forwardRef } from 'react';
import { Link2Icon, ClipboardIcon, ChevronDownIcon } from '@radix-ui/react-icons';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu';

import SettingItem from 'src/features/SettingItem';

import { useSettingsBar } from 'src/features/SettingsBar/useSettingsBar';
import { FONTS, LANGUAGES } from 'src/features/SettingsBar/constants';
import { FontClasses, LanguagesClasses, ThemeClasses } from 'src/types';

import styles from 'src/features/SettingsBar/styles.module.css';
import { FONT_CLASSES, LANGUAGE_CLASSES, THEMES } from 'src/constants';

type SettingsBarProps = {
  ref?: ForwardedRef<HTMLDivElement>;
};

const SettingsBar: FC<SettingsBarProps> = forwardRef((_, ref) => {
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
    handleDownloadCodeAsImage,
    handleCopyCodeAsImage,
    handleCopyUrl,
  } = useSettingsBar(ref as RefObject<HTMLDivElement>);

  return (
    <div className='fixed left-8 top-8 flex flex-col gap-5 max-w-[300px] w-full border-[1px] border-[#464646] p-7 rounded-lg bg-[#191919]'>
      <SettingItem label='Theme'>
        <Select onValueChange={handleThemeChange}>
          <SelectTrigger className='w-[180px]'>
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
      </SettingItem>
      <SettingItem label='Background'>
        <Switch
          defaultChecked
          checked={userPreferences.background}
          onCheckedChange={handleBackgroundChange}
        />
      </SettingItem>
      <SettingItem label='Dark mode'>
        <Switch
          defaultChecked
          checked={userPreferences.darkMode}
          onCheckedChange={handleDarkModeChange}
        />
      </SettingItem>
      <SettingItem label='Padding'>
        <div className='flex items-center gap-3 text-sm'>
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
      </SettingItem>
      <SettingItem label='Language'>
        <Select onValueChange={handleLanguageChange}>
          <SelectTrigger className='w-[180px]'>
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
      </SettingItem>
      <SettingItem label='Font'>
        <Select onValueChange={handleFontChange}>
          <SelectTrigger className='w-[180px]'>
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
      </SettingItem>
      <SettingItem label='Font size'>
        <Input
          className='w-[180px] flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
          type='number'
          min={12}
          max={24}
          value={userPreferences.fontSize}
          onChange={handleFontSizeChange}
        />
      </SettingItem>
      <SettingItem>
        <div className='flex gap-3'>
          <button className={cn('flex-grow', styles.btn)} onClick={handleDownloadCodeAsImage}>
            Export
          </button>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn('w-8 flex items-center justify-center', styles.btn)}
              >
                <ChevronDownIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className='gap-2' onClick={handleCopyCodeAsImage}>
                  <ClipboardIcon />
                  <div>Copy Image</div>
                </DropdownMenuItem>
                <DropdownMenuItem className='gap-2' onClick={handleCopyUrl}>
                  <Link2Icon />
                  <div>Copy URL</div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </SettingItem>
    </div>
  );
});

SettingsBar.displayName = 'SettingsBar';

export default SettingsBar;
