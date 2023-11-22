import { ChangeEvent, useState } from 'react';
import { SearchParam } from 'src/constants';

import { useGetUserPreferences } from 'src/hooks/useGetUserPreferences';
import { useUrlManager } from 'src/hooks/useUrlManager';

export const useEditor = () => {
  const [editTitleModeEnabled, setEditTitleModeEnabled] = useState<boolean>(false);

  const { addSearchParam } = useUrlManager();
  const userPreferences = useGetUserPreferences();

  const handleTitleClick = (): void => setEditTitleModeEnabled(true);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    let { value } = event.currentTarget;

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
    handleTitleClick,
    handleTitleChange,
    handleBlur,
    handleCodeChange,
  };
};
