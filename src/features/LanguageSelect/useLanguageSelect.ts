import { useShallow } from 'zustand/react/shallow';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';

export const useLanguageSelect = () => {
  const { addSearchParam } = useUrlManager();

  const { language, setLanguage } = useUserPreferences(
    useShallow(state => ({
      language: state.language,
      setLanguage: state.setLanguage,
    }))
  );

  const handleLanguageChange = (value: string): void => {
    setLanguage(value);

    addSearchParam(SearchParam.LANGUAGE, value);
  };

  return { language, handleLanguageChange };
};
