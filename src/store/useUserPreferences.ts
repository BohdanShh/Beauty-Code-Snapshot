import { create } from 'zustand';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { Language, Font, Theme } from 'src/types';

type UserPreferencesStore = {
  padding: number;
  setPadding: (value: number) => void;
  language: Language;
  setLanguage: (value: Language) => void;
  width: number;
  setWidth: (value: number) => void;
  title: string;
  setTitle: (value: string) => void;
  theme: Theme;
  setTheme: (value: Theme) => void;
  font: Font;
  setFont: (value: Font) => void;
  code: string;
  setCode: (value: string) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  background: boolean;
  setBackground: (value: boolean) => void;
  fontSize: number;
  setFontSize: (value: number) => void;
};

export const useUserPreferences = create<UserPreferencesStore>()(set => {
  const { getSearchParam } = useUrlManager();

  return {
    padding: getSearchParam<number>(SearchParam.PADDING, 64),
    setPadding: value => set(() => ({ padding: value })),
    language: getSearchParam<Language>(SearchParam.LANGUAGE, 'javascript'),
    setLanguage: value => set(() => ({ language: value })),
    width: getSearchParam<number>(SearchParam.WIDTH, 520),
    setWidth: value => set(() => ({ width: value })),
    title: getSearchParam<string>(SearchParam.TITLE, 'Untitled-1'),
    setTitle: value => set(() => ({ title: value })),
    theme: getSearchParam<Theme>(SearchParam.THEME, 'hyper'),
    setTheme: value => set(() => ({ theme: value })),
    font: getSearchParam<Font>(SearchParam.FONT, 'hack'),
    setFont: value => set(() => ({ font: value })),
    code: getSearchParam<string>(SearchParam.CODE, "console.log('Hello World!');"),
    setCode: value => set(() => ({ code: value })),
    darkMode: getSearchParam<boolean>(SearchParam.DARK_MODE, true),
    setDarkMode: value => set(() => ({ darkMode: value })),
    background: getSearchParam<boolean>(SearchParam.BACKGROUND, true),
    setBackground: value => set(() => ({ background: value })),
    fontSize: getSearchParam<number>(SearchParam.FONT_SIZE, 16),
    setFontSize: value => set(() => ({ fontSize: value })),
  };
});
