import { SearchParam } from 'src/constants';

import { useUrlManager } from 'src/hooks/useUrlManager';
import { useGetUserPreferences } from 'src/hooks/useGetUserPreferences';

import styles from 'src/features/SettingsBar/styles.module.css';
import { ChangeEvent } from 'react';

export const useSettingsBar = () => {
  const { addSearchParam } = useUrlManager();
  const userPreferences = useGetUserPreferences();

  const handlePaddingChange = (value: number): void => {
    addSearchParam(SearchParam.PADDING, value.toString());

    userPreferences.setPadding(value);
  };

  const handleLanguageChange = (value: string): void => {
    addSearchParam(SearchParam.LANGUAGE, value);

    userPreferences.setLanguage(value);
  };

  const handleThemeChange = (value: string): void => {
    addSearchParam(SearchParam.THEME, value);

    userPreferences.setTheme(value);
  };

  const handleFontChange = (value: string): void => {
    addSearchParam(SearchParam.FONT, value);

    userPreferences.setFont(value);
  };

  const handleDarkModeChange = (value: boolean): void => {
    addSearchParam(SearchParam.DARK_MODE, value.toString());

    userPreferences.setDarkMode(value);
  };

  const handleBackgroundChange = (value: boolean): void => {
    addSearchParam(SearchParam.BACKGROUND, value.toString());

    userPreferences.setDarkMode(value);
  };

  const handleFontSizeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const targetValue = event.currentTarget.value;

    addSearchParam(SearchParam.FONT_SIZE, targetValue);

    userPreferences.setFontSize(Number(targetValue));
  };

  const isActiveButton = (value: number): boolean => value === userPreferences.padding;

  const paddingButtons = [
    { classNames: styles.paddingBtn, value: 16, onClick: handlePaddingChange, id: '1' },
    { classNames: styles.paddingBtn, value: 32, onClick: handlePaddingChange, id: '2' },
    { classNames: styles.paddingBtn, value: 64, onClick: handlePaddingChange, id: '3' },
    { classNames: styles.paddingBtn, value: 128, onClick: handlePaddingChange, id: '4' },
  ];

  return {
    paddingButtons,
    userPreferences,
    isActiveButton,
    handleLanguageChange,
    handleThemeChange,
    handleFontChange,
    handleDarkModeChange,
    handleBackgroundChange,
    handleFontSizeChange,
  };
};
