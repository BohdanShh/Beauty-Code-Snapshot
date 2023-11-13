import { ChangeEvent, useState } from 'react';
import { SearchParam } from 'src/constants';

import { useGetUserPreferences } from 'src/hooks/useGetUserPreferences';
import { useUrlManager } from 'src/hooks/useUrlManager';

export const useEditor = () => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const { addSearchParam } = useUrlManager();
  const userPreferences = useGetUserPreferences();

  const handleClick = (): void => setEditMode(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value;

    userPreferences.setTitle(value);

    addSearchParam(SearchParam.title, value);
  };

  const handleBlur = (): void => setEditMode(false);

  return { editMode, userPreferences, handleClick, handleChange, handleBlur };
};
