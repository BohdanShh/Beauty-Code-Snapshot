import { makeAutoObservable } from 'mobx';

import { UserPreferencesDefaultValues } from 'src/types';

export class UserPreferences {
  public padding;
  public language;
  public width;
  public title;
  public theme;
  public font;
  public code;
  public darkMode;
  public background;
  public fontSize;

  constructor({
    background,
    font,
    language,
    padding,
    theme,
    width,
    title,
    code,
    darkMode,
    fontSize,
  }: UserPreferencesDefaultValues) {
    makeAutoObservable(this);

    this.padding = padding;
    this.language = language;
    this.width = width;
    this.title = title;
    this.theme = theme;
    this.font = font;
    this.code = code;
    this.darkMode = darkMode;
    this.background = background;
    this.fontSize = fontSize;
  }

  setPadding(value: number): void {
    this.padding = value;
  }

  setLanguage(value: string): void {
    this.language = value;
  }

  setWidth(value: number): void {
    this.width = value;
  }

  setTitle(value: string): void {
    this.title = value;
  }

  setTheme(value: string): void {
    this.theme = value;
  }

  setFont(value: string): void {
    this.font = value;
  }

  setCode(value: string): void {
    this.code = value;
  }

  setDarkMode(value: boolean): void {
    this.darkMode = value;
  }

  setBackground(value: boolean): void {
    this.background = value;
  }

  setFontSize(value: number): void {
    this.fontSize = value;
  }
}
