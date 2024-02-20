import localFont from 'next/font/local';
import { ChangeEvent, useState } from 'react';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';

const hack = localFont({ src: '../../assets/fonts/Hack-Regular.ttf' });
const consolas = localFont({ src: '../../assets/fonts/Consolas-Regular.ttf' });
const cascadiaCode = localFont({ src: '../../assets/fonts/CascadiaCode-Regular.ttf' });

export const useEditor = () => {
  const [editTitleModeEnabled, setEditTitleModeEnabled] = useState<boolean>(false);

  const { addSearchParam, searchParams } = useUrlManager();
  const userPreferences = useUserPreferences();

  const fonts = { hack, consolas, cascadiaCode };

  const handleTitleClick = (): void => setEditTitleModeEnabled(true);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    userPreferences.setTitle(value);

    addSearchParam(SearchParam.TITLE, value);
  };

  const handleBlur = (): void => setEditTitleModeEnabled(false);

  const handleCodeChange = (value: string): void => {
    userPreferences.setCode(value);

    addSearchParam(SearchParam.CODE, btoa(value));
  };

  return {
    editTitleModeEnabled,
    userPreferences,
    fonts,
    searchParams,
    handleTitleClick,
    handleTitleChange,
    handleBlur,
    handleCodeChange,
  };
};
