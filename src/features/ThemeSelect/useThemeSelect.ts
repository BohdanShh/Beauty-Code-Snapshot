import { useShallow } from 'zustand/react/shallow';

import { SearchParam } from 'src/constants';
import { useUrlManager } from 'src/hooks/useUrlManager';
import { useUserPreferences } from 'src/store/useUserPreferences';
import { Theme } from 'src/types';

export const useThemeSelect = () => {
  const { addSearchParam } = useUrlManager();

  const { theme, setTheme } = useUserPreferences(
    useShallow(state => ({
      theme: state.theme,
      setTheme: state.setTheme,
    }))
  );

  const handleThemeChange = (value: Theme): void => {
    setTheme(value);

    addSearchParam(SearchParam.THEME, value);
  };

  return { theme, handleThemeChange };
};
