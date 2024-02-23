import { useShallow } from 'zustand/react/shallow';
import { useState } from 'react';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';
import { Language } from 'src/types';

export const useLanguageSelect = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { addSearchParam } = useUrlManager();
  const { language, setLanguage } = useUserPreferences(
    useShallow(state => ({
      language: state.language,
      setLanguage: state.setLanguage,
    }))
  );

  const handleLanguageChange = (value: Language): void => {
    setLanguage(value);

    addSearchParam(SearchParam.LANGUAGE, value);
  };

  const handleSelect = (value: string): void => {
    handleLanguageChange(value as Language);
    setOpen(false);
  };

  return { language, open, setOpen, handleSelect };
};
