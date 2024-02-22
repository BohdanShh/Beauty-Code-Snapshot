import localFont from 'next/font/local';
import { ChangeEvent, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';
import { useToast } from 'src/hooks/useToast';

const hack = localFont({ src: '../../assets/fonts/Hack-Regular.ttf', display: 'fallback' });
const consolas = localFont({ src: '../../assets/fonts/Consolas-Regular.ttf', display: 'fallback' });
const cascadiaCode = localFont({
  src: '../../assets/fonts/CascadiaCode-Regular.ttf',
  display: 'fallback',
});

export const useEditor = () => {
  const [editTitleModeEnabled, setEditTitleModeEnabled] = useState<boolean>(false);

  const { toast } = useToast();
  const { addSearchParam, searchParams } = useUrlManager();
  const { setTitle, setCode, ...userPreferences } = useUserPreferences(
    useShallow(state => ({
      setTitle: state.setTitle,
      setCode: state.setCode,
      title: state.title,
      theme: state.theme,
      darkMode: state.darkMode,
      font: state.font,
      language: state.language,
      fontSize: state.fontSize,
      code: state.code,
    }))
  );

  const handleTitleClick = (): void => setEditTitleModeEnabled(true);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    setTitle(value);

    addSearchParam(SearchParam.TITLE, value);
  };

  const handleBlur = (): void => setEditTitleModeEnabled(false);

  const handleCodeChange = (value: string): void => {
    try {
      setCode(value);

      addSearchParam(SearchParam.CODE, btoa(value));
    } catch (error) {
      toast({ description: 'Please, enter text in English!', variant: 'destructive' });
    }
  };

  return {
    editTitleModeEnabled,
    userPreferences,
    fonts: { hack, consolas, cascadiaCode },
    searchParams,
    handleTitleClick,
    handleTitleChange,
    handleBlur,
    handleCodeChange,
  };
};
