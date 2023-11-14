import { SearchParam } from 'src/constants';

import { useUrlManager } from 'src/hooks/useUrlManager';
import { useGetUserPreferences } from 'src/hooks/useGetUserPreferences';

import styles from 'src/features/SettingsBar/styles.module.css';

export const useSettingsBar = () => {
  const { addSearchParam } = useUrlManager();
  const userPreferences = useGetUserPreferences();

  const handlePaddingChange = (value: number): void => {
    addSearchParam(SearchParam.padding, value.toString());

    userPreferences.setPadding(value);
  };

  const handleLanguageChange = (value: string): void => {
    addSearchParam(SearchParam.language, value);

    userPreferences.setLanguage(value);
  };

  const handleThemeChange = (value: string): void => {
    addSearchParam(SearchParam.theme, value);

    userPreferences.setTheme(value);
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
  };
};
