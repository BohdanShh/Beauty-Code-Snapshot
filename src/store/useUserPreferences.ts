import { create } from 'zustand';

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

export const useUserPreferences = create<UserPreferencesStore>()((set) => ({
  padding: 64,
  setPadding: (value) => set(() => ({ padding: value })),
  language: 'javascript',
  setLanguage: (value) => set(() => ({ language: value })),
  width: 520,
  setWidth: (value) => set(() => ({ width: value })),
  title: 'Untitled-1',
  setTitle: (value) => set(() => ({ title: value })),
  theme: 'hyper',
  setTheme: (value) => set(() => ({ theme: value })),
  font: 'hack',
  setFont: (value) => set(() => ({ font: value })),
  code: '',
  setCode: (value) => set(() => ({ code: value })),
  darkMode: true,
  setDarkMode: (value) => set(() => ({ darkMode: value })),
  background: true,
  setBackground: (value) => set(() => ({ background: value })),
  fontSize: 16,
  setFontSize: (value) => set(() => ({ fontSize: value })),
}));
