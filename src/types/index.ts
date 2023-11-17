import { ReactNode } from 'react';

export type ReactChildren = {
  children?: ReactNode;
};

export type UserPreferencesDefaultValues = {
  width: number;
  padding: number;
  background: boolean;
  theme: string;
  font: string;
  language: string;
  title: string;
  code: string;
  darkMode: boolean;
};

export type ThemeClasses = {
  hyper: string;
  oceanic: string;
  cottonCandy: string;
  gotham: string;
  valentine: string;
  blueSteel: string;
  hawaii: string;
  witch: string;
  emerald: string;
  blueFlame: string;
};

export type LanguagesClasses = {
  bash: string;
  c: string;
  cpp: string;
  csharp: string;
  clojure: string;
  crystal: string;
  css: string;
  diff: string;
  dockerfile: string;
  elm: string;
  elixir: string;
  erlang: string;
  graphql: string;
  go: string;
  haskell: string;
  html: string;
  java: string;
  javascript: string;
  json: string;
  kotlin: string;
  lisp: string;
  lua: string;
  markdown: string;
  matlab: string;
  pascal: string;
  plaintext: string;
  powershell: string;
  objectivec: string;
  php: string;
  python: string;
  ruby: string;
  rust: string;
  scala: string;
  scss: string;
  sql: string;
  swift: string;
  toml: string;
  typescript: string;
  xml: string;
  yaml: string;
};

export type FontClasses = {
  hack: string;
  cascadiaCode: string;
  consolas: string;
};
