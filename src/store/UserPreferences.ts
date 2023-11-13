import { makeAutoObservable } from 'mobx';
import { UserPreferencesDefaultValues } from 'src/types';

export class UserPreferences {
  public padding;
  public language;
  public width;
  public title;

  constructor({
    background,
    font,
    language,
    padding,
    theme,
    width,
    title,
  }: UserPreferencesDefaultValues) {
    makeAutoObservable(this);

    this.padding = padding || 64;
    this.language = language || 'javascript';
    this.width = width || 520;
    this.title = title || 'Untitled-1';
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
}
