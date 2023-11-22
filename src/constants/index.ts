import { FontClasses, LanguagesClasses, ThemeClasses } from 'src/types';

export enum SearchParam {
  WIDTH = 'width',
  THEME = 'theme',
  BACKGROUND = 'background',
  DARK_MODE = 'darkMode',
  PADDING = 'padding',
  LANGUAGE = 'language',
  FONT = 'font',
  TITLE = 'title',
  CODE = 'code',
  FONT_SIZE = 'fontSize',
}

export const FONT_CLASSES: FontClasses = {
  hack: 'Hack',
  consolas: 'Consolas',
  cascadiaCode: 'Cascadia Code',
};

export const THEMES = {
  hyper: {
    text: 'Hyper',
    background: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
    codeTheme: '',
  },
  oceanic: {
    text: 'Oceanic',
    background: 'bg-gradient-to-br from-green-300 via-blue-500 to-purple-600',
    codeTheme: '',
  },
  cottonCandy: {
    text: 'Cotton Candy',
    background: 'bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400',
    codeTheme: '',
  },
  gotham: {
    text: 'Gotham',
    background: 'bg-gradient-to-br from-gray-700 via-gray-900 to-black',
    codeTheme: '',
  },
  blueSteel: {
    text: 'Blue Steel',
    background: 'bg-gradient-to-br from-gray-400 via-gray-600 to-blue-800',
    codeTheme: '',
  },
  hawaii: {
    text: 'Hawaii',
    background: 'bg-gradient-to-br from-green-300 via-yellow-300 to-pink-300',
    codeTheme: '',
  },
  valentine: {
    text: 'Valentine',
    background: 'bg-gradient-to-br from-red-200 to-red-600',
    codeTheme: '',
  },
  witch: {
    text: 'Witch',
    background: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
    codeTheme: '',
  },
  emerald: {
    text: 'Emerald',
    background: 'bg-gradient-to-br from-emerald-500 to-lime-600',
    codeTheme: '',
  },
  blueFlame: {
    text: 'Blue Flame',
    background: 'bg-gradient-to-br from-amber-200 via-violet-600 to-sky-900',
    codeTheme: '',
  },
};

export const LANGUAGE_CLASSES: LanguagesClasses = {
  bash: 'Bash',
  c: 'C',
  cpp: 'C++',
  csharp: 'C#',
  clojure: 'Clojure',
  crystal: 'Crystal',
  css: 'CSS',
  diff: 'Diff',
  dockerfile: 'Docker',
  elm: 'Elm',
  elixir: 'Elixir',
  erlang: 'Erlang',
  graphql: 'GraphQL',
  go: 'Go',
  haskell: 'Haskell',
  html: 'HTML',
  java: 'Java',
  javascript: 'JavaScript/JSX',
  json: 'JSON',
  kotlin: 'Kotlin',
  lisp: 'Lisp',
  lua: 'Lua',
  markdown: 'Markdown',
  matlab: 'MATLAB/Octave',
  pascal: 'Pascal',
  plaintext: 'Plaintext',
  powershell: 'Powershell',
  objectivec: 'Objective C',
  php: 'PHP',
  python: 'Python',
  ruby: 'Ruby',
  rust: 'Rust',
  scala: 'Scala',
  scss: 'SCS',
  sql: 'SQL',
  swift: 'Swift',
  toml: 'TOML',
  typescript: 'TypeScript/TSX',
  xml: 'XML',
  yaml: 'YAML',
};
