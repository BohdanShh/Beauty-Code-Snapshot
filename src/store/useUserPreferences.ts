import { create } from 'zustand';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';

type UserPreferencesStore = {
  padding: number;
  setPadding: (value: number) => void;
  language: string;
  setLanguage: (value: string) => void;
  width: number;
  setWidth: (value: number) => void;
  title: string;
  setTitle: (value: string) => void;
  theme: string;
  setTheme: (value: string) => void;
  font: string;
  setFont: (value: string) => void;
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
  const { url } = useUrlManager();
  const code = url?.searchParams.get(SearchParam.CODE);

  return {
    padding: Number(url?.searchParams.get(SearchParam.PADDING)) || 64,
    setPadding: value => set(() => ({ padding: value })),
    language: url?.searchParams.get(SearchParam.LANGUAGE) || 'javascript',
    setLanguage: value => set(() => ({ language: value })),
    width: Number(url?.searchParams.get(SearchParam.WIDTH)) || 520,
    setWidth: value => set(() => ({ width: value })),
    title: url?.searchParams.get(SearchParam.TITLE) || 'Untitled-1',
    setTitle: value => set(() => ({ title: value })),
    theme: url?.searchParams.get(SearchParam.THEME) || 'hyper',
    setTheme: value => set(() => ({ theme: value })),
    font: url?.searchParams.get(SearchParam.FONT) || 'hack',
    setFont: value => set(() => ({ font: value })),
    code: code ? atob(code) : "console.log('Hello World!');",
    setCode: value => set(() => ({ code: value })),
    darkMode: url?.searchParams.get(SearchParam.DARK_MODE)?.includes('true') ?? true,
    setDarkMode: value => set(() => ({ darkMode: value })),
    background: url?.searchParams.get(SearchParam.BACKGROUND)?.includes('true') ?? true,
    setBackground: value => set(() => ({ background: value })),
    fontSize: Number(url?.searchParams.get(SearchParam.FONT_SIZE)) || 16,
    setFontSize: value => set(() => ({ fontSize: value })),
  };
});
