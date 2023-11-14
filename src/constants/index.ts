import { ThemeClasses } from 'src/types';

export enum SearchParam {
  width = 'width',
  theme = 'theme',
  background = 'background',
  darkMode = 'darkMode',
  padding = 'padding',
  language = 'language',
  font = 'font',
  title = 'title',
}

export const THEME_CLASSES: ThemeClasses = {
  hyper: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
  oceanic: 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600',
  cottonCandy: 'bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400',
  gotham: 'bg-gradient-to-r from-gray-700 via-gray-900 to-black',
};
