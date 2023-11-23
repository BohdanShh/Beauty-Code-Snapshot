import { ChangeEvent, RefObject, useCallback } from 'react';
import { toPng } from 'html-to-image';

import { SearchParam } from 'src/constants';

import { useUrlManager } from 'src/hooks/useUrlManager';
import { useGetUserPreferences } from 'src/hooks/useGetUserPreferences';
import { useToast } from 'src/hooks/useToast';

import styles from 'src/features/SettingsBar/styles.module.css';

export const useSettingsBar = (ref: RefObject<HTMLDivElement>) => {
  const { addSearchParam } = useUrlManager();
  const { toast } = useToast();
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

  const handleDownloadCodeImage = useCallback((): void => {
    if (!ref.current) return;

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');

        link.download = `${userPreferences.title}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(console.log);
  }, [ref, userPreferences.title]);

  const handleCopyUrl = (): void => {
    const location = window.location;

    navigator.clipboard
      .writeText(location.href + location.search)
      .then(() => toast({ description: 'URL successfully copied!' }))
      .catch(() =>
        toast({ description: 'Something went wrong. Please, try again!', variant: 'destructive' })
      );
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
    handleDownloadCodeImage,
    handleCopyUrl,
  };
};
