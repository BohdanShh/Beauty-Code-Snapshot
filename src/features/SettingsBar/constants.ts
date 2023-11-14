import { THEME_CLASSES } from 'src/constants';
import { ThemeClasses } from 'src/types';

export const THEMES = [
  {
    value: 'hyper',
    text: 'Hyper',
    classNames: THEME_CLASSES['hyper' as keyof ThemeClasses],
    id: '1',
  },
  {
    value: 'oceanic',
    text: 'Oceanic',
    classNames: THEME_CLASSES['oceanic' as keyof ThemeClasses],
    id: '2',
  },
  {
    value: 'cottonCandy',
    text: 'Cotton Candy',
    classNames: THEME_CLASSES['cottonCandy' as keyof ThemeClasses],
    id: '3',
  },
  {
    value: 'gotham',
    text: 'Gotham',
    classNames: THEME_CLASSES['gotham' as keyof ThemeClasses],
    id: '4',
  },
];

export const LANGUAGES = [
  { value: 'bash', text: 'Bash', id: '1' },
  { value: 'c', text: 'C', id: '2' },
  { value: 'cpp', text: 'C++', id: '3' },
  { value: 'csharp', text: 'C#', id: '4' },
  { value: 'clojure', text: 'Clojure', id: '5' },
  { value: 'crystal', text: 'Crystal', id: '6' },
  { value: 'css', text: 'CSS', id: '7' },
  { value: 'diff', text: 'Diff', id: '8' },
  { value: 'dockerfile', text: 'Docker', id: '9' },
  { value: 'elm', text: 'Elm', id: '10' },
  { value: 'elixir', text: 'Elixir', id: '11' },
  { value: 'erlang', text: 'Erlang', id: '12' },
  { value: 'graphql', text: 'GraphQL', id: '13' },
  { value: 'go', text: 'Go', id: '14' },
  { value: 'haskell', text: 'Haskell', id: '15' },
  { value: 'html', text: 'HTML', id: '16' },
  { value: 'java', text: 'Java', id: '17' },
  { value: 'javascript', text: 'JavaScript/JSX', id: '18' },
  { value: 'json', text: 'JSON', id: '19' },
  { value: 'kotlin', text: 'Kotlin', id: '20' },
  { value: 'lisp', text: 'Lisp', id: '21' },
  { value: 'lua', text: 'Lua', id: '22' },
  { value: 'markdown', text: 'Markdown', id: '23' },
  { value: 'matlab', text: 'MATLAB/Octave', id: '24' },
  { value: 'pascal', text: 'Pascal', id: '25' },
  { value: 'plaintext', text: 'Plaintext', id: '26' },
  { value: 'powershell', text: 'Powershell', id: '27' },
  { value: 'objectivec', text: 'Objective C', id: '28' },
  { value: 'php', text: 'PHP', id: '29' },
  { value: 'python', text: 'Python', id: '30' },
  { value: 'ruby', text: 'Ruby', id: '31' },
  { value: 'rust', text: 'Rust', id: '32' },
  { value: 'scala', text: 'Scala', id: '33' },
  { value: 'scss', text: 'SCSS', id: '34' },
  { value: 'sql', text: 'SQL', id: '35' },
  { value: 'swift', text: 'Swift', id: '36' },
  { value: 'toml', text: 'TOML', id: '37' },
  { value: 'typescript', text: 'TypeScript/TSX', id: '38' },
  { value: 'xml', text: 'XML', id: '39' },
  { value: 'yaml', text: 'YAML', id: '40' },
];

export const FONTS = [];
